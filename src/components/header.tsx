"use client"

import { useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">C++ Lab</span>
          </a>
        </div>
        <div className="flex flex-1 items-center space-x-2">
          <Button
            variant="ghost"
            className="w-9 px-0"
            onClick={() => {
              if (query) {
                searchParams.set("q", "")
              } else {
                searchParams.set("q", "")
              }
            }}
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

