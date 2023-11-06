import axios from 'axios';
import { config, getToken } from '../utils';
import type { MyAxiosInstance, SERVICES } from './request.type';

export default function Request(
  // eslint-disable-next-line @typescript-eslint/ban-types
  service: SERVICES | (string & {}),
  customApi = false
): MyAxiosInstance {
  const url = !customApi ? config.API_URL : config.API_CUSTOM;

  const req = axios.create({
    baseURL: `${url}${service}`,
    timeout: 99999999999,
    maxBodyLength: Infinity,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  req.interceptors.request.use(
    (config) => {
      // TODO: Add token to request
      //FIXME: SHOULD DELETE THIS
      const token = getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token.token}`;
      }
      return config;
    },
    (err) => {
      Promise.reject(err);
    }
  );

  return req;
}
