import React from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { useEffect } from 'react';
import { useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context';

interface Props {}

const Favorites: React.FC<Props> = () => {

  const { pathname } = useLocation();
  const navigateTo = useNavigate();
  const theme = useTheme();
  const { state } = useAppContext();

  useEffect(() => {
    if (!state?.userState?.token) {
      window.location.assign('/');
    }
  }, [state.userState]);
  
  return (
    <LayoutThree>
      <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
        Favoritos
      </h1>
      <div>
      </div>
    </LayoutThree>
  );
};

export { Favorites };
