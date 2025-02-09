"use client"

import { useState } from "react"
// import Editor from "@monaco-editor/react"
import dynamic from "next/dynamic";

const CodeEditor = dynamic(
  () => import('react-monaco-editor'), // 替换为你的组件路径
  { ssr: false }, // 禁用 SSR
);

//import Editor from 'react-monaco-editor'
import { Button } from "@/components/ui/button"
// import { Party } from "@/components/party"
import { Loader2 } from "lucide-react"

const defaultCode = `#include <iostream>
using namespace std;

int main() {
    // Write your code here
    return 0;
}`

export default function CodeChallenge() {
  const [code, setCode] = useState(defaultCode)
  const [output, setOutput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleCompileAndRun = async () => {
    setIsLoading(true)
    setIsSuccess(false)
    try {
      const response = await fetch("/api/compile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      })
      const data = await response.json()
      setOutput(data.output)
      setIsSuccess(data.output.trim() === "abc")
    } catch (error) {
      console.log(error)
      setOutput("Compilation error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">代码挑战</h1>
        <p className="text-muted-foreground mt-2">将字符串 seHJ12!@,sjdkffH$123,sdf!@&12HDHa!,123&^YUhg@! 按逗号切分。</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="h-[600px] border rounded-lg overflow-hidden">
            <CodeEditor
              height="100%"
              language="cpp"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
              }}
            />
          </div>
          <Button onClick={handleCompileAndRun} disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Compiling...
              </>
            ) : (
              "Compile & Run (Ctrl + S)"
            )}
          </Button>
        </div>

        <div className="space-y-4">
          <div className="h-[600px] border rounded-lg p-4 bg-muted relative">
            <h3 className="text-sm font-medium mb-2">Output:</h3>
            <pre className="font-mono text-sm">{output}</pre>
            {isSuccess}

            {/* {isSuccess && <Party />} */}
          </div>
        </div>
      </div>
    </div>
  )
}

