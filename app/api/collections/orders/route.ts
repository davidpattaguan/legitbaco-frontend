import { useParams } from "next/navigation"
import { NextResponse } from "next/server"
import axios from "axios"

import { getCurrentUser } from "@/lib/session"

export async function POST(
  req: Request,
  { params }: { params: { collectionId: string } }
) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await req.json()

    const response = await axios.post(
      `${process.env.BACKEND_URL}/clothing/operations/colletions/offers/list`,
      body,
      {
        headers: {
          authorization: `Bearer ${user?.token}`,
        },
      }
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
