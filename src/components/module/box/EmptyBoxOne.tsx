import React from 'react';

interface Props {
  text: string;
}

const EmptyBoxOne: React.FC<Props> = ({ text }) => {
  return (
    <div className="background background-color-7 rounded-3 mt-4 border border-color-15">
      <div className="text-center text text-font-l-d fw-bold fs-4 text-color-5 py-5">
        {text}
      </div>
      <div className="text-center pb-5">
        <img src="/svg/icons/box_one.svg" alt="" />
      </div>
    </div>
  );
};

export { EmptyBoxOne };
