import Image from "next/image";
import EmailButton from "./EmailButton";
import AestheticButton from "./AestheticButton";
import LiquidChrome from "@/blocks/Backgrounds/LiquidChrome/LiquidChrome";
import Container from "./Container";

export default function HeroSection() {
  return (
    <section className="w-full py-12 flex justify-center">
      <div className="relative w-full max-w-7xl rounded-3xl shadow-2xl overflow-hidden h-[80vh] flex items-center mt-25">
        <div className="absolute inset-0 pointer-events-none select-none">
          <LiquidChrome />
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
      </div>
    </section>
  );
}