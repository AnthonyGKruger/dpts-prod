import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { userActions } from "@/store/user-slice";
import { useDispatch, useSelector } from "react-redux";
import ErrorModal from "@/components/shared/forms/alerts/ErrorModal";
import Spinner from "@/components/shared/Spinner";

const LoginModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const wrapperRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false);
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
      if (state.showLoginModal && html) {
        html.style.overflowY = "hidden";

        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        const modal = document.querySelector("#modal-login"); // select the modal by it's [id]

        const firstFocusableElement =
          modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal

        const focusableContent = modal.querySelectorAll(focusableElements);

        const lastFocusableElement =
          focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

        document.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            // setIsShowing(false);

            dispatch(
              userActions.showModalState({
                modal: "showLoginModal",
                isShowing: false,
              }),
            );
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
  }, [state.showLoginModal]);

  useEffect(() => {
    axios
      .get("/api/user/get-users/")
      .then((response) =>
        dispatch(userActions.setUsers(response.data.split(","))),
      );
  }, [dispatch]);

  const handleChange = async (event) => {
    await dispatch(
      userActions.loginInputChangeHandler({
        name: event.target.name,
        value: event.target.value,
      }),
    );
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("logging user in...");

    if (
      !state.error &&
      state.userAlreadyRegistered &&
      state.email !== "" &&
      state.password !== ""
    ) {
      const user = {
        email: state.email,
        password: state.password,
      };

      await dispatch(userActions.setIsLoggingIn(true));

      await dispatch(userActions.loginHandler(user));

      await dispatch(userActions.setIsLoggingIn(false));

      dispatch(
        userActions.showModalState({
          modal: "showLoginModal",
          isShowing: false,
        }),
      );
    } else {
      alert("Please register a account before attempting to log in.");
    }
  };

  const inputClasses = `peer relative h-10 w-full rounded border px-4 text-sm text-slate-500 
                        placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 
                        invalid:text-pink-500  focus:outline-none invalid:focus:border-pink-500 
                        disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`;
  const labelClasses = `absolute left-2 -top-2 z-[1] px-2 text-xs  transition-all before:absolute
                        before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white
                        before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm
                        peer-required:after:text-pink-500 peer-required:after:content-['\\00a0*'] peer-invalid:text-pink-500
                        peer-focus:-top-2 peer-focus:text-xs  peer-invalid:peer-focus:text-pink-500
                        peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent`;

  const spanClasses = `absolute flex w-full justify-between px-4 py-1 text-xs  transition peer-invalid:text-pink-500`;

  return (
    <>
      <button
        onClick={() => {
          dispatch(
            userActions.showModalState({
              modal: "showAddToCartButNotLoggedInModal",
              isShowing: false,
            }),
          );
          dispatch(
            userActions.showModalState({
              modal: "showLoginModal",
              isShowing: true,
            }),
          );
        }}
        className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-primary-colour px-5 text-sm font-medium tracking-wide text-white hover:text-black transition duration-300 hover:bg-secondary-colour focus-visible:outline-none"
      >
        <span>Login</span>
      </button>

      {state.showLoginModal && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
              aria-labelledby="login modal"
              aria-modal="true"
              tabIndex="-1"
              role="dialog"
            >
              {/*    <!-- Modal --> */}
              <div
                ref={wrapperRef}
                className="flex h-fit xl:w-1/3 lg:w-7/12 md:w-2/3 w-11/12 flex-col gap-4 overflow-hidden rounded-xl bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                id="modal-login"
                role="document"
              >
                {/*        <!-- Modal header --> */}
                <header id="login header" className="flex items-center">
                  <h3 className="flex-1 text-lg font-medium text-slate-700">
                    Welcome back!
                  </h3>
                  <button
                    // onClick={() => setIsShowing(false)}
                    onClick={() => {
                      dispatch(
                        userActions.showModalState({
                          modal: "showLoginModal",
                          isShowing: false,
                        }),
                      );
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
                <form onSubmit={submitHandler}>
                  {/*        <!-- Modal body --> */}
                  <div id="content-4a" className="flex-1">
                    <div className="flex flex-col gap-6">
                      {/*                <!-- Input field --> */}
                      {state.showLoginFocusMessage && (
                        <ErrorModal errorMessage={"User is not registered"} />
                      )}
                      {state.loginFailed && (
                        <ErrorModal
                          errorMessage={
                            "Please ensure your credentials are correct."
                          }
                        />
                      )}
                      <div className="relative">
                        <input
                          id="loginEmail"
                          type="email"
                          name="loginEmail"
                          placeholder="your email"
                          className={`${inputClasses} ${
                            state.inputHasError.emailHasError
                              ? "border-pink-500 text-pink-500"
                              : "focus:border-primary-colour border-slate-200"
                          }`}
                          onChange={handleChange}
                          autoComplete={"on"}
                          onBlur={() =>
                            dispatch(
                              userActions.loginFocusChangeHandler(
                                state.userAlreadyRegistered,
                              ),
                            )
                          }
                        />
                        <label
                          htmlFor="loginEmail"
                          className={` ${labelClasses}
                            ${
                              state.inputHasError.emailHasError
                                ? "peer-focus:text-pink-500 text-pink-500"
                                : "peer-focus:text-primary-colour text-slate-400"
                            }`}
                        >
                          Your email
                        </label>
                        <small
                          className={`${spanClasses} ${
                            state.inputHasError.emailHasError
                              ? "text-pink-500"
                              : "text-slate-400 peer-focus:text-primary-colour"
                          }`}
                        >
                          <span>Type your email address</span>
                        </small>
                      </div>
                      {/*                <!-- Input field --> */}
                      {state.inputHasError.passwordHasError && (
                        <ErrorModal
                          errorMessage={
                            "Please enter a password matching the following criteria: a mix of uppercase and lowercase" +
                            " letters, numbers, and special characters."
                          }
                        />
                      )}
                      <div
                        className={`relative ${
                          state.inputHasError.passwordHasError ? "my-2" : "my-6"
                        }`}
                      >
                        <input
                          id="loginPassword"
                          type={showPassword ? "text" : "password"}
                          name="loginPassword"
                          placeholder="your password"
                          className={`${inputClasses} ${
                            state.inputHasError.passwordHasError
                              ? "border-pink-500 text-pink-500"
                              : "focus:border-primary-colour border-slate-200"
                          }`}
                          onChange={handleChange}
                          autoComplete={"on"}
                        />
                        <label
                          htmlFor="loginPassword"
                          className={` ${labelClasses}
                            ${
                              state.inputHasError.passwordHasError
                                ? "peer-focus:text-pink-500 text-pink-500"
                                : "peer-focus:text-primary-colour text-slate-400"
                            }`}
                        >
                          Your password
                        </label>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          onClick={() => {
                            setShowPassword(!showPassword);
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          />
                        </svg>
                        <small
                          className={`${spanClasses} ${
                            state.inputHasError.passwordHasError
                              ? "text-pink-500"
                              : "text-slate-400 peer-focus:text-primary-colour"
                          }`}
                        >
                          <span>Type your password</span>
                        </small>
                      </div>
                    </div>
                  </div>
                  {/*        <!-- Modal actions --> */}
                  {!state.isLoggedIn && (
                    <div className="flex justify-center gap-2">
                      {state.isLoggingIn ? (
                        <Spinner />
                      ) : (
                        <input
                          disabled={state.error}
                          type={"submit"}
                          onClick={submitHandler}
                          value={"Login"}
                          className="inline-flex mt-5 h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-primary-colour px-5 text-sm font-medium tracking-wide text-white hover:text-black transition duration-300 hover:bg-secondary-colour focus:bg-darker-purple focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:shadow-none"
                        />
                      )}
                    </div>
                  )}
                </form>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
};

export default LoginModal;
