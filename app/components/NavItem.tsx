"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface NavItemProps {
  name: string;
  href: string;
  isActive: boolean;
  onClick: () => void;
}

export default function NavItem({
  name,
  href,
  isActive,
  onClick,
}: NavItemProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    setPosition({ x: (clientX - centerX) * 0.4, y: (clientY - centerY) * 0.4 });
  };

  const resetPosition = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 rounded-full z-10 ${
        isActive ? "text-white" : "text-slate-400 hover:text-[#d4af37]"
      }`}
    >
      {/* Animated Underline / Background */}
      {isActive && (
        <motion.div
          layoutId="nav-active"
          className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/20 to-blue-600/20 border border-[#d4af37]/30 rounded-full -z-10 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative">{name}</span>
    </motion.a>
  );
}
