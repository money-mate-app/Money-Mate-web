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
import { useSendOtp, useVerifyOtp } from "../services/otp";

type Props = {
    email: string;
    setShowOtpPage: (showOtpPage: boolean) => void;
};

export function OtpForm({ email, setShowOtpPage }: Props) {
    const [otp, setOtp] = useState("");
    const verifyOtpMutation = useVerifyOtp();
    const sendOtpMutation = useSendOtp();

    function handleResendOtp() {
        sendOtpMutation.mutate({ email });
    }

    function handleVerifyOtp() {
        verifyOtpMutation.mutate({
            email,
            otp,
        });
    }

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
                        We have sent a OTP to your email {email}
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
                            value={email}
                            disabled
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
                            renderInput={({
                                className,
                                onChange: onInputChange,
                                ...rest
                            }) => (
                                <Input
                                    name=""
                                    id=""
                                    pattern="[0-9]{1}"
                                    onChange={(e) => {
                                        e.target.value = e.target.value.replace(
                                            /[^0-9]/g,
                                            "",
                                        );

                                        onInputChange(e);
                                    }}
                                    {...rest}
                                />
                            )}
                        />
                    </div>

                    <Button
                        className="mt-2 w-full"
                        onClick={handleVerifyOtp}
                        disabled={verifyOtpMutation.isLoading}
                    >
                        {verifyOtpMutation.isLoading
                            ? "Verifying..."
                            : "Verify"}
                    </Button>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <CardDescription className="bg-background px-2 text-muted-foreground">
                        Didn't receive code?
                        <Button
                            variant={"link"}
                            className="ml-2 p-0 text-teal-300"
                            onClick={handleResendOtp}
                            disabled={sendOtpMutation.isLoading}
                        >
                            Resend
                        </Button>
                    </CardDescription>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
