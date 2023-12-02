import { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import { SxProps } from "@mui/system";
import PageTemplate from "./PageTemplate";

interface PingPageProps {
    sx: SxProps
}
export default function PingPage({ sx }: PingPageProps) {
    const hook = usePing();

    return (
        <PageTemplate
            request="GET /pong"
            responseComponent={<ResponseComponent message={hook.message} />}
        />
    )
}

interface RequestComponentProps {
    message: string;
}
function ResponseComponent({ message }: RequestComponentProps) {
    return (
        <h1>{message}</h1>
    )
}

function usePing() {
    const [message, setMessage] = useState<string>("pong");

    return {
        message
    }
}
