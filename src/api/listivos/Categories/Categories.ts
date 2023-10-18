import type {
  GetCategoriesResponse,
  GetCategoryAttributes,
} from './Categories.type';
import {
  GetCategoriesResponseSchema,
  GetCategoryAttributesSchema,
} from './Categories.type';

import { Request, Services } from '../..';

const req = Request(Services.CATEGORIES);
export class CategoriesServices {
  /**
   * @throws {AxiosError,ZodError}
   */
  static async getAllCategorias(): Promise<GetCategoriesResponse> {
    console.log('getAllCategorias');
    const { data } = await req.get('/');
    const parsed = GetCategoriesResponseSchema.parse(data);
    return parsed;
  }

  /**
   * @throws {AxiosError,ZodError}
   */
  static async getCategoryAttributes(
    categoryId: number
  ): Promise<GetCategoryAttributes> {
    const { data } = await req.get(`/${categoryId}/attributes`);
    const parsed = GetCategoryAttributesSchema.parse(data);

    return parsed;
  }
}
