import Link from "next/link"
import { notFound } from "next/navigation"

import { dashboardConfig } from "@/config/dashboard"
import { marketingConfig } from "@/config/marketing"
import { siteConfig } from "@/config/site"
import { getCurrentUser } from "@/lib/session"
import { cn } from "@/lib/utils"
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
import { MenuItems } from "@/components/categories-nav"
import { SearchSite } from "@/components/forms/search-site"
import { Icons } from "@/components/icons"
import { MobileNav } from "@/components/layout/mobile-nav"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserAccountNav } from "@/components/user-account-nav"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const user = await getCurrentUser()

  return (
    <>
      <SiteHeader isLogoPresent={true} user={user} />

      <main className="flex-1">{children}</main>

      <SiteFooter />
    </>
  )
}
