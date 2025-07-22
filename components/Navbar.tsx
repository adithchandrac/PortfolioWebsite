'use client';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from './hooks/use-dark-mode';
import Link from 'next/link';
import AnimatedContent from '@/blocks/Animations/AnimatedContent/AnimatedContent';
import Magnet from '@/blocks/Animations/Magnet/Magnet';

export default function Navbar() {
  const [isDark, setIsDark] = useDarkMode();
  const sections = ['about', 'experience', 'projects', 'contact'];
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex space-x-6">
        {sections.map((sec, i) => (
          <AnimatedContent
            key={sec}
            distance={150}
            direction="horizontal"
            reverse={i % 2 === 0}
            duration={1}
            ease="power2.out"
            initialOpacity={0}
            delay={0.2 + i * 0.1}
          >
            <Magnet padding={50} disabled={false} magnetStrength={50}>
              <Link href={`#${sec}`} className="uppercase tracking-wide">
                {sec}
              </Link>
            </Magnet>
          </AnimatedContent>
        ))}
      </div>
      <button
        aria-label="Toggle Dark Mode"
        onClick={() => setIsDark(!isDark)}
        className="p-2 rounded focus:outline-none focus:ring focus:ring-primary-light"
      >
        {isDark ? <Sun size={20} aria-label="Light mode"/> : <Moon size={20} aria-label="Dark mode"/>}
      </button>
    </nav>
  );
}
