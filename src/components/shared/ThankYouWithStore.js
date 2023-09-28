"use client";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import Spinner from "@/components/shared/Spinner";
import { PersistGate } from "redux-persist/integration/react";
import ThankYouContent from "@/components/shared/ThankYouContent";

const ThankYouWithStore = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <ThankYouContent />
      </PersistGate>
    </Provider>
  );
};

export default ThankYouWithStore;
