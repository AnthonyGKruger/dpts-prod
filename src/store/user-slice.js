// Importing the necessary dependencies and utility functions
import { createSlice } from "@reduxjs/toolkit";
import {
  validateEmail,
  validateName,
  validateString,
} from "@/store/contact-slice";

const validatePassword = (password) => {
  // Regular expression pattern to match the criteria
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  // Test the password against the pattern
  return pattern.test(password);
};

// Creating the contactSlice using createSlice from Redux Toolkit
const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    inputHasError: {
      emailHasError: false,
      passwordHasError: false,
      confirmPasswordHasError: false,
    },
    error: false,
  },
  reducers: {
    // Reducer to handle input field changes and validation
    inputChangeHandler(state, action) {
      const inputName = action.payload.name;
      const inputValue = action.payload.value;

      switch (inputName) {
        case "email":
          // Validating the email input
          validateEmail(inputValue.trim())
            ? (state.email = inputValue)
            : (state.inputHasError.emailHasError = true);
          break;
        case "password":
          // Validating the password input
          validatePassword(inputValue.trim())
            ? (state.password = inputValue)
            : (state.inputHasError.passwordHasError = true);
          break;
        case "confirmPassword":
          // Validating the confirmation password input
          validatePassword(inputValue.trim())
            ? (state.confirmPassword = inputValue)
            : (state.inputHasError.confirmPasswordHasError = true);
          break;
        default:
          return;
      }
    },

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
