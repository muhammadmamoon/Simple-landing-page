import React from "react";

const caseStudies = [
  {
    id: 1,
    image: "/Group95.svg",
    title: "Online Marketing",
    label: "SEO, Marketing",
    description: "Know more about Online marketing",
    bgColor: "bg-[#02042A]",
  },
  {
    id: 2,
    image: "/Group108.svg",
    title: "Web Development",
    label: "Developing, Designing",
    description: "Know more about Web Development",
    bgColor: "bg-[#FFA500]",
  },
  {
    id: 3,
    image: "/Group115.svg",
    title: "Web Designing",
    label: " Designing, Developing",
    description: "Know more about Web Designing",
    bgColor: "bg-[#C0C0F8]",
  },
  {
    id: 4,
    image: "/Group126.svg",
    title: "Software Development",
    label: "Developing, Designing",
    description: "Know more about Designing",
    bgColor: "bg-[#6FD6BE]",
  },
];

function Casestudies() {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-[#FFFFFF]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Case Studies</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, tincidunt vestibulum.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-[90%]">
        {caseStudies.map((study) => (
          <div key={study.id} className="flex flex-col items-center">
            <div
              className={`w-64 h-64 flex items-center justify-center rounded-lg shadow-lg ${study.bgColor}`}
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-40 h-40 object-contain"
              />
            </div>

            <h3 className="mt-3 text-lg font-bold text-gray-800">
              {study.title}
            </h3>
            <span className="text-gray-500 text-sm">{study.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Casestudies;
