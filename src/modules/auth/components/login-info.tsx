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
            className={`mb-20 flex-1 flex-col items-start justify-center lg:flex ${
                showLoginPage && "hidden"
            }`}
            initial={{ x: "-50vw", scale: 0 }}
            animate={{ x: 0, scale: 1 }}
            transition={{
                duration: 0.5,
            }}
        >
            <div className="ml-[-0.75rem] aspect-square h-[150px] lg:mb-[-1.5rem]">
                <Image
                    src={Logo}
                    alt="Money mate logo"
                    blurDataURL={"/img/logo.png"}
                    priority
                />
            </div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-teal-300 lg:text-5xl">
                Join MoneyMate
            </h1>
            <h1 className="mt-3 scroll-m-20 text-4xl font-extrabold leading-snug tracking-tight lg:text-5xl">
                For a smarter financial journey.
            </h1>
            <h3 className="mt-10 scroll-m-20 text-2xl tracking-tight text-muted-foreground">
                Sign in now to take control of your income expenses, and group
                spending.
            </h3>
            <Button
                className=" mt-10 bg-teal-400 hover:bg-teal-500 lg:hidden"
                onClick={() => setShowLoginPage(true)}
            >
                Let's Go
            </Button>
        </motion.div>
    );
};
