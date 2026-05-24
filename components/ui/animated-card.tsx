import * as React from "react";

import { cn } from "@/lib/utils";

function AnimatedCard({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md",
        className
      )}
      {...props}
    />
  );
}

export { AnimatedCard };
