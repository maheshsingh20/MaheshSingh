import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowDown } from "lucide-react";
import { profile } from "../data";
import profilePic from "../assets/Mahesh.png";

const GH = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LI = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

      {/* Dark mode: deep space bg */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0f]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.07]"
        style={{ backgroundImage: "linear-gradient(#6366f1 1px,transparent 1px),linear-gradient(90deg,#6366f1 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Glow orbs */}
      <div className="absolute -z-10 top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-indigo-600/20 dark:bg-indigo-600/15 blur-[120px]" />
      <div className="absolute -z-10 bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-400/15 dark:bg-cyan-400/10 blur-[100px]" />
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-violet-500/10 blur-[80px]" />

      <div className="max-w-6xl mx-auto px-6 py-24 w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Left — Text */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>

          {/* Badge */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6
              bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400
              border border-indigo-200 dark:border-indigo-500/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-gray-900 dark:text-white">
            Mahesh<br />
            <span className="grad-text">Singh</span>
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <div className="h-px flex-1 max-w-[40px] bg-gradient-to-r from-indigo-500 to-transparent" />
            <p className="text-lg font-semibold text-gray-500 dark:text-gray-400">Software Engineer</p>
          </div>

          <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed text-sm max-w-md">
            Building distributed systems at <span className="text-indigo-500 font-semibold">Capgemini</span> serving 10k+ users.
            Codeforces Expert with peak rating <span className="text-cyan-500 font-semibold">1859</span> — Top 1% globally.
          </p>

          {/* Location / phone */}
          <div className="mt-5 flex flex-wrap gap-4 text-xs text-gray-400 dark:text-gray-500">
            <span className="flex items-center gap-1.5"><MapPin size={12} className="text-indigo-400" />{profile.location}</span>
            <a href={`tel:${profile.phone}`} className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
              <Phone size={12} className="text-indigo-400" />{profile.phone}
            </a>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm
                bg-gray-900 dark:bg-white text-white dark:text-gray-900
                hover:shadow-xl hover:shadow-gray-900/20 dark:hover:shadow-white/10
                hover:-translate-y-0.5 transition-all duration-200">
              <GH /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm
                bg-gradient-to-r from-indigo-500 to-indigo-600 text-white
                hover:shadow-xl hover:shadow-indigo-500/30
                hover:-translate-y-0.5 transition-all duration-200">
              <LI /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm
                border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300
                hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400
                hover:-translate-y-0.5 transition-all duration-200">
              <Mail size={15} /> Email
            </a>
          </div>
        </motion.div>

        {/* Right — Avatar card */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center gap-8">

          {/* Avatar ring */}
          <div className="relative float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 blur-xl opacity-50 scale-110" />
            <div className="relative w-52 h-52 rounded-full p-1 bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-[#0f0f1a]">
                <img src={profilePic} alt="Mahesh Singh" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            {/* CF badge */}
            <div className="absolute -bottom-1 -right-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white text-xs font-bold shadow-lg shadow-indigo-500/40">
              CF 1859
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
            {[
              { label: "CF Rating", value: "1859", color: "from-indigo-500 to-violet-500" },
              { label: "Global Rank", value: "#77", color: "from-cyan-500 to-blue-500" },
              { label: "Top", value: "1%", color: "from-pink-500 to-rose-500" },
            ].map(s => (
              <div key={s.label}
                className="relative overflow-hidden text-center p-4 rounded-2xl
                  bg-white dark:bg-white/5 border border-gray-100 dark:border-white/8
                  shadow-sm hover:shadow-md dark:hover:shadow-indigo-500/10
                  hover:-translate-y-1 transition-all duration-200">
                <div className={`text-2xl font-black bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>{s.value}</div>
                <div className="text-[10px] text-gray-400 mt-1 font-medium">{s.label}</div>
                <div className="shimmer absolute inset-0 rounded-2xl" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
