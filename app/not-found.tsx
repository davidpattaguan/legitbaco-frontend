import { ErrorCard } from "@/components/error-card"
import { Shell } from "@/components/shell/shell"

export default function ProductNotFound() {
  return (
    <Shell variant="centered" className="max-w-md">
      <ErrorCard
        title="Something Went Wrong!"
        description="Please try again."
        retryLink="/"
        retryLinkText="Go to Home"
      />
    </Shell>
  )
}
