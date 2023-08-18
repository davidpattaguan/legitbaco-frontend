import { notFound } from "next/navigation"
import axios from "axios"
import { z } from "zod"

import { ProductRequest } from "@/lib/validations/product"

interface PageProps {
  params: { product: string }
}

export default async function IndexPage({ params }: PageProps) {
  return <section className="container">Loading</section>
}
