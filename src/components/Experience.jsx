import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";

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
    },
  ];

  return (
    <section
      id="experience"
      className="relative px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Experience
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My professional
            <span className="text-blue-500"> journey.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            A combination of software development, IT support,
            teaching, and customer-facing experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Vertical Line */}
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent sm:block" />

          <div className="space-y-12">

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.role}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="relative sm:pl-14"
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-[#070b14] sm:flex">
                  <BriefcaseBusiness
                    size={17}
                    className="text-blue-500"
                  />
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05] sm:p-8">

                  {/* Header */}
                  <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">

                    <div>
                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        {experience.role}
                      </h3>

                      <p className="mt-1 font-medium text-blue-400">
                        {experience.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <CalendarDays size={16} />
                      {experience.date}
                    </div>

                  </div>

                  {/* Description */}
                  <p className="mt-5 max-w-3xl leading-7 text-gray-400">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <ul className="mt-5 space-y-3">
                    {experience.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-3 text-sm leading-6 text-gray-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;