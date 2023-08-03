import type { ActiveItem, MenuItemData, SubMenuItemData } from "..";
import { Button } from "@/components";
import Link from "next/link";

type Props = {
    navItem: MenuItemData;
    activeItem: ActiveItem;
};

const NavSubItem = ({
    subItem,
    isActive,
}: {
    subItem: SubMenuItemData;
    isActive: boolean;
}) => {
    const Icon = subItem.icon;
    return (
        <Link href={subItem.target}>
            <Button
                variant={isActive ? "secondary" : "ghost"}
                className={`my-1 w-full justify-start rounded-sm text-muted-foreground hover:!text-white ${
                    isActive && "bg-teal-500 text-white hover:bg-teal-500"
                } `}
            >
                <Icon className={`mr-3 h-5 w-5 `} />
                <h4
                    className={`scroll-m-20 text-lg font-medium tracking-tight`}
                >
                    {subItem.text}
                </h4>
            </Button>
        </Link>
    );
};

export default function NavItem({ navItem, activeItem }: Props) {
    const { key, text, icon, items } = navItem;
    const Icon = icon;
    return (
        <div className="mt-4 pb-2">
            <h2 className="mb-2 flex items-center px-4 text-base font-extrabold uppercase tracking-tight text-zinc-200">
                <Icon className="mr-3 h-8 w-8" />
                {text}
            </h2>
            <div className="space-y-1 px-6">
                {items.map((subItem) => {
                    const { menuItem, subMenuItem } = activeItem;
                    const isActive =
                        key === menuItem && subMenuItem === subItem.item;
                    return (
                        <NavSubItem
                            key={subItem.item}
                            subItem={subItem}
                            isActive={isActive}
                        />
                    );
                })}
            </div>
        </div>
    );
}
