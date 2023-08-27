import { MainNavItem } from "@/types"

import { productCategories } from "@/config/productCategories"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Legitba.co",
  description:
    "Legitba.co is an Authenticator and Verificator Website for your Items",
  links: {
    facebook: "facebook.com/legitbaco",
  },

  mainNav: [
    {
      title: "Lobby",
      items: [
        {
          title: "Collections",
          href: "/collections",
          description: "Browse Collections From Different Users!",
          items: [],
        },
        {
          title: "Items",
          href: "/products",
          description: "Find the next Item for your collection ",
          items: [],
        },
      ],
    },
    ...productCategories.map((category) => ({
      title: category.title,
      items: [
        {
          title: "All",
          href: `/categories/`,
          description: `All ${category.title}.`,
          items: [],
        },
        ...category.subcategories.map((subcategory) => ({
          title: subcategory.title,
          href: `/categories/${subcategory.slug}`,
          description: subcategory.description,
          items: [],
        })),
      ],
    })),
  ] satisfies MainNavItem[],

  footerNav: [
    // {
    //   title: "Help",
    //   items: [
    //     {
    //       title: "About",
    //       href: "/about",
    //       external: false,
    //     },
    //     {
    //       title: "Contact",
    //       href: "/contact",
    //       external: false,
    //     },
    //     {
    //       title: "Terms",
    //       href: "/terms",
    //       external: false,
    //     },
    //     {
    //       title: "Privacy",
    //       href: "/privacy",
    //       external: false,
    //     },
    //   ],
    // },
  ],
}
