import { LayoutOne } from '../../containers/layout/LayoutOne';

const ProfilePage = () => {
  return (
    <LayoutOne>
      <div className="profile-toppart">
        <div className="profile-background">
          <div className="profile-picture"></div>
        </div>

        <div className="profile-username"></div>
        <div className="profile-time"></div>
      </div>
    </LayoutOne>
  );
};

export { ProfilePage };
