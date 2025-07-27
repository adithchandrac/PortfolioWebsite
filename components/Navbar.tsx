'use client';

import Link from 'next/link';
import Image from 'next/image';

const sections = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav
      className="
        absolute top-6 left-1/2 transform -translate-x-1/2 z-50
        w-[50vw] max-w-none
        px-8 py-4
        bg-black/80 dark:bg-white/10
        backdrop-blur-lg
        rounded-3xl
        shadow-md
        flex items-center
        border dark:border-white/10
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
        className="rounded-full shadow-sm border border-black/10"
      />

      {/* Categories/Links on the right */}
      <div className="flex-1 flex justify-end space-x-2">
        {sections.map((sec) => (
          <Link
            key={sec.href}
            href={sec.href}
            className="
              px-3 py-1
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
    </nav>
  );
}