"use client";
import { Provider } from "react-redux";
import store from "@/store";
import NavBar from "@/components/shared/NavBar";

const NavWithStore = () => {
  return (
    <Provider store={store}>
      <NavBar />
    </Provider>
  );
};

export default NavWithStore;
