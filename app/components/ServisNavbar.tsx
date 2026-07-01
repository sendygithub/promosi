"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navLinks = [
  { name: "Dokumentasi", href: "#dokumentasi" },
  { name: "Layanan", href: "#services" },
  { name: "Keunggulan", href: "#keunggulan" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "FAQ", href: "#faq" },
];

export default function ServisNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-6 py-3 ${
        isScrolled
          ? "md:top-4 md:mx-auto md:max-w-6xl md:rounded-full border-white/10 bg-slate-900/70 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] border"
          : "bg-gradient-to-b from-slate-900/80 to-transparent border-b border-transparent"
      }`}
    >
      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d4af37] to-amber-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      <div className="flex items-center justify-between relative z-10">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-gradient-to-br from-[#d4af37] to-amber-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-[#d4af37]/20 group-hover:rotate-12 transition-transform duration-300">
            P
          </div>
          <div className="hidden sm:block">
            <span className="text-base font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent tracking-tighter">
              Prisma Komputer
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                activeSection === link.href.replace("#", "")
                  ? "text-white"
                  : "text-slate-400 hover:text-[#d4af37]"
              }`}
            >
              {activeSection === link.href.replace("#", "") && (
                <motion.div
                  layoutId="servis-nav-active"
                  className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/20 to-amber-500/20 border border-[#d4af37]/30 rounded-full -z-10 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20konsultasi%20servis"
            target="_blank"
          >
            <Button className="hidden sm:flex bg-gradient-to-r from-[#d4af37] to-amber-500 hover:from-amber-500 hover:to-[#d4af37] text-slate-950 font-bold rounded-full px-5 py-2 text-sm shadow-lg shadow-[#d4af37]/20 border-none items-center gap-2">
              <MessageCircle className="w-4 h-4 fill-current" />
              <span className="hidden lg:inline">Konsultasi</span>
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-3 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-2xl p-4 shadow-xl"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#d4af37] bg-[#d4af37]/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeSection === link.href.replace("#", "")
                      ? "rotate-[-90deg] text-[#d4af37]"
                      : "text-slate-500"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/5">
            <Link
              href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20konsultasi%20servis"
              target="_blank"
            >
              <Button className="w-full bg-gradient-to-r from-[#d4af37] to-amber-500 text-slate-950 font-bold rounded-xl py-6 text-base shadow-lg shadow-[#d4af37]/20">
                <MessageCircle className="w-5 h-5 mr-2 fill-current" />
                Konsultasi Gratis
              </Button>
            </Link>
          </div>
        </motion.div>
      )}

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay" />
    </motion.nav>
  );
}
