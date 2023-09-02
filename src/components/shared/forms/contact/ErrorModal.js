import React from "react";

const ErrorModal = ({ errorMessage }) => {
  return (
    <div
      className="flex w-full items-start gap-4 rounded border border-pink-100 bg-pink-50 px-4 py-3 text-sm text-pink-500"
      role="alert"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        role="graphics-symbol"
        aria-labelledby="title-04 desc-04"
      >
        <title id="title-04">form error</title>
        <desc id="desc-04">error related to form input</desc>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorModal;
