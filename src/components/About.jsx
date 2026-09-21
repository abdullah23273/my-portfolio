import { motion } from "framer-motion";
import { GraduationCap, Code2, Database, Brain } from "lucide-react";

function About() {
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
      className="relative px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            About Me
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Building software with a
            <span className="text-blue-500"> practical mindset.</span>
          </h2>
        </motion.div>

        {/* Main About Grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-8 text-gray-400">
              I'm Muhammad Abdullah Rashid, a Software Engineering student
              at Iqra University with practical experience in backend
              development, full-stack systems and IT support.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              During my professional experience, I have worked with ASP.NET,
              C#, and SQL Server to develop real-world systems including
              customer complaint management and intern attendance
              management applications.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I'm currently expanding my technical skills in Python,
              artificial intelligence and prompt engineering while continuing
              to strengthen my software development fundamentals.
            </p>

            {/* Education */}
            <div className="mt-10 border-t border-white/10 pt-8">

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10">
                  <GraduationCap className="text-blue-500" size={22} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    2024 — Present
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-white">
                    Bachelor of Software Engineering
                  </h3>

                  <p className="mt-1 text-gray-400">
                    Iqra University
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Highlights */}
          <div className="space-y-4">

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
                >
                  <div className="flex gap-5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                      <Icon
                        size={22}
                        className="text-blue-500"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-7 text-gray-400">
                        {item.text}
                      </p>
                    </div>

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