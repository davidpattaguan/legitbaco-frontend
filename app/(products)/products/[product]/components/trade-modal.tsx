"use client"

import { useEffect, useState } from "react"
import * as z from "zod"

import { Modal } from "@/components/ui/modal"

import TradeForm from "./trade-form"

const formSchema = z.object({
  name: z.string().min(2).max(50),
})

interface AlertModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  loading: boolean
}

export const TradeModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <Modal
        title="Are you sure?"
        description="This Action cannot be undone"
        isOpen={isOpen}
        onClose={onClose}
      >
        <TradeForm />
      </Modal>
    </>
  )
}
