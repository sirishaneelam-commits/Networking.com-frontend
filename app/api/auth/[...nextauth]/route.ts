import NextAuth, { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";


export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      if (!profile) return false;
      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };