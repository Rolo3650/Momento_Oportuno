import { type GetALlCategoriasRes } from './Categorias.type';

import { Request, Services } from '../..';

export class CategorysServices {
  static #request = Request(Services.Listivos_CATEGORIAS);

  /**
   * @throws {AxiosError}
   */
  static async getAllCategorias(): Promise<GetALlCategoriasRes> {
    const { data } = await this.#request.get('/');

    return data as GetALlCategoriasRes;
  }

  /**
   * @throws {AxiosError}
   */
  static async getCategoriasByParent(parent = 0): Promise<GetALlCategoriasRes> {
    const { data } = await this.#request.get<GetALlCategoriasRes>(
      `/?parent=${parent}&per_page=100`
    );

    return data;
  }
}
