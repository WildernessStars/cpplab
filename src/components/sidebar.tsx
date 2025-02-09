"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const startItems = [
  {
    title: "数据类型",
    href: "/start/data-types",
  },
  {
    title: "编码",
    href: "/start/numbers",
  },
  {
    title: "进制转换",
    href: "/start/binary-operations",
  },
  {
    title: "数组",
    href: "/start/arrays",
  },
  {
    title: "string类",
    href: "/start/strings",
  },
]

const challengeItems = [
  {
    title: "挑战 1: 帮YUYU把水瓶装满",
    href: "/challenges/number-systems",
  },
  {
    title: "挑战 2: 代码",
    href: "/challenges/code",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-72 border-r bg-background">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">C++ Lab</h1>
          </Link>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">开始</h2>
          <div className="space-y-1">
            {startItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">挑战</h2>
          <div className="space-y-1">
            {challengeItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

