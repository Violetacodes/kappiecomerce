import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import {getTotalPrice} from "../../../redux/cartSlice";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [messageSuccess, setMessageSuccess] = useState(false);
  const totalPrice = useSelector(getTotalPrice);
  const amountForStripe = totalPrice * 100;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:8080/stripe/charge",
          {
            amount: amountForStripe,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          setMessageSuccess(true)
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div>
        {!messageSuccess ?
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <CardElement />
      <button className="pay">Pay</button>
      <div>
      *Enter 4242 4242 4242 4242 as the card number.
      Enter any future date for card expiry, any 3-digit number for CVC and billing postal code.
      </div>

    </form>
:
    <div>
<h2>Your payment was successfull!</h2>
<p>Thank you!</p>
    </div>
}
    </div>
  );
};
