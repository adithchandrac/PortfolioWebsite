interface Props { title: string; company: string; dates: string; bullets: string[]; logo: string; }
export default function ExperienceItem({ title, company, dates, bullets, logo }: Props) {
  return (
    <div className="flex space-x-4 py-6">
      <img src={logo} alt={`${company} logo`} className="h-12 w-12 object-contain"/>
      <div>
        <h3 className="text-xl font-medium">{title}, {company}</h3>
        <p className="text-sm text-gray-400">{dates}</p>
        <ul className="mt-2 list-disc list-inside">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </div>
  );
}
