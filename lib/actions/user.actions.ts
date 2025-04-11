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
