import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  ArrowUpRight,
  MapPin,
  Send,
} from "lucide-react";

function Contact() {
  const [status, setStatus] = useState("");

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "abdullahwork72@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=abdullahwork72@gmail.com&su=Project%20Inquiry",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0321-2592621",
      href: "tel:+923212592621",
    },
    {
      icon: ArrowUpRight,
      label: "LinkedIn",
      value: "Muhammad Abdullah Rashid",
      href: "https://www.linkedin.com/in/muhammad-abdullah-rashid-a72647374",
    },
    {
      icon: ArrowUpRight,
      label: "GitHub",
      value: "abdullah23273",
      href: "https://github.com/abdullah23273",
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("Sending...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully.");
        event.target.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Unable to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.04] px-6 py-24 sm:py-32"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.05] blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="font-mono text-xs text-blue-500">05</span>
            <span className="h-px w-8 bg-blue-500/40" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Get In Touch
            </p>
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let's build something{" "}
            <span className="text-neutral-500">meaningful.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-400">
            I'm open to discussing software development opportunities,
            projects, internships, and other professional collaborations.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-12 max-w-2xl"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-500"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-blue-500/50 focus:bg-white/[0.04]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-500"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-blue-500/50 focus:bg-white/[0.04]"
              />
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="subject"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-500"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              required
              placeholder="Project Inquiry"
              className="w-full rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-blue-500/50 focus:bg-white/[0.04]"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-500"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              placeholder="Tell me about your project or opportunity..."
              className="w-full resize-none rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-blue-500/50 focus:bg-white/[0.04]"
            />
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-neutral-600">
              <MapPin size={14} />
              Karachi, Pakistan
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Send Message
              <Send
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
          </div>

          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-center text-sm text-neutral-400"
            >
              {status}
            </motion.p>
          )}
        </motion.form>

        {/* Contact links */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={
                  item.label === "Email" ||
                  item.label === "LinkedIn" ||
                  item.label === "GitHub"
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.label === "Email" ||
                  item.label === "LinkedIn" ||
                  item.label === "GitHub"
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group bg-[#0a0a0b] p-5 transition-colors duration-300 hover:bg-white/[0.02]"
              >
                <Icon
                  size={18}
                  className="text-blue-500 transition-transform duration-300 group-hover:scale-110"
                />
                <p className="mt-3 text-xs uppercase tracking-wider text-neutral-600">
                  {item.label}
                </p>
                <p className="mt-1 truncate text-sm font-medium text-neutral-300 transition-colors group-hover:text-white">
                  {item.value}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
