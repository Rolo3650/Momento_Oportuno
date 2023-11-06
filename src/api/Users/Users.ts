import { GetMeResponseSchema, Request } from '../';
import type {
  logInParams,
  registerParams,
  logInRes,
  registerRes,
  GetMeResponse,
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

  /**
   * @throws {AxiosError,ZodError}
   */
  static async me(): Promise<GetMeResponse> {
    const { data } = await req.get(Services.USERS + '/me');

    const parsed = GetMeResponseSchema.parse(data);

    return parsed;
  }
}
