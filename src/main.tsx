// import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AppProvider } from './context';
import { queryClient } from './queryClient';
import { AppRouter } from './router/AppRouter';
import 'jquery';
import './utils/css/cars-slider.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.css';
import './styles/scss/index.scss';
import { ThemeOne } from './themes/ThemeOne';
import { CookiesProvider } from 'react-cookie';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <CookiesProvider>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <ThemeOne>
          <AppRouter />
        </ThemeOne>
        <ReactQueryDevtools initialIsOpen={false} />
      </AppProvider>
    </QueryClientProvider>
  </CookiesProvider>
  // </React.StrictMode>
);