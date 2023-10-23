// import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, useTheme } from '@mui/material';
import { CategoriesFilter } from '../../categories/CategoriesFilter';

const SideBarTwo = () => {
  const theme = useTheme();

  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex={-1}
      id="offCanvasCategoryFilter"
      aria-labelledby="offCanvasCategoryFilterLabel"
    >
      <div className="offcanvas-header d-flex align-items-center">
        <h5
          className="text text-font-l-d fs-3 m-0 d-flex align-items-center"
          id="offCanvasCategoryFilterLabel"
        >
          Filtros
        </h5>
        <IconButton
          sx={{
            border: `2px solid ${theme.palette.secondary.main}`,
          }}
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <CloseIcon
            sx={{
              fontSize: '30px',
            }}
          />
        </IconButton>
      </div>
      <div className="offcanvas-body">
        <CategoriesFilter />
      </div>
    </div>
  );
};

export { SideBarTwo };
