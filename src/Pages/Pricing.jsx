import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { pageContext } from "../Context/PageContext";
import { useContext } from "react";
import Loader from "../Components/Loader";
const Pricing = () => {
  return (
    <section
      id="pricing"
      className=" md:h-[100vh] h-[400px] flex flex-col items-center  justify-center md:gap-2 gap-5 text-white border-t border-b border-neutral-900"
    >
      <div className=" flex flex-col gap-2 items-center justify-center">
        <h1 className=" text-xl font-bold">Pricing</h1>
        <h2 className="   relative md:h-[90px]  text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          SIMPLE PRICING FOR EVERYONE
        </h2>

        <p className=" text-sm text-center text-gray-500">
          Choose an affordable plan that's packed with the best features for
          engaging your audience, cresting sutomer loyality, and driving sales
          for more information about pricing contact us
        </p>
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
    </section>
  );
};

export default Pricing;
