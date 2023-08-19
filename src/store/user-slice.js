// Importing the necessary dependencies and utility functions
import { createSlice } from "@reduxjs/toolkit";
import {
  validateEmail,
  validateName,
  validateString,
} from "@/store/contact-slice";

// Creating the contactSlice using createSlice from Redux Toolkit
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    name: "",
    surname: "",
    email: "",
    password: "",
  },
  reducers: {
    // Reducer to handle input field changes and validation
    // inputChangeHandler(state, action) {
    //   const inputName = action.payload.name;
    //   const inputValue = action.payload.value;
    //
    //   switch (inputName) {
    //     case "name":
    //       // Validating the name input
    //       state.inputHasError.nameHasError = !validateName(inputValue.trim());
    //       break;
    //     case "surname":
    //       // Validating the surname input
    //       state.inputHasError.surnameHasError = !validateName(
    //         inputValue.trim(),
    //       );
    //       break;
    //     case "email":
    //       // Validating the email input
    //       state.inputHasError.emailHasError = !validateEmail(inputValue.trim());
    //       break;
    //     case "company":
    //       // Validating the company input
    //       state.inputHasError.companyHasError = !validateString(
    //         inputValue.trim(),
    //       );
    //       break;
    //     case "comments":
    //       // Validating the comments input
    //       state.inputHasError.commentsHasError = !validateString(inputValue);
    //       break;
    //     default:
    //       return;
    //   }
    //
    //   // Update the input value in the state and reset error flag
    //   state[inputName] = inputValue;
    //   state.error = false;
    //
    //   // Update the formHasErrors flag based on individual input errors
    //   state.formHasErrors =
    //     state.inputHasError.nameHasError ||
    //     state.inputHasError.surnameHasError ||
    //     state.inputHasError.emailHasError ||
    //     state.inputHasError.companyHasError ||
    //     state.inputHasError.commentsHasError;
    // },
    // Reducer to handle form submission errors
    // errorHandler(state, action) {
    //   state.error = action.payload.isError;
    // },
    // Reducer to handle overall form validation errors
    // formErrorHandler(state, action) {
    //   state.formHasErrors = action.payload.formHasErrors;
    // },
    // Reducer to handle overall form validation errors
    // formSentHandler(state, action) {
    //   state.mailSent = action.payload.mailSent;
    // },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
