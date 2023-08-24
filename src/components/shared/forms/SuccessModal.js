import React from "react";

const SuccessModal = ({ message }) => {
  return (
    <div
      className="flex w-full items-start gap-4 rounded border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm text-emerald-500"
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
        aria-labelledby="title-01 desc-01"
      >
        <title id="title-01">Success</title>
        <desc id="desc-01">form sent successfully</desc>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p>{message}</p>
    </div>
  );
};

export default SuccessModal;
