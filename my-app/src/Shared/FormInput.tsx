import React from "react";
interface FormInputInterface {
  text?: string;
  placeholder?: string;
  className?: string;
  name?: string;
  id?: string;
}
const FormInput = ({
  text = "input text",
  placeholder = "Enter your search keyword",
  className = "block w-full rounded-md text-dark text-base font-medium bg-purple-500",
  name,
  id,
}: FormInputInterface) => {
  return (
    <input
      name={name}
      id={id}
      type={text}
      placeholder={placeholder}
      className={`  border-none focus:none focus:outline-0 focus:ring-0 placeholder:text-neutral-500 placeholder:text-sm ${className}`}
    />
  );
};

export default FormInput;
