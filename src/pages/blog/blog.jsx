import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


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
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BoltIcon from "@mui/icons-material/Bolt";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useTheme } from "@mui/material/styles";

import "../blog/blog.css";

const categories = [
  "All Articles",
  "AEM EDS",
  "AEM Sites",
  "AEM Forms",
  "Dispatcher & Cloud",
  "AEM SPA",
];

const articles = [
  {
    slug: "dispatcher",
    title: "Working with Dispatcher",
    category: "Dispatcher",
    date: "2023-04-25",
    author: "Shruti Meshram",
    description:
      "Understand how AEM Dispatcher improves performance, caching, and security for AEM websites.",
    content: [],
  },
  {
    slug: "aemcaas-dispatcher",
    title: "Migrating the Dispatcher Configuration from AMS to AEM as a Cloud Service",
    category: "Dispatcher",
    date: "2024-08-31",
    author: "Yash Sakharkar",
    description:
      "Learn how to adapt and migrate Dispatcher configurations from AMS to AEM as a Cloud Service.",
    content: [],
  },
  {
    slug: "spa-component-mapping",
    title: "Mapping AEM Component to SPA Component",
    category: "AEM SPA",
    date: "2023-04-11",
    author: "Yash Sakharkar",
    description:
      "Discover how AEM components are mapped to frontend components in an AEM SPA implementation.",
    content: [],
  },
  {
    slug: "spa-getting-started",
    title: "Getting started with AEM SPA",
    category: "AEM SPA",
    date: "2023-03-29",
    author: "Suchita Mishra",
    description:
      "Explore the fundamentals of AEM SPA Editor and how to build single-page applications with AEM.",
    content: [],
  },
  {
    slug: "sidekick-customization",
    title: "Sidekick Customization in Edge Delivery Services",
    category: "AEM EDS",
    date: "2025-01-05",
    author: "Owais Pathan",
    description:
      "Learn how to customize the EDS Sidekick to support authoring workflows and project requirements.",
    content: [],
  },
  {
    slug: "sidekick-library",
    title: "Sidekick Library in Edge Delivery Services",
    category: "AEM EDS",
    date: "2025-01-10",
    author: "Owais Pathan",
    description:
      "Explore the Sidekick Library and how it helps manage and extend Edge Delivery Services functionality.",
    content: [],
  },
  {
    slug: "dispatcher-vs-edge-delivery",
    title: "AEM Dispatcher vs Edge Delivery Services CDN",
    category: "AEM EDS",
    date: "2026-09-09",
    author: "Shruti Meshram",
    description:
      "Learn how to customize the EDS Sidekick to support authoring workflows and project requirements.",
    content: [],
  },
  {
    slug: "create-a-block-in-aem-eds-with-universal-editor-authoring",
    title: "Create a Block in AEM EDS using Universal Editor Authoring",
    category: "AEM EDS",
    date: "2026-09-10",
    author: "Harshal Farkade",
    description:
      "Learn how to create a block in AEM EDS using Universal Editor.",
    content: [],
  },
  {
    slug: "authoring-in-the-universal-editor",
    title: "Authoring in the Universal editor",
    category: "AEM EDS",
    date: "2026-09-10",
    author: "Ayush Khandekar",
    description:
      "Learn Authoring in the universal editor: Content Tree, Components, Actions in detail",
    content: [],
  },
  {
    slug: "eds-and-the-universal-editor-overview",
    title: "EDS and the Universal Editor Overview",
    category: "AEM EDS",
    date: "2026-09-10",
    author: "Ayush Khandekar",
    description:
      "Learn Authoring in the universal editor: Content Tree, Components, Actions in detail",
    content: [],
  },
  {
    slug: "indexing-eds",
    title: "Indexing in Edge Delivery Services",
    category: "AEM EDS",
    readTime: "8 min read",
    author: "Infodales",
    description:
      "Understand how indexing works in Edge Delivery Services to make website content discoverable.",
    content: [],
  },
  {
    slug: "form-rule-editor",
    title: "How to Add Custom Functions in Rule Editor",
    category: "AEM Forms",
    date: "2023-03-15",
    author: "Ankit Pardhi",
    description:
      "Learn how to create and integrate custom JavaScript functions into the AEM Forms Rule Editor.",
    content: [],
  },
  {
    slug: "submitting-adaptive-form",
    title: "Submitting Adaptive Form using Form Data Model",
    category: "AEM Forms",
    date: "2023-02-28",
    author: "Owais Pathan",
    description:
      "Discover how to submit Adaptive Forms using a Form Data Model to integrate with backend services.",
    content: [],
  },
  {
    slug: "ocr-data-aem-forms",
    title: "OCR Data Extraction in AEM Forms",
    category: "AEM Forms",
    date: "2023-06-09",
    author: "Nitish Bisen",
    description:
      "Explore how OCR technology extracts text and structured information from documents in AEM Forms.",
    content: [],
  },
  {
    slug: "sms-twoway-aem-forms",
    title: "Enhancing Security with SMS Two Factor Authentication in AEM Forms",
    category: "AEM Forms",
    date: "2023-06-24",
    author: "Nitish Bisen",
    description:
      "Learn how to strengthen AEM Forms security using SMS-based two-factor authentication.",
    content: [],
  },
  {
    slug: "aem-graphql",
    title: "AEM GraphQL",
    category: "AEM Sites",
    date: "2024-10-10",
    author: "Shruti Meshram",
    description:
      "Discover how AEM GraphQL delivers structured Content Fragment data to headless applications.",
    content: [],
  },
  {
    slug: "slightly-in-aem",
    title: "Slightly in AEM",
    category: "AEM Sites",
    date: "2023-01-07",
    author: "Shruti Meshram",
    description:
      "Discover how HTL (Sightly) separates presentation logic from business logic in AEM.",
    content: [],
  },
  {
    slug: "templates",
    title: "Editable Templates in AEM",
    category: "AEM Sites",
    date: "2023-03-25",
    author: "Shruti Meshram",
    description:
      "Learn how to create editable templates, configure policies, and enable flexible page authoring in AEM.",
    content: [],
  },
  {
    slug: "system-user",
    title: "System User in AEM",
    category: "AEM Sites",
    date: "2023-04-02",
    author: "Shruti Meshram",
    description:
      "Understand how to create service users and configure secure repository access for AEM operations.",
    content: [],
  },
  {
    slug: "repoinit",
    title: "Repoinit in AEM",
    category: "AEM Sites",
    date: "2023-04-27",
    author: "Shruti Meshram",
    description:
      "Discover how RepoInit automates repository setup, service users, and access control configurations in AEM.",
    content: [],
  },
  {
    slug: "contentasaservice",
    title: "Content as a Service in AEM",
    category: "AEM Sites",
    date: "2024-11-12",
    author: "Shruti Meshram",
    description:
      "Explore how AEM delivers reusable content through APIs to websites, apps, and headless channels.",
    content: [],
  },
  {
    slug: "junits",
    title: "Unit Testing in AEM",
    category: "AEM Sites",
    date: "2023-02-10",
    author: "Owais Pathan",
    description:
      "Learn how to write unit tests for AEM components, services, and models to improve code reliability.",
    content: [],
  },
  {
    slug: "event-handler-and-listener",
    title: "Event Handler and Event Listener in AEM",
    category: "AEM Sites",
    date: "2024-11-28",
    author: "Yash Sakharkar",
    description:
      "Understand how AEM event handlers and listeners respond to repository changes and application events.",
    content: [],
  },
  {
    slug: "sitemap",
    title: "SiteMap Implementation in AEM",
    category: "AEM Sites",
    date: "2024-12-12",
    author: "Yash Sakharkar",
    description:
      "Learn how to generate XML sitemaps in AEM to help search engines discover and index website pages.",
    content: [],
  },
  {
    slug: "slingjobs",
    title: "Schedule Sling Jobs In AEM",
    category: "AEM Sites",
    date: "2024-12-27",
    author: "Yash Sakharkar",
    description:
      "Discover how to schedule and execute background jobs in AEM using Sling Jobs and schedulers.",
    content: [],
  },
  {
    slug: "content-fragments",
    title: "Content Fragments in AEM",
    category: "AEM Sites",
    date: "2024-10-10",
    author: "Shruti Meshram",
    description:
      "Explore how AEM Content Fragments enable structured, reusable content for headless and omnichannel experiences.",
    content: [],
  },
  {
    slug: "etc-mapping",
    title: "ETC Mapping in AEM",
    category: "AEM Sites",
    date: "2024-10-25",
    author: "Yash Sakharkar",
    description:
      "Understand how AEM resource mappings help manage URL resolution and resource access.",
    content: [],
  },
  {
    slug: "clientlibs",
    title: "Clientlibs in AEM",
    category: "AEM Sites",
    date: "2023-03-01",
    author: "Shruti Meshram",
    description:
      "Learn how AEM Client Libraries organize, manage, and deliver CSS and JavaScript assets.",
    content: [],
  },
  {
    slug: "content-transfer-tool",
    title: "Content Transfer Tool (CTT) Overview: Migrating Content to AEM as a Cloud Service",
    category: "AEM Sites",
    date: "2024-09-14",
    author: "Ankit Pardhi",
    description:
      "Discover how the Content Transfer Tool migrates AEM content from on-premise or AMS to AEM Cloud.",
    content: [],
  },
  {
    slug: "query-builder",
    title: "Query Builder in AEM",
    category: "AEM Sites",
    date: "2023-05-23",
    author: "Suchita Mishra",
    description:
      "Explore how AEM Query Builder retrieves repository content using flexible search predicates.",
    content: [],
  },
  {
    slug: "experience-fragment",
    title: "Experience Fragments in AEM",
    category: "AEM Sites",
    date: "2024-09-30",
    author: "Shruti Meshram",
    description:
      "Learn how Experience Fragments enable reusable, consistent experiences across pages and channels.",
    content: [],
  },
  {
    slug: "osgi-factory-cardinality-and-limit",
    title: "OSGi Factory Configuration cardinality and limit",
    category: "AEM Sites",
    date: "2024-08-17",
    author: "Shruti Meshram",
    description:
      "Understand OSGi factory configuration cardinality and limits when managing multiple configuration instances in AEM.",
    content: [],
  },
  {
    slug: "cloud-services",
    title: "AEM as a Cloud Service: Powering Next-Generation Digital Experiences",
    category: "AEM Sites",
    date: "2023-05-24",
    author: "Nitish Bisen",
    description:
      "Explore the cloud-native capabilities of AEM as a Cloud Service for scalable digital experiences.",
    content: [],
  },
  {
    slug: "context-aware-configuration",
    title: "Context Aware Configuration",
    category: "AEM Sites",
    date: "2023-11-09",
    author: "Ankit Pardhi",
    description:
      "Learn how Context-Aware Configuration provides site-specific settings to AEM components and services.",
    content: [],
  },
  {
    slug: "targeting-in-aem",
    title: "Targeting in AEM - Part 1",
    category: "AEM Sites",
    date:"2024-08-01",
    author: "Suchita Mishra",
    description:
      "Discover how AEM targeting uses audiences and contextual data to deliver personalized experiences.",
    content: [],
  },
  {
    slug: "indexing",
    title: "Indexing in AEM",
    category: "AEM Sites",
    date:"2023-11-24",
    author: "Shruti Meshram",
    description:
      "Understand how Oak indexes improve AEM repository query performance and content retrieval.",
    content: [],
  },
  {
    slug: "form-submission",
    title: "Sending Email on Submission of Adaptive Form",
    category: "AEM Forms",
    date: "2023-01-31",
    author: "Nitish Bisen",
    description:
      "Learn how to configure email notifications that send submitted Adaptive Form data to designated recipients.",
    content: [],
  },
  {
    slug: "rule-editor-show-hide",
    title: "Show Hide in Rule Editor",
    category: "AEM Forms",
    date: "2024-07-04",
    author: "Shruti Meshram",
    description:
      "Discover how to use Rule Editor conditions to dynamically show or hide fields in Adaptive Forms.",
    content: [],
  },
  {
    slug: "custom-prefill-services",
    title: "Custom Prefill Services In AEM Forms",
    category: "AEM Forms",
    date: "2024-06-20",
    author: "Yash Sakharkar",
    description:
      "Learn how custom prefill services populate Adaptive Forms with data from external systems.",
    content: [],
  },
  {
    slug: "geolocation-forms",
    title: "Geolocation : AEM Forms with Dynamic Location",
    category: "AEM Forms",
    date: "2024-07-19",
    author: "Nitish Bisen",
    description:
      "Explore how to integrate geolocation into AEM Forms to capture and use dynamic location information.",
    content: [],
  },
  {
    slug: "google-api-form",
    title: "AEM Forms with Google Maps API's",
    category: "AEM Forms",
    date: "2024-08-03",
    author: "Nitish Bisen",
    description:
      "Discover how to integrate Google Maps APIs with AEM Forms for location-based form experiences.",
    content: [],
  },
  {
    slug: "forms-introduction",
    title: "Introduction to AEM Forms",
    category: "AEM Forms",
    date: "2023-01-17",
    author: "Gaffur Shaik",
    description:
      "Get started with AEM Forms and explore its capabilities for creating responsive digital forms.",
    content: [],
  },
  {
    slug: "aem-introduction",
    title: "Introduction to AEM Sites",
    category: "AEM Sites",
    date: "2023-01-03",
    author: "Gaffur Shaik",
    description:
      "Explore AEM Sites fundamentals, core features, and its role in managing digital experiences.",
    content: [],
  },
  {
    slug: "vanity-urls",
    title: "Handelling Vanity URLs in AEM",
    category: "AEM Sites",
    date: "2023-06-09",
    author: "Shruti Meshram",
    description:
      "Learn how to configure and manage vanity URLs in AEM for user-friendly website addresses.",
    content: [],
  },
  {
    slug: "osgi-configuration-factory",
    title: "OSGI Configuration Factory",
    category: "AEM Sites",
    date: "2023-06-24",
    author: "Yash Sakharkar",
    description:
      "Understand how OSGi factory configurations manage multiple configurable service instances in AEM.",
    content: [],
  },
  {
    slug: "aem-msm",
    title: "MSM (Multi Site Manager)",
    category: "AEM Sites",
    date: "2023-05-09",
    author: "Yash Sakharkar",
    description:
      "Discover how AEM Multi Site Manager simplifies multi-site content management using blueprints and live copies.",
    content: [],
  },
  {
    slug: "introduction-to-eds",
    title: "Introduction to Edge Delivery Services",
    category: "AEM EDS",
    date: "2024-12-01",
    author: "Owais Pathan",
    description:
      "Explore Edge Delivery Services architecture, authoring approaches, and high-performance content delivery.",
    content: [],
  },

  {
    slug: "introduction-to-document-based-authoring",
    title: "Introduction to Document Based Authoring",
    category: "AEM EDS",
    date: "2024-12-10",
    author: "Owais Pathan",
    description:
      "Understand how document-based authoring enables content creation and publishing through familiar documents.",
    content: [],
  },
  {
    slug: "adding-metadata-in-edge-delivery-services",
    title: "Adding Metadata in Edge Delivery Services",
    category: "AEM EDS",
    date: "2024-12-20",
    author: "Owais Pathan",
    description:
      "Learn how to add and manage page metadata in EDS to improve SEO and content discovery.",
    content: [],
  },
  {
    slug: "placeholders-in-edge-delivery-services",
    title: "Placeholders in Edge Delivery Services",
    category: "AEM EDS",
    date: "2024-12-30",
    author: "Owais Pathan",
    description:
      "Discover how placeholders support reusable content and dynamic authoring experiences in EDS.",
    content: [],
  },
  {
    slug: "implementing-redirects-and-response-headers-in-edge-delivery-services",
    title: "Implementing redirects and response header in Edge Delivery Services",
    category: "AEM EDS",
    date: "2024-12-25",
    author: "Owais Pathan",
    description:
      "Learn how to configure URL redirects and HTTP response headers in Edge Delivery Services.",
    content: [],
  },
  {
    slug: "servlets",
    title: "Servlets in AEM",
    category: "AEM Sites",
    date: "2023-02-01",
    author: "Shruti Meshram",
    description:
      "Explore how Sling Servlets handle HTTP requests and implement custom backend functionality in AEM.",
    content: [],
  },
  {
    slug: "custom-button-and-console",
    title: "Creating custom button & console in AEM",
    category: "AEM Sites",
    date: "2023-08-09",
    author: "Suchita Mishra",
    description:
      "Learn how to extend the AEM authoring interface with custom console actions and buttons.",
    content: [],
  },
  {
    slug: "introduction-to-components-and-sling-model",
    title: "Introduction to Components and Sling Model",
    category: "AEM Sites",
    date: "2023-01-18",
    author: "Shruti Meshram",
    description:
      "Learn how to build reusable AEM components and use Sling Models to efficiently access and manage content in the JCR.",
    content: [],
  },
  {
    slug: "tabs-and-multifields",
    title: "Tabs and Multifield in AEM",
    category: "AEM Sites",
    date: "2023-01-18",
    author: "Shruti Meshram",
    description:
      "Discover how to use tabs and multifields in AEM dialogs to create organized and flexible authoring experiences.",
    content: [],
  },
  {
    slug: "adaptive-form-fragments",
    title: "AEM Forms : Adaptive Form Fragments",
    category: "AEM Forms",
    date: "2023-08-24",
    author: "Nitish Bisen",
    description:
      "Learn how Adaptive Form Fragments enable reusable form sections and simplify form maintenance.",
    content: [],
  },
  {
    slug: "project-structure-eds",
    title: "Project Structure in Edge Delivery Services",
    category: "AEM EDS",
    date: "2026-09-10",
    author: "Shruti Kawadkar",
    description:
      "Explore the EDS project structure and understand how blocks, scripts, styles, and configuration work together.",
    content: [],
  },
  {
    slug: "block-options-eds",
    title: "Block Option in Edge Delivery Service",
    category: "AEM EDS",
    date: "",
    author: "Shruti Kawadkar",
    description:
      "Explore block options in EDS to customize block behavior, variations, and content presentation.",
    content: [],
  },
   {
    slug: "block-creation-eds",
    title: "Block Creation in Edge Delivery Service",
    category: "AEM EDS",
    date: "2024-12-15",
    author: "Owais Pathan",
    description:
      "Learn to create custom, reusable blocks in EDS using JavaScript, CSS, and structured content.",
    content: [],
  },
  
  
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

function FeatureCards({ onExplore }) {
  return (
    <Container maxWidth="xl" className="feature-container">
      <Grid container spacing={3} alignItems="stretch">
        {tracks.map((track) => {
          const Icon = track.Icon;

          return (
            <Grid item xs={12} md={4} key={track.title}>
              <Card className="track-card">
                <CardContent className="track-content">
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={1}
                  >
                    <Box
                      className="track-icon"
                      sx={{ color: track.color }}
                    >
                      <Icon />
                    </Box>

                    <Chip label={track.tag} className="track-tag" />
                  </Stack>

                  <Typography variant="h6" className="track-title">
                    {track.title}
                  </Typography>

                  <Typography className="track-description">
                    {track.description}
                  </Typography>

                  <Box className="track-bottom">
                    <Button
                      fullWidth
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => onExplore(track.category)}
                    >
                      {track.action}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
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
          justifyContent="space-between"
          alignItems="center"
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
        alignItems="center"
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
      (category === "Dispatcher & Cloud"
        ? ["Dispatcher", "Dispatcher & Cloud"].includes(
            article.category
          )
        : article.category === category);

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
        !term || article.title.toLowerCase().includes(term) ||
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

  const sortedArticles = useMemo(() => {
  return [...filteredArticles].sort((a, b) => {
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
}, [filteredArticles, sortOrder]);

  const pageCount = Math.max(
    1,
    // Math.ceil(filteredArticles.length / pageSize)
    Math.ceil(sortedArticles.length / pageSize),
  );

  const visibleArticles = sortedArticles.slice(
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
      <FeatureCards onExplore={selectCategory} />

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
          {categories.map((item) => (
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
          ))}
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
          <Grid container spacing={3} alignItems="stretch">
            {visibleArticles.map((article) => (
              <Grid
                item
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

        {filteredArticles.length > pageSize && (
          <Stack
            alignItems="center"
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
          <Grid container spacing={4} alignItems="stretch">
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
              <Grid item xs={12} md={4} key={item.title}>
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