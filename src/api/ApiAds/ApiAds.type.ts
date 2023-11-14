import * as z from 'zod';
import { UserSchema } from '../Users';
import {
  AttributeSchema,
  AttributeValueSchema,
  CategorieSchema,
  StateSchema,
} from '../listivos';
import { UserPackageSchema } from '../Packages';

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

const UserAdSchema = UserSchema.omit({
  email_verified_at: true,
  created_at: true,
  updated_at: true,
});

const AttributeAdSchema = AttributeSchema.omit({
  attributeValues: true,
  value: true,
}).merge(
  z.object({
    value: z.union([z.array(AttributeValueSchema), z.string()]),
  })
);
export type AttributeAd = z.infer<typeof AttributeAdSchema>;

export const MediaSchema = z.object({
  id: z.number(),
  collection_name: z.string(),
  file_name: z.string(),
  mime_type: z.string(),
  size: z.number(),
  original_url: z.string(),
  preview_url: z.string(),
});

export type Media = z.infer<typeof MediaSchema>;

export const AdSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  thumbnail: z.string().nullable().optional(),
  url: z.string().optional(),
  status: z.string(),
  image: z.union([z.null(), z.string()])?.optional(),
  description: z.string().nullable(),
  is_featured: z.boolean(),
  is_multistate: z.boolean(),
  is_active: z.boolean(),
  auto_renew: z.boolean(),
  user: UserAdSchema,
  user_package: UserPackageSchema.nullable(),
  state: StateSchema.optional(),
  category: CategorieSchema.optional(),
  attributes: z.array(AttributeAdSchema)?.optional(),
  create_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  imgs: z.array(z.string()).optional(),
  price: z.number().optional(),
  views: z.number().optional(),
  media: z.array(MediaSchema).optional(),
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

export const CreateAnuncioResponseSchema = z.object({
  data: AdSchema.omit({
    status: true,
    user: true,
    user_package: true,
    state: true,
    category: true,
    attributes: true,
  }),
});

export type CreateAnuncioResponse = z.infer<typeof CreateAnuncioResponseSchema>;

export type GeneralCreateAnuncioParams = {
  title: string;
  description: string;
  state_id: number;
  user_id: number;
  category_id: number;
  is_featured: boolean;
  includes_printing: boolean;
  includes_video: boolean;
  includes_socials: boolean;
  printing_state_id?: number;
};

export type ListingAttribute = {
  attribute_id: number;
  value: string;
};

export type CreateAnuncioParams = GeneralCreateAnuncioParams & {
  subcategory_id: number;
  listingAttributes: ListingAttribute[];
};
