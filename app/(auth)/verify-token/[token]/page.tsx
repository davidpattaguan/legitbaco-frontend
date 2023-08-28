import { verify } from "crypto"
import { type Metadata } from "next"
import { notFound } from "next/navigation"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ErrorCard } from "@/components/error-card"
import { ChangePasswordForm } from "@/components/forms/change-password-form"
import { ResetPasswordForm } from "@/components/forms/reset-password-form"
import { Shell } from "@/components/shell/shell"

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Enter your email to reset your password",
}

async function verifyToken(token: string) {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/verify-reset-token`,
      {
        method: "POST",
        body: JSON.stringify({
          token,
        }),
      }
    )

    const data = await response.json()

    return data
  } catch (error) {
    return notFound()
  }
}

export default async function ResetPasswordPage({
  params,
}: {
  params: { token: string }
}) {
  const isTokenVerified = await verifyToken(params.token)

  console.log(isTokenVerified)

  if (isTokenVerified.message == "Invalid or expired token") {
    console.log("INVALID TOKEN")
  }

  return (
    <>
      {" "}
      <Shell className="max-w-lg">
        {isTokenVerified.message == "Invalid or expired token" ? (
          <>
            <ErrorCard
              retryLink="/forgot-password"
              retryLinkText="Back to forgot password"
              title="Reset Password Error!"
              description="Reset Token Expired. Please reset password again"
            />
          </>
        ) : (
          <>
            {" "}
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Enter New Password</CardTitle>
                <CardDescription>Enter your new password.</CardDescription>
              </CardHeader>
              <CardContent>
                <ChangePasswordForm />
              </CardContent>
            </Card>
          </>
        )}
      </Shell>{" "}
    </>
  )
}
