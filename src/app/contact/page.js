import Heading from "@/components/shared/Heading";
import ContactForm from "@/components/shared/ContactForm";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

export const metadata = {
  title: "Contact Us - DPTS",
  description: "DPTS Contact Us Page",
};

const Contact = () => {
  return (
    <article className={"flex flex-col space-y-10"}>
      <Heading title={"Contact Us"} />
      <section className={""}>
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d141626.27023317447!2d31.46066283487643!3d-24.067670599871594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec34896c535a0a1%3A0x9a504ed31f67787b!2sKruger%20National%20Park!5e0!3m2!1sen!2sza!4v1693625019194!5m2!1sen!2sza"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className={""}>
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6">
              {/*<Link href={"tel:+27610340820"} target={"_blank"}>*/}
              <div className="overflow-hidden text-center bg-white rounded shadow-md text-primary-colour shadow-slate-200 hover:text-darker-purple transition-all duration-300">
                {/*<figure className="p-6 pb-0">*/}
                <FaPhoneSquareAlt className={"mx-auto mt-6 mb-0 text-5xl "} />
                {/*</figure>*/}

                <h3 className="mb-4 mt-6 text-xl font-medium">Call Us</h3>
                <p className={"mb-6"}>
                  <Link href={"tel:+27610340820"} target={"_blank"}>
                    +27 61 034 0820
                  </Link>
                </p>
              </div>
              {/*</Link>*/}
            </div>

            <div className="col-span-4 lg:col-span-6">
              {/*<Link href={"mailto:anthony@ezdev.solutions"} target={"_blank"}>*/}
              <div className="overflow-hidden text-center bg-white rounded shadow-md text-primary-colour shadow-slate-200 hover:text-darker-purple transition-all duration-300">
                {/*<figure className="p-6 pb-0">*/}
                <MdEmail className={"mx-auto mt-6 mb-0 text-5xl "} />
                {/*</figure>*/}

                <h3 className="mb-4 mt-6 text-xl font-medium">Email Us</h3>
                <p className={"mb-6"}>
                  <Link
                    href={"mailto:anthony@ezdev.solutions"}
                    target={"_blank"}
                  >
                    anthony@ezdev.solutions
                  </Link>
                </p>
              </div>
              {/*</Link>*/}
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </article>
  );
};

export default Contact;
