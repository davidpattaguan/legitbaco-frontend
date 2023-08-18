import { getServerSession } from "next-auth/next"
import * as z from "zod"

import { authOptions } from "@/lib/auth"
import { userAuthSchema } from "@/lib/validations/auth"

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const body = userAuthSchema.parse(json)

    const res = await fetch("https://api.legitba.co/register/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: body.email,
        password: body.password,
      }),
    })

    const data = await res.json()

    if (
      data.status == "failed" ||
      data.status.message ==
        "This email is already being used by another account"
    ) {
      return new Response(
        "This email is already registered by another account",
        { status: 403 }
      )
    }

    return new Response(JSON.stringify(res))
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}
