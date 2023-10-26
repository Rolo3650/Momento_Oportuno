import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { AdPreview } from '../modals/AdPreview';
import { Ad } from '../../api';
import { LogResForm } from '../modals/LogResForm';

interface Props {
  product: Ad;
}

const ActionsOne: React.FC<Props> = ({ product }: Props) => {
  const [compare, SetCompare] = useState<boolean>(false);
  const [isModalProductOpen, setIsModalProductOpen] = useState<boolean>(false);
  const [isModalLogResOpen, setIsModalLogResOpen] = useState<boolean>(false);

  const onClickCompare = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    SetCompare(!compare);
  };

  const onClickView = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsModalProductOpen(true);
    e.stopPropagation();
  };

  const onClickAddFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsModalLogResOpen(true);
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
          border: `1px solid ${'#FD8A2A'}`,
          transition: '.3s ease-in-out',
          '&:hover': {
            color: theme.palette.primary.main,
            border: `1px solid ${theme.palette.primary.main} !important`,
          },
        }}
        onClick={onClickAddFavorite}
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
