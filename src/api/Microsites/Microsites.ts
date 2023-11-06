import { Services } from '..';
import Request from '../request';

import type {
  getMicrositioByIdRes,
  GetMicrositiosRes,
  Micrositio,
} from './Microsites.type';

export class MicrositesServices {
  static #request = Request(Services.MICROSITIOS);
  static async getAllMicrositios() {
    const { data } = await this.#request.get<GetMicrositiosRes>('/get');

    return data;
  }

  static async getMicrositioById(id: number) {
    const { data } = await this.#request.get<getMicrositioByIdRes>(
      `/get/${id}`
    );

    return data;
  }

  /* Checar */
  // static async createMicrositio(params: Micrositio) {
  //   const { data } = await this.#request.post<Micrositio>(
  //     `/get/`,
  //     params
  //   );

  //   return data;
  // }
}
