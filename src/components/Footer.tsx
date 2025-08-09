import { Github, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8" data-testid="footer">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-400" data-testid="text-footer-copyright">
            © 2024 Eqd. Built with passion and code.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/eqd5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              data-testid="link-footer-github"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://discord.com/users/1363541945615519885"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-discord transition-colors"
              data-testid="link-footer-discord"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}