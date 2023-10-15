import {
  createContext,
  useReducer,
  PropsWithChildren,
  FC,
  useContext,
} from 'react';
import { ActionTypes, Actions } from './ActionTypes';
import { initial_state, InitialState } from './states/initial_state';
import { assertNever } from '../utils';

// function reducerObject(
//   state: InitialState,
//   payload: Actions['payload']
// ): Record<keyof typeof ActionTypes, InitialState> {
//   return {
//     // Initial state
//     [ActionTypes.SET_INITIAL_STATE]: initial_state,
//     [ActionTypes.SET_FILTER_PARAMS]: {
//       ...state,
//       filter: payload,
//     },
//     [ActionTypes.SET_COUNTER]: {
//       ...state,
//       counter: payload,
//     },
//   };
// }

const AppReducer = (state: InitialState, action: Actions): InitialState => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SET_INITIAL_STATE:
      return {
        ...state,
      };
    case ActionTypes.SET_FILTER_PARAMS:
      return {
        ...state,
        filter: payload,
      };
    case ActionTypes.SET_COUNTER:
      return {
        ...state,
        counter: payload,
      };
    default:
      assertNever(action);
      return state;
  }
  // if (reducerObject(state, action.payload)[action.type]) {
  //   return reducerObject(state, action.payload)[action.type];
  // } else {
  //   return state;
  // }
};

export type ReducerContextType = {
  state: InitialState;
  dispatch: React.Dispatch<Actions>;
} | null;
export const Context = createContext<ReducerContextType>(null);

export const ReducerContext: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initial_state);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useReducerContext = () => {
  const context = useContext(Context);
  if (context === null) {
    throw new Error('useReducerContext must be used within a ReducerContext');
  }
  return context;
};
