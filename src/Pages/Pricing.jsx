import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { pageContext } from "../Context/PageContext";
import { useContext } from "react";
import Loader from "../Components/Loader";
const Pricing = () => {
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  // const [cursorVariant, setCursorVariant] = useState("default");

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };

  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 16,
  //     y: mousePosition.y - 16,
  //   },
  //   text: {
  //     height: 150,
  //     width: 150,
  //     x: mousePosition.x - 75,
  //     y: mousePosition.y - 75,
  //     backgroundColor: " bg-gradient-to-b from-neutral-200 to-neutral-600",
  //     mixBlendMode: "difference",
  //   },
  // };

  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");

  const { pagesContent, loading } = useContext(pageContext);

  if (loading) return <Loader />;

  return (
    <section
      id="pricing"
      className=" md:h-[100vh] h-[400px] flex flex-col items-center  justify-center md:gap-2 gap-5 text-white border-t border-b border-neutral-900"
    >
      {pagesContent?.map(
        (price) =>
          price.title === "Pricing" && (
            <div
              key={price._id}
              className=" flex flex-col gap-2 items-center justify-center"
            >
              <h1 className=" text-xl font-bold">{price.title}</h1>
              <h2
                // onMouseEnter={textEnter}
                // onMouseLeave={textLeave}
                className="   relative md:h-[90px]  text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold"
              >
                {price.subTitle}
              </h2>
              {/* <motion.div
        variants={variants}
        animate={cursorVariant}
        className=" h-[32px] w-[32px] rounded-full  fixed top-0 left-0 pointer-events-none "
      ></motion.div> */}

              <p
                className=" text-sm text-center text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: price.content,
                }}
              ></p>
              <div
                className=" flex gap-5
           items-center"
              >
                <a
                  aria-label="facebook"
                  href="https://www.facebook.com/share/15VNuw4sKG/?mibextid=wwXIfr"
                >
                  <FacebookRoundedIcon />
                </a>
                <a
                  aria-label="instagram"
                  href="https://www.instagram.com/accurate_software_/profilecard/?igsh=MWxraGF4NXI3NnFqYg=="
                >
                  <InstagramIcon />
                </a>
                <a
                  aria-label="mail"
                  href="mailto:accuratesoftwareintegrators@gmail.com"
                >
                  <MailRoundedIcon />
                </a>
                <a
                  aria-label="whatsapp"
                  href="whatsapp://send?text=Hello There!&phone=+918870895978"
                >
                  <WhatsAppIcon />
                </a>
              </div>
            </div>
          )
      )}
    </section>
  );
};

export default Pricing;
