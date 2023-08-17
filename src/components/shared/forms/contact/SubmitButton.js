"use client";

const SubmitButton = ({
  id,
  name,
  value,
  inputClasses,
  onClickHandler,
  disabled,
}) => {
  return (
    <div className="relative my-6">
      <input
        id={id}
        type={"submit"}
        name={name}
        value={value}
        className={inputClasses}
        onClick={onClickHandler}
        disabled={disabled}
      />
    </div>
  );
};

export default SubmitButton;
