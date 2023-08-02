import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env
                .NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
        }),
        FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_APP_SECRET as string,
        }),
        GithubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_APP_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_APP_SECRET as string,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log("User data:", user);
            return true;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
