"use client"

import { ColumnDef } from "@tanstack/react-table"

// import { CellAction } from "./cell-action";

export type BillboardsColumn = {
  user: string
  amount: number
  clothing_id: {
    name: string
  }
}

export const columns: ColumnDef<BillboardsColumn>[] = [
  {
    accessorKey: "user.id",
    header: "Trade offered by",
  },
  {
    accessorKey: "clothing_id.name",
    header: "Item requested for trade",
  },
  {
    accessorKey: "amount",
    header: "Offered Amount",
  },

  // {
  //   id: "actions",
  //   cell: ({ row }) => <CellAction data={row.original} />,
  // },
]
