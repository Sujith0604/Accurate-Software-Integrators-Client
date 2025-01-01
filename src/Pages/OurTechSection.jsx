import { motion, useTransform, useScroll } from "framer-motion";
import { useContext, useRef } from "react";
import { techContext } from "../Context/TechstackContext";
import { pageContext } from "../Context/PageContext";
import Loader from "../Components/Loader";

const OurTechSection = () => {
  const { pagesContent, loading } = useContext(pageContext);

  if (loading) return <Loader />;

  return (
    <div className="">
      {pagesContent?.map(
        (page) =>
          page.title === "What tech we use?" && (
            <div
              key={page._id}
              className=" flex flex-col gap-5  items-center w-full   h-full justify-center"
            >
              <h2 className=" md:text-5xl text-3xl font-bold text-center md:text-start">
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
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
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
      className="group relative h-[450px] w-[450px] overflow-hidden bg-black rounded-3xl"
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
          className=" h-[70px] w-[70px]"
          src={`http://localhost:3000/${image}`}
        />
        <p className=" p-8 text-4xl  uppercase text-white ">{title}</p>
      </div>
    </div>
  );
};

export default OurTechSection;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
