import { ActionMap, AppTypes } from '..';

export type AcountSettingsState = {
  open: boolean;
  userName: string;
  completeName: string;
  cellphone: string;
  description: string;
};

export type AcountSettingsPayload = {
  [AppTypes.SetAcountSettings]: AcountSettingsState;
};

export type AcountSettingsActions =
  ActionMap<AcountSettingsPayload>[keyof ActionMap<AcountSettingsPayload>];
