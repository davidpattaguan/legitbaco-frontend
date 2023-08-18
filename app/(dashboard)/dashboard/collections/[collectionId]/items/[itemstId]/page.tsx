import type { Metadata } from "next"
import { redirect } from "next/navigation"
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
import { UpdateProductForm } from "@/components/forms/update-product-form"
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

export default async function NewProductPage({ params }: NewProductPageProps) {
  const storeId = Number(params.storeId)

  const user = await getCurrentUser()

  if (!user) {
    redirect("/sigin")
  }

  return (
    <DashboardShell>
      <DashboardHeader
        text="Update a product"
        heading="Update product"
      ></DashboardHeader>
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Update a Product</CardTitle>
          <CardDescription>Update an existing product</CardDescription>
        </CardHeader>
        <CardContent>
          <UpdateProductForm storeId={storeId} />
        </CardContent>
      </Card>
    </DashboardShell>
  )
}
