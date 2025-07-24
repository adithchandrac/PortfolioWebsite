import { Mail } from "lucide-react";

export default function EmailButton({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-black font-semibold shadow-lg hover:bg-gray-100 transition-colors text-xl"
    >
      <Mail size={22} />
      Email
    </a>
  );
}