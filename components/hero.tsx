"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const heroImages = [
  {
    title: "Hero Image One",
    src: "https://iili.io/HD8FCLF.jpg",
  },
]

export function Hero() {
  // hero carousel with pagination
  const [currentImage, setCurrentImage] = React.useState(0)

  // function nextImage() {
  //   if (currentImage === heroImages.length - 1) {
  //     setCurrentImage(0)
  //   } else {
  //     setCurrentImage(currentImage + 1)
  //   }
  // }

  // function prevImage() {
  //   if (currentImage === 0) {
  //     setCurrentImage(heroImages.length - 1)
  //   } else {
  //     setCurrentImage(currentImage - 1)
  //   }
  // }

  return (
    <>
      <div
        role="region"
        aria-label="Hero"
        aria-roledescription="carousel"
        aria-live="polite"
        aria-atomic="true"
        aria-relevant="additions removals"
        aria-describedby="hero-carousel"
        className="relative"
      >
        <img
          src={"https://iili.io/HD8FCLF.jpg"}
          alt="Cover"
          className="object-cover h-[64vh] w-full"
        />

        {/* <div className="absolute inset-x-0 bottom-2 z-20 flex justify-center gap-2 pb-2">
          {heroImages.map((image, index) => (
            <Button
              key={image.title}
              className={cn(
                "h-1.5 w-10 rounded-none p-0 hover:bg-white",
                index === currentImage ? "bg-white" : "bg-zinc-500"
              )}
              onClick={() => setCurrentImage(index)}
            >
              <span className="sr-only">
                Slide {index + 1} of {heroImages.length}
              </span>
            </Button>
          ))}
        </div> */}
        {/* <div className="absolute inset-x-0 inset-y-1/2 z-20 hidden justify-between px-4 py-2 md:flex">
        <Button
          size="sm"
          className="w-9 rounded-full bg-zinc-500 p-0 text-white hover:bg-zinc-600"
          onClick={prevImage}
        >
          <Icons.chevronLeft className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          size="sm"
          className="w-9 rounded-full bg-zinc-500 p-0 text-white hover:bg-zinc-600"
          onClick={nextImage}
        >
          <Icons.chevronRight className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div> */}
      </div>
<<<<<<< Updated upstream
=======

      <section
        id="categories"
        aria-labelledby="categories-heading"
        className="space-y-6 py-6 md:pt-10  container mx-auto "
      >
        <div className="mx-auto flex max-w-[58rem]  flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Categories
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {productCategories.map((category) => (
            <Link
              aria-label={`Go to ${category.title}`}
              key={category.title}
              href={`/categories/${category.title}`}
            >
              <div className="group relative overflow-hidden rounded-md">
                <AspectRatio ratio={4 / 5}>
                  <div className="absolute inset-0 z-10 bg-black/60 transition-colors group-hover:bg-black/70" />
                  <Image
                    src={category.image}
                    alt={category.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    priority
                  />
                </AspectRatio>
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <h3 className="text-3xl font-medium capitalize text-slate-100 md:text-2xl">
                    {category.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
>>>>>>> Stashed changes
    </>
  )
}
