import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, Terminal, Database, Cpu, Code as Code2 } from "lucide-react";

function Hero() {
  const techBadges = [
    { label: "ASP.NET", icon: Code2 },
    { label: "C#", icon: Terminal },
    { label: "SQL Server", icon: Database },
    { label: "Python", icon: Cpu },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* Subtle grid background */}
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-40" />
      {/* Subtle blue glow */}
      <div className="pointer-events-none absolute right-[-10%] top-1/3 -z-10 h-[600px] w-[600px] rounded-full bg-blue-600/[0.07] blur-[140px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium tracking-wide text-neutral-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Open to opportunities
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Abdullah
            <br />
            <span className="text-neutral-500">Rashid</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-400">
            Software Engineering student building practical applications
            with <span className="text-neutral-200">ASP.NET, C#, and SQL Server</span>{" "}
            while exploring <span className="text-neutral-200">Python and AI-powered</span> solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20"
            >
              View My Work
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="/Abdullah Rashid cv.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-neutral-300 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04] hover:text-white"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-neutral-500">
            <MapPin size={15} />
            Karachi, Pakistan
          </div>
        </motion.div>

        {/* RIGHT — Developer Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto hidden w-full max-w-[480px] lg:block"
        >
          {/* Terminal Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative rounded-2xl border border-white/[0.08] bg-[#111114] shadow-2xl"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-neutral-700" />
                <span className="h-3 w-3 rounded-full bg-neutral-700" />
                <span className="h-3 w-3 rounded-full bg-neutral-700" />
              </div>
              <span className="ml-2 font-mono text-xs text-neutral-600">developer.ts</span>
            </div>

            {/* Terminal body */}
            <div className="p-5 font-mono text-sm leading-relaxed">
              <p className="text-neutral-600">
                <span className="text-blue-500">const</span>{" "}
                <span className="text-neutral-300">developer</span>{" "}
                <span className="text-neutral-600">=</span>{" "}
                <span className="text-neutral-600">{"{"}</span>
              </p>
              <p className="pl-4 text-neutral-400">
                name<span className="text-neutral-600">:</span>{" "}
                <span className="text-emerald-400">'Abdullah Rashid'</span>,
              </p>
              <p className="pl-4 text-neutral-400">
                role<span className="text-neutral-600">:</span>{" "}
                <span className="text-emerald-400">'Backend Developer'</span>,
              </p>
              <p className="pl-4 text-neutral-400">
                stack<span className="text-neutral-600">:</span> [
                <span className="text-emerald-400">'ASP.NET'</span>,{" "}
                <span className="text-emerald-400">'C#'</span>,{" "}
                <span className="text-emerald-400">'SQL'</span>],
              </p>
              <p className="pl-4 text-neutral-400">
                learning<span className="text-neutral-600">:</span> [
                <span className="text-emerald-400">'Python'</span>,{" "}
                <span className="text-emerald-400">'AI'</span>],
              </p>
              <p className="pl-4 text-neutral-400">
                status<span className="text-neutral-600">:</span>{" "}
                <span className="text-emerald-400">'building'</span>,
              </p>
              <p className="text-neutral-600">
                <span className="text-neutral-600">{"}"}</span>
                <span className="cursor-blink text-blue-500">|</span>
              </p>
            </div>
          </motion.div>

          {/* Floating tech badges */}
          {techBadges.map((tech, index) => {
            const positions = [
              "absolute -left-6 top-8",
              "absolute -right-6 top-20",
              "absolute -left-4 bottom-12",
              "absolute -right-4 bottom-20",
            ];
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className={`${positions[index]} flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#111114] px-3 py-2 shadow-xl`}
              >
                <Icon size={15} className="text-blue-500" />
                <span className="font-mono text-xs text-neutral-300">
                  {tech.label}
                </span>
              </motion.div>
            );
          })}

          {/* Subtle connection line accent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute -bottom-6 left-1/2 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-600 transition hover:text-blue-500"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}

export default Hero;
