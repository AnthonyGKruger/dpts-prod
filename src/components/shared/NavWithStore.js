"use client";
import { Provider, useStore } from "react-redux";
import store from "@/store";
import NavBar from "@/components/shared/NavBar";

// import { wrapper } from "@/store";
// import { PersistGate } from "redux-persist/integration/react";

// const NavWithStore = () => {
//   const store = useStore();
//
//   return (
//     <PersistGate persistor={store.__persistor} loading={<div>Loading...</div>}>
//       <NavBar />
//     </PersistGate>
//   );
// };
//
// export default wrapper.withRedux(NavWithStore);

const NavWithStore = () => {
  return (
    <Provider store={store}>
      <NavBar />
    </Provider>
  );
};

export default NavWithStore;
