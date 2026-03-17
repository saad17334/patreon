import NextAuth from "next-auth"
import AppleProvider from "next-auth/providers/apple"
import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

// Logging to help debug in Vercel logs
console.log("🔐 NextAuth API loaded with env vars:", {
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  NEXTAUTH_SECRET: !!process.env.NEXTAUTH_SECRET,
  GITHUB_ID: !!process.env.GITHUB_ID,
  GITHUB_SECRET: !!process.env.GITHUB_SECRET,
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

  // Secret used for session encryption — _must_ be set in Vercel env vars
  secret: process.env.NEXTAUTH_SECRET,

  // Optional: Add debug so logs show more info on failure
  debug: process.env.NODE_ENV === "production",
})

// Export as GET and POST for App Router handler
export { handler as GET, handler as POST }