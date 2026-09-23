import { Box, Stack, Typography, IconButton, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { footerRoutes } from "../../routes/Routes";





export default function Footer() {
    return (
        <Box sx={{ maxWidth: "lg", mx: "auto", px: { xs: 2, sm: 3, md: 4 }, pb: { xs: 4, md: 6 } }}>
            <Box
                sx={{
                    borderRadius: "1rem",
                    border: "1px solid #1e293b",
                    bgcolor: "#060a12",
                    overflow: "hidden",
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                }}
            >
                <Box
                    component="footer"
                    sx={{
                        bgcolor: "#090e17",
                        p: { xs: 4, lg: 5 },
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 3,
                    }}
                >
                    {/* Brand */}
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" }, gap: 0.5 }}>
                        <Typography sx={{ fontSize: "1rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>
                            Infodales Tech Solutions
                        </Typography>
                        <Typography sx={{ fontSize: "0.75rem", color: "#64748b" }}>
                            © 2025 Infodales Tech Solutions. All rights reserved.
                        </Typography>
                    </Box>

                    {/* Nav */}
                    <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
                        {footerRoutes.map((route) => (
                            <MuiLink
                                key={route.path}
                                component={RouterLink}
                                to={route.path}
                                underline="none"
                                sx={{ fontSize: "0.875rem", color: "#cbd5e1", "&:hover": { color: "#fff" } }}
                            >
                                {route.label}
                            </MuiLink>
                        ))}
                    </Stack>

                    {/* Social */}
                    <Stack direction="row" spacing={1.5}>
                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/company/infodales-tech-solution/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            sx={{
                                width: 36,
                                height: 36,
                                borderRadius: "0.5rem",
                                bgcolor: "#0f172a",
                                border: "1px solid #1e293b",
                                color: "#94a3b8",
                                "&:hover": {
                                    borderColor: "rgba(14,165,233,0.6)",
                                    color: "#38bdf8",
                                    bgcolor: "#0f172a",
                                },
                            }}
                        >
                            <LinkedInIcon sx={{ fontSize: 18 }} />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="mailto:contact@infodales.com"
                            aria-label="Email"
                            sx={{
                                width: 36,
                                height: 36,
                                borderRadius: "0.5rem",
                                bgcolor: "#0f172a",
                                border: "1px solid #1e293b",
                                color: "#94a3b8",
                                "&:hover": {
                                    borderColor: "rgba(14,165,233,0.6)",
                                    color: "#38bdf8",
                                    bgcolor: "#0f172a",
                                },
                            }}
                        >
                            <EmailOutlinedIcon sx={{ fontSize: 18 }} />
                        </IconButton>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}