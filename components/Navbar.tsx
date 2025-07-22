'use client';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from './hooks/use-dark-mode';
import Link from 'next/link';

export default function Navbar() {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="space-x-6">
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
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
