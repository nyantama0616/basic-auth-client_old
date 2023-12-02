import { Box, Button, List, ListItem } from "@mui/material";
import NavButton from "./NavButton";

export default function PageList() {
    return (
        <Box sx={{ backgroundColor: "#cccccc", p: 2 }}>
            <h3>見たいページを選んでね</h3>
            <List>
                <Item text="Home" route="/" mb={4}/>
                <Item text="Ping" route="/ping" mb={4} />
                <Item text="ユーザーを作成" route="/create-user"/>
                <Item text="ユーザ一覧を取得" route="#"/>
                <Item text="ユーザー情報を取得" route="#"/>
                <Item text="ユーザー情報を更新" route="#"/>
                <Item text="ユーザーを削除" route="#"/>
            </List>
        </Box>
    );
}

interface ItemProps {
    text: string;
    route: string;
    mb?: number;
}
function Item({ text, route, mb=2 }: ItemProps) {
    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mb: mb}}>
            <NavButton text={text} route={route} sx={{ width: "100%" }} />
        </Box>
    )
}
