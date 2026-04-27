"use client"

import { useState } from "react"
import { Send, Bot, User } from "lucide-react"

interface Message {
  id: number
  role: "assistant" | "user"
  content: string
}

const initialMessages: Message[] = [
  {
    id: 1,
    role: "assistant",
    content:
      "Hello! I'm your VoteWise AI assistant. I'm here to help guide you through the election process. What would you like to know about voter registration?",
  },
]

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
    }

    const assistantMessage: Message = {
      id: messages.length + 2,
      role: "assistant",
      content:
        "That's a great question! Let me help you with that. Based on your current step, here's what you need to know...",
    }

    setMessages([...messages, userMessage, assistantMessage])
    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex h-full flex-col rounded-2xl bg-card shadow-sm border border-border overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-secondary/30">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
          <Bot className="h-4 w-4 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">AI Assistant</h3>
          <p className="text-xs text-muted-foreground">Always here to help</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                message.role === "assistant"
                  ? "bg-gradient-to-br from-primary to-accent"
                  : "bg-secondary"
              }`}
            >
              {message.role === "assistant" ? (
                <Bot className="h-4 w-4 text-primary-foreground" />
              ) : (
                <User className="h-4 w-4 text-foreground" />
              )}
            </div>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                message.role === "assistant"
                  ? "bg-secondary text-foreground rounded-tl-sm"
                  : "bg-primary text-primary-foreground rounded-tr-sm"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border p-4">
        <div className="flex items-center gap-2 rounded-xl bg-secondary/50 px-4 py-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Press Enter to send your message
        </p>
      </div>
    </div>
  )
}
