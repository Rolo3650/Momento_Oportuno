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
import { Listings } from '../pages/pago/Listings';
import { AddNewDirectory } from '../pages/user/AddNewDirectory';
import { Confirmacion } from '../pages/pago/Confirmacion';
import { Micrositio } from '../pages/micrositio/Micrositio';
import { DirectoriesPayment } from '../pages/pago/DirectoriesPayment';
import { LocalDirectories } from '../pages/user/LocalDirectories';
import { MicrositesPayment } from '../pages/pago/MicrositesPayment';
import { Nosotros } from '../pages/info/Nosotros';
import { Contactanos } from '../pages/info/Contactanos';
import { Page404 } from '../pages/404/Index';
import { EditAd } from '../pages/user/EditAd';
import { Terminos } from '../pages/info/Terminos';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Nosotros />} />
        <Route path="/contact-us" element={<Contactanos />} />
        <Route path="/legal-terms" element={<Terminos />} />

        {/* Ads */}
        <Route path="/ads" element={<AdsSearch />} />
        <Route path="/ads/:param_category" element={<AdsSearch />} />
        <Route path="/ad" element={<AdSingle />} />
        <Route path="/ad/:param_ad" element={<AdSingle />} />

        {/* User */}
        <Route path="/login-register" element={<LogRes />} />
        <Route path="/user" element={<ProfilePage />} />
        <Route path="/panel/create" element={<AddNewAd />} />
        <Route path="/panel/edit" element={<EditAd />} />
        <Route path="/panel/list" element={<MyAds />} />
        <Route path="/panel/favorites" element={<Favorites />} />
        <Route path="/panel/Messages" element={<Messages />} />
        <Route path="/panel/my-orders" element={<MyOrders />} />
        <Route path="/directories/" element={<LocalDirectories />} />
        <Route path="/directories/:id" element={<LocalDirectories />} />
        <Route path="/panel/directories" element={<Directories />} />
        <Route path="/panel/directories/create" element={<AddNewDirectory />} />
        <Route path="/micrositios/create" element={<CreateMicrositio />} />
        <Route path="/micrositio/:id" element={<Micrositio />} />
        <Route
          path="/micrositios/micrositios-campeche"
          element={<Micrositios cityName="Campeche" />}
        />
        <Route
          path="/micrositios/micrositios-quintanaroo"
          element={<Micrositios cityName="Quintana Roo" />}
        />
        <Route
          path="/micrositios/micrositios-yucatan"
          element={<Micrositios cityName="Yucatan" />}
        />
        <Route path="/panel/settings" element={<Setting />} />

        {/* Pago */}
        <Route path="/panel/listings/pago" element={<Listings />} />
        <Route
          path="/panel/directories/pago"
          element={<DirectoriesPayment />}
        />
        <Route path="/panel/microsites/pago" element={<MicrositesPayment />} />
        <Route path="/comprobante/:orderid" element={<Confirmacion />} />

        <Route path="/404" element={<Page404 />} />

        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
