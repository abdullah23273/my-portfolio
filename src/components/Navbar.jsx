import { useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowUpRight,
} from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-300 ${
        darkMode
          ? "border-white/10 bg-[#070b14]/80"
          : "border-slate-200/80 bg-white/80"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          className={`text-xl font-bold tracking-tight ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          ABDULLAH
          <span className="text-blue-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition ${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">

          

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
          >
            Let's Connect
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">


          

        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`border-t px-6 py-6 md:hidden ${
            darkMode
              ? "border-white/10 bg-[#070b14]"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-medium transition ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-blue-600 px-5 py-3 text-center font-medium text-white transition hover:bg-blue-500"
            >
              Let's Connect
            </a>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;