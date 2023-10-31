import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Ad } from '../../api';
import { LogResForm } from '../modals/LogResForm';
import { useAddFavorite, useRemoveFavorite } from '../../hooks';
import { useAppContext } from '../../context';

interface Props {
  product: Ad | null;
  fav?: boolean;
}

const ActionsTwo: React.FC<Props> = ({ product, fav }) => {
  const { state } = useAppContext();

  const [compare, SetCompare] = useState<boolean>(false);
  const [isModalLogResOpen, setIsModalLogResOpen] = useState<boolean>(false);

  const { mutate: add, isLoading: load1 } = useAddFavorite();
  const { mutate: remove, isLoading: load2 } = useRemoveFavorite();

  const toggleLoad = load1 || load2;

  const onClickCompare = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    SetCompare(!compare);
  };

  const onClickView = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  const toggle = (id: number) => {
    if (fav) {
      remove(id);
    } else {
      add(id);
    }
  };

  const onClickAddFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!state?.userState?.token) {
      setIsModalLogResOpen(true);
      return;
    }

    if (product?.id) {
      toggle(product.id);
    }

    e.stopPropagation();
  };

  const theme = useTheme();

  return (
    <div>
      <IconButton
        sx={{
          border: `1px solid ${'#FD8A2A'}`,
          transition: '.3s ease-in-out',
          '&:hover': {
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main} !important`,
          },
        }}
        onClick={onClickView}
      >
        <VisibilityOutlinedIcon
          sx={{
            fontSize: '25px',
          }}
        />
      </IconButton>
      <IconButton
        className="ms-2"
        sx={{
          color: compare ? 'white' : '',
          border: `1px solid ${compare ? `${theme.palette.primary.main} !important` : '#FD8A2A'
            }`,
          transition: '.3s ease-in-out',
          '&:hover': {
            color: compare ? 'white' : theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main} !important`,
            backgroundColor: `${compare ? theme.palette.primary.main : ''}`,
          },
          backgroundColor: `${compare ? theme.palette.primary.main : ''}`,
        }}
        onClick={onClickCompare}
      >
        <CompareArrowsOutlinedIcon
          sx={{
            fontSize: '25px',
          }}
        />
      </IconButton>
      <IconButton
        className="ms-2"
        sx={{
          backgroundColor: fav ? theme.palette.primary.main : '',
          color: fav ? 'white' : '',
          border: `1px solid ${'#FD8A2A'}`,
          transition: '.3s ease-in-out',
          '&:hover': {
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main} !important`,
          },
        }}
        onClick={onClickAddFavorite}
        disabled={toggleLoad}
      >
        <FavoriteBorderOutlinedIcon
          sx={{
            fontSize: '25px',
          }}
        />
      </IconButton>
      <LogResForm
        show={isModalLogResOpen}
        onHide={() => setIsModalLogResOpen(false)}
      />
    </div>
  );
};

export { ActionsTwo };
