import React from "react";
import clsx from "clsx"; // Optional: Use clsx for better class merging

interface InputProps {
  id:string
  placeholder?: string;
  className?: string; // New prop for custom class names
  type: "text" | "email" | "password"; // Specify the type of input
  name?: string; // Optional: Add name prop for form handling
  value?: string; // Optional: Add value prop for controlled input
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Optional: Add onChange prop for controlled input
}

const Input = ({ placeholder, className, type="text",name, value, onChange }:InputProps) => {
  return (
    <input
    name={name}
      type={type}
      className={clsx(
        "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
        className // Merge custom class names
      )}
      placeholder={placeholder}
      value={value} // Controlled input value
      onChange={onChange} // Controlled input onChange handler
    />
  );
};

export default Input;