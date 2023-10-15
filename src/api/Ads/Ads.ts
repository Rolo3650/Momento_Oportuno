import { Request, Services } from '..';

import type {
  createAnuncioParams,
  createAnuncioResponse,
  getAnuncioRes,
  Main_Anuncios,
} from './Ads.type';
import type { FilterParams } from '../../context';

export class AdsServices {
  static #request = Request(Services.ADS);

  /**
   * @throws {AxiosError}
   */
  static async getAllAds({
    page = 1,
    per_page = 12,
    category,
    query,
    state,
  }: {
    page?: number;
    per_page?: number;
  } & FilterParams): Promise<{
    data: Main_Anuncios;
    nextPage: number;
  }> {
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

    const { data } = await this.#request.get<Main_Anuncios>(
      `/get?page=${page}&per_page=${per_page}` + q
    );

    return { data, nextPage: page + 1 };
  }

  /**
   * @throws {AxiosError}
   */
  static async getAllAdsByState({
    page = 1,
    per_page = 12,
    state,
  }: {
    page?: number;
    per_page?: number;
    state: string | number;
  }): Promise<{
    data: Main_Anuncios;
    nextPage: number;
  }> {
    const { data } = await this.#request.get<Main_Anuncios>(
      `/get?page=${page}&per_page=${per_page}&state=${state}`
    );

    return { data, nextPage: page + 1 };
  }

  /**
   * @throws {AxiosError}
   */
  static async getAd(id: string | number): Promise<getAnuncioRes> {
    const { data } = await this.#request.get<getAnuncioRes>(
      `/get/${id}?nocache`
    );

    return data;
  }

  /**
   * @throws {AxiosError}
   */
  static async createAd(params: createAnuncioParams) {
    const { data } = await this.#request.post<createAnuncioResponse>(
      '/create',
      params
    );
    return data;
  }
}
