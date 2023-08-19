import HomeCTA from "@/components/home/HomeCTA";
import Hero from "@/components/home/Hero";
import SecondCTA from "@/components/home/SecondCTA";
import Services from "@/components/shared/Services";
import ContactForm from "@/components/shared/ContactForm";

export const metadata = {
  title: "Home - DPTS",
  description: "DPTS Home Page",
};
export default function Home() {
  return (
    <main className="">
      <HomeCTA />
      <SecondCTA />
      <Hero />
      <Services />
      <ContactForm />
    </main>
  );
}
