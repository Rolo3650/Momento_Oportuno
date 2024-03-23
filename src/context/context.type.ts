import type { FilterState, UserState } from './reducers';
import { AcountSettingsState } from './reducers/acountSettings';
import { AdSingleState } from './reducers/adSingle';
import { BillingSettingsState } from './reducers/billingSettings';
import { CounterState } from './reducers/counter/counter.type';
import { NewAdFormState } from './reducers/newAdForm';
import { newDirectoryFormState } from './reducers/newDirectoryForm';
import { newMicrositeFormState } from './reducers/newMicrositeForm';
import { SocialMediaSettingsState } from './reducers/socialMediaSettings copy';

export interface AppState {
  init: boolean;
  counter: CounterState;
  filterState: FilterState;
  userState: UserState;
  adSingleState: AdSingleState;
  newAdForm: NewAdFormState;
  newDirectoryForm: newDirectoryFormState;
  newMicrositeForm: newMicrositeFormState;
  acountSettings: AcountSettingsState;
  socialMediaSettings: SocialMediaSettingsState;
  billingSettings: BillingSettingsState;

  [Symbol.iterator]: () => {
    next: () => {
      value?: string;
      done: boolean;
    };
  };
}
