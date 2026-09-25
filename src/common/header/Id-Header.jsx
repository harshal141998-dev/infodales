import { AppBar, Toolbar, Box, Stack, Link as MuiLink, IconButton, Drawer, Divider, ListItem, ListItemButton, ListItemText, List, Button } from "@mui/material";
import logo from "../../assets/images/infodales/InfoDalesMainLogo03.png";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import MailIcon from '@mui/icons-material/Mail';
import { navRoutes } from "../../routes/Routes";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();

    const toggleDrawer = (open) => () => setDrawerOpen(open);

    return (
        <Box sx={{ width: "100%", m: 0, p: 0 }}>
            <Box sx={{ borderRadius: "0rem", border: "1px solid #1e293b", bgcolor: "#090e17", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
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
                                        fontSize: "1.2rem",
                                        fontWeight: 600,
                                        color: location.pathname === route.path ? "#38bdf8" : "#cbd5e1",
                                        transition: "color 0.2s",
                                        "&:hover": { color: "#fff" },
                                    }}
                                >
                                    {route.label}
                                </MuiLink>
                            ))}
                        </Stack>

                        {/* Desktop right-side actions: icons + Get in Touch */}
                        <Stack direction="row" spacing={2} sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>

                            <Button
                                component={RouterLink}
                                to="/contact"
                                disableElevation
                                sx={{
                                    bgcolor: "#0EA5E9",
                                    color: "#fff",
                                    borderRadius: "10px",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    fontSize: "1rem",
                                    px: 2.5,
                                    py: 0.75,
                                    "&:hover": { bgcolor: "#0284c7" },
                                }}
                            >
                                Get in Touch
                            </Button>
                            {/* Social */}
                            <Stack direction="row" spacing={1.5}>
                                <IconButton
                                    component="a"
                                    href="https://www.linkedin.com/company/infodales-tech-solution/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    sx={{
                                        width: 40,
                                        height: 40,
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
                                        width: 40,
                                        height: 40,
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
                                <IconButton
                                    component="a"
                                    href=""
                                    aria-label="Email"
                                    sx={{
                                        width: 40,
                                        height: 40,
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
                                    <TwitterIcon sx={{ fontSize: 18 }} />
                                </IconButton>
                            </Stack>
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
            <Box sx={{ flexShrink: 0 }}>
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                    slotProps={{
                        paper: {
                            sx: {
                                width: { xs: "85vw", sm: 320 },
                                maxWidth: 320,
                                // height: "100%",
                                height: "100dvh",
                                bgcolor: "#090e17 !important",
                                backgroundImage: "none",
                                borderLeft: "1px solid #1e293b",
                                display: "flex",
                                flexDirection: "column",
                                overflowY: "auto",
                                color: "#fff",
                            },
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
                    <List sx={{ py: 1, flexGrow: 1 }}>
                        {navRoutes.map((route) => (
                            <ListItem key={route.path} disablePadding>
                                <ListItemButton
                                    component={RouterLink}
                                    to={route.path}
                                    onClick={toggleDrawer(false)}
                                    sx={{
                                        px: 2.5,
                                        py: 1.2,
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

                    <Box>
                        <Divider sx={{ borderColor: "#1e293b" }} />
                        {/* Social */}
                        <Stack direction="row" spacing={1.5} sx={{ px: 2.5, py: 2.5 }}>
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
                        <Box sx={{ px: 2.5, pb: 3 }}>
                            <Button
                                component={RouterLink}
                                to="/contact"
                                onClick={toggleDrawer(false)}
                                fullWidth
                                disableElevation
                                sx={{
                                    bgcolor: "#0EA5E9",
                                    color: "#fff",
                                    borderRadius: "10px",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    fontSize: "0.875rem",
                                    py: 1,
                                    "&:hover": { bgcolor: "#0284c7" },
                                }}
                            >
                                Get in Touch
                            </Button>
                        </Box>
                    </Box>
                </Drawer>
            </Box>
        </Box>
    );
}