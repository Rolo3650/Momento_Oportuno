import { IconButton } from '@mui/material';
import React, { useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import '/utils/js/card-slider.js';

interface Props {
  imgs: string[];
}

const CarouselTwo: React.FC<Props> = ({ imgs }) => {
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
            {imgs?.map((img) => (
              <li className="card-slider">
                <img src={img} />
              </li>
            ))}
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
