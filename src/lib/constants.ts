import { z } from "zod";

export const SERVER_MODE = typeof window === undefined;
export const env = {
    __DEV__: process.env.NODE_ENV !== "production",
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL!,
    NEXT_PUBLIC_NEXTAUTH_SECRET: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET!,
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET:
        process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    NEXT_PUBLIC_FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID!,
    NEXT_PUBLIC_FACEBOOK_APP_SECRET:
        process.env.NEXT_PUBLIC_FACEBOOK_APP_SECRET!,
    NEXT_PUBLIC_GITHUB_APP_ID: process.env.NEXT_PUBLIC_GITHUB_APP_ID!,
    NEXT_PUBLIC_GITHUB_APP_SECRET: process.env.NEXT_PUBLIC_GITHUB_APP_SECRET!,
    NEXT_PUBLIC_DISCORD_APP_ID: process.env.NEXT_PUBLIC_DISCORD_APP_ID!,
    NEXT_PUBLIC_DISCORD_APP_SECRET: process.env.NEXT_PUBLIC_DISCORD_APP_SECRET!,
};

z.object({
    NEXT_PUBLIC_SERVER_URL: z
        .string({
            required_error: "Server URL is required",
        })
        .min(10, "Please provide a valid URL"),
    NEXT_PUBLIC_NEXTAUTH_SECRET: z
        .string({
            required_error: "Next Auth Secret is required",
        })
        .min(10, "Please provide a valid Next Auth Secret"),
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: z
        .string({
            required_error: "Google Client ID is required",
        })
        .min(10, "Please provide a valid Google Client ID"),
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: z
        .string({
            required_error: "Google Client Secret is required",
        })
        .min(10, "Please provide a valid Google Client Secret"),
    NEXT_PUBLIC_FACEBOOK_APP_ID: z
        .string({
            required_error: "Facebook App ID is required",
        })
        .min(10, "Please provide a valid Facebook App ID"),
    NEXT_PUBLIC_FACEBOOK_APP_SECRET: z
        .string({
            required_error: "Facebook App Secret is required",
        })
        .min(10, "Please provide a valid Facebook App Secret"),
    NEXT_PUBLIC_GITHUB_APP_ID: z
        .string({
            required_error: "Github App ID is required",
        })
        .min(10, "Please provide a valid Github App ID"),
    NEXT_PUBLIC_GITHUB_APP_SECRET: z
        .string({
            required_error: "Github App Secret is required",
        })
        .min(10, "Please provide a valid Github App Secret"),
    NEXT_PUBLIC_DISCORD_APP_ID: z
        .string({
            required_error: "Github App ID is required",
        })
        .min(10, "Please provide a valid Github App ID"),
    NEXT_PUBLIC_DISCORD_APP_SECRET: z
        .string({
            required_error: "Github App Secret is required",
        })
        .min(10, "Please provide a valid Github App Secret"),
}).parse(env);
