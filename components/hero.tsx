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

export const productCategories = [
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
          className="object-cover mt-16 h-[25vh] sm:h-[32vh] md:h-[50vh] lg:h-[64vh] w-full "
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

      <section
        id="categories"
        aria-labelledby="categories-heading"
        className="space-y-6 py-6 md:pt-5  container mx-auto "
      >
        {/* <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
            Categories
          </h2>
        </div> */}
        {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
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
        </div> */}
      </section>
    </>
  )
}
