// import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const MenuButton = () => {
  const theme = useTheme();
  return (
    <IconButton
      data-bs-toggle="offcanvas"
      data-bs-target="#offCanvasMenuPhone"
      aria-controls="offCanvasMenuPhone"
      sx={{
        border: `2px solid ${theme.palette.secondary.main}`,
      }}
    >
      <MenuIcon
        sx={{
          fontSize: '30px',
          color: theme.palette.primary.contrastText,
        }}
      />
    </IconButton>
  );
};

export { MenuButton };
