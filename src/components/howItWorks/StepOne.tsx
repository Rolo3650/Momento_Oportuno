import React from 'react';

interface Props {
  step: string;
  icon: {
    url: string;
  };
  color: {
    fill: string;
    constrast: string;
  };
}

const StepaOne: React.FC<Props> = ({ step, icon, color }) => {
  return (
    <div className="step">
      <div className="w-100 icon d-flex align-items-center justify-content-center">
        <div
          className={`d-flex align-items-center justify-content-center icon background background-color-${color?.fill}`}
        >
          <img src={icon?.url} alt={step} loading="lazy" />
        </div>
        <span
          className={`background background-color-${color?.constrast}`}
        ></span>
      </div>
      <div
        className={`text-center fs-4 text-font-rubik text text-color-${color?.fill}`}
      >
        {step}
      </div>
    </div>
  );
};

export { StepaOne };
