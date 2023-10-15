import type { FilterParams } from './states/initial_state';

const ActionTypes = {
  SET_INITIAL_STATE: 'SET_INITIAL_STATE',
  SET_FILTER_PARAMS: 'SET_FILTER_PARAMS',
  SET_COUNTER: 'SET_COUNTER',
} as const;

export type Actions =
  | {
      type: typeof ActionTypes.SET_INITIAL_STATE;
      payload?: null;
    }
  | {
      type: typeof ActionTypes.SET_FILTER_PARAMS;
      payload: FilterParams;
    }
  | {
      type: typeof ActionTypes.SET_COUNTER;
      payload: number;
    };

export { ActionTypes };
