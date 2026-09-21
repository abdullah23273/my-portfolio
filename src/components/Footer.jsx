import { ArrowUp, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050811] px-6">
      <div className="mx-auto max-w-7xl py-10">

        {/* Main footer */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20">
                AR
              </div>

              <div>
                <p className="text-sm font-bold tracking-wide text-white">
                  ABDULLAH<span className="text-blue-500">.</span>
                </p>

                <p className="text-[10px] uppercase tracking-[0.18em] text-gray-500">
                  Software Engineer
                </p>
              </div>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Software Engineering student building practical software
              solutions and exploring AI-powered applications.
            </p>
          </div>


          {/* Quick links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Quick Links
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-3">
              <a
                href="#about"
                className="text-sm text-gray-400 transition hover:text-blue-400"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-sm text-gray-400 transition hover:text-blue-400"
              >
                Skills
              </a>

              <a
                href="#experience"
                className="text-sm text-gray-400 transition hover:text-blue-400"
              >
                Experience
              </a>

              <a
                href="#projects"
                className="text-sm text-gray-400 transition hover:text-blue-400"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-sm text-gray-400 transition hover:text-blue-400"
              >
                Contact
              </a>
            </div>
          </div>


          {/* Social links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Connect
            </p>

            <div className="flex items-center gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/abdullah23273"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition duration-200 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.13c-3.19.69-3.86-1.35-3.86-1.35-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/muhammad-abdullah-rashid-a72647374"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition duration-200 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.68H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V8.98H3.56v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
                </svg>
              </a>


              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullahwork72@gmail.com&su=Project%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition duration-200 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
              >
                <Mail size={18} />
              </a>


              {/* Back to top */}
              <a
                href="#home"
                aria-label="Back to top"
                className="ml-2 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition duration-200 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
              >
                <ArrowUp size={18} />
              </a>

            </div>
          </div>
        </div>


        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Muhammad Abdullah Rashid. All rights reserved.
          </p>

          <p>
            Built with React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;