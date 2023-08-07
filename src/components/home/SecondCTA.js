import Image from "next/image";
import Heading from "@/components/shared/Heading";
import Link from "next/link";

const serviceList = [
  {
    title: "Payment Architecture Simplified",
    subtitle: "keep payments rolling in",
    description:
      "We help Banks and Payment Processors transform their digital ambitions into reality",
    image: "/assets/home/circuit-board-2.jpg",
    link: "/",
    buttonText: "Simplify Your Payment Strategy",
  },
  {
    title: "Technology Strategy and Consulting",
    subtitle: "Technology is everywhere—but value isn’t",
    description:
      "Our Technology Strategy & Advisory practice helps architect exceptional business value.",
    image: "/assets/home/maze.jpg",
    link: "/",
    buttonText: "Get The Advise You Need",
  },
  {
    title: "Cloud services",
    subtitle: "The future of payments",
    description: "Get to value faster with Cloud First.",
    image: "/assets/home/cloud.jpg",
    link: "/",
    buttonText: "Upscale Your Infrastructure",
  },
  {
    title: "Data and analytics services",
    subtitle: "Your most undervalued asset",
    description:
      "Unlock powerful insights by tapping into data you didn’t even know you had.",
    image: "/assets/home/data.jpg",
    link: "/",
    buttonText: "Unlock Your Data's Potential",
  },
];

const subtitleClasses = "uppercase text-sm";
const titleClasses = "font-extrabold lg:text-5xl xl:text-6xl text-3xl";
const descriptionClasses = "lg:text-xl text-md";
const imageClasses = "object-contain";
const textContainerClasses =
  "col-span-4 lg:col-span-6 pl-1/2 self-center flex flex-col gap-y-4 px-5 py-5";
const imageContainerClasses = "col-span-4 lg:col-span-6";
const buttonContainerClasses = `w-full h-full transition-all duration-300`;
const buttonClasses = `h-9 rounded-xl bg-primary-colour md:px-6 px-3 font-base  text-md
                tracking-wide text-slate-50 hover:text-slate-800 shadow-lg shadow-secondary-colour border border-white/50 
                 hover:bg-secondary-colour hover:shadow-lg hover:shadow-secondary-colour
                hover:scale-105 hover:border-accent-colour transition-all duration-500 block w-fit py-1`;

const serviceElements = serviceList.map((service, idx) => {
  if (idx % 2 === 0) {
    return (
      <>
        <div key={idx} className={textContainerClasses}>
          <p className={subtitleClasses}>{service.subtitle}</p>
          <p className={titleClasses}>{service.title}</p>
          <p className={descriptionClasses}>{service.description}</p>
          <div className={buttonContainerClasses}>
            <Link href={service.link} className={buttonClasses}>
              {service.buttonText}
            </Link>
          </div>
        </div>
        <div className={imageContainerClasses}>
          <Image
            src={service.image}
            alt={service.title}
            width={900}
            height={500}
            className={imageClasses}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div key={idx} className={imageContainerClasses}>
          <Image
            src={service.image}
            alt={service.title}
            width={900}
            height={500}
            className={imageClasses}
          />
        </div>
        <div className={textContainerClasses}>
          <p className={subtitleClasses}>{service.subtitle}</p>
          <p className={titleClasses}>{service.title}</p>
          <p className={descriptionClasses}>{service.description}</p>
          <div className={buttonContainerClasses}>
            <Link href={service.link} className={buttonClasses}>
              {service.buttonText}
            </Link>
          </div>
        </div>
      </>
    );
  }
});

const SecondCTA = () => {
  return (
    <section>
      <div className="container  m-auto pt-14">
        <Heading title={"Our services are all about"} />
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 mt-10">
          {serviceElements}
        </div>
      </div>
    </section>
  );
};

export default SecondCTA;
