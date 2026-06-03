import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  trustHost: true,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (
          credentials?.email === "demo@nexus.dev" &&
          credentials?.password === "demo123"
        ) {
          return { id: "1", email: "demo@nexus.dev", name: "Demo User" };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user
      return token
    },
    async session({ session }) { 
      return session
    },
    async redirect() {
      return "http://localhost:3000"
    },
  },
  pages: {
    signIn: "/login",
  },
});
