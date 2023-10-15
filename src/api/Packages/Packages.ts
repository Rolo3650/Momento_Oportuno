import { Services } from '..';
import Request from '../request';
import { PackagesError } from './Packages.errors';

import {
  type GetALlPaquetesRes,
  type GetUserPaquetes,
  GetUserPaquetesSchema,
} from './Packages.type';

export class PackagesServices {
  static #request = Request(Services.PACKAGES);

  /**
   * @throws {AxiosError}
   */
  static async getAllPaquetes(): Promise<GetALlPaquetesRes> {
    const { data } = await this.#request.get('get');

    return data;
  }

  /**
   * @throws {PackagesError,AxiosError}
   */
  static async getUserPaquetes(): Promise<GetUserPaquetes> {
    const { data } = await this.#request.get('mine');

    const datavalidated = GetUserPaquetesSchema.safeParse(data);
    if (!datavalidated.success) {
      throw new PackagesError(datavalidated.error.message);
    }

    return datavalidated.data;
  }
}
