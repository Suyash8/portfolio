import React from "react";
import { cn } from "@/lib/utils";
import { Skill, skillCategories } from "@/config/skills";

// Function to get style based on skill level
const getSkillLevelStyle = (level: Skill["level"]) => {
  switch (level) {
    case "Expert":
      return "ring-2 ring-white/30 bg-white/10 font-bold";
    case "Advanced":
      return "ring-1 ring-white/20 bg-white/5 font-semibold";
    case "Intermediate":
      return "bg-white/10 font-medium";
    case "Beginner":
      return "bg-white/5 text-white/70";
    default:
      return "bg-white/5 text-white/70";
  }
};

// Function to get level indicator
const getLevelIndicator = (level: Skill["level"]) => {
  switch (level) {
    case "Expert":
      return (
        <div className="mt-2 flex justify-center">
          <div className="flex gap-0.5">
            <div className="h-1 w-2 bg-white rounded-full"></div>
            <div className="h-1 w-2 bg-white rounded-full"></div>
            <div className="h-1 w-2 bg-white rounded-full"></div>
            <div className="h-1 w-2 bg-white rounded-full"></div>
          </div>
        </div>
      );
    case "Advanced":
      return (
        <div className="mt-2 flex justify-center">
          <div className="flex gap-0.5">
            <div className="h-1 w-2 bg-white rounded-full"></div>
            <div className="h-1 w-2 bg-white rounded-full"></div>
            <div className="h-1 w-2 bg-white rounded-full"></div>
            <div className="h-1 w-2 bg-white/40 rounded-full"></div>
          </div>
        </div>
      );
    case "Intermediate":
      return (
        <div className="mt-2 flex justify-center">
          <div className="flex gap-0.5">
            <div className="h-1 w-2 bg-white rounded-full"></div>
            <div className="h-1 w-2 bg-white rounded-full"></div>
            <div className="h-1 w-2 bg-white/40 rounded-full"></div>
            <div className="h-1 w-2 bg-white/40 rounded-full"></div>
          </div>
        </div>
      );
    case "Beginner":
      return (
        <div className="mt-2 flex justify-center">
          <div className="flex gap-0.5">
            <div className="h-1 w-2 bg-white rounded-full"></div>
            <div className="h-1 w-2 bg-white/40 rounded-full"></div>
            <div className="h-1 w-2 bg-white/40 rounded-full"></div>
            <div className="h-1 w-2 bg-white/40 rounded-full"></div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-sky-500/30 blur-[100px]" />
        <div className="absolute top-40 right-1/3 w-80 h-80 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 rounded-full bg-amber-500/30 blur-[100px]" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Expertise in modern web technologies and development frameworks,
            specializing in full stack Next.js applications and Web3
            integrations.
          </p>
        </div>

        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.title}
            className={cn(
              "mb-16 last:mb-0",
              `animate-fade-in [animation-delay:${categoryIndex * 150}ms]`
            )}
          >
            <div className="flex items-center gap-4 mb-8">
              <div
                className={cn(
                  "p-3 rounded-xl bg-gradient-to-br",
                  category.color
                )}
              >
                {category.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
                <p className="text-gray-300">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {category.skills.map((skill, index) => (
                <div
                  key={`${category.title}-${skill.name}`}
                  className={cn(
                    "group p-4 rounded-xl transition-all duration-300 hover:scale-105",
                    "backdrop-blur-sm hover:backdrop-blur-md",
                    getSkillLevelStyle(skill.level),
                    `animate-fade-in [animation-delay:${
                      (categoryIndex * 8 + index) * 50
                    }ms]`
                  )}
                >
                  <div className="text-center">
                    <p className="text-center transition-colors group-hover:text-white">
                      {skill.name}
                    </p>
                    {getLevelIndicator(skill.level)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
