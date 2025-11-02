import React from "react";

export const Footer = () => {
  return (
      <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500 bg-black">
        © {new Date().getFullYear()} HireFit. All rights reserved.
      </div>
  );
};

export default Footer;
