import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { AboutSection } from "./Pages/AboutSection";
import { ContactSection } from "./Pages/ContactSection";
import { DesignSection } from "./Pages/DesignSection";
import DeveloperSection from "./Pages/DeveloperSection";
import Herosection from "./Pages/Herosection";
import OurTechSection from "./Pages/OurTechSection";
import Pricing from "./Pages/Pricing";
import ProjectSection from "./Pages/ProjectSection";
import ServiceSection from "./Pages/ServiceSection";
import TestimonySection from "./Pages/TestimonySection";
import WhyCooseUs from "./Pages/WhyCooseUs";

const AppLayout = () => {
  return (
    <div className=" flex flex-col  scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-500 font-all">
      <Header />
      <main className="flex flex-col gap-5">
        <Herosection />
        <AboutSection />
        <Pricing />
        <OurTechSection />
        <ServiceSection />
        <DeveloperSection />
        <WhyCooseUs />
        {/* <ProjectSection /> */}
        <DesignSection />
        {/* <TestimonySection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;