import NextAuth from "next-auth"
import AppleProvider from "next-auth/providers/apple"
import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

// 🔍 Better logging (VERY IMPORTANT)
console.log("🔐 NextAuth ENV CHECK:", {
  NEXTAUTH_URL: process.env.NEXTAUTH_URL || "❌ NOT FOUND",
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ? "✅ FOUND" : "❌ NOT FOUND",
  GITHUB_ID: process.env.GITHUB_ID ? "✅ FOUND" : "❌ NOT FOUND",
  GITHUB_SECRET: process.env.GITHUB_SECRET ? "✅ FOUND" : "❌ NOT FOUND",
  NODE_ENV: process.env.NODE_ENV,
})

const handler = NextAuth({
  providers: [
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  // 🔴 Force explicit secret check
  secret: process.env.NEXTAUTH_SECRET,

  debug: true, // enable full logs

  // Optional: add error handler for more visibility
  events: {
    error(message) {
      console.error("❌ NextAuth ERROR:", message)
    },
  },
})

export { handler as GET, handler as POST }