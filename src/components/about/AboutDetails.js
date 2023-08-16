import Image from "next/image";
import Link from "next/link";

const AboutDetails = ({ title, subtitle, details, image, even }) => {
  const containerClasses =
    "flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row";
  const textContainerClasses = "flex-1 pb-5 md:pb-0";
  const textHeaderClasses = "flex gap-8 xl:gap-14 mb-4";
  const headerInnerContainerClasses = "px-8 xl:px-14 lg:pt-10 pt-5";
  const titleClasses = "text-2xl xl:text-4xl font-medium text-slate-700";
  const subtitleClasses = "text-sm text-slate-400";
  const paragraphClasses =
    "px-8 xl:px-14 xl:text-2xl lg:text-lg md:text-md font-base";
  const imageContainerClasses = "flex-1";
  const imageClasses = "object-cover w-full";
  const buttonClasses = `block xl:h-10 rounded-xl bg-primary-colour md:px-6 px-3 font-base text-md tracking-wide text-slate-50
     hover:text-slate-800 shadow-lg shadow-secondary-colour border border-white/50  hover:bg-secondary-colour
      hover:shadow-lg hover:shadow-secondary-colour hover:scale-105 hover:border-accent-colour transition-all 
      duration-500  w-fit py-1 xl:py-2 xl:ml-14 ml-8 mt-2 xl:mt-5 hidden lg:block`;

  return even ? (
    <div className={containerClasses}>
      <div className={textContainerClasses}>
        <header className={textHeaderClasses}>
          <div className={headerInnerContainerClasses}>
            <h3 className={titleClasses}>{title}</h3>
            <p className={subtitleClasses}>{subtitle}</p>
          </div>
        </header>
        {details.map((paragraph, idx) => {
          return (
            <p className={paragraphClasses} key={idx}>
              {paragraph}
            </p>
          );
        })}
        <Link href={"#"} className={buttonClasses}>
          Contact Us
        </Link>
      </div>
      <figure className={imageContainerClasses}>
        <Image
          src={image}
          width={500}
          height={500}
          alt={title}
          className={imageClasses}
          // className="object-fill min-h-full aspect-auto"
        />
      </figure>
    </div>
  ) : (
    <div className={containerClasses}>
      <figure className={imageContainerClasses}>
        <Image
          src={image}
          width={500}
          height={500}
          alt={title}
          className={imageClasses}
          // className="object-fill min-h-full aspect-auto"
        />
      </figure>

      <div className={textContainerClasses}>
        <header className={textHeaderClasses}>
          <div className={headerInnerContainerClasses}>
            <h3 className={titleClasses}>{title}</h3>
            <p className={subtitleClasses}>{subtitle}</p>
          </div>
        </header>
        {details.map((paragraph, idx) => {
          return (
            <p className={paragraphClasses} key={idx}>
              {paragraph}
            </p>
          );
        })}
        <Link href={"#"} className={buttonClasses}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default AboutDetails;
