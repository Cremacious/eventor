'use server';

import { auth, currentUser } from '@clerk/nextjs/server';

import { db } from '@/lib/db';
import { formatError } from '../utils';
import { revalidatePath } from 'next/cache';
import { updateDisplayNameSchema } from '../validators';
import { z } from 'zod';

export const checkUser = async () => {
  const user = await currentUser();

  // Check for current logged in clerk user
  if (!user) {
    return null;
  }

  // Check if the user is already in the database
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  // If user is in database, return user
  if (loggedInUser) {
    return loggedInUser;
  }

  // If not in database, create new user
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};

export const getCurrentUserId = async () => {
  const user = await auth();
  if (!user) throw new Error('User not authenticated');
  const userId = user.userId;
  const dbUser = await db.user.findUnique({
    where: {
      clerkUserId: userId ?? undefined,
    },
  });
  if (dbUser === null) return 'Display name not set';
  return dbUser.id;
};

export const getUserDisplayName = async () => {
  const user = await auth();
  if (!user) throw new Error('User not authenticated');
  const userId = user.userId;
  const dbUser = await db.user.findUnique({
    where: {
      clerkUserId: userId ?? undefined,
    },
  });
  if (dbUser === null) return 'Display name not set';
  return dbUser.displayName;
};

export const updateDisplayName = async (
  data: z.infer<typeof updateDisplayNameSchema>
) => {
  try {
    const user = await auth();
    if (!user) throw new Error('User not authenticated');
    const userId = user.userId;
    const dbUser = await db.user.findUnique({
      where: {
        clerkUserId: userId ?? undefined,
      },
    });
    if (!dbUser) throw new Error('User not found in database');
    const userData = updateDisplayNameSchema.parse(data);
    await db.user.update({
      where: {
        clerkUserId: dbUser.clerkUserId,
      },
      data: { displayName: userData.displayName },
    });
    revalidatePath('/dashboard');
    return {
      success: true,
      message: `Display name updated`,
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
};

export const getUserById = async (id: string) => {
  const dbUser = await db.user.findUnique({
    where: {
      id,
    },
  });
  if (!dbUser) throw new Error('User not found in database');
  return dbUser;
};

export async function addFriend(userId: string, friendId: string) {
  try {
    await db.user.update({
      where: { id: userId },
      data: {
        friends: {
          connect: { id: friendId },
        },
      },
    });

    return { success: true, message: 'Friend added successfully' };
  } catch (error) {
    console.error('Error adding friend:', error);
    return { success: false, message: 'Failed to add friend' };
  }
}

export async function checkIfFriend(userId: string, friendId: string) {
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      include: { friends: true },
    });

    if (!user) return false;

    return user.friends.some((friend) => friend.id === friendId);
  } catch (error) {
    console.error('Error checking friendship:', error);
    return false;
  }
}

export async function getFriends(userId: string) {
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      include: { friends: true },
    });

    return user?.friends || [];
  } catch (error) {
    console.error('Error fetching friends:', error);
    return [];
  }
}

export async function getVisibleEvents(userId: string) {
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      include: { friends: true },
    });

    const friendIds = user?.friends.map((friend) => friend.id) || [];

    const events = await db.event.findMany({
      where: {
        OR: [
          { visibility: 'public' },
          { visibility: 'private', userId },
          { visibility: 'friends-only', userId: { in: friendIds } },
        ],
      },
    });

    return events;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

export const addMessageToInbox = async (
  userId: string,
  subject: string,
  content: string
) => {
  try {
    await db.message.create({
      data: {
        userId,
        subject,
        content,
      },
    });
    return { success: true, message: 'Message added to inbox' };
  } catch (error) {
    console.error('Error adding message to inbox:', error);
    return { success: false, message: 'Failed to add message to inbox' };
  }
};

export const getInboxMessages = async (userId: string) => {
  try {
    const messages = await db.message.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    return messages;
  } catch (error) {
    console.error('Error fetching inbox messages:', error);
    return [];
  }
};

export const markMessageAsRead = async (messageId: string) => {
  try {
    await db.message.update({
      where: { id: messageId },
      data: { status: 'read' },
    });
    return { success: true, message: 'Message marked as read' };
  } catch (error) {
    console.error('Error marking message as read:', error);
    return { success: false, message: 'Failed to mark message as read' };
  }
};

export const sendFriendRequest = async (receiverEmail: string) => {
  try {
    const session = await auth();
    if (!session) throw new Error('User not authenticated');
    const senderId = session.userId;
    const dbUser = await db.user.findUnique({
      where: {
        clerkUserId: senderId ?? undefined,
      },
    });
    if (!dbUser) throw new Error('User not found in database');
    const receiverUser = await db.user.findUnique({
      where: {
        email: receiverEmail,
      },
    });
    if (!receiverUser) throw new Error('Receiver not found in database');
    const existingRequest = await db.friendRequest.findFirst({
      where: {
        senderId: dbUser.id,
        receiverId: receiverUser.id,
        status: 'pending',
      },
    });
    if (existingRequest) {
      return { success: false, message: 'Friend request already sent' };
    }
    await db.friendRequest.create({
      data: {
        senderId: dbUser.id,
        receiverId: receiverUser.id,
        status: 'pending',
      },
    });
    await addMessageToInbox(
      receiverUser.id,
      'New Friend Request',
      `You have received a new friend request from ${dbUser.name}.`
    );
    return { success: true, message: 'Friend request sent' };
  } catch (error) {
    console.error('Error sending friend request:', error);
    return { success: false, message: 'Failed to send friend request' };
  }
};

// export const respondToFriendRequest = async (requestId: string, status: 'accepted' | 'rejected') => {
//   try {
//     const request = await db.friendRequest.update({
//       where: { id: requestId },
//       data: { status },
//     });

//     if (status === 'accepted') {
//       await db.user.update({
//         where: { id: request.senderId },
//         data: {
//           friends: {
//             connect: { id: request.receiverId },
//           },
//         },
//       });

//       await db.user.update({
//         where: { id: request.receiverId },
//         data: {
//           friends: {
//             connect: { id: request.senderId },
//           },
//         },
//       });
//       await addMessageToInbox(
//         request.senderId,
//         'Friend Request Accepted',
//         `Your friend request to user ${request.receiverId} has been accepted.`
//       );
//     } else {
//       await addMessageToInbox(
//         request.senderId,
//         'Friend Request Rejected',
//         `Your friend request to user ${request.receiverId} has been rejected.`
//       );
//     }

//     return { success: true, message: `Friend request ${status}` };
//   } catch (error) {
//     console.error('Error responding to friend request:', error);
//     return { success: false, message: 'Failed to respond to friend request' };
//   }
// };

// export const getFriendRequests = async (userId: string) => {
//   try {
//     const requests = await db.friendRequest.findMany({
//       where: { receiverId: userId, status: 'pending' },
//       include: { sender: true },
//     });
//     return requests;
//   } catch (error) {
//     console.error('Error fetching friend requests:', error);
//     return [];
//   }
// };

// const Inbox = ({ messages }: { messages: Message[] }) => {
//   return (
//     <div>
//       <h2>Inbox</h2>
//       {messages.map((message) => (
//         <div key={message.id} className={`message ${message.status}`}>
//           <h3>{message.subject}</h3>
//           <p>{message.content}</p>
//           <small>{new Date(message.createdAt).toLocaleString()}</small>
//         </div>
//       ))}
//     </div>
//   );
// };

// const FriendRequests = ({ requests }: { requests: FriendRequest[] }) => {
//   const handleResponse = async (requestId: string, status: 'accepted' | 'rejected') => {
//     const response = await respondToFriendRequest(requestId, status);
//     if (response.success) {
//       alert(response.message);
//     } else {
//       alert('Failed to respond to friend request');
//     }
//   };

//   return (
//     <div>
//       <h2>Friend Requests</h2>
//       {requests.map((request) => (
//         <div key={request.id}>
//           <p>Friend request from {request.sender.name}</p>
//           <button onClick={() => handleResponse(request.id, 'accepted')}>Accept</button>
//           <button onClick={() => handleResponse(request.id, 'rejected')}>Reject</button>
//         </div>
//       ))}
//     </div>
//   );
// };
