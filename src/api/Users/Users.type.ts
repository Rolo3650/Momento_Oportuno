import * as z from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  email_verified_at: z.string().nullable().default(null),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});
export type User = z.infer<typeof UserSchema>;

export const GeneralLogInSchema = z.object({
  token: z.string(),
  user: UserSchema,
});
export type GeneralLogIn = z.infer<typeof GeneralLogInSchema>;

export type logInRes = GeneralLogIn;

export type registerRes = GeneralLogIn;

export type logInParams = {
  email: string;
  password: string;
};

export type registerParams = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};
