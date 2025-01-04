import { motion, useTransform, useScroll } from "framer-motion";
import { useContext, useRef } from "react";
import Loader from "../Components/Loader";
import { developerContext } from "../Context/DeveloperContext";
import { pageContext } from "../Context/PageContext";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Carousal from "../Components/Carousal";

const OurDeveloper = () => {
  const { pagesContent, loading } = useContext(pageContext);

  if (loading) return <Loader />;

  return (
    <div id="developer" className=" flex flex-col gap-5">
      {pagesContent?.map(
        (page) =>
          page.title === "BUILDING TEAM" && (
            <div
              key={page._id}
              className=" flex flex-col gap-5  items-center w-full   h-full justify-center"
            >
              <h2 className=" md:text-5xl text-3xl bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent  font-bold text-center md:text-start">
                {page.title}
              </h2>
              <p className=" text-gray-500 text-center ">{page.subTitle}</p>

              <p
                className=" text-gray-500 text-center "
                dangerouslySetInnerHTML={{
                  __html: page.content,
                }}
              ></p>
            </div>
          )
      )}

      <div className=" hidden md:flex flex-col ">
        <div className="flex h-48 items-center justify-center">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll down
          </span>
        </div>

        <HorizontalScrollCarousel />
        <div className="flex h-48 items-center justify-center">
          <span className="font-semibold uppercase text-neutral-500">
            Scroll up
          </span>
        </div>
      </div>

      <div className=" px-2 md:hidden">
        <Carousal />
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);

  const developer = [
    {
      name: "Sujith Karthikaiselvan",
      title: "Mernstack Developer",
      description:
        "Hi, this is Sujith Karthikaiselvan. I'm a web application developer in Accurate Software & Integrators. My tech stacks are Reactjs, NextJs, Nodejs, MongoDB, and PostgreSQL. I also optimize websites for the production level.",
      image: "/images/sujith.JPG",
      socialMedia: {
        facebook: "#",
        instagram: "#",
        whatsapp: "#",
        linkedin: "#",
      },
    },
    {
      name: "Kaviarasan",
      title: "UI/UX Designer",
      description:
        "Hi, I'm Kaviarasan, I'm the designer for Accurate Software & Integrators. I create design in figma, wix and so.",
      image: "/images/kavi.jpg",
      socialMedia: {
        facebook: "#",
        instagram: "#",
        whatsapp: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sumith",
      title: "Logo Designer",
      description:
        "Hi, this is Sumith Karthikaiselvan, Logo Designer and also social media team. We create social media and also create new design.",
      image: "/images/sumith.JPG",
      socialMedia: {
        facebook: "#",
        instagram: "#",
        whatsapp: "#",
        linkedin: "#",
      },
    },
    {
      name: "Rahul",
      title: "Social Media Team",
      description:
        "Hi, this is Rahul, I'm the social media team for our company. I handle all the social media stuffs.",
      image: "/images/rahul.JPG",
      socialMedia: {
        facebook: "#",
        instagram: "#",
        whatsapp: "#",
        linkedin: "#",
      },
    },
    {
      name: "Kannadhasan",
      title: "Q & A Team",
      description:
        "Hi, I am Kannadhasan. I'm a QA manual tester in Accurate software and intergators. I develop test plan and test cases for manual testing. Execute manual testing to identify software defects and report them to development team.",
      image: "/images/guru.jpg",
      socialMedia: {
        facebook: "#",
        instagram: "#",
        whatsapp: "#",
        linkedin: "#",
      },
    },
  ];

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {developer?.map((developers) => {
            return <Card developer={developers} key={developers._id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ developer }) => {
  return (
    <div
      key={developer._id}
      //   className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
      className=" bg-neutral-900 p-4 rounded-3xl "
    >
      <div className=" flex md:flex-row flex-col w-screen md:w-full h-[650px] md:h-full gap-2 ">
        <div className="md:h-[500px] h-[400px] md:w-[400px] ">
          <motion.img
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "linear" }}
            src={developer.image}
            alt={developer.name}
            role="img"
            loading="lazy"
            className=" object-cover h-full w-full shadow-md rounded-3xl"
          />
        </div>

        <div className=" flex flex-col items-center gap-2 justify-center md:w-[600px] px-4">
          <h1 className="font-bold text-3xl text-white text-center mb-1">
            {developer.name}
          </h1>
          <p className="text-xl text-center">{developer.title}</p>
          <p className="text-center   pt-3 font-normal text-sm">
            {developer.description}
          </p>
          <div
            className=" flex gap-5
           items-center"
          >
            <a aria-label="facebook" href="#">
              <FacebookRoundedIcon />
            </a>
            <a aria-label="instagram" href="#">
              <InstagramIcon />
            </a>
            <a aria-label="mail" href="#">
              <MailRoundedIcon />
            </a>
            <a aria-label="whatsapp" href="#">
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>

      {/* <div className="rounded overflow-hidden shadow-md bg-white">
        <div className="absolute -mt-20 w-full flex justify-center">
          <div className="h-32 w-32">
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "linear" }}
              src={`http://localhost:3000/${developer.image} `}
              alt="Display Picture of Andres Berlin"
              role="img"
              className="rounded-full object-cover h-full w-full shadow-md"
            />
          </div>
        </div>

        <div className="px-6 mt-16">
          <h1 className="font-bold text-3xl text-black text-center mb-1">
            {developer.username}
          </h1>
          <p className="text-gray-800 text-sm text-center">{developer.title}</p>
          <p
            className="text-center text-gray-600  pt-3 font-normal text-sm"
            dangerouslySetInnerHTML={{
              __html: developer.content,
            }}
          ></p>
          <div className="w-full flex justify-center pt-5 pb-5">
            <a href={developer.github} className="mx-5">
              <div aria-label="Github" role="img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#718096"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
            </a>
            <a href="javascript:void(0)" className="mx-5">
              <div aria-label="Twitter" role="img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#718096"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-twitter"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </div>
            </a>
            <a href="javascript:void(0)" className="mx-5">
              <div aria-label="Instagram" role="img">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#718096"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default OurDeveloper;
