// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { AdsSearch } from '../pages/ads/AdsSearch';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Ads */}
        <Route path="/ads" element={<AdsSearch />} />

        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
