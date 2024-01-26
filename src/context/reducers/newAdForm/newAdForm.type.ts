import { ActionMap, AppTypes } from '..';
import {
  Attribute,
  Categorie,
  CreateAnuncioResponse,
  Package,
  State,
  SubCategorie,
} from '../../../api';

export type NewAdFormState = {
  name: string;
  category: Categorie | null;
  subCategory: SubCategorie | null;
  state: State | null;
  price: number;
  desc: string;
  extraImgs: {
    quantity: number;
    set: boolean;
    value: string | number | null;
  };
  extraStates: {
    set: boolean;
    value: string | number | null;
  };
  attributes: {
    set: Attribute;
    value: string | number | null | string[];
  }[];
  attributes_persist?: {
    set: Attribute;
    value: string | number | null | string[];
  }[];
  extraVideo: {
    set: boolean;
    type: 'link' | 'file';
    value: string | File | null;
  };
  print: {
    set: boolean;
    value: string | number | null;
    size: string | number | null;
  };
  feature: boolean;
  socialMedia: boolean;
  imgs: File[] | null;
  responseForm: CreateAnuncioResponse | null;
  package: Package | null;
  id: string | null | undefined | number;
};

export type NewAdFormPayload = {
  [AppTypes.SetNewAdForm]: NewAdFormState;
};

export type NewAdFormActions =
  ActionMap<NewAdFormPayload>[keyof ActionMap<NewAdFormPayload>];
