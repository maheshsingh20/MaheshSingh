import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-[#0a0a0f] border-t border-gray-100 dark:border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-xs font-black">
            M
          </div>
          <span className="text-sm font-bold grad-text">MS.dev</span>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-600">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
