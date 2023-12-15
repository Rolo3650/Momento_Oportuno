import * as z from 'zod';

export const StateSchema = z.object({
  id: z.number(),
  name: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  listings_count : z.number().optional().nullable(),
});
export type State = z.infer<typeof StateSchema>;

export const GetStatesResponseSchema = z.object({
  data: z.array(StateSchema),
});
export type GetStatesResponse = z.infer<typeof GetStatesResponseSchema>;
