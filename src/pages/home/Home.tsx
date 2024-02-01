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
// import { useEffect } from 'react';
// import { useAppContext } from '../../context';

const Home = () => {
  // const {state, dispatch} = useAppContext();
  const { data: campeche } = useInfiniteAds({
    sortBy: 'created_at',
    order: 'desc',
    state: 1,
  });
  const { data: yucatan } = useInfiniteAds({
    sortBy: 'created_at',
    order: 'desc',
    state: 2,
  });
  const { data: qroo } = useInfiniteAds({
    sortBy: 'created_at',
    order: 'desc',
    state: 3,
  });
  const { data: chiapas } = useInfiniteAds({
    sortBy: 'created_at',
    order: 'desc',
    state: 4,
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
        <HowItWorksOne />
        {chiapas?.pages?.length &&
          chiapas?.pages?.length > 0 &&
          chiapas?.pages[0]?.data?.length > 0 && (
            <LastAdsOne
              title="Anuncios en"
              span="Chiapas"
              products={chiapas?.pages[0]?.data.slice(0, 4)?.map((data) => {
                const obj = { ...data };
                if (!obj.imgs || obj.imgs.length === 0) {
                  obj.imgs = [
                    './img/noimagen.png',
                  ];
                }
                return obj;
              })}
            />
          )}
        {yucatan?.pages?.length &&
          yucatan?.pages?.length > 0 &&
          yucatan?.pages[0]?.data?.length > 0 && (
            <LastAdsOne
              title="Anuncios en"
              span="Yucatán"
              products={yucatan?.pages[0]?.data.slice(0, 4)?.map((data) => {
                const obj = { ...data };
                if (!obj.imgs || obj.imgs.length === 0) {
                  obj.imgs = [
                    './img/noimagen.png',
                  ];
                }
                return obj;
              })}
            />
          )}
        {qroo?.pages?.length &&
          qroo?.pages?.length > 0 &&
          qroo?.pages[0]?.data?.length > 0 && (
            <LastAdsOne
              title="Anuncios en"
              span="Quintana Roo"
              products={qroo?.pages[0]?.data.slice(0, 4)?.map((data) => {
                const obj = { ...data };
                if (!obj.imgs || obj.imgs.length === 0) {
                  obj.imgs = [
                    './img/noimagen.png',
                  ];
                }
                return obj;
              })}
            />
          )}
        {campeche?.pages?.length &&
          campeche?.pages?.length > 0 &&
          campeche?.pages[0]?.data?.length > 0 && (
            <LastAdsOne
              title="Anuncios en"
              span="Campeche"
              products={campeche?.pages[0]?.data.slice(0, 4)?.map((data) => {
                const obj = { ...data };
                if (!obj.imgs || obj.imgs.length === 0) {
                  obj.imgs = [
                    './img/noimagen.png',
                  ];
                }
                return obj;
              })}
            />
          )}
        <AboutUsOne />
      </LayoutOne>
    </>
  );
};

export { Home };
