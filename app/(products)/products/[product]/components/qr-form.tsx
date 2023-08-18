"use client"

import React, { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
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
import { Modal } from "@/components/ui/modal"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  OTP: z.coerce // SOLUTION
    .number(),
})

type TradeFormValue = z.infer<typeof formSchema>

const QrForm = () => {
  const router = useRouter()
  const params = useParams()
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<TradeFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: { OTP: 0 },
  })
  const onSubmit = async (data: TradeFormValue) => {
    try {
      setLoading(true)

      await axios.post(`/api/items/verify`, data)
      router.refresh()
      router.push(`/`)
      toast({
        title: "Item Added!",
        description: "Successfully added an Item",
        variant: "default",
      })
    } catch (error) {
      toast({
        title: "OTP is Not Valid",
        description: "Kindly see the Legitba.co Card OTP",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="OTP"
          render={({ field }) => (
            <FormItem>
              <FormLabel>OTP</FormLabel>
              <FormControl className="flex justify-end w-full">
                <Input
                  disabled={loading}
                  placeholder="OTP ex:123456"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={loading} className="ml-auto" type="submit">
          Claim item
        </Button>
      </form>
    </Form>
  )
}

export default QrForm
