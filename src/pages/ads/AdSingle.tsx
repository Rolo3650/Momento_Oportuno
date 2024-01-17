import { useEffect } from 'react';
import { CarouselTwo } from '../../components/carousel/CarouselTwo';
import { LayoutOne } from '../../containers/layout/LayoutOne';
import { useAdById, useAds, useInfiniteAds } from '../../hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { Ad } from '../../api';
import { BodyOne } from '../../containers/modules/body/BodyOne';
import { ProductDescriptionOne } from '../../components/product/ProductDescriptionOne';
import { UserMinOne } from '../../components/user/UserMinOne';
import { ActionsTwo } from '../../components/actions/ActionsTwo';
import { ProductOne } from '../../components/product/ProductOne';
import Carousel from 'react-bootstrap/Carousel';
import { useMyFavorites } from '../../hooks';

const AdSingle = () => {
  const { param_ad } = useParams();
  const { data, error } = useAdById(param_ad ?? 0);
  const { setSingleAd, adSingleState } = useAds();
  const { data: ads } = useInfiniteAds();
  const { data: favorites } = useMyFavorites();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (data?.pages[0]?.data) {
      const ad: Ad = data?.pages[0]?.data;
      // console.log("ad", ad);
      setSingleAd(ad, false);
    }

    if (error) {
      navigateTo('/404');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  return (
    <LayoutOne>
      <div className="ad-page ad-page-one">
        <div>
          {adSingleState.ad?.media && (
            <CarouselTwo
              imgs={(() => {
                const obj = { ...adSingleState.ad };
                if (!obj.media || obj.media.length === 0) {
                  obj.imgs = ['/img/noimagen.png'];
                } else {
                  if (obj.media)
                    obj.imgs = obj.media.map((img) => img.original_url);
                }
                return obj.imgs ?? [];
              })()}
            />
          )}
        </div>
        <BodyOne>
          <ProductDescriptionOne />
          <div>
            <UserMinOne />
            <div className="my-4 d-flex justify-content-center product-decription product-decription-one card-custom p-3">
              <ActionsTwo
                product={adSingleState?.ad}
                fav={favorites?.data.some(
                  (fav) => fav.id === adSingleState?.ad?.id
                )}
              />
            </div>
            <Carousel>
              {ads?.pages[0]?.data?.slice(0, 4)?.map((product) => {
                const obj = { ...product };
                if (!obj.media || obj.media.length === 0) {
                  obj.imgs = ['/img/noimagen.png'];
                } else {
                  obj.imgs = obj.media.map((img) => img.original_url);
                }
                // console.log(obj);
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
