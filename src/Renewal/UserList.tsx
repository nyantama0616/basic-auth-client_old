import { Box, Typography, List, ListItemButton, Button } from "@mui/material";
import { SxProps } from "@mui/system";

interface User {
    user_id: string
    email: string
}

interface UserListProps {   
    users?: User[]
    sx?: SxProps
}

export default function UserList({ users, sx }: UserListProps) {
    const items = users?.map((user) => {
        return (
            <ListItemButton key={ user.user_id } sx={{ width: "100%", display: "flex", justifyContent: "center", mb: 2 }}>
                <Typography variant="h6">
                    {user.user_id}
                </Typography>
            </ListItemButton>
        );
    });
    return (
        <Box sx={{...sx, overflow: "scroll" }}>
            <Typography variant="h6">
                ユーザーリスト
            </Typography>
            <Button variant="contained">更新</Button>
            <List>
                {items}
            </List>
        </Box>
    );
}
