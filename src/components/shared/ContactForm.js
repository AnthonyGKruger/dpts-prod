"use client";

import Heading from "@/components/shared/Heading";

import { Provider } from "react-redux";
import store from "@/store/index";

import Form from "@/components/shared/forms/contact/Form";

const ContactForm = () => {
  return (
    <section className={"py-14 px-4"}>
      <Heading title={`Let's Transform Your Business Today!`} />
      <div className="lg:w-1/2 md:w-3/4 w-full px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-12">
            <Provider store={store}>
              <Form />
            </Provider>
          </div>
        </div>
      </div>
    </section>
  );
};

// handleChange, state, id, type,name,placeholder,value,inputClasses,labelClasses, label
export default ContactForm;
