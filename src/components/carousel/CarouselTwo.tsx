import { IconButton } from '@mui/material';
import React, { useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import '/utils/js/card-slider.js';

interface Props {}

const CarouselTwo: React.FC<Props> = () => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    import('../../utils/js/card-slider.js' as any);
  });

  return (
    <div className="body-card-container my-4">
      <div className="body-card">
        <div className="wrapper">
          <i
            id="left"
            className="fa-solid fa-angle-left d-flex align-items-center justify-content-center"
          >
            <IconButton>
              <ArrowBackIcon />
            </IconButton>
          </i>
          <ul className="carousel">
            <li className="card-slider">
              <img src="https://clicdelsureste.empresarialti.com/wp-content/uploads/2023/08/D_NQ_NP_826753-MLM69886534058_062023-O-1.webp" />
            </li>
            <li className="card-slider">
              <img src="https://clicdelsureste.empresarialti.com/wp-content/uploads/2023/08/D_NQ_NP_754622-MLM69886534052_062023-O-1.webp" />
            </li>
          </ul>
          <i
            id="right"
            className="fa-solid fa-angle-right d-flex align-items-center justify-content-center"
          >
            <IconButton>
              <ArrowForwardIcon />
            </IconButton>
          </i>
        </div>
      </div>
    </div>
  );
};

export { CarouselTwo };
