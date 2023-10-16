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

// POJO
export const AppTypes = {
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

export type AppTypes = (typeof AppTypes)[keyof typeof AppTypes];

export type AppActions = FilterActions | UserActions | CounterActions;
