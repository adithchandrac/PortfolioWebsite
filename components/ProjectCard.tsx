import PixelTransition from '@/blocks/Animations/PixelTransition/PixelTransition';
import Magnet from '@/blocks/Animations/Magnet/Magnet';
import Link from 'next/link';
import Image from 'next/image';

interface Props { title: string; description: string; tech: string[]; img: string; repo: string; demo?: string; }

export default function ProjectCard({ title, description, tech, img, repo, demo }: Props) {
  return (
    <PixelTransition
      firstContent={
        <Image
          src={img}
          alt={title}
          width={400}
          height={192}
          className="w-full h-48 object-cover rounded-lg"
        />
      }
      secondContent={
        <>
          <Magnet padding={30} magnetStrength={30}>
            <div className="p-6 bg-surface-dark">
              <h4 className="text-2xl font-semibold">{title}</h4>
              <p className="mt-2">{description}</p>
              <p className="mt-2 text-sm text-gray-400">Tech: {tech.join(', ')}</p>
            </div>
          </Magnet>
          <div className="p-4 flex space-x-4">
            <Link href={repo} className="underline">GitHub</Link>
            {demo && <Link href={demo} className="underline">Live Demo</Link>}
          </div>
        </>
      }
      gridSize={12}
      pixelColor="#ffffff"
      animationStepDuration={0.4}
      className="overflow-hidden rounded-lg shadow-lg"
    />
  );
}
