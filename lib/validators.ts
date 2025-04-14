import { z } from 'zod';

export const insertEventSchema = z.object({
  id: z.string().min(3, 'ID must be at least 3 characters'),
  name: z.string().min(1, { message: 'Name is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  type: z.string().min(1, { message: 'Type is required' }),
  date: z.string().min(1, { message: 'Date is required' }),
  visibility: z.string().min(1, { message: 'Visibility is required' }),
  location: z.string().optional(),
  guests: z.array(z.string()).optional(),
});

export const updateDisplayNameSchema = z.object({
  displayName: z.string().min(3, 'Name must be at least 3 characters'),
});

export const friendSchema = z.object({
  name: z.string().nullable(), // Allows null or string
  id: z.string(), // Required string
  clerkUserId: z.string(), // Required string
  email: z.string().email(), // Valid email string
  imageUrl: z.string().nullable(), // Allows null or string
  createdAt: z.date(), // Date object
  updatedAt: z.date(), // Date object
  displayName: z.string().nullable(), // Allows null or string
});
