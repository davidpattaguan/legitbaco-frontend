import Link from "next/link"
import { User } from "@/types"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { MenuItems } from "@/components/categories-nav"

import { Combobox } from "../combobox"
import { MainNav } from "../main-nav"
import { UserAccountNav } from "../user-account-nav"
import { MobileNav } from "./mobile-nav"

interface SiteHeaderProps {
  user: User | undefined
}

export function SiteHeader({ user }: SiteHeaderProps) {
  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-background">
        <div className="border-b ">
          <div className="container flex h-16 items-center ">
            <MainNav />
            <MobileNav mainNavItems={siteConfig.mainNav} sidebarNavItems={[]} />

            <div className="flex flex-1 items-center justify-end space-x-4">
              <nav className="flex items-center space-x-2">
                <Combobox />
                {user ? (
                  <UserAccountNav
                    user={{
                      name: user.firstName,
                      image: user.picture,
                      email: user.email,
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
      <div className="border-b hidden lg:flex">
        <div className="container my-2 ">
          <MenuItems items={siteConfig.mainNav} />
        </div>
      </div>
    </>
  )
}
