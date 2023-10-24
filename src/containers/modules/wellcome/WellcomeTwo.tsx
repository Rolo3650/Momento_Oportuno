import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const WellcomeTwo: React.FC<Props> = ({ children }) => {
  return (
    <div className="wellcome wellcome-two">
      <div className="d-flex wellcome-body mx-auto px-4">
        {children}
      </div>
    </div>
  );
};

export { WellcomeTwo };