import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Database,
  Globe,
  LockKeyhole,
  Scissors,
  Sparkles,
} from "lucide-react";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Urban Blade Barber Studio",
      category: "Client-Style Business Website",
      description:
        "A premium, responsive barber shop website designed as a real-world client project with modern UI, service presentation, gallery, testimonials, booking CTAs, and contact information.",
      technologies: [
        "React.js",
        "Vite",
        "JavaScript",
        "Tailwind CSS",
        "Lucide React",
      ],
      features: [
        "Responsive premium barber website",
        "Services and pricing showcase",
        "Gallery and customer testimonials",
        "Booking and contact CTAs",
      ],
      icon: Scissors,
      type: "Client Project",
      link: "https://urban-blade-website.vercel.app/",
    },
    {
      number: "02",
      title: "LUMÉ AESTHETICS",
      category: "Premium Medical Aesthetics Website",
      description:
    "A luxury, conversion-focused aesthetics clinic website designed to showcase treatments, specialists, results, testimonials, and consultation booking through a refined editorial-style experience.",
      technologies: [
        "React.js",
    "Vite",
    "JavaScript",
    "Tailwind CSS",
    "Lucide React",
      ],
      features: [
        "Luxury editorial-style UI",
    "Treatment and specialist showcase",
    "Before & after results section",
    "Consultation-focused CTAs",
      ],
      icon: Sparkles,
      type: "Client Project",
      link: "https://lumeaesthetics-one.vercel.app/",
    },
    {
      number: "03",
      title: "Customer Complaint Management System",
      category: "Full-Stack Web Application",
      description:
        "A database-driven complaint management system designed to register, track, route, and manage customer complaints efficiently.",
      technologies: [
        "ASP.NET Web Forms",
        "C#",
        "SQL Server",
      ],
      features: [
        "Complaint registration and tracking",
        "Department-based complaint routing",
        "Structured SQL Server database",
        "Reduced manual complaint processing",
      ],
      icon: Globe,
      type: "Academic / Professional Project",
      link: "https://github.com/abdullah23273",
    },
    {
      number: "04",
      title: "Intern Attendance Management System",
      category: "Web Application",
      description:
        "A secure attendance management system developed to digitally track intern attendance and simplify administrative reporting.",
      technologies: [
        "ASP.NET",
        "C#",
        "SQL Server",
      ],
      features: [
        "Login-based access",
        "Digital attendance tracking",
        "Automated attendance reports",
        "Improved record accuracy",
      ],
      icon: Database,
      type: "Academic / Professional Project",
      link: "https://github.com/abdullah23273",
    },
  ];

  return (
    <section
      id="projects"
      className="relative px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
              Selected Work
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Projects I've
              <span className="text-blue-500"> built.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Practical software projects and real-world web experiences
              developed using modern web, backend, and database technologies.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            4 Featured Projects
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl border bg-white/[0.03] p-7 transition duration-300 sm:p-9 ${
                  project.number === "01"
                    ? "border-blue-500/30 hover:border-blue-500/50"
                    : "border-white/10 hover:border-blue-500/30"
                }`}
              >

                {/* Featured Glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl transition duration-500 ${
                    project.number === "01"
                      ? "bg-blue-600/15 group-hover:bg-blue-600/25"
                      : "bg-blue-600/10 group-hover:bg-blue-600/20"
                  }`}
                />

                {/* Featured Badge */}
                {project.number === "01" }

                {/* Top Row */}
                <div className="relative flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10">
                    <Icon
                      size={25}
                      className="text-blue-500"
                    />
                  </div>

                  <span
                    className={`text-5xl font-bold ${
                      project.number === "01"
                        ? "text-blue-500/10"
                        : "text-white/5"
                    }`}
                  >
                    {project.number}
                  </span>

                </div>

                {/* Category */}
                <p className="relative mt-8 text-sm font-medium text-blue-400">
                  {project.category}
                </p>

                {/* Title */}
                <h3 className="relative mt-2 text-2xl font-bold text-white sm:text-3xl">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="relative mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="relative mt-7 border-t border-white/10 pt-6">

                  <p className="mb-4 text-sm font-medium text-gray-300">
                    Key Features
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex gap-2 text-sm text-gray-500"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom */}
                <div className="relative mt-8 flex items-center justify-between border-t border-white/10 pt-6">

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <LockKeyhole size={15} />
                    {project.type}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white transition group-hover:text-blue-400"
                  >
                    View Details
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                </div>

              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Projects;