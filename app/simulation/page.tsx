import Link from "next/link"
import { VotingSimulation } from "@/components/voting-simulation"
import { ArrowLeft } from "lucide-react"

export default function SimulationPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-lg px-4 pt-4">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>
      <VotingSimulation />
    </div>
  )
}
