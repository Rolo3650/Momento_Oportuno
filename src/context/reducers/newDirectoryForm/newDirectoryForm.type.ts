import { newDirectoryFormState } from '.';
import { AppActions, AppTypes } from '..';

export const newDirectoryFormReducer = (
  state: newDirectoryFormState,
  action: AppActions
): newDirectoryFormState => {
  switch (action.type) {
    case AppTypes.SetNewDirectoryForm:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
