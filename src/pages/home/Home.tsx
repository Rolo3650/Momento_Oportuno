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

  console.log([...state]);

  return (
    <div>
      <h1>Home</h1>
      <p>Counter: {state.counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export { Home };
