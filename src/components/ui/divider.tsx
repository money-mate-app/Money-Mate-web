import * as React from "react";
import { cn } from "@/lib/utils";

export const Divider = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className }, ref) => (
    <div
        ref={ref}
        className={cn(
            "border-none h-[2px] bg-white",
            className,
        )}
    />
));
