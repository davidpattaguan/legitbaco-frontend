"use client"

import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import type { DashboardConfig, SidebarNavItem } from "@/types"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export interface SidebarNavProps {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
}

export interface SidebarNavProps {}

export function SidebarNav() {
  const pathname = usePathname()
  const params = useParams()

  const items: Array<SidebarNavProps> = [
    {
      title: "Overview",
      href: `/dashboard/collections/${params.collectionId}`,
      icon: "store",
      disabled: false,
    },
    {
      title: "Items",
      href: `/dashboard/collections/${params.collectionId}/items`,
      icon: "store",
      disabled: false,
    },
    {
      title: "Orders",
      href: `/dashboard/collections/${params.collectionId}/orders`,
      icon: "store",
      disabled: false,
    },
    {
      title: "Customize Shop",
      href: `/dashboard/collections/${params.collectionId}/settings`,
      icon: "store",
      disabled: false,
    },
  ]

  if (!items?.length) return null

  return (
    <div className="flex w-full flex-col gap-2">
      {items.map((item, index) => {
        const Icon = Icons[item.icon ?? "chevronLeft"]

        return item.href ? (
          <Link
            key={index}
            href={item.href}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            <span
              className={cn(
                "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground",
                pathname === item.href
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground",
                item.disabled && "pointer-events-none opacity-60"
              )}
            >
              {/* <Icon  /> */}
              <span>{item.title}</span>
            </span>
          </Link>
        ) : (
          <span
            key={index}
            className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
          >
            {item.title}
          </span>
        )
      })}
    </div>
  )
}
