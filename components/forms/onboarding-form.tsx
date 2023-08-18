"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useForm } from "react-hook-form"
import * as z from "zod"

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

import { Button } from "../ui/button"

const formSchema = z.object({
  firstname: z.string().min(1),
  lastname: z.string().min(1),
})

type FormData = z.infer<typeof formSchema>

export function OnboardingForm() {
  const { toast } = useToast()
  const router = useRouter()
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true)
      await axios.post(`/api/users/update`, data)
      router.refresh()
      router.push(`/dashboard/collections`)
      toast({
        title: "Item Added!",
        description: "Successfully added an Item",
        variant: "default",
      })
    } catch (error) {
      toast({
        title: "Onboarding Failed",
        description: "An error occured. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 w-full"
        >
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl className="flex justify-end w-full">
                  <Input
                    disabled={loading}
                    placeholder="Enter your first Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl className="flex justify-end w-full">
                  <Input
                    disabled={loading}
                    placeholder="Enter your last Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} className="w-full mt-5" type="submit">
            Finish Onboarding
          </Button>
        </form>
      </Form>
    </>
  )
}
