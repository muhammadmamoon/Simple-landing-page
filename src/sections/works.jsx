import React from "react";

const services = [
  {
    id: 1,
    image: "/speed.svg",
    title: "Speed Optimisation",
    description:
      "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
  {
    id: 2,
    image: "/seo.svg",
    title: "SEO and Backlinks",
    description:
      "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
  {
    id: 3,
    image: "/content.svg",
    title: "Content Marketing",
    description:
      "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.",
  },
];

function Works() {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className=" text-center py-6 px-4 rounded-lg  w-[90%] max-w-2xl">
        <h2 className="text-3xl font-bold text-black">How does it work?</h2>
        <p className="text-gray-400 mt-2">
          One theme that serves as an easy-to-use operational toolkit that meets
          customer's needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10  p-10 w-[90%] max-w-5xl rounded-lg ">
        {services.map((service) => (
          <div
            key={service.id}
            className="text-center p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={service.image}
              alt={service.title}
              height={70}
              width={70}
              className="mx-auto"
            />
            <h3 className="font-semibold text-lg mt-3 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
