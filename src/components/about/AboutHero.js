import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import Heading from "@/components/shared/Heading";

const AboutHero = () => {
  return (
    <section className={"py-20"}>
      <Heading
        subtitle={"And Some Industry Context"}
        title={"About The Owner"}
      />
      <div className="container px-6 m-auto mt-6">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-6">
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
              <figure className="relative">
                <Image
                  src="/assets/about/JK.png"
                  alt="card image"
                  width={600}
                  height={600}
                  className="object-contain h-full w-full"
                />
                <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-500 p-6">
                  <Link
                    href={
                      "https://www.linkedin.com/in/johan-kruger-a4a731a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Beg4Em1NGTNy68Z4U3g3bMw%3D%3D"
                    }
                    target={"_blank"}
                    className={"flex my-auto text-primary-colour"}
                  >
                    <BsLinkedin className={"h-6 w-6"} />
                    <h3 className="text-lg font-medium pl-5">{`View Johan's Profile`}</h3>
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-6 flex">
            <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 flex-grow">
              <div className="p-6 gap-6 flex flex-col">
                <header className="">
                  <h3 className="text-3xl font-light text-slate-700">
                    Industry Context
                  </h3>
                </header>
                <p className={"text-xl font-light"}>
                  The financial services and payments industry is undergoing
                  unprecedented changes due to technological advancements,
                  regulations, new economic powers, and consumer demands.
                  Commerce is being fundamentally transformed, integrating
                  technology and regulation. Payment processes are merging with
                  broader commerce activities, as seen in cases like Uber, where
                  payments seamlessly blend into value transfer.
                </p>
                <p className={"text-xl font-light"}>
                  {`Customer - centric ecosystems, exemplified by companies like
                    WeChat, Grab, and Alibaba, offer predictive insights into
                    customer behavior, saving time, effort, and money. The future
                    of payments will focus less on transactions and more on
                    data-rich interactions, forming the basis for these
                    ecosystems' success. Financial institutions are adapting to
                    provide strategic and value-added solutions within the broader
                    commercial context.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
