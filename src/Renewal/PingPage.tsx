import { Box, Grid, Button, Typography } from "@mui/material";
import { SxProps } from "@mui/system";

interface PingProps {
    message?: string
    sx?: SxProps
}
export default function PingPage({ message, sx }: PingProps) {
    return (
        <Box sx={{ ...sx }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5">GET /pong</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained">Ping!</Button>
                </Grid>
                <Grid item container xs={12} justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="h6">↓Response↓</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            borderRadius={2}
                            sx={{
                            backgroundColor: "#cceeee", height: "100px", display: "flex", justifyContent: "center", alignItems: "center"
                            }}
                        >
                            <Typography variant="body1">{message}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
