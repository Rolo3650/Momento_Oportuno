import { z } from 'zod';
import { TypePackageSchema } from '..';

export const PaymentMethods = {
  STRIPE: 'stripe',
  PAYPAL: 'paypal',
} as const;
export type PaymentMethods =
  (typeof PaymentMethods)[keyof typeof PaymentMethods];

export type BaseCreateOrderParams = {
  billing_address: string;
  package_id: number;
  related_id: number | string;
};

export const TypePackagePojo = {
  MICROSITE: 'microsite',
  LISTING: 'listing',
  DIRECTORY: 'directory',
} as const;

export type AddonsRecord = Record<`addons[${number}]`, 1>;

export type CreateOrderParams = (BaseCreateOrderParams &
  (
    | { payment_method: typeof PaymentMethods.PAYPAL }
    | { payment_method: typeof PaymentMethods.STRIPE; token?: string | undefined }
  )) &
  (
    | ({
        type: typeof TypePackagePojo.LISTING;
      } & AddonsRecord)
    | {
        type:
          | typeof TypePackagePojo.DIRECTORY
          | typeof TypePackagePojo.MICROSITE;
      }
  );

export const OrderStatus = z.union([
  z.literal('pending'),
  z.literal('completed'),
  z.literal('paid'),
  z.literal('failed'),
]);

export type OrderStatus = z.infer<typeof OrderStatus>;

export const OrderSchema = z.object({
  title: z.string(),
  billing_address: z.string(),
  payment_method: z.string(),
  // package_id: z.string(),
  type: TypePackageSchema,
  related_id: z.union([z.number(), z.string()])?.optional(),
  user_id: z.number(),
  status: OrderStatus,
  payment_status: z.string(),
  subtotal: z.number(),
  tax: z.number(),
  total: z.number(),
  // updated_at: z.coerce.date(),
  created_at: z.coerce.date(),
  id: z.number(),
});
export type Order = z.infer<typeof OrderSchema>;

export const CreateOrderResponseSchema = z.object({
  message: z.string(),
  order: OrderSchema,
  paypal_link: z.string().nullable().optional(),
});

export const OrderResponseSchema = z.object({
  data: z.array(OrderSchema)
});

export type CreateOrderResponse = z.infer<typeof CreateOrderResponseSchema>;

export type OrderResponse = z.infer<typeof OrderResponseSchema>;

export const GetOrderByIdResponseSchema = z.object({
  data: OrderSchema,
});
export type GetOrderByIdResponse = z.infer<typeof GetOrderByIdResponseSchema>;
