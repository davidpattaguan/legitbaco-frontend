import React from "react"
import { notFound, redirect } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

import BillboardClient from "./components/client"

export const revalidate = 0

async function getAllProductsByCollection(user: any, id: any) {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/clothing/operations/colletions/offers/list`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shop_id: id,
        }),
      }
    )

    const data = await response.json()

    return data
  } catch (error) {
    return notFound()
  }
}

const page = async ({ params }: { params: { collectionId: string } }) => {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/signin")
  }

  const items = await getAllProductsByCollection(user, params.collectionId)

  console.log("OWN COLLECTION", items.user)
  console.log(params.collectionId)

  return (
    <DashboardShell>
      <DashboardHeader
        text="Manage your trades and orders"
        heading="Orders"
      ></DashboardHeader>
      <BillboardClient data={items.data} />
    </DashboardShell>
  )
}

export default page
