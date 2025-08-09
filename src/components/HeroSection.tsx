import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 pt-16"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent" data-testid="text-hero-title">
            Web Developer
          </h1>

          <div className="text-xl md:text-2xl text-slate-300 mb-8 space-y-2">
            <p className="flex items-center justify-center gap-2" data-testid="text-hero-greeting">
              Hi, My Name is Eqd
              <span className="text-2xl">👋</span>
            </p>
            <p className="text-lg" data-testid="text-hero-description">
              I am a Front-End Developer. But I want to work on becoming a Backend Developer.
            </p>
          </div>

          <div className="mb-12">
            <Button
              asChild
              size="lg"
              className="bg-discord hover:bg-discord/80 text-white px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-discord/25"
              data-testid="button-collaboration"
            >
              <a
                href="https://discord.com/users/1363541945615519885"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Contact me for Collaboration
              </a>
            </Button>
          </div>

          <div className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed" data-testid="text-hero-bio">
            <p>
              I'm Eqd and 17 years old. Living in Turkey/Türkiye and working on Web Development and will move into Web or Mobile App Development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}