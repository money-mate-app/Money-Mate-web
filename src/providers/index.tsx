"use client";
import { type ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient, __DEV__ } from "@/lib";
import SocketProvider from "./SocketProvider";
import { NextAuthProvider } from "./NextAuthProvider";

export function Providers({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            {__DEV__ && <ReactQueryDevtools />}
            <NextAuthProvider>
                <SocketProvider>{children}</SocketProvider>
            </NextAuthProvider>
        </QueryClientProvider>
    );
}
