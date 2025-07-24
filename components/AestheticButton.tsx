import { Github, Linkedin, Mail } from "lucide-react";

interface Props {
  href: string;
  label: string;
  icon: "github" | "linkedin" | "mail";
}

export default function AestheticButton({ href, label, icon }: Props) {
  const Icon = icon === "github" ? Github : icon === "linkedin" ? Linkedin : Mail;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:bg-primary/90 transition-colors text-xl"
    >
      <Icon size={24} />
      {label}
    </a>
  );
}