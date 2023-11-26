import { Box } from "@mui/material";
import { SxProps } from "@mui/material";
import PageTemplate from "./PageTemplate";

interface TopPageProps {
    sx?: SxProps;
}
export default function TopPage({ sx }: TopPageProps) {
    return (
        <PageTemplate>
            <h1>TopPage</h1>
        </PageTemplate>
    )
}
