import { z } from 'zod';
import { AdSchema, DirectorioSchema, MicrositeSchema } from '..';

export type MediaType = 'listing' | 'directory' | 'microsite';

export type UploadImageParams = {
  type?: MediaType;
  resourceId: number;
  photo: File[];
};

// 1mb
const FILE_SIZE_LIMIT = 1_000_000 as const;
export async function validateSize({ photo }: { photo: File }) {
  const size = photo.size;
  return size < FILE_SIZE_LIMIT;
}

export class SomeImageUploadFailedError extends Error {
  constructor() {
    super('Error al subir una o más imágenes');
  }
}

export class ImageDoesntExistError extends Error {
  constructor() {
    super('La imagen no existe');
  }
}

export class ImageTooBigError extends Error {
  constructor() {
    super('La imagen es demasiado grande');
  }
}

export type BlobType = {
  uri: string;
  name: string;
  type: string;
};

export const AppendImageResponseSchema = z.union([
  AdSchema.pick({
    id: true,
    title: true,
    slug: true,
    status: true,
    image: true,
    description: true,
    is_featured: true,
    is_multistate: true,
    send_to_print: true,
    is_active: true,
    auto_renew: true,
    user_id: true,
    user_package_id: true,
    state_id: true,
    expires_at: true,
    created_at: true,
    updated_at: true,
    category_id: true,
    media: true,
  }),
  MicrositeSchema.partial(),
  DirectorioSchema.partial(),
]);
export type AppendImageResponse = z.infer<typeof AppendImageResponseSchema>;
