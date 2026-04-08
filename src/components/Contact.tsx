import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { profile } from "../data";
import { SectionTitle } from "./Skills";
import SectionBg from "./SectionBg";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    gradient: "from-red-500 to-rose-500",
    bg: "bg-red-50 dark:bg-red-500/10",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "maheshsingh20",
    href: profile.github,
    gradient: "from-gray-700 to-gray-900",
    bg: "bg-gray-100 dark:bg-white/5",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "maheshsingh20",
    href: profile.linkedin,
    gradient: "from-blue-500 to-blue-700",
    bg: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    gradient: "from-green-500 to-emerald-500",
    bg: "bg-green-50 dark:bg-green-500/10",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-gray-50/80 dark:bg-[#0d0d14] relative overflow-hidden">
      <SectionBg delay="7.5s" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <SectionTitle title="Get In Touch" subtitle="Let's connect" />

        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-6 text-gray-500 dark:text-gray-400 text-base max-w-md mx-auto">
          Open to new opportunities, collaborations, or just a good tech chat.
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {contactLinks.map((l, i) => (
            <motion.a key={l.label} href={l.href} target="_blank" rel="noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group flex items-center gap-4 p-5 rounded-2xl text-left
                bg-white dark:bg-white/[0.03]
                border border-gray-100 dark:border-white/[0.06]
                hover:border-indigo-200 dark:hover:border-indigo-500/20
                hover:shadow-xl hover:shadow-indigo-500/10
                transition-all duration-300">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${l.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                <l.icon size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{l.label}</p>
                <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mt-0.5">{l.value}</p>
              </div>
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
