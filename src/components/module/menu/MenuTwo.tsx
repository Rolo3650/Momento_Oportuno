import React, { useState, ReactNode } from 'react';
import { Button } from '@mui/material';

interface Props {
  children: ReactNode;
  text: string;
  overrideClass?: string;
}

const MenuTwo: React.FC<Props> = ({ children, text, overrideClass }) => {
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
      </Button>
      <hr className="m-0" />
      {togle && children}
    </div>
  );
};

export { MenuTwo };
