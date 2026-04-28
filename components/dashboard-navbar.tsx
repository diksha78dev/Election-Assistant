"use client"

import Link from "next/link"
import { Vote, User, ChevronDown } from "lucide-react"
import { useUser } from "@/context/user-context"

const userTypeLabels: Record<string, string> = {
  "first-time": "First-time Voter",
  "curious": "Curious Citizen",
  "student": "Student",
}

export function DashboardNavbar() {
  const { userType } = useUser()
  const displayName = userType ? userTypeLabels[userType] : "Guest"
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground transition-transform group-hover:scale-105">
            <Vote className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold text-foreground">
            VoteWise AI
          </span>
        </Link>

        <button className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 transition-colors hover:bg-secondary/80">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            <User className="h-4 w-4 text-primary" />
          </div>
          <span className="text-sm font-medium text-foreground hidden sm:block">{displayName}</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </nav>
    </header>
  )
}
