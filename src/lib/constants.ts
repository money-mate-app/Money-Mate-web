import { z } from "zod";
export const SERVER_MODE = typeof window === undefined;
export const __DEV__ = process.env.NODE_ENV;

export const env = {
    NEXT_PUBLIC_FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID!,
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET:
        process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    NEXT_PUBLIC_MICROSOFT_CLIENT_ID:
        process.env.NEXT_PUBLIC_MICROSOFT_CLIENT_ID!,
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL!,
};

z.object({
    NEXT_PUBLIC_SERVER_URL: z.string(),
    NEXT_PUBLIC_FACEBOOK_APP_ID: z.string(),
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: z.string(),
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: z.string(),
    NEXT_PUBLIC_MICROSOFT_CLIENT_ID: z.string(),
}).parse(env);
