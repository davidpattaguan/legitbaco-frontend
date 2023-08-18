"use client"

import { useEffect, useState } from "react"
import * as z from "zod"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Modal } from "@/components/ui/modal"

import QrForm from "./qr-form"
import TradeForm from "./trade-form"

const formSchema = z.object({
  name: z.string().min(2).max(50),
})

interface AlertModalProps {
  user: any
}

export const QrModal: React.FC<AlertModalProps> = ({ user }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <Dialog open={!user}>
        <DialogContent>
          <DialogTitle>Redeem This Item</DialogTitle>
          <DialogDescription>Redeem This Item to continue.</DialogDescription>

          <QrForm />
        </DialogContent>
      </Dialog>
    </>
  )
}
