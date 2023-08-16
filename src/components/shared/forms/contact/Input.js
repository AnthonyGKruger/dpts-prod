"use client";
const Input = ({
  handleChange,
  id,
  type,
  name,
  placeholder,
  value,
  inputClasses,
  labelClasses,
  label,
}) => {
  return (
    <div className="relative my-6">
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={""}
        className={inputClasses}
        onChange={handleChange}
      />
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
    </div>
  );
};

export default Input;
