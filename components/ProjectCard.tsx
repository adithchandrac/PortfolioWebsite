import Link from 'next/link';
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
  repo: string;
  demo?: string;
  logos?: string[];
}

export default function ProjectCard({ title, description, tech, img, repo, demo, logos }: Props) {
  return (
    <Card className="group h-full flex flex-col border border-border/60 bg-background/70 backdrop-blur-md shadow-md rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="p-0">
        {/* Logos row */}
        {logos && logos.length > 0 && (
          <>
            <div className="flex items-center justify-center gap-6 pt-20 pb-21">
              <img src={logos[0]} alt="Logo 1" className="h-30 w-30 object-contain" />
              {logos[1] && (
                <>
                  <span className="mx-2 text-3xl font-bold text-gray-400">×</span>
                  <img src={logos[1]} alt="Logo 2" className="h-30 w-30 object-contain" />
                </>
              )}
            </div>
            <div className="w-full border-b border-border/40" />
          </>
        )}
        {/* Optional image */}
        {!logos && img && (
          <>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
              <img
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="w-full border-b border-border/40" />
          </>
        )}
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between p-5">
        <CardTitle className="text-lg font-semibold mb-1">{title}</CardTitle>
        <CardDescription className="mb-2">{description}</CardDescription>
        <div className="mt-auto text-xs text-muted-foreground">
          <span className="font-medium">Tech:</span> {tech.join(", ")}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-4 pb-4">
        <Link
          href={repo}
          className="underline underline-offset-4 hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
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
      </CardFooter>
    </Card>
  );
}