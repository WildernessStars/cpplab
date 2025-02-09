"use client"

import Link from "next/link";

export function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
        <Link href="/"><span className="hidden font-bold sm:inline-block">C++ Lab</span></Link>
            
        </div>
        <div className="flex flex-1 items-center space-x-2">
         
        </div>
      </div>
    </header>
  )
}

