"use client";
import ContactForm from "@/components/shared/ContactForm";
import Services from "@/components/shared/Services";
import Spinner from "@/components/shared/Spinner";
import Link from "next/link";
import { BsFillCartDashFill } from "react-icons/bs";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import LoginBeforeAddToCartModal from "@/components/shared/forms/alerts/LoginBeforeAddToCartModal";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "@/store/user-slice";

const ServiceItem = ({ params }) => {
  const [service, setService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const serviceId = params.id;
  const userState = useSelector((state) => state.user);
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.post("/api/service/", { id: serviceId }).then((response) => {
      setService(response.data.attributes);
    });
  }, []);

  const addToCartHandler = () => {
    if (!userState.isLoggedIn) {
      // setShowModal(true);
      dispatch(
        userActions.showModalState({
          modal: "showAddToCartButNotLoggedInModal",
          isShowing: true,
        }),
      );
    }
  };

  const showModalHandler = () => {
    setShowModal((state) => !state);
  };

  return (
    <>
      {/*{showModal && (*/}
      {/*  <LoginBeforeAddToCartModal showModalHandler={showModalHandler} />*/}
      {/*)}*/}
      {state.showAddToCartButNotLoggedInModal && (
        <LoginBeforeAddToCartModal showModalHandler={showModalHandler} />
      )}
      {service ? (
        <section className={`lg:py-14`}>
          <div className="container px-6 m-auto mt-6">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div className="col-span-4 lg:col-span-6 flex">
                <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 flex-grow xl:h-full">
                  <figure className="relative flex-grow h-full  ">
                    <Image
                      src={service.image_url}
                      alt={service.title}
                      width={900}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </figure>
                </div>
              </div>
              <div className="col-span-4 lg:col-span-6 flex">
                <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 flex flex-grow xl:h-full">
                  <div className="p-6 gap-6 xl:gap-9 flex flex-col flex-grow">
                    <header className="">
                      <h3 className="text-xl lg:text-2xl xl:text-3xl font-light text-slate-700">
                        {service.title}
                      </h3>
                    </header>
                    <p
                      className={
                        "text-md  lg:text-lg xl:text-xl font-light tracking-wide"
                      }
                    >
                      {service.long_description}
                    </p>
                    <p
                      className={
                        "text-md  lg:text-lg xl:text-xl font-light tracking-wide"
                      }
                    >
                      {`Price per consultation - R${service.price}`}
                    </p>
                    <button
                      onClick={addToCartHandler}
                      className={
                        " my-auto h-14 rounded-xl bg-primary-colour md:px-6 px-3 font-base  text-md lg:text-lg xl:text-xl" +
                        " tracking-wide text-slate-50 hover:text-slate-800 shadow-lg shadow-secondary-colour border border-white/50 " +
                        "hover:bg-secondary-colour hover:shadow-lg hover:shadow-secondary-colour hover:scale-105 hover:border-accent-colour" +
                        " transition-all duration-500 w-full lg:w-fit py-4 xl:py-3 text-center flex items-center" +
                        " place-content-center"
                      }
                    >
                      Add to cart
                      <span className={`ml-3 inline text-center`}>
                        <BsFillCartDashFill />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 flex flex-grow xl:h-full mt-5">
              <div className="p-6 gap-6 xl:gap-9 flex flex-col flex-grow">
                <p
                  className={
                    "text-md  lg:text-lg xl:text-xl font-light tracking-wide"
                  }
                >
                  {service.short_description}
                </p>
                <Link
                  href={"#contact"}
                  className={
                    " my-auto h-14 rounded-xl bg-primary-colour md:px-6 px-3 font-base  text-md lg:text-lg xl:text-xl" +
                    " tracking-wide text-slate-50 hover:text-slate-800 shadow-lg shadow-secondary-colour border border-white/50 " +
                    "hover:bg-secondary-colour hover:shadow-lg hover:shadow-secondary-colour hover:scale-105 hover:border-accent-colour" +
                    " transition-all duration-500 w-full lg:w-fit py-4 xl:py-3 text-center flex items-center" +
                    " place-content-center"
                  }
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Spinner />
      )}
      <Services />
      <ContactForm />
    </>
  );
};

export default ServiceItem;
