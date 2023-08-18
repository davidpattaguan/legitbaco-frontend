export function getSubcategories(category?: any, categories?: any) {
  if (!category) return []

  if (!categories) return []

  const subcategories =
    categories
      .find((c: any) => c.id === category)
      ?.sub_category.map((s: any) => ({
        value: s,
        label: s,
      })) ?? []

  return subcategories
}
