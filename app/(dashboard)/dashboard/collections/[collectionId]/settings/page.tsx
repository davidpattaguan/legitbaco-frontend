import React from "react"

import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

const page = () => {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage your Store"
      ></DashboardHeader>
      <div className="px-2">Hi</div>
    </DashboardShell>
  )
}

export default page
