"use client";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import ThankYou from "@/components/shared/ThankYou";
import { PersistGate } from "redux-persist/integration/react";
import Spinner from "@/components/shared/Spinner";

const ThankYouWithStore = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <ThankYou />
      </PersistGate>
    </Provider>
  );
};

export default ThankYouWithStore;
