"use client";
import { useState } from "react";
import Heading from "@/components/shared/Heading";
import Input from "@/components/shared/forms/contact/Input";

const ContactForm = () => {
  const [state, setState] = useState({
    "id-01": "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };
  const inputClasses =
    "peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500" +
    " placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400";
  const labelClasses =
    "absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all" +
    " before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent";
  return (
    <section className={"p-14"}>
      <Heading title={`Let's Transform Your Business Today!`} />
      <div className="w-1/2 px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-12">
            <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
              <div className="p-6">
                <Input
                  handleChange={handleChange}
                  id={"name"}
                  type={"text"}
                  name={"name"}
                  placeholder={"Your Name"}
                  value={state}
                  inputClasses={inputClasses}
                  labelClasses={labelClasses}
                  label={"Your Name"}
                />
                <Input
                  handleChange={handleChange}
                  id={"surname"}
                  type={"text"}
                  name={"surname"}
                  placeholder={"Your Surname"}
                  value={state}
                  inputClasses={inputClasses}
                  labelClasses={labelClasses}
                  label={"Your Surname"}
                />
                <Input
                  handleChange={handleChange}
                  id={"company"}
                  type={"text"}
                  name={"company"}
                  placeholder={"Your Business Name (Optional)"}
                  value={state}
                  inputClasses={inputClasses}
                  labelClasses={labelClasses}
                  label={"Your Business Name (Optional)"}
                />
                <Input
                  handleChange={handleChange}
                  id={"email"}
                  type={"email"}
                  name={"email"}
                  placeholder={"Your Email"}
                  value={state}
                  inputClasses={inputClasses}
                  labelClasses={labelClasses}
                  label={"Your Email"}
                />

                <Input
                  handleChange={handleChange}
                  id={"submit"}
                  type={"submit"}
                  name={"submit"}
                  placeholder={"Your Name"}
                  value={"Send"}
                  inputClasses={inputClasses}
                  labelClasses={labelClasses}
                  label={"Your Name"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// handleChange, state, id, type,name,placeholder,value,inputClasses,labelClasses, label
export default ContactForm;
