import AboutHero from "@/components/about/AboutHero";
import VisionAndMission from "@/components/about/VisionAndMission";
import AboutExtraContent from "@/components/shared/AboutExtraContent";
import ContactForm from "@/components/shared/ContactForm";

export const metadata = {
  title: "About - DPTS",
  description: "DPTS About Page",
};
const About = () => {
  return (
    <>
      <AboutHero />
      <VisionAndMission />
      <AboutExtraContent />
      <ContactForm />
    </>
  );
};

export default About;
