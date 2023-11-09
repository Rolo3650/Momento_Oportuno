import { config } from '../../utils';
import { Request, Services } from '..';

import {
  CreateDirectorio,
  CreateDirectorioResponse,
  Directorio,
  GetAllDirectoriosRes,
} from './Directories.type';

const req2 = Request(Services.UPLOAD_IMAGE);
export class DirectoriesServices {
  static #request = Request(Services.DIRECTORY);

  static async getAllDirectorios() {
    const { data } = await this.#request.get<GetAllDirectoriosRes>('/');

    return data;
  }
  static async getDirectorioById(id: number) {
    const { data } = await this.#request.get<Directorio>(`/get/${id}`);

    return data;
  }
  static async createDirectorio(params: CreateDirectorio) {
    const { data } = await this.#request.post<CreateDirectorioResponse>(
      '',
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
  static async uploadImage(params: {
    file: File;
    id: number;
  }): Promise<any> {
    // params.status = 'published'
    const formData = new FormData();

    formData.append('media', params.file);

    return req2.post(`directory/${params.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
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
