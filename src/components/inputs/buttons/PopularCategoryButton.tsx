import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';

interface Props {
  img?: string;
  text?: string;
  onClick?: () => void;
}

const PopularCategoriesButton: React.FC<Props> = ({ text, img, onClick }) => {
  const theme = useTheme();

  return (
    <Button
      sx={{
        height: '96px',
        width: '90px',
        padding: '10px',
        textTransform: 'none',
        color: '#464748',
        border: '1px solid',
        borderColor: theme.palette.secondary.main,
        borderRadius: '10px',
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: '#FFF',
          transition: '.3s ease-in-out',
        },
      }}
      className="btn btn-popular-category mx-2"
      onClick={onClick}
    >
      <div>
        <img src={img} alt="vehicle-category" />
        <p>{text}</p>
      </div>
    </Button>
  );
};

export { PopularCategoriesButton };
