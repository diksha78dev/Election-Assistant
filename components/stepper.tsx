"use client"

import { Check, ClipboardList, Vote, BarChart3 } from "lucide-react"

interface StepperProps {
  currentStep: number
}

const steps = [
  { id: 1, label: "Registration", icon: ClipboardList },
  { id: 2, label: "Voting", icon: Vote },
  { id: 3, label: "Counting", icon: BarChart3 },
]

export function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      {steps.map((step, index) => {
        const isCompleted = currentStep > step.id
        const isCurrent = currentStep === step.id
        const Icon = step.icon

        return (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 transition-all ${
                  isCompleted
                    ? "border-primary bg-primary text-primary-foreground"
                    : isCurrent
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-card text-muted-foreground"
                }`}
              >
                {isCompleted ? (
                  <Check className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </div>
              <span
                className={`text-xs sm:text-sm font-medium ${
                  isCompleted || isCurrent
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`mx-2 sm:mx-4 h-0.5 w-8 sm:w-16 lg:w-24 ${
                  currentStep > step.id ? "bg-primary" : "bg-border"
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
