import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/css/index.css';
import './styles/scss/index.scss';
import { AppRouter } from './router/AppRouter';
import { ReducerContext } from './context/useReducer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReducerContext>
      <AppRouter />
    </ReducerContext>
  </React.StrictMode>
);
