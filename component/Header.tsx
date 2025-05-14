import React from "react";
import clsx from "clsx";

interface HeaderProps {
  title: string;
  className?: string; // Allow users to pass custom class names
}

const Header = ({ title, className }:HeaderProps) => {
  return (
    <header
      className={clsx(
        "bg-violet-800 text-white py-4 px-4 sm:px-6 text-center text-lg sm:text-xl md:text-2xl font-bold",
        className // Merge custom class names
      )}
    >
      {title}
    </header>
  );
};

export default Header;