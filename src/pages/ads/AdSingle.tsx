import { useEffect } from 'react';
import { CarouselTwo } from '../../components/carousel/CarouselTwo';
import { LayoutOne } from '../../containers/layout/LayoutOne';
import { useAdById, useAds, useInfiniteAds } from '../../hooks';
import { useParams } from 'react-router-dom';
import { Ad } from '../../api';
import { BodyOne } from '../../containers/modules/body/BodyOne';
import { ProductDescriptionOne } from '../../components/product/ProductDescriptionOne';
import { UserMinOne } from '../../components/user/UserMinOne';
import { ActionsTwo } from '../../components/actions/ActionsTwo';
import { ProductOne } from '../../components/product/ProductOne';
import Carousel from 'react-bootstrap/Carousel';

const AdSingle = () => {
  const { param_ad } = useParams();
  const { data } = useAdById(param_ad ?? 0);
  const { setSingleAd, adSingleState } = useAds();
  const { data: ads } = useInfiniteAds();

  useEffect(() => {
    if (data?.pages[0]?.data) {
      const ad: Ad = data?.pages[0]?.data;
      setSingleAd(ad, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <LayoutOne>
      <div className="ad-page ad-page-one">
        <div>
          <CarouselTwo
            imgs={[
              'https://clicdelsureste.empresarialti.com/wp-content/uploads/2023/08/D_NQ_NP_826753-MLM69886534058_062023-O-1.webp',
              'https://clicdelsureste.empresarialti.com/wp-content/uploads/2023/08/D_NQ_NP_754622-MLM69886534052_062023-O-1.webp',
            ]}
          />
        </div>
        <BodyOne>
          <ProductDescriptionOne />
          <div>
            <UserMinOne />
            <div className="my-4 d-flex justify-content-center product-decription product-decription-one card-custom p-3">
              <ActionsTwo product={adSingleState?.ad}/>
            </div>
            <Carousel>
              {ads?.pages[0]?.data?.slice(0, 4)?.map((product) => {
                const obj = { ...product };
                if (!obj?.imgs?.length) {
                  obj.imgs = [
                    'https://clicdelsureste.empresarialti.com/wp-content/uploads/2023/08/D_NQ_NP_826753-MLM69886534058_062023-O-1.webp',
                    'https://clicdelsureste.empresarialti.com/wp-content/uploads/2023/08/D_NQ_NP_754622-MLM69886534052_062023-O-1.webp',
                  ];
                }
                return (
                  <Carousel.Item>
                    <div className="p-3">
                      <ProductOne product={obj} />
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </BodyOne>
      </div>
    </LayoutOne>
  );
};

export { AdSingle };
