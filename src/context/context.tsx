import React, {
  createContext,
  useReducer,
  Dispatch,
  PropsWithChildren,
} from 'react';
import { AppActions, userReducer } from './reducers';
import { app_state } from './states/initial_state';
import { AppState } from './context.type';
import { filterReducer } from './reducers/filter/filter';
import { counterReducer } from './reducers/counter';

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
): AppState => ({
  userState: userReducer(userState, action),
  counter: counterReducer(counter, action),
  filterState: filterReducer(filterState, action),

  ..._,
});

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, app_state);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
