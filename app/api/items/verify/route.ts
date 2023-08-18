import { useParams } from "next/navigation"
import { NextResponse } from "next/server"
import axios from "axios"

import { getCurrentUser } from "@/lib/session"

export async function POST(
  req: Request,
  { params }: { params: { product: string } }
) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await req.json()

    console.log("VERIFY CODE", body)

    const response = await axios.post(
      `${process.env.BACKEND_URL}/clothing/verify`,
      { code: body.OTP },
      {
        headers: {
          authorization: `Bearer ${user?.token}`,
        },
      }
    )

    console.log(response.data)

    if (response.data.status === "failed") {
      return new NextResponse(response.data.data.message, { status: 400 })
    }

    console.log("[API_CREATE_NEW_OFFER]", response.data)

    return NextResponse.json(response.data)
  } catch (error) {
    console.log("[CREATE_NEW_OFFER]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
