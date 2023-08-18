import React from "react"
import Image from "next/image"

import { Icons } from "../icons"
import { Card, CardContent, CardHeader } from "../ui/card"

export const ProductVerifyImage = ({
  src,
  name,
  likes,
  visits,
  product,
  currentOwner,
}: any) => {
  return (
    <>
      <Card>
        <CardHeader className="p-3 ">
          <div className="flex justify-between items-center">
            {" "}
            <div className="flex gap-2 items-center">
              <img
                src={currentOwner.avatar}
                className="w-9 h-9 rounded-full"
              ></img>
              <div className="flex flex-col">
                <h5 className="font-semibold">
                  {currentOwner.firstname} {currentOwner.lastname}
                </h5>
                <h6 className="text-xs">Current Owner</h6>
              </div>
            </div>
            <div className="flex text-xs sm:text-lg gap-4">
              <div className="flex gap-1 items-center">
                <Icons.heart className="w-4 sm:w-7" />
                <p>{likes}</p>
              </div>
              <div className="flex gap-1 items-center">
                <Icons.eyes className="w-4 sm:w-7" />
                <p>{visits}</p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className=" h-full p-0">
          <Image
            src={src}
            alt=""
            width={500}
            height={500}
            className="object-cover w-full h-full sm:h-[38rem]"
          />
        </CardContent>
      </Card>
    </>
  )
}
