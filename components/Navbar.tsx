"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D] border-b-4 border-[#FFD700] shadow-[0_4px_0_#FFD700]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-comic-title text-2xl text-[#FFD700] drop-shadow-[2px_2px_0_#0D0D0D] select-none"
          style={{ fontFamily: "'Bangers', cursive", letterSpacing: "0.08em" }}
        >
          CDH<span className="text-white">.</span>
        </motion.button>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-1 items-center">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`nav-link px-3 py-1 rounded transition-colors ${
                  scrolled ? "text-white hover:text-[#FFD700]" : "text-[#0D0D0D] hover:text-[#E63946]"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <motion.a
              href="mailto:chankaherath2001@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="cel-btn ml-4 px-5 py-2 bg-[#FFD700] text-[#0D0D0D] rounded"
            >
              Hire Me!
            </motion.a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className={`block w-7 h-[3px] ${scrolled ? "bg-white" : "bg-[#0D0D0D]"}`}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`block w-7 h-[3px] ${scrolled ? "bg-white" : "bg-[#0D0D0D]"}`}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className={`block w-7 h-[3px] ${scrolled ? "bg-white" : "bg-[#0D0D0D]"}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D0D0D] border-t-4 border-[#FFD700] overflow-hidden"
          >
            <ul className="flex flex-col py-4">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-6 py-3 text-white nav-link hover:text-[#FFD700] hover:bg-white/5"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
