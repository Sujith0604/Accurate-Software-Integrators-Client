// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { motion, useScroll, useSpring } from "motion/react";
// import { useEffect, useRef, useState } from "react";

// const AboutSection = () => {
//   const [displayValue, setDisplayValue] = useState(0);

//   let displayCount = 33;

//   const springSubCount = useSpring(0, {
//     bounce: 0,
//     duration: 1000,
//   });

//   springSubCount.on("change", (value) => {
//     setDisplayValue(Math.round(value));
//   });

//   useEffect(() => {
//     springSubCount.set(displayCount);
//   }, []);

//   const [isOpen, setIsOpen] = useState(false);

//   // const ref = useRef();

//   // const { scrollYProgress } = useScroll({
//   //   type: "continuous",
//   //   // scrollY: "smooth",
//   //   // threshold: 0.5,
//   //   target: ref,
//   //   offset: ["0 1", "1.33 1"],
//   // });

//   return (
//     <motion.section
//       // ref={ref}
//       // style={{
//       //   scale: scrollYProgress,
//       //   opacity: scrollYProgress,
//       // }}
//       id="about"
//       className=" flex flex-col items-center justify-center border-t border-b border-neutral-900"
//     >
//       <section className="py-24 relative ">
//         <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
//           <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
//             <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
//               <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
//                 <motion.img
//                   initial={{
//                     opacity: 0,
//                     scale: 0,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     scale: 1,
//                   }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 100,
//                     damping: 10,
//                     delay: 0.4,
//                   }}
//                   className=" rounded-xl object-cover"
//                   src="https://pagedone.io/asset/uploads/1717741205.png"
//                   alt="about Us image"
//                 />
//               </div>
//               <motion.img
//                 initial={{
//                   opacity: 0,
//                   scale: 0,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   scale: 1,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 100,
//                   damping: 10,
//                   delay: 0.4,
//                 }}
//                 className="sm:ml-0 ml-auto rounded-xl object-cover"
//                 src="https://pagedone.io/asset/uploads/1717741215.png"
//                 alt="about Us image"
//               />
//             </div>
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{
//                 opacity: 1,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 10,
//                 delay: 0.7,
//               }}
//               className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"
//             >
//               <div className="w-full flex-col justify-center items-start gap-8 flex">
//                 <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
//                   <h6 className="text-gray-400 text-base font-normal leading-relaxed">
//                     Our Story
//                   </h6>
//                   <h2 className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600  bg-clip-text text-transparent text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
//                     Empowering Each Other to Succeed
//                   </h2>
//                   <p className=" font-normal leading-relaxed lg:text-start text-center">
//                     Every project we've undertaken has been a collaborative
//                     effort, where every person involved has left their mark.
//                     Together, we've not only constructed buildings but also
//                     built enduring connections that define our success story.
//                   </p>
//                 </div>
//                 <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
//                   <div className="flex-col justify-start items-start inline-flex">
//                     <motion.h3
//                       initial={{ opacity: 0 }}
//                       transition={{ duration: 1 }}
//                       whileInView={{ opacity: 1 }}
//                       className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600  bg-clip-text text-transparent text-4xl font-bold font-manrope leading-normal"
//                     >
//                       {displayValue}+
//                     </motion.h3>
//                     <h6 className="text-gray-500 text-base font-normal leading-relaxed">
//                       Years of Experience
//                     </h6>
//                   </div>

//                   <div className="flex-col justify-start items-start inline-flex">
//                     <h4 className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600  bg-clip-text text-transparent text-4xl font-bold font-manrope leading-normal">
//                       125+
//                     </h4>
//                     <h6 className="text-gray-500 text-base font-normal leading-relaxed">
//                       Successful Projects
//                     </h6>
//                   </div>
//                   <div className="flex-col justify-start items-start inline-flex">
//                     <h4 className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600  bg-clip-text text-transparent text-4xl font-bold font-manrope leading-normal">
//                       52+
//                     </h4>
//                     <h6 className="text-gray-500 text-base font-normal leading-relaxed">
//                       Happy Clients
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className=" text-sm py-2 px-4 flex items-center gap-2 justify-center  rounded-lg bg-white text-black"
//               >
//                 <span>Know more</span>
//                 <ArrowForwardIcon />
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {isOpen && (
//         <div className=" fixed inset-0 text-black  bg-black bg-opacity-55 backdrop-blur-sm flex items-center justify-center z-10 ">
//           <div className=" md:w-[400px] w-[300px] max-w-md p-6 bg-white rounded-lg shadow-md">
//             <div className="flex flex-col gap-5 justify-between">
//               <h3 className="text-xl font-bold ">About</h3>
//               <p className=" text-sm">description</p>

//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 aria-label="close"
//                 className="text-sm text-gray-500 hover:text-gray-600"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{
//           opacity: 1,
//         }}
//         transition={{
//           type: "spring",

//           stiffness: 100,
//           damping: 10,
//           delay: 0.4,
//         }}
//         className="py-24 relative xl:mr-0 lg:mr-5 mr-0"
//       >
//         <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
//           <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
//             <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
//               <div className="w-full flex-col justify-center items-start gap-8 flex">
//                 <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
//                   <h6 className="text-gray-400 text-base font-normal leading-relaxed">
//                     Our mission and Vision
//                   </h6>
//                   <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
//                     <h2 className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600  bg-clip-text text-transparent text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
//                       The Tale of Our Achievement Story
//                     </h2>
//                     <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
//                       Our achievement story is a testament to teamwork and
//                       perseverance. Together, we've overcome challenges,
//                       celebrated victories, and created a narrative of progress
//                       and success.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="w-full flex-col justify-center items-start gap-6 flex">
//                   <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       whileInView={{
//                         opacity: 1,
//                       }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 100,
//                         damping: 10,
//                         delay: 1,
//                       }}
//                       className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
//                     >
//                       <h4 className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600  bg-clip-text text-transparent text-2xl font-bold font-manrope leading-9">
//                         33+ Years
//                       </h4>
//                       <p className="text-gray-500 text-base font-normal leading-relaxed">
//                         Influencing Digital Landscapes Together
//                       </p>
//                     </motion.div>

//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       whileInView={{
//                         opacity: 1,
//                       }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 100,
//                         damping: 10,
//                         delay: 1.2,
//                       }}
//                       className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
//                     >
//                       <h4 className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600  bg-clip-text text-transparent text-2xl font-bold font-manrope leading-9">
//                         125+ Projects
//                       </h4>
//                       <p className="text-gray-500 text-base font-normal leading-relaxed">
//                         Excellence Achieved Through Success
//                       </p>
//                     </motion.div>
//                   </div>

//                   <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       whileInView={{
//                         opacity: 1,
//                       }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 100,
//                         damping: 10,
//                         delay: 1.4,
//                       }}
//                       className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
//                     >
//                       <h4 className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600  bg-clip-text text-transparent text-2xl font-bold font-manrope leading-9">
//                         26+ Awards
//                       </h4>
//                       <p className="text-gray-500 text-base font-normal leading-relaxed">
//                         Our Dedication to Innovation Wins Understanding
//                       </p>
//                     </motion.div>
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       whileInView={{
//                         opacity: 1,
//                       }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 100,
//                         damping: 10,
//                         delay: 1.6,
//                       }}
//                       className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
//                     >
//                       <h4 className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600  bg-clip-text text-transparent text-2xl font-bold font-manrope leading-9">
//                         99% Happy Clients
//                       </h4>
//                       <p className="text-gray-500 text-base font-normal leading-relaxed">
//                         Mirrors our Focus on Client Satisfaction.
//                       </p>
//                     </motion.div>
//                   </div>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className=" text-sm py-2 px-4 flex items-center gap-2 justify-center  rounded-lg bg-white text-black"
//               >
//                 <span>Know more</span>
//                 <ArrowForwardIcon />
//               </button>
//             </div>
//             <div className="w-full lg:justify-start justify-center items-start flex">
//               <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
//                 <img
//                   className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
//                   src="https://pagedone.io/asset/uploads/1717742431.png"
//                   alt="about Us image"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {isOpen && (
//         <div className=" fixed inset-0 text-black  bg-black bg-opacity-55 backdrop-blur-sm flex items-center justify-center z-10 ">
//           <div className=" md:w-[400px] w-[300px] max-w-md p-6 bg-white rounded-lg shadow-md">
//             <div className="flex flex-col gap-5 justify-between">
//               <h3 className="text-xl font-bold ">About</h3>
//               <p className=" text-sm">description</p>

//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 aria-label="close"
//                 className="text-sm text-gray-500 hover:text-gray-600"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </motion.section>
//   );
// };

// export default AboutSection;

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { pageContext } from "../Context/PageContext";
import Loader from "../Components/Loader";
import { useContext } from "react";
import ModalComponent from "../Components/ModalComponent";

export const AboutSection = () => {
  const [openSuccessModel, setOpenSuccessModal] = useState(false);
  const [openVisionModel, setOpenVisionModal] = useState(false);
  const [openMissionModel, setOpenMissionModal] = useState(false);

  /////Data for the modal////

  const ourStory = {
    title: "Our Story",
    content:
      "At Accurate Software & Integrators, our journey began with a simple idea: to revolutionize the way businesses connect with their customers online. Founded in 2024 by Sujith Karthikaiselvan and team, we recognized the challenges that many companies faced in establishing a strong digital presence. Our mission was clear – to provide innovative web development solutions that empower businesses to thrive in the digital landscape.",
    subtitle: "How it was started",
    start:
      "Our story started in Coimbatore, where we saw firsthand the struggles of small and medium-sized enterprises in navigating the complexities of web development. With backgrounds in software engineering, design, marketing we set out to create a company that would bridge the gap between technical expertise and user-friendly design.",
    challenge:
      "Challenges and Growth Like any startup, we faced numerous challenges along the way. From limited resources to fierce competition, every obstacle fueled our determination to succeed. We learned valuable lessons about adaptability and resilience, which shaped our approach to web development. Over the years, we have evolved from a small team into a thriving company with a diverse portfolio of clients across various industries.",
    buttonName: "Learn More",
  };

  const ourVision = {
    title: "Our Vision",

    content:
      "To empower businesses of all sizes with cutting-edge web design and development solutions that foster growth and success, ensuring every client achieves their organizational goals through tailored strategies",
    subtitle: "What is our vision?",
    start:
      "Our vision is to be a global leader in web development, focused on constant innovation and exceptional service delivery that enhances our clients' online presence, We aim to create user-centered websites that not only meet but exceed client expectations, driving engagement and facilitating business growth through effective digital solutions",
    buttonName: "Learn More",
  };

  const ourMission = {
    title: "Our Mission",
    content:
      "To empower businesses by providing innovative web solutions that drive growth, enhance user engagement, and deliver measurable results through cutting-edge technology .Our mission is to deliver exceptional web development services that enable our clients to thrive in the digital landscape, ensuring every project reflects our commitment to quality and innovation",
    subtitle: "What is our mission?",
    start:
      "We strive to understand our clients' unique needs and deliver tailored web solutions that enhance their operational efficiency and market presence",
    buttonName: "Learn More",
  };

  /////////////////////////////////

  return (
    <section id="about" className=" text-gray-300">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading={ourStory.title}
        heading={ourStory.subtitle}
      >
        <OurStoryContent
          content={ourStory.content}
          title={ourStory.title}
          subtitle={ourStory.subtitle}
          buttoname={ourMission.buttonName}
          setOpenSuccessModal={setOpenSuccessModal}
        />
        {openSuccessModel && (
          <ModalComponent
            title={ourStory.title}
            content={ourStory.content}
            subtitle={ourStory.subtitle}
            start={ourStory.start}
            challenge={ourStory.challenge}
            onClose={() => setOpenSuccessModal(false)}
          />
        )}
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading={ourVision.title}
        heading={ourVision.subtitle}
      >
        <OurVisionContent
          content={ourVision.content}
          title={ourVision.title}
          subtitle={ourVision.subtitle}
          buttoname={ourVision.buttonName}
          setOpenVisionModal={setOpenVisionModal}
        />
        {openVisionModel && (
          <ModalComponent
            title={ourVision.title}
            content={ourVision.content}
            subtitle={ourVision.subtitle}
            start={ourVision.start}
            onClose={() => setOpenVisionModal(false)}
          />
        )}
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading={ourMission.title}
        heading={ourMission.subtitle}
      >
        <OurMissionContent
          content={ourMission.content}
          title={ourMission.title}
          subtitle={ourMission.subtitle}
          buttoname={ourMission.buttonName}
          setOpenMissionModal={setOpenMissionModal}
        />

        {openMissionModel && (
          <ModalComponent
            title={ourMission.title}
            content={ourMission.content}
            subtitle={ourMission.subtitle}
            start={ourMission.start}
            onClose={() => setOpenMissionModal(false)}
          />
        )}
      </TextParallaxContent>
    </section>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden "
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 ">{subheading}</p>
      <p className="text-center text-4xl  md:text-6xl bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent ">
        {heading}
      </p>
    </motion.div>
  );
};

const OurStoryContent = ({
  content,
  title,
  subtitle,
  buttoname,
  setOpenSuccessModal,
}) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-xl font-bold md:col-span-4">{subtitle}</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-sm text-gray-300 md:text-[16px]">{content}</p>

      <button
        aria-label="open"
        onClick={() => setOpenSuccessModal(true)}
        className="w-full rounded bg-neutral-900 px-9 py-4  text-gray-300 transition-colors hover:bg-neutral-700 md:w-fit"
      >
        {buttoname} <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const OurVisionContent = ({
  content,
  title,
  subtitle,
  buttoname,
  setOpenVisionModal,
}) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-xl font-bold md:col-span-4">{subtitle}</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-sm text-gray-300 md:text-[16px]">{content}</p>

      <button
        aria-label="open"
        onClick={() => {
          setOpenVisionModal(true);
        }}
        className="w-full rounded bg-neutral-900 px-9 py-4  text-gray-300 transition-colors hover:bg-neutral-700 md:w-fit"
      >
        {buttoname} <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const OurMissionContent = ({
  content,
  title,
  subtitle,
  buttoname,
  setOpenMissionModal,
}) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-xl font-bold md:col-span-4">{subtitle}</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-sm text-gray-300 md:text-[16px]">{content}</p>

      <button
        aria-label="open"
        onClick={() => setOpenMissionModal(true)}
        className="w-full rounded bg-neutral-900 px-9 py-4  text-gray-300 transition-colors hover:bg-neutral-700 md:w-fit"
      >
        {buttoname} <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);
