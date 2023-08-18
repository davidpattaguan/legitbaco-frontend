import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import axios from "axios"

import { getCurrentUser } from "@/lib/session"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AddProductForm } from "@/components/add-product-form"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export const metadata: Metadata = {
  title: "New Product",
  description: "Add a new product",
}

interface NewProductPageProps {
  params: {
    storeId: string
  }
}

async function getCategories(user: any) {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/clothing/categories/list`,
      { method: "POST", headers: { Authorization: `Bearer ${user.token}` } }
    )

    const data = await response.json()

    return data
  } catch (error) {
    return notFound()
  }
}

export default async function NewProductPage({ params }: NewProductPageProps) {
  const storeId = Number(params.storeId)

  const user = await getCurrentUser()

  if (!user) {
    redirect("/sigin")
  }

  const data = await getCategories(user)

  return (
    <DashboardShell>
      <DashboardHeader
        text="Add a new product for your store here"
        heading="New Product"
      ></DashboardHeader>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Add product</CardTitle>
          <CardDescription>Add a new product to your store</CardDescription>
        </CardHeader>
        <CardContent>
          <AddProductForm storeId={storeId} categories={data.data} />
        </CardContent>
      </Card>
    </DashboardShell>
  )
}
