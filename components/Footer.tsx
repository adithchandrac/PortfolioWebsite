import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-body-text flex justify-center items-center gap-4">
      <span>
        © 2025 Adith Chandrasekaran ·{" "}
        <a href="#top" className="underline underline-offset-4 hover:text-primary transition-colors">
          Back to top ↑
        </a>
      </span>
      <a
        href="https://www.linkedin.com/in/adith-chandrasekaran/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-primary transition-colors"
      >
        <Linkedin size={22} />
      </a>
      <a
        href="https://github.com/adithchandrac"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-primary transition-colors"
      >
        <Github size={22} />
      </a>
    </footer>
  );
}