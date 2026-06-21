import { io } from "socket.io-client";
import { SOCKET_URL } from "../config";

const isProduction = import.meta.env.PROD;
const socket = io(SOCKET_URL, {
    autoConnect: !isProduction,
    reconnection: !isProduction,
    reconnectionAttempts: isProduction ? 0 : 5
});

export default socket;
