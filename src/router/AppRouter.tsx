// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { AdsSearch } from '../pages/ads/AdsSearch';
import { AdSingle } from '../pages/ads/AdSingle';
import { LogRes } from "../pages/user/LogRes";

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

        <Route path="/login-register" element={<LogRes />} />

        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
