'use client';
import { useState } from 'react';
import Ribbons from '@/blocks/Animations/Ribbons/Ribbons';
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <div className="relative">
      {sent && (
        <div className="absolute inset-0 pointer-events-none">
          <Ribbons
            baseThickness={30}
            colors={['#ffffff']}
            speedMultiplier={0.5}
            maxAge={500}
            enableFade={false}
            enableShaderEffect={true}
          />
        </div>
      )}
      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        className="flex flex-col space-y-4"
      >
        <input name="name" placeholder="Name" required className="p-3 rounded bg-surface-dark focus:outline-none focus:ring focus:ring-primary-light" aria-label="Name"/>
        <input name="email" type="email" placeholder="Email" required className="p-3 rounded bg-surface-dark focus:outline-none focus:ring focus:ring-primary-light" aria-label="Email"/>
        <textarea name="message" placeholder="Message" required className="p-3 rounded bg-surface-dark focus:outline-none focus:ring focus:ring-primary-light" aria-label="Message"/>
        <button type="submit" className="py-3 rounded bg-primary-dark text-white focus:outline-none focus:ring focus:ring-primary-light" aria-label="Send Message">
          Send Message
        </button>
      </form>
    </div>
  );
}
