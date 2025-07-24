import Dither from "@/blocks/Backgrounds/Dither/Dither";
import Container from "./Container";
import ScrollReveal from "@/blocks/TextAnimations/ScrollReveal/ScrollReveal";

export default function About() {
  return (
    <section className="w-full py-12 flex justify-center">
      <div className="relative w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none">
          <Dither />
        </div>
        <div className="relative z-10 w-full">
          <Container>
            <section id="about" className="py-16 w-full pb-10">
              <h2 className="text-3xl font-semibold text-center">About Me</h2>
              <div className="mt-4 text-gray-300 leading-relaxed whitespace-pre-line">
                <ScrollReveal
                  baseOpacity={0.2}
                  enableBlur={true}
                  baseRotation={0}
                  blurStrength={15}
                  rotationEnd="bottom top+=400"
                  wordAnimationEnd="bottom top+=400"
                  textClassName="!text-lg leading-loose"
                >
                  {`I'm Adith Chandrasekaran, a senior at the University of Maryland-College Park (BS in Computer Science, minor in Innovation & Entrepreneurship, Dean’s List, graduating Dec 2025). My passion is building impactful software at the intersection of engineering and product management, with a focus on bridging business needs and technical solutions.

I've interned/fellowed at KPMG, Palantir, and Amalgam Inc., working on generative AI, large-scale data applications, and fullstack development using modern frameworks like React.js, Next.js, and Angular. As a co-founder and product manager at WallStreetEdge, I led the creation of an AI tutor web app, managing both technical and strategic aspects.

My technical toolkit includes Python, Java, TypeScript, and Rust, alongside cloud and DevOps tools like AWS and Azure. I'm certified in Azure Fundamentals and IBM Data Analytics, and have a strong foundation in agile methodologies, project management, and product strategy.

Outside of coursework and internships, I've contributed to competitive projects and engineering teams—from developing airbrake systems for the Terrapin Rocket Team to placing 2nd at Northrop Grumman Hack Week. My goal is always to deliver solutions that are both technically robust and aligned with real-world business needs.`}
                </ScrollReveal>
              </div>
            </section>
          </Container>
        </div>
      </div>
    </section>
  );
}