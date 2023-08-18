import Link from "next/link"
import { notFound, redirect } from "next/navigation"

import { dashboardConfig } from "@/config/dashboard"
import { marketingConfig } from "@/config/marketing"
import { getCurrentUser } from "@/lib/session"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MainNav } from "@/components/main-nav"

import "@/components/sidebar-nav"
import CollectionSwitcher from "@/components/collection-switcher"
import { SidebarNav } from "@/components/sidebar-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserAccountNav } from "@/components/user-account-nav"

interface DashboardLayoutProps {
  children: React.ReactNode
  params: { collectionId: string }
}

async function getStores(user: any) {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/clothing/shop/usershop`,
      { method: "POST", headers: { Authorization: `Bearer ${user.token}` } }
    )

    const data = await response.json()

    return data
  } catch (error) {
    return notFound()
  }
}

async function getStore(user: any, id: any) {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/clothing/shop/get/${id}`,
      { method: "POST", headers: { Authorization: `Bearer ${user.token}` } }
    )

    const data = await response.json()

    return data
  } catch (error) {
    return notFound()
  }
}

export default async function DashboardLayout({
  params,
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/sign-in")
  }

  const store = await getStore(user, params.collectionId)

  if (!store.data) {
    return redirect("/dashboard/collections")
  }

  const stores = await getStores(user)

  if (stores.data.length == 0) {
    redirect("/create-collection")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed  w-full  z-40 bg-background border-b">
        <div className="flex container justify-between">
          <div className="flex h-16 items-center gap-4 py-6">
            <MainNav items={dashboardConfig.mainNav} />
            <CollectionSwitcher stores={stores.data} />
          </div>
          <nav className="flex items-center gap-2">
            <ThemeToggle />

            {user ? (
              <>
                <UserAccountNav
                  user={{
                    name: user?.name,
                    image: user?.image,
                    email: user?.email,
                  }}
                />
              </>
            ) : (
              <>
                {/* <Link
                  href="/login"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "px-4"
                  )}
                >
                  Login
                </Link> */}
              </>
            )}
          </nav>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 pt-8 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto pr-5 border-r md:sticky md:block">
          {stores.data.length > 0 && <SidebarNav />}
        </aside>
        <main className="flex w-full flex-col overflow-hidden mt-16">
          {children}
        </main>
      </div>
    </div>
  )
}
