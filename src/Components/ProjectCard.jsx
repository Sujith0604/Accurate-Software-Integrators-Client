"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import BuildIcon from "@mui/icons-material/Build";

const ProjectCard = ({
  name,
  description,
  toolsUsed,
  githubLink,
  liveLink,
  imageUrl,
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className=" lg:w-[1000px] w-[350px]  md:h-[400px] px-4 flex md:flex-row items-center justify-between flex-col gap-2 border-neutral-800 bg-neutral-900/50 rounded-3xl p-2"
    >
      <div className=" h-full border-r-green-200  flex items-center justify-center md:w-[40%]">
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2, type: "fade" },
          }}
          className="md:w-[50%] md:h-[50%] object-cover rounded-3xl"
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className=" flex flex-col items-start justify-center gap-3 md:w-[60%]">
        <h3 className="text-3xl font-bold bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600  bg-clip-text text-transparent">
          {name}
        </h3>
        <p className="text-sm">{description}</p>
        <div className="flex gap-2">
          {toolsUsed?.map((tool) => (
            <span key={tool} className="text-sm text-gray-600">
              <BuildIcon /> {tool}
            </span>
          ))}
        </div>
        <div className=" flex items-center justify-center gap-2">
          <a href={githubLink} className="text-sm">
            <GitHubIcon />
          </a>
          <a href={liveLink} className="text-sm">
            <WebIcon />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectCard;
