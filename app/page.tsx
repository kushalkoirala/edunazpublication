import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import StatsBand from "@/components/sections/StatsBand";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturedJournals from "@/components/sections/FeaturedJournals";
import Apex from "@/components/sections/Apex";
import Indexing from "@/components/sections/Indexing";
import VideoTestimonials from "@/components/sections/VideoTestimonials";
import Faq from "@/components/sections/Faq";
import ContactBand from "@/components/sections/ContactBand";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <StatsBand />
      <Services />
      <Process />
      <WhyChooseUs />
      <FeaturedJournals />
      <Apex />
      <Indexing />
      <VideoTestimonials />
      <Faq />
      <ContactBand />
    </main>
  );
}
