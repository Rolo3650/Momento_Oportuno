// import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';

interface ButtonProps {
  title: string;
  colorPrimary: 'primary' | 'secondary';
  endIcon: React.ReactNode;
}
const GeneralButton = (props: ButtonProps) => {
    const theme = useTheme();
  const { title, colorPrimary, endIcon } = props;

  return (
    <Button
      color={colorPrimary}
      variant="contained"
      className="px-4 py-3 btn-ad-add btn"
      sx={{
        boxShadow: 'none',
        '&:hover': {
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.primary.main,
        },
      }}
      endIcon={endIcon}
    >
      <span className="left"></span>
      <span className="me-4">{title}</span>
      <span className="right"></span>
    </Button>
  );
};

export { GeneralButton };
