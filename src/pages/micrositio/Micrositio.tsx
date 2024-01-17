import { LayoutOne } from '../../containers/layout/LayoutOne';
import { PhoneNumberOne } from '../../components/phoneNumber/PhoneNumberOne';
// import { SendMessageOne } from '../../components/inputs/sendMessage/SendMessageOne';
import { useMicrositio } from '../../hooks/micrositios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import moment from 'moment';
import { ProductOne } from '../../components/product/ProductOne';
// import { UserAdsOne } from '../../containers/userAds/UserAdsOne';

const Micrositio = () => {
  const { id } = useParams();
  const { data } = useMicrositio(parseInt(id ?? '0', 10));

  useEffect(() => {
    console.log('DATAMICRO:', data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <LayoutOne>
      <div className="profile-toppart">
        <div className="profile-background">
          <div className="profile-picture">
            <img
              className="profile-userimg"
              src={
                data?.data.media?.length ? data?.data.media[0].original_url : ''
              }
            />
          </div>
        </div>
        <div className="profile-info">
          <div className="profile-usernamediv">
            <h4 className="profile-username">{data?.data?.title}</h4>
          </div>
          <div className="mt-3 text text-font-l-d text-color-">
            <h3 className="">{data?.data?.email}</h3>
          </div>
          <div className="profile-time mt-3">
            <div className="profile-time_user-img">
              <img
                className="profile-time_user-imguser"
                src="/svg/icons/usr_frm.svg"
              />
            </div>
            {moment(data?.data.created_at ?? new Date()).format('DD/MM/YYYY')}
          </div>
        </div>
      </div>
      <PhoneNumberOne phoneNumber={data?.data.phone ?? ''} />
      {/* <SendMessageOne /> */}
      {/* <UserAdsOne
          
          products={[
            {
              id: 1,
              imgs: ['./img/examples/img_1.webp', './img/noimagen.png'],
              title: 'Porsche Cayman 2.7 Coupe Pdk At',
              price: 375000,
              views: 10,
              is_featured: false,
            },
            
          ]}
        /> */}
      <div className="microsite-single listings mx-auto mb-5">
        {data?.data.user &&
          data?.data.user.listings?.length &&
          data?.data.user.listings?.length > 0 &&
          data?.data.user.listings?.map((listing) => {
            // listing.imgs = [`${listing.thumbnail}`];
            return <ProductOne product={listing} />;
          })}
      </div>
    </LayoutOne>
  );
};

export { Micrositio };
