const Heading = ({ title, subtitle }) => {
  return (
    <div className={"py-10"}>
      {title && (
        <h2
          className={`text-center font-light text-4xl xl:text-5xl tracking-wide`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <h2 className={`mt-5 text-center font-light text-lg xl:text-2xl`}>
          {subtitle}
        </h2>
      )}
    </div>
  );
};

export default Heading;
