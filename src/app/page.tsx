import HeroSection        from "../../components/HeroSection";
import About              from "../../components/About";
import ExperienceSection  from "../../components/ExperienceSection";
import TechStackSection   from "../../components/TechStackSection";
import ProjectsSection    from "../../components/ProjectsSection";
import WorkflowAndContactSection from "../../components/WorkflowAndContactSection";
import CertificationsSection from "../../components/CertificationsSection";

export default function HomePage() {
  return (
    <div className="relative w-full overflow-x-hidden text-white">
      <meta name="google-site-verification" content="TAUc_qW9N2-v5MCiBB82DBJ3BOk_ni9iuoqbd_zTNx0" />
      <HeroSection />
      <About />
      <ExperienceSection />
      <CertificationsSection />
      <TechStackSection />
      <ProjectsSection />
      <WorkflowAndContactSection />
    </div>
  );
}