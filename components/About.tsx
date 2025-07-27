"use client";
import Beams from "@/blocks/Backgrounds/Beams/Beams";
import Container from "./Container";
import ScrollReveal from "@/blocks/TextAnimations/ScrollReveal/ScrollReveal";
import { useState, useEffect } from "react";

export default function About() {
  
  const [mode, setMode] = useState<"light" | "dark">("light");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setMode(document.documentElement.classList.contains("dark") ? "dark" : "light");
    }
  }, []);
  return (
    <section className="w-full py-12 flex justify-center bg-background text-foreground">
      <div className="relative w-full max-w-7xl rounded-3xl shadow-2xl overflow-hidden border border-black/40 dark:border-white/10 bg-card">
        <div className="absolute inset-0 pointer-events-none select-none">
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor={mode === "dark" ? "#e5e7eb" : "#6366F1"}
            mode={mode}
            speed={2}
            noiseIntensity={1.2}
            scale={0.18}
            rotation={30}
          />
        </div>
        <div className="relative z-10 w-full">
          <Container>
            <section id="about" className="py-16 w-full pb-10">
              <h2 className="text-3xl font-semibold text-center text-heading">About Me</h2>
              <div className="mt-4 text-bodyText leading-relaxed whitespace-pre-line">
                <ScrollReveal
                  baseOpacity={0.4}
                  enableBlur={true}
                  baseRotation={1}
                  blurStrength={4}
                  rotationEnd="bottom bottom"
                  wordAnimationEnd="bottom bottom"
                  textClassName="!text-lg leading-loose"
                >
                  {`I'm Adith Chandrasekaran, a senior at the University of Maryland-College Park (BS in Computer Science, minor in Innovation & Entrepreneurship, Dean’s List, graduating Dec 2025). My passion is building impactful software at the intersection of engineering and product management, with a focus on bridging business needs and technical solutions.

I've interned/fellowed at KPMG, Palantir, and Amalgam Inc., working on generative AI, large-scale data applications, and fullstack development using modern frameworks like React.js, Next.js, and Angular. As a co-founder and product manager at WallStreetEdge, I led the creation of an AI tutor web app, managing both technical and strategic aspects.

My technical toolkit includes Python, Java, TypeScript, and Rust, alongside cloud and DevOps tools like AWS and Azure. I have a strong foundation in agile methodologies, project management, and product strategy.

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

