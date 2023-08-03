import React from "react";
import { lazyImport } from "@/lib";
const { Sidebar } = lazyImport(() => import("@/modules/shared"), "Sidebar");

type Props = {};

export default function HomeComponent({}: Props) {
    return <Sidebar activeItem={{menuItem: "split-bills", subMenuItem: "friends"}}>Children</Sidebar>;
}
