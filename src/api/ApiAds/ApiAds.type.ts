import * as z from 'zod';

const LinkSchema = z.object({
  url: z.union([z.null(), z.string()]),
  label: z.string(),
  active: z.boolean(),
});

const MetaSchema = z.object({
  current_page: z.number(),
  from: z.number(),
  last_page: z.number(),
  links: z.array(LinkSchema),
  path: z.string(),
  per_page: z.number(),
  to: z.number(),
  total: z.number(),
});

const LinksSchema = z.object({
  first: z.string(),
  last: z.string(),
  prev: z.null(),
  next: z.null(),
});

const UserPackageSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  package_id: z.number(),
  name: z.string(),
  label: z.null(),
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

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
});

const StateSchema = z.object({
  id: z.number(),
  name: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

const CategorySchema = z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  description: z.null(),
  children: z.array(z.any()),
});

const ValueElementSchema = z.object({
  id: z.number(),
  attribute_id: z.number(),
  name: z.string(),
  key: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
});

const AttributeSchema = z.object({
  id: z.number(),
  name: z.string(),
  key: z.string(),
  placeholder: z.union([z.null(), z.string()]),
  description: z.null(),
  type: z.string(),
  is_required: z.boolean(),
  is_multiple: z.boolean(),
  category_id: z.number(),
  value: z.union([z.array(ValueElementSchema), z.string()]),
});

const AdSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  url: z.string(),
  status: z.string(),
  image: z.string(),
  description: z.string(),
  is_featured: z.boolean(),
  is_multistate: z.boolean(),
  is_active: z.boolean(),
  auto_renew: z.boolean(),
  user: UserSchema,
  user_package: UserPackageSchema,
  state: StateSchema,
  category: CategorySchema,
  attributes: z.array(AttributeSchema),
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
