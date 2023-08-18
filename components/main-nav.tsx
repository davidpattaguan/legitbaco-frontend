"use client"

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

// import { Icons } from "@/components/icons"

import { MobileNav } from "./mobile-nav"

interface MainNavProps {
  items?: any
  children?: React.ReactNode
}

export function MainNav({ items, children }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)
  return (
    <div className="flex gap-6 md:gap-10 text-black">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        {/* <Icons.logo className="h-7 w-7" /> */}
        <span className="hidden font-bold sm:inline-block text-2xl">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex font-extrabold">
          {items?.map(
            (item: any, index: number) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-semibold text-muted-foreground sm:text-sm",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? (
          // <Icons.close />
          <></>
        ) : (
          // <Icons.logo />
          <></>
        )}
        <span className="font-bold">Legitba.co</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  )
}
