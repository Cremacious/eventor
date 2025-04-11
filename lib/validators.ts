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
