"use client";

import * as React from "react";

function SyntaxHighlighter({
  children,
  className,
  customStyle,
}: {
  children: React.ReactNode;
  language?: string;
  style?: unknown;
  customStyle?: React.CSSProperties;
  className?: string;
}) {
  return (
    <pre
      className={className}
      style={{
        margin: 0,
        overflowX: "auto",
        borderRadius: 12,
        background: "#020617",
        color: "#e2e8f0",
        padding: 16,
        fontSize: 13,
        lineHeight: 1.7,
        ...customStyle,
      }}
    >
      <code>{children}</code>
    </pre>
  );
}

const vscDarkPlus = {};

export { SyntaxHighlighter, vscDarkPlus };
