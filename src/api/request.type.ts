import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { ZodError } from 'zod';

export const Services = {
  INDEX: '/',
  ADS: '/listings',
  USERS: '/users',
  REGISTER: '/register',
  PRODUCT: '/product',
  PACKAGES: '/packages',
  CATEGORIES: '/categories',
  FAVORITES: '/favorites',
  STATES: '/states',
  DIRECTORY: '/directories',
  MICROSITIOS: '/microsites',
  UPLOAD_IMAGE: '/media',
} as const;

export type SERVICES = (typeof Services)[keyof typeof Services];

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

export type RequestErrors = AxiosError | ZodError;
