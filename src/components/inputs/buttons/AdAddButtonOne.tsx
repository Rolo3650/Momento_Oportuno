// import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { LogResForm } from '../../modals/LogResForm';
import { useState } from 'react';
import { useAppContext } from '../../../context';

const AdAddButtonOne = () => {
  const theme = useTheme();
  const navigateTov = useNavigate();
  const [isModalLogResOpen, setIsModalLogResOpen] = useState<boolean>(false);
  const { state } = useAppContext();

  return (
    <>
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
        onClick={() => {
          if (!state?.userState?.token) {
            setIsModalLogResOpen(true);
            return;
          } else navigateTov('/panel/create');
        }}
      >
        <span className="left"></span>
        <span className="me-4">Crear Anuncio</span>
        <span className="right"></span>
      </Button>
      <LogResForm
        show={isModalLogResOpen}
        onHide={() => setIsModalLogResOpen(false)}
      />
    </>
  );
};

export { AdAddButtonOne };
