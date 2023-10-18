import { useTheme } from '@mui/material/styles';
// import React from 'react';

const HeaderOne = () => {
  const theme = useTheme();

  return (
    <div className={`d-flex align-items-center header-one ${theme.palette.mode}`}>
      <img
        src="../../../img/logos/elmomentoportunoblanco.png"
        alt="white-logo"
        className="logo"
      />
    </div>
  );
};

export { HeaderOne };
