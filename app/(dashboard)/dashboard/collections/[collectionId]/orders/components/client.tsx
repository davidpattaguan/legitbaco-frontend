"use client"

import React from "react"
import { useParams, useRouter } from "next/navigation"

import { DataTable } from "@/components/ui/data-table"

import { BillboardsColumn, columns } from "./columns"

interface BillboardClientProps {
  data: BillboardsColumn[]
}

const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <DataTable searchKey="label" columns={columns} data={data} />
    </>
  )
}

export default BillboardClient
