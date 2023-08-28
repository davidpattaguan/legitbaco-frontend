export default async function sitemap() {
  const baseUrl = "https://www.legitba.co"

  return [{ url: baseUrl, lastModified: new Date() }]
}
