import type { GetStatesResponse } from './States.type';
import { GetStatesResponseSchema } from './States.type';

import { Request, Services } from '../..';

const req = Request(Services.STATES);
export class StatesServices {
  static async getAllEstados(): Promise<GetStatesResponse> {
    const { data } = await req.get('/');

    const parsed = GetStatesResponseSchema.parse(data);

    return parsed;
  }
}
