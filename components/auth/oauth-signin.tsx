"use client"

import * as React from "react"
import { FC } from "react"
import { signIn } from "next-auth/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { Icons } from "../icons"
import { useToast } from "../ui/use-toast"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const OAuthSignIn: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const loginWithGoogle = async () => {
    setIsLoading(true)

    try {
      await signIn("google")
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Google",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button
        // isLoading={isLoading}
        type="button"
        size="sm"
        className="w-full"
        onClick={loginWithGoogle}
        disabled={isLoading}
      >
        {isLoading ? null : <Icons.admin className="h-4 w-4 mr-2" />}
        Google
      </Button>
    </div>
  )
}

export default OAuthSignIn
