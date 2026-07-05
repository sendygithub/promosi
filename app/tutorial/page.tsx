"use client";

import Link from "next/link";
import {
  Search,
  Filter,
  Replace,
  SplitSquareHorizontal,
  GitBranch,
  Database,
  FileDigit,
  BoxSelect,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const modules = [
  {
    title: "Data Search",
    href: "/tutorial/caridata",
    description:
      "Learn how to find elements efficiently using linear and binary search techniques.",
    icon: <Search size={24} />,
    color: "text-[#1C69D4]",
    bg: "bg-[#1C69D4]/10",
  },
  {
    title: "Filtering",
    href: "/tutorial/filtering",
    description:
      "Master the art of extracting specific data sets based on complex criteria.",
    icon: <Filter size={24} />,
    color: "text-[#1C69D4]",
    bg: "bg-[#1C69D4]/10",
  },
  {
    title: "Transformation",
    href: "/tutorial/transformation",
    description:
      "Understand array methods like map and reduce to transform data structures.",
    icon: <Replace size={24} />,
    color: "text-[#1C69D4]",
    bg: "bg-[#1C69D4]/10",
  },
  {
    title: "Decomposition",
    href: "/tutorial/dekomposisi",
    description:
      "Break down complex problems into manageable, smaller functions.",
    icon: <SplitSquareHorizontal size={24} />,
    color: "text-[#1C69D4]",
    bg: "bg-[#1C69D4]/10",
  },
  {
    title: "Control Flow",
    href: "/tutorial/ifelse",
    description:
      "Navigate conditional logic and decision trees using if/else statements.",
    icon: <GitBranch size={24} />,
    color: "text-[#1C69D4]",
    bg: "bg-[#1C69D4]/10",
  },
  {
    title: "Zustand State",
    href: "/tutorial/zustand",
    description:
      "Global state management simplified with the modern Zustand library.",
    icon: <Database size={24} />,
    color: "text-[#1C69D4]",
    bg: "bg-[#1C69D4]/10",
  },
  {
    title: "Component State",
    href: "/tutorial/usestate",
    description:
      "Local component state management using React's useState hook.",
    icon: <BoxSelect size={24} />,
    color: "text-[#1C69D4]",
    bg: "bg-[#1C69D4]/10",
  },
  {
    title: "Input Validation",
    href: "/tutorial/inputvalidation",
    description:
      "Ensure data integrity by validating user inputs before processing.",
    icon: <FileDigit size={24} />,
    color: "text-[#1C69D4]",
    bg: "bg-[#1C69D4]/10",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-[#A8B0BC] selection:bg-[#1C69D4]/20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full pb-20 px-6">
        <div className="mb-16 pt-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1C69D4]">
              Curriculum
            </span>
            <h1 className="text-[40px] md:text-[64px] font-bold tracking-[-0.02em] leading-[1.05] text-white mt-4 mb-6">
              Interactive Modules
            </h1>
            <p className="text-[15px] text-[#A8B0BC] max-w-2xl leading-relaxed">
              Select a module below to begin interactive training. Each section
              contains visual examples and hands-on algorithm exercises.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={mod.href} className="block h-full">
                <div className="group relative overflow-hidden border border-white/[0.06] bg-[#141619] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.12] h-full flex flex-col justify-between">
                  <div>
                    <div className={`p-4 w-fit mb-6 ${mod.bg} ${mod.color}`}>
                      {mod.icon}
                    </div>
                    <h3 className="text-[17px] font-semibold text-white mb-3 group-hover:text-[#1C69D4] transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-[13px] text-[#A8B0BC] leading-relaxed">
                      {mod.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center text-[12px] font-semibold text-[#A8B0BC]/50 group-hover:text-[#1C69D4] transition-colors">
                    Enter Interactive Lab{" "}
                    <ArrowRight
                      size={14}
                      className="ml-1 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
