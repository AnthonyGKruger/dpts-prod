// // Importing the necessary dependencies
// import { configureStore } from "@reduxjs/toolkit";
//
// // Importing the contactSlice reducer
// import contactSlice from "@/store/contact-slice";
// import userSlice from "@/store/user-slice";
//
// // const rootReducer = combineReducers({
// //   contact: contactSlice.reducer, // Adding the contactSlice reducer under the 'contact' key
// //   user: userSlice.reducer,
// // });
//
// // Configuring the Redux store
// const store = configureStore({
//   reducer: {
//     contact: contactSlice.reducer, // Adding the contactSlice reducer under the 'contact' key
//     user: userSlice.reducer,
//   },
// });
//
// // Exporting the Redux store
// export default store;

// Importing the necessary dependencies
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import contactSlice from "@/store/contact-slice";
import userSlice from "@/store/user-slice";
// import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
// import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  contact: contactSlice.reducer, // Adding the contactSlice reducer under the 'contact' key
  user: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const userPersisted = persistedReducer(persistConfig, userSlice.reducer);
// const contactPersisted = persistedReducer(persistConfig, contactSlice.reducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
