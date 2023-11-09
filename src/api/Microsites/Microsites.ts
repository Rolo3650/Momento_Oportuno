import { Services } from '..';
import Request from '../request';

import type {
  GetMicrositesResponse,
  CreateMicrositeParams,
  CreateMicrositeResponse,
} from './Microsites.type';

import {
  CreateMicrositeResponseSchema,
  GetMicrositesResponseSchema,
} from './Microsites.type';

import {
  GetMicrositeByIdResponse,
  GetMicrositeByIdResponseSchema,
} from './Micrositios.module';

const request = Request(Services.MICROSITIOS);
export class MicrositesServices {
  // static async getAllMicrositios() {
  //   const { data } = await request.get<GetMicrositesResponse>('/get');

  //   const parsed = GetMicrositesResponseSchema.parse(data);

  //   return parsed;
  // }

  static async getAllMicrositios(params?: {
    state?: string;
  }): Promise<GetMicrositesResponse> {
    let q = '/';
    if (params?.state) {
      q = `?state=${params.state}`;
    }
    const { data } = await request.get<GetMicrositesResponse>(q);

    const parsed = GetMicrositesResponseSchema.parse(data);

    return parsed;
  }

  // static async getMicrositioById(id: number) {
  //   const { data } = await request.get<GetMicrositeByIdResponse>(
  //     `/${id}`
  //   );

  //   const parsed = GetMicrositesResponseSchema.parse(data);

  //   return parsed;
  // }

  static async getMicrositioById(
    id: number
  ): Promise<GetMicrositeByIdResponse> {
    const { data } = await request.get<GetMicrositeByIdResponse>(`/${id}`);
    const parsed = GetMicrositeByIdResponseSchema.parse(data);

    return parsed;
  }

  static async createMicrositio(
    params: CreateMicrositeParams
  ): Promise<CreateMicrositeResponse> {
    const { data } = await request.post(`/`, params);
    const parsed = CreateMicrositeResponseSchema.parse(data);

    return parsed;
  }
}
