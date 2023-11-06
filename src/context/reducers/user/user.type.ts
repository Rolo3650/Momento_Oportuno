import type { ActionMap, AppTypes } from '..';
import { User } from '../../../api/Users';

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
