"use client"

import { useState } from "react"
import { FileText, Megaphone, Vote, BarChart3, Check } from "lucide-react"

const steps = [
  {
    id: 1,
    label: "Nomination",
    description: "Candidates file nominations",
    icon: FileText,
  },
  {
    id: 2,
    label: "Campaign",
    description: "Public outreach and debates",
    icon: Megaphone,
  },
  {
    id: 3,
    label: "Voting",
    description: "Citizens cast their ballots",
    icon: Vote,
  },
  {
    id: 4,
    label: "Counting",
    description: "Votes are tallied",
    icon: BarChart3,
  },
]

interface ElectionTimelineProps {
  currentStep?: number
  onStepClick?: (step: number) => void
}

export function ElectionTimeline({ 
  currentStep = 2, 
  onStepClick 
}: ElectionTimelineProps) {
  const [activeStep, setActiveStep] = useState(currentStep)

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId)
    onStepClick?.(stepId)
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="relative">
        {/* Progress line background */}
        <div className="absolute top-8 left-0 right-0 h-1 bg-muted rounded-full mx-16 hidden sm:block" />
        
        {/* Active progress line */}
        <div 
          className="absolute top-8 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-16 transition-all duration-500 ease-out hidden sm:block"
          style={{ 
            width: `calc(${((activeStep - 1) / (steps.length - 1)) * 100}% - 8rem)` 
          }}
        />

        {/* Steps */}
        <div className="relative flex flex-col sm:flex-row items-start sm:items-start justify-between gap-6 sm:gap-0">
          {steps.map((step, index) => {
            const isCompleted = step.id < activeStep
            const isActive = step.id === activeStep
            const isPending = step.id > activeStep
            const Icon = step.icon

            return (
              <div
                key={step.id}
                className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 flex-1 cursor-pointer group"
                onClick={() => handleStepClick(step.id)}
              >
                {/* Step circle */}
                <div
                  className={`
                    relative z-10 flex items-center justify-center w-16 h-16 rounded-full 
                    transition-all duration-300 ease-out shrink-0
                    ${isCompleted 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" 
                      : isActive 
                        ? "bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-xl shadow-primary/40 scale-110" 
                        : "bg-card text-muted-foreground border-2 border-muted group-hover:border-primary/50 group-hover:text-primary"
                    }
                  `}
                >
                  {isCompleted ? (
                    <Check className="w-6 h-6" strokeWidth={2.5} />
                  ) : (
                    <Icon className={`w-6 h-6 ${isActive ? "animate-pulse" : ""}`} />
                  )}
                  
                  {/* Active ring animation */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-ping" />
                  )}
                </div>

                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="sm:hidden absolute left-8 top-16 w-0.5 h-6 bg-muted">
                    <div 
                      className={`w-full bg-primary transition-all duration-300 ${isCompleted ? "h-full" : "h-0"}`}
                    />
                  </div>
                )}

                {/* Label and description */}
                <div className="sm:text-center sm:mt-2">
                  <p
                    className={`
                      font-semibold text-sm transition-colors duration-300
                      ${isActive 
                        ? "text-primary" 
                        : isCompleted 
                          ? "text-foreground" 
                          : "text-muted-foreground group-hover:text-foreground"
                      }
                    `}
                  >
                    {step.label}
                  </p>
                  <p
                    className={`
                      text-xs mt-0.5 transition-colors duration-300 max-w-24
                      ${isActive || isCompleted 
                        ? "text-muted-foreground" 
                        : "text-muted-foreground/60"
                      }
                    `}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Current step indicator */}
      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
          <span className="text-sm font-medium">
            Current Stage: {steps.find(s => s.id === activeStep)?.label}
          </span>
        </div>
      </div>
    </div>
  )
}
