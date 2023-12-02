import { Box } from "@mui/material";
import { SxProps } from "@mui/material";
import PageTemplate from "./PageTemplate";

interface TopPageProps {
    sx?: SxProps;
}
export default function TopPage({ sx }: TopPageProps) {
    return (
        <Box sx={{ ...sx, width: "100%", heigh: "100%", background: "#eeeeee" }}>
            <h1>TopPage</h1>
        </Box>
    )
}
