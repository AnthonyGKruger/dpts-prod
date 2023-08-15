import Image from "next/image";

const AboutDetails = ({ title, subtitle, details, image, even }) => {
  return even ? (
    <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
      <div className="flex-1 pb-5 md:pb-0">
        <header className="flex gap-8 mb-4">
          <div className={"px-8 lg:pt-14 pt-5"}>
            <h3 className="text-2xl font-medium text-slate-700">{title}</h3>
            <p className="text-sm text-slate-400">{subtitle}</p>
          </div>
        </header>
        {details.map((paragraph, idx) => {
          return (
            <p
              className={"px-8 xl:text-xl lg:text-lg md:text-md font-base"}
              key={idx}
            >
              {paragraph}
            </p>
          );
        })}
      </div>{" "}
      <figure className="flex-1 w-1/2">
        <Image
          src={image}
          width={500}
          height={500}
          alt={title}
          className="object-cover w-full"
          // className="object-fill min-h-full aspect-auto"
        />
      </figure>
    </div>
  ) : (
    <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
      <figure className="flex-1">
        <Image
          src={image}
          width={500}
          height={500}
          alt={title}
          className="object-cover w-full"
          // className="object-fill min-h-full aspect-auto"
        />
      </figure>

      <div className="flex-1 pb-5 md:pb-0">
        <header className="flex gap-8 mb-4">
          <div className={"px-8 lg:pt-14 pt-5"}>
            <h3 className="text-2xl font-medium text-slate-700">{title}</h3>
            <p className="text-sm text-slate-400">{subtitle}</p>
          </div>
        </header>
        {details.map((paragraph, idx) => {
          return (
            <p
              className={"px-8 xl:text-xl  lg:text-lg md:text-md font-base"}
              key={idx}
            >
              {paragraph}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default AboutDetails;
