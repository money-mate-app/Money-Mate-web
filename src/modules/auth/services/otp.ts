import { env, api, parseReactQuery, useToast, parseResponse } from "@/lib";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { z } from "zod";

const sendOtpSchema = z.object({
    email: z
        .string({
            required_error: "Please provide an email",
        })
        .email("Please provide a valid email"),
});

const verifyOtpSchema = z.object({
    email: z
        .string({
            required_error: "Please provide an email",
        })
        .email("Please provide a valid email"),
    otp: z
        .string({
            required_error: "Please provide an otp",
        })
        .min(6, "Please provide a valid otp")
        .regex(/^\d+$/, "Please enter a valid otp"),
});

const verifyOtpResponse = z.object({
    verified: z.boolean(),
});

export type SendOtp = z.infer<typeof sendOtpSchema>;
export type VerifyOtRequest = z.infer<typeof verifyOtpSchema>;
export type VerifyOtpResponse = z.infer<typeof verifyOtpResponse>;

function sendOtp(data: SendOtp) {
    return api.post("/email/otp", data);
}

function verifyOtp(data: VerifyOtRequest) {
    return api.post("/email/otp/verify", data);
}

export function useSendOtp() {
    const toast = useToast();
    return useMutation({
        mutationFn: async (data: SendOtp) => {
            sendOtpSchema.parse(data);
            const res = await sendOtp(data);
            return parseReactQuery<null>(res);
        },
        onSuccess(data) {
            env.__DEV__ && console.log(data);
            toast.success(data.message);
        },
        onError(error: any) {
            const err = parseReactQuery<any>(error, true);
            env.__DEV__ && console.log(err);
            toast.error(err.message);
        },
    });
}

export function useVerifyOtp() {
    const toast = useToast();
    const router = useRouter();
    return useMutation({
        mutationFn: async (data: VerifyOtRequest) => {
            verifyOtpSchema.parse(data);
            const res = await verifyOtp(data);
            return parseResponse<VerifyOtpResponse>(verifyOtpResponse, res);
        },
        onSuccess(data) {
            env.__DEV__ && console.log(data);
            toast.success(data.message);
            router.push("/");
        },
        onError(error: any) {
            const err = parseReactQuery<any>(error, true);
            env.__DEV__ && console.log(err);
            toast.error(err.message);
        },
    });
}
