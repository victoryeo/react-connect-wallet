import { Typography, Container, Box, Alert } from "@mui/material";
import { useParams } from "react-router-dom";
import { useItem } from "../services/itemService";

const ItemPage = () => {
    const { itemId } = useParams();
    const { item, isError, isSuccess } = useItem(itemId || "");

    return (
        <>
            {isError && (
                <Alert severity="error">Error loading items.</Alert>
            )}
            {isSuccess && (
                <Container sx={{ py: 24 }}>
                    <Box sx={{ my: 4 }}>
                        <Typography variant="h2" align="center" gutterBottom>
                            {item.attributes.title}
                        </Typography>
                    </Box>
                </Container>
            )}
        </>
    );
};

export default ItemPage;