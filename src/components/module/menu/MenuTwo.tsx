import React, { useState, ReactNode } from 'react';
import { Button } from '@mui/material';

interface Props {
  children: ReactNode;
  text: string;
  overrideClass?: string;
  icon?: {
    link: string | undefined;
    name: string | undefined;
  };
}

const MenuTwo: React.FC<Props> = ({ children, text, overrideClass, icon }) => {
  const [togle, setTogle] = useState<boolean>(false);

  const onTogle = () => {
    setTogle(!togle);
  };

  return (
    <div>
      <Button
        variant="text"
        className={`w-100 px-4 d-block text-start m-0 py-4 ${overrideClass}`}
        sx={{
          color: '#333',
        }}
        onClick={onTogle}
      >
        {text}
        &nbsp;
        <span className="ms-2">
          <img src={icon?.link} alt={icon?.name} />
        </span>
      </Button>
      <hr className="m-0" />
      {togle && children}
    </div>
  );
};

export { MenuTwo };
