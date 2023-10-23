// import { LoginComponent, RegisterComponent } from '../../components';
// import { useAppContext } from '../../context';
import { WellcomeOne } from '../../containers/modules/wellcome/WellcomeOne';
import { LayoutOne } from '../../containers/layout/LayoutOne';
import { CardOne } from '../../components/module/cards/CardOne';
import { CardTwo } from '../../components/module/cards/CardTwo';
import { HowItWorksOne } from '../../containers/modules/howItWorks/HowItWorksOne';
import { LastAdsOne } from '../../containers/lastAds/LastAdsOne';
// import { useInfiniteAds } from '../../hooks';
// import { useGetStates } from '../../hooks/querys/useStates';
// import // LoginComponent,
// RegisterComponent,
// ListAdsComponent,
// ListCategoriesComponent,
// FavoritesComponent,
// ListPackagesComponent,
// ListStatesComponent,
// '../../components';
// import { useAppContext } from '../../context';

const Home = () => {
  // const { data } = useGetStates();
  // const { data } = useInfiniteAds();

  // console.log(data?.data);

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
        {/* <LoginComponent /> */}
        <WellcomeOne>
          <CardOne />
          <CardTwo />
        </WellcomeOne>
        <HowItWorksOne />
        <LastAdsOne
          title="Anuncios en"
          span="Yucatán"
          products={[
            {
              id: 1,
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              title: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              is_featured: false,
            },
            {
              id: 1,
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              title: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              is_featured: false,
            },
            {
              id: 1,
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              title: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              is_featured: true,
            },
            {
              id: 1,
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              title: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              is_featured: false,
            },
          ]}
        />
        <LastAdsOne
          title="Anuncios en"
          span="Quintana Roo"
          products={[
            {
              id: 1,
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              title: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              is_featured: false,
            },
            {
              id: 1,
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              title: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              is_featured: false,
            },
            {
              id: 1,
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              title: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              is_featured: true,
            },
            {
              id: 1,
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              title: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              is_featured: false,
            },
          ]}
        />
        <LastAdsOne
          title="Anuncios en"
          span="Campeche"
          products={[
            {
              id: 1,
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              title: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              is_featured: false,
            },
            {
              id: 1,
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              title: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              is_featured: false,
            },
            {
              id: 1,
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              title: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              is_featured: true,
            },
            {
              id: 1,
              imgs: ['./img/examples/img_1.webp', './img/examples/img_2.webp'],
              title: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              is_featured: false,
            },
          ]}
        />
      </LayoutOne>
    </>
  );
};

export { Home };
