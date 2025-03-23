import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  { id: 1, name: "Cody Lambert", role: "Marketing Manager", image: "/face1.jpg", text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse." },
  { id: 2, name: "Tony Martinez", role: "Marketing Manager", image: "/face2.jpg", text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse." },
  { id: 3, name: "Sophia Armstrong", role: "Marketing Manager", image: "/face3.jpg", text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse." },
  { id: 4, name: "Michael Smith", role: "Marketing Manager", image: "/face4.jpg", text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse." },
  { id: 5, name: "Emma Watson", role: "Marketing Manager", image: "/face5.jpg", text: "Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse." }
];

export default function Feedback() {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-[#FFFFFF] w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          What our customers have to say
        </h2>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, tincidunt vestibulum.</p>
      </div>

      <div className="relative w-full max-w-6xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 }
          }}
          className="w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                <p className="text-gray-600">{testimonial.text}</p>
                <div className="mt-4 border-b-2 w-10 mx-auto border-red-500"></div>
                <h3 className="font-bold mt-2">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-6">
          <div className="swiper-pagination !relative"></div>
        </div>
      </div>
    </div>
  );
}
