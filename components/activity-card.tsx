import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ActivityCardProps {
  title: string
  description: string
  href: string
  tags: string[]
}

export function ActivityCard({ title, description, href, tags }: ActivityCardProps) {
  return (
    <div className="glass-panel p-6 glow-accent hover:border-primary/50 smooth-transition group">
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={href}
        className="inline-flex items-center gap-2 text-primary hover:text-secondary smooth-transition font-medium"
      >
        Open Activity
        <ArrowRight size={16} className="group-hover:translate-x-1 smooth-transition" />
      </Link>
    </div>
  )
}
