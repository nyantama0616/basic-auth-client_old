import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { SxProps } from "@mui/system";

interface User {
    user_id: string;
    email: string;
    password: string;
    nickname: string;
    comment: string;
}

interface EditProfilePageProps {
    sx?: SxProps
}

/**
 * プロフィール編集ページ
 * ユーザの削除もできる
 */
export default function EditProfilePage({ sx }: EditProfilePageProps) {
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
                            <td>
                                <input
                                    value="ぱっぴー"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>コメント</th>
                            <td>
                                <input
                                    value="よろしくおねがいします"
                                />
                            </td>
                        </tr>
                    </table>
                </Grid>
                <Grid item container justifyContent="center" spacing={2} xs={12}>
                    <Grid item xs={5}>
                        <Button variant="contained" color="error" >削除</Button>
                    </Grid>
                    <Grid item xs={5}>
                        <Button variant="contained">保存</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

//TODO: ページリストとユーザリストにもmt={2}をつける
