import { Elements } from '@stripe/react-stripe-js';
import { FC, PropsWithChildren } from 'react';

import { loadStripe } from '@stripe/stripe-js';

const stripe = await loadStripe(
  // (() => {
  //   const key = config.STRIPE.PK_DEV;
  //   console.log('on IIFE', key);
  //   return key;
  // })()
  'pk_test_51O3l3TKsMUZdYHBYf1tQxzYgxuI3AnwaHApYA8GFH9QR0mFkq222o9ISceK4Ucg1nQqZt9nkr4wr5Ryn1LBXwKRs00m40i9780'
);

export const StripeWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <Elements stripe={stripe}>{children}</Elements>;
};
