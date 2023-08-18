import React from "react"
import { notFound, redirect, useRouter } from "next/navigation"

import { getCurrentUser } from "@/lib/session"

// Function to get collections
async function getCollections(user: any) {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/clothing/shop/usershop`,
      { method: "POST", headers: { Authorization: `Bearer ${user.token}` } }
    )

    const data = await response.json()

    return data
  } catch (error) {
    return notFound()
  }
}

async function checkOnBoarding(user: any) {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/user/current`, {
      method: "POST",
      headers: { Authorization: `Bearer ${user.token}` },
    })

    const data = await response.json()

    return data
  } catch (error) {
    return notFound()
  }
}

export const CollectionsPage = async () => {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/signin")
  }

  const checkOnBoardingStatus = await checkOnBoarding(user)

  if (checkOnBoardingStatus.data.onboarding == false) {
    redirect("/onboarding")
  }

  const collections = await getCollections(user)

  if (collections.status == "unauthorized") {
    redirect("/")
  }

  if (collections.data.length == 0) {
    redirect(`/create-collection`)
  } else {
    redirect(`/dashboard/collections/${collections.data[0].id}`)
  }
}

export default CollectionsPage
