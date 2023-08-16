// Importing the necessary dependencies and utility functions
import { createSlice } from "@reduxjs/toolkit";

export const validateEmail = (email) => {
  // Regular expression to validate email format
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validateName = (str) => {
  // Regular expression to validate name format
  const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
  return nameRegex.test(str);
};

export const validateString = (str) => {
  // Regular expression to validate string format (alphanumeric and special characters)
  let regex = /^[a-zA-Z0-9, '"!?&@\s]+$/;
  return regex.test(str);
};

// Creating the contactSlice using createSlice from Redux Toolkit
const contactSlice = createSlice({
  name: "contactMe",
  initialState: {
    mailSending: false, // Indicates if the email is being sent
    mailSent: false, // Indicates if the email has been successfully sent
    error: false, // Indicates if there was an error during form submission
    formHasErrors: false, // Indicates if the form has validation errors
    inputHasError: {
      nameHasError: false, // Indicates if the name field has validation error
      emailHasError: false, // Indicates if the email field has validation error
      companyHasError: false, // Indicates if the company field has validation error
      commentsHasError: false, // Indicates if the comments field has validation error
    },
  },
  reducers: {
    // Reducer to handle the mailSending state
    mailIsSendingStateHandler(state, action) {
      state.mailSending = action.payload.isMailSending;
    },

    // Reducer to handle input field changes and validation
    inputChangeHandler(state, action) {
      const inputName = action.payload.name;
      const inputValue = action.payload.value;

      switch (inputName) {
        case "from_name":
          // Validating the name input
          state.inputHasError.nameHasError = !validateName(inputValue.trim());
          break;
        case "reply_to":
          // Validating the email input
          state.inputHasError.emailHasError = !validateEmail(inputValue);
          break;
        case "company":
          // Validating the company input
          state.inputHasError.companyHasError = !validateString(inputValue);
          break;
        case "comments":
          // Validating the comments input
          state.inputHasError.commentsHasError = !validateString(inputValue);
          break;
        default:
          return;
      }

      // Update the input value in the state and reset error flag
      state[inputName] = inputValue;
      state.error = false;

      // Update the formHasErrors flag based on individual input errors
      state.formHasErrors =
        state.inputHasError.nameHasError ||
        state.inputHasError.emailHasError ||
        state.inputHasError.companyHasError ||
        state.inputHasError.commentsHasError;
    },

    // Reducer to handle form submission errors
    errorHandler(state, action) {
      state.error = action.payload.isError;
    },

    // Reducer to handle overall form validation errors
    formErrorHandler(state, action) {
      state.formHasErrors = action.payload.formHasErrors;
    },
  },
});

export const contactMeActions = contactSlice.actions;

export default contactSlice;
