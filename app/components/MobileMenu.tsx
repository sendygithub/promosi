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
import { Menu, ArrowRight } from "lucide-react";

interface MobileMenuProps {
  navLinks: { name: string; href: string }[];
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-[#1C69D4]/10"
            >
              <Menu className="w-6 h-6" />
            </Button>
          }
        />
        <SheetContent
          side="right"
          className="bg-black border-white/[0.06] p-0 text-white w-full sm:w-[350px]"
        >
          <SheetHeader className="p-8 border-b border-white/[0.06]">
            <SheetTitle className="text-left text-2xl font-semibold text-white tracking-tight">
              PRISMA
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
                className="flex items-center justify-between text-xl font-medium group hover:text-[#1C69D4] transition-colors"
              >
                {link.name}
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
              </motion.a>
            ))}

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-10 space-y-4"
            >
              <p className="text-[#A8B0BC]/50 text-[11px] font-semibold uppercase tracking-[0.1em]">
                Ready to Start?
              </p>
              <Button className="w-full bg-[#1C69D4] text-white hover:bg-[#1C69D4]/90 font-medium py-6 text-[15px] rounded-sm">
                GET QUOTE
              </Button>
            </motion.div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
