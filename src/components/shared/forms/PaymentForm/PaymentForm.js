"use client";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Form from "@/components/shared/forms/PaymentForm/Form";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

export default function PaymentForm({ amount }) {
  const [clientSecret, setClientSecret] = useState(null);
  // const stripe = useStripe();
  // const elements = useElements();

  useEffect(() => {
    axios
      .post("/api/create-payment-intent", {
        data: { amount },
      })
      .then((data) => setClientSecret(data.data));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    clientSecret && (
      <Elements options={options} stripe={stripePromise}>
        <Form />
      </Elements>
    )
  );
}
