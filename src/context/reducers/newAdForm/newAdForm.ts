import { AppActions, AppTypes } from '..';
import { NewAdFormState } from './newAdForm.type';

export const newAdFormReducer = (
  state: NewAdFormState,
  action: AppActions
): NewAdFormState => {
  switch (action.type) {
    case AppTypes.SetNewAdForm:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
