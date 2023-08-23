import Image from "next/image"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"
import { useSession } from "next-auth/react"

import { siteConfig } from "@/config/site"
import { getCurrentUser } from "@/lib/session"
import { cn } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ProductCard } from "@/components/cards/product-card"
import { Hero } from "@/components/hero"
import { Icons } from "@/components/icons"
import { ProductCardAdmin } from "@/components/product-card-admin"
import { DashboardShell } from "@/components/shell"
import { SlideShow } from "@/components/slideshow"

const productCategories = [
  {
    title: "Fashion",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=840&q=80",
    subcategories: [
      {
        title: "Decks",
        description: "The board itself.",
        image: "/images/deck-one.webp",
        slug: "decks",
      },
      {
        title: "Wheels",
        description: "The wheels that go on the board.",
        image: "/images/wheel-one.webp",
        slug: "wheels",
      },
      {
        title: "Trucks",
        description: "The trucks that go on the board.",
        image: "/images/truck-one.webp",
        slug: "trucks",
      },
      {
        title: "Bearings",
        description: "The bearings that go in the wheels.",
        image: "/images/bearing-one.webp",
        slug: "bearings",
      },
      {
        title: "Griptape",
        description: "The griptape that goes on the board.",
        image: "/images/griptape-one.webp",
        slug: "griptape",
      },
      {
        title: "Hardware",
        description: "The hardware that goes on the board.",
        image: "/images/hardware-one.webp",
        slug: "hardware",
      },
      {
        title: "Tools",
        description: "The tools that go with the board.",
        image: "/images/tool-one.webp",
        slug: "tools",
      },
    ],
  },
  {
    title: "Health and Beauty",
    image:
      "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    subcategories: [
      {
        title: "T-shirts",
        description: "Cool and comfy tees for effortless style.",
        slug: "t-shirts",
      },
      {
        title: "Hoodies",
        description: "Cozy up in trendy hoodies.",
        slug: "hoodies",
      },
      {
        title: "Pants",
        description: "Relaxed and stylish pants for everyday wear.",
        slug: "pants",
      },
      {
        title: "Shorts",
        description: "Stay cool with casual and comfortable shorts.",
        slug: "shorts",
      },
      {
        title: "Hats",
        description: "Top off your look with stylish and laid-back hats.",
        slug: "hats",
      },
    ],
  },
  {
    title: "Sports",
    image:
      "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    subcategories: [
      {
        title: "Low Tops",
        description: "Rad low tops shoes for a stylish low-profile look.",
        slug: "low-tops",
      },
      {
        title: "High Tops",
        description: "Elevate your style with rad high top shoes.",
        slug: "high-tops",
      },
      {
        title: "Slip-ons",
        description: "Effortless style with rad slip-on shoes.",
        slug: "slip-ons",
      },
      {
        title: "Pros",
        description: "Performance-driven rad shoes for the pros.",
        slug: "pros",
      },
      {
        title: "Classics",
        description: "Timeless style with rad classic shoes.",
        slug: "classics",
      },
    ],
  },
  {
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    subcategories: [
      {
        title: "Skate Tools",
        description:
          "Essential tools for maintaining your skateboard, all rad.",
        slug: "skate-tools",
      },
      {
        title: "Bushings",
        description: "Upgrade your ride with our rad selection of bushings.",
        slug: "bushings",
      },
      {
        title: "Shock & Riser Pads",
        description:
          "Enhance your skateboard's performance with rad shock and riser pads.",
        slug: "shock-riser-pads",
      },
      {
        title: "Skate Rails",
        description:
          "Add creativity and style to your tricks with our rad skate rails.",
        slug: "skate-rails",
      },
      {
        title: "Wax",
        description: "Keep your board gliding smoothly with our rad skate wax.",
        slug: "wax",
      },
      {
        title: "Socks",
        description: "Keep your feet comfy and stylish with our rad socks.",
        slug: "socks",
      },
      {
        title: "Backpacks",
        description: "Carry your gear in style with our rad backpacks.",
        slug: "backpacks",
      },
    ],
  },
  {
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    subcategories: [
      {
        title: "Skate Tools",
        description:
          "Essential tools for maintaining your skateboard, all rad.",
        slug: "skate-tools",
      },
      {
        title: "Bushings",
        description: "Upgrade your ride with our rad selection of bushings.",
        slug: "bushings",
      },
      {
        title: "Shock & Riser Pads",
        description:
          "Enhance your skateboard's performance with rad shock and riser pads.",
        slug: "shock-riser-pads",
      },
      {
        title: "Skate Rails",
        description:
          "Add creativity and style to your tricks with our rad skate rails.",
        slug: "skate-rails",
      },
      {
        title: "Wax",
        description: "Keep your board gliding smoothly with our rad skate wax.",
        slug: "wax",
      },
      {
        title: "Socks",
        description: "Keep your feet comfy and stylish with our rad socks.",
        slug: "socks",
      },
      {
        title: "Backpacks",
        description: "Carry your gear in style with our rad backpacks.",
        slug: "backpacks",
      },
    ],
  },
  {
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    subcategories: [
      {
        title: "Skate Tools",
        description:
          "Essential tools for maintaining your skateboard, all rad.",
        slug: "skate-tools",
      },
      {
        title: "Bushings",
        description: "Upgrade your ride with our rad selection of bushings.",
        slug: "bushings",
      },
      {
        title: "Shock & Riser Pads",
        description:
          "Enhance your skateboard's performance with rad shock and riser pads.",
        slug: "shock-riser-pads",
      },
      {
        title: "Skate Rails",
        description:
          "Add creativity and style to your tricks with our rad skate rails.",
        slug: "skate-rails",
      },
      {
        title: "Wax",
        description: "Keep your board gliding smoothly with our rad skate wax.",
        slug: "wax",
      },
      {
        title: "Socks",
        description: "Keep your feet comfy and stylish with our rad socks.",
        slug: "socks",
      },
      {
        title: "Backpacks",
        description: "Carry your gear in style with our rad backpacks.",
        slug: "backpacks",
      },
    ],
  },
  {
    title: "Accessories",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    subcategories: [
      {
        title: "Skate Tools",
        description:
          "Essential tools for maintaining your skateboard, all rad.",
        slug: "skate-tools",
      },
      {
        title: "Bushings",
        description: "Upgrade your ride with our rad selection of bushings.",
        slug: "bushings",
      },
      {
        title: "Shock & Riser Pads",
        description:
          "Enhance your skateboard's performance with rad shock and riser pads.",
        slug: "shock-riser-pads",
      },
      {
        title: "Skate Rails",
        description:
          "Add creativity and style to your tricks with our rad skate rails.",
        slug: "skate-rails",
      },
      {
        title: "Wax",
        description: "Keep your board gliding smoothly with our rad skate wax.",
        slug: "wax",
      },
      {
        title: "Socks",
        description: "Keep your feet comfy and stylish with our rad socks.",
        slug: "socks",
      },
      {
        title: "Backpacks",
        description: "Carry your gear in style with our rad backpacks.",
        slug: "backpacks",
      },
    ],
  },
]
export const revalidate = 0

async function getRandomItems() {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/clothing/random?limit=10`,
      { method: "POST" }
    )

    const data = await response.json()

    return data.data
  } catch (error) {
    return notFound()
  }
}

export default async function IndexPage() {
  const items = await getRandomItems()

  return (
    <>
      <SlideShow />

      <div className="container">
        {" "}
        <section
          id="featured-products"
          aria-labelledby="featured-products-heading"
          className="space-y-6 mt-5"
        >
          <div className="flex items-center">
            <h2 className="flex-1 text-2xl font-medium sm:text-3xl">
              Featured Items
            </h2>
            <Link href="/products">
              <div
                className={cn(
                  buttonVariants({
                    size: "sm",
                  })
                )}
              >
                View all
                <span className="sr-only">View all products</span>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {items?.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        <section
          id="create-a-store-banner"
          aria-labelledby="create-a-store-banner-heading"
          className="grid place-items-center gap-6 rounded-lg border bg-card px-6 py-16 text-center text-card-foreground shadow-sm my-10"
        >
          <h2 className="text-2xl font-medium sm:text-3xl">
            Do you want to start trading on our website?
          </h2>
          <Link href="/dashboard/stores">
            <div className={cn(buttonVariants())}>
              Add a collection
              <span className="sr-only">Create a store</span>
            </div>
          </Link>
        </section>
      </div>
    </>
  )
}
