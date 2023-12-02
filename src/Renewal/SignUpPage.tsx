import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { SxProps } from "@mui/system";

interface SignUpPage {
    sx?: SxProps
}
export default function SignUpPage({ sx }: SignUpPage) {
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", ...sx }}>
            <form action="">
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={10}>
                        <Typography variant="h6" mt={2}>ユーザーを作成</Typography>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <TextField
                            label="ユーザーID"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <TextField
                            label="メールアドレス"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button variant="contained">作成</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}
