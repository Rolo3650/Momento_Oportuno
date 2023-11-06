import { ActionMap, AppTypes } from '..';
import { Ad } from '../../../api';

export type AdSingleState = {
  ad: Ad | null;
  loading: boolean;
};

export type AdSinglePayload = {
  [AppTypes.SetAdSingle]: AdSingleState;
};

export type AdSingleActions =
  ActionMap<AdSinglePayload>[keyof ActionMap<AdSinglePayload>];
