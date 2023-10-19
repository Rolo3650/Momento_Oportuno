// import { LoginComponent, RegisterComponent } from '../../components';
// import { useAppContext } from '../../context';
import { WellcomeOne } from '../../containers/modules/wellcome/WellcomeOne';
import { LayoutOne } from '../../containers/layout/LayoutOne';

const Home = () => {
  // const { state, dispatch } = useAppContext();

  // const increment = () => {
  //   dispatch({ type: 'INCREMENT' });
  // };
  // const decrement = () => {
  //   dispatch({ type: 'DECREMENT' });
  // };

  // const reset = () => {
  //   dispatch({ type: 'RESET' });
  // };

  return (
    <>
      {/* <div>
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
        }}
      >
        <LoginComponent />
        <RegisterComponent />
      </div>
    </div> */}
      <LayoutOne>
        <WellcomeOne>
          <h1 className="text-center w-100">Hola</h1>
        </WellcomeOne>
      </LayoutOne>
    </>
  );
};

export { Home };
