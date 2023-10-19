import {
  LoginComponent,
  RegisterComponent,
  ListAdsComponent,
  ListCategoriesComponent,
  FavoritesComponent,
  ListPackagesComponent,
  ListStatesComponent,
} from '../../components';
import { useAppContext } from '../../context';

const Home = () => {
  const { state, dispatch } = useAppContext();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <h1>Home</h1>

      <p>Counter: {state.counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <div
        style={{
          border: '1px solid black',
          display: 'flex',
          justifyContent: 'space-around',
          padding: '1rem',
          flexDirection: 'column',
        }}
      >
        <LoginComponent />
        <RegisterComponent />
        <ListAdsComponent />
        <ListCategoriesComponent />
        <FavoritesComponent />
        <ListPackagesComponent />
        <ListStatesComponent />
      </div>
    </div>
  );
};

export { Home };
