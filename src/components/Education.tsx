import { motion } from "framer-motion";
import { GraduationCap, Award, Users, Trophy } from "lucide-react";
import { education, certifications, achievements, leadership } from "../data";
import { SectionTitle } from "./Skills";

function Card({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`p-6 rounded-2xl bg-white dark:bg-white/[0.03]
        border border-gray-100 dark:border-white/[0.06]
        hover:border-indigo-200 dark:hover:border-indigo-500/20
        hover:shadow-xl hover:shadow-indigo-500/10
        transition-all duration-300 ${className}`}>
      {children}
    </motion.div>
  );
}

function CardHeader({ icon: Icon, label, color }: { icon: React.ElementType; label: string; color: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className={`p-2.5 rounded-xl ${color}`}>
        <Icon size={18} className="text-white" />
      </div>
      <h3 className="text-base font-bold text-gray-900 dark:text-white">{label}</h3>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-28 bg-white dark:bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Education & More" subtitle="Background & achievements" />

        <div className="mt-14 grid md:grid-cols-2 gap-5">

          {/* Education */}
          <Card delay={0}>
            <CardHeader icon={GraduationCap} label="Education" color="bg-gradient-to-br from-indigo-500 to-violet-500" />
            <div className="space-y-1">
              <p className="font-bold text-gray-900 dark:text-white">{education.institution}</p>
              <p className="text-sm text-indigo-500 dark:text-indigo-400 font-semibold">{education.degree}</p>
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="px-3 py-1 text-xs rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold border border-indigo-100 dark:border-indigo-500/20">
                  {education.gpa}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 font-medium">
                  {education.period}
                </span>
              </div>
            </div>
          </Card>

          {/* Achievements */}
          <Card delay={0.1}>
            <CardHeader icon={Trophy} label="Achievements" color="bg-gradient-to-br from-yellow-400 to-orange-500" />
            <ul className="space-y-3">
              {achievements.map((a, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span className="text-yellow-500 shrink-0 text-base">🏆</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Certifications */}
          <Card delay={0.2}>
            <CardHeader icon={Award} label="Certifications" color="bg-gradient-to-br from-emerald-500 to-teal-500" />
            <ul className="space-y-4">
              {certifications.map((c, i) => (
                <li key={i} className="flex gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <span className="text-emerald-500 text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug">{c.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{c.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          {/* Leadership */}
          <Card delay={0.3}>
            <CardHeader icon={Users} label="Leadership" color="bg-gradient-to-br from-purple-500 to-pink-500" />
            <p className="font-bold text-sm text-gray-900 dark:text-white">{leadership.org}</p>
            <p className="text-xs text-purple-500 dark:text-purple-400 font-semibold mt-0.5 mb-4">
              {leadership.role} · {leadership.period}
            </p>
            <ul className="space-y-2.5">
              {leadership.points.map((p, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-purple-500" />
                  {p}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
