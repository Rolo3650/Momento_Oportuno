import { Services } from '..'
import Request from '../request'

import {
  type CreateOrderParams,
  type CreateOrderResponse,
  CreateOrderResponseSchema,
} from './Orders.type'


const api = Request(Services.ORDERS)

export class OrdersServices {
  static async createOrder(
    params: CreateOrderParams,
  ): Promise<CreateOrderResponse> {
    const { data } = await api.post('/', params)

    const parsed = CreateOrderResponseSchema.parse(data)

    return parsed
  }
}
