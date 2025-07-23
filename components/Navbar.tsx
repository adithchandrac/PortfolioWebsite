// components/Navbar.tsx
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
    <nav
      className="
        fixed top-6 left-1/2 z-50
        transform -translate-x-1/2
        w-full max-w-[900px]
        mx-auto px-6 py-2
        bg-white/30 dark:bg-white/10
        ring-1 ring-white/40 dark:ring-white/20
        shadow-md
        flex items-center justify-between
        rounded-full
      "
    >
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={32}
        height={32}
        className="rounded-full shadow-sm"
      />

      {/* Links */}
      <ul className="flex items-center space-x-4">
        {sections.map((sec) => (
          <li key={sec.href}>
            <Link
              href={sec.href}
              className="
                px-4 py-1
                text-sm font-medium capitalize
                text-body-text
                rounded-full
                transition
                hover:bg-white/60
                hover:text-primary           /* purple text on hover */
                hover:ring-1 hover:ring-white/60
              "
            >
              {sec.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Dark Mode Toggle */}
      <button
        aria-label="Toggle Dark Mode"
        onClick={() => setIsDark(!isDark)}
        className="
          p-2 rounded-full
          transition
          hover:bg-white/60
          hover:ring-1 hover:ring-white/60
          focus:outline-none
        "
      >
        {isDark
          ? <Sun size={16} className="text-body-text hover:text-primary" />
          : <Moon size={16} className="text-body-text hover:text-primary" />
        }
      </button>
    </nav>
  );
}
