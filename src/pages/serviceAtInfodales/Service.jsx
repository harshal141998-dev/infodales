import {
    Box, Container, Typography, Button, Chip, Grid, Card, Stack, Divider, Link
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import BugReportIcon from "@mui/icons-material/BugReport";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import VerifiedIcon from "@mui/icons-material/Verified";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ShieldIcon from "@mui/icons-material/Shield";
import HandshakeIcon from "@mui/icons-material/Handshake";
import GridViewIcon from "@mui/icons-material/GridView";
import BoltIcon from "@mui/icons-material/Bolt";

import DescriptionIcon from "@mui/icons-material/Description";
import InsightsIcon from "@mui/icons-material/Insights";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// ----------------------------------------------------
// THEME (kept identical to CareerPage for consistency)
// ----------------------------------------------------
const COLORS = {
    slateDark: "#050b14",
    cyanGlow: "#00d2fe",
    brandBlue: "#2563eb",
    surface: "#f8fafc",
    slate800: "#1e293b",
    slate900: "#0f172a",
};

const PILLARS = [
    {
        num: "01",
        tag: "CMS Architecture",
        icon: <DeveloperBoardIcon sx={{ fontSize: 22 }} />,
        title: "AEM Web Development",
        subtitle: "cq5/AEM CMS Architecture & Delivery",
        desc: "There are lots of AEM development companies offering cq5/AEM CMS implementation and expertise in AEM Manager. But choosing the right one always matters. Infodales Tech Solutions provides delivery teams aligned to your timezone to serve you better.",
        capsLabel: "Adobe Cloud",
        caps: [
            "Multi-site Management (MSM)",
            "AEM Cloud Service Migration",
            "Dispatcher Configuration & Caching",
            "Headless Content Fragments & GraphQL",
        ],
    },
    {
        num: "02",
        tag: "Automation QA",
        icon: <BugReportIcon sx={{ fontSize: 22 }} />,
        title: "Quality Assurance with Cypress",
        subtitle: "Continuous Verification & Modern E2E",
        desc: "Automation testing applies tools and technology to test software with the goal of reducing testing effort while delivering capability faster and more affordably — building better quality software with less effort.",
        capsLabel: "Zero-Flake CI/CD",
        caps: [
            "End-to-End Cypress Frameworks",
            "CI/CD Pipeline Integration (GitHub / GitLab)",
            "High-Coverage Regression Automation",
            "Flaky Test Remediation & Parallelization",
        ],
    },
    {
        num: "03",
        tag: "Cloud Ecosystem",
        icon: <CloudQueueIcon sx={{ fontSize: 22 }} />,
        title: "Salesforce Solutions",
        subtitle: "Enterprise CRM & Custom Cloud Apps",
        desc: "We architect and deploy multi-cloud Salesforce implementations — from Service Cloud customization to OmniStudio and Apex-driven applications — engineered for enterprise scale and long-term maintainability.",
        capsLabel: "Enterprise CRM",
        caps: [
            "Service Cloud & Sales Cloud Customization",
            "OmniStudio, LWC & Apex Architecture",
            "Custom Cloud Application Engineering",
            "Enterprise Legacy Data Migration",
        ],
    },
];



const AEM_MODULES = [
    {
        num: "01",
        title: "Adobe AEM Sites",
        icon: <GridViewIcon sx={{ fontSize: 18 }} />,
        desc: "Build and manage multiple responsively designed sites, tailored across different regions & languages from a central platform. Optimize your eCommerce site, launch marketing campaigns and deliver unified experiences across touchpoints with Adobe AEM Sites.",
    },
    {
        num: "02",
        title: "Edge Delivery Services",
        icon: <BoltIcon sx={{ fontSize: 18 }} />,
        desc: "Deliver content at blazing speed with AEM's Edge Delivery Services — a document-based authoring model that decouples content from code, achieving near-perfect performance scores while keeping deployment lightweight and CDN-native.",
    },
    {
        num: "03",
        title: "Adobe AEM Assets",
        icon: <PermMediaIcon sx={{ fontSize: 18 }} />,
        desc: "Manage and deliver images, videos and content across devices and screens while automatically assigning metadata and tags to all your assets. Develop customized versions of your assets to deliver personalized and targeted experiences to your users.",
    },
    {
        num: "04",
        title: "Adobe AEM Forms",
        icon: <DescriptionIcon sx={{ fontSize: 18 }} />,
        desc: "The easy drag-and-drop interface of Adobe CMS empowers you to quickly develop and update mobile apps using a single codebase for multiple platforms. You can even analyze your app's performance & metrics by leveraging the built-in Adobe Analytics.",
    },
    {
        num: "05",
        title: "Adobe Analytics",
        icon: <InsightsIcon sx={{ fontSize: 18 }} />,
        desc: "Integrate Adobe Experience Manager with various third-party tools to deliver consistent content experiences across all channels. Its headless capabilities help you establish complete ownership of your content and flexibly update it as per user demographics and statistics.",
    },
    {
        num: "06",
        title: "Adobe Target",
        icon: <GpsFixedIcon sx={{ fontSize: 18 }} />,
        desc: "Streamline workflows for different projects by assigning role-based access and setting up individual workspaces in Adobe Experience Manager. AEM features like comments and annotations help improve site quality and productivity.",
    },
];



const TESTING_CARDS = [
    {
        icon: <VisibilityIcon sx={{ fontSize: 20 }} />,
        tag: "Human-Centric Review",
        badge: "HUMAN PARITY",
        title: "Manual Testing",
        desc: "Manual testing is the most important part of any test strategy which helps QAs to gain deeper insight from an end user's perspective. Since manual testing is carried out by a human, it judges software from the most important metric: User Experience.",
        points: ["Exploratory & Usability Evaluation", "Cross-Browser / Multi-Device Parity", "Edge Case & Localization Auditing"],
    },
    {
        icon: <SmartToyIcon sx={{ fontSize: 20 }} />,
        tag: "Continuous Velocity",
        badge: "CI/CD SUITE",
        title: "Automation Testing with Cypress",
        desc: "Automation testing is the application of tools and technology to test software with the goal of reducing testing effort, delivering capability faster and more affordably. It helps in building better quality software with less effort.",
        points: ["Headless CI/CD Pipeline Runs", "Real-Time Video & DOM Snapshot Logs", "Deterministic, Flake-Free Execution"],
    },
    {
        icon: <SwapHorizIcon sx={{ fontSize: 20 }} />,
        tag: "Protocol Integrity",
        badge: "ZERO BREAKAGE",
        title: "API Testing",
        desc: "API testing is the testing of a set of application programming interfaces (APIs) directly and as part of integration testing to determine whether they meet expectations for functionality, reliability, performance, and security.",
        points: ["REST & GraphQL Schema Validation", "Payload Load & Stress Profiling", "Authentication & OAuth Token Scrutiny"],
    },
];

export default function ServicesPage() {
    return (
        <Box sx={{ bgcolor: COLORS.surface, minHeight: "100vh" }}>
            {/* HERO */}
            <Box
                sx={{
                    pt: { xs: 8, md: 12 },
                    pb: { xs: 10, md: 16 },
                    bgcolor: COLORS.slateDark,
                    display: "flex",
                    alignItems: "center",
                    color: "#fff",
                    position: "relative",
                    overflow: "hidden",
                    borderBottom: "1px solid rgba(30,41,59,0.7)",
                    backgroundImage:
                        "linear-gradient(to right, rgba(56, 189, 248, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.07) 1px, transparent 1px)",
                    backgroundSize: "52px 52px",
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        zIndex: 0,
                        background:
                            "radial-gradient(ellipse 65% 50% at 50% 35%, rgba(14, 116, 144, 0.25) 0%, rgba(2, 6, 23, 0) 80%), radial-gradient(ellipse 40% 30% at 75% 25%, rgba(37, 99, 235, 0.18) 0%, transparent 70%)",
                    },
                }}
            >
                <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
                    <Box sx={{ maxWidth: 850, mx: "auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography
                            variant="h1"
                            fontWeight={800}
                            sx={{ fontSize: { xs: "2.75rem", md: "4rem" }, lineHeight: 1.1, mb: 2, letterSpacing: "-0.02em" }}
                        >
                            Services We Offer
                        </Typography>

                        <Typography sx={{ color: "#7dd3fc", fontWeight: 600, fontSize: { xs: "1.125rem", md: "1.375rem" }, mb: 2, maxWidth: 650 }}>
                            Services we Offer — Solutions that speak for themselves : Explore our services today.
                        </Typography>

                        <Typography sx={{ color: "#cbd5e1", fontSize: { xs: "1rem", md: "1.125rem" }, lineHeight: 1.6, maxWidth: 700, mb: 5 }}>
                            Infodales delivers mission-critical technical execution for global enterprises. From multi-tiered Adobe
                            Experience Manager deployments to high-velocity Cypress automation pipelines, scalable Salesforce
                            clouds, and hyper-performant Edge Delivery Services.
                        </Typography>

                        <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
                            <Button
                                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                                disableElevation
                                sx={{
                                    bgcolor: "#0EA5E9",
                                    color: "#fff",
                                    borderRadius: "10px",
                                    textTransform: "none",
                                    fontWeight: 700,
                                    px: 3,
                                    py: 1.5,
                                    fontSize: "0.95rem",
                                    "&:hover": { bgcolor: "#0284c7" },
                                }}
                                component={Link}
                                to="/contact"
                            >
                                Schedule Architecture Consultation
                            </Button>
                            <Button
                                onClick={() => {
                                    document.getElementById("core-practices")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                endIcon={<span style={{ fontSize: 16 }}>↓</span>}
                                disableElevation
                                sx={{
                                    bgcolor: "rgba(255,255,255,0.08)",
                                    color: "#fff",
                                    borderRadius: "10px",
                                    textTransform: "none",
                                    fontWeight: 700,
                                    px: 3,
                                    py: 1.5,
                                    fontSize: "0.95rem",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    "&:hover": { bgcolor: "rgba(28, 169, 235, 0.15)" },
                                }}
                            >
                                Inspect Engineering Matrix
                            </Button>
                        </Stack>
                    </Box>
                </Container>
            </Box>

            {/* CORE PRACTICE PILLARS */}
            <Container maxWidth="lg" id="core-practices" sx={{ py: { xs: 3, md: 8 } }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" fontWeight={800} sx={{ color: "#0f172a", letterSpacing: "-0.025em", fontSize: { xs: "1.5rem", md: "2rem" }, mb: 1 }}>
                        Primary Practice Pillars
                    </Typography>
                    <Typography sx={{ color: "#64748b", maxWidth: 600, fontSize: "0.95rem" }}>
                        Structured engineering practices delivering strict code governance, sub-second continuous
                        automation, and enterprise ecosystem scalability.
                    </Typography>
                </Box>
                <Divider sx={{ mb: 5, borderColor: "#e2e8f0" }} />

                <Grid container spacing={6}>
                    {PILLARS.map((p) => (
                        <Grid size={{ xs: 12, lg: 4 }} key={p.num} sx={{ minWidth: 0 }}>
                            <Card
                                sx={{
                                    height: "100%",
                                    // width: "100%",
                                    minWidth: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    p: 2,
                                    borderRadius: "1rem",
                                    border: "1px solid #e2e8f0",
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        boxShadow: "0 20px 25px -5px rgba(0,0,0,0.08)",
                                        borderColor: "#0EA5E9",
                                        "& .pillar-icon-box": { bgcolor: "#0EA5E9", color: "#fff" },
                                        "& .pillar-title": { color: "#0EA5E9" },
                                    },
                                }}
                            >
                                <Box sx={{ minWidth: 0 }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2.5 }}>
                                        <Chip
                                            icon={
                                                <Box component="span" sx={{ display: "flex", alignItems: "center", color: "#7dd3fc" }}>
                                                    {p.icon}
                                                </Box>
                                            }
                                            label={p.tag.toUpperCase()}
                                            size="small"
                                            sx={{
                                                bgcolor: "#0f172a",
                                                color: "#0EA5E9",
                                                fontWeight: 700,
                                                fontSize: "0.7rem",
                                                letterSpacing: "0.03em",
                                                "& .MuiChip-icon": { fontSize: 14, ml: "6px" },
                                            }}
                                        />
                                        <Box
                                            className="pillar-icon-box"
                                            sx={{
                                                width: 34,
                                                height: 34,
                                                borderRadius: "0.5rem",
                                                bgcolor: "#f1f5f9",
                                                color: "#64748b",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "all 0.25s",
                                            }}
                                        >
                                            {p.icon}
                                        </Box>
                                    </Box>

                                    <Typography className="pillar-title" variant="h6" fontWeight={700} sx={{ color: "#0f172a", mb: 1.5 }}>
                                        {p.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#64748b", lineHeight: 1.6, mb: 2.5, fontSize: "0.85rem" }}>
                                        {p.desc}
                                    </Typography>

                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3, width: "100%" }}>
                                        {p.caps.map((c) => (
                                            <Chip
                                                key={c}
                                                label={c}
                                                size="small"
                                                sx={{
                                                    bgcolor: "#f8fafc",
                                                    border: "1px solid #e2e8f0",
                                                    color: "#475569",
                                                    fontWeight: 500,
                                                    fontSize: "0.7rem",
                                                    fontFamily: "monospace",
                                                    borderRadius: "0.375rem",
                                                    maxWidth: "100%",
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>

                                <Box>
                                    <Divider sx={{ borderColor: "#f1f5f9", mb: 2 }} />
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography variant="caption" sx={{ color: "#94a3b8", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "0.65rem" }}>
                                            {p.capsLabel}
                                        </Typography>
                                        <Button
                                            endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
                                            sx={{
                                                color: "#0EA5E9",
                                                textTransform: "none",
                                                fontWeight: 700,
                                                fontSize: "0.8rem",
                                                p: 0,
                                                minWidth: 0,
                                                "&:hover": { bgcolor: "transparent", color: "#0284c7" },
                                            }}
                                        >
                                            Learn More
                                        </Button>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* AEM DEEP DIVE - STICKY SPLIT */}
            <Box
                sx={{
                    bgcolor: COLORS.slateDark,
                    py: { xs: 6, md: 10 },
                    position: "relative",
                    overflow: "hidden",

                }}
            >
                <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
                    <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center", mb: 6 }}>
                        <Typography
                            variant="h3"
                            fontWeight={800}
                            sx={{ color: "#fff", fontSize: { xs: "1.5rem", md: "2.25rem" }, letterSpacing: "-0.02em", mb: 2 }}
                        >
                            What to expect from Adobe Experience Manager
                        </Typography>
                        <Typography sx={{ color: "#94a3b8", fontSize: { xs: "0.875rem", md: "1rem" }, lineHeight: 1.7 }}>
                            Discover how the fusion of modern Edge Delivery Services and enterprise Adobe Experience Manager
                            creates unstoppable performance, autonomous authoring, and omni-channel customer journeys.
                        </Typography>
                    </Box>

                    <Grid container spacing={3}>
                        {AEM_MODULES.map((m) => (
                            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={m.num}>
                                <Card
                                    sx={{
                                        // height: "100%",
                                        p: 2,
                                        bgcolor: "rgba(255,255,255,0.03)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        borderRadius: "1rem",
                                        boxShadow: "none",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            borderColor: "#0EA5E9",
                                            bgcolor: "rgba(14,165,233,0.06)",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: "0.5rem",
                                            bgcolor: "rgba(14,165,233,0.12)",
                                            color: "#0EA5E9",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mb: 2,
                                        }}
                                    >
                                        {m.icon}
                                    </Box>

                                    <Typography
                                        variant="caption"
                                        sx={{ color: "#0EA5E9", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.65rem", display: "block", mb: 0.75 }}
                                    >
                                        Module {m.num}
                                    </Typography>

                                    <Typography variant="h6" fontWeight={700} sx={{ color: "#fff", fontSize: "1rem", mb: 1.5 }}>
                                        {m.title}
                                    </Typography>

                                    <Typography variant="body2" sx={{ color: "#94a3b8", lineHeight: 1.6, fontSize: "0.8rem" }}>
                                        {m.desc}
                                    </Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Testing section */}
            <Box sx={{ bgcolor: "#ffffff", py: { xs: 4, md: 8 } }}>
                <Container maxWidth="lg">
                    <Box sx={{ maxWidth: 750, mx: "auto", textAlign: "center", mb: 6 }}>
                        {/* <Chip
                            icon={<FiberManualRecordIcon sx={{ fontSize: "8px !important", color: "#0EA5E9 !important" }} />}
                            label="VERIFICATION & GOVERNANCE MATRIX"
                            size="small"
                            sx={{
                                mb: 2.5,
                                bgcolor: "#eff6ff",
                                color: COLORS.brandBlue,
                                fontWeight: 700,
                                fontSize: "0.7rem",
                                letterSpacing: "0.05em",
                                borderRadius: "999px",
                                px: 0.5,
                            }}
                        /> */}
                        <Typography
                            variant="h4"
                            fontWeight={800}
                            sx={{ color: "#0f172a", fontSize: { xs: "1.5rem", md: "2.25rem" }, letterSpacing: "-0.02em", mb: 2 }}
                        >
                            What to expect from Software Testing?
                        </Typography>
                        <Typography sx={{ color: "#64748b", fontSize: { xs: "0.875rem", md: "1rem" }, lineHeight: 1.7 }}>
                            Our multi-tier verification paradigm balances the critical perspective of human validation with
                            high-throughput test automation and protocol-level API integrity.
                        </Typography>
                    </Box>

                    <Grid container spacing={3}>
                        {TESTING_CARDS.map((c) => (
                            <Grid size={{ xs: 12, lg: 4 }} key={c.title}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        p: 2,
                                        borderRadius: "1rem",
                                        border: "1px solid #e2e8f0",
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            boxShadow: "0 20px 25px -5px rgba(0,0,0,0.08)",
                                            borderColor: "#0EA5E9",
                                            "& .testing-icon-box": { bgcolor: "#0EA5E9", color: "#fff" },
                                        },
                                    }}
                                >
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2.5 }}>
                                        <Box
                                            className="testing-icon-box"
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: "0.6rem",
                                                bgcolor: "#eff6ff",
                                                color: COLORS.brandBlue,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "all 0.25s",
                                            }}
                                        >
                                            {c.icon}
                                        </Box>
                                        <Chip
                                            label={c.badge}
                                            size="small"
                                            sx={{ bgcolor: "#f1f5f9", color: "#64748b", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.03em" }}
                                        />
                                    </Box>

                                    <Typography variant="caption" sx={{ color: COLORS.brandBlue, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", fontSize: "0.7rem", mb: 0.5, display: "block" }}>
                                        {c.tag}
                                    </Typography>
                                    <Typography variant="h6" fontWeight={700} sx={{ color: "#0f172a", mb: 1.5 }}>
                                        {c.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#64748b", lineHeight: 1.6, mb: 2, fontSize: "0.85rem", flexGrow: 1 }}>
                                        {c.desc}
                                    </Typography>

                                    <Divider sx={{ borderColor: "#f1f5f9", mb: 1 }} />
                                    <Stack spacing={1}>
                                        {c.points.map((pt) => (
                                            <Stack key={pt} direction="row" spacing={1} alignItems="center">
                                                <CheckCircleIcon sx={{ fontSize: 15, color: "#0EA5E9" }} />
                                                <Typography variant="body2" sx={{ fontSize: "0.8rem", color: "#334155" }}>
                                                    {pt}
                                                </Typography>
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}