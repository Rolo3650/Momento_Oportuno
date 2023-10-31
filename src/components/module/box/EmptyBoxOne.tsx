import React from 'react';

interface Props {
  text: string;
  imgSrc: string;
  button?: JSX.Element;
}

const EmptyBoxOne: React.FC<Props> = ({ text, imgSrc, button }) => {
  return (
    <div className="background background-color-7 rounded-3 mt-4 border border-color-15">
      <div className="text-center text text-font-l-d fw-bold fs-4 text-color-5 py-5">
        {text}
      </div>
      <div className="text-center pb-5">
        <img src={imgSrc} alt="" />
      </div>
      {button ? (
        <div className="text-center mb-5">
          {button}
        </div>
      ) : null}

    </div>
  );
};

export { EmptyBoxOne };
