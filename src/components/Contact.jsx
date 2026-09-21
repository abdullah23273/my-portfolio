import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

function Contact() {
  const contactLinks = [
    {
  icon: Mail,
  label: "Email",
  value: "abdullahwork72@gmail.com",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=abdullahwork72@gmail.com&su=Project%20Inquiry",
  target: "_blank",
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

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-14 text-center sm:px-12 sm:py-20"
        >

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-500">
            Get In Touch
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="text-blue-500"> meaningful.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I'm open to discussing software development opportunities,
            projects, internships, and other professional collaborations.
          </p>

          {/* Email CTA */}
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullahwork72@gmail.com&su=Project%20Inquiry"
  target="_blank"
  rel="noopener noreferrer"
  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-medium text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
>
  Send Me an Email

  <ArrowUpRight
    size={18}
    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</a>

          {/* Location */}
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <MapPin size={16} />
            Karachi, Pakistan
          </div>

        </motion.div>

        {/* Contact Links */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {contactLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={
                  item.label === "LinkedIn" || item.label === "GitHub"
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.label === "LinkedIn" || item.label === "GitHub"
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                    <Icon
                      size={20}
                      className="text-blue-500"
                    />
                  </div>

                  <div className="min-w-0 text-left">
                    <p className="text-xs text-gray-500">
                      {item.label}
                    </p>

                    <p className="mt-1 truncate text-sm font-medium text-gray-300 group-hover:text-white">
                      {item.value}
                    </p>
                  </div>

                </div>
              </motion.a>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Contact;