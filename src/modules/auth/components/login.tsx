import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Input,
    Label,
    Icons,
    Button,
} from "@/components";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { OtpForm } from "./otp-form";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { useSendOtp } from "../services/otp";

type LoginProps = {
    showLoginPage: boolean;
    setShowLoginPage: (showLoginPage: boolean) => void;
};

export default function Login({ showLoginPage, setShowLoginPage }: LoginProps) {
    const [showOtpPage, setShowOtpPage] = useState(false);
    const [email, setEmail] = useState("");
    const sendOtpMutation = useSendOtp();

    async function handleClick() {
        await sendOtpMutation.mutateAsync({ email });
        setShowOtpPage(true);
    }

    if (showOtpPage)
        return <OtpForm email={email} setShowOtpPage={setShowOtpPage} />;

    return (
        <motion.div
            className={`flex-1 justify-start ${
                !showLoginPage && "hidden lg:flex"
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
                duration: 0.5,
            }}
        >
            <Card className="z-[2] w-full lg:w-full">
                <CardHeader className="space-y-1">
                    <CardTitle className="gap-2 text-2xl">
                        Sign in with
                        <span className="ml-2 text-2xl text-teal-300">
                            MoneyMate
                        </span>
                    </CardTitle>
                    <CardDescription>
                        Enter your email below to sign in with us
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid grid-cols-1 gap-6">
                        <Button
                            onClick={() => {
                                signIn("google");
                            }}
                            variant="outline"
                        >
                            <Icons.google className="mr-2 h-4 w-4" />
                            Sign in with Google
                        </Button>

                        <Button
                            variant="outline"
                            onClick={() => {
                                signIn("github");
                            }}
                        >
                            <AiFillGithub className="mr-2 h-4 w-4" />
                            Sign in with Github
                        </Button>

                        <Button
                            variant="outline"
                            onClick={() => {
                                signIn("discord");
                            }}
                        >
                            <FaDiscord className="mr-2 h-4 w-4" />
                            Sign in with Discord
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="m@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={sendOtpMutation.isLoading}
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        className="w-full"
                        onClick={handleClick}
                        disabled={sendOtpMutation.isLoading}
                    >
                        {sendOtpMutation.isLoading
                            ? "Sending OTP..."
                            : "Sign In"}
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
