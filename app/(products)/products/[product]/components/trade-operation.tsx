"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"

import { TradeModal } from "./trade-modal"

const TradeOperation = () => {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const { data: user } = useSession()

  const requestTrade = () => {
    if (!user) {
      router.push("/login")
    } else {
      setOpen(true)
    }
  }

  return (
    <>
      <TradeModal
        isOpen={open}
        onClose={() => setOpen(false)}
        loading={loading}
      />
      <Button className="w-full h-16" onClick={requestTrade}>
        Request Trade
      </Button>
    </>
  )
}

export default TradeOperation
