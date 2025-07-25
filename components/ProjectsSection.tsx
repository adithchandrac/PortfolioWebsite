import Aurora from "@/blocks/Backgrounds/Aurora/Aurora";
import Container from "./Container";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="w-full py-12 flex justify-center">
      <div className="relative w-full max-w-7xl rounded-3xl shadow-2xl overflow-hidden border border-white/10">
        <div className="absolute inset-0 pointer-events-none select-none">
          <Aurora />
        </div>
        <div className="relative z-10 w-full">
          <Container>
            <section id="projects" className="py-16 w-full">
              <h2 className="text-4xl font-semibold mb-8 text-center">
                Projects & Competitions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
                <ProjectCard
                  title="NBA Expansion Proposal"
                  description="Created original mockups for proposed Mexico City and Pittsburgh teams, underpinned by market research and financial projections."
                  tech={["Analytics", "Strategy", "Datathon"]}
                  logos={["nbalogo.png", "sac.png"]}
                  repo="https://github.com/adithchandrac/nba-expansion"
                  backClassName="min-h-[500px]"
                  codeExample={
                    <div className="flex flex-col items-center justify-center">
                      <img
                        src="/nbamock.png"
                        className="rounded-lg mb-4 max-w-xs mx-auto"
                      />
                      <p className="text-base text-gray-200 text-center">
                        <strong>Arena Mockup:</strong><br />
                        Visualized a 22,300‑seat venue with full branding and fan flow—backed by demographic and revenue forecasts.
                      </p>
                    </div>
                  }
                />
                <ProjectCard
                  title="shovl. (Northrop Grumman Hack Week)"
                  description="Placed 2nd in the 2023 Northrop Grumman Innovation Factory Hack Week, collaborating with a team of four to develop a full-stack Python web application. Conducted web scraping on 1.2M lines of data from 200,000+ companies. Implemented a custom ranking algorithm using Bayesian inference and sentiment analysis."
                  tech={["Python", "Django", "Hackathon"]}
                  img="projects-shovl.png"
                  repo="https://github.com/adithchandrac/shovl"
                  demo="https://shovl-demo.com"
                  codeExample={
                    <div className="flex flex-col items-center justify-center">
                      <img src="/shovlcode.png" alt="Shovl Bayesian Algorithm" className="rounded-lg mb-4 max-w-xs mx-auto" />
                      <p className="text-base text-gray-200 text-center">
                        <strong>Bayesian Ranking Algorithm:</strong><br />
                        I designed and implemented a custom Bayesian algorithm that factored in:<br />
                        • Rating (out of 5)<br />
                        • Number of Reviews<br />
                        • Sentiment Analysis using NLP on review text<br />
                        • Vendor Age to determine vendor score<br />
                        This approach allowed us to rank vendors more fairly and accurately by combining quantitative and qualitative data.
                      </p>
                    </div>
                  }
                />
                <ProjectCard
                  title="WallStreetEdge AI Cofounder"
                  description="Co-created an AI-powered web app to help students prepare for finance careers. Led product management, UI/UX, and technical direction. Built with Next.js, TypeScript, AWS, and OpenAI API. Managed the full product lifecycle from ideation to launch."
                  tech={["Next.js", "TypeScript", "AWS", "OpenAI", "MongoDB"]}
                  logos={["wallstreetedge.png"]}
                  repo="https://github.com/adithchandrac/wallstreetedge"
                  demo="https://wallstreetedge.com"
                  codeExample={`// WallStreetEdge: AI Tutor Prompt\nconst prompt = "Explain discounted cash flow analysis.";\nconst answer = await openai.ask(prompt);\nconsole.log(answer);`}
                />
                <ProjectCard
                  title="Amalgam Inc. Client Websites"
                  description="Worked with Amalgam Inc. to help design and build modern, performant websites for clients such as LotusRise.org and Confinity.com. Focused on fullstack development, UI/UX, and scalable deployment using React, Magnolia, and Java."
                  tech={["React", "Magnolia", "Java", "UI/UX"]}
                  logos={["amalgam.png", "confinity.png", "lotusrise.png"]}
                  repo="https://github.com/adithchandrac/amalgam-client-sites"
                  demo="https://lotusrise.org"
                  codeExample={`// Amalgam Inc: Deploy Client Site\nconst client = "lotusrise.org";\ndeploySite(client, { framework: "React", cms: "Magnolia" });`}
                />
              </div>
            </section>
          </Container>
        </div>
      </div>
    </section>
  );
}