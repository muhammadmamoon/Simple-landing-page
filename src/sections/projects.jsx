import React from "react";

export default function Project() {
    return (
      <div className="flex flex-col items-center justify-center py-16 bg-gray-100 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/jdpr.jpg')" }}
        ></div>
  
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Do you have any projects?
          </h2>
          <p className="text-lg text-gray-700 mt-2">Contact us</p>
  
          <a
            href="#"
            className="mt-6 inline-block px-6 py-3 border-2 border-red-500 text-red-500 font-medium rounded-full transition-all duration-300 hover:bg-red-500 hover:text-white"
          >
            Contact us
          </a>
        </div>
      </div>
    );
  }
  