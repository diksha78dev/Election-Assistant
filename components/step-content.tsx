"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"

interface StepContentProps {
  step: number
  onNextStep: () => void
}

const stepData = {
  1: {
    title: "Voter Registration",
    description:
      "Before you can vote, you need to register. This process ensures that you are eligible to participate in elections and that your vote is counted.",
    bullets: [
      "Check your eligibility requirements",
      "Gather required documents (ID, proof of residence)",
      "Submit your registration form online or in person",
      "Verify your registration status before the deadline",
    ],
    buttonText: "Continue to Voting",
  },
  2: {
    title: "Casting Your Vote",
    description:
      "Once registered, you can cast your vote. Understanding the voting process helps ensure your voice is heard in the democratic process.",
    bullets: [
      "Find your polling location",
      "Review the candidates and ballot measures",
      "Understand different voting methods available",
      "Know your rights as a voter",
    ],
    buttonText: "Continue to Counting",
  },
  3: {
    title: "Vote Counting Process",
    description:
      "After polls close, votes are counted and verified. Understanding this process builds confidence in election integrity.",
    bullets: [
      "Learn how votes are securely collected",
      "Understand the verification process",
      "See how results are certified",
      "Know the timeline for official results",
    ],
    buttonText: "Complete Journey",
  },
}

export function StepContent({ step, onNextStep }: StepContentProps) {
  const data = stepData[step as keyof typeof stepData]

  return (
    <div className="flex h-full flex-col rounded-2xl bg-card p-6 shadow-sm border border-border">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-foreground mb-4">{data.title}</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {data.description}
        </p>

        <div className="space-y-3">
          {data.bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground">{bullet}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onNextStep}
        className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-primary-foreground font-medium transition-all hover:opacity-90 hover:shadow-lg"
      >
        {data.buttonText}
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  )
}
