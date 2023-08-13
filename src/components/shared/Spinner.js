const Spinner = () => {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-live="polite"
        aria-busy="true"
        aria-labelledby="loader icon"
        className="h-14 w-14 mx-auto my-14"
      >
        <title id="loader icon">Loader icon</title>
        <desc id="loader icon">Loading data</desc>
        <path
          d="M7 8H3V16H7V8Z"
          className="animate animate-bounce fill-primary-colour"
        />
        <path
          d="M14 8H10V16H14V8Z"
          className="animate animate-bounce fill-primary-colour [animation-delay:.2s]"
        />
        <path
          d="M21 8H17V16H21V8Z"
          className="animate animate-bounce fill-primary-colour [animation-delay:.4s]"
        />
      </svg>
    </>
  );
};

export default Spinner;
