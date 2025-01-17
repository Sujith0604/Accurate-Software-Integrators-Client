import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import AnchorLink from "react-anchor-link-smooth-scroll";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "motion/react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  const [open, setOpen] = useState(false);

  const NavComponent = () => {
    return (
      <nav className=" h-[400px] w-[200px] flex xl:hidden">
        <ul className=" flex flex-col gap-5 text-xl uppercase ">
          <li className=" hover:underline">
            <AnchorLink onClick={() => setOpen(!open)} href="#hero">
              Home
            </AnchorLink>
          </li>
          <li className=" hover:underline">
            {" "}
            <AnchorLink onClick={() => setOpen(!open)} href="#about">
              Our Story
            </AnchorLink>
          </li>
          <li className=" hover:underline">
            {" "}
            <AnchorLink onClick={() => setOpen(!open)} href="#pricing">
              Pricing
            </AnchorLink>
          </li>

          <li className=" hover:underline">
            {" "}
            <AnchorLink onClick={() => setOpen(!open)} href="#skills">
              Techstack
            </AnchorLink>
          </li>
          <li className=" hover:underline">
            {" "}
            <AnchorLink onClick={() => setOpen(!open)} href="#service">
              Service
            </AnchorLink>
          </li>
          <li className=" hover:underline">
            {" "}
            <AnchorLink onClick={() => setOpen(!open)} href="#features">
              Why Us
            </AnchorLink>
          </li>
          <li className=" hover:underline">
            <AnchorLink onClick={() => setOpen(!open)} href="#design">
              Work process
            </AnchorLink>
          </li>
          <li className=" hover:underline">
            <AnchorLink onClick={() => setOpen(!open)} href="#developer">
              Team
            </AnchorLink>
          </li>

          {/* <li className=" hover:underline">
            <AnchorLink href="#project">Projects</AnchorLink>
          </li> */}
          <li className=" hover:underline">
            <AnchorLink onClick={() => setOpen(!open)} href="#contact">
              Contact
            </AnchorLink>
          </li>
          <li
            className=" flex gap-5
           items-center"
          >
            <a
              target="_blank"
              aria-label="facebook"
              href="https://www.facebook.com/share/15VNuw4sKG/?mibextid=wwXIfr"
            >
              <FacebookRoundedIcon />
            </a>
            {/* <a
              target="_blank"
              aria-label="facebook"
              href="https://www.linkedin.com/in/accurate-software-integrators-ab02b1344/"
            >
              <LinkedInIcon />
            </a> */}
            <a
              target="_blank"
              aria-label="instagram"
              href="https://www.instagram.com/_accurate_software__/"
            >
              <InstagramIcon />
            </a>
            <a
              target="_blank"
              aria-label="mail"
              href="mailto:accuratesoftwareintegrators@gmail.com"
            >
              <MailRoundedIcon />
            </a>
            <a
              target="_blank"
              aria-label="whatsapp"
              href="whatsapp://send?text=Hello There!&phone=+918870895978"
            >
              <WhatsAppIcon />
            </a>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <header className=" md:h-[100px] h-[60px] p-4 bg-transparent  flex items-center justify-between fixed w-full z-50 bg-black bg-opacity-40 backdrop-blur-lg">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.8, easing: "ease" },
        }}
        className=" flex items-center justify-center"
      >
        <AnchorLink href="#hero">
          {" "}
          <img
            src="/images/LogoWithBackground-removebg-preview.png"
            className=" md:h-[80px] h-[50px] "
            alt="ASI"
          />
        </AnchorLink>
      </motion.div>

      {open && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-50  ">
          <div className="flex justify-center items-center w-full h-full">
            <NavComponent />
            <button
              aria-label="close"
              className="absolute top-5 right-5 text-white"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}

      {!open ? (
        <button
          className="px-4 py-2 rounded-3xl xl:hidden"
          aria-label="open"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      ) : (
        ""
      )}

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.7, type: "fade" },
        }}
        className=" hidden xl:flex"
      >
        <ul className="flex gap-6  text-gray-300">
          <li className=" hover:underline">
            <AnchorLink href="#hero">Home</AnchorLink>
          </li>
          <li className=" hover:underline">
            {" "}
            <AnchorLink href="#about">Our Story</AnchorLink>
          </li>
          <li className=" hover:underline">
            {" "}
            <AnchorLink href="#pricing">Pricing</AnchorLink>
          </li>

          <li className=" hover:underline">
            {" "}
            <AnchorLink href="#skills">Techstack</AnchorLink>
          </li>
          <li className=" hover:underline">
            {" "}
            <AnchorLink href="#service">Service</AnchorLink>
          </li>
          <li className=" hover:underline">
            {" "}
            <AnchorLink href="#features">Why Us</AnchorLink>
          </li>
          <li className=" hover:underline">
            <AnchorLink href="#design">Work Process</AnchorLink>
          </li>
          <li className=" hover:underline">
            <AnchorLink href="#developer">Team</AnchorLink>
          </li>

          {/* <li className=" hover:underline">
            <AnchorLink href="#project">Projects</AnchorLink>
          </li> */}
          <li className=" hover:underline">
            <AnchorLink href="#contact">Contact</AnchorLink>
          </li>
        </ul>
      </motion.nav>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.8, easing: "ease" },
        }}
        className="  hidden xl:flex gap-5"
      >
        <a
          target="_blank"
          aria-label="facebook"
          href="https://www.facebook.com/share/15VNuw4sKG/?mibextid=wwXIfr"
        >
          <FacebookRoundedIcon />
        </a>
        {/* <a
          target="_blank"
          aria-label="facebook"
          href="https://www.linkedin.com/in/accurate-software-integrators-ab02b1344/"
        >
          <LinkedInIcon />
        </a> */}
        <a
          target="_blank"
          aria-label="instagram"
          href="https://www.instagram.com/_accurate_software__/"
        >
          <InstagramIcon />
        </a>
        <a
          target="_blank"
          aria-label="mail"
          href="mailto:accuratesoftwareintegrators@gmail.com"
        >
          <MailRoundedIcon />
        </a>
        <a
          target="_blank"
          aria-label="whatsapp"
          href="whatsapp://send?text=Hello There!&phone=+918870895978"
        >
          <WhatsAppIcon />
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
