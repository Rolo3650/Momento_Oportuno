import React from 'react';
import { StepOne } from './steps/StepOne';
import { StepTwo } from './steps/StepTwo';
import StepThree from './steps/StepThree';
import { Addons } from './steps/Addons/Addons';

interface Props {}

const FormOne: React.FC<Props> = () => {

  return (
    <div className="form-custom form-custom-one background background-color-7 rounded-4">
      <StepOne />
      <StepTwo />
      <StepThree />
      <Addons />
    </div>
  );
};

export { FormOne };
