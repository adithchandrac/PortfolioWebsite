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

// ...existing imports...

export default function Navbar() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <nav
      className="
        absolute top-6 left-1/2 transform -translate-x-1/2 z-50
        w-[50vw] max-w-none
        px-8 py-4
        bg-background/50 dark:bg-card/30
        backdrop-blur-lg
        rounded-3xl
        shadow-md
        flex items-center
        border border-white/20
      "
      style={{
        boxShadow: "0 2px 16px 0 rgba(255,255,255,0.04)",
      }}
    >
      {/* Logo on the left */}
      <Image
        src="/logo.png"
        alt="Logo"
        width={32}
        height={32}
        className="rounded-full shadow-sm"
      />

      {/* Centered links */}
      <div className="flex-1 flex justify-center space-x-4">
        {sections.map((sec) => (
          <Link
            key={sec.href}
            href={sec.href}
            className="
              px-4 py-1
              text-sm font-medium capitalize text-body-text
              rounded-full
              transition
              hover:bg-white/60 hover:text-primary hover:ring-1 hover:ring-white/60
            "
          >
            {sec.label}
          </Link>
        ))}
      </div>

      {/* Dark Mode Toggle on the right */}
      <button
        aria-label="Toggle Dark Mode"
        onClick={() => setIsDark(!isDark)}
        className="
          p-2 rounded-full
          transition
          hover:bg-white/60 hover:ring-1 hover:ring-white/60
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