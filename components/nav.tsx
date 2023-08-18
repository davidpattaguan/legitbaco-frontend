"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { SidebarNavItem } from "types"
import { getCurrentUser } from "@/lib/session"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { Button } from "./ui/button"

interface DashboardNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarNavItem[]
}

export function DashboardNav({ className, items }: DashboardNavProps) {
  const path = usePathname()

  if (!items?.length) {
    return null
  }

  return (
    <>
      {" "}
      <div className={cn("pb-12", className)}>
        <div>
          {items.map((itemhead) => {
            return (
              <div className="py-2">
                <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
                  {itemhead.title}
                </h2>
                <div className="space-y-1">
                  {itemhead.subitems.map((item: any, index: any) => {
                    return (
                      <>
                        <Link
                          key={index}
                          href={item.disabled ? "/" : item.href}
                        >
                          <span
                            className={cn(
                              "group mb-1 flex w-full px-3 py-2 items-center justify-start rounded-md text-sm font-medium hover:bg-black hover:text-white",
                              path === item.href
                                ? "bg-black text-white dark:text-black dark:bg-white"
                                : "transparent",
                              item.disabled && "cursor-not-allowed opacity-80"
                            )}
                          >
                            {/* <Icon className="mr-2 h-4 w-4" /> */}
                            {item.title}
                          </span>
                        </Link>
                      </>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
