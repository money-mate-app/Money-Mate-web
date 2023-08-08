"use client";
import { type ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient, env } from "@/lib";
import SocketProvider from "./SocketProvider";
import { NextAuthProvider } from "./NextAuthProvider";
import {Toaster} from "react-hot-toast";

export function Providers({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            {env.__DEV__ && <ReactQueryDevtools />}
            <NextAuthProvider>
                <SocketProvider>{children}<Toaster/></SocketProvider>
            </NextAuthProvider>
        </QueryClientProvider>
    );
}
