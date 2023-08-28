"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

const formSchema = z.object({
  email: z.string().min(2).max(50),
})

type Inputs = z.infer<typeof formSchema>

export function ResetPasswordForm() {
  const router = useRouter()
  const { toast } = useToast()

  const { mutate: forgotPassword, isLoading } = useMutation({
    mutationFn: async (data: Inputs) => {
      await axios.post(`/api/auth/forgot-password`, data)
    },
    onError: (err) => {
      toast({ title: "Error changing password!", variant: "destructive" })
    },
    onSuccess: (data) => {
      router.refresh()
      router.push(`/dashboard`)
      toast({
        title: "Please Check your Email for the Reset Password Instructions",
      })
    },
  })

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(data: Inputs) {
    forgotPassword(data)
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="rodneymullen180@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading}>
          {isLoading && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Continue
          <span className="sr-only">
            Continue to reset password verification
          </span>
        </Button>
      </form>
    </Form>
  )
}
