import { Box, Grid, Button } from "@mui/material";
import { SxProps } from "@mui/material";

interface PageTemplateProps {
    request: string;
    resetAction?: () => void;
    sendAction?: () => void;
    requestComponent?: JSX.Element;
    responseComponent?: JSX.Element;
    sx?: SxProps;
}
export default function PageTemplate({ request, resetAction, sendAction, requestComponent, responseComponent, sx }: PageTemplateProps) {
    return (
        <Box sx={{ ...sx, width: "100%", heigh: "100%", background: "#eeeeee" }}>
            <Grid container sx={{ height: "100%" }} spacing={2} justifyContent="center">
                
                {/* リクエスト部分 */}
                <Grid item xs={11} sx={{ height: "40%", mt: 2 }} >
                    <Box sx={{ border: "1px #cccccc solid", height: "100%" }}>
                        <h3>リクエスト</h3>
                        <Grid container justifyContent="center">
                            <Grid item xs={6}>
                                <Box sx={{backgroundColor: "#ccccff", height: "50px"}}>
                                    <h4>{request}</h4>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                {requestComponent}
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                
                {/* レスポンス部分 */}
                <Grid item xs={11} sx={{height: "40%"}}>
                    <Box sx={{ border: "1px #cccccc solid", height: "100%" }}>
                        <h3>レスポンス</h3>
                        {responseComponent}
                    </Box>
                </Grid>

                {/* ボタン部分 */}
                <Grid item container xs={12} justifyContent="center">
                    <Grid item xs={3}>
                        <Button variant="outlined" onClick={resetAction}>リセット</Button>
                    </Grid>
                    
                    <Grid item xs={3}>
                        <Button variant="contained" onClick={sendAction}>送信</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
