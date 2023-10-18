import { Request, Services } from '..';
import { FilterParams } from '../../context';

import type {
  GetAdByIdResponse,
  GetAllAdsResponse,
  GetMyAdsResponse,
} from './ApiAds.type';

import {
  GetAdByIdResponseSchema,
  GetAllAdsResponseSchema,
  GetMyAdsResponseSchema,
} from './ApiAds.type';

const req = Request(Services.ADS);
export class AdsServices {
  /**
   * @throws {AxiosError}
   */
  static async getAllAds({
    page = 1,
    per_page = 10,
    category,
    query,
    state,
  }: {
    page?: number;
    per_page?: number;
  } & FilterParams): Promise<GetAllAdsResponse> {
    let q = '';
    if (query) {
      q += `&search=${query}`;
    }
    if (category) {
      q += `&category=${category}`;
    }
    if (state) {
      q += `&state=${state}`;
    }

    const { data } = await req.get(`?page=${page}&per_page=${per_page}` + q);
    const dataValidated = GetAllAdsResponseSchema.parse(data);

    return dataValidated;
  }

  /**
   * @throws {AxiosError}
   */
  static async getAd(id: string | number): Promise<GetAdByIdResponse> {
    const { data } = await req.get(`/${id}`);

    const dataValidated = GetAdByIdResponseSchema.parse(data);

    return dataValidated;
  }

  /**
   * @throws {AxiosError}
   */
  static async getMyAds(): Promise<GetMyAdsResponse> {
    const { data } = await req.get('/mine');

    const dataValidated = GetMyAdsResponseSchema.parse(data);

    return dataValidated;
  }

  // /**
  //  * @throws {AxiosError}
  //  */
  // static async createAd(params: createAnuncioParams) {
  //   const { data } = await req.post<createAnuncioResponse>(
  //     '/create',
  //     params
  //   );
  //   return data;
  // }

  // static async getAllFields(): Promise<GetAllFieldsResponse> {
  //   const { data } = await req.get('/fields');
  //   const dataValidated = GetAllFieldsResponseSchema.safeParse(data);
  //   if (!dataValidated.success) throw new Error(dataValidated.error.message);

  //   return dataValidated.data;
  // }
}
