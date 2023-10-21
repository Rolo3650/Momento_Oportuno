import { type GetAllEstadosResponse } from './Estados.type';
import { Request, Services } from '../..';

export class EstadosServices {
  static #api = Request(Services.Listivos_ESTADOS);
  static async getAllEstados(): Promise<GetAllEstadosResponse> {
    const { data } = await this.#api.get('/');

    return data as GetAllEstadosResponse;
  }
}
