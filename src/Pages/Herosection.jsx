import { motion } from "motion/react";
import TextAnimations from "../Animations/TextAnimations";
import { useContext } from "react";
import { pageContext } from "../Context/PageContext";
import Loader from "../Components/Loader";

const Herosection = () => {
  const { pagesContent, loading } = useContext(pageContext);

  if (loading) return <Loader />;
  return (
    <section
      id="hero"
      className=" text-white relative h-screen  flex flex-col gap-5 items-center justify-center "
    >
      <div className=" absolute w-[100%] h-[100%] top-0 left-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
      <video autoPlay loop muted className=" w-[100%] h-[100%] object-cover">
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
            delay: 3.2,
          }}
          className=" p-2 rounded-full  text-xl bg-gray-900  hover:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 hover:text-black"
        >
          {pagesContent?.map(
            (page) =>
              page.title === "Accurate Software & Integrators " && page.subTitle
          )}
        </motion.div>

        <div className=" hidden md:flex">
          {pagesContent?.map(
            (page) =>
              page.title === "Accurate Software & Integrators " && (
                <TextAnimations
                  key={page.id}
                  once={true}
                  text={page.title}
                  className=" text-2xl font-bold md:text-7xl md:h-[90px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100  bg-clip-text text-transparent"
                />
              )
          )}
        </div>

        <div className=" md:hidden flex items-center justify-center flex-col">
          <TextAnimations
            once={true}
            text="ASI"
            className=" text-6xl font-bold md:text-7xl md:h-[90px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100  bg-clip-text text-transparent"
          />
          <h1>Accurate Software & Integrators</h1>
        </div>

        {pagesContent?.map(
          (page) =>
            page.title === "Accurate Software & Integrators " && (
              <motion.p
                key={page.id}
                dangerouslySetInnerHTML={{
                  __html: page.content,
                }}
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
                  delay: 3.2,
                }}
              ></motion.p>
            )
        )}

        {/* <motion.p
          dangerouslySetInnerHTML={{
            __html: pagesContent?.map((page) =>
              page.title === "Accurate Software & Integrators "
                ? page.content
                : "gjhg"
            ),
          }}
          className=" text-center text-[17px]"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 3.2,
          }}
        ></motion.p> */}
      </div>
    </section>
  );
};

export default Herosection;
