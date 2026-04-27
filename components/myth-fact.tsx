"use client";

import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Lightbulb,
} from "lucide-react";

const mythsAndFacts = [
  {
    id: 1,
    myth: "My single vote doesn't really matter in a large election",
    fact: "Every vote counts! Many elections have been decided by just a few votes. In 2000, the US Presidential election in Florida was decided by only 537 votes out of nearly 6 million cast.",
  },
  {
    id: 2,
    myth: "Electronic voting machines can easily be hacked",
    fact: "Modern voting systems use multiple layers of security including air-gapped networks, encrypted data, paper audit trails, and rigorous pre-election testing. Election officials conduct extensive security audits.",
  },
  {
    id: 3,
    myth: "I need to bring my voter ID card to the polling station",
    fact: "Requirements vary by location. Many places accept alternative forms of identification, and some areas don't require ID at all. Check your local election office for specific requirements.",
  },
  {
    id: 4,
    myth: "If I'm not registered, I can't vote on election day",
    fact: "Many states offer same-day voter registration, allowing eligible citizens to register and vote on election day. Check if your state offers this option.",
  },
  {
    id: 5,
    myth: "Postal votes are more likely to be fraudulent",
    fact: "Mail-in voting has been used safely for decades. States have robust verification processes including signature matching, barcodes, and secure ballot tracking systems.",
  },
];

export function MythFact() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
            <Lightbulb className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3 text-balance">
            Myth vs Fact
          </h1>
          <p className="text-muted-foreground text-lg">
            Click on a myth to reveal the truth
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {mythsAndFacts.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className="bg-card rounded-xl shadow-sm border border-border overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full p-5 flex items-start gap-4 text-left cursor-pointer transition-colors hover:bg-muted/30"
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isExpanded
                        ? "bg-primary/10 text-primary"
                        : "bg-destructive/10 text-destructive"
                    }`}
                  >
                    <AlertCircle className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-wide text-destructive">
                        Myth
                      </span>
                    </div>
                    <p className="text-foreground font-medium leading-relaxed">
                      {item.myth}
                    </p>
                  </div>

                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-0">
                      <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                              Fact
                            </span>
                          </div>
                          <p className="text-foreground leading-relaxed">
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

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Have more questions? Ask our AI assistant for help.
          </p>
        </div>
      </div>
    </div>
  );
}
