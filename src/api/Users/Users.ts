import { AxiosError } from 'axios';
import { Request } from '../';
import type {
  GetFavoritesResponse,
  logInParams,
  registerParams,
  logInRes,
  registerRes,
  GetUserByIdResponse,
} from './Users.type';
import { CustomServices, Services } from '..';

export class UsersServices {
  static #request = Request(Services.INDEX);
  static #apiCustom = Request(CustomServices.logIn, true);

  /**
   * @throws {AxiosError}
   */
  static async logIn(params: logInParams): Promise<logInRes> {
    const { data } = await this.#apiCustom.post('/', params);

    return data;
  }

  /**
   * @throws {AxiosError}
   */
  static async register(params: registerParams): Promise<registerRes> {
    const { data } = await this.#request.post('/register', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return data;
  }

  /**
   * @throws {AxiosError}
   */
  static async getUserById(id: string | number): Promise<GetUserByIdResponse> {
    const { data } = await this.#request.get(`/${id}`);
    return data;
  }

  /**
   * @throws {AxiosError}
   */
  static async getFavorites(): Promise<GetFavoritesResponse> {
    const { data } = await this.#request.get('/favorites/get');
    return data;
  }

  /**
   * @throws {AxiosError}
   */
  static async toggleFavorite(id: number): Promise<GetFavoritesResponse> {
    try {
      const { data } = await this.#request.post(`/favorites/add/${id}`);
      return data;
    } catch (error) {
      if (!(error instanceof AxiosError)) throw error;
      const { data } = await this.#request.post(`/favorites/delete/${id}`);
      return data;
    }
  }

  /**
   * @throws {AxiosError}
   */
  static async me() {
    const { data } = await this.#request.get('users/me');

    return data;
  }
}
