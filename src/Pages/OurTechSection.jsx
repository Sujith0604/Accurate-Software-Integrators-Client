import { motion, useTransform, useScroll } from "framer-motion";
import { useContext, useRef } from "react";
import { techContext } from "../Context/TechstackContext";
import { pageContext } from "../Context/PageContext";
import Loader from "../Components/Loader";

const OurTechSection = () => {
  const { pagesContent, loading } = useContext(pageContext);

  if (loading) return <Loader />;

  return (
    <div id="skills" className="">
      {pagesContent?.map(
        (page) =>
          page.title === "What tech we use?" && (
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
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll Down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const { techContent } = useContext(techContext);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {techContent?.map((tech) => {
            return (
              <Card title={tech.title} image={tech.image} key={tech._id} />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ title, key, image }) => {
  return (
    <div
      key={key}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-900 rounded-3xl"
    >
      <div
        style={{
          // backgroundImage: `url(http://localhost:3000/${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 ">
        <img
          className=" h-[70px] w-[70px] bg-white rounded-3xl"
          src={`https://accurate-software-integrators-backend.onrender.com/${image}`}
          alt={title}
        />
        <p className=" p-8 text-4xl  uppercase text-white ">{title}</p>
      </div>
    </div>
  );
};

// const Card = ({ title, key, image }) => {
//   return (
//     <article
//       key={key}
//       className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 "
//     >
//       <img
//         src={`http://localhost:3000/${image}`}
//         alt="University of Southern California"
//         className="absolute inset-0 h-full w-full object-cover"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
//       <h3 className="z-10 mt-3 text-3xl font-bold text-white">{title}</h3>
//       {/* <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
//         City of love
//       </div> */}
//     </article>
//   );
// };

export default OurTechSection;
