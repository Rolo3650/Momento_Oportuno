import React, { ReactNode } from 'react';
import { HeaderOne } from '../../components/module/header/HeaderOne';
import { SideBarOne } from '../../components/module/sidebar/SideBarOne';
import { FooterOne } from '../../components/module/footer/FooterOne';
import { NavbarOne } from '../../components/module/navbar/NavbarOne';

interface Props {
  children: ReactNode;
}

const LayoutThree: React.FC<Props> = ({ children }) => {
  return (
    <>
      <HeaderOne />
      <SideBarOne />
      <NavbarOne />
      <div className="page-body page-body-two">
        <div className="container d-block">{children}</div>
      </div>
      <FooterOne />
    </>
  );
};

export { LayoutThree };
