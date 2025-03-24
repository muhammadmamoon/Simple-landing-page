import React from "react";
import Header from "./header";

function Searchengine() {
  return (
    <div className="bg-[#F7F8FA] flex  flex-col items-center justify-center space-y-5">
      <h1 className=" font-bold text-4xl mt-10 text-center"> 
        Search engine optimisation & <br /> Marketing.
      </h1>
      <p className=" text-gray-500">
        Simple is a simple template with a creative design that solves all your
        marketing and SEO queries.
      </p>
      <div className="flex space-x-4">
        <a
          href="#"
          className="mt-6 inline-block px-6 py-3 border-2 border-[#FEC4AF] text-red-500 font-medium  transition-all bg-[#FEC4AF] duration-300 hover:bg-white hover:text-red-500"
        >
          Contact us
        </a>
        <a
          href="#"
          className="mt-6 inline-block px-6 py-3 border-2 border-[#B7EDDD] text-green-500 font-medium  transition-all bg-[#B7EDDD] duration-300 hover:bg-white hover:text-green-500"
        >
          Contact us
        </a>
      </div>
      <img src="/search.svg" alt="Search Icon" className="h-[40%] w-[40%]" />
    </div>
  );
}

export default Searchengine;
