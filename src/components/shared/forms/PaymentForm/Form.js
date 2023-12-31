import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useUrl } from "nextjs-current-url";
import ErrorMessage from "@/components/toasts/ErrorMessage";
import SuccessMessage from "@/components/toasts/SuccessMessage";
import InfoMessage from "@/components/toasts/InfoMessage";

const Form = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { href } = useUrl() ?? {};
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret",
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage(
            <SuccessMessage title={"Success"} text={"Payment succeeded!"} />,
          );
          break;
        case "processing":
          setMessage(
            <InfoMessage
              title={"Processing"}
              text={"Your payment is processing."}
            />,
          );
          break;
        case "requires_payment_method":
          setMessage(
            <ErrorMessage
              title={"Error"}
              text={"Your payment was not successful, please try again."}
            />,
          );
          break;
        default:
          setMessage(
            <ErrorMessage title={"Error"} text={"Something went wrong."} />,
          );
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: href.includes("vercel")
          ? "https://inhonourofalegend.vercel.app/thank-you"
          : "http://localhost:3000/thank-you",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(<ErrorMessage title={"Error"} text={error.message} />);
    } else {
      setMessage(
        <ErrorMessage title={"Error"} text={"An unexpected error occurred."} />,
      );
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.target.value)}
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <div className="flex justify-center gap-2">
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="inline-flex mt-5 h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-primary-colour px-5 text-sm font-medium tracking-wide text-white hover:text-black transition duration-300 hover:bg-secondary-colour focus:bg-darker-purple focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:shadow-none"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
      </div>

      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default Form;
