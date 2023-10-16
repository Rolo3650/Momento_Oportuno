import type { FilterState, UserState } from './reducers';
import { CounterState } from './reducers/counter/counter.type';

export interface AppState {
  counter: CounterState;
  filterState: FilterState;
  userState: UserState;

  [Symbol.iterator]: () => {
    next: () => {
      value?: string;
      done: boolean;
    };
  };
}
