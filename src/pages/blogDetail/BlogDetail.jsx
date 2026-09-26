import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


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

  if (item.type === "image") {
    return (
      <Box className="article-image">
        <img
          src={item.src}
          alt={item.alt || ""}
          style={item.style}
        />
      </Box>
    );
  }

  return null;
}

export default function BlogDetailPage() {
    const [rating, setRating] = useState(50);
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = articles.find(
    (item) => item.slug === slug
  );

  // Counts this page load as a view for this specific blog post (by slug),
  // and gives back the running total for that post. Called before any
  // early return so hook order stays consistent, per React's rules of hooks.
  const { views } = useViewCounter(article?.slug, true);

  if (!article) {
    return (
      <Container>
        <Typography>
          Blog not found
        </Typography>
      </Container>
    );
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
      <Container  maxWidth={false}
  sx={{
    maxWidth: "1250px",
    margin: "0 auto",
    px: { xs: 2, md: 3 },
  }}>

        {/* Back */}
        <button
          className="article-back"
          onClick={() => navigate("/blog")}
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
        <Box className="article-author">
          <Box className="article-author-divider" />

          <Typography className="article-author-name">
            {article.authorName || article.author}
          </Typography>

          <Typography className="article-author-role">
            {article.authorRole || "AEM Developer"}
          </Typography>
          <Box className="article-feedback">
  <span className="feedback-emoji" style={{fontSize: "25px"}}>
    {rating < 35 ? "😞" : rating < 65 ? "😐" : "😊"}
  </span>

  <Slider
    value={rating}
    onChange={(_, value) => setRating(value)}
    min={0}
    max={100}
    size="small"
     className={`feedback-slider ${
    rating < 35 ? "rating-sad" : rating < 65 ? "rating-neutral" : "rating-happy"
  }`}
  aria-label="Article rating"
  />
</Box>
        </Box>

      </Container>
      </Box>


    
  );
}