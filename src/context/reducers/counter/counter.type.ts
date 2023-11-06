import { ActionMap, AppTypes } from '..';

export type CounterPayload = {
  [AppTypes.Increment]: undefined;
  [AppTypes.Decrement]: undefined;
  [AppTypes.Reset]: undefined;
};

export type CounterActions =
  ActionMap<CounterPayload>[keyof ActionMap<CounterPayload>];

export type CounterState = number;
