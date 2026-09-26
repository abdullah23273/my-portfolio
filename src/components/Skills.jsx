
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Database,
  Wrench,
  Brain,
  Server,
} from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      icon: Globe,
      title: "Frontend",
      skills: [
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      icon: Server,
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "ASP.NET",
        "C#",
        "REST APIs",
      ],
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        "MongoDB",
        "SQL Server",
        "SSMS",
        "Database Design",
      ],
    },
    {
      icon: Code2,
      title: "Programming",
      skills: [
        "JavaScript",
        "C#",
        "C",
        "Java",
        "Python",
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Workflow",
      skills: [
        "Git",
        "GitHub",
        "Visual Studio",
        "VS Code",
        "MATLAB",
      ],
    },
    {
      icon: Brain,
      title: "AI / Modern Dev",
      skills: [
        "Prompt Engineering",
        "AI Prompt Design",
        "AI Applications",
        "Python",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative border-t border-white/[0.04] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-blue-500">02</span>

            <span className="h-px w-8 bg-blue-500/40" />

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Skills
            </p>
          </div>

          <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Technologies I{" "}
            <span className="text-neutral-500">
              build with.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
            A growing technical toolkit spanning modern full-stack
            development, databases, software engineering, and AI.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                className="group relative bg-[#0a0a0b] p-6 transition-colors duration-300 hover:bg-white/[0.025] sm:p-8"
              >
                {/* Subtle hover glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/0 blur-3xl transition-all duration-500 group-hover:bg-blue-500/10" />

                <div className="relative flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/10 bg-blue-500/5">
                    <Icon
                      size={18}
                      className="text-blue-500 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="relative mt-6 space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 text-sm text-neutral-400 transition-colors duration-200 group-hover:text-neutral-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500/50 transition-colors group-hover:bg-blue-500" />

                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MERN Stack Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 rounded-2xl border border-blue-500/10 bg-blue-500/[0.03] p-6 sm:p-8"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-500">
                Current Focus
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                Full-Stack MERN Development
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-500">
                Building modern web applications with React.js,
                Node.js, Express.js, MongoDB, and REST APIs.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["React", "Node", "Express", "MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-blue-500/10 bg-blue-500/5 px-3 py-1.5 text-xs font-medium text-blue-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
