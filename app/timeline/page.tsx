import { ElectionTimeline } from "@/components/election-timeline"

export default function TimelinePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full">
        <h1 className="text-2xl font-bold text-center mb-2 text-foreground">
          Election Process
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Track the stages of the electoral cycle
        </p>
        <ElectionTimeline currentStep={2} />
      </div>
    </main>
  )
}
