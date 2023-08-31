"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/shared/Heading";
import Spinner from "@/components/shared/Spinner";

const Services = () => {
  const [services, setServices] = useState(null);
  const buttonClasses = `h-9 rounded-xl bg-primary-colour md:px-6 px-3 font-base  text-md
                tracking-wide text-slate-50 hover:text-slate-800 shadow-lg shadow-secondary-colour border border-white/50 
                 hover:bg-secondary-colour hover:shadow-lg hover:shadow-secondary-colour
                hover:scale-105 hover:border-accent-colour transition-all duration-500 block w-full text-center py-1`;

  const fetchData = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/dpts-services`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      })
      .then((response) => {
        setServices(
          response.data.data.map((service) => {
            const serviceData = service.attributes;

            return (
              <div key={service.id} className="col-span-4 md:col-span-5 ">
                <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 h-full">
                  <figure>
                    <Image
                      src={serviceData.image_url}
                      alt="card image"
                      className="aspect-video w-full"
                      width={300}
                      height={300}
                    />
                  </figure>
                  <div className="p-6 h-full flex flex-col">
                    <div>
                      <header className="mb-4">
                        <h3 className="text-xl font-medium text-slate-700 line-clamp-2">
                          {serviceData.title}
                        </h3>
                        <p className="text-slate-400">{`R${serviceData.price} for a consultation`}</p>
                      </header>
                      <p className="line-clamp-4">
                        {serviceData.short_description}
                      </p>
                    </div>
                    <div className="mt-4">
                      <Link
                        href={`/services/${service.id}`}
                        className={buttonClasses}
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }),
        );
      })
      .catch((err) => {
        setServices(null);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={`py-14`}>
      <Heading
        title={`Services We Offer`}
        subtitle={`Take a look at what we have to offer`}
      />

      {services ? (
        <div className="container px-6 m-auto mt-8">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-10 lg:grid-cols-10">
            {services}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </section>
  );
};

export default Services;
