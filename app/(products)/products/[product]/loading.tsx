interface PageProps {
  params: { product: string }
}

export default async function IndexPage({ params }: PageProps) {
  return <section className="container">Loading</section>
}
