import type { ActionMap, AppTypes } from '..';

export type User = {
  id: number;
  name: string;
};

export type UserState = {
  token: string;
  user: User;
} | null;

export type UserPayload = {
  [AppTypes.Login]: {
    token: string;
    user: User;
  };
  [AppTypes.Logout]: undefined;
};

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];
