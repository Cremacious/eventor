'use server';

import { User } from 'lucide-react';
import { auth } from '@clerk/nextjs/server';
import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { formatError } from '../utils';
import { insertEventSchema } from '../validators';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

export async function createEvent(data: z.infer<typeof insertEventSchema>) {
  try {
    const user = await auth();
    if (!user) {
      throw new Error('User not authenticated');
    }
    const userId = user.userId;
    const dbUser = await db.user.findUnique({
      where: {
        clerkUserId: userId ?? undefined,
      },
    });
    if (!dbUser) {
      throw new Error('User not found in the database.');
    }

    const event = insertEventSchema.parse(data);
    await db.event.create({
      data: {
        ...event,
        userId: dbUser.clerkUserId,
      },
    });
    revalidatePath('/dashboard');
    return {
      success: true,
      message: `Event ${event.name} created successfully`,
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}

export async function getAllUserEvents() {
  try {
    const session = await auth();
    if (!session) {
      throw new Error('User not authenticated');
    }
    const userId = session?.userId;
    const dbUser = await db.user.findUnique({
      where: {
        clerkUserId: userId ?? undefined,
      },
    });
    if (!dbUser) {
      throw new Error('User not found in the database.');
    }

    const events = await db.event.findMany({
      where: {
        userId: dbUser.clerkUserId,
      },
    });
    return events;
  } catch (error) {
    return [];
  }
}
