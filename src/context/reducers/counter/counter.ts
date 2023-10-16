import { AppActions, AppTypes } from '..';
import { CounterState } from './counter.type';

export const counterReducer = (
  state: CounterState,
  action: AppActions
): CounterState => {
  console.log('action.type', action.type);
  switch (action.type) {
    case AppTypes.Increment:
      return state + 1;
    case AppTypes.Decrement:
      return state - 1;
    case AppTypes.Reset:
      return 0;
    default:
      return state;
  }
};
