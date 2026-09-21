import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Code2,
  Database,
  Sparkles,
  Terminal,
  Braces,
  Cpu,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[10%] top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">

        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm text-blue-600 dark:text-blue-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Open to opportunities
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Muhammad
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Abdullah Rashid
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-700 dark:text-gray-200 sm:text-3xl">
            Backend Developer
            <span className="text-blue-500"> & </span>
            AI Enthusiast
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500 dark:text-gray-400">
            Software Engineering student building practical applications
            with ASP.NET, C#, and SQL Server while exploring Python and
            AI-powered solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-medium text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              View My Work
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="/Abdullah Rashid cv.pdf"
              download
              className="rounded-full border border-slate-200 px-6 py-3.5 font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-white/15 dark:text-gray-200 dark:hover:bg-white/10"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-slate-400 dark:text-gray-500">
            <MapPin size={16} />
            Karachi, Pakistan
          </div>
        </motion.div>


        {/* ================= RIGHT VISUAL ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto hidden h-[540px] w-full max-w-[560px] lg:block"
        >

          {/* ===== GLOW ===== */}

          <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[90px]" />


          {/* ===== ORBIT 1 ===== */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-500/30"
          >
            {/* orbit dot */}
            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,1)]" />
          </motion.div>


          {/* ===== ORBIT 2 ===== */}

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-400/30"
          >
            <div className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,1)]" />
          </motion.div>


          {/* ===== ORBIT 3 ===== */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/40 border-dashed"
          >
            <div className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(96,165,250,1)]" />
          </motion.div>


          {/* ===== CENTER ===== */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 z-10 flex h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2.5rem] border border-blue-400/40 bg-white/90 shadow-[0_0_80px_rgba(59,130,246,0.2)] backdrop-blur-xl dark:bg-[#0b1220]/95"
          >

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/10"
            >
              <Code2
                size={40}
                className="text-blue-500"
              />
            </motion.div>

            <h3 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
              AR
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-gray-400">
              Software Engineer
            </p>

            <div className="mt-3 flex items-center gap-2 text-xs text-green-500">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Building
            </div>
          </motion.div>


          {/* ===== ASP.NET CARD ===== */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-16 z-20 rounded-2xl border border-blue-500/20 bg-white/95 p-4 shadow-2xl dark:bg-[#111827]/95"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-500/10 p-3">
                <Database
                  size={21}
                  className="text-blue-500"
                />
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Backend
                </p>

                <p className="font-semibold text-slate-800 dark:text-white">
                  ASP.NET
                </p>
              </div>
            </div>
          </motion.div>


          {/* ===== AI CARD ===== */}

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 left-0 z-20 rounded-2xl border border-cyan-500/20 bg-white/95 p-4 shadow-2xl dark:bg-[#111827]/95"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/10 p-3">
                <Sparkles
                  size={21}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Exploring
                </p>

                <p className="font-semibold text-slate-800 dark:text-white">
                  AI + Python
                </p>
              </div>
            </div>
          </motion.div>


          {/* ===== CODE CARD ===== */}

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-8 right-8 z-20 rounded-xl border border-blue-500/20 bg-[#0b1220] px-4 py-3 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <Terminal
                size={18}
                className="text-blue-400"
              />

              <span className="font-mono text-sm text-blue-400">
                &lt;coding /&gt;
              </span>
            </div>
          </motion.div>


          {/* ===== FLOATING ICONS ===== */}

          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute left-16 top-24 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10"
          >
            <Braces
              size={22}
              className="text-blue-500"
            />
          </motion.div>


          <motion.div
            animate={{
              y: [0, 12, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
            className="absolute bottom-8 right-28 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10"
          >
            <Cpu
              size={22}
              className="text-cyan-400"
            />
          </motion.div>


          {/* ===== PARTICLES ===== */}

          <motion.span
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute left-20 bottom-36 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)]"
          />

          <motion.span
            animate={{
              scale: [1, 1.7, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="absolute right-20 top-28 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]"
          />

        </motion.div>
      </div>


      {/* Scroll */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 transition hover:text-blue-500 dark:text-gray-500"
      >
        <ArrowDown size={22} />
      </motion.a>

    </section>
  );
}

export default Hero;