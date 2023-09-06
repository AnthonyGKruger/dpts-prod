// "use client";
// import { Provider } from "react-redux";
// import store from "@/store";
// import NavBar from "@/components/shared/NavBar";
//
// const NavWithStore = () => {
//   return (
//     <Provider store={store}>
//       <NavBar />
//     </Provider>
//   );
// };
//
// export default NavWithStore;

"use client";
import NavBar from "@/components/shared/NavBar";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "@/store";
import DummyNav from "@/components/shared/DummyNav";

const NavWithStore = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<DummyNav />} persistor={persistor}>
        <NavBar />
      </PersistGate>
    </Provider>
  );
};

// export default wrapper.withRedux(NavWithStore);
export default NavWithStore;
