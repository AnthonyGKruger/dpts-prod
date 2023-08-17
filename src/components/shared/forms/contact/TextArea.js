"use client";
import React from "react";

const TextArea = ({ id, name, inputClasses, labelClasses, handleChange }) => {
  return (
    <div className="relative">
      <textarea
        id={id}
        type="text"
        name={name}
        // required
        rows="3"
        className={inputClasses}
        onChange={handleChange}
      ></textarea>
      <label htmlFor="comments" className={labelClasses}>
        Tell us more about your query (optional)
      </label>
    </div>
  );
};

export default TextArea;
