import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  Chip,
  Stack,
  Grid,
  Pagination,
  Divider,
  FormControl,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BoltIcon from "@mui/icons-material/Bolt";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useTheme } from "@mui/material/styles";
import {articles} from "../../data/blog.js";

import "../blog/blog.css";

const categories = [
  "All Articles",
  "AEM EDS",
  "AEM Sites",
  "AEM Forms",
  "Dispatcher & Cloud",
  "AEM SPA",
];



const tracks = [
  {
    title: "Edge Delivery Services (EDS)",
    tag: "HIGH PERFORMANCE",
    description:
      "Edge Delivery architecture, Universal Editor, Sidekick, and document-based authoring.",
    Icon: BoltIcon,
    color: "#0284c7",
    action: "Explore EDS Track",
    category: "AEM EDS",
  },
  {
    title: "AEM Sites",
    tag: "AEM Sites",
    description:
      "Components, Sling Model, HTL, Sling Job, Workflows and all",
    Icon: CloudOutlinedIcon,
    color: "#059669",
    action: "Explore sites Track",
    category: "AEM Sites",
  },
  {
    title: "AEM Forms",
    tag: "Adaptive Forms",
    description:
      "Adaptive Forms, FDM, Rule Editor, GraphQL, and React / Angular integration.",
    Icon: DescriptionOutlinedIcon,
    color: "#d97706",
    action: "Explore Forms",
    category: "AEM Forms",
  },
];

const categoryCards = [
  {
    title: "AEM EDS",
    description: "Explore Edge Delivery Services articles",
    icon: "⚡",
  },
  {
    title: "AEM Sites",
    description: "Explore AEM Sites articles",
    icon: "🌐",
  },
  {
    title: "AEM Forms",
    description: "Explore AEM Forms articles",
    icon: "📄",
  },
  {
    title: "All Articles",
    description: "Browse all blog articles",
    icon: "📚",
  },
  {
    title: "Dispatcher & Cloud",
    description: "Explore Dispatcher and Cloud topics",
    icon: "☁️",
  },
  {
    title: "AEM SPA",
    description: "Explore AEM SPA articles",
    icon: "📱",
  },
];

function FeatureCards({ category, onExplore }) {
  const cardCount = categoryCards.length;
  const [currentIndex, setCurrentIndex] = useState(cardCount / 2);
  const [animate, setAnimate] = useState(true);
  const carouselWindowRef = useRef(null);
  const getSlideWidth = () => {
  const carouselWidth = carouselWindowRef.current?.clientWidth || 0;

  if (window.innerWidth <= 600) {
    return carouselWidth; // 1 card on mobile
  }

  if (window.innerWidth <= 900) {
    return carouselWidth / 2; // 2 cards on tablet
  }

  return carouselWidth / 3; // 3 cards on desktop
};

  const touchStartX = useRef(null);

  const extendedCards = [
    ...categoryCards.slice(-3),
    ...categoryCards,
    ...categoryCards.slice(0, 3),
  ];

  const moveCarousel = (direction) => {
    setAnimate(true);
    setCurrentIndex((prev) => prev + direction);
  };

  const handleTransitionEnd = () => {
  if (currentIndex >= cardCount + 3) {
    setAnimate(false);
    setCurrentIndex(3);

    setTimeout(() => setAnimate(true), 50);
  } else if (currentIndex <= 2) {
    setAnimate(false);
    setCurrentIndex(cardCount + 2);

    setTimeout(() => setAnimate(true), 50);
  }
};

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const difference =
      touchStartX.current - event.changedTouches[0].clientX;

    if (Math.abs(difference) > 50) {
      moveCarousel(difference > 0 ? 1 : -1);
    }

    touchStartX.current = null;
  };

  return (
    <Box className="category-carousel-section">
      <Box className="category-carousel-header">
        <Box>
          <Typography variant="h4" fontWeight={700}>
            Explore Categories
          </Typography>

          <Typography color="text.secondary">
            Discover articles by topic
          </Typography>
        </Box>
      </Box>

      <Box className="category-carousel">
        <IconButton
          className="category-carousel-arrow category-carousel-prev"
          onClick={() => moveCarousel(-1)}
          aria-label="Previous categories"
        >
          <ChevronLeftIcon />
        </IconButton>

        <Box
          className="category-carousel-window"
          ref={carouselWindowRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Box
            className={`category-carousel-track ${
              animate ? "carousel-animated" : "carousel-no-transition"
            }`}
            style={{
              transform: `translateX(-${currentIndex * getSlideWidth()}px)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedCards.map((item, index) => (
              <Box className="category-carousel-slide" key={`${item.title}-${index}`}>
                <Card
                  className={`category-carousel-card ${
                    category === item.title ? "active" : ""
                  }`}
                  onClick={() => onExplore(item.title)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onExplore(item.title);
                    }
                  }}
                >
                  <CardContent className="category-carousel-card-content">
                    <Typography className="category-carousel-icon">
                      {item.icon}
                    </Typography>

                    <Typography
                      variant="h5"
                      className="category-carousel-title"
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      className="category-carousel-description"
                    >
                      {item.description}
                    </Typography>

                    <Typography className="category-carousel-link">
                      Explore articles →
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        <IconButton
          className="category-carousel-arrow category-carousel-next"
          onClick={() => moveCarousel(1)}
          aria-label="Next categories"
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

// function ArticleCard({ article, onOpen }) {
//   return (
//     <Card className="article-card">
//       <CardContent className="article-content">
//         <Stack
//           direction="row"
//           justifyContent="space-between"
//           alignItems="center"
//           spacing={1}
//         >
//           <Chip
//             label={article.category}
//             className="article-category"
//           />

//           <Typography className="read-time">
//             <AccessTimeIcon />
//             {article.readTime}
//           </Typography>
//         </Stack>

//         <Typography variant="h6" className="article-title">
//           {article.title}
//         </Typography>

//         <Typography className="article-description">
//           {article.description}
//         </Typography>

//         <Box className="article-bottom">
//           <Typography className="article-author">
//             By {article.author}
//           </Typography>

//           <Button
//             endIcon={<ArrowForwardIcon />}
//             className="read-button"
//             onClick={() => onOpen(article.slug)}
//           >
//             Read
//           </Button>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// }

function formatArticleDate(date) {
  if (!date) return "Date unavailable";

  const parsedDate = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Date unavailable";
  }

  return parsedDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function ArticleCard({ article, onOpen }) {
  return (
    <Card className="article-card">
      <CardContent className="article-content">
        <Stack
          direction="row"
          justifycontent="space-between"
          alignitems="center"
          spacing={1}
          className="article-meta-top"
        >
          <Chip
            label={article.category}
            className="article-category"
          />

          <Typography className="article-date">
            <CalendarTodayIcon />
            {formatArticleDate(article.date)}
          </Typography>
        </Stack>

        <Typography variant="h6" className="article-title">
          {article.title}
        </Typography>

        <Typography className="article-description">
          {article.description}
        </Typography>

        <Box className="article-bottom">
          <Typography className="article-author">
            By {article.author}
          </Typography>

          <Button
            endIcon={<ArrowForwardIcon />}
            className="read-button"
            onClick={() => onOpen(article.slug)}
          >
            Read
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

function ArticleDetail({ article, onBack }) {
  return (
    <Container maxWidth="md" className="article-detail">
      <Button onClick={onBack} className="back-to-blogs">
        ← Back to Blogs
      </Button>

      <Chip
        label={article.category}
        className="article-category"
      />

      <Typography component="h1" className="detail-title">
        {article.title}
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        alignitems="center"
        className="detail-meta"
      >
        <Typography>By {article.author}</Typography>
        <span>·</span>
       <Typography>{formatArticleDate(article.date)}</Typography>
      </Stack>

      <Divider sx={{ my: 3 }} />

      <Typography className="detail-intro">
        {article.description}
      </Typography>

      {article.content?.map((section) => (
        <Box key={section.heading} className="detail-section">
          <Typography component="h2">
            {section.heading}
          </Typography>

          <Typography>{section.text}</Typography>
        </Box>
      ))}

      <Button onClick={onBack} className="back-to-blogs">
        ← Back to all articles
      </Button>
    </Container>
  );
}

export default function BlogsPage() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Articles");
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("latest");

  const pageSize = 9;

  const selectedArticle = articles.find(
    (article) => article.slug === slug
  );

  const filteredArticles = useMemo(() => {
    const term = search.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory =
      category === "All Articles" ||
      article.category === category;
      // (category === "Dispatcher & Cloud"
      //   ? ["Dispatcher", "Dispatcher & Cloud"].includes(
      //       article.category
      //     )
      //   : article.category === category);

      const matchesSearch =
        !term || article.title.toLowerCase().includes(term)||
        article.description.toLowerCase().includes(term) ||
      article.category.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

 const filteredAndSortedArticles = useMemo(() => {
  const term = search.trim().toLowerCase();

  return articles
    .filter((article) => {
      const matchesCategory =
        category === "All Articles" ||
        (category === "Dispatcher & Cloud"
          ? ["Dispatcher", "Dispatcher & Cloud"].includes(
              article.category
            )
          : article.category === category);

      const matchesSearch =
        !term ||
        article.title.toLowerCase().includes(term) ||
        article.description.toLowerCase().includes(term) ||
        article.category.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      const dateA = a.date
        ? new Date(`${a.date}T00:00:00`).getTime()
        : 0;

      const dateB = b.date
        ? new Date(`${b.date}T00:00:00`).getTime()
        : 0;

      return sortOrder === "latest"
        ? dateB - dateA
        : dateA - dateB;
    });
}, [search, category, sortOrder]);

const pageCount = Math.max(
  1,
  Math.ceil(filteredAndSortedArticles.length / pageSize)
);

const visibleArticles = filteredAndSortedArticles.slice(
  (page - 1) * pageSize,
  page * pageSize
);

  const selectCategory = (value) => {
    setCategory(value);
    setPage(1);
  };

  const handleSearch = () => {
    setPage(1);

    document
      .getElementById("articles")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const openArticle = (articleSlug) => {
    navigate(`/blogs/${articleSlug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToBlogs = () => {
    navigate("/blogs");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (slug) {
    if (!selectedArticle) {
      return (
        <Container maxWidth="md" className="article-detail">
          <Typography component="h1" className="detail-title">
            Blog not found
          </Typography>

          <Button onClick={backToBlogs}>
            Back to Blogs
          </Button>
        </Container>
      );
    }

    return (
      <Box className="blogs-page">
        <ArticleDetail
          article={selectedArticle}
          onBack={backToBlogs}
        />
      </Box>
    );
  }

  return (
    <Box className="blogs-page">
      {/* HERO */}
      <Box className="blog-hero">
        <Container maxWidth="xl" className="hero-inner">
          {/* <Box className="hero-status">
            <span className="status-dot" />
            Infodales Knowledge Base · AEM Engineering Insights
          </Box> */}

          <Box className="hero-center">
            <Chip
              // label="ADOBE EXPERIENCE MANAGER ENGINEERING HUB"
              // className="hero-label"
            />

            <Typography component="h1" className="hero-title">
              Exploring AEM through Blogs
            </Typography>

            <Typography className="hero-description">
              In-depth engineering guides, architecture blueprints,
              and implementation best practices across Adobe
              Experience Manager Sites, Edge Delivery Services,
              Forms, and Cloud Dispatcher.
            </Typography>

            <TextField
              fullWidth
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
              placeholder="Search blogs by heading..."
              className="hero-search"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        onClick={handleSearch}
                      >
                        Search
                      </Button>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* FEATURE TRACKS */}
      <FeatureCards
        category={category}
        onExplore={selectCategory}
      />

      {/* ARTICLES */}
      <Container
        maxWidth="xl"
        id="articles"
        className="articles-section"
      >
        <Box className="section-heading">
          <Typography component="h2">
            Filter & Explore AEM Articles
          </Typography>

          <Typography>
            Select a technical track or search through our AEM
            engineering tutorials.
          </Typography>
        </Box>

        <Box
          sx={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center",
          }}
        >
          {/* {categories.map((item) => (
            <Button
              key={item}
              onClick={() => selectCategory(item)}
              className={
                category === item
                  ? "category-active"
                  : "category-button"
              }
            >
              {item}
              {item === "All Articles"
                ? ` (${articles.length})`
                : ""}
            </Button>
          ))} */}
        </Box>

        <Box className="article-sort">
  <Typography className="sort-label">
    Sort by
  </Typography>

  <FormControl size="small" className="sort-control">
    <Select
      value={sortOrder}
      onChange={(event) => {
        setSortOrder(event.target.value);
        setPage(1);
      }}
      inputProps={{
        "aria-label": "Sort articles by date",
      }}
    >
      <MenuItem value="latest">Latest</MenuItem>
      <MenuItem value="oldest">Oldest</MenuItem>
    </Select>
  </FormControl>
</Box>

        {visibleArticles.length > 0 ? (
          <Grid container spacing={3} alignitems="stretch">
            {visibleArticles.map((article) => (
              <Grid
                xs={12}
                sm={6}
                lg={4}
                key={article.slug}
              >
                <ArticleCard
                  article={article}
                  onOpen={openArticle}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box className="no-results">
            <Typography variant="h6">
              No articles found
            </Typography>

            <Typography>
              Try another search term or category.
            </Typography>

            <Button
              onClick={() => {
                setSearch("");
                selectCategory("All Articles");
              }}
            >
              Clear filters
            </Button>
          </Box>
        )}

        {filteredAndSortedArticles.length > pageSize && (
          <Stack
            alignitems="center"
            className="blog-pagination"
          >
            <Pagination
              count={pageCount}
              page={page}
              onChange={(_, value) => setPage(value)}
              shape="rounded"
              color="primary"
            />
          </Stack>
        )}
      </Container>

      {/* ADVISORY SECTION */}
      <Container maxWidth="xl" className="advisory-container">
        <Box className="advisory-panel">
          <Grid container spacing={4} alignitems="stretch">
            {[
              {
                title: "AEM Advisory Office Hours",
                text: "Mon – Fri: 9:00 AM – 6:00 PM IST. Connect with our AEM team.",
              },
              {
                title: "Code Quality & Audit Check",
                text: "Explore code quality reviews and Cloud Manager audit practices.",
              },
              {
                title: "Open Source EDS Starter Kits",
                text: "Discover EDS starter kits, reusable blocks, and engineering resources.",
              },
            ].map((item) => (
              <Grid xs={12} md={4} key={item.title}>
                <Typography className="advisory-title">
                  {item.title}
                </Typography>

                <Typography className="advisory-text">
                  {item.text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}