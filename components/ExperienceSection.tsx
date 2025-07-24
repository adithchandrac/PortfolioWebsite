
import ExperienceItem from "./ExperienceItem";

export default function ExperienceSection() {
  return (
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
  );
}