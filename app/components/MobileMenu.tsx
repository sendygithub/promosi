"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

interface MobileMenuProps {
  navLinks: { name: string; href: string }[];
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-[#d4af37]/10"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-slate-950/95 backdrop-blur-2xl border-white/10 p-0 text-white w-full sm:w-[350px]"
        >
          <SheetHeader className="p-8 border-b border-white/5">
            <SheetTitle className="text-left text-2xl font-black text-white italic tracking-tighter">
              SI SOLUTION
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col p-8 space-y-6">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between text-2xl font-bold group hover:text-[#d4af37] transition-colors"
              >
                {link.name}
                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
              </motion.a>
            ))}

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-10 space-y-4"
            >
              <p className="text-slate-500 text-sm font-medium tracking-[0.2em] uppercase">
                Ready to Start?
              </p>
              <Button className="w-full bg-[#d4af37] text-slate-950 font-black py-8 rounded-2xl text-xl">
                GET QUOTE
              </Button>
            </motion.div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
