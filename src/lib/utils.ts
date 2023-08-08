import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as React from "react";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function lazyImport<
    T extends React.ComponentType<any>,
    I extends { [K2 in K]: T },
    K extends keyof I,
>(factory: () => Promise<I>, name: K): I {
    return Object.create({
        [name]: React.lazy(() =>
            factory().then((module) => ({ default: module[name] })),
        ),
    });
}

// Usage
// const { Home } = lazyImport(() => import("./Home"), "Home");

export function extractErrorMessage(err: any): string {
    if (err.length > 0) {
        return err[0].message;
    }

    return err.message;
}
