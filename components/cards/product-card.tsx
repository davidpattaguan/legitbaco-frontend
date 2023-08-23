"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"

import { cn, formatPrice } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

import { Badge } from "../ui/badge"

export function ProductCard({
  product,
  variant = "default",
  isAddedToCart = false,
  onSwitch,
  className,
  ...props
}: any) {
  const formattedPrice = formatPrice(product.price.$numberDecimal)

  return (
    <Card
      className={cn(
        "h-full overflow-hidden rounded-xl shadow-md border-none",
        className
      )}
      {...props}
    >
      <Link
        aria-label={`View ${product.name} details`}
        href={`/products/${product.clothing_id}`}
      >
        <CardHeader className="border-b p-0 relative">
          <div className="absolute z-20 bottom-2 left-2">
            {product.tradable ? (
              <>
                {" "}
                <Badge variant="default" className="bg-green-500">
                  Tradable
                </Badge>
              </>
            ) : (
              <>
                {" "}
                <Badge variant="default" className="bg-red-500 text-white">
                  Not open for Trade
                </Badge>
              </>
            )}
          </div>

          <AspectRatio ratio={4 / 3}>
            {product?.image_link ? (
              <Image
                src={product.image_link}
                alt={product.image_link}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className="object-cover rounded-t-lg"
                loading="lazy"
              />
            ) : (
              <div
                aria-label="Placeholder"
                role="img"
                aria-roledescription="placeholder"
                className="flex h-full w-full items-center justify-center bg-secondary"
              ></div>
            )}
          </AspectRatio>
        </CardHeader>
      </Link>
      <Link
        aria-label={`View ${product.name} details`}
        href={`/products/${product.clothing_id}`}
      >
        <CardContent className="grid gap-1 p-3">
          <CardTitle className="text-xs md:text-lg line-clamp-2">
            {product.name}
          </CardTitle>
          <p className="text-xs md:text-md text-gray-600">
            by: {product.shop.name}
          </p>
          <CardDescription className="flex gap-2 items-center">
            <span className="text-xs md:text-md">{formattedPrice}</span>
          </CardDescription>
        </CardContent>
      </Link>
    </Card>
  )
}
