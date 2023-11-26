import { Button, SxProps } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface NavButtonProps {
    sx?: SxProps;
    text: string;
    route?: string
}

export default function NavButton({ text, sx, route = "#" }: NavButtonProps) {
    const navigate = useNavigate();
    
    function _navigate() {
        navigate(route);
    }

    return (
        <Button variant="contained" sx={{ ...sx }} onClick={_navigate}>{text}</Button>
    );
}
