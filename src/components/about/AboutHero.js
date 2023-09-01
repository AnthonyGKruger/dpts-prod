import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import Heading from "@/components/shared/Heading";

const AboutHero = () => {
  return (
    <section>
      <Heading subtitle={"And Some Industry Context"} title={"About Us"} />
      <div className="container px-6 m-auto mt-6">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-6 flex">
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 flex-grow xl:h-fit">
              <figure className="relative flex-grow h-full  ">
                <Image
                  src="/assets/about/JK3.png"
                  alt="card image"
                  width={900}
                  height={900}
                  className="object-cover w-full h-full"
                />
                <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900 p-6">
                  <Link
                    href={
                      "https://www.linkedin.com/in/johan-kruger-a4a731a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Beg4Em1NGTNy68Z4U3g3bMw%3D%3D"
                    }
                    target={"_blank"}
                    className={"flex my-auto text-white"}
                  >
                    <BsLinkedin className={"h-6 w-6"} />
                    <h3 className="text-lg font-medium pl-5">{`View Johan's Profile`}</h3>
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-6 flex">
            <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 flex flex-grow xl:h-full">
              <div className="p-6 gap-6 xl:gap-9 flex flex-col flex-grow">
                <header className="">
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-light text-slate-700">
                    The Owner
                  </h3>
                </header>
                <p
                  className={
                    "text-lg  lg:text-xl xl:text-2xl font-light tracking-wide"
                  }
                >
                  With a dynamic career spanning Nedbank, FNB, Multichoice,
                  Standard Bank, PayX, and DFCU Bank, I am a seasoned Enterprise
                  Solution Architect and Payment Consultant. My expertise in
                  shaping payment systems and financial solutions is backed by
                  extensive international experience.
                </p>
                <p
                  className={
                    "text-lg lg:text-xl xl:text-2xl font-light tracking-wide"
                  }
                >
                  {`If you're looking to transform your payment strategies,
                    enhance customer experiences, or innovate in the finance
                    industry, let's connect. Together, we can shape the future of
                    payments.`}
                </p>
                <Link
                  href={"#"}
                  className={
                    " my-auto h-14 rounded-xl bg-primary-colour md:px-6 px-3 font-base  text-md lg:text-lg xl:text-xl" +
                    " tracking-wide text-slate-50 hover:text-slate-800 shadow-lg shadow-secondary-colour border border-white/50 " +
                    "hover:bg-secondary-colour hover:shadow-lg hover:shadow-secondary-colour hover:scale-105 hover:border-accent-colour" +
                    " transition-all duration-500 w-full lg:w-fit py-4 xl:py-3 text-center"
                  }
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
