import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export const Services = {
  INDEX: '/',
  ADS: '/listings',
  USERS: '/users',
  REGISTER: '/register',
  PRODUCT: '/product',
  PACKAGES: '/packages',
  Listivos_CATEGORIAS: '/listivo_14',
  Listivos_ESTADOS: '/listivo_10934',
  DIRECTORY: '/directories',
  MICROSITIOS: '/microsites',
  UPLOAD_IMAGE: '/media',
} as const;
export const CustomServices = {
  logIn: '/jwt-auth/v1/token',
  wc: '/wc/v3',
} as const;

export type SERVICES = (typeof Services)[keyof typeof Services];
export type CUSTOM_SERVICES =
  (typeof CustomServices)[keyof typeof CustomServices];

export type MyAxiosInstance = Omit<
  AxiosInstance,
  'get' | 'post' | 'put' | 'patch'
> & {
  get<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  post<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  put<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
  patch<T = unknown, R = AxiosResponse<T>, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R>;
};
