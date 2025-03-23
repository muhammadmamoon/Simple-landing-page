import React from "react";

function Leading() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around bg-[#FFFFFF] py-10 px-5 md:px-20">
      <img
        src="/leading.png" 
        alt="Leading Digital Agency"
        className="w-full md:w-1/3 object-cover rounded-lg shadow-lg"
      />

      <div className="md:w-1/2  mt-5 md:mt-0 md:ml-10 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">
          Leading Digital Agency for Business Solution
        </h2>
        <p className="text-gray-600 mt-3 leading-relaxed">
          Power-packed with impressive features and well-optimized, this
          template is designed to provide the best performance in all
          circumstances. Its smart features make it a powerful stand-alone
          website-building tool.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Leading;
