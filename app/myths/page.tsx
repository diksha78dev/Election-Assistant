import Link from "next/link"
import MythVsFact from "@/components/myth-vs-fact"
import { ArrowLeft } from "lucide-react"

export default function MythsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
      <MythVsFact />
    </div>
  )
}
