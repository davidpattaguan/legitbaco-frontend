import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"

import { axiosPublic } from "./axiosclient"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        const response = await axiosPublic.post(
          `${process.env.BACKEND_URL}/login` as string,
          {
            email: credentials.email,
            password: credentials.password,
          }
        )

        if (response.data.status === "failed") {
          throw Error(response.data.message)
        }

        if (response.data.status == "success") {
          return response.data.data
        } else {
          throw new Error("Invalid credentials")
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.auth.id
        token.email = user.auth.email
        token.firstName = user.auth.lastName
        token.lastName = user.auth.lastName
        token.role = user.auth.role
        token.picture = user.auth.avatar
        token.token = user.token
      }

      return token
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.email = token.email
        session.user.token = token.token
        session.user.firstName = token.firstName
        session.user.lastName = token.lastName
        session.user.role = token.role
        session.user.picture = token.picture
      }

      return session
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 604500,
  },
  pages: {
    signIn: "/login",
  },
  debug: process.env.NODE_ENV == "development",
}
