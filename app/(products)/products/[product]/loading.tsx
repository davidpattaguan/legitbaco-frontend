import { Skeleton } from "@/components/ui/skeleton"

interface PageProps {
  params: { product: string }
}

export default async function IndexPage({ params }: PageProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 container">
      <div className="mt-5">
        <Skeleton className="w-full h-[90vh] rounded-lg" />
      </div>
      <div>
        <div className="mt-6 flex flex-col gap-5">
          <Skeleton className="w-full h-[30px] rounded-lg ml-5" />
          <Skeleton className="w-full h-[30px] rounded-lg ml-5" />
          <Skeleton className="w-full h-[30px] rounded-lg ml-5" />
          <Skeleton className="w-full h-[400px] rounded-lg ml-5" />
          <Skeleton className="w-full h-[400px] rounded-lg ml-5" />
        </div>
      </div>
    </div>
  )
}
