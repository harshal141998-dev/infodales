import { Box, Container, Typography, Button, Chip, Stack, Grid, Card, } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import TimelineIcon from "@mui/icons-material/Timeline";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import BugReportIcon from "@mui/icons-material/BugReport";
import LayersIcon from "@mui/icons-material/Layers";


import missionImg from "../../assets/images/home/mission.png";
import visionImg from "../../assets/images/home/vision.png";
import strategyImg from "../../assets/images/home/strategy.png";
import valuesImg from "../../assets/images/home/values.png";

const COLORS = {
    slateDark: "#050b14",
    cyanGlow: "#00d2fe",
    brandBlue: "#2563eb",
    surface: "#f8fafc",
    slate800: "#1e293b",
    slate900: "#0f172a",
};

const STATS = [
    { icon: <VerifiedIcon sx={{ fontSize: 16 }} />, label: "Adobe Certified Experts" },
    { icon: <TimelineIcon sx={{ fontSize: 16 }} />, label: "Deterministic Cypress" },
    { icon: <CloudQueueIcon sx={{ fontSize: 16 }} />, label: "Salesforce Cloud Native" },
];
const WHO_WE_ARE = [
    {
        pillar: "PILLAR 01 // STRATEGIC TARGETING",
        title: "Our Mission",
        desc: "Our mission is to customize technology solutions and strategic advice to businesses of all sizes to improve their operations, productivity, and overall success.",
        img: missionImg,
    },
    {
        pillar: "PILLAR 02 // TECH HORIZON",
        title: "Our Vision",
        desc: "The vision includes staying at the forefront of technological innovation, building strong relationships with clients as a trusted advisor, and having a positive impact on society.",
        img: visionImg,
    },
    {
        pillar: "PILLAR 03 // ARCHITECTURE & ALLIANCE",
        title: "Our Strategy",
        desc: "Our strategy is to provide high-quality technology solutions and consulting services to a targeted market, build a talented and experienced team, establish partnerships with other industry players and focus on customer satisfaction.",
        img: strategyImg,
    },
    {
        pillar: "PILLAR 04 // INTEGRITY & TRUST",
        title: "Our Values",
        desc: "Our Values are the principles and beliefs that guide the behavior and decision-making of the organization.",
        img: valuesImg,
    },
];

const HOME_SERVICES = [
    {
        icon: <DeveloperBoardIcon sx={{ fontSize: 20 }} />,
        title: "Web Development With Adobe Experience Manager",
        desc: "Enterprise CMS ecosystems engineered for scalable multi-channel brand presence with zero architectural compromise.",
        tags: ["Multi-Site Manager (MSM)", "Cloud Service", "Dispatcher Caching", "Content Fragments", "Edge Delivery Services (EDS)"],
        link: "View Architecture Specs",
        to: "/services",
    },
    {
        icon: <BugReportIcon sx={{ fontSize: 20 }} />,
        title: "Automation Testing with Cypress",
        desc: "Deterministic QA frameworks that extinguish flaky tests and enable confident, rapid continuous deployment workflows.",
        tags: ["End-to-End Frameworks", "Sub-second Regression", "CI/CD Integration", "Flaky Test Remediation"],
        link: "Explore QA Protocols",
        to: "/services",
    },
    {
        icon: <CloudQueueIcon sx={{ fontSize: 20 }} />,
        title: "Salesforce Development",
        desc: "Streamlined CRM orchestrations, custom Lightning Web Components (LWC), and clean data models built for enterprise revenue systems.",
        tags: ["Service & Sales Cloud", "OmniStudio & LWC", "Custom Cloud Apps", "Legacy Data Migration"],
        link: "View Salesforce Capabilities",
        to: "/services",
    },
];

export default function HomePage() {
    return (
        <Box sx={{ bgcolor: COLORS.surface, minHeight: "100vh" }}>
            {/* HERO */}
            <Box
                sx={{
                    py: { xs: 8, md: 12 },
                    bgcolor: COLORS.slateDark,
                    color: "#fff",
                    position: "relative",
                    overflow: "hidden",
                    borderBottom: "1px solid rgba(30,41,59,0.7)",
                    backgroundImage:
                        "linear-gradient(to right, rgba(56, 189, 248, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.07) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
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
                <Container maxWidth="md" sx={{ position: "relative", zIndex: 10 }}>
                    <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>


                        <Typography
                            variant="h1"
                            fontWeight={800}
                            sx={{ fontSize: { xs: "2.25rem", md: "3.25rem" }, lineHeight: 1.1, mb: 1.5, letterSpacing: "-0.02em" }}
                        >
                            Valley of{" "}
                            <Box component="span" sx={{ background: "linear-gradient(90deg, #38bdf8, #0EA5E9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                Information
                            </Box>
                        </Typography>

                        <Typography sx={{ color: "#7dd3fc", fontWeight: 600, fontSize: { xs: "1rem", md: "1.15rem" }, mb: 3 }}>
                            High-velocity architecture for mission-critical enterprise engineering.
                        </Typography>

                        <Typography sx={{ color: "#cbd5e1", fontSize: { xs: "0.9rem", md: "1rem" }, lineHeight: 1.7, maxWidth: 680, mb: 4 }}>
                            We at InfoDales provide solutions for niche technologies like Adobe Experience Manager,
                            Cypress, Salesforce and DevOps. We have a highly skilled consulting team who help us meet
                            high standards in the above mentioned niche technologies. Our consulting team assists you
                            in the AEM, Cypress, Salesforce and DevOps for building flawless experiences.
                        </Typography>

                        <Button
                            onClick={() => document.getElementById("services-preview")?.scrollIntoView({ behavior: "smooth" })}
                            endIcon={<span style={{ fontSize: 14 }}>↓</span>}
                            disableElevation
                            sx={{
                                mb: 5,
                                bgcolor: "rgba(255,255,255,0.08)",
                                color: "#fff",
                                borderRadius: "8px",
                                textTransform: "none",
                                fontWeight: 700,
                                px: 3,
                                py: 1.25,
                                fontSize: "0.85rem",
                                border: "1px solid rgba(255,255,255,0.1)",
                                "&:hover": { bgcolor: "rgba(14,165,233,0.15)" },
                            }}
                        >
                            Explore Services
                        </Button>

                        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} flexWrap="wrap" justifyContent="center" alignItems="center" useFlexGap>
                            {STATS.map((s) => (
                                <Stack
                                    key={s.label}
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                    sx={{
                                        bgcolor: "rgba(255,255,255,0.03)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        borderRadius: "1rem",
                                        px: 2,
                                        py: 1.25,
                                    }}
                                >
                                    <Box sx={{ color: "#0EA5E9", display: "flex" }}>{s.icon}</Box>
                                    <Typography sx={{ fontSize: "1rem", fontWeight: 600, color: "#cbd5e1" }}>

                                        {s.label}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Box>
                </Container>
            </Box>

            {/* Placeholder anchor for scroll target — replace with your actual next section */}
            <Box sx={{ bgcolor: "#f8fafc", py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} sx={{ mb: 6 }}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            {/* <Chip
                                icon={<FiberManualRecordIcon sx={{ fontSize: "8px !important", color: "#0EA5E9 !important" }} />}
                                label="CORPORATE PROFILE // WHO WE ARE"
                                size="small"
                                sx={{
                                    mb: 2,
                                    bgcolor: "transparent",
                                    color: "#2563eb",
                                    fontWeight: 700,
                                    fontSize: "0.65rem",
                                    letterSpacing: "0.05em",
                                    px: 0,
                                    "& .MuiChip-label": { pl: 0.5 },
                                }}
                            /> */}
                            <Typography variant="h3" fontWeight={800} sx={{ color: "#0f172a", fontSize: { xs: "1.75rem", md: "2.25rem" }, letterSpacing: "-0.02em", mb: 1.5 }}>
                                Who we are?
                            </Typography>
                            <Box sx={{ width: 48, height: 3, bgcolor: "#0EA5E9", borderRadius: "2px" }} />
                        </Grid>

                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography sx={{ color: "#0f172a", fontWeight: 600, fontSize: { xs: "1.3rem", md: "1.15rem" }, lineHeight: 1.6, mb: 2 }}>
                                We at InfoDales are positioned as one of the top engineers of the IT industry offering quick,
                                concise, and reliable services.
                            </Typography>
                            <Typography sx={{ color: "#64748b", fontSize: "1rem", lineHeight: 1.7, mb: 2.5 }}>
                                At our company, we go beyond mere web development. We craft meticulously tailored digital
                                ecosystems that stand the test of time, embodying years of unwavering expertise, ensuring
                                unrivaled maintainability and absolute freedom from technical debt. Our customer-centric
                                solutions and architecting experience help organizations to make a global footprint.
                            </Typography>
                            <Stack
                                component={RouterLink}
                                to="/about"
                                direction="row"
                                spacing={0.5}
                                alignItems="center"
                                sx={{ color: "#0EA5E9", textDecoration: "none", fontWeight: 700, fontSize: "1rem", width: "fit-content", "&:hover": { color: "#0284c7" } }}
                            >
                                <span>Explore Now</span>
                                <ArrowForwardIcon sx={{ fontSize: 15 }} />
                            </Stack>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        {WHO_WE_ARE.map((item) => (
                            <Grid size={{ xs: 12, sm: 6 }} key={item.title}>
                                <Card
                                    sx={{
                                        // height: "100%",
                                        minHeight: 320,
                                        borderRadius: "1rem",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        overflow: "hidden",
                                        position: "relative",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-end",
                                        backgroundImage: `linear-gradient(180deg, rgba(5,11,20,0) 0%, rgba(5,11,20,0.2) 50%, rgba(5,11,20,0.95) 100%), url(${item.img})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        p: 3,
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            transform: "translateY(-4px)",
                                            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                                        },
                                    }}
                                >
                                    <Box>
                                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                            <Box sx={{ width: 20, height: 2, bgcolor: "#0EA5E9" }} />
                                            <Typography variant="h6" fontWeight={700} sx={{ color: "#fff", fontSize: "1.2rem" }}>
                                                {item.title.toUpperCase()}
                                            </Typography>
                                        </Stack>
                                        <Typography variant="body2" sx={{ color: "#cbd5e1", lineHeight: 1.6, fontSize: "0.8rem" }}>
                                            {item.desc}
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
            {/* our services */}
            <Box id="services-preview" sx={{ bgcolor: COLORS.slateDark, py: { xs: 4, md: 8 } }}>
                <Container maxWidth="lg">
                    <Box sx={{ maxWidth: 700, mb: 6 }}>
                        {/* <Chip
                            icon={<FiberManualRecordIcon sx={{ fontSize: "8px !important", color: "#0EA5E9 !important" }} />}
                            label="CORE TECHNICAL CAPABILITIES"
                            size="small"
                            sx={{
                                mb: 2,
                                bgcolor: "transparent",
                                color: "#7dd3fc",
                                fontWeight: 700,
                                fontSize: "0.65rem",
                                letterSpacing: "0.05em",
                                px: 0,
                                "& .MuiChip-label": { pl: 0.5 },
                            }}
                        /> */}
                        <Typography variant="h3" fontWeight={800} sx={{ color: "#fff", fontSize: { xs: "1.75rem", md: "2.25rem" }, letterSpacing: "-0.02em", mb: 1.5 }}>
                            Our Services
                        </Typography>
                        <Typography sx={{ color: "#94a3b8", fontSize: { xs: "1rem", md: "0.95rem" }, lineHeight: 1.7 }}>
                            We design, develop, customize and test web platforms that are maintainable and technical
                            debt-free in long term, which requires years and years of hands-on development experience.
                        </Typography>
                    </Box>

                    <Grid container spacing={5}>
                        {HOME_SERVICES.map((s) => (
                            <Grid size={{ xs: 12, lg: 4 }} key={s.title}>
                                <Card
                                    sx={{
                                        height: { xs: "auto", lg: "100%" },
                                        display: "flex",
                                        flexDirection: "column",
                                        px: 3,
                                        py: 3,
                                        bgcolor: "rgba(255,255,255,0.03)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        borderRadius: "1rem",
                                        boxShadow: "none",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            borderColor: "#0EA5E9",
                                            bgcolor: "rgba(14,165,233,0.05)",
                                            "& .service-icon-box": { bgcolor: "#0EA5E9", color: "#fff" },
                                        },
                                    }}
                                >
                                    <Box
                                        className="service-icon-box"
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: "0.6rem",
                                            bgcolor: "rgba(14,165,233,0.12)",
                                            color: "#0EA5E9",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mb: 2.5,
                                            transition: "all 0.25s",
                                        }}
                                    >
                                        {s.icon}
                                    </Box>

                                    <Typography variant="h6" fontWeight={700} sx={{ color: "#fff", fontSize: "1.05rem", mb: 1.5, lineHeight: 1.3 }}>
                                        {s.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#94a3b8", lineHeight: 1.6, mb: 2.5, fontSize: "0.8rem", flexGrow: 1 }}>
                                        {s.desc}
                                    </Typography>

                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                                        {s.tags.map((t) => (
                                            <Chip
                                                key={t}
                                                label={t}
                                                size="small"
                                                sx={{
                                                    bgcolor: "rgba(14,165,233,0.08)",
                                                    border: "1px solid rgba(14,165,233,0.2)",
                                                    color: "#7dd3fc",
                                                    fontWeight: 500,
                                                    fontSize: "0.65rem",
                                                    borderRadius: "0.375rem",
                                                }}
                                            />
                                        ))}
                                    </Box>

                                    <Stack
                                        component={RouterLink}
                                        to={s.to}
                                        direction="row"
                                        spacing={0.5}
                                        alignItems="center"
                                        sx={{ color: "#0EA5E9", textDecoration: "none", fontWeight: 700, fontSize: "0.8rem", width: "fit-content", "&:hover": { color: "#38bdf8" } }}
                                    >
                                        <span>{s.link}</span>
                                        <ArrowForwardIcon sx={{ fontSize: 14 }} />
                                    </Stack>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* HIRE AEM EXPERTS */}
            <Box sx={{ bgcolor: "#f8fafc", py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {/* Left — heading + CTA */}
                        <Grid size={{ xs: 12, md: 5 }} sx={{ textAlign: { xs: "center", md: "left" } }}>

                            <Typography
                                variant="h3"
                                fontWeight={800}
                                sx={{
                                    color: "#0f172a",
                                    fontSize: { xs: "1.75rem", md: "2.5rem" },
                                    letterSpacing: "-0.02em",
                                    lineHeight: 1.15,
                                    mb: 2,
                                }}
                            >
                                Hire Adobe AEM experts to offer better web content management
                            </Typography>
                            <Typography sx={{ color: "#64748b", fontSize: "1rem", mb: 4 }}>
                                Here's what you get –
                            </Typography>
                            <Button
                                component={RouterLink}
                                to="/contact"
                                endIcon={<VerifiedIcon sx={{ fontSize: 18 }} />}
                                disableElevation
                                sx={{
                                    bgcolor: "#0EA5E9",
                                    color: "#fff",
                                    borderRadius: "10px",
                                    textTransform: "none",
                                    fontWeight: 700,
                                    px: 3.5,
                                    py: 1.5,
                                    fontSize: "0.95rem",
                                    mx: { xs: "auto", md: 0 },
                                    display: { xs: "flex", md: "inline-flex" },
                                    "&:hover": { bgcolor: "#0284c7" },
                                }}

                            >
                                Engage Certified AEM Squad
                            </Button>
                        </Grid>

                        {/* Right — benefit cards */}
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Stack spacing={2}>
                                {[
                                    "Proven expertise and experience in building editable and scalable Adobe CMS websites for your growing business",
                                    "In-depth knowledge of the Adobe AEM platform, its core components, OOTB features, experience fragments, and editable templates",
                                    "Certified Adobe multi-site manager consultants & developers across the Adobe ecosystem",
                                ].map((text, i) => (
                                    <Card
                                        key={i}
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: 2,
                                            p: { xs: 2, sm: 3 },
                                            borderRadius: "0.75rem",
                                            border: "1px solid #e2e8f0",
                                            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                                            transition: "all 0.3s",
                                            "&:hover": {
                                                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                                                borderColor: "#0EA5E9",
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                minWidth: 28,
                                                height: 28,
                                                borderRadius: "50%",
                                                bgcolor: "#eff6ff",
                                                color: "#0EA5E9",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mt: 0.25,
                                            }}
                                        >
                                            <VerifiedIcon sx={{ fontSize: 16 }} />
                                        </Box>
                                        <Typography sx={{ color: "#334155", fontSize: "0.95rem", lineHeight: 1.6 }}>
                                            {text}
                                        </Typography>
                                    </Card>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* CTA — REACH OUT */}
            <Box sx={{
                bgcolor: COLORS.slateDark,
                py: { xs: 4, md: 6 },
                px: 2,
            }}>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: "1.25rem",
                            border: "1px solid rgba(255,255,255,0.08)",
                            bgcolor: "rgba(255,255,255,0.03)",
                            backgroundImage:
                                "linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                            py: { xs: 8, md: 10 },
                            px: { xs: 3, md: 6 },
                            textAlign: "center",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                inset: 0,
                                zIndex: 0,
                                background:
                                    "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(14, 165, 233, 0.12) 0%, transparent 70%)",
                            },
                        }}
                    >
                        <Box sx={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Typography
                                variant="h3"
                                fontWeight={800}
                                sx={{
                                    color: "#fff",
                                    fontSize: { xs: "1.75rem", md: "2.75rem" },
                                    letterSpacing: "-0.02em",
                                    lineHeight: 1.15,
                                    mb: 2.5,
                                    maxWidth: 650,
                                }}
                            >
                                Reach out to us and let's create something incredible.
                            </Typography>

                            <Typography sx={{ color: "#94a3b8", fontSize: { xs: "0.9rem", md: "1rem" }, mb: 4, maxWidth: 520 }}>
                                Schedule an architecture consultation with our principal engineering team.
                            </Typography>

                            <Button
                                component={RouterLink}
                                to="/contact"
                                endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                                disableElevation
                                sx={{
                                    bgcolor: "#0EA5E9",
                                    color: "#fff",
                                    borderRadius: "10px",
                                    textTransform: "none",
                                    fontWeight: 700,
                                    px: 4,
                                    py: 1.5,
                                    fontSize: "0.95rem",
                                    "&:hover": { bgcolor: "#0284c7" },
                                }}
                            >
                                Contact Us
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>

        </Box>
    );
}