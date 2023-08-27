import Link from "next/link"

import { ErrorCard } from "@/components/error-card"
import { Shell } from "@/components/shell/shell"

export default function NotFound() {
  return (
    <Shell variant="centered" className="max-w-md">
      <ErrorCard
        title="Product Not Found!"
        description="Please try again."
        retryLink="/"
        retryLinkText="Go to Home"
      />
    </Shell>
  )
}
