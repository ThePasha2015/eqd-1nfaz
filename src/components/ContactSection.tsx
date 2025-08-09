import { MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-800" data-testid="section-contact">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="text-contact-title">
            Let's Work Together
          </h2>

          <p className="text-lg text-slate-300 mb-8 leading-relaxed" data-testid="text-contact-description">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about web development. Feel free to reach out!
          </p>

          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-slate-400 mb-4" data-testid="text-contact-location">
              <MapPin className="w-5 h-5" />
              <span>Turkey/Türkiye</span>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-discord hover:bg-discord/80 text-white px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-discord/25 text-lg"
            data-testid="button-discord-contact"
          >
            <a
              href="https://discord.com/users/1363541945615519885"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Connect on Discord
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}