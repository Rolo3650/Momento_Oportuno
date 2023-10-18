import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AppProvider } from './context';
import { queryClient } from './queryClient';
import { AppRouter } from './router/AppRouter';
import 'bootstrap/scss/bootstrap.scss';
import './styles/css/index.css';
import './styles/scss/index.scss';
import { ThemeOne } from './themes/ThemeOne';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <ThemeOne>
          <AppRouter />
        </ThemeOne>
        <ReactQueryDevtools initialIsOpen={false} />
      </AppProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
