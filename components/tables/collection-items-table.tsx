"use client"

import React from "react"

import { ProductCardAdmin } from "../product-card-admin"

export const CollectionItemsTable = ({ items }: any) => {
  return (
    <div>
      {items.length <= 0 ? (
        <>Empty</>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-2">
            {items.map((item: any) => {
              return (
                <>
                  <ProductCardAdmin product={item} />
                </>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
