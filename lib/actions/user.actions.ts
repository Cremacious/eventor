'use server'

import { auth, currentUser } from '@clerk/nextjs/server';

import { db } from '@/lib/db';
import { formatError } from '../utils';
import { updateProfileSchema } from '../validators';
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

export const updateProfile = async (
  data: z.infer<typeof updateProfileSchema>
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
    const userData = updateProfileSchema.parse(data);
    await db.user.update({
      where: {
        clerkUserId: dbUser.clerkUserId,
      },
      data: { displayName: userData.displayName },
    });
    return {
      success: true,
      message: `User updated`,
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
};
