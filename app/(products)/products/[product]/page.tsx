import { useState } from "react"
import { notFound, redirect } from "next/navigation"
import axios, { AxiosError } from "axios"

import { getCurrentUser } from "@/lib/session"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ProductVerifyImage } from "@/components/cards/product-image-verify"
import { Icons } from "@/components/icons"

import { QrModal } from "./components/qr-modal"
import TradeOperation from "./components/trade-operation"

interface PageProps {
  params: { product: string }
}

export const revalidate = 0

async function getProduct(productId: string) {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/clothing/get/${productId}`,
      { method: "POST" }
    )

    const data = await response.json()

    console.log("[SINGLE_PRODUCT_GET]", data)

    if (data.data.length === 0) {
      return notFound()
    }

    return data
  } catch (error) {
    return notFound()
  }
}

export default async function IndexPage({ params }: PageProps) {
  const product = await getProduct(params.product)

  const user = await getCurrentUser()

  if (!product) {
    return notFound()
  }

  if (product.data.user == null && !user) {
    return redirect("/login")
  }

  console.log(product)

  const ItemHeader = ({ shop, name }: any) => {
    return (
      <>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-3xl">{name}</h1>
          <div className="flex gap-1 items-center">
            <h3 className="text-md">Created by: {shop.name}</h3>
            {/* <div className="flex gap-2">
              <Icons.verified className="w-6 h-6 text-white dark:text-inherit fill-yellow-500" />
            </div> */}
          </div>
        </div>
        <div className="mt-2 flex gap-2">
          Category:
          <Badge className="text-xs rounded-sm" variant={"outline"}>
            {product.data.category_name}
          </Badge>
        </div>
      </>
    )
  }

  const ItemDescription = ({ description }: any) => {
    return (
      <>
        <Card>
          <CardHeader className="border-b flex">
            <div className="flex gap-2">
              <p className="font-semibold">About Item</p>
            </div>
          </CardHeader>
          <CardContent className="p-5 space-y-5 bg-slate-50 dark:bg-inherit">
            <p>{description}</p>
          </CardContent>
        </Card>
      </>
    )
  }

  return (
    <>
      <QrModal user={product.data.user} />
      <section className="container h-[95vh] mt-3 sm:mt-5 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          <div>
            <div className="mb-5 block sm:hidden ">
              <ItemHeader
                name={product.data.shop.name}
                shop={product.data.shop}
              />
            </div>

            <ProductVerifyImage
              src={product.data.image_link}
              name={product.data.name}
              likes={product.data.likes}
              visits={product.data.visits}
              currentOwner={product.data.user}
            />
          </div>
          <div className=" space-y-5 sm:mt-2 sm:mx-5">
            <div className="hidden sm:block">
              <ItemHeader name={product.data.name} shop={product.data.shop} />
            </div>

            <div className="">
              <Card>
                <CardHeader className="border-b flex">
                  <div className="flex gap-2">
                    <div>
                      <Icons.calendarclock />
                    </div>

                    <p>Trading Features Coming Soon!</p>
                  </div>
                </CardHeader>
                <CardContent className="p-5 space-y-5 bg-slate-50 dark:bg-inherit">
                  <h1 className="text-4xl font-semibold">
                    ₱ {product.data.price.$numberDecimal}.00
                  </h1>
                  <div className="flex gap-2">
                    {product.data.tradable === true ? (
                      <>
                        <TradeOperation />
                      </>
                    ) : (
                      <>
                        <Button className="w-full h-16" disabled>
                          Not Tradable
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <ItemDescription description={product.data.description} />
            </div>

            <div>
              <Card>
                <CardContent className="p-5 flex gap-2 items-center">
                  <p>Tags: </p>
                  <div className="flex gap-2">
                    {product.data.tags.map((tag: any) => (
                      <Badge>{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
