import { motion } from "motion/react";
import TextAnimations from "../Animations/TextAnimations";
import { useContext } from "react";
import { pageContext } from "../Context/PageContext";
import Loader from "../Components/Loader";

const Herosection = () => {
  return (
    <section
      id="hero"
      className=" text-white relative h-screen  flex flex-col gap-5 items-center justify-center "
    >
      <div className=" absolute w-[100%] h-[100%] top-0 left-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
      <video
        autoPlay
        loop
        muted
        className=" w-[100%] h-[100%] object-cover hidden md:flex"
      >
        <source src="/images/bgvideo.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col gap-5 w-[100%] h-[100%] items-center justify-center absolute top-0">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            type: "fade",
            stiffness: 100,
            damping: 10,
            delay: 1,
          }}
          className=" p-2 rounded-full  text-xl bg-gray-900  hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 hover:text-black"
        >
          Web Development and Designing
        </motion.div>
        <div className=" hidden md:flex">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              type: "fade",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
            className=" text-center  font-bold text-5xl lg:text-6xl xl:text-7xl md:h-[90px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100  bg-clip-text text-transparent"
          >
            Accurate Software & Integrators
          </motion.div>
        </div>

        <div className=" md:hidden flex items-center justify-center flex-col">
          <h1 className=" text-6xl font-bold md:text-7xl md:h-[90px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100  bg-clip-text text-transparent">
            ASI
          </h1>
          <h2>Accurate Software & Integrators</h2>
        </div>

        <motion.p
          className=" text-center text-[17px]"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            type: "fade",
            stiffness: 100,
            damping: 10,
            delay: 1,
          }}
        >
          Your website is the center of your digital ecosystem; the experience
          matters once a customer enters, just as much as the perception they
          have of you before they walk through the door.
        </motion.p>
      </div>
    </section>
  );
};

export default Herosection;
