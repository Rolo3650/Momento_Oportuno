import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import { StripeWrapper } from './Wrapper';

const PayOne = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [validForm, setValidForm] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validForm) return;

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    console.log({ elements, CardElement });
    if (!cardElement) return console.log('No card element');

    const res = await stripe.createToken(cardElement);

    console.log({
      cardElement,
      token: res.token,
      card: res.token?.card,
    });
  };

  return (
    <StripeWrapper>
      <form onSubmit={handleSubmit}>
        <CardElement
          onChange={(p) => {
            console.log(p);
            setValidForm(p.complete);
          }}
          options={{
            hidePostalCode: true,
          }}
        />
        <button
          disabled={!stripe || !elements || !validForm}
          type="submit"
          className="btn btn-primary mt-3"
        >
          Submit
        </button>
      </form>
    </StripeWrapper>
  );
};

export { PayOne };
