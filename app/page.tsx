import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Services } from "@/components/sections/services";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { Certifications } from "@/components/sections/certifications";
import { Research } from "@/components/sections/research";
import { Statistics } from "@/components/sections/statistics";
import { TechStack } from "@/components/sections/tech-stack";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Services />
        <ExperienceTimeline />
        <Certifications />
        <Research />
        <Statistics />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
