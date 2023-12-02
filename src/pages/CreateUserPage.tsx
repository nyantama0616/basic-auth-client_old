import PageTemplate from "./PageTemplate";
import { SxProps } from "@mui/system";

interface PingPageProps {
    sx: SxProps
}
export default function CreateUserPage({ sx }: PingPageProps) {
    return (
        <PageTemplate
            request="POST /users"
            // responseComponent={<ResponseComponent />}
        />
    )
}
