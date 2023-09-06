"use client";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

const ServiceStoreProvider = async ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export default ServiceStoreProvider;
