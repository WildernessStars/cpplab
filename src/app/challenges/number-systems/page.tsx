"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NumberSystemsChallenge() {
  const [progress, setProgress] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState("")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const questions = [
    {
      question: "将二进制数 1010 转化为十进制",
      answer: "10",
    },
    {
      question: "将十进制数 15 转化为二进制",
      answer: "1111",
    },
    {
      question: "Convert 十六进制数 A5 转化为十进制",
      answer: "165",
    },
  ]

  const handleSubmit = () => {
    if (currentAnswer === questions[currentQuestion].answer) {
      const newProgress = ((currentQuestion + 1) / questions.length) * 100
      setProgress(newProgress)

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setCurrentAnswer("")
      } else {
        setIsComplete(true)
      }
    }
  }

  return (
    <div className="space-y-6">
     
     
    </div>
  )
}

