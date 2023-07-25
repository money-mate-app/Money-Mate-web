export const {
    NEXT_PUBLIC_FACEBOOK_APP_ID = "",
    NEXT_PUBLIC_GOOGLE_CLIENT_ID = "",
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET = "",
    NEXT_PUBLIC_MICROSOFT_CLIENT_ID = "",
    NEXT_PUBLIC_SERVER_URL = "",
} = process.env;
export const SERVER_MODE = typeof window === undefined;
export const __DEV__ = process.env.NODE_ENV;
