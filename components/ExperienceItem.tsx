import AnimatedContent from '@/blocks/Animations/AnimatedContent/AnimatedContent';
import StarBorder from '@/blocks/Animations/StarBorder/StarBorder';
import Image from 'next/image';

interface Props { title: string; company: string; dates: string; bullets: string[]; logo: string; }
export default function ExperienceItem({ title, company, dates, bullets, logo }: Props) {
  return (
    <AnimatedContent
      distance={100}
      direction="horizontal"
      reverse={false}
      duration={1}
      ease="power2.out"
      initialOpacity={0}
      threshold={0.2}
    >
      <StarBorder as="div" color="cyan" speed="5s" className="p-4 rounded-lg">
          <Image
            src={logo}
            alt={`${company} logo`}
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <div>
            <h3 className="text-xl font-medium">{title}, {company}</h3>
            <p className="text-sm text-gray-400">{dates}</p>
            <ul className="mt-2 list-disc list-inside">
              {bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
      </StarBorder>
    </AnimatedContent>
  );
}
