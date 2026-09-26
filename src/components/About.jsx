import { motion } from "framer-motion";
import { GraduationCap, Code as Code2, Database, Brain } from "lucide-react";

function About() {
  const stats = [
    { value: "4", label: "Featured Projects" },
    { value: "3", label: "Professional Roles" },
    { value: "10+", label: "Technologies" },
    { value: "2024", label: "Started Degree" },
  ];

  const highlights = [
    {
      icon: Code2,
      title: "Software Development",
      text: "Building practical applications using C#, ASP.NET and modern development practices.",
    },
    {
      icon: Database,
      title: "Database Development",
      text: "Working with SQL Server and database-driven applications.",
    },
    {
      icon: Brain,
      title: "AI & Python",
      text: "Currently expanding my skills in Python, AI applications and prompt engineering.",
    },
  ];

  return (
    <section
      id="about"
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
            <span className="font-mono text-xs text-blue-500">01</span>
            <span className="h-px w-8 bg-blue-500/40" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              About
            </p>
          </div>

          <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Building software with a{" "}
            <span className="text-neutral-500">practical mindset.</span>
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0a0a0b] px-6 py-8 transition-colors duration-300 hover:bg-white/[0.02]"
            >
              <p className="font-display text-3xl font-bold text-white">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Main grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-neutral-400">
              I'm Muhammad Abdullah Rashid, a Software Engineering student
              at Iqra University with practical experience in backend
              development, full-stack systems and IT support.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-neutral-400">
              During my professional experience, I have worked with ASP.NET,
              C#, and SQL Server to develop real-world systems including
              customer complaint management and intern attendance
              management applications.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-neutral-400">
              I'm currently expanding my technical skills in Python,
              artificial intelligence and prompt engineering while continuing
              to strengthen my software development fundamentals.
            </p>

            {/* Education */}
            <div className="mt-10 border-t border-white/[0.06] pt-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/[0.06]">
                  <GraduationCap className="text-blue-500" size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs text-neutral-600">
                    2024 — Present
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-white">
                    Bachelor of Software Engineering
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    Iqra University
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Focus areas */}
          <div className="space-y-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex gap-5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.03]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/[0.06] transition-colors group-hover:bg-blue-500/10">
                    <Icon size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
