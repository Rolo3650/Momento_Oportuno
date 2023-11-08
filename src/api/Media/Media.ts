import { AxiosResponse } from 'axios';
import { Request, Services } from '..';
import {
  UploadImageParams,
  validateSize,
  ImageTooBigError,
  SomeImageUploadFailedError,
  AppendImageResponseSchema,
  AppendImageResponse,
} from './Media.type';

const api = Request(Services.UPLOAD_IMAGE);

const imageField = 'media' as const;

export class MediaServices {
  static async uploadMediasToResource({
    type = 'listing',
    resourceId,
    photo,
  }: UploadImageParams): Promise<AppendImageResponse> {
    for (const p of photo) {
      const isValid = await validateSize({ photo: p });
      if (!isValid) {
        throw new ImageTooBigError();
      }
    }

    const promises = photo.map((p) => {
      const formData = new FormData();

      formData.append(imageField, p);

      return api.post(`${type}/${resourceId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    });
    const awaited = await Promise.allSettled(promises);

    const rejeted = awaited.filter(
      (p): p is PromiseRejectedResult => p.status === 'rejected'
    );
    if (rejeted.length > 0) {
      throw new SomeImageUploadFailedError();
    }
    const fulfilled = awaited.filter(
      (p): p is PromiseFulfilledResult<AxiosResponse<unknown>> =>
        p.status === 'fulfilled'
    );

    const values = fulfilled.map((p) => p.value.data);

    const data = values[values.length - 1];

    const parsed = AppendImageResponseSchema.parse(data);

    return parsed;
  }
}
