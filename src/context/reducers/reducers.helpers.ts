import { AppState } from '..';
import type { FilterActions, UserActions } from './';
import { AcountSettingsActions } from './acountSettings';
import { AdSingleActions } from './adSingle';
import { BillingSettingsActions } from './billingSettings';
import { CounterActions } from './counter/counter.type';
import { NewAdFormActions } from './newAdForm';
import { NewDirectoryFormActions } from './newDirectoryForm';
import { NewMicrositeFormActions } from './newMicrositeForm';
import { SocialMediaSettingsActions } from './socialMediaSettings copy';

export type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export const AppTypes = {
  //global state
  SetGlobalState: 'SET_GLOBAL_STATE',
  ResetGlobalState: 'RESET_GLOBAL_STATE',

  // userTypes
  Login: 'LOGIN',
  Logout: 'LOGOUT',

  // filterTypes
  SetFilter: 'SET_FILTER',

  // adSingleTypes
  SetAdSingle: 'SET_AD_SINGLE',

  // new add
  SetNewAdForm: 'SET_NEW_AD_FORM',

  // new directory
  SetNewDirectoryForm: 'SET_NEW_DIRECTORY_FORM',

  SetNewMicrositeForm: 'SET_NEW_MICROSITE_FORM',

  // Settings
  SetAcountSettings: 'SET_ACOUNT_SETTINGS_FORM',
  SetSocialMediaSettings: 'SET_SOCIAL_MEDIA_SETTINGS_FORM',
  SetBillingSettings: 'SET_BILLING_SETTINGS_FORM',

  // counterTypes
  Increment: 'INCREMENT',
  Decrement: 'DECREMENT',
  Reset: 'RESET',
} as const;

type GlobalPayload = {
  [AppTypes.SetGlobalState]: { state: AppState };
  [AppTypes.ResetGlobalState]: undefined;
};

type GlobalActions = ActionMap<GlobalPayload>[keyof ActionMap<GlobalPayload>];

export type AppTypes = (typeof AppTypes)[keyof typeof AppTypes];

export type AppActions =
  | FilterActions
  | UserActions
  | CounterActions
  | AdSingleActions
  | GlobalActions
  | NewAdFormActions
  | NewDirectoryFormActions
  | NewMicrositeFormActions
  | AcountSettingsActions
  | SocialMediaSettingsActions
  | BillingSettingsActions;
