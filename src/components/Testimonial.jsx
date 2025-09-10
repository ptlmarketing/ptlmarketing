import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoStar, IoStarOutline } from "react-icons/io5"; // ✅ import filled + outline
import { testimonials } from "../page/AllServicesDataHere";


function Testimonial() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className="pb-10"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg- shadow-lg rounded-2xl p-6 max-w-lg mx-auto text-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
              />
              <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>

              {/* ⭐ Stars Loop */}
              <div className="flex justify-center mt-2 mb-4">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < t.stars ? (
                    <IoStar
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ) : (
                    <IoStarOutline
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                    />
                  )
                )}
              </div>

              {/* Feedback */}
              <p className="text-gray-600 italic leading-relaxed">
                "{t.feedback}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;
