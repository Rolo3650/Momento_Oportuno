// import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';

const AdAddButtonOne = () => {
  const theme = useTheme();

  return (
    <Button
      color="secondary"
      variant="contained"
      className="px-4 py-3 btn-ad-add btn"
      sx={{
        boxShadow: 'none',
        '&:hover': {
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.secondary.main,
        },
      }}
      endIcon={<AddIcon />}
    >
      <span className="left"></span>
      <span className="me-4">Crear Anuncio</span>
      <span className="right"></span>
    </Button>
  );
};

export { AdAddButtonOne };
