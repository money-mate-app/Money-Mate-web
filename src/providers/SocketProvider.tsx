import { useEffect, type FC, type ReactNode, useMemo } from "react";
import { io } from "socket.io-client";
import { NEXT_PUBLIC_SERVER_URL, __DEV__ } from "../lib/constants";
interface SocketProviderProps {
    children: ReactNode;
}

const SocketProvider: FC<SocketProviderProps> = ({ children }) => {
    const socket = useMemo(
        () =>
            io(NEXT_PUBLIC_SERVER_URL, {
                retries: 3,
                reconnectionAttempts: 3,
                reconnectionDelay: 1000,
            }),
        [],
    );

    useEffect(() => {
        socket.on("connect", () => {
            __DEV__ && console.log("Server socket connected");
        });
    }, [socket]);

    return children;
};

export default SocketProvider;
