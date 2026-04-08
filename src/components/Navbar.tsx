import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../ThemeContext";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-white/90 dark:bg-[#0a0a0f]/90 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/30 border-b border-gray-200/50 dark:border-white/5"
        : "bg-transparent"
      }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#about" className="group flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-xs font-black shadow-lg group-hover:scale-110 transition-transform">
            M
          </div>
          <span className="text-lg font-black grad-text">MS.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setActive(l.toLowerCase())}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${active === l.toLowerCase()
                    ? "text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                  }`}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            style={{ background: theme === "dark" ? "linear-gradient(135deg,#1e1b4b,#0f172a)" : "linear-gradient(135deg,#e0e7ff,#bfdbfe)" }}
            aria-label="Toggle theme"
          >
            <span className={`absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${theme === "dark" ? "left-7 bg-indigo-500" : "left-0.5 bg-white"
              }`}>
              {theme === "dark"
                ? <Moon size={13} className="text-white" />
                : <Sun size={13} className="text-yellow-500" />}
            </span>
          </button>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="bg-white/95 dark:bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-white/5 px-6 py-4">
          <ul className="flex flex-col gap-1">
            {links.map(l => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium rounded-lg text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
