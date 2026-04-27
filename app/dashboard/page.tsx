"use client"

import { useState } from "react"
import { DashboardNavbar } from "@/components/dashboard-navbar"
import { Stepper } from "@/components/stepper"
import { StepContent } from "@/components/step-content"
import { ChatPanel } from "@/components/chat-panel"

export default function DashboardPage() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      setCurrentStep(1)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <DashboardNavbar />

      <div className="border-b border-border bg-card/50 py-6">
        <div className="mx-auto max-w-6xl px-4">
          <Stepper currentStep={currentStep} />
        </div>
      </div>

      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="min-h-[500px] lg:min-h-[600px]">
              <StepContent step={currentStep} onNextStep={handleNextStep} />
            </div>
            <div className="min-h-[500px] lg:min-h-[600px]">
              <ChatPanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
