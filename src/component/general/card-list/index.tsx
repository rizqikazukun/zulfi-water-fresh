import { cn } from "@/front-utils/tailwind-merge";
import { ClassValue } from "clsx";
import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: ClassValue;
}

export default function CardListHorizontal({
  children,
  className,
}: Props): React.ReactNode {
  return <div className={cn("flex", className)}>{children}</div>;
}
