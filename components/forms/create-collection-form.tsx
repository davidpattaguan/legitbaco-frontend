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
  name: z.string().min(1),
  contact_no: z.string().min(1),
  email: z.string().min(1),
  background_image: z.string().min(1),
})

type FormData = z.infer<typeof formSchema>

export function CreateCollectionForm() {
  const { toast } = useToast()
  const router = useRouter()
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true)
      await axios.post(`/api/collections/new-collection`, data)
      router.refresh()
      router.push(`/dashboard/collections`)
      toast({
        title: "Collection Created!",
        description: "Successfully added a Collection",
        variant: "default",
      })
    } catch (error) {
      console.log(error as any)
      if (error.status == 400) {
        return toast({
          title: "Collection Creation Failed",
          description: "Shop Existing",
          variant: "destructive",
        })
      }
      toast({
        title: "Collection Creation Failed",
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Collection Name</FormLabel>
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
            name="contact_no"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
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
            name="background_image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Background Image Url</FormLabel>
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

          <Button disabled={loading} className="w-full mt-5" type="submit">
            Create Collection
          </Button>
        </form>
      </Form>
    </>
  )
}
