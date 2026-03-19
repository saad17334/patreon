import NextAuth from "next-auth"
import AppleProvider from "next-auth/providers/apple"
import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import mongoose from "mongoose"
import User from "@/models/User"
import Payment from "@/models/Payment"

// MongoDB connection helper
let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

const connectDB = async () => {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGODB_URI);
    }

    cached.conn = await cached.promise;
    return cached.conn;
};

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
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        await connectDB();

        let email = user?.email;
        if (!email) {
          email = profile?.emails?.[0]?.value || `${profile.id}@github.com`;
        }

        let Username = null;
        if (user?.email) {
          Username = user.email.split("@")[0];
        } else if (profile?.login) {
          Username = profile.login;
        } else if (profile?.Username) {
          Username = profile.Username;
        } else {
          Username = `user_${Date.now()}`;
        }

        let currentUser = await User.findOne({ email });
        if (!currentUser) {
          currentUser = await User.create({ email, Username });
        }

        user.name = currentUser.Username;
      }
      return true;
    }
  }
})

export { handler as GET, handler as POST }