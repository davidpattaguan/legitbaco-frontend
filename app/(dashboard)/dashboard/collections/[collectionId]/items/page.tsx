import React from "react"
import Link from "next/link"
import { notFound, redirect, useParams } from "next/navigation"

import { getCurrentUser } from "@/lib/session"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"
import { CollectionItemsTable } from "@/components/tables/collection-items-table"

async function getAllItems(user: any, id: any) {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/clothing/shop/${id}/collections/?sort=asc`,
      { method: "POST", headers: { Authorization: `Bearer ${user.token}` } }
    )

    const data = await response.json()

    return data
  } catch (error) {
    return notFound()
  }
}

async function getStore(user: any, id: any) {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/clothing/shop/get/${id}`,
      { method: "POST", headers: { Authorization: `Bearer ${user.token}` } }
    )

    const data = await response.json()

    return data
  } catch (error) {
    return notFound()
  }
}

const page = async ({
  params,
  searchParams,
}: {
  params: { collectionId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/signin")
  }

  const store = await getStore(user, params.collectionId)

  if (store.data.length == 0) {
    redirect("/dashboard/collections")
  }

  const items = await getAllItems(user, params.collectionId)

  return (
    <DashboardShell>
      <DashboardHeader text="Products" heading="Collection">
        <Link
          href={`/dashboard/collections/${params.collectionId}/items/new`}
          className={cn(buttonVariants({ variant: "default" }), "")}
        >
          Add Product
        </Link>
      </DashboardHeader>

      <CollectionItemsTable items={items.data} />
    </DashboardShell>
  )
}

export default page
