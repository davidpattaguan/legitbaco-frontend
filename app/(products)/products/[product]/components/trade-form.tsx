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
  amount: z.coerce // SOLUTION
    .number(),
})

type TradeFormValue = z.infer<typeof formSchema>

const TradeForm = () => {
  const router = useRouter()
  const params = useParams()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const form = useForm<TradeFormValue>({
    resolver: zodResolver(formSchema),
  })
  const onSubmit = async (data: TradeFormValue) => {
    try {
      setLoading(true)

      await axios.post(`/api/items/${params.product}/trade`, {
        ...data,
        clothing_id: params.product,
      })

      router.refresh()
      router.push(`/`)
      toast({
        title: "Item Added!",
        description: "Successfully added an Item",
        variant: "default",
      })
    } catch (error) {
      toast({
        title: "Trade Offer error",
        description: "Please try again!",
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
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl className="flex justify-end w-full">
                <Input disabled={loading} placeholder="Add Amount" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={loading} className="ml-auto" type="submit">
          Offer Trade
        </Button>
      </form>
    </Form>
  )
}

export default TradeForm
