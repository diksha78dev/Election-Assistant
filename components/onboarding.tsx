"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { User, BookOpen, GraduationCap, ChevronDown, Check } from "lucide-react"
import { useUser, UserType } from "@/context/user-context"

const userTypes = [
  {
    id: "first-time",
    label: "First-time voter",
    description: "New to the voting process",
    icon: User,
  },
  {
    id: "curious",
    label: "Curious citizen",
    description: "Want to learn more about elections",
    icon: BookOpen,
  },
  {
    id: "student",
    label: "Student",
    description: "Learning about civic engagement",
    icon: GraduationCap,
  },
]

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming"
]

export function Onboarding() {
  const router = useRouter()
  const { setUserType, setSelectedState: setGlobalState } = useUser()
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedState, setSelectedState] = useState<string>("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const isFormComplete = selectedType && selectedState

  const handleContinue = () => {
    if (isFormComplete) {
      setUserType(selectedType as UserType)
      setGlobalState(selectedState)
      router.push("/dashboard")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-foreground mb-2">Get Started</h1>
          <p className="text-muted-foreground">Tell us a bit about yourself</p>
        </div>

        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-foreground mb-4">
              Who are you?
            </label>
            <div className="space-y-3">
              {userTypes.map((type) => {
                const Icon = type.icon
                const isSelected = selectedType === type.id
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                      isSelected
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-border bg-card hover:border-muted-foreground/30 hover:bg-muted/50"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{type.label}</div>
                      <div className="text-sm text-muted-foreground">{type.description}</div>
                    </div>
                    {isSelected && (
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Select your state
            </label>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl border-2 border-border bg-card text-left transition-all duration-200 hover:border-muted-foreground/30 focus:outline-none focus:border-primary"
              >
                <span className={selectedState ? "text-foreground" : "text-muted-foreground"}>
                  {selectedState || "Choose a state"}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 py-2 bg-card border border-border rounded-xl shadow-lg max-h-60 overflow-y-auto">
                  {states.map((state) => (
                    <button
                      key={state}
                      onClick={() => {
                        setSelectedState(state)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full px-4 py-2 text-left transition-colors ${
                        selectedState === state
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {state}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handleContinue}
            disabled={!isFormComplete}
            className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-200 ${
              isFormComplete
                ? "bg-primary text-primary-foreground hover:opacity-90 shadow-md hover:shadow-lg"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}
