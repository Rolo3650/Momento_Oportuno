import { createContext, useReducer } from 'react';
import { ActionTypes } from './ActionTypes';
import { initial_state } from './states/initial_state';

const reducerObject = (state, payload) => {
  return {
    // Initial state
    [ActionTypes.SET_INITIAL_STATE]: initial_state,
  };
};

const reducer = (state, action) => {
  if (reducerObject(state, action.payload)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

export const Context = createContext(initial_state);

export const ReducerContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);

  const context = () => [state, dispatch];

  return <Context.Provider value={context}>{children}</Context.Provider>;
};
