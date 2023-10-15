import axios, { type AxiosInstance } from 'axios';
import { config } from '../utils';
import type { CUSTOM_SERVICES, SERVICES } from './request.type';

export default function Request(
  // eslint-disable-next-line @typescript-eslint/ban-types
  service: SERVICES | CUSTOM_SERVICES | (string & {}),
  customApi = false
): AxiosInstance {
  const url = !customApi ? config.API_URL : config.API_CUSTOM;

  const req = axios.create({
    baseURL: `${url}${service}`,
    timeout: 1000,
    maxBodyLength: Infinity,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  req.interceptors.request.use(
    (config) => {
      // TODO: Add token to request
      // example:
      // let token = localStorage.getItem('token');
      // if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (err) => {
      Promise.reject(err);
    }
  );

  return req;
}
