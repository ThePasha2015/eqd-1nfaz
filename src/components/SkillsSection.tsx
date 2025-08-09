import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: "HTML", level: 100, color: "from-orange-500 to-red-500" },
  { name: "CSS", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "Tailwind", level: 97, color: "from-teal-500 to-cyan-500" },
  { name: "React", level: 45, color: "from-cyan-500 to-blue-500" },
  { name: "Discord.js", level: 53, color: "from-discord to-purple-500" },
  { name: "Node.js", level: 60, color: "from-green-500 to-emerald-500" },
  { name: "Selenium", level: 28, color: "from-yellow-500 to-orange-500" },
  { name: "MongoDB", level: 10, color: "from-green-600 to-green-400" },
];

interface SkillBarProps {
  skill: Skill;
  isVisible: boolean;
}

function SkillBar({ skill, isVisible }: SkillBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level]);

  return (
    <div className="skill-item" data-testid={`skill-${skill.name.toLowerCase()}`}>
      <div className="flex justify-between items-center mb-3">
        <span className="text-lg font-medium" data-testid={`text-skill-name-${skill.name.toLowerCase()}`}>
          {skill.name}
        </span>
        <span className="text-lg font-bold" data-testid={`text-skill-level-${skill.name.toLowerCase()}`}>
          {skill.level}%
        </span>
      </div>
      <div className="bg-slate-700 rounded-full h-3 overflow-hidden">
        <div
          className={`skill-bar bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
          data-testid={`bar-skill-${skill.name.toLowerCase()}`}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-slate-800"
      data-testid="section-skills"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-skills-title">
            My Using Some Software Languages and Frameworks
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-12 text-blue-400" data-testid="text-skills-subtitle">
            My Skill Levels
          </h3>

          <div className="grid gap-8 md:gap-12">
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}