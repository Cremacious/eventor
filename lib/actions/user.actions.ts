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

export const getUserDisplayName = async () => {
    const user = await auth();
    if (!user) throw new Error('User not authenticated');
    const userId = user.userId;
    const dbUser = await db.user.findUnique({
      where: {
        clerkUserId: userId ?? undefined,
      },
    });
    if (dbUser === null) return 'Display name not set'
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
  const user = await auth();
  if (!user) throw new Error('User not authenticated');
  const userId = user.userId;
  const dbUser = await db.user.findUnique({
    where: {
      clerkUserId: userId ?? undefined,
    },
  });
  if (!dbUser) throw new Error('User not found in database');
  return dbUser
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

