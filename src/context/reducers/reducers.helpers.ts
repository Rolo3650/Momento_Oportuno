import { AppState } from '..';
import type { FilterActions, UserActions } from './';
import { CounterActions } from './counter/counter.type';

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
  | GlobalActions;
