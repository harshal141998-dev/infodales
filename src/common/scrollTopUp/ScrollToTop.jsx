import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollTopUp() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Automatically scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  // Track scroll position and calculate scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Show button after scrolling down 300px
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate progress percentage (0 - 100)
      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circumference of r=13 is 2 * π * 13 ≈ 81.68
  const radius = 13;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * scrollProgress) / 100;

  return (
    <Zoom in={isVisible}>
      <Box
        component="button"
        onClick={handleScrollToTop}
        aria-label="Go back to top"
        title="Go back to top"
        className="go-to-top-btn"
        sx={{
          position: "fixed",
          bottom: { xs: 20, sm: 30 },
          right: { xs: 16, sm: 30 },
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: { xs: 1, sm: 1.25 },
          padding: { xs: "8px 14px", sm: "9px 18px" },
          borderRadius: "50px",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          background: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
          color: "#ffffff",
          cursor: "pointer",
          outline: "none",
          boxShadow: "0 10px 25px -4px rgba(14, 165, 233, 0.5), 0 4px 12px rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(8px)",
          transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
          fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif",
          "&:hover": {
            transform: "translateY(-3px) scale(1.02)",
            background: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)",
            boxShadow: "0 14px 30px -4px rgba(14, 165, 233, 0.7), 0 6px 16px rgba(0, 0, 0, 0.35)",
            "& .arrow-icon": {
              transform: "translateY(-2px)",
            },
          },
          "&:active": {
            transform: "translateY(-1px) scale(0.98)",
          },
        }}
      >
        {/* SVG Circular Progress Ring with Up Arrow */}
        <Box
          sx={{
            position: "relative",
            width: 30,
            height: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 32 32"
            style={{
              position: "absolute",
              transform: "rotate(-90deg)",
              pointerEvents: "none",
            }}
          >
            {/* Background ring */}
            <circle
              cx="16"
              cy="16"
              r={radius}
              fill="none"
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth="2.5"
            />
            {/* Animated progress ring */}
            <circle
              cx="16"
              cy="16"
              r={radius}
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                transition: "stroke-dashoffset 0.15s ease-out",
              }}
            />
          </svg>
          <KeyboardArrowUpIcon
            className="arrow-icon"
            sx={{
              fontSize: 20,
              color: "#ffffff",
              transition: "transform 0.2s ease",
              position: "relative",
              zIndex: 1,
            }}
          />
        </Box>

        {/* Text Label */}
        <Typography
          component="span"
          sx={{
            fontSize: { xs: "0.8rem", sm: "0.875rem" },
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "0.01em",
            whiteSpace: "nowrap",
            userSelect: "none",
            display: "inline-block",
          }}
        >
          Go Back to Top
        </Typography>
      </Box>
    </Zoom>
  );
}