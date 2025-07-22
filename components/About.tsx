import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="py-16">
      <SectionHeading>About Me</SectionHeading>
      <p className="mt-4 prose dark:prose-invert">
        I’m a BS CS student at UMD (’25), interned at KPMG, Palantir & Amalgam...
      </p>
    </section>
  );
}
