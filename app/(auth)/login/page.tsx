import { Metadata } from "next"
import Link from "next/link"
import { signIn } from "next-auth/react"

import { cn } from "@/lib/utils"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import OAuthSignIn from "@/components/auth/oauth-signin"
import { UserAuthForm } from "@/components/forms/user-auth-form"
import { Icons } from "@/components/icons"
import { Shell } from "@/components/shell/shell"

// import { UserAuthForm } from "@/components/user-auth-form"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}

export default function LoginPage({ searchParams }: any) {
  return (
    <Shell className="max-w-md">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription>
            Choose your preferred sign in method
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {/* <OAuthSignIn /> */}
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
          <UserAuthForm />
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-center gap-2">
          <div className="text-sm text-muted-foreground">
            <span className="mr-1 hidden sm:inline-block">
              Don&apos;t have an account?
            </span>
            <Link
              aria-label="Sign up"
              href="/register"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Register
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
  )
}
