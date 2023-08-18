import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { buttonVariants } from "@/components/ui/button"
import { CreateCollectionForm } from "@/components/forms/create-collection-form"
import { OnboardingForm } from "@/components/forms/onboarding-form"

// import { UserAuthForm } from "@/components/user-auth-form"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}

export default function Onboarding({ searchParams }: any) {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          {/* <Icons.chevronLeft className="mr-2 h-4 w-4" /> */}
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[500px]">
        <div className="flex flex-col space-y-2 text-center items-center justify-center">
          {searchParams.message && (
            <Alert variant="destructive">
              <AlertTitle>{searchParams.message}</AlertTitle>
            </Alert>
          )}
          {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
          <h1 className="text-2xl font-semibold tracking-tight">
            Now, Create your First Collection.
          </h1>
          <p className="text-sm text-muted-foreground">
            Thank you for choosing Legitba.co! Complete the following details to
            start using our app!
          </p>
        </div>
        <CreateCollectionForm />
      </div>
    </div>
  )
}
