import { useState, useMemo, useEffect } from "react";
import {
    Box, Container, Typography, Button, Chip, TextField, Grid, Card, CardContent, Divider,
    Dialog, DialogContent, IconButton, Checkbox, FormControlLabel, Avatar, Stack
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import CodeIcon from "@mui/icons-material/Code";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SpeedIcon from "@mui/icons-material/Speed";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import HubIcon from "@mui/icons-material/Hub";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ForumIcon from "@mui/icons-material/Forum";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PsychologyIcon from "@mui/icons-material/Psychology";
import VerifiedIcon from '@mui/icons-material/Verified';
import philosophyImg from "../../assets/images/carrer/carrier1.webp";
import tip1Img from "../../assets/images/carrer/career2.webp";
import tip2Img from "../../assets/images/carrer/career3.jpg";
import tip3Img from "../../assets/images/carrer/career4.webp";
import tip4Img from "../../assets/images/carrer/career5.jpg";

// ----------------------------------------------------
// THEME & DATA
// ----------------------------------------------------
const COLORS = {
    slateDark: "#050b14",
    cyanGlow: "#00d2fe",
    brandBlue: "#2563eb",
    surface: "#f8fafc",
    slate800: "#1e293b",
    slate900: "#0f172a",
};

const FILTERS = [
    { key: "all", label: "All Disciplines" },
    { key: "aem", label: "AEM Practice" },
    { key: "testing", label: "Testing Practice" },
    { key: "salesforce", label: "Salesforce Practice" },
];

const JOBS = [
    {
        id: 1, category: "aem", icon: <ArchitectureIcon sx={{ fontSize: 20 }} />, badge: "AEM Practice", badgeColor: "blue",
        title: "Senior AEM Architect", location: "Full-time / Hybrid (Pune / Remote)",
        desc: "Lead enterprise multi-tier Adobe Experience Manager deployments. Drive Sling models, OSGi configurations, Dispatcher tuning, and headless decoupled CMS integrations.",
        tags: ["AEM 6.5 / Cloud", "Java 17", "Sling Models", "GraphQL", "Osgi"], tier: "Tier: Principal / 8+ Yrs",
        keywords: "aem adobe experience manager java sling osgi architect cms",
    },
    {
        id: 2, category: "aem", icon: <CodeIcon sx={{ fontSize: 20 }} />, badge: "AEM Practice", badgeColor: "blue",
        title: "Adobe Experience Manager Lead Developer", location: "Full-time / Hybrid (Bengaluru)",
        desc: "Design reusable core components, manage client libraries, establish CI/CD release pipelines via Cloud Manager, and mentor core engineering squads.",
        tags: ["Core Components", "HTL / Sightly", "Cloud Manager", "Maven"], tier: "Tier: Lead / 5-8 Yrs",
        keywords: "aem adobe developer htl sightly component authoring cloud",
    },
    {
        id: 3, category: "testing", icon: <SmartToyIcon sx={{ fontSize: 20 }} />, badge: "Testing Practice", badgeColor: "emerald",
        title: "SDET Automation Engineer (Playwright / Selenium)", location: "Full-time / Remote (India)",
        desc: "Architect end-to-end testing frameworks across microservices and complex front-ends. Drive automated regression suites, pipeline integration, and non-functional verifications.",
        tags: ["Playwright", "Selenium Grid", "TypeScript", "CI/CD"], tier: "Tier: Mid-Senior / 4-7 Yrs",
        keywords: "testing test automation sdet playwright selenium typescript quality ci/cd",
    },
    {
        id: 4, category: "testing", icon: <SpeedIcon sx={{ fontSize: 20 }} />, badge: "Testing Practice", badgeColor: "emerald",
        title: "Performance & API QA Lead", location: "Full-time / Hybrid (Pune)",
        desc: "Establish load testing benchmarks, API schema contracts, security vulnerability scans, and distributed load simulations for high-scale enterprise platforms.",
        tags: ["k6", "JMeter", "REST-Assured", "Postman CLI"], tier: "Tier: Lead / 6+ Yrs",
        keywords: "testing jmeter k6 rest-assured performance api load qa lead",
    },
    {
        id: 5, category: "salesforce", icon: <CloudSyncIcon sx={{ fontSize: 20 }} />, badge: "Salesforce Practice", badgeColor: "cyan",
        title: "Salesforce Tech Lead / OmniStudio Specialist", location: "Full-time / Hybrid (Bengaluru)",
        desc: "Lead multi-cloud implementations across Service Cloud, Experience Cloud, and OmniStudio. Craft lightning web components, asynchronous Apex, and bi-directional ESB syncs.",
        tags: ["OmniStudio", "LWC", "Apex Triggers", "Salesforce DX"], tier: "Tier: Tech Lead / 7+ Yrs",
        keywords: "salesforce omnistudio lwc apex crm technical lead cloud",
    },
    {
        id: 6, category: "salesforce", icon: <HubIcon sx={{ fontSize: 20 }} />, badge: "Salesforce & Cloud", badgeColor: "cyan",
        title: "Cloud Solutions Architect", location: "Full-time / Remote",
        desc: "Orchestrate CRM domain governance, identity management (SSO/OAuth2), and mission-critical enterprise integration pipelines with MuleSoft and event streaming architectures.",
        tags: ["Enterprise Arch", "MuleSoft", "Kafka", "AWS / Cloud"], tier: "Tier: Principal / 10+ Yrs",
        keywords: "salesforce cloud solutions architect integration enterprise middleware mulesoft",
    },
];

const TIPS = [
    {
        title: "Get Clear On What You Want", icon: <LightbulbIcon color="primary" />,
        text: "Employers appreciate candidates who demonstrate a clear understanding of their own objectives. Take the time to understand your own skills, values, and interests, and clearly articulate what you're seeking in terms of job responsibilities, company culture, and growth opportunities. The better you know yourself, the more likely you'll find a new job that provides you with greater satisfaction.",
        note: "Come with 2-3 specific technical goals you want to accomplish in the next 18 months.",
        img: tip1Img,
        imgFirst: false
    },
    {
        title: "Be yourself", icon: <ForumIcon color="primary" />,
        text: "Your initial chat with a recruiter will be casual and candid. So, by being yourself during the interview, you can establish a solid foundation for open and honest communication, ensuring a mutually beneficial and successful work relationship. (And ask a lot of questions!)",
        note: "Our interviews are dialogues, not interrogations. Ask us about project pains and real challenges.",
        img: tip2Img,
        imgFirst: true
    },
    {
        title: "Don't limit yourself", icon: <TrendingUpIcon color="primary" />,
        text: "Have a proactive attitude towards personal and professional growth. Don't limit yourself to what you know today, but rather strive to expand your knowledge and embrace emerging trends and technologies. This mindset ensures that you stay ahead of the curve and bring fresh perspectives to your work.",
        note: "Tell us about a technology or framework you taught yourself from scratch recently.",
        img: tip3Img,
        imgFirst: false
    },
    {
        title: "Think outside the box", icon: <PsychologyIcon color="primary" />,
        text: "Don't be afraid to challenge the status quo, questioning traditional norms and exploring alternative perspectives that push the boundaries of conventional thinking. Infodales is a haven for those who embrace the audacious, daring to venture into unexplored realms of knowledge and challenging the limitation of the known.",
        note: "We celebrate team members who point out better ways to solve recurring bottlenecks.",
        img: tip4Img,
        imgFirst: true
    },
];

// ----------------------------------------------------
// COMPONENT
// ----------------------------------------------------
export default function CareerPage() {
    const [filter, setFilter] = useState("all");
    const [query, setQuery] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("Technical Position");
    const [form, setForm] = useState({ name: "", email: "", link: "", consent: false });
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdO4wxvifRuTRB-_h8wdi5kEDpnAa9jN9Tsd3TO-JK51wVNGQ/viewform?usp=header";

    const filteredJobs = useMemo(() => {
        const q = query.toLowerCase().trim();
        return JOBS.filter((job) => {
            const matchesCategory = filter === "all" || job.category === filter;
            const matchesSearch =
                !q ||
                job.keywords.includes(q) ||
                job.title.toLowerCase().includes(q) ||
                job.desc.toLowerCase().includes(q);
            return matchesCategory && matchesSearch;
        });
    }, [filter, query]);

    // const openModal = (title) => {
    //     setModalTitle(title);
    //     setModalOpen(true);
    // };
    const handleApplyClick = () => {
        window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
    };

    const closeModal = () => {
        setModalOpen(false);
        setForm({ name: "", email: "", link: "", consent: false });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your profile has been dispatched directly to the Infodales engineering recruitment team.");
        closeModal();
    };

    return (
        <Box sx={{ bgcolor: COLORS.surface, minHeight: '100vh' }}>
            {/* HERO */}
            <Box sx={{
                pt: { xs: 8, md: 12 }, pb: { xs: 16, md: 24 },
                bgcolor: COLORS.slateDark, color: "#fff",
                position: "relative", overflow: "hidden", borderBottom: '1px solid rgba(30,41,59,0.7)',
                backgroundImage: 'linear-gradient(to right, rgba(56, 189, 248, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.07) 1px, transparent 1px)',
                backgroundSize: '52px 52px',
                '&::after': {
                    content: '""', position: 'absolute', inset: 0, zIndex: 0,
                    background: 'radial-gradient(ellipse 65% 50% at 50% 35%, rgba(14, 116, 144, 0.25) 0%, rgba(2, 6, 23, 0) 80%), radial-gradient(ellipse 40% 30% at 75% 25%, rgba(37, 99, 235, 0.18) 0%, transparent 70%)'
                }
            }}>
                <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
                    <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        <Typography variant="h1" fontWeight={800} sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, lineHeight: 1.1, mb: 3, letterSpacing: '-0.02em' }}>
                            Join Us
                        </Typography>

                        <Typography sx={{ color: "#cbd5e1", fontSize: { xs: '1.125rem', md: '1.25rem' }, lineHeight: 1.6, maxWidth: 672 }}>
                            We engineer enterprise cloud ecosystems, high-throughput architectures, and resilient digital backbones.
                            Discover an engineering environment built on intellectual autonomy, peer accountability, and outcome velocity.
                        </Typography>

                        {/* Filter chips */}
                        <Box
                            sx={{
                                mt: { xs: 4, md: 6 },
                                p: { xs: 1, sm: 1 },
                                bgcolor: "rgba(15,23,42,0.8)",
                                borderRadius: { xs: 4, sm: 10 },
                                border: "1px solid #1e293b",
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                display: { xs: 'grid', sm: 'flex' },
                                gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'none' },
                                gap: { xs: 1, sm: 1 },
                                justifyContent: { sm: 'center' },
                                flexWrap: { sm: 'wrap' },
                                maxWidth: '100%',
                                mx: 'auto',
                                width: { xs: 'fit-content', sm: 'auto' },
                            }}
                        >
                            {FILTERS.map((f) => (
                                <Button
                                    key={f.key}
                                    onClick={() => setFilter(f.key)}
                                    disableElevation
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: { xs: '0.65rem', sm: '0.75rem' },
                                        textTransform: "uppercase",
                                        px: { xs: 1.5, sm: 2.5 },
                                        py: { xs: 0.75, sm: 1 },
                                        borderRadius: { xs: 3, sm: 10 },
                                        letterSpacing: '0.05em',
                                        whiteSpace: 'nowrap',
                                        bgcolor: filter === f.key ? "#fff" : "transparent",
                                        color: filter === f.key ? "#020617" : "#cbd5e1",
                                        "&:hover": { color: filter === f.key ? "#020617" : "#fff", bgcolor: filter === f.key ? "#fff" : "transparent" },
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {f.label}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>


            {/* JOBS PANEL */}
            <Container maxWidth="lg" id="open-positions" sx={{ mt: { xs: -8, md: -12 }, position: "relative", zIndex: 20, px: { xs: 2, sm: 3 } }}>
                <Card sx={{ borderRadius: { xs: '1rem', sm: '1.5rem' }, p: { xs: 2.5, sm: 4, md: 6 }, boxShadow: "0 20px 50px rgba(15,23,42,0.08)", border: '1px solid #e2e8f0' }}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: "space-between",
                            alignItems: { xs: "flex-start", md: "center" },
                            gap: 2,
                            pb: { xs: 3, md: 4 },
                            mb: { xs: 3, md: 4 },
                            borderBottom: "1px solid #f1f5f9",
                        }}
                    >
                        <Box>
                            <Typography
                                variant="caption"
                                sx={{
                                    color: COLORS.brandBlue,
                                    fontWeight: 600,
                                    textTransform: "uppercase",

                                    letterSpacing: "0.05em",
                                    display: "block",
                                    mb: 0.5,
                                    fontSize: { xs: '0.7rem', sm: '0.75rem' },
                                }}
                            >
                                Current Opportunities
                            </Typography>
                            <Typography
                                variant="h4"
                                fontWeight={800}
                                sx={{
                                    letterSpacing: "-0.025em",
                                    color: "#0f172a",
                                    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.875rem" },
                                }}
                            >
                                Jobs at Infodales Tech Solutions
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "stretch", sm: "center" }, gap: { xs: 1, sm: 2 }, width: { xs: "100%", md: "auto" } }}>
                            <TextField
                                size="small"
                                placeholder="Search roles or skills..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                InputProps={{
                                    startAdornment: <SearchIcon sx={{ color: "#94a3b8", fontSize: 18, mr: 1 }} />,
                                }}
                                sx={{
                                    width: { xs: "100%", sm: 260 },
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: 10,
                                        bgcolor: "#f8fafc",
                                        fontSize: "0.75rem",
                                        "& fieldset": { borderColor: "#e2e8f0" },
                                        "&:hover fieldset": { borderColor: "#cbd5e1" },
                                        "&.Mui-focused fieldset": { borderColor: COLORS.brandBlue, borderWidth: "2px" },
                                    },
                                }}
                            />
                            <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{
                                    whiteSpace: "nowrap",

                                    color: "#94a3b8",
                                }}
                            >
                                {filteredJobs.length} active position{filteredJobs.length === 1 ? "" : "s"}
                            </Typography>
                        </Box>
                    </Box>

                    <Grid container spacing={{ xs: 2, sm: 3 }}>
                        {filteredJobs.map((job) => (
                            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={job.id}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        borderRadius: "1rem",
                                        bgcolor: "#fff",
                                        border: "1px solid #e2e8f0",
                                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                                        overflow: "hidden",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            boxShadow: "0 20px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.04)",
                                            borderColor: "#cbd5e1",
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: { xs: 2.5, sm: 3.5 }, pb: 0, flexGrow: 1, minWidth: 0 }}>
                                        <Box sx={{ mb: 2.5, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <Avatar
                                                sx={{
                                                    bgcolor: "#0f172a",
                                                    borderRadius: "0.6rem",
                                                    width: 44,
                                                    height: 44,
                                                }}
                                            >
                                                {job.icon}
                                            </Avatar>
                                            <Chip
                                                label={job.badge}
                                                size="small"
                                                sx={{
                                                    border: "none",
                                                    bgcolor: "#eff6ff",
                                                    color: "#2563eb",
                                                    borderRadius: "999px",
                                                    fontWeight: 700,
                                                    fontSize: "0.75rem",
                                                    px: 0.5,
                                                    whiteSpace: "nowrap",
                                                    textTransform: "uppercase"
                                                }}
                                            />
                                        </Box>

                                        <Typography
                                            variant="h6"
                                            fontWeight={700}
                                            sx={{ mb: 1.5, color: "#2563eb", fontSize: { xs: "1.05rem", sm: "1.25rem" }, lineHeight: 1.3 }}
                                        >
                                            {job.title}
                                        </Typography>

                                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                                            <LocationOnIcon sx={{ fontSize: 16, color: "#94a3b8", flexShrink: 0 }} />
                                            <Typography variant="body2" sx={{ color: "#64748b", fontWeight: 500, fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                                                {job.location}
                                            </Typography>
                                        </Stack>

                                        <Typography variant="body2" sx={{ mb: 3, color: "#94a3b8", fontSize: "11px", lineHeight: 1.6 }}>
                                            {job.desc}
                                        </Typography>

                                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                                            {job.tags.map((tag) => (
                                                <Box
                                                    key={tag}
                                                    sx={{
                                                        bgcolor: "#fff",
                                                        border: "1px solid #e2e8f0",
                                                        color: "#475569",
                                                        px: 1.5,
                                                        py: 0.5,
                                                        borderRadius: "0.375rem",
                                                        fontSize: "0.75rem",
                                                        fontWeight: 500,
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    {tag}
                                                </Box>
                                            ))}
                                        </Box>
                                    </CardContent>

                                    <Divider sx={{ borderColor: "#f1f5f9", mx: { xs: 2.5, sm: 3.5 } }} />

                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            p: { xs: 1.5, sm: 2 },
                                        }}
                                    >
                                        <Typography variant="body2" sx={{ color: "#64748b", fontWeight: 500, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                                            {job.tier}
                                        </Typography>
                                        <Button
                                            size="medium"
                                            endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
                                            // onClick={() => openModal(job.title)}
                                            onClick={handleApplyClick}
                                            disableElevation
                                            sx={{
                                                bgcolor: "#0f172a",
                                                color: "#fff",
                                                borderRadius: "40px",
                                                textTransform: "none",
                                                fontSize: "12px",
                                                fontWeight: 500,
                                                p: 1,
                                                whiteSpace: "nowrap",
                                                "&:hover": { bgcolor: "#0EA5E9" },
                                            }}
                                        >
                                            Apply Now
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Card>
            </Container>



            {/* PHILOSOPHY */}
            <Box sx={{ py: { xs: 5, md: 10 }, bgcolor: COLORS.surface }}>
                <Container maxWidth="lg">

                    {/* Top Text Section */}
                    <Box sx={{ maxWidth: 800, mb: 6 }}>

                        <Typography variant="h2" fontWeight={800} sx={{ color: '#0f172a', fontSize: { xs: '2rem', md: '2.5rem' }, letterSpacing: '-0.025em', mb: 2 }}>
                            Our philosophy
                        </Typography>
                        <Typography sx={{ color: "#475569", fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.6 }}>
                            Our interviewing philosophy centers on outcomes, not just processes. We seek candidates who bring their unique
                            strengths, positive mindset, and solid reputation to the table, as these factors matter more than your formal qualifications.
                        </Typography>
                    </Box>

                    {/* Image & List Card */}
                    <Card sx={{ borderRadius: '1.5rem', overflow: "hidden", border: '1px solid #e2e8f0', boxShadow: '0 4px 25px rgba(0, 0, 0, 0.05)' }}>
                        <Grid container> {/* 👈 REMOVED spacing={3} so the image can touch the edges */}

                            <Grid size={{ xs: 12, lg: 6 }} sx={{ minHeight: { xs: 380, lg: 'auto' }, position: "relative" }}>
                                <Box
                                    component="img"
                                    src={philosophyImg}
                                    alt="Team"
                                    sx={{ position: 'absolute', inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </Grid>

                            <Grid size={{ xs: 12, lg: 6 }} sx={{ p: { xs: 4, lg: 6, xl: 8 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ color: '#0ea5e9', mb: 2, fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>
                                    <VerifiedIcon sx={{ fontSize: 20 }} />
                                    <Typography variant="inherit" sx={{ letterSpacing: '0.05em' }}>Transparent Talent Evaluation</Typography>
                                </Stack>

                                <Typography variant="h3" fontWeight={800} sx={{ mb: 2.5, color: '#0f172a', fontSize: { xs: '1.75rem', md: '2.25rem' }, letterSpacing: '-0.025em' }}>
                                    Our thought process
                                </Typography>

                                <Typography sx={{ mb: 4, color: "#475569", fontSize: { xs: '0.875rem', md: '1rem' }, lineHeight: 1.7 }}>
                                    We believe in a streamlined hiring process that focuses on finding the perfect fit for our company. Our objective
                                    is to understand your skills, abilities, and potential for growth, while also giving you the opportunity to learn about us. Our ultimate goal is to ensure that we bring in individuals who are the right match for our projects and can contribute to our collective success. That's it.
                                </Typography>

                                <Stack spacing={2.5} sx={{ bgcolor: "#fff", border: '1px solid #e2e8f0', p: { xs: 2.5, sm: 3 }, borderRadius: '1.25rem' }}>
                                    {[
                                        ["Pragmatic Competency Over Pedigree", "Real-world system design and clean abstractions trump abstract trivia."],
                                        ["Two-Way Evaluation", "We make sure our team, cadence, and roadmap match your long-term ambitions."],
                                    ].map(([t, d]) => (
                                        <Stack direction="row" spacing={2} alignItems="flex-start" key={t}>
                                            <CheckCircleIcon sx={{ color: "#2563eb", fontSize: 22, mt: 0.25 }} />
                                            <Box>
                                                <Typography variant="subtitle2" fontWeight={700} sx={{ color: '#0f172a', fontSize: '0.9rem', mb: 0.5 }}>{t}</Typography>
                                                <Typography variant="body2" sx={{ color: "#64748b", lineHeight: 1.5, fontSize: '0.8125rem' }}>{d}</Typography>
                                            </Box>
                                        </Stack>
                                    ))}
                                </Stack>
                            </Grid>

                        </Grid>
                    </Card>
                </Container>
            </Box>

            {/* TIPS */}
            <Box sx={{ bgcolor: "rgba(241, 245, 249, 0.6)", borderTop: '1px solid #e2e8f0', py: { xs: 5, md: 10 } }}>
                <Container maxWidth="lg">
                    <Box sx={{ maxWidth: 768, mx: "auto", textAlign: "center", mb: 8 }}>
                        <Typography variant="h2" fontWeight={800} sx={{ color: '#0f172a', fontSize: { xs: '1.875rem', md: '2.25rem' }, letterSpacing: '-0.025em' }}>Some tips from us</Typography>
                        <Typography sx={{ mt: 2, color: "#475569", fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.6 }}>
                            If you're about to head into your first interview, we want you to feel confident (and excited!) to meet with us. To help you feel more prepared, members of our recruiting team have shared some of their top tips.
                        </Typography>
                    </Box>

                    <Stack spacing={4}>
                        {TIPS.map((tip) => (
                            <Card key={tip.title} sx={{ borderRadius: '1.5rem', overflow: "hidden", border: '1px solid rgba(226, 232, 240, 0.9)', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' } }}>
                                <Grid container direction={tip.imgFirst ? "row-reverse" : "row"}>
                                    <Grid size={{ xs: 12, lg: 6 }} sx={{ p: { xs: 4, lg: 6 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <Typography variant="caption" sx={{ color: COLORS.brandBlue, fontWeight: 600, textTransform: "uppercase", letterSpacing: '0.05em', display: 'block', mb: 1 }}>{tip.step}</Typography>
                                        <Typography variant="h4" fontWeight={700} sx={{ mb: 2, color: '#0f172a', fontSize: '1.5rem', letterSpacing: '-0.025em' }}>{tip.title}</Typography>
                                        <Typography sx={{ mb: 3, color: "#475569", fontSize: { xs: '0.875rem', md: '1rem' }, lineHeight: 1.6 }}>{tip.text}</Typography>
                                        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ bgcolor: "#f8fafc", border: '1px solid rgba(226, 232, 240, 0.8)', p: 2, borderRadius: '0.75rem', color: '#334155' }}>
                                            {tip.icon}
                                            <Typography sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}><strong>Recruiter note:</strong> {tip.note}</Typography>
                                        </Stack>
                                    </Grid>
                                    <Grid size={{ xs: 12, lg: 6 }} sx={{ minHeight: { xs: 300, lg: 'auto' }, position: 'relative' }}>
                                        <Box component="img" src={tip.img} alt={tip.title} sx={{ position: 'absolute', inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                                    </Grid>
                                </Grid>
                            </Card>
                        ))}
                    </Stack>
                </Container>
            </Box>

            {/* CTA */}
            <Box sx={{
                bgcolor: COLORS.slateDark, color: "#fff", p: 2, m: 2, position: 'relative', overflow: 'hidden',
                backgroundImage: 'linear-gradient(to right, rgba(56, 189, 248, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.07) 1px, transparent 1px)',
                backgroundSize: '52px 52px', borderRadius: "10px"
            }}>
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center", gap: 4 }}>
                    <Box sx={{ maxWidth: 576 }}>

                        <Typography variant="h4" fontWeight={800} sx={{ mb: 1, letterSpacing: '-0.025em', fontSize: { xs: '1.5rem', sm: '1.875rem' } }}>Don't see your specific stack listed?</Typography>
                        <Typography sx={{ color: "#94a3b8", fontSize: { xs: '0.875rem', sm: '1rem' }, lineHeight: 1.6 }}>
                            We are continuously seeking extraordinary problem-solvers across Cloud, DevSecOps, and Enterprise Data platforms. Introduce yourself directly.
                        </Typography>
                    </Box>
                    <Box sx={{ flexShrink: 0 }}>
                        <Button onClick={handleApplyClick}
                            disableElevation
                            sx={{ bgcolor: "#fff", color: "#020617", px: 3, py: 1.5, borderRadius: 10, fontWeight: 700, textTransform: "uppercase", fontSize: '0.75rem', letterSpacing: '0.05em', "&:hover": { bgcolor: "#f1f5f9", boxShadow: '0 0 20px rgba(255,255,255,0.3)' }, transition: 'all 0.3s' }}>
                            Submit General Profile
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* APPLICATION MODAL */}
            {/* <Dialog open={modalOpen} onClose={closeModal} maxWidth="sm" fullWidth PaperProps={{ sx: { borderRadius: '1.5rem', p: 0, border: '1px solid #f1f5f9', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' } }} slotProps={{ backdrop: { sx: { bgcolor: 'rgba(2, 6, 23, 0.7)', backdropFilter: 'blur(12px)' } } }}>
                <DialogContent sx={{ p: { xs: 4, sm: 5 } }}>
                    <IconButton onClick={closeModal} sx={{ position: "absolute", top: 24, right: 24, bgcolor: "#f1f5f9", color: '#64748b', width: 36, height: 36, '&:hover': { bgcolor: '#e2e8f0', color: '#0f172a' } }}>
                        <CloseIcon sx={{ fontSize: 20, }} />
                    </IconButton>
                    <Typography variant="h5" fontWeight={700} sx={{ mb: 1, color: '#0f172a' }}>{modalTitle}</Typography>
                    <Typography variant="body2" sx={{ mb: 4, color: "#64748b", fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                        Submit your profile directly to our engineering hiring leads. We prioritize practical competency over rigid credentials.
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { mb: 2 } }}>
                        <Typography variant="subtitle2" sx={{ color: '#334155', fontWeight: 600, fontSize: '0.75rem', mb: 0.5 }}>Full Name *</Typography>
                        <TextField required fullWidth size="small" value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g., Alexandra Miller"
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '0.75rem', bgcolor: '#f8fafc', fontSize: { xs: '0.75rem', sm: '0.875rem' }, '& fieldset': { borderColor: '#e2e8f0' }, '&.Mui-focused fieldset': { borderColor: COLORS.brandBlue } } }} />

                        <Typography variant="subtitle2" sx={{ color: '#334155', fontWeight: 600, fontSize: '0.75rem', mb: 0.5 }}>Professional Email *</Typography>
                        <TextField required fullWidth size="small" type="email" value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="alex@domain.com"
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '0.75rem', bgcolor: '#f8fafc', fontSize: { xs: '0.75rem', sm: '0.875rem' }, '& fieldset': { borderColor: '#e2e8f0' }, '&.Mui-focused fieldset': { borderColor: COLORS.brandBlue } } }} />

                        <Typography variant="subtitle2" sx={{ color: '#334155', fontWeight: 600, fontSize: '0.75rem', mb: 0.5 }}>Portfolio / GitHub / LinkedIn</Typography>
                        <TextField fullWidth size="small" type="url" value={form.link}
                            onChange={(e) => setForm({ ...form, link: e.target.value })} placeholder="https://github.com/your-handle"
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '0.75rem', bgcolor: '#f8fafc', fontSize: { xs: '0.75rem', sm: '0.875rem' }, '& fieldset': { borderColor: '#e2e8f0' }, '&.Mui-focused fieldset': { borderColor: COLORS.brandBlue } } }} />

                        <Stack direction="row" justifyConten="flex-end" spacing={1.5} sx={{ mt: 3, pt: 2, justifyContent: 'flex-end' }}>
                            <Button onClick={closeModal} sx={{ textTransform: "none", color: "#475569", fontWeight: 600, fontSize: '0.75rem', borderRadius: 10, px: 2.5, '&:hover': { bgcolor: '#f1f5f9' } }}>Cancel</Button>
                            <Button type="submit" disableElevation sx={{ bgcolor: "#0f172a", color: "#fff", borderRadius: 10, px: 3, textTransform: "none", fontWeight: 600, fontSize: '0.75rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', "&:hover": { bgcolor: COLORS.brandBlue } }}>
                                Submit Candidate Profile
                            </Button>
                        </Stack>
                    </Box>
                </DialogContent>
            </Dialog> */}
        </Box >
    );
}
