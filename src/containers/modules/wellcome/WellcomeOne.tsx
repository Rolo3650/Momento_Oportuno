import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const WellcomeOne: React.FC<Props> = ({ children }) => {
  return (
    <div className="wellcome wellcome-one">
      <div className="d-flex justify-content-between wellcome-body mx-auto px-4">
        {children}
      </div>
    </div>
  );
};

export { WellcomeOne };
