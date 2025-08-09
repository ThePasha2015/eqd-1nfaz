import { Github, Settings, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  githubUrl: string;
  technology: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

const projects: Project[] = [
  {
    id: "discord-status",
    title: "Discord Status Changer",
    description: "Created without Python",
    fullDescription: "This Project is Change and Update Your Discord Status. A utility tool that allows users to customize and automate their Discord status updates with ease.",
    image: "https://ares.shiftdelete.net/2022/09/discord-tema-degistirme-nasil-yapilir.jpg",
    githubUrl: "https://github.com/eqd5/discordStatus",
    technology: "JavaScript",
    icon: Settings,
    gradient: "from-discord to-purple-600",
  },
  {
    id: "instagram-bot",
    title: "Instagram Follow Bot",
    description: "Created without Python",
    fullDescription: "Instagram Follow Bot Automation System. An automated solution for Instagram engagement using Selenium WebDriver for social media growth.",
    image: "https://tse4.mm.bing.net/th/id/OIP.rTzDs9uei-0BDB5rSgqh3wHaFF?rs=1&pid=ImgDetMain&o=7&rm=3",
    githubUrl: "https://github.com/eqd5/SeleniumInstagramFollowBotc",
    technology: "Selenium",
    icon: Bot,
    gradient: "from-pink-500 via-red-500 to-yellow-500",
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = project.icon;
  const rotateClass = index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1";

  return (
    <Card
      className={`bg-slate-800 border-slate-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${rotateClass}`}
      data-testid={`card-project-${project.id}`}
    >
      <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          data-testid={`img-project-${project.id}`}
        />
      </div>

      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Icon className="w-5 h-5 text-blue-400" />
          <h3 className="text-xl font-semibold" data-testid={`text-project-title-${project.id}`}>
            {project.title}
          </h3>
        </div>

        <p className="text-slate-400 mb-4" data-testid={`text-project-description-${project.id}`}>
          {project.description}
        </p>

        <p className="text-slate-300 mb-6 leading-relaxed" data-testid={`text-project-full-description-${project.id}`}>
          <strong>{project.fullDescription.split('.')[0]}.</strong>
          {project.fullDescription.substring(project.fullDescription.indexOf('.') + 1)}
        </p>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="secondary"
            className="bg-slate-700 hover:bg-slate-600 text-white"
            data-testid={`button-github-${project.id}`}
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </Button>

          <div className="flex items-center gap-2 text-sm text-slate-500" data-testid={`text-project-tech-${project.id}`}>
            <span>{project.technology}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-slate-900" data-testid="section-projects">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-400" data-testid="text-projects-title">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}