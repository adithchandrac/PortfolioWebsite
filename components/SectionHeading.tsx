import GradientText from '@/blocks/TextAnimations/GradientText/GradientText';

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <GradientText
      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
      animationSpeed={3}
      showBorder={false}
      className="text-3xl font-semibold"
    >
      {children}
    </GradientText>
  );
}
