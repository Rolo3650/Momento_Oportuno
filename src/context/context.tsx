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
import Cookies from 'universal-cookie';
import { adSingleReducer } from './reducers/adSingle';
import { newAdFormReducer } from './reducers/newAdForm';
import { newDirectoryFormReducer } from './reducers/newDirectoryForm';
import { newMicrositeFormReducer } from './reducers/newMicrositeForm';
import { AcountSettingsReducer } from './reducers/acountSettings';
import { SocialMediaSettingsReducer } from './reducers/socialMediaSettings copy';
import { BillingSettingsReducer } from './reducers/billingSettings';

const KEY_FOR_APP_STATE = 'state_x_key_for_app' as const;

const AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch<AppActions>;
}>({
  state: app_state,
  dispatch: () => null,
});

const mainReducer = (
  {
    counter,
    filterState,
    userState,
    adSingleState,
    newAdForm,
    newDirectoryForm,
    newMicrositeForm,
    acountSettings,
    socialMediaSettings,
    billingSettings,
    ..._
  }: AppState,
  action: AppActions
): AppState => {
  if (action.type === AppTypes.SetGlobalState) {
    return action.payload.state;
  }

  return {
    userState: userReducer(userState, action),
    counter: counterReducer(counter, action),
    filterState: filterReducer(filterState, action),
    adSingleState: adSingleReducer(adSingleState, action),
    newAdForm: newAdFormReducer(newAdForm, action),
    newDirectoryForm: newDirectoryFormReducer(newDirectoryForm, action),
    newMicrositeForm: newMicrositeFormReducer(newMicrositeForm, action),
    acountSettings: AcountSettingsReducer(acountSettings, action),
    socialMediaSettings: SocialMediaSettingsReducer(
      socialMediaSettings,
      action
    ),
    billingSettings: BillingSettingsReducer(
      billingSettings,
      action
    ),
    ..._,
  };
};

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, app_state);
  // TODO: CHANGE THIS TO redux-persist OR SOMETHING LIKE THAT
  // load and set state from cookies
  useEffect(() => {
    try {
      const cookies = new Cookies(null, { path: '/' });
      const localState = cookies.get(KEY_FOR_APP_STATE);
      console.log('parsed_state:', localState);
      const parsedState: AppState | null = localState ? localState : null;
      if (parsedState && parsedState.userState?.token) {
        dispatch({
          type: AppTypes.SetGlobalState,
          payload: {
            state: { ...state, userState: parsedState.userState, init: true },
          },
        });
      } else {
        // dispatch({
        //   type: AppTypes.SetGlobalState,
        //   payload: { state: { ...state, init: true } },
        // });
      }
    } catch (error) {
      dispatch({
        type: AppTypes.SetGlobalState,
        payload: { state: { ...state, init: true } },
      });
      console.error(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // save state to cookies
  useEffect(() => {
    if (state.init) {
      const cookies = new Cookies(null, { path: '/' });
      cookies.set(KEY_FOR_APP_STATE, state, { path: '/' });
    }
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
