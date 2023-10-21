// import { LoginComponent, RegisterComponent } from '../../components';
// import { useAppContext } from '../../context';
import { WellcomeOne } from '../../containers/modules/wellcome/WellcomeOne';
import { LayoutOne } from '../../containers/layout/LayoutOne';
import { CardOne } from '../../components/module/cards/CardOne';
import { CardTwo } from '../../components/module/cards/CardTwo';
import { HowItWorksOne } from '../../containers/modules/howItWorks/HowItWorksOne';
import { LastAddsOne } from '../../containers/lastAdds/LastAddsOne';
// import {
//   LoginComponent,
//   RegisterComponent,
//   ListAdsComponent,
//   ListCategoriesComponent,
//   FavoritesComponent,
//   ListPackagesComponent,
//   ListStatesComponent,
// } from '../../components';
// import { useAppContext } from '../../context';

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
    </div> */}
      <LayoutOne>
        <WellcomeOne>
          <CardOne />
          <CardTwo />
        </WellcomeOne>
        <HowItWorksOne />
        <LastAddsOne
          title="Anuncios en"
          span="Yucatán"
          products={[
            {
              id: 'coche',
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              name: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              feauture: false,
            },
            {
              id: 'coche',
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              name: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              feauture: false,
            },
            {
              id: 'coche',
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              name: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              feauture: true,
            },
            {
              id: 'coche',
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              name: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              feauture: false,
            },
          ]}
        />
        <LastAddsOne
          title="Anuncios en"
          span="Quintana Roo"
          products={[
            {
              id: 'coche',
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              name: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              feauture: false,
            },
            {
              id: 'coche',
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              name: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              feauture: false,
            },
            {
              id: 'coche',
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              name: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              feauture: true,
            },
            {
              id: 'coche',
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              name: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              feauture: false,
            },
          ]}
        />
        <LastAddsOne
          title="Anuncios en"
          span="Campeche"
          products={[
            {
              id: 'coche',
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              name: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              feauture: false,
            },
            {
              id: 'coche',
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              name: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              feauture: false,
            },
            {
              id: 'coche',
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              name: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              feauture: true,
            },
            {
              id: 'coche',
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              name: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              feauture: false,
            },
          ]}
        />
      </LayoutOne>
    </>
  );
};

export { Home };
