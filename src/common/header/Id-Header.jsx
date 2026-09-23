import { AppBar, Toolbar, Box, Stack, Link as MuiLink, Container, IconButton, Drawer, Divider, ListItem, ListItemButton, ListItemText, List } from "@mui/material";
import logo from "../../assets/images/infodales/InfoDalesMainLogo03.webp";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { navRoutes } from "../../routes/routes";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();

    const toggleDrawer = (open) => () => setDrawerOpen(open);

    return (
        // <Box sx={{ maxWidth: "lg", mx: "auto", px: { xs: 2, sm: 3, md: 4 }, pt: { xs: 3, md: 5 } }}>
        <Box sx={{ width: "100%", m: 0, p: 0 }}>
            <Box sx={{ borderRadius: "0rem", border: "1px solid #1e293b", bgcolor: "#090e17", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", height:"120px"}}>
                <AppBar position="static" elevation={0} sx={{ bgcolor: "#090e17", borderBottom: "1px solid #1e293b" }}>
                    <Toolbar sx={{ px: { xs: 2.5, lg: 4 }, py: 1.5, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <MuiLink component={RouterLink} to="/" sx={{ display: "flex", alignItems: "center" }}>
                            <Box component="img" src={logo} alt="Infodales" sx={{ height: { xs: 32, md: 36 }, width: "auto", objectFit: "contain" }} />
                        </MuiLink>

                        {/* Desktop nav */}
                        <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
                            {navRoutes.map((route) => (
                                <MuiLink
                                    key={route.path}
                                    component={RouterLink}
                                    to={route.path}
                                    underline="none"
                                    sx={{
                                        fontSize: "0.875rem",
                                        fontWeight: 500,
                                        color: location.pathname === route.path ? "#38bdf8" : "#cbd5e1",
                                        transition: "color 0.2s",
                                        "&:hover": { color: "#fff" },
                                    }}
                                >
                                    {route.label}
                                </MuiLink>
                            ))}
                        </Stack>

                        {/* Mobile hamburger button */}
                        <IconButton
                            onClick={toggleDrawer(true)}
                            sx={{
                                display: { xs: "flex", md: "none" },
                                color: "#cbd5e1",
                                "&:hover": { color: "#fff", bgcolor: "rgba(255,255,255,0.05)" },
                            }}
                            aria-label="Open menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* Mobile drawer menu */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        width: 280,
                        bgcolor: "#090e17",
                        borderLeft: "1px solid #1e293b",
                    },
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2.5, py: 2.5 }}>
                    <Box component="img" src={logo} alt="Infodales" sx={{ height: 28, width: "auto", objectFit: "contain" }} />
                    <IconButton onClick={toggleDrawer(false)} sx={{ color: "#94a3b8", "&:hover": { color: "#fff" } }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Divider sx={{ borderColor: "#1e293b" }} />
                <List sx={{ py: 1 }}>
                    {navRoutes.map((route) => (
                        <ListItem key={route.path} disablePadding>
                            <ListItemButton
                                component={RouterLink}
                                to={route.path}
                                onClick={toggleDrawer(false)}
                                sx={{
                                    px: 2.5,
                                    py: 1.5,
                                    "&:hover": { bgcolor: "rgba(56,189,248,0.06)" },
                                }}
                            >
                                <ListItemText
                                    primary={route.label}
                                    primaryTypographyProps={{
                                        fontSize: "0.9375rem",
                                        fontWeight: 500,
                                        color: location.pathname === route.path ? "#38bdf8" : "#cbd5e1",
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}