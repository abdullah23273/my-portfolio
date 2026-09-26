import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

function Experience() {
  const experiences = [
    {
      role: "CIT Instructor",
      company: "Alkhidmat Bano Qabil Program",
      date: "Oct 2025 – Apr 2026",
      description:
        "Delivered structured computer literacy and IT training sessions while simplifying programming concepts through practical demonstrations.",
      achievements: [
        "Delivered hands-on computer and IT training",
        "Simplified technical concepts for students",
        "Improved student engagement through practical learning",
      ],
      tags: ["Teaching", "IT Training", "Computer Literacy"],
    },
    {
      role: "IT Intern",
      company: "Pakistan International Airlines (PIA)",
      date: "Jul 2025 – Aug 2025",
      description:
        "Worked with the IT department on technical support and software development, including database-driven applications.",
      achievements: [
        "Developed a Customer Complaint Management System using ASP.NET and SQL Server",
        "Built an Intern Attendance Management System",
        "Worked on frontend, backend and database integration",
        "Supported IT troubleshooting and maintenance activities",
      ],
      tags: ["ASP.NET", "C#", "SQL Server", "Full-Stack"],
    },
    {
      role: "Customer Support Agent",
      company: "Falcon Solutions",
      date: "Jul 2023 – Nov 2023",
      description:
        "Handled customer queries and provided timely issue resolution in a fast-paced support environment.",
      achievements: [
        "Handled customer queries and technical issues",
        "Developed communication and problem-solving skills",
        "Worked with performance and service targets",
      ],
      tags: ["Customer Support", "Communication", "Problem Solving"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative border-t border-white/[0.04] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-blue-500">03</span>
            <span className="h-px w-8 bg-blue-500/40" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Experience
            </p>
          </div>

          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            My professional{" "}
            <span className="text-neutral-500">journey.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-blue-500/40 via-white/[0.08] to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-blue-500 bg-[#0a0a0b]" />

                {/* Content */}
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-blue-400">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-600">
                    <CalendarDays size={14} />
                    {exp.date}
                  </div>
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs text-neutral-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-3 text-sm leading-relaxed text-neutral-500"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-500/60" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
