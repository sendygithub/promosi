"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Search, Menu, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/showroom" },
  { name: "Pricing", href: "/harga" },
  { name: "Servis", href: "/servis" },
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
          ? "md:top-4 md:mx-auto md:max-w-5xl md:rounded-sm border-white/[0.06] bg-[#141619]/80 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#1C69D4] origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 md:block hidden"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(28, 105, 212, 0.08), transparent 80%)`,
        }}
      />

      <div className="flex items-center justify-between relative z-10">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#1C69D4] flex items-center justify-center font-semibold text-white text-[16px]">
            K
          </div>
          <span className="text-[17px] font-semibold text-white tracking-tight">
            Kia Komputer
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1 bg-white/[0.03] p-1 border border-white/[0.06]">
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
            className="hidden sm:flex text-[#A8B0BC] hover:text-white rounded-sm"
          >
            <Search className="w-5 h-5" />
          </Button>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-[#1C69D4] text-white hover:bg-[#1C69D4]/90 font-medium rounded-sm px-5 text-[13px] border-none">
              Konsultasi
            </Button>
          </motion.div>
          <MobileMenu navLinks={navLinks} />
        </div>
      </div>
    </motion.nav>
  );
}
