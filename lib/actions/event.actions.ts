'use server';

import { currentUser } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { formatError } from '../utils';
import { insertEventSchema } from '../validators';
import { z } from 'zod';

export async function createEvent(data: z.infer<typeof insertEventSchema>) {
  try {
    const session = await currentUser();
    if (!session) {
      throw new Error('User not authenticated');
    }
    const userId = session?.id
    const dbUser = await db.user.findUnique({
        where: {
          clerkUserId: userId,
        },
      });
    if (!dbUser) {
      throw new Error('User not found in the database.');
    }

    const event = insertEventSchema.parse(data);
    await db.event.create({
      data: {
        ...event,
        userId: dbUser.id,
      },
    });
    return {
      success: true,
      message: `Event ${event.name} created successfully`,
    };
  } catch (error) {
    console.error('Error in createEvent:', error);
    return {
      success: false,
      message: formatError(error),
    };
  }
}

// export async function getAllUserEvents() {
//   try {
//     const session = await auth();
//     if (!session) {
//       throw new Error('User not authenticated');
//     }
//     const userId = session?.user?.id;
//     const dbUser = await prisma.user.findUnique({
//       where: {
//         id: userId,
//       },
//     });
//     if (!dbUser) {
//       throw new Error('User not found in the database.');
//     }

//     const events = await prisma.event.findMany({
//       where: {
//         userId: dbUser.id,
//       },
//     });
//     return events;
//   } catch (error) {
//     console.error('Error in getAllUserEvents:', error);
//     return []
//   }
// }
