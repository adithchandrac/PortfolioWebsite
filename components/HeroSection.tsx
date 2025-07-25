import LightRays from "@/blocks/Backgrounds/LightRays/LightRays";
import Image from "next/image";
import EmailButton from "./EmailButton";
import AestheticButton from "./AestheticButton";
import Container from "./Container";

export default function HeroSection() {
  return (
    <section className="w-full py-12 flex justify-center relative pt-30">
      {/* LightRays background only for Hero */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          fadeDistance={1}
          saturation={1}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
        />
      </div>
      <div className="relative z-10 w-full">
        <Container>
          <div className="flex flex-col items-center justify-center min-h-[80vh] pt-32 pb-16 w-full">
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
            <p className="mt-4 text-2xl text-gray-300 text-center max-w-5xl font-medium">
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
          </div>
        </Container>
      </div>
    </section>
  );
}