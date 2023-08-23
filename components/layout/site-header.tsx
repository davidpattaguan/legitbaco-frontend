import Link from "next/link"

// import type { User } from "@clerk/nextjs/dist/types/server"

import { dashboardConfig } from "@/config/dashboard"
import { siteConfig } from "@/config/site"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { CartSheet } from "@/components/cart/cart-sheet"
// import { Combobox } from "@/components/combobox"
import { Icons } from "@/components/icons"

import { MenuItems } from "../categories-nav"
import { Combobox } from "../combobox"
import { MainNav } from "../main-nav"
import { UserAccountNav } from "../user-account-nav"
import { MobileNav } from "./mobile-nav"

// import { MainNav } from "@/components/layouts/main-nav"
// import { MobileNav } from "@/components/layouts/mobile-nav"

interface SiteHeaderProps {
  user: User | null
  isLogoPresent: boolean
}

export function SiteHeader({ user, isLogoPresent }: SiteHeaderProps) {
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`

  return (
    <>
      {" "}
      <header className="sticky top-0 z-40 w-full bg-background">
        <div className="border-b ">
          <div className="container flex h-16 items-center ">
            <MainNav items={siteConfig.mainNav} />
            <MobileNav
              isLogoPresent={isLogoPresent}
              mainNavItems={siteConfig.mainNav}
              sidebarNavItems={[]}
            />

            <div className="flex flex-1 items-center justify-end space-x-4">
              <nav className="flex items-center space-x-2">
                <Combobox />
                {user ? (
                  <UserAccountNav
                    user={{
                      name: user?.name,
                      image: user?.image,
                      email: user?.email,
                    }}
                  />
                ) : (
                  <Link
                    href="/login"
                    className={buttonVariants({
                      size: "sm",
                    })}
                  >
                    Sign In
                    <span className="sr-only">Login</span>
                  </Link>
                )}
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className="border-b">
        <div className="container my-2">
          <MenuItems />
        </div>
      </div>
    </>
  )
}
