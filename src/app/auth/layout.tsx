import { Metadata } from "next";
import { FC } from "react";

interface LayoutProps {
    children: any;
}

export const metadata: Metadata = {
    title: "Money Mate Auth",
    description: "Login or Signup with money mate",
};

const Layout: FC<LayoutProps> = ({ children }) => {
    return children;
};

export default Layout;
