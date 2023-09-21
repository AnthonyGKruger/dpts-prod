import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { userActions } from "@/store/user-slice";
import { useDispatch, useSelector } from "react-redux";
import CartTable from "@/components/shared/forms/cart/CartTable";

import PaymentForm from "@/components/shared/forms/PaymentForm/PaymentForm";

const CartModal = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const wrapperRef = useRef(null);
  const [isShowing, setIsShowing] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false);
        setShowPaymentForm(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    let html = document.querySelector("html");

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = "hidden";

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        const modal = document.querySelector("#cart-modal"); // select the modal by it's [id]

        const firstFocusableElement =
          modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal

        const focusableContent = modal.querySelectorAll(focusableElements);

        const lastFocusableElement =
          focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

        document.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            setIsShowing(false);
            setShowPaymentForm(false);
          }

          let isTabPressed = e.key === "Tab" || e.keyCode === 9;

          if (!isTabPressed) {
            return;
          }

          if (e.shiftKey) {
            // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus(); // add focus for the last focusable element
              e.preventDefault();
            }
          } else {
            // if tab key is pressed
            if (document.activeElement === lastFocusableElement) {
              // if focused has reached to last focusable element then focus first focusable element after pressing tab
              firstFocusableElement.focus(); // add focus for the first focusable element
              e.preventDefault();
            }
          }
        });

        firstFocusableElement.focus();
      } else {
        html.style.overflowY = "visible";
      }
    }
  }, [isShowing]);

  const clearCartHandler = () => {
    dispatch(userActions.clearCartHandler());
  };

  const showPaymentFormHandler = () => {
    setShowPaymentForm((state) => !state);
  };

  return (
    <>
      <button
        onClick={() => setIsShowing(true)}
        className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-primary-colour px-5 text-sm font-medium tracking-wide text-white hover:text-black transition duration-300 hover:bg-secondary-colour focus-visible:outline-none"
      >
        <span>Cart</span>
        {state.totalItems > 0 ? (
          <span className="ml-2 inline-block whitespace-nowrap rounded-[0.27rem] bg-white px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-colour">
            {state.totalItems}
          </span>
        ) : (
          ""
        )}
      </button>

      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
              aria-labelledby="cart modal"
              aria-modal="true"
              tabIndex="-1"
              role="dialog"
            >
              {/*    <!-- Modal --> */}
              <div
                ref={wrapperRef}
                className="flex h-fit xl:w-1/3 lg:w-7/12 md:w-2/3 w-11/12 flex-col gap-4 overflow-hidden rounded-xl bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                id="cart-modal"
                role="document"
              >
                {/*        <!-- Modal header --> */}
                <header id="login header" className="flex items-center">
                  <h3 className="flex-1 text-lg font-medium text-slate-700">
                    {state.cart.length === 0 ? "Oops!" : "Your Cart!"}
                  </h3>
                  <button
                    onClick={() => {
                      setIsShowing(false);
                      setShowPaymentForm(false);
                    }}
                    className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide  text-primary-colour transition duration-300 hover:bg-secondary-colour hover:text-darker-purple focus:bg-secondary-colour focus:text-darker-purple focus-visible:outline-none disabled:cursor-not-allowed disabled:text-yellow-300 disabled:shadow-none disabled:hover:bg-transparent"
                    aria-label="close dialog"
                  >
                    <span className="relative only:-mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                        aria-labelledby="login close"
                      >
                        <title id="close login modal">Close modal</title>
                        <desc id="close login modal">
                          A icon to close the modal
                        </desc>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                </header>

                {state.cart.length === 0 ? (
                  <p>Your cart is currently empty!</p>
                ) : showPaymentForm ? (
                  <PaymentForm amount={state.totalItems * 1499} />
                ) : (
                  <CartTable />
                )}

                {!showPaymentForm && (
                  <div className="flex justify-center gap-2">
                    {state.cart.length === 0 ? (
                      <button
                        onClick={() => setIsShowing(false)}
                        className="inline-flex mt-5 h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-primary-colour px-5 text-sm font-medium tracking-wide text-white hover:text-black transition duration-300 hover:bg-secondary-colour focus:bg-darker-purple focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:shadow-none"
                      >
                        Continue Browsing
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={showPaymentFormHandler}
                          className="inline-flex mt-5 h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-primary-colour px-5 text-sm font-medium tracking-wide text-white hover:text-black transition duration-300 hover:bg-secondary-colour focus:bg-darker-purple focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:shadow-none"
                        >
                          Checkout
                        </button>
                        <button
                          onClick={clearCartHandler}
                          className="inline-flex mt-5 h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-primary-colour px-5 text-sm font-medium tracking-wide text-white hover:text-black transition duration-300 hover:bg-secondary-colour focus:bg-darker-purple focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:shadow-none"
                        >
                          Clear Cart
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
};

export default CartModal;
