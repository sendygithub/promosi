"use client";

import Link from "next/link";
import {
  Search, Filter, Replace, SplitSquareHorizontal,
  GitBranch, Database, FileDigit, BoxSelect, ArrowRight
} from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { AnimatedCard } from "@/components/ui/animated-card";

const modules = [
  {
    title: "Data Search",
    href: "/tutorial/caridata",
    description: "Learn how to find elements efficiently using linear and binary search techniques.",
    icon: <Search size={24} />,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Filtering",
    href: "/tutorial/filtering",
    description: "Master the art of extracting specific data sets based on complex criteria.",
    icon: <Filter size={24} />,
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    title: "Transformation",
    href: "/tutorial/transformation",
    description: "Understand array methods like map and reduce to transform data structures.",
    icon: <Replace size={24} />,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Decomposition",
    href: "/tutorial/dekomposisi",
    description: "Break down complex problems into manageable, smaller functions.",
    icon: <SplitSquareHorizontal size={24} />,
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    title: "Control Flow",
    href: "/tutorial/ifelse",
    description: "Navigate conditional logic and decision trees using if/else statements.",
    icon: <GitBranch size={24} />,
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  },
  {
    title: "Zustand State",
    href: "/tutorial/zustand",
    description: "Global state management simplified with the modern Zustand library.",
    icon: <Database size={24} />,
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  },
  {
    title: "Component State",
    href: "/tutorial/usestate",
    description: "Local component state management using React's useState hook.",
    icon: <BoxSelect size={24} />,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  },
  {
    title: "Input Validation",
    href: "/tutorial/inputvalidation",
    description: "Ensure data integrity by validating user inputs before processing.",
    icon: <FileDigit size={24} />,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10"
  }
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto w-full pb-20">
      <div className="mb-12 mt-4 px-2">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
            <span className="text-xs font-semibold tracking-wide uppercase">Curriculum</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Interactive Modules</h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xl text-muted-foreground w-full max-w-2xl font-light">
            Select a module below to begin interactive training. Each section contains visual examples and hands-on algorithm exercises.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-2">
        {modules.map((mod, i) => (
          <FadeIn key={mod.title} delay={0.1 + (i % 4) * 0.1} fullWidth>
            <Link href={mod.href} className="block h-full cursor-none">
              <AnimatedCard className="interactive h-full flex flex-col justify-between">
                <div>
                  <div className={`p-4 w-fit rounded-2xl mb-6 shadow-sm ${mod.bg} ${mod.color}`}>
                    {mod.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{mod.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{mod.description}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/50 flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Enter Interactive Lab <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </AnimatedCard>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}