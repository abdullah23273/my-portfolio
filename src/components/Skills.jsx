import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Database,
  Wrench,
  Brain,
  Layers3,
} from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      icon: Code2,
      title: "Programming",
      description: "Languages I use to build software and solve problems.",
      skills: ["C", "C#", "Java", "Python"],
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Technologies used for building web applications.",
      skills: ["ASP.NET Web Forms", "HTML", "CSS", "Bootstrap"],
    },
    {
      icon: Database,
      title: "Database",
      description: "Database technologies and management tools.",
      skills: ["SQL Server", "SSMS", "Database Design"],
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      description: "Development tools and platforms I work with.",
      skills: ["Git", "GitHub", "Visual Studio", "MATLAB", "Microsoft Office"],
    },
    {
      icon: Layers3,
      title: "Core Concepts",
      description: "Software engineering concepts from my academic and practical work.",
      skills: [
        "OOP",
        "Data Structures",
        "Algorithms",
        "SDLC",
        "REST API Basics",
      ],
    },
    {
      icon: Brain,
      title: "Emerging Skills",
      description: "Technologies and areas I'm currently developing.",
      skills: ["Prompt Engineering", "AI Prompt Design"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Technical Skills
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Tools and technologies I
            <span className="text-blue-500"> work with.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            A combination of software development fundamentals,
            backend technologies, databases, and emerging AI skills.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-blue-500/30 hover:bg-white/[0.05]"
              >

                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <Icon
                    size={22}
                    className="text-blue-500"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white">
                  {group.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-gray-300 transition hover:border-blue-500/30 hover:text-blue-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Skills;