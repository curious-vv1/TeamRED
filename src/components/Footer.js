import React from "react";

const Footer = () => {
  return (
    <div className=" bg-red-500">
      <div className="max-w-2xl mx-auto text-gray-900 py-10">
        <div className="mt-4 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-900">
          <p className="order-2 md:order-1 mt-8 md:mt-0 ">
            {" "}
            © Vivek Kumar, 2023.{" "}
          </p>
          <div className="order-1 md:order-2">
            <span className="px-2">About us</span>
            <span className="px-2 border-l">Contact us</span>
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;