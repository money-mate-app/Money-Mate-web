import React, { type ReactNode } from "react";
import { cn } from "@/lib";
import { Avatar, ScrollArea, AvatarFallback, Divider } from "@/components";
import { RxDashboard } from "react-icons/rx";
import {
    MdOutlineGroups,
    MdPayment,
    MdOutlineNotificationsActive,
    MdOutlinePendingActions,
    MdCallSplit,
    MdMiscellaneousServices,
} from "react-icons/md";
import { FiLogOut, FiUserCheck } from "react-icons/fi";
import { BiBullseye } from "react-icons/bi";
import { AiOutlineBarChart } from "react-icons/ai";
import { TfiTarget } from "react-icons/tfi";
import { PiWalletFill } from "react-icons/pi";
import NavItem from "./components/nav-item";
import Image from "next/image";
import Logo from "@/assets/images/money-mate-logo.gif";

type Props = {
    children: ReactNode;
    activeItem: ActiveItem;
} & React.HTMLAttributes<HTMLDivElement>;

export type ActiveItem =
    | HomeItem
    | SplitBillsItem
    | MoneyManagerItem
    | OtherItem;

export type HomeItem = {
    menuItem: "home";
    subMenuItem: "";
};

export type SplitBillsItem = {
    menuItem: "split-bills";
    subMenuItem: "dashboard" | "groups" | "friends" | "activity";
};

export type MoneyManagerItem = {
    menuItem: "money-manager";
    subMenuItem: "transaction" | "budget" | "stats" | "goals";
};

export type OtherItem = {
    menuItem: "others";
    subMenuItem: "notifications" | "reminders" | "logout";
};

export type MenuItems = "split-bills" | "money-manager" | "others";

export type SubMenuItemData = {
    item: string;
    text: string;
    target: string;
    icon: React.ElementType;
};
export type MenuItemData = {
    key: MenuItems;
    text: string;
    icon: React.ElementType;
    items: SubMenuItemData[];
};

const menuItemsData: MenuItemData[] = [
    {
        key: "split-bills",
        text: "Split Bills",
        icon: MdCallSplit,
        items: [
            {
                item: "dashboard",
                text: "Dashboard",
                target: "/",
                icon: RxDashboard,
            },
            {
                item: "groups",
                text: "Groups",
                target: "/",
                icon: MdOutlineGroups,
            },
            {
                item: "friends",
                text: "Friends",
                target: "/",
                icon: FiUserCheck,
            },
        ],
    },
    {
        key: "money-manager",
        text: "Money Manager",
        icon: PiWalletFill,
        items: [
            {
                item: "transaction",
                text: "Transaction",
                target: "/",
                icon: MdPayment,
            },
            { item: "budget", text: "Budget", target: "/", icon: BiBullseye },
            {
                item: "stats",
                text: "Stats",
                target: "/",
                icon: AiOutlineBarChart,
            },
            {
                item: "goals",
                text: "Goals",
                target: "/",
                icon: TfiTarget,
            },
        ],
    },
    {
        key: "others",
        text: "Others",
        icon: MdMiscellaneousServices,
        items: [
            {
                item: "notifications",
                text: "Notifications",
                target: "/",
                icon: MdOutlineNotificationsActive,
            },
            {
                item: "reminders",
                text: "Reminders",
                target: "/",
                icon: MdOutlinePendingActions,
            },
            {
                item: "logout",
                text: "Logout",
                target: "/auth",
                icon: FiLogOut,
            }
        ],
    },
];
export function Sidebar({ children, className, activeItem }: Props) {
    return (
        <ScrollArea>
            <div
                className={cn(
                    "absolute h-screen w-1/6 bg-black px-2 pb-12",
                    className,
                )}
            >
                <div className="my-2 flex items-center gap-4 px-2 py-4">
                    <Avatar className="ml-3 h-14 w-14 text-xl">
                        <AvatarFallback
                            className="bg-teal-500"
                            style={{ borderRadius: "4px !important" }}
                        >
                            VS
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="leading-7 text-zinc-500 [&:not(:first-child)]:mt-6">
                            Welcome back,
                        </p>
                        <h4 className="scroll-m-20 text-xl font-medium tracking-tight">
                            Vinay Sarda
                        </h4>
                    </div>
                </div>
                <Divider className="bg-zinc-900" />
                <div className="space-y-4 pb-4">
                    <div className="gap-4 px-3 py-2">
                        {menuItemsData.map((navItem) => {
                            return (
                                <>
                                    <NavItem
                                        key={navItem.key}
                                        navItem={navItem}
                                        activeItem={activeItem}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>
                <div className="absolute bottom-0 w-full">
                    <Divider className="bg-zinc-900 mb-2" />
                    <div className="left-4 flex items-center gap-4 px-4">
                        <Image src={Logo} alt="logo" width="50" height="50" />
                        <h1 className="scroll-m-20 text-lg font-bold tracking-tight lg:text-2xl">
                            MoneyMate
                        </h1>
                    </div>
                </div>
            </div>
            <ScrollArea className="h-screen w-5/6 p-4 lg:ml-[17%]">
                {children}
            </ScrollArea>
        </ScrollArea>
    );
}
