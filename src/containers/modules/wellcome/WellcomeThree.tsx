import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const WellcomeThree: React.FC<Props> = ({ children }) => {
  return (
    <div className="wellcome wellcome-three">
      <div className="d-flex wellcome-body mx-auto px-4">
        {children}
      </div>
    </div>
  );
};

export { WellcomeThree };
