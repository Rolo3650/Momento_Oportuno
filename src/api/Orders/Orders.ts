import { Services } from '..';
import Request from '../request';

import {
  type CreateOrderParams,
  type CreateOrderResponse,
  CreateOrderResponseSchema,
  GetOrderByIdResponse,
  GetOrderByIdResponseSchema,
} from './Orders.type';

const api = Request(Services.ORDERS);

export class OrdersServices {
  static async createOrder(
    params: CreateOrderParams
  ): Promise<CreateOrderResponse> {
    const { data } = await api.post('/', params);

    const parsed = CreateOrderResponseSchema.parse(data);

    return parsed;
  }

  static async myOrders() {
    const response = await api.get('/mine');

    // const parsed = CreateOrderResponseSchema.parse(data);

    return response;
  }

  static async myOrder({ id }: { id: number }): Promise<GetOrderByIdResponse> {
    const { data } = await api.get('/' + id);

    const parsed = GetOrderByIdResponseSchema.parse(data);

    return parsed;
  }
}
