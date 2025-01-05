import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import TechCarousal from "../Components/TechCarousal";

const OurTechSection = () => {
  return (
    <div id="skills" className=" flex flex-col gap-5">
      <div className=" flex flex-col gap-5  items-center w-full   h-full justify-center">
        <h2 className=" md:text-5xl text-3xl bg-gradient-to-b from-white to-gray-400 bg-clip-text  text-transparent  font-bold text-center md:text-start">
          What tech we use?
        </h2>
        <p className=" text-gray-500 text-center ">
          We use both frontend and backend tools
        </p>

        <p className=" text-gray-500 text-center ">
          We develop simple, intuitive and responsive user interface that helps
          users get things done with less effort and time with those
          technologies.
        </p>
      </div>

      <div className=" hidden md:flex flex-col  ">
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

      <div className=" px-2 md:hidden bg-[url('/images/TechImage.jpg')] bg-cover">
        <TechCarousal />
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const techContent = [
    {
      id: 1,
      title: "HTML",
      image: "/images/html.webp",
    },
    {
      id: 2,
      title: "CSS",
      image: "/images/css.png",
    },
    {
      id: 3,
      title: "Javascript",
      image: "/images/js.png",
    },
    {
      id: 4,
      title: "ReactJs",
      image: "/images/Reactjs.png",
    },
    {
      id: 5,
      title: "NextJs",
      image: "/images/nextjs-t.jpeg",
    },
    {
      id: 6,
      title: "NodeJs",
      image: "/images/nodejs rt.png",
    },
    {
      id: 7,
      title: "MongoDB",
      image: "/images/mongodb-t.png",
    },
    {
      id: 8,
      title: "Figma",
      image: "/images/figma-t.avif",
    },
    {
      id: 9,
      title: "Wix",
      image: "/images/wix-tt.webp",
    },
    {
      id: 10,
      title: "Framer Motion",
      image: "/images/framer-t.png",
    },
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-[url('/images/TechImage.jpg')] bg-cover"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {techContent?.map((tech) => {
            return <Card title={tech.title} image={tech.image} key={tech.id} />;
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
      className="group relative h-[300px] w-[300px] overflow-hidden bg-neutral-900 rounded-3xl"
    >
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 ">
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2, type: "fade" },
          }}
          className=" h-[200px] w-full rounded-3xl"
          src={image}
          alt={title}
        />
        <p className=" p-8 text-2xl  uppercase text-white ">{title}</p>
      </div>
    </div>
  );
};

export default OurTechSection;
