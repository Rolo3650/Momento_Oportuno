import React, { useState, useCallback, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { AdPreview } from '../modals/AdPreview';
import { Ad } from '../../api';
import { LogResForm } from '../modals/LogResForm';
import { useAppContext } from '../../context';
import { useAddFavorite, useRemoveFavorite, useMyFavorites } from '../../hooks';

interface Props {
  product: Ad;
}

const ActionsOne: React.FC<Props> = ({ product }: Props) => {
  const { state } = useAppContext();

  const [compare, SetCompare] = useState<boolean>(false);
  const [isModalProductOpen, setIsModalProductOpen] = useState<boolean>(false);
  const [isModalLogResOpen, setIsModalLogResOpen] = useState<boolean>(false);

  const { data: favorites } = useMyFavorites();
  const { mutate: add, isLoading: load1 } = useAddFavorite();
  const { mutate: remove, isLoading: load2 } = useRemoveFavorite();

  // useEffect(() => {
  //   console.log("favoritos:",favorites?.data);
  //   console.log("producto:",product);
  // }, []);

  const toggleLoad = load1 || load2;

  const toggle = useCallback(
    (id: number) => {
      if (favorites?.data.some((fav) => fav.id === id)) {
        remove(id);
      } else {
        add(id);
      }
    },
    [favorites]
  );

  const onClickCompare = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    SetCompare(!compare);
  };

  const onClickView = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsModalProductOpen(true);
    e.stopPropagation();
  };

  const onClickAddFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!state?.userState?.token) {
      setIsModalLogResOpen(true);
      return;
    }
    
    toggle(product.id);
    console.log("favorito:", favorites?.data.filter((fav) => fav.id===product.id))

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
            fontSize: '17px',
          }}
        />
      </IconButton>

      <IconButton
        className="ms-2"
        sx={{
          color: compare ? 'white' : '',
          border: `1px solid ${
            compare ? `${theme.palette.primary.main} !important` : '#FD8A2A'
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
            fontSize: '17px',
          }}
        />
      </IconButton>
      <IconButton
        className="ms-2"
        sx={{
          backgroundColor: favorites?.data.some((fav) => fav.id === product?.id) ? theme.palette.primary.main : '',
          color: favorites?.data.some((fav) => fav.id === product?.id) ? 'white' : '',
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
            fontSize: '17px',
          }}
        />
      </IconButton>
      <AdPreview
        show={isModalProductOpen}
        onHide={() => setIsModalProductOpen(false)}
        product={product}
      />
      <LogResForm
        show={isModalLogResOpen}
        onHide={() => setIsModalLogResOpen(false)}
      />
    </div>
  );
};

export { ActionsOne };
