import type { FilterState, UserState } from './reducers';
import { AdSingleState } from './reducers/adSingle';
import { CounterState } from './reducers/counter/counter.type';
import { NewAdFormState } from './reducers/newAdForm';

export interface AppState {
  counter: CounterState;
  filterState: FilterState;
  userState: UserState;
  adSingleState: AdSingleState;
  newAdForm: NewAdFormState;

  [Symbol.iterator]: () => {
    next: () => {
      value?: string;
      done: boolean;
    };
  };
}
