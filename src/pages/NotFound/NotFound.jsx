import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function NotFound() {
    return (
        <Box
            sx={{
                minHeight: "60vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                px: 2,
                py: 8,
                bgcolor: "#f8fafc",
            }}
        >
            <title>Page not found | Infodales</title>
            <meta name="robots" content="noindex" />

            <Typography sx={{ fontSize: { xs: 72, md: 110 }, fontWeight: 800, color: "#0EA5E9", lineHeight: 1 }}>
                404
            </Typography>
            <Typography sx={{ fontSize: { xs: 22, md: 28 }, fontWeight: 700, color: "#061a3a", mt: 2 }}>
                Page not found
            </Typography>
            <Typography sx={{ color: "#5b7089", mt: 1, mb: 4, maxWidth: 420 }}>
                The page you are looking for does not exist or may have been moved.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
                <Button component={RouterLink} to="/" variant="contained" disableElevation
                    sx={{ bgcolor: "#0EA5E9", textTransform: "none", fontWeight: 600, "&:hover": { bgcolor: "#0284c7" } }}>
                    Go to Home
                </Button>
                <Button component={RouterLink} to="/blog" variant="outlined"
                    sx={{ textTransform: "none", fontWeight: 600 }}>
                    Browse Blogs
                </Button>
            </Box>
        </Box>
    );
}