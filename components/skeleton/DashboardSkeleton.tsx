import React from "react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const DashboardSkeleton = () => {
  return (
    <>
      <div className="gap-5 flex flex-col mb-7">
        <Skeleton className="h-10 w-1/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                {" "}
                <Skeleton className="h-5 w-2/5" />
              </TableHead>
              <TableHead>
                {" "}
                <Skeleton className="h-5 w-2/5" />
              </TableHead>
              <TableHead>
                {" "}
                <Skeleton className="h-5 w-2/5" />
              </TableHead>
              <TableHead>
                {" "}
                <Skeleton className="h-5 w-2/5" />
              </TableHead>
              <TableHead>
                {" "}
                <Skeleton className="h-5 w-2/5" />
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>
                {" "}
                <Skeleton className="h-5" />
              </TableCell>
              <TableCell>
                {" "}
                <Skeleton className="h-5" />
              </TableCell>
              <TableCell>
                {" "}
                <Skeleton className="h-5" />
              </TableCell>
              <TableCell>
                {" "}
                <Skeleton className="h-5" />
              </TableCell>
              <TableCell>
                {" "}
                <Skeleton className="h-10" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {" "}
                <Skeleton className="h-5" />
              </TableCell>
              <TableCell>
                {" "}
                <Skeleton className="h-5" />
              </TableCell>
              <TableCell>
                {" "}
                <Skeleton className="h-5" />
              </TableCell>
              <TableCell>
                {" "}
                <Skeleton className="h-5" />
              </TableCell>
              <TableCell>
                {" "}
                <Skeleton className="h-10" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                {" "}
                <Skeleton className="h-5" />
              </TableCell>
              <TableCell>
                {" "}
                <Skeleton className="h-5" />
              </TableCell>
              <TableCell>
                {" "}
                <Skeleton className="h-5" />
              </TableCell>
              <TableCell>
                {" "}
                <Skeleton className="h-5" />
              </TableCell>
              <TableCell>
                {" "}
                <Skeleton className="h-10" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  )
}
