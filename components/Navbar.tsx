'use client';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from './hooks/use-dark-mode';
import Link from 'next/link';
import Image from 'next/image';

const sections = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-fit px-6 py-2 rounded-full bg-background/70 dark:bg-card/70 border border-card/60 shadow-lg backdrop-blur-md flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Logo"
        width={36}
        height={36}
        className="rounded-full shadow-sm mr-2"
      />
     <ul className="flex items-center gap-1">
        {sections.map((sec) => (
          <li key={sec.href}>
            <Link
              href={sec.href}
              className="px-4 py-2 rounded-full text-sm font-medium capitalize text-body-text hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {sec.label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        aria-label="Toggle Dark Mode"
        onClick={() => setIsDark(!isDark)}
        className="ml-2 p-2 rounded-full hover:bg-primary/10 transition focus:outline-none"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </nav>
  );
}