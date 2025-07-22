import Link from 'next/link';
interface Props { title: string; description: string; tech: string[]; img: string; repo: string; demo?: string; }
export default function ProjectCard({ title, description, tech, img, repo, demo }: Props) {
  return (
    <div className="bg-surface-dark p-6 rounded-2xl shadow-lg">
      <img src={img} alt={title} className="rounded-lg mb-4"/>
      <h4 className="text-2xl font-semibold">{title}</h4>
      <p className="mt-2">{description}</p>
      <p className="mt-2 text-sm text-gray-400">Tech: {tech.join(', ')}</p>
      <div className="mt-4 space-x-4">
        <Link href={repo} className="underline">GitHub</Link>
        {demo && <Link href={demo} className="underline">Live Demo</Link>}
      </div>
    </div>
  );
}
