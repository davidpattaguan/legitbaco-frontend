import Link from "next/link"
import { notFound } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ProductCard } from "@/components/cards/product-card"

async function getuser() {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/clothing/user/profile/6489ba75467ba9b7465ab9c9`,
      { method: "POST" }
    )

    const data = await response.json()

    return data.data
  } catch (error) {
    return notFound()
  }
}
export default async function IndexPage() {
  const user = await getuser()

  console.log(user)

  return (
    <div className="container">
      <section className="relative h-96">
        <img
          src="https://images3.alphacoders.com/110/1105901.jpg"
          alt=""
          className="rounded-lg object-cover w-full absolute h-full brightness-50"
        />

        <div className="z-10 absolute bottom-0 px-5 py-5 flex flex-col gap-2 ">
          <img
            src="https://images3.alphacoders.com/110/1105901.jpg"
            alt=""
            className=" object-cover  rounded-full h-52 w-52  border-white border-2"
          />
          <h1 className="text-white font-bold text-2xl text-center">
            Jaylord Bucayu
          </h1>
        </div>
      </section>

      <section
        id="featured-products"
        aria-labelledby="featured-products-heading"
        className="space-y-6 mt-6"
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
                  variant: "default",
                })
              )}
            >
              View all
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
      </section>
    </div>
  )
}
