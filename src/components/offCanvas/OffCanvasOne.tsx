import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Props {
  title: string;
  open: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const OffCanvasOne: React.FC<Props> = ({ title, open, children, onClick }) => {
  const theme = useTheme();

  return (
    <div className="offcanvas-custom offcanvas-custom-one background background-color-7 rounded-3">
      <div
        className="header d-flex justify-content-between align-items-center px-5 py-3"
        onClick={onClick}
      >
        <div className="text text-font-rubik fw-bold fs-3">{title}</div>
        <div>
          <IconButton
            sx={{
              border: `1px solid ${
                open ? theme.palette.primary.main : theme.palette.secondary.main
              }`,
            }}
            className={open ? 'open' : ''}
            onClick={onClick}
          >
            <ArrowBackIcon
              sx={{
                color: open ? theme.palette.primary.main : '',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            />
          </IconButton>
        </div>
      </div>
      {open && <div className="px-5 form py-3">{children}</div>}
    </div>
  );
};

export { OffCanvasOne };
