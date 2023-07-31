"use client";
import { lazy, useState } from "react";
import { motion } from "framer-motion";
import { lazyImport } from "@/lib";
const Login = lazy(() => import("@/modules/auth/components/login"));
const { LoginInfoCard } = lazyImport(
    () => import("@/modules/auth/components/login-info"),
    "LoginInfoCard",
);

export default function AuthComponent() {
    const [showLoginPage, setShowLoginPage] = useState(false);
    return (
        <motion.div
            className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black p-6 md:p-20 lg:space-x-28 lg:p-44"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 1,
            }}
        >
            <LoginInfoCard
                showLoginPage={showLoginPage}
                setShowLoginPage={setShowLoginPage}
            />
            <Login
                showLoginPage={showLoginPage}
                setShowLoginPage={setShowLoginPage}
            />
        </motion.div>
    );
}
