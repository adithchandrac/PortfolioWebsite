"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface Props {
  title: string;
  description: string;
  tech: string[];
  img?: string;
  video?: string; // <-- Add this line
  repo?: string;
  demo?: string;
  proposal?: string;
  website?: string;
  logos?: string[];
  className?: string;
  codeExample?: ReactNode;
  backClassName?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  img,
  video, // <-- Add this line
  repo,
  demo,
  proposal,
  website,
  logos,
  className = "",
  codeExample,
  backClassName = "",
}: Props) {
  return (
    <div
      className="flip-container w-full"
      onTouchStart={(e) => (e.currentTarget.classList.toggle("hover"))}
    >
      <div className="flipper w-full">
        {/* FRONT */}
        <div className="front w-full cursor-pointer">
          <Card className="group h-full w-full flex flex-col border border-white/10 bg-white/5 backdrop-blur-md shadow-md rounded-2xl transition-all hover:border-primary/40">
            <CardHeader className="p-0">
              {logos && logos.length > 0 ? (
                <>
                  <div className="flex items-center justify-center gap-4 pt-20 pb-24 min-h-[120px]">
                    {logos.map((logo, idx) => (
                      <React.Fragment key={logo}>
                        <img
                          src={logo}
                          alt={`Logo ${idx + 1}`}
                          className={`h-16 w-16 rounded-xl bg-white ${
                            title.includes("WallStreetEdge") && idx === 0
                              ? "object-cover"
                              : "object-contain"
                          }`}
                        />
                        {idx < logos.length - 1 && (
                          <span className="mx-2 text-3xl font-bold text-gray-400">
                            ×
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="w-full border-b border-white/10" />
                </>
              ) : video ? (
                <>
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
                    <video
                      src={video}
                      controls
                      className="absolute inset-0 w-full h-full object-cover rounded-t-2xl"
                    />
                  </div>
                  <div className="w-full border-b border-white/10" />
                </>
              ) : img ? (
                <>
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
                    <img
                      src={img}
                      alt={title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full border-b border-white/10" />
                </>
              ) : null}
            </CardHeader>

            <CardContent className="flex-1 flex flex-col justify-between p-5">
              <CardTitle className="text-lg font-semibold mb-1">
                {title}
              </CardTitle>
              <CardDescription className="mb-2">{description}</CardDescription>
              <div className="mt-auto text-xs text-muted-foreground">
                <span className="font-medium">Tech:</span> {tech.join(", ")}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* BACK */}
<div
  className={`back w-full cursor-pointer flex flex-col items-center justify-center rounded-2xl p-6 relative bg-black/80 ${backClassName}`}
>
  {video && (
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="mb-4 rounded-lg w-full max-w-md"
    />
  )}
  {codeExample ? (
    codeExample
  ) : (
    <span className="text-gray-300 text-center mb-4">
      No example provided.
    </span>
  )}
  <CardFooter className="flex justify-center gap-4 pb-4 mt-6">
    {repo && (
      <Link
        href={repo}
        className="underline underline-offset-4 hover:text-primary transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Link>
    )}
    {demo && (
      <Link
        href={demo}
        className="underline underline-offset-4 hover:text-primary transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo
      </Link>
    )}
    {proposal && (
      <Link
        href={proposal}
        className="underline underline-offset-4 hover:text-primary transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Proposal
      </Link>
    )}
    {website && (
      <Link
        href={website}
        className="underline underline-offset-4 hover:text-primary transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Website
      </Link>
    )}
  </CardFooter>
</div>
      </div>
    </div>
  );
}