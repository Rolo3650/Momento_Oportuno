import { newMicrositeFormState } from './newMicrositeForm.type';
import { AppActions, AppTypes } from '..';

export const newMicrositeFormReducer = (
  state: newMicrositeFormState,
  action: AppActions
): newMicrositeFormState => {
  switch (action.type) {
    case AppTypes.SetNewMicrositeForm:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
