import { insertEventSchema, updateProfileSchema } from '../validators';

import { z } from 'zod';

export type Event = z.infer<typeof insertEventSchema>;

export type Profile = z.infer<typeof updateProfileSchema>;
