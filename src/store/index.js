// Importing the necessary dependencies
import { configureStore } from "@reduxjs/toolkit";

// Importing the contactSlice reducer
import contactSlice from "@/store/contact-slice";

// Configuring the Redux store
const store = configureStore({
  reducer: {
    contact: contactSlice.reducer, // Adding the contactSlice reducer under the 'contactMe' key
  },
});

// Exporting the Redux store
export default store;
