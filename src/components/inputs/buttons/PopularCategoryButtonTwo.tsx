import React from 'react';
import { Box, Button } from '@mui/material';

interface Props {
  img?: string;
  text?: string;
  onClick?: () => void;
}

const PopularCategoriesButtonTwo: React.FC<Props> = ({
  text,
  img,
  onClick,
}) => {

  return (
    <Box
      width={'240px'}
      height={'320px'}
      borderRadius={'20px'}
      overflow={'hidden'}
      alignItems={'center'}
      justifyContent={'center'}
      display={'flex'}
      flexDirection={'column'}
      className="background background-color-7"
    >
      <img src={img} alt="" style={{ width: '160px', height: '160px' }} />
      <p
        className="text text-font-helvetica text-color-18 my-2"
        style={{ fontWeight: '500', fontSize: '24px' }}
      >
        {text}
      </p>
      <Button
        className="px-5"
        sx={{ borderRadius: '10px', textTransform: 'none' }}
        variant="contained"
        onClick={onClick}
      >
        Ver más
      </Button>
    </Box>
  );
};

export { PopularCategoriesButtonTwo };
