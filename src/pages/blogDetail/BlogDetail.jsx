import {useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Slider,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import { articles } from "../../data/blog";
import { useViewCounter } from "../../hooks/useViewCounter";

import "../blogDetail/BlogDetail.css";
import NotFound from "../NotFound/NotFound";

function formatDate(date) {
  if (!date) return "";

  return new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function ContentItem({ item }) {
  if (item.type === "heading") {
    return (
      <Typography
        component={`h${item.level || 2}`}
        className={
          item.level === 3
            ? "article-heading article-heading-three"
            : "article-heading"
        }
      >
        {item.text}
      </Typography>
    );
  }

  if (item.type === "paragraph") {
    return (
      <Typography className="article-paragraph">
        {item.text}
      </Typography>
    );
  }

  if (
    item.type === "list" ||
    item.type === "numberedList"
  ) {
    return (
      <Box component="ol" className="article-list">
        {item.items?.map((listItem, index) => (
          <li key={index}>
            {typeof listItem === "string" ? (
              listItem
            ) : (
              <>
                <strong>{listItem.title}:</strong>{" "}
                {listItem.text}
              </>
            )}
          </li>
        ))}
      </Box>
    );
  }

  if (item.type === "bulletList") {
  return (
    <Box
      component="ul"
      className="article-list article-bullet-list"
    >
      {item.items?.map((listItem, index) => (
        <li key={index}>
          {typeof listItem === "string" ? (
            listItem
          ) : (
            <>
              <strong>{listItem.title}:</strong>{" "}
              {listItem.text}
            </>
          )}
        </li>
      ))}
    </Box>
  );
}

if (item.type === "code") {
  return (
    <Box className="article-code">
      <Box
        component="pre"
        className="article-code-block"
      >
        <code>{item.code}</code>
      </Box>
    </Box>
  );
}

  if (item.type === "image") {
    const resolvedSrc = `${import.meta.env.BASE_URL}${item.src.replace(/^\//, '')}`;

    return (
      <Box className="article-image">
        <img
          src={resolvedSrc}
          alt={item.alt || ""}
          style={item.style}
        />
      </Box>
    );
  }
  if (item.type === "video") {
    const resolvedSrc = `${import.meta.env.BASE_URL}${item.src.replace(/^\//, '')}`;

    return (
      <Box className="article-video">
        <video controls preload="metadata" width="100%">
          <source src={resolvedSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    );
  }

  return null;
}

export default function BlogDetailPage() {
  const [rating, setRating] = useState(50);
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackToBlogs = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/blog");
    }
  };

  const article = articles.find(
    (item) => item.slug === slug
  );

  // Counts this page load as a view for this specific blog post (by slug),
  // and gives back the running total for that post. Called before any
  // early return so hook order stays consistent, per React's rules of hooks.
  const { views } = useViewCounter(article?.slug, true);

  //SEO meta tags

    // ---------- SEO: inject meta tags into <head> ----------
  useEffect(() => {
    if (!article) return;

    const setMeta = (attr, key, content) => {
      if (content == null || content === "") return;
      let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const setLink = (rel, href) => {
      if (!href) return;
      let link = document.head.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    const pageUrl = window.location.href;
    const pageTitle = article.metaTitle || article.title;
    const pageDesc = article.metaDescription || article.description;

    // <title>
    document.title = pageTitle;

    // Standard meta
    setMeta("name", "description", pageDesc);
    setMeta("name", "keywords", article.keywords);
    setMeta("name", "author", article.authorName || article.author);
    setMeta("name", "robots", "index, follow");

    // Open Graph
    setMeta("property", "og:locale", "en_US");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", pageTitle);
    setMeta("property", "og:description", pageDesc);
    setMeta("property", "og:url", pageUrl);
    setMeta("property", "og:site_name", "Infodales");

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", pageTitle);
    setMeta("name", "twitter:description", pageDesc);

    // Canonical
    setLink("canonical", pageUrl);

    // Optional cleanup so meta tags don't leak between blog posts
    return () => {
      [
        'meta[name="description"]',
        'meta[name="keywords"]',
        'meta[name="author"]',
        'meta[name="robots"]',
        'meta[property^="og:"]',
        'meta[name^="twitter:"]',
        'link[rel="canonical"]',
      ].forEach((sel) =>
        document.head.querySelectorAll(sel).forEach((el) => el.remove())
      );
    };
  }, [article]);
  // ---------- end SEO ----------

  if (!article) {
    return <NotFound />;
  }


  const articleUrl = window.location.href;

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        articleUrl
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareEmail = () => {
    window.location.href =
      `mailto:?subject=${encodeURIComponent(
        article.title
      )}&body=${encodeURIComponent(articleUrl)}`;
  };

  return (
    <Box className="article-detail-page">
      <Container maxWidth={false}
        sx={{
          maxWidth: "1250px",
          margin: "0 auto",
          px: { xs: 2, md: 3 },
        }}>

        {/* Back */}
        <button
          className="article-back"
          onClick={handleBackToBlogs}
        >
          <ArrowBackIcon />
          Back to Blogs
        </button>

        {/* Category */}
        <Box className="article-category">
          {article.category}
        </Box>

        {/* Title */}
        <Typography className="article-title">
          {article.title}
        </Typography>

        {/* Meta */}
        <Stack
          direction="row"
          alignItems="center"
          className="article-meta"
        >
          <span>
            By {article.authorName || article.author}
          </span>

          <span>•</span>

          <span>
            {formatDate(article.date)}
          </span>

          <span>•</span>

          <span className="article-views">
            <VisibilityOutlinedIcon fontSize="small" />
            {views === null ? "…" : `${views.toLocaleString()} views`}
          </span>
        </Stack>

        {/* Share */}
        <Stack
          direction="row"
          spacing={1}
          className="article-share"
        >
          <IconButton
            onClick={shareLinkedIn}
            aria-label="Share on LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            onClick={shareEmail}
            aria-label="Share by email"
          >
            <EmailOutlinedIcon />
          </IconButton>
        </Stack>

        {/* Divider */}
        <Box className="article-divider" />

        {/* Description */}
        {article.description && (
          <Typography className="article-intro">
            {article.description}
          </Typography>
        )}

        {/* Content */}
        <Box className="article-content">
          {article.content?.map((item, index) => (
            <ContentItem
              key={index}
              item={item}
            />
          ))}
        </Box>

        {/* Author */}
        <Box className="detail-author">
          <Box className="article-author-divider" />

          <Typography className="article-author-name">
            {article.authorName || article.author}
          </Typography>

          <Typography className="article-author-role">
            {article.authorRole || "AEM Developer"}
          </Typography>
          <Box className="article-feedback">
            <span className="feedback-emoji" style={{ fontSize: "25px" }}>
              {rating < 35 ? "😞" : rating < 65 ? "😐" : "😊"}
            </span>

            <Slider
              value={rating}
              onChange={(_, value) => setRating(value)}
              min={0}
              max={100}
              size="small"
              className={`feedback-slider ${rating < 35 ? "rating-sad" : rating < 65 ? "rating-neutral" : "rating-happy"
                }`}
              aria-label="Article rating"
            />
          </Box>
        </Box>

      </Container>
    </Box>



  );
}