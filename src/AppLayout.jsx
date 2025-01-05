import { useContext } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { pageContext } from "./Context/PageContext";
import { AboutSection } from "./Pages/AboutSection";
import { CompanyName } from "./Pages/CompanyName";
import { ContactSection } from "./Pages/ContactSection";
import { DesignSection } from "./Pages/DesignSection";
import DeveloperSection from "./Pages/DeveloperSection";
import Herosection from "./Pages/Herosection";
import OurDeveloper from "./Pages/OurDeveloper";
import OurTechSection from "./Pages/OurTechSection";
import Pricing from "./Pages/Pricing";
import ProjectSection from "./Pages/ProjectSection";
import ServiceSection from "./Pages/ServiceSection";
import TestimonySection from "./Pages/TestimonySection";
import WhyCooseUs from "./Pages/WhyCooseUs";
import MainLoader from "./Components/MainLoader";

const AppLayout = () => {
  const { loading } = useContext(pageContext);

  if (loading)
    return (
      <div className=" h-screen flex flex-col items-center justify-center gap-2">
        <h1 className=" font-bold md:text-7xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-500 to-yellow-100  bg-clip-text text-transparent">
          ASI
        </h1>
        <MainLoader />
      </div>
    );

  return (
    <div className=" flex flex-col  scrollbar-thin  scrollbar-thumb-gray-600 scrollbar-track-gray-500 ">
      <Header />
      <main className="flex flex-col gap-5">
        <Herosection />
        <AboutSection />
        <CompanyName />
        <Pricing />

        <OurTechSection />
        <ServiceSection />
        <WhyCooseUs />
        <DesignSection />
        {/* <DeveloperSection /> */}
        <OurDeveloper />

        {/* <ProjectSection /> */}

        {/* <TestimonySection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
