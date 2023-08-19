// Importing the necessary dependencies
import { configureStore } from "@reduxjs/toolkit";

// Importing the contactSlice reducer
import contactSlice from "@/store/contact-slice";
import userSlice from "@/store/user-slice";

// Configuring the Redux store
const store = configureStore({
  reducer: {
    contact: contactSlice.reducer, // Adding the contactSlice reducer under the 'contact' key
    user: userSlice.reducer,
  },
});

// Exporting the Redux store
export default store;
