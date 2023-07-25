import Logo from "@/assets/images/money-mate-black.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../../../components";

type LoginInfoCardProps = {
    showLoginPage: boolean;
    setShowLoginPage: (showLoginPage: boolean) => void;
};

export const LoginInfoCard = ({
    showLoginPage,
    setShowLoginPage,
}: LoginInfoCardProps) => {
    return (
        <motion.div
            className={`flex-1 flex-col items-start justify-center mb-20 lg:flex ${showLoginPage && "hidden"}`}
            initial={{ x: "-50vw", scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{
                duration: 0.5,
            }}
        >
            <div className="ml-[-0.75rem] lg:mb-[-1.5rem] aspect-square h-[150px]">
                <Image src={Logo} alt="Money mate logo" />
            </div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-teal-300">
                Join MoneyMate
            </h1>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight leading-snug lg:text-5xl mt-3">
                For a smarter financial journey.
            </h1>
            <h3 className="scroll-m-20 text-2xl tracking-tight mt-10 text-muted-foreground">
                Sign in now to take control of your income expenses, and group
                spending.
            </h3>
            <Button className=" mt-10 bg-teal-400 hover:bg-teal-500 lg:hidden"  onClick={() => setShowLoginPage(true)}>
                Let's Go
            </Button>
        </motion.div>
    );
};
