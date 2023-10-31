import React from 'react';
import { LayoutThree } from '../../containers/layout/LayoutThree';
import { EmptyBoxOne } from '../../components/module/box/EmptyBoxOne';

interface Props {}

const Messages: React.FC<Props> = () => {
  return (
    <LayoutThree>
      <h1 className="title text text-font-georgia fw-bold fs-2 text-color-5">
        Mensajes
      </h1>
      <EmptyBoxOne text="No tienes mensajes por el momento." imgSrc="/svg/icons/message_empty.svg"/>
    </LayoutThree>
  );
};

export { Messages };