"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Search, Menu, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(navLinks[0].name);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 py-4 ${
        isScrolled
          ? "md:top-4 md:mx-auto md:max-w-5xl md:rounded-full border-white/10 bg-slate-900/60 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d4af37] to-cyan-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block hidden"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.08), transparent 80%)`,
        }}
      />

      <div className="flex items-center justify-between relative z-10">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-[#d4af37] to-blue-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg rotate-3 group-hover:rotate-12 transition-transform duration-300">
            SI
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent tracking-tighter">
            SI SOLUTION
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-2 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => (
            <NavItem
              key={link.name}
              {...link}
              isActive={activeTab === link.name}
              onClick={() => setActiveTab(link.name)}
            />
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex text-slate-400 hover:text-[#d4af37] rounded-full"
          >
            <Search className="w-5 h-5" />
          </Button>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-[#d4af37] to-blue-600 text-slate-950 font-bold rounded-full px-6 shadow-lg shadow-blue-500/20 border-none">
              Konsultasi
            </Button>
          </motion.div>
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </motion.nav>
  );
}

// Minimal Link replacement if not using NextLink in separate files
function Link({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
