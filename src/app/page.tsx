import Image from "next/image";
import About from "../../components/About";
import ExperienceItem from "../../components/ExperienceItem";
import ProjectCard from "../../components/ProjectCard";
import ContactForm from "../../components/ContactForm";
import Aurora from "@/blocks/Backgrounds/Aurora/Aurora";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Aurora Background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Aurora
          colorStops={["#6EE7B7", "#A78BFA", "#3A29FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="relative z-10 min-h-screen scroll-smooth">
        {/* HERO */}
        <section className="flex flex-col items-center justify-center min-h-[80vh] pt-32 pb-16 relative z-20">
          <Image
            src="/headshot.png"
            alt="Adith Chandrasekaran"
            width={140}
            height={140}
            className="rounded-xl shadow-lg object-cover aspect-square"
            priority
          />
          <h1 className="mt-6 text-4xl font-bold text-center">
            Adith Chandrasekaran
          </h1>
          <p className="mt-2 text-lg text-gray-400 text-center max-w-xl">
            Senior CS Student & Product Manager <br />
            Building modern web apps with React, Next.js & Gen‑AI
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="mailto:adithchandrasekaran7@gmail.com"
              className="text-sm text-primary underline underline-offset-4"
            >
              adithchandrasekaran7@gmail.com
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://www.linkedin.com/in/adith-chandrasekaran/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              LinkedIn
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="https://github.com/adithchandrac"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <About />

        {/* EXPERIENCE */}
        <section id="experience" className="py-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Experience</h2>
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
              "Utilized TypeScript, CSS, and Next.js to create a seamless component-based interface, leveraged AWS web services along with a Python script using the OpenAI API to develop our product’s backend, and MongoDB for our database.",
              "Researched/Developed the product lifecycle, go-to-market (GTM) strategy, and managed the technical side (Github Issues).",
            ]}
          />
          <ExperienceItem
            title="Gen-AI Focus (Winter Fellowship)"
            company="Palantir"
            dates="Dec 2024 - Jan 2025"
            logo="palantir.png"
            bullets={[
              "Designed and developed an interactive map showcasing natural disaster risk areas in Asia and Africa, integrating large data sets from NASA.",
              "Provided real-world solutions for disaster risk mitigation and response when risks materialize.",
            ]}
          />
          <ExperienceItem
            title="Software Engineer Intern / Fullstack Intern"
            company="Amalgam Inc."
            dates="May 2024 - Nov 2024"
            logo="amalgam.png"
            bullets={[
              "Developed solutions across the full development lifecycle using Agile and test-driven development methodologies, focusing on both front-end and back-end components.",
              "Developed UI applications using React.js, Vue.js, and HTML; created back-end services with Magnolia and Core Java.",
              "Documented software requirements and specifications, ensuring alignment with functional and performance goals.",
            ]}
          />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Projects & Competitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

        {/* CONTACT */}
        <section id="contact" className="py-16 max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}