const Heading = ({ title, subtitle }) => {
  return (
    <div>
      {title && (
        <h2 className={`text-center font-light text-4xl tracking-wide`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <h2 className={`mt-5 text-center font-light text-lg`}>{subtitle}</h2>
      )}
    </div>
  );
};

export default Heading;
