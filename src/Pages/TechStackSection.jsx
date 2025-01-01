import { useContext, useRef } from "react";
import { motion } from "motion/react";
import { pageContext } from "../Context/PageContext";
import Loader from "../Components/Loader";
import { techContext } from "../Context/TechstackContext";

const TechStackSection = () => {
  const tooltipRef = useRef(null);
  const containerRef = useRef(null);

  const { techContent } = useContext(techContext);
  const { pagesContent, loading } = useContext(pageContext);

  if (loading) return <Loader />;

  return (
    <section
      className=" md:h-screen gap-10 md:gap-0 flex md:flex-row flex-col items-center justify-center  bg-black text-white "
      id="skills"
    >
      {pagesContent?.map(
        (page) =>
          page.title === "What tech we use?" && (
            <div
              key={page._id}
              className=" flex flex-col gap-5 md:w-[40%] items-center md:items-start  h-full justify-center"
            >
              <h2 className=" md:text-5xl text-3xl font-bold text-center md:text-start">
                {page.title}
              </h2>
              <p className=" text-gray-500 text-center md:text-start">
                {page.subTitle}
              </p>

              <p
                className=" text-gray-500 text-center md:text-start"
                dangerouslySetInnerHTML={{
                  __html: page.content,
                }}
              ></p>
            </div>
          )
      )}

      <div className=" flex flex-col gap-5 md:w-[40%]  w-full h-full justify-center">
        <ul className=" flex gap-5 flex-wrap items-center justify-center">
          {techContent?.map((tech) => (
            <li key={tech._id}>
              <div
                ref={containerRef}
                onMouseEnter={(clientX) => {
                  if (!tooltipRef.current || !containerRef.current) return;
                  const { left } =
                    (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                      clientX - left + "px");
                }}
                className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
              >
                <div
                  ref={tooltipRef}
                  className="z-10 bg-white text-black invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap "
                >
                  {tech.title}
                </div>

                <div className="">
                  <motion.img
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "linear" }}
                    className=" h-[50px] w-[60px]"
                    src={`http://localhost:3000/${tech.image} `}
                    alt="HTML5 logo"
                  />
                </div>
              </div>
            </li>
          ))}

          {/* <li className="">
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 bg-white text-black invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap "
              >
                HTML5
              </div>

              <div className="">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/html5.png"
                  alt="HTML5 logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                CSS3
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/css3.png"
                  alt="CSS3 logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 text-center invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                JavaScript
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/javascript.png"
                  alt="JavaScript logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                TypeScript
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/typescript.png"
                  alt="TypeScript logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                jQuery
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/jquery.png"
                  alt="jQuery logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                Bootstrap
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/bootstrap.png"
                  alt="Bootstrap logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                Angular
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/angular.png"
                  alt="Angular logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                React
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/react.png"
                  alt="React logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                Vue
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/vue.png"
                  alt="Vue logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                Firebase
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/firebase.png"
                  alt="Firebase logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                PugJs
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/pugjs.png"
                  alt="PugJs logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                SASS
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/sass.png"
                  alt="SASS logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                Ajax
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/ajax.png"
                  alt="Ajax logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                Gulp
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/gulp.png"
                  alt="Gulp logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                Webpack
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/webpack.png"
                  alt="Webpack logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                Git
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/git.png"
                  alt="Git logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                Npm
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/npm.png"
                  alt="Npm logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                Command Line
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/command.png"
                  alt="Command Line logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                VS Code
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/vs-code.png"
                  alt="VS Code logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                Trello
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/trello.png"
                  alt="Trello logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                ClickUp
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/clickup.png"
                  alt="ClickUp logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                Slack
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/slack.png"
                  alt="Slack logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                Photoshop
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/photoshop.png"
                  alt="Photoshop logo"
                />
              </div>
            </div>
          </li>

          <li>
            <div
              ref={containerRef}
              onMouseEnter={(clientX) => {
                if (!tooltipRef.current || !containerRef.current) return;
                const { left } =
                  (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
                    clientX - left + "px");
              }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex items-center justify-center"
            >
              <div
                ref={tooltipRef}
                className="z-10 invisible group-hover:visible group-hover:opacity-100 transition p-1 rounded absolute top-full mt-2 whitespace-nowrap bg-white text-black"
              >
                Adobe XD
              </div>

              <div className="card-icon">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ type: "linear" }}
                  src="/images/adobe-xd.png"
                  alt="Adobe XD logo"
                />
              </div>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default TechStackSection;
