import { Box, Grid } from "@mui/material";
import PageList from "./others/PageList";
interface TemplateProps {
    children?: React.ReactNode;
}
export default function Template({ children }: TemplateProps) {
    return (
        <Box sx={{ height: "100%"}}>
            <Grid container justifyContent="center" alignItems="center" sx={{ height: "100%" }} spacing={2}>
                <Grid item xs={2} sx={{ height: "80%"}}>
                    <PageList />
                </Grid>
                <Grid item xs={4} sx={{ height: "80%", display: "flex" }}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    );
}
