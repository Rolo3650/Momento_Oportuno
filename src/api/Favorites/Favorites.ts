import { Request, Services } from '..';
import {
  AddFavoriteResponseSchema,
  GetMyFavoritesResponseSchema,
  RemoveFavoriteResponseSchema,
} from './Favorites.type';
import type {
  AddFavoriteResponse,
  GetMyFavoritesResponse,
  RemoveFavoriteResponse,
} from './Favorites.type';

const req = Request(Services.FAVORITES);

export class FavoritesServices {
  /**
   * @throws {AxiosError,ZodError}
   */
  static async getMyFavorites(): Promise<GetMyFavoritesResponse> {
    const { data } = await req.get('/');
    const parsed = GetMyFavoritesResponseSchema.parse(data);
    return parsed;
  }

  /**
   * @throws {AxiosError,ZodError}
   */
  static async addFavorite(addId: number): Promise<AddFavoriteResponse> {
    const { data } = await req.post(`/add/${addId}`);
    const parsed = AddFavoriteResponseSchema.parse(data);
    return parsed;
  }

  /**
   * @throws {AxiosError,ZodError}
   */
  static async removeFavorite(addId: number): Promise<RemoveFavoriteResponse> {
    const { data } = await req.delete(`/remove/${addId}`);
    const parsed = RemoveFavoriteResponseSchema.parse(data);
    return parsed;
  }
}
