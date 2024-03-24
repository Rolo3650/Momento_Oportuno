import * as z from 'zod';
import { BillingSettingsState } from '../../context/reducers/billingSettings';

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  phone: z.string().nullable().optional(),
  email: z.string(),
  email_verified_at: z.string().nullable().default(null),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date().nullable().optional(),
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

export type updateBillingParams = Omit<BillingSettingsState, 'open' | 'id'>;

// export type updateParams = {
//   name: string;
//   email: string;
//   password: string;
//   password_confirmation: string;
// };

// export const DataSchema = z.object({
//   id: z.number(),
//   name: z.string(),
//   email: z.string(),
// });
// export type Data = z.infer<typeof DataSchema>;

export const GetMeResponseSchema = z.object({
  data: UserSchema.omit({
    email_verified_at: true,
    created_at: true,
    updated_at: true,
  }),
});
export type GetMeResponse = z.infer<typeof GetMeResponseSchema>;
