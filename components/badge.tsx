import type React from "react"
interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "primary" | "secondary"
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-muted text-muted-foreground",
    primary: "bg-primary/20 text-primary border border-primary/30",
    secondary: "bg-secondary/20 text-secondary border border-secondary/30",
  }

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>{children}</span>
  )
}
