// components/ExperienceItem.tsx
'use client';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  title: string;
  company: string;
  dates: string;
  bullets: string[];
  logo: string;
}

// Define animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  hover: { scale: 1.02, y: -2 },
};

export default function ExperienceItem({
  title,
  company,
  dates,
  bullets,
  logo,
}: Props) {
  return (
    <motion.div
      // Use defined variants for entry and hover
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // smooth cubic-bezier
      }}
      className="flex space-x-4 py-6 items-start bg-surface-dark rounded-lg p-4 shadow-md"
    >
      <div className="h-14 w-14 rounded-xl bg-white/10 border border-border flex-shrink-0 overflow-hidden flex items-center justify-center">
        <img
          src={logo}
          alt={`${company} logo`}
          className="h-full w-full object-contain"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold">
          {title}, <span className="text-primary">{company}</span>
        </h3>
        <p className="text-sm text-gray-400 mt-1">{dates}</p>
        <ul className="mt-3 list-disc list-inside space-y-1">
          {bullets.map((b, i) => (
            <li key={i} className="leading-relaxed">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
