import Container          from "../../components/Container";
import HeroSection        from "../../components/HeroSection";
import About              from "../../components/About";
import ExperienceSection  from "../../components/ExperienceSection";
import TechStackSection   from "../../components/TechStackSection";
import ProjectsSection    from "../../components/ProjectsSection";
import HowIBuildSection   from "../../components/HowIBuildSection";
import ContactForm        from "../../components/ContactForm";

import LiquidChrome from "@/blocks/Backgrounds/LiquidChrome/LiquidChrome";
import Dither       from "@/blocks/Backgrounds/Dither/Dither";
import Silk         from "@/blocks/Backgrounds/Silk/Silk";
import Aurora       from "@/blocks/Backgrounds/Aurora/Aurora";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-x-hidden text-white">
      {/* HERO */}
      <section className="w-full py-12 flex justify-center">
        <div className="relative w-full max-w-7xl rounded-3xl shadow-2xl overflow-hidden h-[80vh] flex items-center mt-32">
          <div className="absolute inset-0 pointer-events-none select-none">
            <LiquidChrome />
          </div>
          <div className="relative z-10 w-full">
            <Container>
              <HeroSection />
            </Container>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="w-full py-12 flex justify-center">
        <div className="relative w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 pointer-events-none select-none">
            <Dither />
          </div>
          <div className="relative z-10 w-full">
            <Container>
              <About />
            </Container>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="w-full py-12 flex justify-center">
        <div className="relative w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 pointer-events-none select-none">
            <Silk />
          </div>
          <div className="relative z-10 w-full">
            <Container>
              <ExperienceSection />
            </Container>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="w-full py-12 flex justify-center">
        <div className="relative w-full max-w-7xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <Container>
            <TechStackSection />
          </Container>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="w-full py-12 flex justify-center">
        <div className="relative w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 pointer-events-none select-none">
            <Aurora />
          </div>
          <div className="relative z-10 w-full">
            <Container>
              <ProjectsSection />
            </Container>
          </div>
        </div>
      </section>

      {/* WORKFLOW & CONTACT */}
      <section className="w-full bg-black py-20">
        <div className="w-full space-y-16">
          <Container>
            <HowIBuildSection />
            <ContactForm />
          </Container>
        </div>
      </section>
    </div>
  );
}