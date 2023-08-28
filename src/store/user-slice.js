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
  await axios.post("/api/user/login/", user).then((response) => {
    // console.log(response.statusText);
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    } else if (response.status === 403) {
      console.log(response.data);
      return response.data;
    } else if (response.status === 400) {
      console.log(response.data);
      return response.data;
    }
  });
});

const validatePassword = (password) => {
  // Regular expression pattern to match the criteria
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  // Test the password against the pattern
  return pattern.test(password);
};

const initialState = {
  loginFailed: false,
  isLoggedIn: false,
  successfullyRegistered: false,
  successfullyLoggedIn: false,
  passwordFailed: false,
  name: "",
  surname: "",
  email: "",
  password: "",
  confirmPassword: "",
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
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      console.log("logging out");
      state = initialState;
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
      state.inputHasError.confirmPasswordHasError
        ? (state.error = true)
        : (state.error = false);
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(hashPasswordAsync.fulfilled, (state, action) => {
    // Update the state with the hashed password
    // state.password = action.payload;
    // state.inputHasError.passwordHasError = false;
    // state.confirmPassword = "";

    // const user = {
    //   name: state.name,
    //   surname: state.surname,
    //   email: state.email,
    //   password: action.payload,
    // };

    // registerHandler(user);
    // });

    // builder.addCase(hashPasswordAsync.rejected, (action) => {
    //   console.log(action);
    // });

    builder.addCase(registerHandler.fulfilled, (state, action) => {
      state.successfullyRegistered = true;
      state.isLoggedIn = true;
      state.password = "";
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
      console.log(action);
    });

    builder.addCase(loginHandler.rejected, (state, action) => {
      state.error = true;
      state.passwordFailed = true;
      state.loginFailed = true;
    });
  },
});

export const userActions = {
  ...userSlice.actions,
  // hashPasswordAsync, // Export the hashPasswordAsync thunk action
  registerHandler,
  loginHandler,
};

export default userSlice;
