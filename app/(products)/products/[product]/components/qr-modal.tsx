"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { User } from "@/types"
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

interface AlertModalProps {
  user: User
}

export const QrModal: React.FC<AlertModalProps> = ({
  user,
}: AlertModalProps) => {
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      {/* <Dialog>
        <DialogContent>
          <DialogTitle>Redeem This Item</DialogTitle>
          <DialogDescription>Redeem This Item to continue.</DialogDescription>
        </DialogContent>
      </Dialog> */}
      <Modal
        title="Are you sure?"
        description="This Action cannot be undone"
        isOpen={!user}
        onClose={() => {
          router.push("/")
        }}
      >
        <QrForm />
      </Modal>
    </>
  )
}
