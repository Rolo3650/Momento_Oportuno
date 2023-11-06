import { Request, Services } from '..';
import { FilterParams } from '../../context';

import type {
  CreateAnuncioParams,
  CreateAnuncioResponse,
  GetAdByIdResponse,
  GetAllAdsResponse,
  GetMyAdsResponse,
} from './ApiAds.type';

import {
  CreateAnuncioResponseSchema,
  GetAdByIdResponseSchema,
  GetAllAdsResponseSchema,
  GetMyAdsResponseSchema,
} from './ApiAds.type';

const req = Request(Services.ADS);
const req2 = Request(Services.UPLOAD_IMAGE);
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
    sortBy,
    order,
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
    if (sortBy) {
      q += `&sortBy=${sortBy}`;
    }
    if (order) {
      q += `&order=${order}`;
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
  static async getMyAds({
    page,
  }: {
    page?: number;
  }): Promise<GetMyAdsResponse> {
    const { data } = await req.get(`/mine?page=${page ?? 1}`);

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

  static async createAd(
    params: CreateAnuncioParams
  ): Promise<CreateAnuncioResponse> {
    // params.status = 'published'
    const { data } = await req.post('/', params);

    const parsed = CreateAnuncioResponseSchema.parse(data);
    return parsed;
  }

  static async uploadImage(params: {
    file: File;
    id: number;
  }): Promise<CreateAnuncioResponse> {
    // params.status = 'published'
    const formData = new FormData();

    formData.append('media', params.file);

    return req2.post(`listing/${params.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}
