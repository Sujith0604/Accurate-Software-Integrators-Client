import { useContext, useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import Loader from "../Components/Loader";
import { pageContext } from "../Context/PageContext";

const ProjectSection = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  const [projects, setProjects] = useState([]);
  const [openProjectId, setOpenProjectId] = useState(null);
  let selectedProject = projects.find((g) => g.id === openProjectId);

  const projectData = [
    {
      id: 1,
      name: "Admin1",
      imageUrl: "/images/figma.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      toolsUsed: ["React, Next.js, Tailwind CSS"],
      githubLink: "https://github.com/example/project1",
      liveLink: "https://example.com/project1",
    },
    {
      id: 2,
      name: "Admin2",
      imageUrl: "/images/figma.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      toolsUsed: ["React", "Next.js", "Tailwind CSS"],
      githubLink: "https://github.com/example/project1",
      liveLink: "https://example.com/project1",
    },
    {
      id: 3,
      name: "Admin3",
      imageUrl: "/images/figma.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      toolsUsed: ["React", "Next.js", "Tailwind CSS"],
      githubLink: "https://github.com/example/project1",
      liveLink: "https://example.com/project1",
    },
    {
      id: 4,
      name: "Admin4",
      imageUrl: "/images/figma.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      toolsUsed: ["React", "Next.js", "Tailwind CSS"],
      githubLink: "https://github.com/example/project1",
      liveLink: "https://example.com/project1",
    },
  ];

  return (
    <>
      <section
        id="project"
        className=" flex flex-col gap-3 items-center justify-center"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            Projects
          </span>
          <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Our website showcase
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
            At our web development company, we specialize in creating tailored
            websites and web applications that meet diverse client needs. Each
            project is a collaborative effort that begins with understanding the
            client's vision and requirements.
          </p>
        </div>

        {projectData.map((data) => (
          <ProjectCard
            key={data.id}
            name={data.name}
            imageUrl={data.imageUrl}
            toolsUsed={data.toolsUsed}
            description={data.description}
            githubLink={data.githubLink}
            liveLink={data.liveLink}
          />
        ))}
      </section>
    </>
  );
};

export default ProjectSection;

//   name,
//   description,
//   toolsUsed,
//   githubLink,
//   liveLink,
// }) => {
//   const ref = useRef(null);

//   useScroll({
//     target: "",
//     offset: ["0 1", "1.33 1"],
//   });

//   return (
//     <section className="w-full px-4 md:w-1/2 xl:w-1/3 flex md:flex-row flex-col gap-2 bg-gray-400">
//       <div className=" h-full w-[200px] bg-red-200"></div>
//       <div className=" flex flex-col items-start justify-center gap-3">
//         <h3 className="text-xl font-bold">{name}</h3>
//         <p className="text-sm">{description}</p>
//         <div className="flex gap-2">
//           {toolsUsed?.map((tool) => (
//             <span key={tool} className="text-sm text-gray-600">
//               {tool}
//             </span>
//           ))}
//         </div>
//         <p className="text-sm">Github: {githubLink}</p>
//         <p className="text-sm">Live: {liveLink}</p>
//       </div>
//     </section>
//   );
// };

// const PortfolioCard = ({
//   showCard,
//   category,
//   ImageHref,
//   title,
//   button,
//   buttonHref,
// }) => {
//   return (
//     <>
//       <div
//         className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
//           showCard === "all" || showCard === category.toLowerCase()
//             ? "block"
//             : "hidden"
//         }`}
//       >
//         <div className="relative mb-12">
//           <div className="overflow-hidden rounded-[10px]">
//             <motion.img
//               initial={{ scale: 1 }}
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "linear" }}
//               src={ImageHref}
//               alt="portfolio"
//               className="w-full"
//             />
//           </div>
//           <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-slate-800 dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
//             <span className="text-primary mb-2 block text-sm font-medium">
//               {category}
//             </span>
//             <h3 className="text-dark text-white mb-5 text-xl font-bold">
//               {title}
//             </h3>
//             <a
//               href={buttonHref}
//               className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition text-white"
//             >
//               {button}
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
