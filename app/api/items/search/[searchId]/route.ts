import { NextResponse } from "next/server"
import axios from "axios"

export async function POST(
  req: Request,
  { params }: { params: { searchId: string } }
) {
  try {
    const response = await axios.post(
      `https://api.legitba.co/clothing/operations/search?prefix=${params.searchId}`
    )

    if (response.data.status === "failed") {
      return new NextResponse(response.data.data.message, { status: 400 })
    }
    return NextResponse.json(response.data)
  } catch (error) {
    console.log("[CREATE_ITEM]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
