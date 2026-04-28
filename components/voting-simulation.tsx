"use client"

import { useState } from "react"
import { Vote, CheckCircle2, Users, MapPin } from "lucide-react"

const constituencies = [
  { id: "north", name: "North District" },
  { id: "south", name: "South District" },
  { id: "east", name: "East District" },
  { id: "west", name: "West District" },
  { id: "central", name: "Central District" },
]

const candidatesByConstituency: Record<string, { id: string; name: string; party: string; color: string }[]> = {
  north: [
    { id: "n1", name: "Sarah Johnson", party: "Progress Party", color: "bg-blue-500" },
    { id: "n2", name: "Michael Chen", party: "Unity Alliance", color: "bg-emerald-500" },
    { id: "n3", name: "Emma Williams", party: "Citizens First", color: "bg-amber-500" },
  ],
  south: [
    { id: "s1", name: "David Martinez", party: "Progress Party", color: "bg-blue-500" },
    { id: "s2", name: "Lisa Thompson", party: "Unity Alliance", color: "bg-emerald-500" },
    { id: "s3", name: "James Wilson", party: "Citizens First", color: "bg-amber-500" },
  ],
  east: [
    { id: "e1", name: "Robert Brown", party: "Progress Party", color: "bg-blue-500" },
    { id: "e2", name: "Jennifer Davis", party: "Unity Alliance", color: "bg-emerald-500" },
    { id: "e3", name: "William Garcia", party: "Citizens First", color: "bg-amber-500" },
  ],
  west: [
    { id: "w1", name: "Patricia Miller", party: "Progress Party", color: "bg-blue-500" },
    { id: "w2", name: "Christopher Lee", party: "Unity Alliance", color: "bg-emerald-500" },
    { id: "w3", name: "Amanda Taylor", party: "Citizens First", color: "bg-amber-500" },
  ],
  central: [
    { id: "c1", name: "Daniel Anderson", party: "Progress Party", color: "bg-blue-500" },
    { id: "c2", name: "Michelle Thomas", party: "Unity Alliance", color: "bg-emerald-500" },
    { id: "c3", name: "Kevin Jackson", party: "Citizens First", color: "bg-amber-500" },
  ],
}

type SimulationState = "voting" | "loading" | "result"

export function VotingSimulation() {
  const [constituency, setConstituency] = useState("")
  const [selectedCandidate, setSelectedCandidate] = useState("")
  const [state, setState] = useState<SimulationState>("voting")
  const [winner, setWinner] = useState<{ name: string; party: string; color: string } | null>(null)

  const candidates = constituency ? candidatesByConstituency[constituency] : []

  const handleCastVote = () => {
    if (!selectedCandidate || !constituency) return

    setState("loading")

    setTimeout(() => {
      const selected = candidates.find((c) => c.id === selectedCandidate)
      if (selected) {
        setWinner(selected)
        setState("result")
      }
    }, 2000)
  }

  const handleReset = () => {
    setConstituency("")
    setSelectedCandidate("")
    setState("voting")
    setWinner(null)
  }

  return (
    <div className="flex items-center justify-center p-4 pb-12">
      <div className="w-full max-w-lg">
        <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent p-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-foreground/20 rounded-full mb-3">
              <Vote className="w-7 h-7 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-primary-foreground">Try Voting Simulation</h1>
            <p className="text-primary-foreground/80 mt-1 text-sm">Experience how the voting process works</p>
          </div>

          {/* Content */}
          <div className="p-6">
            {state === "voting" && (
              <div className="space-y-6">
                {/* Constituency Dropdown */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    Select your constituency
                  </label>
                  <div className="relative">
                    <select
                      value={constituency}
                      onChange={(e) => {
                        setConstituency(e.target.value)
                        setSelectedCandidate("")
                      }}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    >
                      <option value="">Choose a constituency...</option>
                      {constituencies.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Candidates */}
                {constituency && (
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      Select a candidate
                    </label>
                    <div className="space-y-2">
                      {candidates.map((candidate) => (
                        <label
                          key={candidate.id}
                          className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            selectedCandidate === candidate.id
                              ? "border-primary bg-primary/5 shadow-md"
                              : "border-border bg-card hover:border-muted-foreground/30 hover:bg-secondary/30"
                          }`}
                        >
                          <input
                            type="radio"
                            name="candidate"
                            value={candidate.id}
                            checked={selectedCandidate === candidate.id}
                            onChange={(e) => setSelectedCandidate(e.target.value)}
                            className="sr-only"
                          />
                          <div className={`w-10 h-10 rounded-full ${candidate.color} flex items-center justify-center text-primary-foreground font-semibold text-sm`}>
                            {candidate.name.split(" ").map((n) => n[0]).join("")}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{candidate.name}</p>
                            <p className="text-sm text-muted-foreground">{candidate.party}</p>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                              selectedCandidate === candidate.id ? "border-primary bg-primary" : "border-muted-foreground/40"
                            }`}
                          >
                            {selectedCandidate === candidate.id && (
                              <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cast Vote Button */}
                <button
                  onClick={handleCastVote}
                  disabled={!constituency || !selectedCandidate}
                  className="w-full py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Vote className="w-5 h-5" />
                  Cast Vote
                </button>
              </div>
            )}

            {state === "loading" && (
              <div className="py-16 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
                  <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Processing Your Vote</h2>
                <p className="text-muted-foreground">Please wait while we count the votes...</p>
              </div>
            )}

            {state === "result" && winner && (
              <div className="py-8 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-4">Election Results</h2>
                <div className="bg-gradient-to-br from-secondary to-muted p-6 rounded-2xl mb-6">
                  <div className={`w-16 h-16 ${winner.color} rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-xl`}>
                    {winner.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <p className="text-2xl font-bold text-foreground mb-1">{winner.name}</p>
                  <p className="text-muted-foreground mb-3">{winner.party}</p>
                  <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    Winner
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-secondary text-secondary-foreground font-medium rounded-xl hover:bg-secondary/80 transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-muted-foreground text-sm mt-4">
          This is a simulation for educational purposes only.
        </p>
      </div>
    </div>
  )
}
