import React, {
  createContext,
  useReducer,
  Dispatch,
  PropsWithChildren,
  useEffect,
} from 'react';
import { AppActions, AppTypes, userReducer } from './reducers';
import { app_state } from './states/initial_state';
import { AppState } from './context.type';
import { filterReducer } from './reducers/filter/filter';
import { counterReducer } from './reducers/counter';

const KEY_FOR_APP_STATE = 'state_x_key_for_app' as const;

const AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch<AppActions>;
}>({
  state: app_state,
  dispatch: () => null,
});

const mainReducer = (
  { counter, filterState, userState, ..._ }: AppState,
  action: AppActions
): AppState => {
  if (action.type === AppTypes.SetGlobalState) {
    return action.payload.state;
  }

  return {
    userState: userReducer(userState, action),
    counter: counterReducer(counter, action),
    filterState: filterReducer(filterState, action),

    ..._,
  };
};

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, app_state);

  // TODO: CHANGE THIS TO redux-persist OR SOMETHING LIKE THAT
  // load and set state from local storage
  useEffect(() => {
    const localState = localStorage.getItem(KEY_FOR_APP_STATE);
    const parsedState: AppState | null = localState
      ? JSON.parse(localState)
      : null;
    console.log('parsedState', parsedState);
    if (parsedState) {
      dispatch({
        type: AppTypes.SetGlobalState,
        payload: { state: parsedState },
      });
    }
  }, []);

  // save state to local storage
  useEffect(() => {
    localStorage.setItem(KEY_FOR_APP_STATE, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
