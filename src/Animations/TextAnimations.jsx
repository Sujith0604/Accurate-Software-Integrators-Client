import { motion, useInView } from "motion/react";
import { useRef } from "react";
const TextAnimations = ({ text, className, once }) => {
  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeInOut",
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  // useEffect(() => {
  //   let timeOut;
  //   const show = () => {
  //     controls.start("visible");
  //     timeOut = setTimeout(async () => {
  //       await controls.start("hidden");
  //       controls.start("visible");
  //     }, 1000);
  //   };

  //   if (isInView) {
  //     show();
  //   } else {
  //     controls.start("hidden");
  //   }

  //   return () => clearTimeout(timeOut);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isInView]);

  return (
    <div>
      <motion.span
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        ref={ref}
      >
        {text.split(" ").map((word) => (
          <span className=" inline-block" key={word}>
            {word.split("").map((char) => (
              <motion.span
                className="inline-block"
                variants={defaultAnimations}
                key={char}
              >
                {char}
              </motion.span>
            ))}
            <span className=" inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </div>
  );
};

export default TextAnimations;
