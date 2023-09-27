import { useDispatch, useSelector } from "react-redux";
import { userActions } from "@/store/user-slice";
import { notFound } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";

const updateBackendHandler = async (data) => {
  return await axios.post("/api/update-orders/", data);
};

const ThankYou = () => {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (!state.isLoggedIn) {
    notFound();
  }

  useEffect(() => {
    if (state.cart.length === 0) {
      return;
    }

    const dataBody = {
      cart: state.cart,
      status: "pending",
      dpts_user: state.id,
    };

    dispatch(userActions.clearCartHandler());

    updateBackendHandler(dataBody).then((response) =>
      console.log(response.data),
    );
  }, []);

  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-8 text-center">
          {/*<h3 className="text-indigo-600 font-semibold">404 Error</h3>*/}
          <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
            Thank You!
          </p>
          <p className="text-gray-600">
            We have received your payment and are currently processing your
            request. We will contact you to set up a suitable appointment date.
            {/*<br />*/}
            {/*<br />*/}
            In the meantime feel free to carry on browsing or you can contact us
            should you need any further assistance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/"
              className="block py-2 rounded bg-primary-colour px-5 text-lg font-medium tracking-wide text-white hover:text-black transition duration-300 hover:bg-secondary-colour focus:bg-darker-purple focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:shadow-none"
            >
              Continue Browsing
            </a>
            <a
              href="/contact"
              className="block py-2 rounded bg-primary-colour px-5 text-lg font-medium tracking-wide text-white hover:text-black transition duration-300 hover:bg-secondary-colour focus:bg-darker-purple focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-100 disabled:shadow-none"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
