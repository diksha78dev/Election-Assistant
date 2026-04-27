"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ListChecks, Bot, Vote } from "lucide-react"

const features = [
  {
    icon: ListChecks,
    title: "Step-by-Step Election Guide",
    description:
      "Navigate the election process with clear, easy-to-follow instructions tailored to your location and needs.",
  },
  {
    icon: Bot,
    title: "AI-Powered Assistant",
    description:
      "Get instant answers to your election questions from our intelligent assistant, available 24/7.",
  },
  {
    icon: Vote,
    title: "Voting Simulation",
    description:
      "Practice the voting process in a realistic simulation so you feel confident on election day.",
  },
]

export function Features() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything You Need to Vote Confidently
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Our platform combines AI technology with comprehensive election
            information to make voting accessible for everyone.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />

              <CardHeader className="relative pb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary transition-transform group-hover:scale-110">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
              </CardHeader>

              <CardContent className="relative pt-0">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
