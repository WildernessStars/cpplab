"use client"

import { useState } from "react"
import { Highlight, themes } from "prism-react-renderer"
import { Check, Copy } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"

interface CodeBlockProps {
  code: string
  language: string
  className?: string
}

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const onCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    toast({
      description: "Code copied to clipboard",
    })
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("relative group", className)}>
      <button
        onClick={onCopy}
        className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition"
      >
        {copied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
      <Highlight theme={themes.vsDark} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={cn("p-4 rounded-lg overflow-x-auto", className)} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
