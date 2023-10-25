import { LayoutOne } from '../../containers/layout/LayoutOne';
import { PhoneNumberOne } from '../../components/phoneNumber/PhoneNumberOne';
import { SendMessageOne } from '../../components/inputs/sendMessage/SendMessageOne';
import { UserAdsOne } from '../../containers/userAds/UserAdsOne';

const ProfilePage = () => {
  return (
    <LayoutOne>
      <div className="profile-toppart">
        <div className="profile-background">
          <div className="profile-picture">
            <img className="profile-userimg" src="/svg/icons/usr_frm.svg" />
          </div>
        </div>
        <div className="profile-info">
          <div className="profile-usernamediv">
            <h3 className="profile-username">user</h3>
          </div>
          <div className="profile-time">
            <div className="profile-time_user-img">
              <img
                className="profile-time_user-imguser"
                src="/svg/icons/usr_frm.svg"
              />
            </div>
            Miembro desde hace 3 semanas
          </div>
        </div>
      </div>
      <PhoneNumberOne phoneNumber={"+52 55 5555 5555"} />
      <SendMessageOne />
      <UserAdsOne
          
          products={[
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
  );
};

export { ProfilePage };
