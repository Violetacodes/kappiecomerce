import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51LDD22ITayAG55u0DLq75hFQtHMQSUFBdNCd0vLvyDk540VOUsHaUjkUHCB95YehWhN9uHrLI6epxR7rMGmZCkhi00gA1vIhRx";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
        <div className="chekout">
      <CheckoutForm />
      </div>
    </Elements>
  );
};

export default Stripe;