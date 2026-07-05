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
          ? "md:top-4 md:mx-auto md:max-w-6xl md:rounded-sm border-white/[0.06] bg-[#141619]/80 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] border"
          : "bg-gradient-to-b from-black/80 to-transparent border-b border-transparent"
      }`}
    >
      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#1C69D4] origin-left z-[60]"
        style={{ scaleX }}
      />

      <div className="flex items-center justify-between relative z-10">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-[#1C69D4] flex items-center justify-center font-semibold text-white text-[14px]">
            P
          </div>
          <div className="hidden sm:block">
            <span className="text-[15px] font-semibold text-white tracking-tight">
              Prisma Komputer
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 border border-white/[0.06]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-white"
                  : "text-[#A8B0BC] hover:text-white"
              }`}
            >
              {activeSection === link.href.replace("#", "") && (
                <motion.div
                  layoutId="servis-nav-active"
                  className="absolute inset-0 bg-[#1C69D4]/10 border border-[#1C69D4]/30 -z-10"
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
            <Button className="hidden sm:flex bg-[#1C69D4] text-white hover:bg-[#1C69D4]/90 font-medium rounded-sm px-5 py-2 text-[13px] border-none items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden lg:inline">Konsultasi</span>
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 bg-white/[0.03] border border-white/[0.06] text-[#A8B0BC] hover:text-white hover:bg-white/[0.06] transition-all"
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
          className="md:hidden mt-3 border border-white/[0.06] bg-black/95 backdrop-blur-2xl p-4 shadow-xl"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-3 text-[13px] font-medium transition-all ${
                  activeSection === link.href.replace("#", "")
                    ? "text-white bg-[#1C69D4]/10"
                    : "text-[#A8B0BC] hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                {link.name}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    activeSection === link.href.replace("#", "")
                      ? "rotate-[-90deg] text-[#1C69D4]"
                      : "text-[#A8B0BC]/50"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/[0.06]">
            <Link
              href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20konsultasi%20servis"
              target="_blank"
            >
              <Button className="w-full bg-[#1C69D4] text-white hover:bg-[#1C69D4]/90 font-medium py-5 text-[14px] rounded-sm">
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
