import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import About from "../../components/About";
import ExperienceItem from "../../components/ExperienceItem";
import ProjectCard from "../../components/ProjectCard";
import ContactForm from "../../components/ContactForm";
import TechStackSection from "../../components/TechStackSection";
import HowIBuildSection from "../../components/HowIBuildSection";
import Dither from "@/blocks/Backgrounds/Dither/Dither";
import Silk from "@/blocks/Backgrounds/Silk/Silk";
import 'aos/dist/aos.css';
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";
import ScrollFloat from "@/blocks/TextAnimations/ScrollFloat/ScrollFloat";
import ScrollReveal from "@/blocks/TextAnimations/ScrollReveal/ScrollReveal";
import ScrollStack from "@/blocks/Components/ScrollStack/ScrollStack";
import Footer from "../../components/Footer";
import LiquidChrome from "@/blocks/Backgrounds/LiquidChrome/LiquidChrome";

// Aesthetic button for social links
function AestheticButton({ href, label, icon }: { href: string; label: string; icon: "github" | "linkedin" | "mail" }) {
  const Icon = icon === "github" ? Github : icon === "linkedin" ? Linkedin : Mail;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:bg-primary/90 transition-colors text-xl"
    >
      <Icon size={24} />
      {label}
    </a>
  );
}

function EmailButton({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-gray-800 font-semibold shadow-lg hover:bg-white/90 transition-colors text-xl"
    >
      <Mail size={24} />
      Email
    </a>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Dither Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <LiquidChrome
        />
      </div>

      <main className="relative z-10 min-h-screen scroll-smooth">
    <div
        className="
          w-[60vw] max-w-none
          px-8 py-12 mt-24
          bg-background/50 dark:bg-card/30
          backdrop-blur-lg rounded-3xl
          relative left-1/2 transform -translate-x-1/2  /* ← center me */
        "
      >
        {/* HERO */}
        <section className="flex flex-col items-center justify-center min-h-[80vh] pt-32 pb-16 relative z-20 w-full">
          <Image
            src="/headshot.png"
            alt="Adith Chandrasekaran"
            width={225}
            height={180}
            className="rounded-xl shadow-2xl object-cover aspect-square"
            priority
          />
          <h1 className="mt-8 text-6xl font-bold text-center tracking-tight">
            Adith Chandrasekaran
          </h1>
          <p className="mt-4 text-2xl text-gray-300 text-center max-w-2xl font-medium">
            Senior CS Student & Full Stack Engineer & Product Manager <br />
            Building modern web apps with React, Next.js & Gen‑AI
          </p>
          <div className="flex gap-6 mt-8 flex-wrap justify-center">
            <EmailButton email="adithchandrasekaran7@gmail.com" />
            <AestheticButton
              href="https://www.linkedin.com/in/adith-chandrasekaran/"
              label="LinkedIn"
              icon="linkedin"
            />
            <AestheticButton
              href="https://github.com/adithchandrac"
              label="GitHub"
              icon="github"
            />
          </div>
          <div className="pb-16" />
        </section>

        {/* ABOUT */}
        <About />

        {/* EXPERIENCE */}
        <section id="experience" className="py-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-semibold mb-8 text-center">Experience</h2>
          <ExperienceItem
            title="Software Engineer Intern - Gen-AI Focus"
            company="KPMG"
            dates="June 2025 - Current"
            logo="kpmg.png"
            bullets={[
              "Utilizing LangChain, LangGraph, and Angular to enhance and scale a full-stack generative AI application for business use.",
            ]}
          />
          <ExperienceItem
            title="Product Manager / Co-Founder"
            company="WallStreetEdge"
            dates="Jan 2025 - Present"
            logo="wallstreetedge.png"
            bullets={[
              "Co-created an AI tutor web app for students interested in working in the financial industry.",
              "Utilized TypeScript, CSS, and Next.js to create a seamless component-based interface, leveraged AWS web services along with a Python script using the OpenAI API for the backend, and MongoDB for the database.",
              "Researched/developed the product lifecycle, go-to-market (GTM) strategy, and managed technical backlog via GitHub Issues.",
            ]}
          />
          <ExperienceItem
            title="Gen-AI Focus (Winter Fellowship)"
            company="Palantir"
            dates="Dec 2024 - Jan 2025"
            logo="palantir.png"
            bullets={[
              "Designed and developed an interactive disaster-risk map for Asia and Africa using large NASA datasets.",
              "Provided real-world solutions for disaster risk mitigation and response.",
            ]}
          />
          <ExperienceItem
            title="Software Engineer Intern / Fullstack Intern"
            company="Amalgam Inc."
            dates="May 2024 - Nov 2024"
            logo="amalgam.png"
            bullets={[
              "Developed front-end UIs with React.js, Vue.js, and HTML; built back-end services with Magnolia and Core Java.",
              "Followed Agile and TDD methodologies across the full software lifecycle.",
              "Documented requirements and specifications to meet performance goals.",
            ]}
          />
        </section>
        <TechStackSection />

        {/* PROJECTS */}
        <section id="projects" className="py-16 max-w-5xl mx-auto px-4 md:px-0">
          <h2 className="text-4xl font-semibold mb-8 text-center">
            Projects & Competitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
            <ProjectCard
              title="NBA Expansion Proposal"
              description="Developed a comprehensive expansion strategy for the NBA, conducting financial modeling on revenue streams, operational costs, and market viability for Mexico City and Pittsburgh. Led market research and risk analysis, evaluating fan engagement, economic infrastructure, and competitive positioning."
              tech={["Analytics", "Strategy", "Datathon"]}
              repo="https://github.com/adithchandrac/nba-expansion"
              logos={["nbalogo.png", "sac.png"]}
            />
            <ProjectCard
              title="shovl. (Northrop Grumman Hack Week)"
              description="Placed 2nd in the 2023 Northrop Grumman Innovation Factory Hack Week, collaborating with a team of four to develop a full-stack Python web application. Conducted web scraping on 1.2M lines of data from 200,000+ companies. Implemented a custom ranking algorithm using Bayesian inference and sentiment analysis."
              tech={["Python", "Django", "Hackathon"]}
              img="projects-shovl.png"
              repo="https://github.com/adithchandrac/shovl"
              demo="https://shovl-demo.com"
            />
          </div>
        </section>
        <HowIBuildSection />
        {/* CONTACT */}
        <section id="contact" className="py-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-semibold mb-8 text-center">Contact</h2>
          <ContactForm />
        </section>
        <Footer/>
        </div>
      </main>
    </div>
  );
}