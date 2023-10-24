import React, { ReactNode } from 'react';
import { HeaderOne } from '../../components/module/header/HeaderOne';
import { SideBarOne } from '../../components/module/sidebar/SideBarOne';
import { FooterOne } from '../../components/module/footer/FooterOne';

interface Props {
  children: ReactNode;
}

const LayoutOne: React.FC<Props> = ({ children }) => {
  return (
    <>
      <HeaderOne />
      <SideBarOne />
      {children}
      <FooterOne />
    </>
  );
};

export { LayoutOne };