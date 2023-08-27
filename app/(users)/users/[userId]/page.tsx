import { notFound } from "next/navigation"

import { ProductCard } from "@/components/cards/product-card"

async function getuser(userId: string) {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/clothing/user/profile/${userId}`,
      { method: "POST" }
    )

    const data = await response.json()

    return data
  } catch (error) {
    return notFound()
  }
}
export default async function IndexPage({
  params,
}: {
  params: { userId: string }
}) {
  const user = await getuser(params.userId)

  console.log(user)

  if (user.data.user == null) {
    notFound()
  }

  return (
    <div className="container">
      <section className="relative h-96">
        <img
          src={user?.data.user.avatar}
          alt=""
          className="rounded-lg object-cover w-full absolute h-full brightness-50"
        />

        <div className="z-10 absolute bottom-0 px-5 py-5 flex flex-col gap-2 ">
          <img
            src={user?.data.user.avatar}
            alt=""
            className=" object-cover  rounded-full h-52 w-52  border-white border-2"
          />
          <h1 className="text-white font-bold text-2xl text-center">
            {user?.data.user.fullname}
          </h1>
        </div>
      </section>

      <section
        id="featured-products"
        aria-labelledby="featured-products-heading"
        className="space-y-6 mt-6"
      >
        <div className="flex items-center">
          <h2 className="flex-1 text-2xl font-medium sm:text-3xl">Items</h2>
        </div>
        {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {user?.data.items.map((item: any) => {
            return <ProductCard product={item} />
          })}
        </div> */}
      </section>

      <section
        id="featured-products"
        aria-labelledby="featured-products-heading"
        className="space-y-6 mt-6"
      >
        <div className="flex items-center">
          <h2 className="flex-1 text-2xl font-medium sm:text-3xl">Items</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {user?.data.collections.map((item: any) => {
            return <h1>Hello</h1>
          })}
        </div>
      </section>
    </div>
  )
}
