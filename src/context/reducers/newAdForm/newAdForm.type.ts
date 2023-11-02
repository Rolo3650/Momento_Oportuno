import { ActionMap, AppTypes } from '..';
import { Categorie, State, SubCategorie } from '../../../api';

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
  extraVideo: boolean;
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
