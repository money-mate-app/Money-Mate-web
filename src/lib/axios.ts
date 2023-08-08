import axios from "axios";
import { env } from "./constants";

export const api = axios.create({
    baseURL: env.NEXT_PUBLIC_SERVER_URL,
});
