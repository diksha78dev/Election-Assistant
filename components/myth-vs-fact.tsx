"use client";

import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Lightbulb,
} from "lucide-react";

interface MythFact {
  id: number;
  myth: string;
  fact: string;
}

const mythsAndFacts: MythFact[] = [
  {
    id: 1,
    myth: "My single vote doesn't make a difference",
    fact: "Many elections have been decided by just a handful of votes. In 2000, the US presidential election was decided by only 537 votes in Florida. Every vote truly counts!",
  },
  {
    id: 2,
    myth: "I need to bring my voter ID card to vote",
    fact: "While carrying your voter ID is recommended, you can still vote using other valid identification documents like Aadhaar, passport, or driving license if your name is on the electoral roll.",
  },
  {
    id: 3,
    myth: "Electronic voting machines can be hacked",
    fact: "EVMs are standalone devices that are not connected to any network or internet. They undergo rigorous testing and have multiple layers of security including tamper-proof seals.",
  },
  {
    id: 4,
    myth: "I can vote from anywhere in the country",
    fact: "You can only vote in the constituency where you are registered. However, you can apply to transfer your voter registration if you move to a new location.",
  },
  {
    id: 5,
    myth: "Voting is complicated and time-consuming",
    fact: "The voting process is designed to be simple and quick. Most voters spend less than 5 minutes at the polling booth. Election officials are there to help if you have any questions.",
  },
];

export default function MythVsFact() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Know the Truth
            </span>
          </div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Myth vs Fact
          </h1>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Click on any myth to reveal the truth. Clear your doubts about the
            voting process.
          </p>
        </div>

        {/* Myth Cards */}
        <div className="space-y-4">
          {mythsAndFacts.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md"
              >
                {/* Myth Header - Clickable */}
                <button
                  onClick={() => toggleCard(item.id)}
                  className="flex w-full items-start gap-4 p-5 text-left transition-colors hover:bg-muted/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                    <AlertCircle className="h-5 w-5 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-destructive">
                      Myth
                    </div>
                    <p className="font-medium text-card-foreground">
                      {item.myth}
                    </p>
                  </div>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </div>
                </button>

                {/* Fact Content - Expandable */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border bg-gradient-to-br from-primary/5 to-accent/5 p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                            Fact
                          </div>
                          <p className="leading-relaxed text-card-foreground">
                            {item.fact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Have more questions?{" "}
            <a
              href="#"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Ask our AI assistant
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
