import type { FilterState, UserState } from './reducers';
import { AdSingleState } from './reducers/adSingle';
import { CounterState } from './reducers/counter/counter.type';

export interface AppState {
  counter: CounterState;
  filterState: FilterState;
  userState: UserState;
  adSingleState: AdSingleState;

  [Symbol.iterator]: () => {
    next: () => {
      value?: string;
      done: boolean;
    };
  };
}
