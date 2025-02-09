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
      <div>
        <h2 className="text-3xl font-bold leading-10">YuYu要喝水！！</h2>
        <p className="text-muted-foreground mt-2 leading-10">
          <strong>YuYu</strong>是个特别爱吃炸鸡的女孩。在这个世界上她最爱的三样东西是：
        </p>
        <p className="leading-10">&emsp;1. 炸鸡</p>
        <p className="leading-10">&emsp;2. 更多炸鸡</p>
        <p className="leading-10">&emsp;3. 剧多炸鸡</p>
        <p className="leading-10">现在YuYu遇到了麻烦：由于YuYu太爱吃炸鸡了，有一天她吃了太多太多炸鸡，现在的她非常非常渴……</p>
        <p className="leading-10">你是YuYu的好朋友<strong>QiQi</strong>，你决定帮助她。你的任务是给她一个装满水的水瓶，但是你需要：</p>
        <p className="bg-orange-400 text-black p-1 leading-10">
        答对一些小问题！</p>
        <p className="leading-10">如果你没能成功，YuYu会难过地想要吃得更多，你下个月的零食不保！</p>
        <p className="leading-10">为了保住你的零食（和友谊），你对自己说：</p>
        <p className="leading-10">没事哒~没事哒~我能答对这些小问题哒！</p>

      </div>
      <div>
      <h2 className="text-3xl font-bold leading-10">你的挑战</h2>
      <p className="leading-10"> 每答对一道进制转换题就可以为水瓶灌一定量水哦，快来试试吧！</p>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 space-y-4">
          {!isComplete ? (
            <div className="p-6 border rounded-lg space-y-4">
              <h2 className="text-xl font-semibold">{questions[currentQuestion].question}</h2>
              <div className="flex gap-2">
                <Input
                  value={currentAnswer}
                  onChange={(e) => setCurrentAnswer(e.target.value)}
                  placeholder="Enter your answer"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit()
                    }
                  }}
                />
                <Button onClick={handleSubmit}>Submit</Button>
              </div>
            </div>
          ) : (
            <div className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold text-green-500">
                恭喜你! YuYu感动得不行! 说你是她最仗义的好朋友！ 🎉
              </h2>
            </div>
          )}
        </div>

        <div className="w-48 h-96 relative border rounded-lg p-4">
          <div
            className="absolute bottom-0 left-0 right-0 bg-blue-500 transition-all duration-1000 rounded-b-lg"
            style={{ height: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

