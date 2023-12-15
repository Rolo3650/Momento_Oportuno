import { ActionMap, AppTypes } from '..';
import {
  CreateDirectorioResponse,
} from '../../../api';

export type newDirectoryFormState = {
  //   name: string;
  //   category: Categorie | null;
  //   subCategory: SubCategorie | null;
  //   state: State | null;
  //   price: number;
  //   desc: string;
  //   extraImgs: {
  //     quantity: number;
  //     set: boolean;
  //     value: string | number | null;
  //   };
  //   extraStates: {
  //     set: boolean;
  //     value: string | number | null;
  //   };
  //   attributes: {
  //     set: Attribute;
  //     value: string | number | null | string[];
  //   }[];
  //   extraVideo: {
  //     set: boolean;
  //     type: 'link' | 'file';
  //     value: string | File | null;
  //   };
  //   print: {
  //     set: boolean;
  //     value: string | number | null;
  //   };
  //   feature: boolean;
  //   socialMedia: boolean;
  //   imgs: File[] | null;
  responseForm: CreateDirectorioResponse | null;
  //   package: Package | null;
};

export type NewDirectoryFormPayload = {
  [AppTypes.SetNewDirectoryForm]: newDirectoryFormState;
};

export type NewDirectoryFormActions =
  ActionMap<NewDirectoryFormPayload>[keyof ActionMap<NewDirectoryFormPayload>];
