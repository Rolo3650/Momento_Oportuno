import React, { useEffect } from 'react';
import { useAds } from '../../hooks';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useTheme } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Chip } from '@mui/material';

interface Props {}

const ProductDescriptionOne: React.FC<Props> = () => {
  const { adSingleState } = useAds();
  const theme = useTheme();

  useEffect(() => {
    console.log(adSingleState?.ad);
  }, []);

  return (
    <div className="product-decription product-decription-one card-custom">
      <div className="d-flex my-4 px-4 justify-content-between align-items-center">
        <div>
          <AccessTimeIcon
            sx={{
              color: 'white',
              backgroundColor: theme.palette.secondary.main,
            }}
            className=" p-1 rounded-circle"
          />
          <span className="fs-bold ms-2 text text-font-helvetica">
            {adSingleState?.ad?.create_at?.toLocaleDateString()}
          </span>
        </div>
        <div>
          <VisibilityIcon
            sx={{
              color: 'white',
              backgroundColor: theme.palette.secondary.main,
            }}
            className=" p-1 rounded-circle"
          />
          <span className="fs-bold ms-2 text text-font-helvetica">
            {adSingleState?.ad?.create_at?.toLocaleDateString()}
          </span>
        </div>
      </div>
      <div className="my-4 d-flex px-4 justify-content-between align-items-center">
        <div className="fs-3 text text-font-r-h-d text-color-7 fw-bold">
          {adSingleState?.ad?.title}
        </div>
      </div>
      <div className="my-4 d-flex px-4 justify-content-between align-items-center">
        <Chip label={adSingleState?.ad?.category.name} variant="outlined" />
      </div>
    </div>
  );
};

export { ProductDescriptionOne };
