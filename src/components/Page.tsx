import { Box, Container } from "@mui/material";
import { useEffect } from "react";

interface PageProps {
    title?: string;
    children: any;
}

const Page = ({ title, children }: PageProps) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container sx={{ py: 8 }}>{children}</Container>
    );
};

export default Page;