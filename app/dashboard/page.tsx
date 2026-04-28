"use client"

import Link from "next/link"
import { DashboardNavbar } from "@/components/dashboard-navbar"
import { Stepper } from "@/components/stepper"
import { StepContent } from "@/components/step-content"
import { ChatPanel } from "@/components/chat-panel"
import MythVsFact from "@/components/myth-vs-fact"
import { useUser, Step } from "@/context/user-context"
import { Vote } from "lucide-react"

const stepMap: Record<number, Step> = {
  1: "registration",
  2: "voting",
  3: "counting",
}

export default function DashboardPage() {
  const { stepNumber, setStepNumber, setCurrentStep, userType } = useUser()

  const handleNextStep = () => {
    if (stepNumber < 3) {
      const newStep = stepNumber + 1
      setStepNumber(newStep)
      setCurrentStep(stepMap[newStep])
    } else {
      setStepNumber(1)
      setCurrentStep("registration")
    }
  }

  const handleStepClick = (step: number) => {
    setStepNumber(step)
    setCurrentStep(stepMap[step])
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <DashboardNavbar />

      <div className="border-b border-border bg-card/50 py-6">
        <div className="mx-auto max-w-6xl px-4">
          <Stepper currentStep={stepNumber} onStepClick={handleStepClick} />
        </div>
      </div>

      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="min-h-[500px] lg:min-h-[600px]">
              <StepContent step={stepNumber} onNextStep={handleNextStep} />
            </div>
            <div className="min-h-[500px] lg:min-h-[600px]">
              <ChatPanel userType={userType} currentStep={stepNumber} />
            </div>
          </div>

          {/* Navigation to Simulation */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/simulation"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-primary-foreground font-medium transition-all hover:opacity-90 hover:shadow-lg shadow-lg shadow-primary/25"
            >
              <Vote className="h-5 w-5" />
              Try Voting Simulation
            </Link>
          </div>

          {/* Myth vs Fact Section */}
          <div className="mt-12">
            <MythVsFact embedded />
          </div>
        </div>
      </main>
    </div>
  )
}
