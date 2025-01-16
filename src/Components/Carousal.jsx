// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Autoplay, Pagination } from "swiper/modules";

export default function Carousal() {
  const [setSwiperRef] = useState(null);

  const developerContent = [
    {
      name: "Sujith Karthikaiselvan",
      role: "Founder",
      title: "Web Application Developer",
      description:
        "Hi, this is Sujith Karthikaiselvan. I'm a web application developer in Accurate Software & Integrators. My tech stacks are Reactjs, NextJs, Nodejs, MongoDB, and PostgreSQL. I also optimize websites for the production level.",
      image: "/images/sk.jpg",
    },
    {
      name: "Kaviarasan",
      role: "Co-Founder",
      title: "UI/UX Designer",
      description:
        "Hi, I'm Kaviarasan, I'm the designer for Accurate Software & Integrators. I create design in figma, wix and so.",
      image: "/images/kavi.jpg",
    },
    {
      name: "Sumith",
      role: "",
      title: "Logo Designer",
      description:
        "Hi, this is Sumith Karthikaiselvan, Logo Designer and also social media team. We create social media and also create new design.",
      image: "/images/sumk.jpg",
    },
    {
      name: "Rahul",
      role: "",

      title: "Social Media Team",
      description:
        "Hi, this is Rahul, I'm the social media team for our company. I handle all the social media stuffs.",
      image: "/images/rahul.JPG",
    },
    {
      name: "Kannadhasan",
      role: "",

      title: "Q & A Team",
      description:
        "Hi, I am Kannadhasan. I'm a QA manual tester in Accurate software and intergators. I develop test plan and test cases for manual testing. Execute manual testing to identify software defects and report them to development team.",
      image: "/images/guru.jpg",
    },
  ];

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
        {developerContent?.map((developer) => (
          <SwiperSlide
            key={developer._id}
            className=" p-10 rounded-3xl bg-green  text-white bg-neutral-900 "
          >
            <div className="flex w-full h-[550px] flex-col justify-center items-center space-y-5">
              <div className="flex items-center justify-center  w-full">
                <img
                  className=" h-[300px]   bg-cover rounded-3xl"
                  alt={developer.username}
                  src={developer.image}
                />
              </div>
              <h1 className=" text-2xl font-bold">{developer.name}</h1>
              <p className=" text-gray-200">{developer.role}</p>
              <p className=" text-xl font-semibold">{developer.title}</p>
              <p className="text-gray-200">{developer.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
