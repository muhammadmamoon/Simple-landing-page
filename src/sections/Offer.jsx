import React from "react";

export const Offer = () => {
  return (
    <div id="our-blog" className="flex flex-col md:flex-row items-center justify-between bg-[#FFFFFF] py-10 px-5 md:px-20 w-full h-full">
      <div className="md:w-1/2 flex flex-col justify-center items-start space-y-5">
        <h2 className="font-bold text-3xl md:text-4xl text-gray-800">
          We Offer a Full Range <br /> of Digital Marketing Services!
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus
          consectetuer turpis, suspendisse. Lorem ipsum dolor sit amet,
          tincidunt vestibulum. Fusce egeabus consectetuer.
        </p>
      </div>

      <img
        src="/offer.png"
        alt="offer"
        className="w-full md:w-1/3 mt-5 md:mt-0 object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};
