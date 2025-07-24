import ProjectCard from "./ProjectCard"

export default function ProjectsSection() {
  return (
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
  )
};