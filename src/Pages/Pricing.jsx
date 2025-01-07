import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { pageContext } from "../Context/PageContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import Loader from "../Components/Loader";
const Pricing = () => {
  const websiteData = [
    {
      id: 1,
      title: "Static Website",
      content:
        "We create a basic static website for customers who don't have any ideas about the website. Statics websites are nothing but websites that do not have a backend. The data are hard-coded",
      image: "/images/static-website-design.jpg",
    },
    {
      id: 2,
      title: "Dynamic Website",
      content:
        "We also create dynamic websites for customers who require backend service. We make a CMS System that changes the data dynamically. Dynamic websites are nothing but websites that have a backend. ",
      image: "/images/dynamic.webp",
    },
    {
      id: 3,
      title: "Business Website",
      content:
        "We professionally create responsive business websites. We will also suggest design and development ideas for business development. We provide the best service in creating business websites.",
      image: "/images/business-new.jpg",
    },
    {
      id: 4,
      title: "Unique Design Website",
      content:
        "We create unique designs for customers and also provide service for custom design. We always provide the website as per clients preferences. Having a unique design can help your business stand out.",
      image: "/images/unique-website-design.png",
    },
    {
      id: 5,
      title: "Animated Website",
      content:
        " We create animated designs for customers to make their business look more amazing and attract clients online. Animation is one thing that is becoming more famous in website development.",
      image: "/images/animation.jpg",
    },
    {
      id: 6,
      title: "Corporate Website",
      content:
        "We also create complex websites for customers for corporate-related stuff. These websites are more complex websites where the data constantly changes and requires dynamic rendering.",
      image: "/images/Corporate website.jpg",
    },
  ];

  return (
    <section
      id="pricing"
      className=" flex flex-col items-center  justify-center  md:gap-11 text-white border-t border-b border-neutral-900 py-4"
    >
      <div className=" flex flex-col gap-2 items-center justify-center">
        <h1 className=" text-xl font-bold">Pricing</h1>
        <h2 className="   relative md:h-[90px]  text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          SIMPLE PRICING FOR EVERYONE
        </h2>

        <p className=" text-sm text-center text-gray-300">
          Choose an affordable plan that's packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales
          for more information about pricing contact us
        </p>
        <div
          className=" flex gap-5
           items-center"
        >
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
      <div>
        <p className=" text-center font-bold text-xl text-gray-300">
          For the starter pack we charge differently for different websites.
        </p>
      </div>
      <div className=" flex items-center justify-around flex-wrap gap-5">
        {websiteData.map((data) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, ease: "ease" },
            }}
            key={data.id}
            className=" md:w-[350px] lg:w-[400px] h-[500px] border-neutral-800 bg-neutral-900/50 p-8 flex flex-col items-center justify-center gap-5"
          >
            <div>
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
                className=" h-[200px] w-[300px] rounded-t-sm"
                alt={data.title}
                src={data.image}
              />
            </div>
            <h3 className=" text-xl font-bold">{data.title}</h3>
            <p className=" text-gray-300 text-sm">{data.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
