// Importing the necessary dependencies
import { configureStore } from "@reduxjs/toolkit";

// Importing the contactSlice reducer
import contactSlice from "@/store/contact-slice";
import userSlice from "@/store/user-slice";
import { persistReducer, persistStore } from "redux-persist";
import { createWrapper } from "next-redux-wrapper";
import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
// };
//
// const userPersistedReducer = persistReducer(persistConfig, userSlice.reducer);
//
// const contactPersistedReducer = persistReducer(
//   persistConfig,
//   contactSlice.reducer,
// );

// const makeStore = () => {
//   const store = configureStore({
//     reducer: { userPersistedReducer, contactPersistedReducer },
//   });
//   store.__persistor = persistStore(store);
//   return store;
// };

// Configuring the Redux store
const store = configureStore({
  reducer: {
    contact: contactSlice.reducer, // Adding the contactSlice reducer under the 'contact' key
    user: userSlice.reducer,
  },
});

// Exporting the Redux store
export default store;
// export const wrapper = createWrapper(makeStore);
