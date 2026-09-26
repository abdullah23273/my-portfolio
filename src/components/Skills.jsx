import { motion } from "framer-motion";
import { Code as Code2, Globe, Database, Wrench, Brain } from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      icon: Globe,
      title: "Frontend",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      icon: Code2,
      title: "Backend",
      skills: ["ASP.NET", "C#", "REST API Basics"],
    },
    {
      icon: Database,
      title: "Database",
      skills: ["SQL Server", "SSMS", "Database Design"],
    },
    {
      icon: Code2,
      title: "Programming",
      skills: ["C", "C#", "Java", "Python"],
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Git", "GitHub", "Visual Studio", "MATLAB"],
    },
    {
      icon: Brain,
      title: "AI / Modern Dev",
      skills: ["Prompt Engineering", "AI Prompt Design", "Python"],
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
            Tools and technologies I{" "}
            <span className="text-neutral-500">work with.</span>
          </h2>
        </motion.div>

        {/* Skills grid — categorized columns */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group bg-[#0a0a0b] p-6 transition-colors duration-300 hover:bg-white/[0.02] sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={18}
                    className="text-blue-500 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-5 space-y-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3 text-sm text-neutral-400 transition-colors group-hover:text-neutral-300"
                    >
                      <span className="h-1 w-1 rounded-full bg-blue-500/50" />
                      {skill}
                    </div>
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
