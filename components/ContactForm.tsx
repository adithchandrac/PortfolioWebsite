'use client';
import { useState } from 'react';
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return sent ? (
    <p className="mt-4">Thanks! I’ll reply soon.</p>
  ) : (
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
  );
}
