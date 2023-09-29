import Link from "next/link"
import { notFound } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ProductCard } from "@/components/cards/product-card"
import { SlideShow } from "@/components/slideshow"

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
    console.log(error)
    return notFound()
  }
}

export default async function IndexPage() {
  const items = await getRandomItems()

  return (
    <>
      <section>
        <SlideShow />
      </section>

      <div className="container">
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
            Secure your collections and trade with ease!
          </h2>
          <Link href="/dashboard/stores">
            <div className={cn(buttonVariants())}>
              Start your collections now!
              <span className="sr-only">Create a store</span>
            </div>
          </Link>
        </section>
      </div>
    </>
  )
}
