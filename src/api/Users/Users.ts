import { Request } from '../';
import type {
  logInParams,
  registerParams,
  logInRes,
  registerRes,
} from './Users.type';
import { GeneralLogInSchema } from './Users.type';
import { Services } from '..';

const req = Request(Services.INDEX);

export class UsersServices {
  /**
   * @throws {AxiosError,ZodError}
   */
  static async logIn(params: logInParams): Promise<logInRes> {
    const { data } = await req.post('/login', params);
    const parsed = GeneralLogInSchema.parse(data);

    return parsed;
  }

  /**
   * @throws {AxiosError,ZodError}
   */
  static async register(params: registerParams): Promise<registerRes> {
    const { data } = await req.post('/register', params);
    const parsed = GeneralLogInSchema.parse(data);
    return parsed;
  }

  static async logOut() {
    // await req.post('/logout');
  }

  // /**
  //  * @throws {AxiosError}
  //  */
  // static async getUserById(id: string | number): Promise<GetUserByIdResponse> {
  //   const { data } = await req.get(`/${id}`);
  //   return data;
  // }

  // /**
  //  * @throws {AxiosError}
  //  */
  // static async getFavorites(): Promise<GetFavoritesResponse> {
  //   const { data } = await req.get('/favorites/get');
  //   return data;
  // }

  // /**
  //  * @throws {AxiosError}
  //  */
  // static async toggleFavorite(id: number): Promise<GetFavoritesResponse> {
  //   try {
  //     const { data } = await req.post(`/favorites/add/${id}`);
  //     return data;
  //   } catch (error) {
  //     if (!(error instanceof AxiosError)) throw error;
  //     const { data } = await req.post(`/favorites/delete/${id}`);
  //     return data;
  //   }
  // }

  // /**
  //  * @throws {AxiosError}
  //  */
  // static async me() {
  //   const { data } = await req.get('users/me');

  //   return data;
  // }
}
