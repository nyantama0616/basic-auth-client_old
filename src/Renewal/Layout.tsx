import { Box, Grid } from "@mui/material";
import PageList from "./PageList";
import UserList from "./UserList";

const pages = [
    [
        { title: "Home", path: "/" },
    ],
    [
        { title: "Pong", path: "/pong" },
    ],
    [
        { title: "ユーザーを作成", path: "/sign-up" },
    ],
];

const users = [
    { user_id: "user1", email: "panda@examle.com" },
    { user_id: "user2", email: "panda@examle.com" },
    { user_id: "user3", email: "panda@examle.com" },
    { user_id: "user3", email: "panda@examle.com" },
    { user_id: "user3", email: "panda@examle.com" },
    { user_id: "user3", email: "panda@examle.com" },
    { user_id: "user3", email: "panda@examle.com" },
    { user_id: "user3", email: "panda@examle.com" },
    { user_id: "user3", email: "panda@examle.com" },
    { user_id: "user3", email: "panda@examle.com" },
    { user_id: "user3", email: "panda@examle.com" },
    { user_id: "user3", email: "panda@examle.com" },
];

interface LayoutProps {
    children?: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
    return (
        <Box sx={{ width: "100%", height: "100%", background: "#cccccc", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} md={10}>
                    <Box
                        sx={{
                            width: "100%",
                            height: "800px",
                            display: "grid",
                            gridTemplateColumns: "2fr 3fr 2fr",
                            gap: "10px",
                        }}
                    >
                        <PageList
                            pages={pages}    
                            sx={{
                                gridColumn: "1",
                                backgroundColor: "#eeeeee",
                            }}
                        /> 
                        
                        {children}

                        <UserList
                            users={users}
                            sx={{
                                gridColumn: "3",
                                backgroundColor: "#eeeeee",
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
