import NextAuth, { CredentialsSignin } from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/db/prisma-db"


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [GitHub],
    // session: {
    //     strategy: 'jwt'
    // },
    // adapter: PrismaAdapter(prisma),
    // callbacks: {
    //     async jwt({ token, user }) {
    //         if (user) {
    //             token.id = user.id;
    //             token.name = user.name
    //         }
    //         return token;
    //     },
    //     async session({ session, token }) {
    //         if (session.user) {
    //             session.user.id = token.id as string;
    //             session.user.name = token.name as string;
    //         };
    //         return session;
    //     }
    // }
})