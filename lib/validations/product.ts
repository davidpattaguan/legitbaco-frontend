import * as z from "zod"

export const productSchema = z.object({
  name: z.string().min(1, {
    message: "Must be at least 1 character",
  }),
  otp: z.string().min(1, {
    message: "Must be at least 1 character",
  }),
  image_link: z.string().min(1, {
    message: "Must be at least 1 character",
  }),
  clothing_id: z.string().min(1, {
    message: "Must be at least 1 character",
  }),

  description: z.string().min(15, {
    message: "Atleast 15 words Description is Required!",
  }),
  category: z.string().min(1, {
    message: "Category is Required!",
  }),
  subcategory: z.string().min(1, {
    message: "Subcategory is Required!",
  }),
  price: z.string().regex(/^\d+(\.\d{1,2})?$/, {
    message: "Must be a valid price",
  }),
  inventory: z.string().regex(/^\d+(\.\d{1,2})?$/, {
    message: "Must be a valid inventory",
  }),
  featured: z.boolean(),
  tradable: z.boolean(),
})

export const filterProductsSchema = z.object({
  query: z.string(),
})

export const getProductSchema = z.object({
  id: z.number(),
  storeId: z.number(),
})

export const getProductsSchema = z.object({
  limit: z.number().default(10),
  offset: z.number().default(0),
  categories: z
    .string()
    .regex(/^\d+.\d+$/)
    .optional()
    .nullable(),
  subcategories: z
    .string()
    .regex(/^\d+.\d+$/)
    .optional()
    .nullable(),
  sort: z
    .string()
    .regex(/^\w+.(asc|desc)$/)
    .optional()
    .nullable(),
  price_range: z
    .string()
    .regex(/^\d+-\d+$/)
    .optional()
    .nullable(),
  store_ids: z
    .string()
    .regex(/^\d+.\d+$/)
    .optional()
    .nullable(),
})
