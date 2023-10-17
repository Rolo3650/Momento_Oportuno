import { config } from '../../utils';
import { Request, Services } from '..';

import {
  CreateDirectorio,
  CreateDirectorioResponse,
  Directorio,
  GetAllDirectoriosRes,
} from './Directories.type';

export class DirectoriesServices {
  static #request = Request(Services.DIRECTORY);

  static async getAllDirectorio() {
    const { data } = await this.#request.get<GetAllDirectoriosRes>('/get');

    return data;
  }
  static async getDirectorioById(id: number) {
    const { data } = await this.#request.get<Directorio>(`/get/${id}`);

    return data;
  }
  static async createDirectorio(params: CreateDirectorio) {
    const { data } = await this.#request.post<CreateDirectorioResponse>(
      '/add',
      params,
      {
        maxBodyLength: Infinity,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return data;
  }
}

type generateLinkToCheckoutOpts =
  | {
      package: number;
      type: 'package';
    }
  | {
      package: number;
      directoryId: number;
      type: 'directory';
    };

export const generateLinkToCheckout = (
  token: string | null,
  opts: generateLinkToCheckoutOpts
) => {
  if (!token) return null;
  let baseUrl =
    `${config.BASE_URL}?autologin=true&type=${opts.type}&token=${token}&package=${opts.package}` as const;
  if (opts.type === 'directory') {
    baseUrl += `&directory_id=${opts.directoryId}` as const;
  }
  return baseUrl;
};