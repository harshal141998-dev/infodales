import React from "react";
import {
    Box, Container, Typography, Button, Chip, Grid, Card, CardContent, Divider,
    Avatar, Stack
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import CodeIcon from "@mui/icons-material/Code";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import HubIcon from "@mui/icons-material/Hub";
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import PublicIcon from '@mui/icons-material/Public';
import philosophyImg from "../../assets/images/carrer/carrier1.webp"; // Reusing existing asset for visual consistency
import codilarlogo from "../../assets/images/aboutus/codilar-logo.svg";
import hayalogo from "../../assets/images/aboutus/hayagreeva-logo.svg";
import gspannlogo from "../../assets/images/aboutus/gspann-logo.webp";
import { useNavigate } from "react-router-dom";
import { pink } from "@mui/material/colors";
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

const CAPABILITIES = [
    {
        id: 1,
        icon: <ArchitectureIcon sx={{ fontSize: 20 }} />,
        title: "Edge Delivery Services",
        desc: "Our EDS practice covers the full delivery lifecycle — solution architecture, custom block development, performance optimization, and migration from traditional AEM or legacy CMS platforms.",
        // tags: ["BGP Autopilot", "ML Routing", "Zero-Ops Failover"],
    },
    {
        id: 2,
        icon: <SecurityIcon sx={{ fontSize: 20 }} />,
        title: "Adobe Assets",
        desc: "Our AEM Assets practice spans the entire implementation journey — DAM architecture, metadata schema design, smart tagging and classification, and migration from legacy or fragmented asset repositories."
        //desc: "Hardware-enclave isolation using zero-knowledge SNARK verifications. End-to-end mTLS 1.3 with ephemeral cryptographic keys rotated automatically every 60 seconds.",
        // tags: ["SNARKs", "mTLS 1.3", "Hardware Enclaves"],
    },
    {
        id: 3,
        icon: <SpeedIcon sx={{ fontSize: 20 }} />,
        title: "AEM Sites",
        desc: "Within AEM Sites, we manage the complete build lifecycle — solution architecture, Sling model and component engineering, template and layout design, and migration from legacy CMS platforms."
        //desc: "Direct private dark-fiber interconnects linking 140+ Points of Presence. Raw DPDK and eBPF kernel-bypass eliminate OS network stack overhead for raw wire execution.",
        // tags: ["140+ PoPs", "DPDK / eBPF", "Dark Fiber"],
    },
    {
        id: 4,
        icon: <StorageIcon sx={{ fontSize: 20 }} />,
        title: "AEM Forms",
        desc: "AEM Forms is where we manage the complete build lifecycle — form template design, adaptive form and document fragment development, workflow and submission processing, and migration from legacy or paper-based form systems."
        //desc: "Atomic distributed state machines operating at tens of millions of operations per second. Nanosecond distributed tracing without throughput degradation or telemetry loss.",
        // tags: ["Atomic State", "Nanosecond Tracing", "Zero Telemetry Loss"],
    },
];

const PROOF_POINTS = [
    {
        id: 1,
        title: "On-Time Delivery",
        desc: "Predictable releases backed by disciplined sprint planning and clear milestone tracking.",
    },
    {
        id: 2,
        title: "Performance at Scale",
        desc: "Systems engineered and load-tested to perform reliably under real-world traffic and data volume.",
    },
    {
        id: 3,
        title: "Zero-Surprise Deployments",
        desc: "Rigorous QA, staging validation, and rollback planning built into every release.",
    },
    {
        id: 4,
        title: "Continuous Monitoring",
        desc: "Post-launch observability and proactive issue detection to keep systems dependable long after go-live.",
    },
];

const CLIENT_TIERS = [
    {
        id: "codilar",
        //metric: "99",
        logosrc : codilarlogo,
        category: "CODILAR",
        quote: "Delivered an AEM Forms implementation for HDFC in partnership with Codilar, architecting a hybrid solution that combines native AEM Forms capabilities with a EDS — enabling secure, responsive digital form experiences at enterprise scale.",
        author: "Julian Vance",
        role: "CTO, Global Quantitative Capital",
        highlight: "12M DAILY ARBITRAGE TRADES",
    },
    {
        id: "hayagreeva",
        //metric: "99",
        logosrc: hayalogo,
        category: "HAYA GREEVA",
        quote: "Partnered with Haya Greeva on multiple AEM Sites implementations, delivering scalable web architecture and consistent, high-performing digital experiences across their site portfolio.",
        author: "Rachel Kowalski",
        role: "Head of Cloud Infrastructure, Sovereign Financial Network",
        highlight: "CONTINUOUS ZK AUDITING",
    },
    {
        id: "gspann",
        //metric: "99",
        logosrc: gspannlogo,
        category: "GSPANN",
        quote: "Collaborated with GSPANN on multiple AEM Sites and AEM Cloud Service (AEM as a Cloud Service) implementations, including work for enterprise brands such as Marriott Vacation Club and Williams-Sonoma, delivering scalable, cloud-native digital experiences.",
        author: "Henrik Lindqvist",
        role: "Chief Architect, Nordic Cloud Telecom",
        highlight: "4.2B DAILY PACKET FLOWS",
    },
];

const HERO_LOGOS = [
    { id: "codilar" , name: "Codilar", src: codilarlogo }, // Replace with your actual image path
    { id: "hayagreeva", name: "Haya Greeva", src: hayalogo },
    { id: "gspann" , name: "GSAPNN", src: gspannlogo }
];



// ----------------------------------------------------
// COMPONENT
// ----------------------------------------------------
export default function AboutUsPage() {
    
    const navigateTo = useNavigate();

    return (
        <Box sx={{ bgcolor: COLORS.surface, fontFamily: "'Plus Jakarta Sans', sans-serif", minHeight: '100vh' }}>
           
            <span >
              <image src=""/>
            </span>
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
                        
                        {/* <Chip 
                            label="GLOBAL INQUIRIES & ENTERPRISE ADVISORY" 
                            size="small"
                            sx={{ 
                                bgcolor: "rgba(15,23,42,0.8)", 
                                color: "#67e8f9", 
                                border: "1px solid #1e293b",
                                mb: 3, 
                                fontFamily: "'Space Grotesk', monospace", 
                                textTransform: 'uppercase',
                                fontSize: '0.7rem',
                                letterSpacing: '0.05em'
                            }} 
                        /> */}

                        <Typography variant="h1" fontWeight={800} sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, lineHeight: 1.1, mb: 3, letterSpacing: '-0.02em' }}>
                            About Us
                        </Typography>

                        <Typography sx={{ color: "#cbd5e1", fontSize: { xs: '1.125rem', md: '1.25rem' }, lineHeight: 1.6, maxWidth: 672 }}>
                            We deliver enterprise-grade content management through Adobe Experience Manager (AEM), the industry-leading CMS for websites, mobile apps, and forms — enabling seamless content management and digital experiences that cultivate lifetime customer value and enduring brand loyalty.
                        </Typography>

                        {/* <Stack direction="row" spacing={2} sx={{ mt: 4, color: "#9fafc6", fontSize: "0.90rem", fontFamily: "'Space Grotesk', monospace", textTransform: "uppercase" }}>
                            <span>image</span>
                            <span>CODILAR</span>
                            <span>•</span>
                            <span>image</span>
                            <span>HAYA GREEVA</span>
                            <span>•</span>
                            <span>image</span>
                            <span>GSAPNN</span>
                        </Stack> */}

                         <Stack 
                            direction="row" 
                            spacing={{ xs: 2, md: 4 }} 
                            sx={{ 
                                mt: 5, 
                                color: "#64748b", 
                                fontSize: "0.75rem", 
                                fontFamily: "'Space Grotesk', monospace", 
                                textTransform: "uppercase",
                                alignItems: "center",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: { xs: 2, md: 3 }
                            }}
                        >
                            {HERO_LOGOS.map((logo, index) => (
                                <React.Fragment key={logo.name}>
                                    <Box 
                                        component="img"
                                        src={logo.src}
                                        alt={logo.name}
                                        sx={{
                                            height: { xs: 30, md: 40 }, // Adjust height based on your logo dimensions
                                            width: "auto",
                                            objectFit: "contain",
                                            // This filter ensures black logos turn white for the dark theme.
                                            // Remove this line if your logos are already white or colored.
                                            filter: " invert(-1)",
                                            opacity: 0.7,
                                            transition: "opacity(5) 0.3s",
                                            "&:hover": {
                                                opacity: 1
                                            }
                                        }}
                                        onClick={()=>{
                                            const element = document.getElementById(logo.id);
                                            if(element){
                                                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                            }
                                        }}
                                    />
                                    
                                    {/* {index < HERO_LOGOS.length - 1 && (
                                        <span style={{ color: "#475569" }}>•</span>
                                    )} */}
                                </React.Fragment>
                            ))}
                        </Stack>

                         
                    </Box>
                </Container>
            </Box>

            {/* CORE CAPABILITIES PANEL */}
            <Container maxWidth="lg" sx={{ mt: { xs: -8, md: -12 }, position: "relative", zIndex: 20, px: { xs: 2, sm: 3 } }}>
                <Card sx={{ borderRadius: { xs: '1rem', sm: '1.5rem' }, p: { xs: 2.5, sm: 4, md: 6 }, boxShadow: "0 20px 50px rgba(15,23,42,0.08)", border: '1px solid #e2e8f0' }}>
                    
                    {/* <Box sx={{ mb: { xs: 4, md: 6 } }}>
                        <Typography variant="h2" fontWeight={800} sx={{ color: "#0f172a", fontSize: { xs: "2rem", md: "2.5rem" }, letterSpacing: "-0.025em", mb: 1.5 }}>
                            Where Zero Downtime Began
                        </Typography>
                        <Typography sx={{ color: "#475569", fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.6, maxWidth: 800 }}>
                            Deterministic, latency-critical cloud primitives engineered for high-growth enterprise ecosystems. Continuous verified cryptographic proofs, zero-trust execution, and distributed resilience.
                        </Typography>
                    </Box> */}

                    <Divider sx={{ borderColor: "#f1f5f9", mb: { xs: 4, md: 6 } }} />

                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h4" fontWeight={800} sx={{ color: "#0f172a", fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.875rem" }, letterSpacing: "-0.025em", mb: 1 }}>
                            Solutions Across Leading Platforms
                        </Typography>
                        <Typography sx={{ color: "#64748b", fontSize: "1rem", maxWidth: 800 }}>
                            We architect enterprise solutions across the AEM suite — AEM Sites for scalable web delivery, AEM Forms for secure digital transactions, AEM Assets for centralized DAM and governance, and Edge Delivery Services for high-performance, edge-rendered experiences — complemented by Adobe Target for personalization and experimentation. This makes us a single, technically accountable partner for content architecture and experience delivery across the AEM ecosystem.                        </Typography>
                    </Box>

                    <Grid container spacing={{ xs: 2, sm: 3 }}>
                        {CAPABILITIES.map((cap) => (
                            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={cap.id}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        borderRadius: "1rem",
                                        bgcolor: "#fff",
                                        border: "1px solid #e2e8f0",
                                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)",
                                        transition: "all 0.3s",
                                        "&:hover": {
                                            // boxShadow: "0 20px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.02)",
                                            // borderColor: "#cbd5e1",
                                            borderColor: "#0EA5E9"
                                        },
                                    }}
                                >
                                    <CardContent sx={{ p: { xs: 2.5, sm: 3.5 }, pb: 0, flexGrow: 1 }}>
                                        {/* <Box sx={{ mb: 2.5, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <Avatar sx={{ bgcolor: "#0f172a", borderRadius: "0.6rem", width: 44, height: 44 }}>
                                                {cap.icon}
                                            </Avatar>
                                        </Box> */}
                                        <Typography variant="h6" fontWeight={700} sx={{ mb: 1.5, color: "#0f172a", fontSize: "1.05rem", lineHeight: 1.3 }}>
                                            {cap.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ mb: 3, color: "#64748b", fontSize: "0.8125rem", lineHeight: 1.6 }}>
                                            {cap.desc}
                                        </Typography>
                                        {/* <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                                            {cap.tags.map((tag) => (
                                                <Box key={tag} sx={{ bgcolor: "#f8fafc", border: "1px solid #e2e8f0", color: "#475569", px: 1.5, py: 0.5, borderRadius: "0.375rem", fontSize: "0.7rem", fontWeight: 500 }}>
                                                    {tag}
                                                </Box>
                                            ))}
                                        </Box> */}
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Card>
            </Container>

            {/* EXECUTIVE CHARTER */}
            {/* <Box sx={{ py: { xs: 5, md: 10 }, bgcolor: COLORS.surface }}> */}
            <Box sx={{ py: { xs: 5, md: 10 }, bgcolor: COLORS.slateDark }}>
                <Container maxWidth="lg">
                    {/* <Card sx={{borderRadius: '1.5rem', overflow: "hidden", border: '1px solid #e2e8f0', boxShadow: '0 4px 25px rgba(0, 0, 0, 0.05)' }}> */}
                    <Card sx={{
                                        // height: "100%",
                                        p: 2,
                                        bgcolor: "rgba(255,255,255,0.03)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        borderRadius: "1rem",
                                        boxShadow: "none",
                                        transition: "all 0.3s",
                                        // "&:hover": {
                                        //     borderColor: "#0EA5E9",
                                        //     bgcolor: "rgba(14,165,233,0.06)",
                                        // },
                                    }}> 
                        <Grid container>
                            <Grid  size={{ xs: 12, lg: 6 }} sx={{ p: { xs: 4, lg: 6, xl: 8 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                {/* <Stack direction="row" alignItems="center" spacing={1.5} sx={{ color: COLORS.brandBlue, mb: 2, fontFamily: "'Space Grotesk', monospace", fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>
                                    <Typography variant="inherit" sx={{ letterSpacing: '0.05em' }}>LEADERSHIPS</Typography>
                                </Stack> */}

                                {/* <Typography variant="h3" fontWeight={800} sx={{ mb: 3, color: '#0f172a', fontSize: { xs: '1.75rem', md: '2.25rem' }, letterSpacing: '-0.025em', lineHeight: 1.3 }}> */}
                                <Typography variant="h3" fontWeight={800} sx={{ mb: 3, color: '#fff', fontSize: { xs: '1.75rem', md: '2.25rem' }, letterSpacing: '-0.025em', lineHeight: 1.3 }}> 
                                  "We measure success the way our clients do — on-time delivery, systems built to perform under real-world load, and zero surprises."
                                </Typography>

                                {/* <Typography sx={{ color: "#475569", fontSize: { xs: '0.875rem', md: '1rem' }, lineHeight: 1.7 }}> */}
                                <Typography sx={{ color: "#94a3b8", fontSize: { xs: '0.875rem', md: '1rem' }, lineHeight: 1.7 }}>
                                  A commitment we hold across every engagement, from the first architecture decision to the final release                                </Typography>
                            </Grid>

                            {/* <Grid size={{ xs: 12, lg: 6 }} sx={{ bgcolor: "#f8fafc", p: { xs: 4, lg: 6, xl: 8 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: { lg: '1px solid #e2e8f0' } }}> */}
                            <Grid size={{ xs: 12, lg: 6 }} sx={{ bgcolor: "rgba(255,255,255,0.03)", p: { xs: 4, lg: 6, xl: 8 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: { lg: '1px solid #e2e8f0' } }}>
                                <Grid container spacing={3}>
                                    {PROOF_POINTS.map((point) => (
                                        <Grid size={{ xs: 12, sm: 6 }} key={point.id}>
                                            {/* <Box sx={{ bgcolor: "#fff", p: 3, borderRadius: '1rem', border: '1px solid #e2e8f0', height: '100%' }}> */}
                                            <Box sx={{
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
                                    }}>
                                                {/* <Typography variant="subtitle2" fontWeight={700} sx={{ color: '#0f172a', fontSize: '0.9rem', mb: 1 }}> */}
                                                <Typography variant="subtitle2" fontWeight={700} sx={{ color: '#fff', fontSize: '0.9rem', mb: 1 }}>
                                                    {point.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: "#64748b", lineHeight: 1.5, fontSize: '0.8125rem' }}>
                                                    {point.desc}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Container>
            </Box>

            {/* PRODUCTION VERIFICATION / CLIENT TIERS */}
            <Box sx={{ bgcolor: "rgba(241, 245, 249, 0.6)", borderTop: '1px solid #e2e8f0', py: { xs: 5, md: 10 } }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'flex-end' }, mb: 6, gap: 2 }}>
                        <Box>
                            <Typography variant="caption" sx={{ color: COLORS.brandBlue, fontWeight: 600, textTransform: "uppercase", fontFamily: "'Space Grotesk', monospace", letterSpacing: '0.05em', display: 'block', mb: 1 }}>
                                TRUSTED ACROSS INDUSTRIES
                            </Typography>
                            <Typography variant="h2" fontWeight={800} sx={{ color: '#0f172a', fontSize: { xs: '1.875rem', md: '2.25rem' }, letterSpacing: '-0.025em' }}>
                                Client Success Stories
                            </Typography>
                        </Box>
                        {/* <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                            <Chip label="Global Investment Banking" size="small" sx={{ bgcolor: "#fff", border: "1px solid #e2e8f0", fontWeight: 600, fontSize: '0.7rem' }} />
                            <Chip label="Hyperscale SaaS" size="small" sx={{ bgcolor: "#fff", border: "1px solid #e2e8f0", fontWeight: 600, fontSize: '0.7rem' }} />
                            <Chip label="Telecom Backbone" size="small" sx={{ bgcolor: "#fff", border: "1px solid #e2e8f0", fontWeight: 600, fontSize: '0.7rem' }} />
                        </Stack> */}
                    </Box>

                    {/* <Grid container spacing={4}>
                        {CLIENT_TIERS.map((client) => (
                            <Grid size={{ xs: 12, md: 4 }} key={client.id}>
                                <Card sx={{ height: '100%', borderRadius: '1.25rem', p: 4, bgcolor: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)', display: 'flex', flexDirection: 'column' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                                        <Typography variant="h3" fontWeight={800} sx={{ color: COLORS.brandBlue, fontSize: '2rem' }}>
                                            {client.logosrc}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 700, fontSize: '0.65rem', fontFamily: "'Space Grotesk', monospace" }}>
                                            {client.category}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" sx={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.7, mb: 4, flexGrow: 1, fontStyle: 'italic' }}>
                                        "{client.quote}"
                                    </Typography>
                                    <Box sx={{ mt: 'auto' }}>
                                        <Typography variant="subtitle2" fontWeight={700} sx={{ color: '#0f172a', fontSize: '0.9rem' }}>
                                            {client.author}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mb: 2 }}>
                                            {client.role}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: COLORS.brandBlue, fontWeight: 700, fontSize: '0.7rem', fontFamily: "'Space Grotesk', monospace", letterSpacing: '0.05em' }}>
                                            {client.highlight}
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid> */}

                    <Grid container spacing={4}>
                    {CLIENT_TIERS.map((client) => (
                        <Grid size={{ xs: 12, md: 4 }} key={client.id} id={client.id}>
                            <Card sx={{ height: '75%', borderRadius: '1.25rem', p: 4, bgcolor: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)', display: 'flex', flexDirection: 'column', 
                                 transition: "all 0.3s",
                                        "&:hover": {
                                            borderColor: "#0EA5E9",
                                            
                                        }
                            }}>
                                
                                {/* Header Box: Logo and Category */}
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 3, gap: 2 }}>
                                    <Box 
                                        component="img"
                                        src={client.logosrc}
                                        alt={client.category}
                                        sx={{
                                            height: { xs: 28, md: 32 }, // Adjust this height to fit your logo proportions
                                            width: "auto",
                                            maxWidth: "60%", // Prevents very wide logos from pushing the text off
                                            objectFit: "contain",
                                            // Uncomment the line below if your logos are black and you want them dark gray
                                            // filter: "brightness(0) opacity(0.8)" 
                                        }}
                                    />
                                    <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 700, fontSize: '0.65rem', fontFamily: "'Space Grotesk', monospace", textAlign: 'right', mt: 0.5 }}>
                                        {client.category}
                                    </Typography>
                                </Box>

                                {/* Quote */}
                                <Typography variant="body2" sx={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.7, mb: 4, flexGrow: 1, fontStyle: 'italic' }}>
                                    "{client.quote}"
                                </Typography>

                                {/* Footer: Author & Highlight */}
                                {/* <Box sx={{ mt: 'auto' }}>
                                    <Typography variant="subtitle2" fontWeight={700} sx={{ color: '#0f172a', fontSize: '0.9rem' }}>
                                        {client.author}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mb: 2 }}>
                                        {client.role}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: COLORS.brandBlue, fontWeight: 700, fontSize: '0.7rem', fontFamily: "'Space Grotesk', monospace", letterSpacing: '0.05em' }}>
                                        {client.highlight}
                                    </Typography>
                                </Box> */}
                            </Card>
                        </Grid>
                    ))}
                    </Grid>

                    

                </Container>
            </Box>

            {/* CTA */}
            <Box sx={{
                bgcolor: COLORS.slateDark, color: "#fff", py: 8, position: 'relative', overflow: 'hidden',
                backgroundImage: 'linear-gradient(to right, rgba(56, 189, 248, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.07) 1px, transparent 1px)',
                backgroundSize: '52px 52px',
            }}>
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center", gap: 4 }}>
                    <Box sx={{ maxWidth: 576 }}>
                        <Typography variant="h4" fontWeight={800} sx={{ mb: 1, letterSpacing: '-0.025em', fontSize: { xs: '1.5rem', sm: '1.875rem' } }}>
                            Ready to architect zero downtime?
                        </Typography>
                        <Typography sx={{ color: "#94a3b8", fontSize: { xs: '0.875rem', sm: '1rem' }, lineHeight: 1.6 }}>
                            Connect with our enterprise advisory team to discuss your high-scale infrastructure requirements, compliance mandates, and resilience goals.
                        </Typography>
                    </Box>
                    <Box sx={{ flexShrink: 0 }}>
                        <Button 
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ 
                                bgcolor: "#fff", 
                                color: "#020617", 
                                px: 3, 
                                py: 1.5, 
                                borderRadius: 10, 
                                fontWeight: 700, 
                                textTransform: "uppercase", 
                                fontSize: '0.75rem', 
                                letterSpacing: '0.05em', 
                                "&:hover": { bgcolor: "#f1f5f9", boxShadow: '0 0 20px rgba(255,255,255,0.3)' }, 
                                transition: 'all 0.3s' 
                            }}
                            onClick={()=>{navigateTo("/career")}}
                        >
                            Contact Advisory
                        </Button>
                    </Box>
                </Container>
            </Box>

        </Box>
    );
}