// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Autoplay, Pagination } from "swiper/modules";
import { techContext } from "../Context/TechstackContext";

export default function TechCarousal() {
  const [setSwiperRef] = useState(null);
  const { techContent } = useContext(techContext);
  return (
    <div className=" sm:px-10 sm:pb-10 md:pb-20 md:px-30 lg:px-48">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        freeMode={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          780: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1250: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper flex justify-center items-center  w-full h-auto "
      >
        {techContent?.map((tech) => (
          <SwiperSlide
            key={tech._id}
            className=" p-10 rounded-3xl bg-green  text-white bg-neutral-900 "
          >
            <div className="flex w-full h-[300px]  flex-col justify-center items-center space-y-5">
              <div className="flex items-center justify-center  w-full">
                <img
                  className=" h-[200px]  bg-cover rounded-3xl"
                  src={`https://accurate-software-integrators-backend.onrender.com/${tech.image} `}
                />
              </div>
              <p className=" text-xl font-semibold">{tech.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
