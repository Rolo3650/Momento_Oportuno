import { useReducerContext } from '../../context/useReducer';

const Home = () => {
  const { state, dispatch } = useReducerContext();

  const increment = () => {
    dispatch({ type: 'SET_COUNTER', payload: state?.counter + 1 });
  };

  const reset = () => {
    dispatch({ type: 'SET_COUNTER', payload: 0 });
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Counter: {state?.counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export { Home };
