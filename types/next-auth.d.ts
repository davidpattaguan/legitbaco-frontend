import { Account, DefaultSession, User } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    email: string
    firstName: string
    lastName: string
    role: string
    picture: string
    token: string
    onboarding: boolean
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: string
      email: string
      firstName: string
      lastName: string
      role: string
      picture: string
      token: string
      onboarding: boolean
    }
  }
  interface User {
    id: string
    email: string
    firstName: string
    lastName: string
    role: string
    picture: string
    token: string
    onboarding: boolean
  }
}
