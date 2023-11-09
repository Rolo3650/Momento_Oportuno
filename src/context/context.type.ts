import type { FilterState, UserState } from './reducers';
import { AdSingleState } from './reducers/adSingle';
import { CounterState } from './reducers/counter/counter.type';
import { NewAdFormState } from './reducers/newAdForm';
import { newDirectoryFormState } from './reducers/newDirectoryForm';
import { newMicrositeFormState } from './reducers/newMicrositeForm';

export interface AppState {
  counter: CounterState;
  filterState: FilterState;
  userState: UserState;
  adSingleState: AdSingleState;
  newAdForm: NewAdFormState;
  newDirectoryForm: newDirectoryFormState;
  newMicrositeForm: newMicrositeFormState;

  [Symbol.iterator]: () => {
    next: () => {
      value?: string;
      done: boolean;
    };
  };
}
