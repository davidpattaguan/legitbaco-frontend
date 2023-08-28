import "@uploadthing/react/styles.css"
import "@/styles/globals.css"
import { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import Providers from "@/components/Providers"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  metadataBase: new URL("https://legitba.co"),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Online Auction",
    "Bidding Marketplace",
    "Ecommerce Auction",
    "Auction Website",
    "Bid and Sell",
    "Trading Platform",
    "Bargain Deals",
    "Bid Wars",
    "Auction House",
    "Collectibles Auction",
    "Antiques Auction",
    "Buy and Sell",
    "Rare Items Auction",
    "Vintage Items",
    "Electronics Auction",
    "Gaming Gear Auction",
    "Timed Bidding",
    "Competitive Bidding",
    "Secure Auctions",
    "Auction Technology",
    "Virtual Auctions",
    "Top Auction Site",
    "Best Bidding Experience",
    "Auction Community",
    "Bid Online",
    "Auction Events",
    "Unique Collectibles",
    "Auction Listings",
    "Start Bidding",
    "Live Bidding",
    "Online Trading",
    "Place Bids",
    "Auction App",
    "Economical Deals",
    "Auction Enthusiasts",
    "Sell Items",
    "Join the Bidding",
    "Auction Discoveries",
    "Bidding Wars",
    "Auction Marketplace",
    "Bid and Win",
    "Bidding Platform",
    "Auction Listings",
    "Ecommerce Trading",
    "Discover Auctions",
    "Bidding Opportunities",
  ],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <head />
      <html lang="en" suppressHydrationWarning={true}>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
            <ThemeProvider attribute="class" defaultTheme="light">
              {children}
              <Toaster />
              {process.env.NODE_ENV == "development" ? (
                <>
                  {" "}
                  <TailwindIndicator />
                </>
              ) : (
                ""
              )}

              {process.env.NODE_ENV == "production" ? (
                <>
                  <Analytics />
                </>
              ) : (
                ""
              )}
            </ThemeProvider>
          </Providers>
        </body>
      </html>
    </>
  )
}
