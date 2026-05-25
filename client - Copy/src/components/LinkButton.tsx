import { Link } from "wouter";
import { Button } from "./ui/button";
import { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "secondary" | "destructive";
}

export function LinkButton({ href, children, className, variant = "default" }: LinkButtonProps) {
  return (
    <Link href={href} asChild>
      <Button className={className} variant={variant}>
        {children}
      </Button>
    </Link>
  );
}
