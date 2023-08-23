"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { AspectRatio } from "./ui/aspect-ratio"
import { Button } from "./ui/button"

const images = [
  "/ben.jpg",
  "https://uploadthing.com/f/4fd84b7c-cf5c-4ca0-a381-34d99a307429_nik-korba-3WceTBlUoMs-unsplash-min.jpg",
  "https://uploadthing.com/f/5cf2b3c6-c116-447b-8180-0db55c529393_nong-v-iad87c3bgwU-unsplash-min.jpg",
]

export const SlideShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    if (hasInteracted) return
    const timer = setTimeout(
      () => setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1)),
      7000
    )

    return () => clearInterval(timer)
  }, [currentImageIndex, hasInteracted])

  return (
    <div className="mb-4">
      <div className="relative">
        <div
          key={currentImageIndex}
          className="relative w-full animate-fade-in"
        >
          <AspectRatio ratio={14 / 5}>
            <Image
              src={images[currentImageIndex]}
              alt="hero"
              fill
              className="absolute inset-0 object-cover"
              priority
              sizes="(max-width: 2800px) 100vw, (max-width: 2800px) 50vw, 33vw"
            />
          </AspectRatio>
        </div>
        {/* <div className="absolute w-full h-full bg-translucentDark top-0 bottom-0 left-0 right-0">
          <div className="absolute md:top-0 bottom-0 right-0 left-0 m-auto w-fit h-fit text-center">
            <div className="bg-white md:border border-border md:rounded-md py-8 px-16 flex flex-col gap-3">
              <p className="uppercase font-medium tracking-wide">Summer Sale</p>
              <div className="flex flex-col gap-2 mb-2">
                <p className="text-3xl font-bold">
                  Save up to 50% on our entire range
                </p>
                <p>Over 100 products discounted</p>
              </div>
              <Link href={routes.products}>
                <Button>Shop Now</Button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentImageIndex(i)
              setHasInteracted(true)
            }}
          >
            <SlideShow.Indicator
              filled={currentImageIndex === i ? true : false}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

const Indicator = ({ filled }: { filled: boolean }) => {
  return (
    <div
      className={cn(
        "w-3 h-3 rounded-full border-primary border-2 mt-2",
        filled && "bg-primary"
      )}
    />
  )
}

SlideShow.Indicator = Indicator
