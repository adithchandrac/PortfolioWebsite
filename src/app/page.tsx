import Image from "next/image";
import { Button } from "@/components/ui/button";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import GlareHover from "@/blocks/Animations/GlareHover/GlareHover";

export default function HomePage() {
  return (
    <section
      id="top"
      className="flex flex-col items-center py-20 space-y-6"
    >
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <Image
          src="/logo.png"
          width={80}
          height={80}
          alt="Logo"
          className="rounded-full mb-2"
        />
        <Image
          src="/headshot.jpg"
          width={150}
          height={150}
          alt="Headshot"
          className="rounded-full"
        />
      </FadeContent>

      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <h1 className="text-4xl font-bold">
          Senior CS Student & Product Manager
        </h1>
      </FadeContent>

      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        duration={1.2}
        ease="bounce.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <p className="text-lg text-gray-400 dark:text-gray-300">
          Building modern web apps with React, Next.js & Gen‑AI
        </p>
      </AnimatedContent>

      <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}
      >
        <Button className="mt-4 px-6 py-3">
          View My Work
        </Button>
      </GlareHover>
    </section>
  );
}
