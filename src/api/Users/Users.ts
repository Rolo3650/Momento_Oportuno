import { GetMeResponseSchema, Request } from '../';
import type {
  logInParams,
  registerParams,
  logInRes,
  registerRes,
  GetMeResponse,
  updateBillingParams,
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

  /**
   * @throws {AxiosError,ZodError}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async update(params: any): Promise<any> {
    const response = await req.post('/users/me', params);
    // const parsed = GeneralLogInSchema.parse(data);
    // return parsed;
    return response;
  }

  /**
   * @throws {AxiosError,ZodError}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async updateBillingSettings(
    params: updateBillingParams
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    const response = await req.post('/users/taxinfo/update', params);
    // const parsed = GeneralLogInSchema.parse(data);
    // return parsed;
    return response;
  }

  /**
   * @throws {AxiosError,ZodError}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async forgotPassword(email: string): Promise<any> {
    const response = await req.post(
      '/password/forgot',
      { email: email },
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    );

    return response;
  }

  /**
   * @throws {AxiosError,ZodError}
   */
  static async changePassword(
    password: string,
    password_confirmation: string,
    code: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    const response = await req.post(
      'users/change-password',
      {
        password: password,
        password_confirmation: password_confirmation,
        code: code,
      },
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    );

    return response;
  }
}
