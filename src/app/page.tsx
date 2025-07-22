import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section id="top" className="flex flex-col items-center py-20">
      <Image
        src="/headshot.jpg"
        alt="Headshot"
        width={150}
        height={150}
        className="rounded-full"
      />
      <h1 className="mt-6 text-4xl font-bold">
        Senior CS Student & Product Manager
      </h1>
      <p className="mt-2 text-lg text-gray-400">
        Building modern web apps with React, Next.js & Gen‑AI
      </p>
      <Button asChild className="mt-6">
        <a href="#projects">View My Work</a>
      </Button>
    </section>
  );
}
