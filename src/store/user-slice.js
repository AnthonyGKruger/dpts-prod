import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { validateEmail, validateName } from "@/store/contact-slice";
import axios from "axios";

// Create a thunk action for registering the user
export const registerHandler = createAsyncThunk(
  "user/register",
  async (user) => {
    await axios.post("/api/user/register/", user).then((response) => {
      console.log(response.statusText);
    });
  },
);

export const loginHandler = createAsyncThunk("user/login", async (user) => {
  try {
    const response = await axios.post("/api/user/login/", user);
    if (response.status === 200) {
      return response.data; // Return the data as the payload
    } else if (response.status === 403 || response.status === 400) {
      throw new Error(response.data); // Reject the action with an error
    }
  } catch (error) {
    throw new Error(error.message); // Reject the action with an error
  }
});

const validatePassword = (password) => {
  // Check for at least one capital letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  // Check for at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }
  // Check for at least one number
  if (!/[0-9]/.test(password)) {
    return false;
  }
  // Check for at least one special character
  if (!/[^A-Za-z0-9]/.test(password)) {
    return false;
  }
  // All criteria met
  return true;
};

const initialState = {
  showAddToCartButNotLoggedInModal: false,
  showLoginModal: false,
  showRegisterModal: false,
  loginFailed: false,
  isLoggedIn: false,
  successfullyRegistered: false,
  successfullyLoggedIn: false,
  passwordFailed: false,
  name: false,
  surname: false,
  email: false,
  password: false,
  confirmPassword: false,
  passwordsMatch: false,
  userAlreadyRegistered: false,
  confirmingPasswordWithoutPassword: false,
  isRegistering: false,
  isLoggingIn: false,
  inputHasError: {
    emailHasError: false,
    passwordHasError: false,
    confirmPasswordHasError: false,
    nameHasError: false,
    surnameHasError: false,
  },
  error: false,
  currentUsers: [],
  showLoginFocusMessage: false,
  cart: [],
  totalItems: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      console.log("logging out");
      // state.showAddToCartButNotLoggedInModal = false;
      // state.showLoginModal = false;
      // state.showRegisterModal = false;
      state.loginFailed = false;
      state.isLoggedIn = false;
      state.successfullyRegistered = false;
      state.successfullyLoggedIn = false;
      state.passwordFailed = false;
      state.name = "";
      state.surname = "";
      state.email = "";
      state.password = "";
      state.confirmPassword = "";
      state.passwordsMatch = false;
      state.userAlreadyRegistered = false;
      state.confirmingPasswordWithoutPassword = false;
      state.isRegistering = false;
      state.isLoggingIn = false;
      state.inputHasError.emailHasError = false;
      state.inputHasError.passwordHasError = false;
      state.inputHasError.confirmPasswordHasError = false;
      state.inputHasError.nameHasError = false;
      state.inputHasError.surnameHasError = false;
      state.error = false;
      state.currentUsers = [];
      state.showLoginFocusMessage = false;
      state.cart = [];
      state.totalItems = 0;
    },
    clearCartHandler: (state) => {
      state.cart = [];
      state.totalItems = 0;
    },
    removeFromCartHandler: (state, action) => {},
    addToCartHandler: (state, action) => {
      console.log(action.payload);
      state.cart.push(action.payload);
      state.totalItems += action.payload.quantity;
    },
    showModalState: (state, action) => {
      state[action.payload.modal] = action.payload.isShowing;
    },
    setIsRegistering: (state, action) => {
      state.isRegistering = action.payload;
    },
    setIsLoggingIn: (state, action) => {
      state.isLoggingIn = action.payload;
    },
    setUsers: (state, action) => {
      state.currentUsers = action.payload;
    },
    loginFocusChangeHandler: (state, action) => {
      state.showLoginFocusMessage = !action.payload;
    },
    loginInputChangeHandler: (state, action) => {
      const inputName = action.payload.name;
      const inputValue = action.payload.value;

      if (inputName === "loginEmail") {
        state.email = inputValue;
        state.userAlreadyRegistered = state.currentUsers.includes(inputValue);
        state.error = false;
        state.loginFailed = false;
      } else if (inputName === "loginPassword") {
        state.password = inputValue;
        state.error = false;
        state.loginFailed = false;
      }
    },
    registerInputChangeHandler: (state, action) => {
      const inputName = action.payload.name;
      const inputValue = action.payload.value;

      if (inputName === "registrationEmail") {
        // Validating the email input
        state.email = inputValue;
        if (validateEmail(inputValue.trim())) {
          if (state.currentUsers.includes(inputValue)) {
            state.userAlreadyRegistered = true;
            state.inputHasError.emailHasError = true;
            state.error = true;
          } else {
            state.userAlreadyRegistered = false;
            state.inputHasError.emailHasError = false;
            state.error = false;
          }
        } else {
          if (state.currentUsers.includes(inputValue)) {
            state.userAlreadyRegistered = true;
            state.inputHasError.emailHasError = true;
            state.error = true;
          } else {
            state.userAlreadyRegistered = false;
            state.inputHasError.emailHasError = true;
            state.error = true;
          }
        }
      } else if (inputName === "registrationName") {
        // Validating the password input
        state.name = inputValue;
        if (validateName(inputValue.trim())) {
          state.inputHasError.nameHasError = false;
        } else {
          state.inputHasError.nameHasError = true;
          state.error = true;
        }
      } else if (inputName === "registrationSurname") {
        // Validating the password input
        state.surname = inputValue;
        if (validateName(inputValue.trim())) {
          state.inputHasError.surnameHasError = false;
        } else {
          state.inputHasError.surnameHasError = true;
          state.error = true;
        }
      } else if (inputName === "password") {
        // Validating the password input
        state.password = inputValue.trim();

        if (validatePassword(state.password)) {
          state.inputHasError.passwordHasError = false;
          // state.confirmingPasswordWithoutPassword = false;
          if (state.confirmPassword === "") {
            state.confirmingPasswordWithoutPassword = false;
          }
          if (state.confirmPassword === state.password) {
            state.passwordsMatch = true;
            state.error = false;
          } else {
            state.passwordsMatch = false;
            state.error = true;
          }
        } else {
          state.inputHasError.passwordHasError = true;
          state.error = true;
          // state.confirmingPasswordWithoutPassword = false;
          if (state.confirmPassword === "") {
            state.confirmingPasswordWithoutPassword = false;
          }
          if (state.confirmPassword === state.password) {
            state.passwordsMatch = true;
            state.error = false;
          } else {
            state.passwordsMatch = false;
            state.error = true;
          }
        }
      } else if (inputName === "confirmPassword") {
        // Validating the confirmation password input
        state.confirmPassword = inputValue.trim();
        if (validatePassword(state.confirmPassword)) {
          if (state.password === "") {
            state.confirmingPasswordWithoutPassword = true;
            state.inputHasError.confirmPasswordHasError = false;
            state.error = true;
          } else if (state.password !== state.confirmPassword) {
            state.passwordsMatch = false;
            state.inputHasError.confirmPasswordHasError = false;
            state.error = true;
          } else {
            state.passwordsMatch = true;
            state.confirmingPasswordWithoutPassword = false;
            state.inputHasError.confirmPasswordHasError = false;
            state.error = false;
          }
        } else {
          if (state.password === "") {
            state.confirmingPasswordWithoutPassword = true;
            state.inputHasError.confirmPasswordHasError = true;
            state.error = true;
          } else if (
            state.password !== state.confirmPassword &&
            state.confirmPassword !== ""
          ) {
            state.passwordsMatch = false;
            state.inputHasError.confirmPasswordHasError = true;
            state.error = true;
          } else {
            state.confirmingPasswordWithoutPassword = false;
            state.inputHasError.confirmPasswordHasError = true;
            state.error = true;
            state.passwordsMatch = true;
          }
        }
      }

      state.inputHasError.nameHasError ||
      state.inputHasError.surnameHasError ||
      state.inputHasError.emailHasError ||
      state.inputHasError.passwordHasError ||
      state.inputHasError.confirmPasswordHasError ||
      state.password !== state.confirmPassword
        ? (state.error = true)
        : (state.error = false);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerHandler.fulfilled, (state) => {
      state.successfullyRegistered = true;
      state.isLoggedIn = true;
      state.password = "";
      state.confirmPassword = "";
      state.successfullyLoggedIn = true;
    });

    builder.addCase(loginHandler.fulfilled, (state, action) => {
      state.successfullyRegistered = true;
      state.isLoggedIn = true;
      state.password = "";
      state.successfullyLoggedIn = true;
      state.error = false;
      state.passwordFailed = false;
      state.loginFailed = false;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      // console.log(action.payload);
    });

    builder.addCase(loginHandler.rejected, (state) => {
      state.error = true;
      state.passwordFailed = true;
      state.loginFailed = true;
    });
  },
});

export const userActions = {
  ...userSlice.actions,
  registerHandler,
  loginHandler,
};

export default userSlice;
