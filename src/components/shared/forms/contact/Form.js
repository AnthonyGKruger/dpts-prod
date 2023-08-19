"use client";

import Input from "@/components/shared/forms/contact/Input";
import TextArea from "@/components/shared/forms/contact/TextArea";
import SubmitButton from "@/components/shared/forms/contact/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { contactActions } from "@/store/contact-slice";
import emailjs from "@emailjs/browser";
import Spinner from "@/components/shared/Spinner";
import ErrorModal from "@/components/shared/forms/contact/ErrorModal";
import SuccessModal from "@/components/shared/forms/contact/SuccessModal";
const Form = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.contact);
  const ref = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(contactActions.errorHandler({ isError: false }));

    // Extract form data from the form fields
    const formData = {
      name: ref.current.name.value,
      surname: ref.current.surname.value,
      company: ref.current.company.value,
      comments: ref.current.comments.value,
      email: ref.current.email.value,
    };

    if (!state.formHasErrors && state.name && state.email) {
      dispatch(
        contactActions.mailIsSendingStateHandler({ isMailSending: true }),
      );

      // Send the email using the emailjs package
      emailjs
        .send(
          "service_007ke1n",
          "template_p9iu3cm",
          formData,
          process.env.NEXT_PUBLIC_EMAIL_JS_SECURE_TOKEN,
        )
        .then(
          (result) => {
            console.log(result.text);
            dispatch(
              contactActions.mailIsSendingStateHandler({
                isMailSending: false,
              }),
            );
            dispatch(
              contactActions.formSentHandler({
                mailSent: true,
              }),
            );
          },
          (error) => {
            dispatch(contactActions.errorHandler({ isError: true }));
            console.log(error.text);
            dispatch(
              contactActions.mailIsSendingStateHandler({
                isMailSending: false,
              }),
            );
          },
        );
    } else if (
      contactFormState.name === "" ||
      contactFormState.surname === "" ||
      contactFormState.inputHasError.nameHasError ||
      contactFormState.inputHasError.surnameHasError ||
      contactFormState.email === "" ||
      contactFormState.inputHasError.emailHasError
    ) {
      dispatch(contactActions.formErrorHandler({ formHasErrors: true }));
    } else {
      dispatch(contactActions.formErrorHandler({ formHasErrors: true }));
    }
  };

  // Handler for input changes in the form fields
  const handleChange = (event) => {
    dispatch(
      contactActions.inputChangeHandler({
        value: event.target.value,
        name: event.target.name,
      }),
    );
  };

  const inputClasses = `peer relative h-10 w-full rounded border  px-4 text-sm text-slate-500 placeholder-transparent 
    outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 
     focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed 
     disabled:bg-slate-50 disabled:text-slate-400`;

  const labelClasses = `absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs  transition-all before:absolute before:top-0 
    before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all 
    peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 
    peer-required:after:content-['\\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default
     peer-focus:text-xs  peer-invalid:peer-focus:text-pink-500 
     peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent`;

  return (
    <>
      {state.formHasError && (
        <ErrorModal errorMessage={"Something went wrong..."} />
      )}
      {state.mailSent ? (
        <SuccessModal message={"Success! We will contact you shortly!"} />
      ) : (
        <form
          ref={ref}
          onSubmit={handleSubmit}
          className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200"
        >
          <h2
            className={"text-center mt-8 text-accent-colour text-2xl font-thin"}
          >
            Contact Us
          </h2>
          <div className="p-6">
            {state.inputHasError.nameHasError && (
              <ErrorModal errorMessage={"Please enter a valid name!"} />
            )}
            <Input
              handleChange={handleChange}
              id={"name"}
              type={"text"}
              name={"name"}
              placeholder={"Your Name"}
              // value={state}
              inputClasses={`${inputClasses} ${
                state.inputHasError.nameHasError
                  ? "border-pink-500 text-pink-500 focus:border-pink-500"
                  : "focus:border-primary-colour border-slate-200"
              }`}
              labelClasses={`${labelClasses} ${
                state.inputHasError.nameHasError
                  ? "text-pink-500 peer-focus:text-pink-500"
                  : "peer-focus:text-primary-colour text-slate-400"
              }`}
              label={"Your Name"}
            />
            {state.inputHasError.surnameHasError && (
              <ErrorModal errorMessage={"Please enter a valid surname!"} />
            )}
            <Input
              handleChange={handleChange}
              id={"surname"}
              type={"text"}
              name={"surname"}
              placeholder={"Your Surname"}
              // value={state}
              inputClasses={`${inputClasses} ${
                state.inputHasError.surnameHasError
                  ? "border-pink-500 text-pink-500 focus:border-pink-500"
                  : "focus:border-primary-colour border-slate-200"
              }`}
              labelClasses={`${labelClasses} ${
                state.inputHasError.surnameHasError
                  ? "text-pink-500 peer-focus:text-pink-500"
                  : "peer-focus:text-primary-colour text-slate-400"
              }`}
              label={"Your Surname"}
            />
            {state.inputHasError.emailHasError && (
              <ErrorModal errorMessage={"Please enter a valid email!"} />
            )}
            <Input
              handleChange={handleChange}
              id={"email"}
              type={"email"}
              name={"email"}
              placeholder={"Your Email"}
              // value={state}
              inputClasses={`${inputClasses} ${
                state.inputHasError.emailHasError
                  ? "border-pink-500 text-pink-500 focus:border-pink-500"
                  : "focus:border-primary-colour border-slate-200"
              }`}
              labelClasses={`${labelClasses} ${
                state.inputHasError.emailHasError
                  ? "text-pink-500 peer-focus:text-pink-500"
                  : "peer-focus:text-primary-colour text-slate-400"
              }`}
              label={"Your Email"}
            />
            {state.inputHasError.companyHasError && (
              <ErrorModal errorMessage={"Please enter a valid company name!"} />
            )}
            <Input
              handleChange={handleChange}
              id={"company"}
              type={"text"}
              name={"company"}
              placeholder={"Your Business (Optional)"}
              // value={state}
              inputClasses={`${inputClasses} ${
                state.inputHasError.companyHasError
                  ? "border-pink-500 text-pink-500 focus:border-pink-500"
                  : "focus:border-primary-colour border-slate-200"
              }`}
              labelClasses={`${labelClasses} ${
                state.inputHasError.companyHasError
                  ? "text-pink-500 peer-focus:text-pink-500"
                  : "peer-focus:text-primary-colour text-slate-400"
              }`}
              label={"Your Business Name (Optional)"}
            />
            {state.inputHasError.commentsHasError && (
              <ErrorModal errorMessage={"Comments field is invalid"} />
            )}
            <TextArea
              id={"comments"}
              name={"comments"}
              inputClasses={`peer relative w-full rounded border border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500  focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 ${
                state.inputHasError.commentsHasError
                  ? "border-pink-500 text-pink-500 focus:border-pink-500"
                  : "focus:border-primary-colour"
              }`}
              labelClasses={`absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs  peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent ${
                state.inputHasError.commentsHasError
                  ? "border-pink-500 text-pink-500 peer-focus:text-pink-500"
                  : "peer-focus:text-primary-colour"
              }`}
              handleChange={handleChange}
            />
            {state.mailSending ? (
              <Spinner />
            ) : (
              <SubmitButton
                id={"submit"}
                value={"Send"}
                inputClasses={`my-auto h-9 rounded-xl bg-primary-colour md:px-6 px-3 font-base  text-md 
                     tracking-wide text-slate-50 hover:text-slate-800 shadow-lg shadow-secondary-colour border border-white/50" 
                    hover:bg-secondary-colour hover:shadow-lg hover:shadow-secondary-colour hover:scale-105 hover:border-accent-colour 
                     transition-all duration-500 w-full lg:w-fit text-center cursor-pointer disabled:cursor-not-allowed
                      disabled:bg-slate-50 disabled:text-slate-400`}
                name={"submit"}
                disabled={state.formHasErrors}
              />
            )}
          </div>
        </form>
      )}
    </>
  );
};

export default Form;
