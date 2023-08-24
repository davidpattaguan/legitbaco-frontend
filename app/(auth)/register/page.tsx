import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import OAuthSignIn from "@/components/auth/oauth-signin"
import { SignupForm } from "@/components/forms/user-signup-form"
import { Icons } from "@/components/icons"
import { Shell } from "@/components/shell/shell"

export const metadata: Metadata = {
  title: "Register",
  description: "Create your own Legitba.co Account",
}

export default function RegisterPage() {
  return (
    <>
      <Shell className="max-w-md">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Create an Account</CardTitle>
            <CardDescription>
              Choose your preferred sign in method
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <OAuthSignIn />
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <SignupForm />
          </CardContent>
          <CardFooter className="flex flex-wrap items-center justify-center gap-2">
            <div className="text-sm text-muted-foreground">
              <span className="mr-1 hidden sm:inline-block">
                Already have an account?
              </span>
              <Link
                aria-label="Login"
                href="/login"
                className="text-primary underline-offset-4 transition-colors hover:underline"
              >
                Login
              </Link>
            </div>
            {/* <Link
              aria-label="Reset password"
              href="/signin/reset-password"
              className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
            >
              Reset password
            </Link> */}
          </CardFooter>
        </Card>
      </Shell>
    </>
  )
}
