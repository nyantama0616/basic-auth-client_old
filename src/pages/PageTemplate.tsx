import { Box } from "@mui/material";
import { SxProps } from "@mui/material";

interface PageTemplateProps {
    sx?: SxProps;
    children?: React.ReactNode;
}
export default function PageTemplate({ sx, children }: PageTemplateProps) {
    return (
        <Box sx={{ ...sx, width: "100%", heigh: "100%", background: "#eeeeee" }}>
            {children}
        </Box>
    )
}
