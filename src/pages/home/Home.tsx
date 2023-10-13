import { useContext } from 'react';
import { Context } from '../../context/useReducer';

const Home = () => {
  const { state, dispatch } = useContext(Context);

  return <div>{state?.hola}</div>;
};

export { Home };
