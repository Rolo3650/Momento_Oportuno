import axios from 'axios';
import { config, getLocalValue } from '../utils';
import type {
  CUSTOM_SERVICES,
  MyAxiosInstance,
  SERVICES,
} from './request.type';

export default function Request(
  // eslint-disable-next-line @typescript-eslint/ban-types
  service: SERVICES | CUSTOM_SERVICES | (string & {}),
  customApi = false
): MyAxiosInstance {
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
      //FIXME: SHOULD DELETE THIS
      const token = getLocalValue('token');
      console.log({
        token,
      });
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (err) => {
      Promise.reject(err);
    }
  );

  return req;
}
