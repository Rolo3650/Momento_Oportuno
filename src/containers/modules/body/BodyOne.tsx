import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const BodyOne: React.FC<Props> = ({ children }) => {
  return <div className="page-body page-body-one my-3 mx-auto">{children}</div>;
};

export { BodyOne };
