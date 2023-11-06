// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { AdsSearch } from '../pages/ads/AdsSearch';
import { AdSingle } from '../pages/ads/AdSingle';
import { LogRes } from '../pages/user/LogRes';
import { ProfilePage } from '../pages/user/ProfilePage';
import { AddNewAd } from '../pages/user/AddNewAd';
import { MyAds } from '../pages/user/MyAds';
import { Favorites } from '../pages/user/Favorites';
import { Messages } from '../pages/user/Messages';
import { MyOrders } from '../pages/user/MyOrders';
import { Directories } from '../pages/user/Directories';
import { Setting } from '../pages/user/Settings';
import { CreateMicrositio } from '../pages/user/CreateMicrositio';
import { Micrositios } from '../pages/user/Micrositios';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Ads */}
        <Route path="/ads" element={<AdsSearch />} />
        <Route path="/ads/:param_category" element={<AdsSearch />} />
        <Route path="/ad" element={<AdSingle />} />
        <Route path="/ad/:param_ad" element={<AdSingle />} />

        {/* User */}
        <Route path="/login-register" element={<LogRes />} />
        <Route path="/user" element={<ProfilePage />} />
        <Route path="/panel/create" element={<AddNewAd />} />
        <Route path="/panel/list" element={<MyAds />} />
        <Route path="/panel/favorites" element={<Favorites />} />
        <Route path="/panel/Messages" element={<Messages />} />
        <Route path="/panel/my-orders" element={<MyOrders />} />
        <Route path="/panel/directories" element={<Directories />} />
        <Route path="/micrositios/create" element={<CreateMicrositio />} />
        <Route path="/micrositios/micrositios-campeche" element={<Micrositios cityName="Campeche" />} />
        <Route path="/micrositios/micrositios-quintanaroo" element={<Micrositios cityName="Quintana Roo"/>} />
        <Route path="/micrositios/micrositios-yucatan" element={<Micrositios cityName="Yucatan"  />} />
        <Route path="/panel/settings" element={<Setting />} />

        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
