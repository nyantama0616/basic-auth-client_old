import { Box, Grid } from "@mui/material";

interface TemplateProps {
    children?: React.ReactNode;
}
export default function Template({ children }: TemplateProps) {
    return (
        <Box sx={{ height: "100%"}}>
            <Grid container justifyContent="center" alignItems="center" sx={{height: "100%"}}>
                <Grid item xs={4} sx={{ height: "80%", display: "flex" }}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    );
}
