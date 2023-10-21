import React, { ReactNode } from 'react';
import { Button } from '@mui/material';

interface Props {
  color: {
    text: string;
    background: string;
  };
  text: string;
  icon: {
    muiIcon: ReactNode;
  };
  onClick: () => void;
}

const FinesseButton: React.FC<Props> = ({ color, text, icon, onClick }) => {
  return (
    <Button
      color="secondary"
      variant="contained"
      className="px-4 py-3 btn-finesse btn"
      sx={{
        boxShadow: 'none',
        backgroundColor: color.background,
        '&:hover': {
          color: color.text,
          backgroundColor: color.background,
        },
      }}
      endIcon={icon.muiIcon}
      onClick={onClick}
    >
      <span className="left"></span>
      <span className="me-4">{text}</span>
      <span className="right"></span>
    </Button>
  );
};

export default FinesseButton;
