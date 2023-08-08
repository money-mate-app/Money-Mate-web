import { AxiosResponseType } from "@/types/response";
import { isAxiosError } from "axios";
import { ZodSchema, ZodError } from "zod";
import { env } from "./constants";

export const parseReactQuery = <T>(
    response: AxiosResponseType<T>,
    isError: boolean = false,
) => {
    if (isError) {
        const value = null;
        const error = isAxiosError(response)
            ? response.response?.data
            : response;
        const message = isAxiosError(response)
            ? response.response?.data?.message
            : response instanceof ZodError
            ? response.issues[0].message
            : (response as any)?.message;
        return { value, error, message };
    }
    return { value: response.data.data, message: response.data.message };
};

export async function parseResponse<T>(
    schema: ZodSchema,
    data: AxiosResponseType<T>,
) {
    const processedData = parseReactQuery<T>(data);
    if (!processedData.value) return processedData;
    if (processedData.value instanceof Array) {
        processedData.value = processedData.value.map((d) =>
            schema.parse(d),
        ) as T;
        env.__DEV__ && console.log(processedData.value);
    } else {
        processedData.value = schema.parse(processedData.value);
    }
    return processedData;
}
