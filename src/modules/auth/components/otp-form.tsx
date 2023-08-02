import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Input,
    Label,
    Button,
} from "@/components";
import { motion } from "framer-motion";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { AiOutlineCloseCircle } from "react-icons/ai";

type Props = {
    setShowOtpPage: (showOtpPage: boolean) => void;
};

export function OtpForm({ setShowOtpPage }: Props) {
    const [otp, setOtp] = useState("");

    return (
        <motion.div
            className="relative flex-1 justify-start"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
                duration: 0.5,
            }}
        >
            <Button
                className="absolute right-2 top-3 text-red-600 hover:text-red-500"
                variant="ghost"
                size="icon"
                onClick={() => {
                    setShowOtpPage(false);
                }}
            >
                <AiOutlineCloseCircle className="h-6 w-6" />
            </Button>
            <Card className="z-[2] w-full lg:w-full">
                <CardHeader className="space-y-1">
                    <CardTitle className="gap-2 text-2xl">
                        Sign in with
                        <span className="ml-2 text-2xl text-teal-300">
                            MoneyMate
                        </span>
                    </CardTitle>
                    <CardDescription>
                        We have sent a OTP to your email ba**@dipainhouse.com
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 pb-3">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            className="mb-4 mt-1"
                        />
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            // renderSeparator={<span className="w-4" />}
                            containerStyle={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "0.5rem",
                            }}
                            inputStyle={{
                                width: "3rem",
                                height: "3rem",
                            }}
                            renderInput={({ className, ...rest }) => (
                                <Input name="" id="" {...rest} />
                            )}
                        />
                    </div>

                    <Button className="mt-2 w-full">Verify</Button>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <CardDescription className="bg-background px-2 text-muted-foreground">
                        Didn't recieve code?
                        <Button
                            variant={"link"}
                            className="ml-2 p-0 text-teal-300"
                        >
                            Resend
                        </Button>
                    </CardDescription>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
