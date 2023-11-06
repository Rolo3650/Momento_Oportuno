import { ActionMap, AppTypes } from '..';
import { Attribute, Categorie, State, SubCategorie } from '../../../api';

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
  extraVideo: {
    set: boolean;
    type: "link" | "file";
    value: string | File | null;
  };
  print: boolean;
  feature: boolean;
  socialMedia: boolean;
  imgs: File[] | null;
};

export type NewAdFormPayload = {
  [AppTypes.SetNewAdForm]: NewAdFormState;
};

export type NewAdFormActions =
  ActionMap<NewAdFormPayload>[keyof ActionMap<NewAdFormPayload>];
