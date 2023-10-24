import { LayoutOne } from '../../containers/layout/LayoutOne';

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
              <img className="profile-time_user-imguser" src="/svg/icons/usr_frm.svg" />
            </div>
            Miembro desde hace 3 semanas
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};

export { ProfilePage };
