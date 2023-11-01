// import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';

interface ButtonProps {
  title: string;
  colorPrimary: 'primary' | 'secondary';
  hoverColor?: 'primary' | 'secondary'
  endIcon: React.ReactNode;
  height?: string;
  width?: string;
  onClick?: () => void;
}
const GeneralButton = (props: ButtonProps) => {
  const theme = useTheme();
  const { title, colorPrimary, endIcon, hoverColor, onClick, height, width } = props;

  return (
    <Button
      color={colorPrimary}
      variant="contained"
      className="px-4 py-3 btn-ad-add btn"
      sx={{
        height: {height},
        width: {width},
        boxShadow: 'none',
        '&:hover': {
          color: (hoverColor && hoverColor === "secondary") ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText,
          backgroundColor: (hoverColor && hoverColor === "secondary") ? theme.palette.secondary.main : theme.palette.primary.main,
        },
      }}
      endIcon={endIcon}
      onClick={onClick}
    >
      <span className="left"></span>
      <span className="me-4">{title}</span>
      <span className="right"></span>
    </Button>
  );
};

export { GeneralButton };
