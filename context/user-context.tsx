"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type UserType = "first-time" | "curious" | "student" | null
export type Step = "registration" | "voting" | "counting"

interface UserContextType {
  userType: UserType
  setUserType: (type: UserType) => void
  selectedState: string
  setSelectedState: (state: string) => void
  currentStep: Step
  setCurrentStep: (step: Step) => void
  stepNumber: number
  setStepNumber: (step: number) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [userType, setUserType] = useState<UserType>(null)
  const [selectedState, setSelectedState] = useState<string>("")
  const [currentStep, setCurrentStep] = useState<Step>("registration")
  const [stepNumber, setStepNumber] = useState<number>(1)

  return (
    <UserContext.Provider
      value={{
        userType,
        setUserType,
        selectedState,
        setSelectedState,
        currentStep,
        setCurrentStep,
        stepNumber,
        setStepNumber,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
