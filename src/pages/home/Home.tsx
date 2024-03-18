// import { LoginComponent, RegisterComponent } from '../../components';
// import { useAppContext } from '../../context';
// import { WellcomeOne } from '../../containers/modules/wellcome/WellcomeOne';
import { LayoutOne } from '../../containers/layout/LayoutOne';
// import { CardOne } from '../../components/module/cards/CardOne';
// import { CardTwo } from '../../components/module/cards/CardTwo';
import { HowItWorksOne } from '../../containers/modules/howItWorks/HowItWorksOne';
import { LastAdsOne } from '../../containers/lastAds/LastAdsOne';
import { AboutUsOne } from '../../containers/modules/aboutUs/AboutUsOne';
import { useInfiniteAds } from '../../hooks';
import { CardThree } from '../../components/module/cards/CardThree';
import { WellcomeThree } from '../../containers/modules/wellcome/WellcomeThree';
import { PopularCategoriesTwo } from '../../components/categories/PopularCategoriesTwo';
import { SearchOne } from '../../components/search/SearchOne';
import { SearchTwo } from '../../components/search/SearchTwo';
import { HowItWorksTwo } from '../../containers/modules/howItWorks/HowItWorksTwo';
// import { useEffect } from 'react';
// import { useAppContext } from '../../context';

const Home = () => {
  // const {state, dispatch} = useAppContext();
  const { data: campeche } = useInfiniteAds({
    sortBy: 'created_at',
    order: 'desc',
    state: 1,
    per_page: 15,
  });
  const { data: yucatan } = useInfiniteAds({
    sortBy: 'created_at',
    order: 'desc',
    state: 2,
    per_page: 15,
  });
  const { data: qroo } = useInfiniteAds({
    sortBy: 'created_at',
    order: 'desc',
    state: 3,
    per_page: 15,
  });
  const { data: chiapas } = useInfiniteAds({
    sortBy: 'created_at',
    order: 'desc',
    state: 4,
    per_page: 15,
  });
  const { data: cdmx } = useInfiniteAds({
    sortBy: 'created_at',
    order: 'desc',
    state: 6,
    per_page: 15,
  });
  const { data: veracruz } = useInfiniteAds({
    sortBy: 'created_at',
    order: 'desc',
    state: 8,
    per_page: 15,
  });
  // console.log(campeche?.pages[0]?.);
  // useEffect(() => {
  //   console.log(state?.newAdForm)
  // }, [state])

  return (
    <>
      <LayoutOne>
        <SearchOne />
        <SearchTwo />
        <WellcomeThree>
          <div></div>
          <CardThree />
        </WellcomeThree>
        <PopularCategoriesTwo />
        <br />
        <HowItWorksOne />
        <br />
        {qroo?.pages?.length &&
          qroo?.pages?.length > 0 &&
          qroo?.pages[0]?.data?.length > 0 && (
            <LastAdsOne
              title="Anuncios en"
              span="Quintana Roo"
              products={qroo?.pages[0]?.data.slice(0, 15)?.map((data) => {
                const obj = { ...data };
                if (!obj.imgs || obj.imgs.length === 0) {
                  obj.imgs = ['./img/noimagen.png'];
                }
                return obj;
              })}
              state={3}
            />
          )}

        {yucatan?.pages?.length &&
          yucatan?.pages?.length > 0 &&
          yucatan?.pages[0]?.data?.length > 0 && (
            <LastAdsOne
              title="Anuncios en"
              span="Yucatán"
              products={yucatan?.pages[0]?.data.slice(0, 15)?.map((data) => {
                const obj = { ...data };
                if (!obj.imgs || obj.imgs.length === 0) {
                  obj.imgs = ['./img/noimagen.png'];
                }
                return obj;
              })}
              state={2}
            />
          )}
        <div className="w-100 mx-auto d-flex justify-content-center">
          <img
            style={{
              maxWidth: '1200px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            className="w-100"
            src="/img/banners/web oportuno clasificados.png"
            alt=""
          />
        </div>
        {chiapas?.pages?.length &&
          chiapas?.pages?.length > 0 &&
          chiapas?.pages[0]?.data?.length > 0 && (
            <LastAdsOne
              title="Anuncios en"
              span="Tabasco"
              products={chiapas?.pages[0]?.data.slice(0, 15)?.map((data) => {
                const obj = { ...data };
                if (!obj.imgs || obj.imgs.length === 0) {
                  obj.imgs = ['./img/noimagen.png'];
                }
                return obj;
              })}
              state={4}
            />
          )}

        {campeche?.pages?.length &&
          campeche?.pages?.length > 0 &&
          campeche?.pages[0]?.data?.length > 0 && (
            <LastAdsOne
              title="Anuncios en"
              span="Campeche"
              products={campeche?.pages[0]?.data.slice(0, 15)?.map((data) => {
                const obj = { ...data };
                if (!obj.imgs || obj.imgs.length === 0) {
                  obj.imgs = ['./img/noimagen.png'];
                }
                return obj;
              })}
              state={1}
            />
          )}

        {cdmx?.pages?.length &&
          cdmx?.pages?.length > 0 &&
          cdmx?.pages[0]?.data?.length > 0 && (
            <LastAdsOne
              title="Anuncios en"
              span="Ciudad de México"
              products={cdmx?.pages[0]?.data.slice(0, 15)?.map((data) => {
                const obj = { ...data };
                if (!obj.imgs || obj.imgs.length === 0) {
                  obj.imgs = ['./img/noimagen.png'];
                }
                return obj;
              })}
              state={6}
            />
          )}

        {veracruz?.pages?.length &&
          veracruz?.pages?.length > 0 &&
          veracruz?.pages[0]?.data?.length > 0 && (
            <LastAdsOne
              title="Anuncios en"
              span="Veracruz"
              products={veracruz?.pages[0]?.data.slice(0, 15)?.map((data) => {
                const obj = { ...data };
                if (!obj.imgs || obj.imgs.length === 0) {
                  obj.imgs = ['./img/noimagen.png'];
                }
                return obj;
              })}
              state={15}
            />
          )}
        <HowItWorksTwo />
        <AboutUsOne />
      </LayoutOne>
    </>
  );
};

export { Home };
