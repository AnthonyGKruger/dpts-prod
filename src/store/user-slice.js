import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { validateEmail, validateName } from "@/store/contact-slice";
import bcrypt from "bcryptjs";
import axios from "axios";

// const hashPassword = async (password) => {
//   return await bcrypt.hash(password, 10);
// };

// Create a thunk action for hashing the password
export const hashPasswordAsync = createAsyncThunk(
  "user/hashPassword",
  async (password) => {
    return await bcrypt.hash(password, 10);
    // return await hashPassword(password);
  },
);

// Create a thunk action for registering the user
export const registerHandler = createAsyncThunk(
  "user/register",
  async (user) => {
    await axios.post("/api/user/register/", user).then((response) => {
      console.log(response.statusText);
    });
  },
);

const comparePassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword).then((result) => {
    return result;
  });
};

const validatePassword = (password) => {
  // Regular expression pattern to match the criteria
  const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  // Test the password against the pattern
  return pattern.test(password);
};

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
      nameHasError: false,
      surnameHasError: false,
    },
    error: false,
  },
  reducers: {
    inputChangeHandler: function (state, action) {
      const inputName = action.payload.name;
      const inputValue = action.payload.value;

      if (inputName === "registrationEmail") {
        // Validating the email input
        if (validateEmail(inputValue.trim())) {
          state.email = inputValue;
          state.inputHasError.emailHasError = false;
        } else {
          state.email = inputValue;
          state.inputHasError.emailHasError = true;
          state.error = true;
        }
      } else if (inputName === "registrationName") {
        // Validating the password input
        if (validateName(inputValue.trim())) {
          state.name = inputValue;
          state.inputHasError.nameHasError = false;
        } else {
          state.name = inputValue;
          state.inputHasError.nameHasError = true;
          state.error = true;
        }
      } else if (inputName === "registrationSurname") {
        // Validating the password input
        if (validateName(inputValue.trim())) {
          state.surname = inputValue;
          state.inputHasError.surnameHasError = false;
        } else {
          state.surname = inputValue;
          state.inputHasError.surnameHasError = true;
          state.error = true;
        }
      } else if (inputName === "password") {
        // Validating the password input
        if (validatePassword(inputValue.trim())) {
          state.password = inputValue;
          state.password = inputValue;
          state.inputHasError.passwordHasError = false;
        } else {
          state.password = inputValue;
          state.inputHasError.passwordHasError = true;
          state.error = true;
        }
      } else if (inputName === "confirmPassword") {
        // Validating the confirmation password input
        if (validatePassword(inputValue.trim())) {
          state.confirmPassword = inputValue;
          state.inputHasError.confirmPasswordHasError = false;
        } else {
          state.confirmPassword = inputValue;
          state.inputHasError.confirmPasswordHasError = true;
          state.error = true;
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
    builder.addCase(hashPasswordAsync.fulfilled, (state, action) => {
      // Update the state with the hashed password
      state.password = action.payload;
      state.inputHasError.passwordHasError = false;
      state.confirmPassword = "";

      // const user = {
      //   name: state.name,
      //   surname: state.surname,
      //   email: state.email,
      //   password: action.payload,
      // };

      // registerHandler(user);
    });

    builder.addCase(hashPasswordAsync.rejected, (action) => {
      console.log(action);
    });

    builder.addCase(registerHandler.fulfilled, (state, action) => {});
  },
});

export const userActions = {
  ...userSlice.actions,
  hashPasswordAsync, // Export the hashPasswordAsync thunk action
  registerHandler,
};

export default userSlice;
