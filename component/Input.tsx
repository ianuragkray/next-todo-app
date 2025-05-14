import React from "react";
import clsx from "clsx"; // Optional: Use clsx for better class merging

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; // New prop for custom class names
}

const Input = ({ placeholder, value, onChange, className }:InputProps) => {
  return (
    <input
      type="text"
      className={clsx(
        "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
        className // Merge custom class names
      )}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;