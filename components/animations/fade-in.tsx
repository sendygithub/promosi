"use client";

import * as React from "react";
import { motion } from "framer-motion";

function FadeIn({
  children,
  delay = 0,
  fullWidth = false,
}: {
  children: React.ReactNode;
  delay?: number;
  fullWidth?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className={fullWidth ? "h-full w-full" : undefined}
    >
      {children}
    </motion.div>
  );
}

export { FadeIn };
