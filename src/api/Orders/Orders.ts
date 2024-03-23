import { Services } from '..';
import Request from '../request';

import {
  type CreateOrderParams,
  type CreateOrderResponse,
  CreateOrderResponseSchema,
  GetOrderByIdResponse,
  GetOrderByIdResponseSchema,
  OrderResponse,
  OrderResponseSchema,
} from './Orders.type';

const api = Request(Services.ORDERS);

export class OrdersServices {
  static async createOrder(
    params: CreateOrderParams
  ): Promise<CreateOrderResponse> {
    const { data } = await api.post('/', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const parsed = CreateOrderResponseSchema.parse(data);

    return parsed;
  }

  static async myOrders(): Promise<OrderResponse> {
    const { data } = await api.get('/mine');

    const parsed = OrderResponseSchema.parse(data);

    return parsed;
  }

  static async myOrder({ id }: { id: number }): Promise<GetOrderByIdResponse> {
    const { data } = await api.get('/' + id);

    const parsed = GetOrderByIdResponseSchema.parse(data);

    return parsed;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async createBilling({ id }: { id: string }): Promise<any> {
    const response = await api.post(`/${id}/facturar`);
    // const parsed = GetOrderByIdResponseSchema.parse(data);
    // return parsed;

    return response;
  }
}
