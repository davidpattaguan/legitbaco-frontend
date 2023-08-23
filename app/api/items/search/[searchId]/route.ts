import { useParams } from "next/navigation"
import { NextResponse } from "next/server"
import axios from "axios"

import { getCurrentUser } from "@/lib/session"

export async function POST(
  req: Request,
  { params }: { params: { searchId: string } }
) {
  try {
    // const user = await getCurrentUser()

    // if (!user) {
    //   return new NextResponse("Unauthorized", { status: 401 })
    // }

    // const body = await req.json()

    const response = await axios.post(
      `https://api.legitba.co/clothing/operations/search?prefix=${params.searchId}`
    )

    console.log(response.data.data.products)

    if (response.data.status === "failed") {
      return new NextResponse(response.data.data.message, { status: 400 })
    }

    // console.log("[API_CREATE_NEW_ITEM_RESPONSE]", response.data)

    return NextResponse.json(response.data)
  } catch (error) {
    console.log("[CREATE_ITEM]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
