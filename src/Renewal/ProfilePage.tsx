import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { SxProps } from "@mui/system";

interface User {
    user_id: string;
    email: string;
    password: string;
    nickname: string;
    comment: string;
}

interface ProfilePageProps {
    sx?: SxProps
}
export default function ProfilePage({ sx }: ProfilePageProps) {
    return (
        <Box sx={{ ...sx }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Typography variant="h6" mt={2}>プロフィール</Typography>
                </Grid>
                <Grid item xs={10}>
                    <table style={{textAlign: "left"}}>
                        <tr>
                            <th>ユーザーID</th>
                            <td>user1</td>
                        </tr>
                        <tr>
                            <th>メールアドレス</th>
                            <td>panda@example.com</td>
                        </tr>
                        <tr>
                            <th>パスワード</th>
                            <td>panda</td>
                        </tr>
                        <tr>
                            <th>ニックネーム</th>
                            <td>ぱっぴー</td>
                        </tr>
                        <tr>
                            <th>コメント</th>
                            <td>よろしくおねがいします</td>
                        </tr>
                    </table>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined">編集</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

//TODO: ページリストとユーザリストにもmt={2}をつける
