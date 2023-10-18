import * as z from 'zod';
import { UserSchema } from '../Users';
import {
  AttributeSchema,
  AttributeValueSchema,
  CategorieSchema,
} from '../listivos';

const LinkSchema = z.object({
  url: z.union([z.null(), z.string()]),
  label: z.string(),
  active: z.boolean(),
});

const MetaSchema = z.object({
  current_page: z.number(),
  from: z.number().nullable().optional(),
  last_page: z.number(),
  links: z.array(LinkSchema),
  path: z.string(),
  per_page: z.number(),
  to: z.number().nullable().optional(),
  total: z.number(),
});

const nulishString = z.string().nullable().optional();

const LinksSchema = z.object({
  first: nulishString,
  last: nulishString,
  prev: nulishString,
  next: nulishString,
});

const UserPackageSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  package_id: z.number(),
  name: z.string(),
  label: z.string().nullable(),
  type: z.string(),
  description: z.null(),
  expire: z.number(),
  price: z.number(),
  display_price: z.string(),
  is_featured: z.number(),
  is_active: z.number(),
  is_multistate: z.number(),
  includes_video: z.number(),
  number_of_images: z.number(),
  includes_printing: z.number(),
  max_number_of_characters: z.number(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

const UserAdSchema = UserSchema.omit({
  email_verified_at: true,
  created_at: true,
  updated_at: true,
});

const StateSchema = z.object({
  id: z.number(),
  name: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

const AttributeAdSchema = AttributeSchema.omit({
  attributeValues: true,
  value: true,
}).merge(
  z.object({
    value: z.union([z.array(AttributeValueSchema), z.string()]),
  })
);

export const AdSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  url: z.string(),
  status: z.string(),
  image: z.union([z.null(), z.string()]),
  description: z.string(),
  is_featured: z.boolean(),
  is_multistate: z.boolean(),
  is_active: z.boolean(),
  auto_renew: z.boolean(),
  user: UserAdSchema,
  user_package: UserPackageSchema,
  state: StateSchema,
  category: CategorieSchema,
  attributes: z.array(AttributeAdSchema),
  create_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});
export type Ad = z.infer<typeof AdSchema>;

export const GetAllAdsResponseSchema = z.object({
  data: z.array(AdSchema),
  links: LinksSchema,
  meta: MetaSchema,
});
export type GetAllAdsResponse = z.infer<typeof GetAllAdsResponseSchema>;

export const GetAdByIdResponseSchema = z.object({
  data: AdSchema,
});
export type GetAdByIdResponse = z.infer<typeof GetAdByIdResponseSchema>;

export const GetMyAdsResponseSchema = GetAllAdsResponseSchema;

export type GetMyAdsResponse = z.infer<typeof GetMyAdsResponseSchema>;
