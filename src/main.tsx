import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/css/index.css';
import './styles/scss/index.scss';
import { AppRouter } from './router/AppRouter';
import { AppProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </React.StrictMode>
);
