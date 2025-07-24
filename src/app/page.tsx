import HeroSection        from "../../components/HeroSection";
import About              from "../../components/About";
import ExperienceSection  from "../../components/ExperienceSection";
import TechStackSection   from "../../components/TechStackSection";
import ProjectsSection    from "../../components/ProjectsSection";
import WorkflowAndContactSection from "../../components/WorkflowAndContactSection";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-x-hidden text-white">
      
      <HeroSection />
      <About />
      <ExperienceSection />
      <TechStackSection />
      <ProjectsSection />
      <WorkflowAndContactSection />
    </div>
  );
}