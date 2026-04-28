import Link from "next/link"
import { ElectionTimeline } from "@/components/election-timeline"
import { ArrowLeft } from "lucide-react"

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-background p-4">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Election Process
          </h1>
          <p className="text-muted-foreground">
            Track the stages of the electoral cycle
          </p>
        </div>
        <ElectionTimeline currentStep={2} />
      </div>
    </main>
  )
}
