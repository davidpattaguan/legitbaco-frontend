import { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Command } from "@/components/ui/command"
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
      {/* <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80)",
            }}
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Command className="mr-2 h-6 w-6" /> {siteConfig.name}
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center mt-16 md:mt-0">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <SignupForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div> */}

      <Shell className="max-w-xl">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Create an Account</CardTitle>
            <CardDescription>
              Choose your preferred sign in method
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {/* <OAuthSignIn /> */}
            <Button
              aria-label={""}
              key={""}
              variant="outline"
              className="w-full bg-background sm:w-auto"
              // onClick={() => {}}
              disabled={true}
            >
              <Icons.admin className="mr-2 h-4 w-4" aria-hidden="true" />
              Google Login Coming Soon
            </Button>
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
