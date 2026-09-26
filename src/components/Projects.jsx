
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Database,
  Globe,
  Scissors,
  Sparkles,
  ExternalLink,
} from "lucide-react";

import urbanBladePreview from "../assets/urban-blade.png";
import lumePreview from "../assets/lume-aesthetics.png";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Urban Blade Barber Studio",
      category: "Client Business Website",
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
      preview: urbanBladePreview,
      featured: true,
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
      preview: lumePreview,
      featured: true,
    },

    {
      number: "03",
      title: "Customer Complaint Management System",
      category: "Full-Stack Web Application",
      description:
        "A database-driven complaint management system designed to register, track, route, and manage customer complaints efficiently.",
      technologies: ["ASP.NET Web Forms", "C#", "SQL Server"],
      features: [
        "Complaint registration and tracking",
        "Department-based complaint routing",
        "Structured SQL Server database",
        "Reduced manual complaint processing",
      ],
      icon: Globe,
      type: "Academic / Professional Project",
      link: "https://github.com/abdullah23273",
      featured: false,
    },

    {
      number: "04",
      title: "Intern Attendance Management System",
      category: "Web Application",
      description:
        "A secure attendance management system developed to digitally track intern attendance and simplify administrative reporting.",
      technologies: ["ASP.NET", "C#", "SQL Server"],
      features: [
        "Login-based access",
        "Digital attendance tracking",
        "Automated attendance reports",
        "Improved record accuracy",
      ],
      icon: Database,
      type: "Academic / Professional Project",
      link: "https://github.com/abdullah23273",
      featured: false,
    },
  ];

  const featured = projects.filter((project) => project.featured);
  const other = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="relative border-t border-white/[0.04] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-blue-500">
                04
              </span>

              <span className="h-px w-8 bg-blue-500/40" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                Selected Work
              </p>
            </div>

            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Projects I've{" "}
              <span className="text-neutral-500">built.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-neutral-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            {projects.length} Featured Projects
          </div>
        </motion.div>

        {/* Featured Projects */}
        <div className="mt-16 space-y-20">
          {featured.map((project, index) => {
            const Icon = project.icon;
            const reversed = index % 2 === 1;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="group"
              >
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                    reversed
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >

                  {/* Website Preview */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]"
                  >
                    {/* Website Screenshot */}
                    <img
                      src={project.preview}
                      alt={`${project.title} website preview`}
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/5" />

                    {/* Subtle Blue Hover Glow */}
                    <div className="absolute inset-0 bg-blue-600/0 transition-all duration-500 group-hover:bg-blue-600/[0.04]" />

                    {/* Project Number */}
                    <div className="absolute bottom-5 left-6">
                      <span className="font-display text-6xl font-bold text-white/10 transition-all duration-500 group-hover:text-white/20">
                        {project.number}
                      </span>
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10">
                      <Icon
                        size={22}
                        className="text-blue-400"
                      />
                    </div>

                    {/* View Live Site */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex translate-y-4 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ExternalLink size={15} />
                        View Live Site
                      </span>
                    </div>

                    {/* Preview Border Glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-all duration-500 group-hover:border-blue-500/30" />
                  </a>

                  {/* Project Information */}
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-blue-400">
                      {project.category}
                    </p>

                    <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mt-6 grid gap-2 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex gap-2 text-xs text-neutral-500"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-500/60" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-7 flex items-center gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition-all duration-300 hover:bg-blue-500 hover:text-white"
                      >
                        Live Website

                        <ArrowUpRight
                          size={15}
                          className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        />
                      </a>

                      <span className="font-mono text-xs text-neutral-600">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Other Projects */}
        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {other.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.03] sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/[0.06]">
                    <Icon
                      size={20}
                      className="text-blue-500"
                    />
                  </div>

                  <span className="font-display text-2xl font-bold text-white/[0.06]">
                    {project.number}
                  </span>
                </div>

                <p className="mt-6 font-mono text-xs uppercase tracking-wider text-blue-400">
                  {project.category}
                </p>

                <h3 className="mt-2 font-display text-lg font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2 py-0.5 font-mono text-xs text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
                  <span className="font-mono text-xs text-neutral-600">
                    {project.type}
                  </span>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-neutral-300 transition-colors group-hover:text-blue-400"
                  >
                    View Details

                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
