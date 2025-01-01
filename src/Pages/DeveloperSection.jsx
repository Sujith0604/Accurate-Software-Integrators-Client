import { motion } from "motion/react";
import { useContext } from "react";
import { pageContext } from "../Context/PageContext";
import Loader from "../Components/Loader";
import { developerContext } from "../Context/DeveloperContext";
const DeveloperSection = () => {
  const { pagesContent, loading } = useContext(pageContext);
  const { developerContent } = useContext(developerContext);
  if (loading) return <Loader />;

  return (
    <section
      id="developer"
      className=" flex flex-col items-center justify-center gap-3 px-2 "
    >
      <div className="mb-16">
        <dh-component>
          {pagesContent?.map(
            (page) =>
              page.title === "BUILDING TEAM" && (
                <div
                  key={page._id}
                  className="container flex justify-center mx-auto pt-16"
                >
                  <div>
                    <p className="text-gray-500 text-lg text-center font-normal pb-3">
                      {page.title}
                    </p>
                    <h1 className="xl:text-4xl text-3xl text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600  bg-clip-text text-transparent font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                      {page.subTitle}
                    </h1>
                    <p
                      className="text-gray-500 text-lg text-center font-normal pb-3"
                      dangerouslySetInnerHTML={{
                        __html: page.content,
                      }}
                    ></p>
                  </div>
                </div>
              )
          )}

          <div className="w-full  pt-10 ">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 0.5 }}
                role="list"
                aria-label="Behind the scenes People "
                className="lg:flex md:flex sm:flex items-center gap-5 xl:justify-between flex-wrap md:justify-around  sm:justify-around lg:justify-around"
              >
                {developerContent?.map((developer) => (
                  <div
                    key={developer._id}
                    role="listitem"
                    className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                  >
                    <div className="rounded overflow-hidden shadow-md bg-white">
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
                        <p className="text-gray-800 text-sm text-center">
                          {developer.title}
                        </p>
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
                                <rect
                                  x="2"
                                  y="2"
                                  width="20"
                                  height="20"
                                  rx="5"
                                  ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line
                                  x1="17.5"
                                  y1="6.5"
                                  x2="17.51"
                                  y2="6.5"
                                ></line>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </dh-component>
      </div>
    </section>
  );
};

export default DeveloperSection;
