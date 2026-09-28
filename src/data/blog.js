export const articles = [
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
    content: [
    {
      type: "heading",
      level: 2,
      text: "Introduction",
    },
    {
      type: "paragraph",
      text:
        "Migrating an AEM AMS (Adobe Managed Services) Dispatcher to AEM as a Cloud Service involves using Adobe I/O CLI (aio CLI) tools to manage and deploy the Dispatcher configurations. This process requires careful planning and adherence to Adobe’s best practices for AEM as a Cloud Service. In this blog, we’ll walk through the step-by-step process of converting AMS Dispatcher configurations and making the necessary updates to the converted Dispatcher files.",
    },

    {
      type: "heading",
      level: 4,
      text: "Step 1: Install Node.js",
    },
    {
      type: "paragraph",
      text:
        "Ensure that Node.js is installed on your system. If it isn’t, download and install the latest version from the official Node.js website.",
    },

    {
      type: "heading",
      level: 4,
      text: "Step 2: Install the Adobe I/O CLI Tool",
    },
    {
      type: "paragraph",
      text:
        "Open the command prompt and run the following command to install the Adobe I/O CLI:",
    },
    {
      type: "code",
      language: "bash",
      code: "npm install -g @adobe/aio-cli",
    },

    {
      type: "heading",
      level: 4,
      text: "Step 3: Install AEM Cloud Service Migration Plugins",
    },
    {
      type: "paragraph",
      text:
        "Install the necessary AEM Cloud Service migration plugins by running the following command:",
    },
    {
      type: "code",
      language: "bash",
      code:
        "aio plugins:install @adobe/aio-cli-plugin-AEM-cloud-service-migration",
    },

    {
      type: "heading",
      level: 4,
      text: "Step 4: Verify the Installation",
    },
    {
      type: "paragraph",
      text:
        "To verify that the CLI tools are installed correctly, run the following command:",
    },
    {
      type: "code",
      language: "bash",
      code: "aio AEM-migration --help",
    },
    {
      type: "paragraph",
      text: "This command will display the list of available tools.",
    },
    {
      type: "image",
      src: "images/blogs/dispatcher/aio-cli-tools.webp",
      alt: "aio-cli-tools-img",
      width: {
        xs: "100%",
        sm: "90%",
        md: "80%",
      },
    },

    {
      type: "heading",
      level: 4,
      text: "Step 5: Configure the Migration Tool",
    },
    {
      type: "paragraph",
      text: "Navigate to the configuration file located at:",
    },
    {
      type: "paragraph",
      text:
        "C:\\Users\\admin\\AppData\\Local\\@adobe\\aio-cli\\AEM-migration-config.yaml",
      variant: "highlight",
    },
    {
      type: "paragraph",
      text:
        "Update the file with the paths to your AEM-sdk-dispatcher source and ams-dispatcher source, then save the changes.",
    },
    {
      type: "image",
      src: "images/blogs/dispatcher/dispatcher-config.webp",
      alt: "dispatcher-config",
      width: {
        xs: "100%",
        sm: "90%",
        md: "80%",
      },
    },

    {
      type: "heading",
      level: 4,
      text: "Step 6: Run the Dispatcher Converter",
    },
    {
      type: "paragraph",
      text:
        "Once everything is set up, execute the Dispatcher conversion command:",
    },
    {
      type: "code",
      language: "bash",
      code: "aio AEM-migration:dispatcher-converter -t=ams",
    },
    {
      type: "paragraph",
      text: "After conversion it looks like this:",
    },
    {
      type: "image",
      src: "images/blogs/dispatcher/dispatcher-logs.webp",
      alt: "dispatcher-logs",
      width: {
        xs: "100%",
        sm: "90%",
        md: "80%",
      },
    },
    {
      type: "paragraph",
      text:
        "After the conversion, navigate to the target folder. You will find a newly converted Dispatcher folder. Replace its src folder with the AEM-sdk-dispatcher source files.",
    },

    {
      type: "heading",
      level: 4,
      text: "Note",
    },
    {
      type: "paragraph",
      text:
        "If you encounter any errors during the process, check the logs in the following file for details:",
    },

    {
      type: "code",
      language: "text",
      code: `./
├── conf.d
│   ├── available_vhosts
│   │   └── default.vhost
│   ├── dispatcher_vhost.conf
│   ├── enabled_vhosts
│   │   ├── README
│   │   └── default.vhost -> ../available_vhosts/default.vhost
│   ├── rewrites
│   │   ├── default_rewrite.rules
│   │   └── rewrite.rules
│   └── variables
│       ├── custom.vars
│       └── global.vars
└── conf.dispatcher.d
    ├── available_farms
    │   └── default.farm
    ├── cache
    │   ├── default_invalidate.any
    │   ├── default_rules.any
    │   ├── marketing_query_parameters.any
    │   └── rules.any
    ├── clientheaders
    │   ├── clientheaders.any
    │   └── default_clientheaders.any
    ├── dispatcher.any
    ├── enabled_farms
    │   ├── README
    │   └── default.farm -> ../available_farms/default.farm
    ├── filters
    │   ├── default_filters.any
    │   └── filters.any
    ├── renders
    │   └── default_renders.any
    └── virtualhosts
        ├── default_virtualhosts.any
        └── virtualhosts.any`,
    },

    {
      type: "paragraph",
      text: "Your Dispatcher file structure should look like this.",
    },
    {
      type: "paragraph",
      text: "After the conversion make some changes in Dispatcher.",
    },

    {
      type: "heading",
      level: 4,
      text: "Delete Virtual Host Files",
    },
    {
      type: "bulletList",
      items: [
        "Navigate to conf.d/enabled_vhosts. Delete any virtual host files whose names contain author or flush.",
        "Remove all virtual host files in conf.d/available_vhosts that are not linked.",
      ],
    },

    {
      type: "heading",
      level: 4,
      text: "Remove or Comment Unnecessary vHosts",
    },
    {
      type: "bulletList",
      items: [
        "Remove or comment out virtual host files that do not reference port 80.",
      ],
    },

    {
      type: "heading",
      level: 4,
      text: "Check Rewrites",
    },
    {
      type: "bulletList",
      items: [
        "Go to the conf.d/rewrites directory.",
        "Delete files like base_rewrite.rules. Also, remove any Include statements in the virtual host files referencing these files.",
        "If only one file remains in the folder, rename it to rewrite.rules and update the Include statements in the virtual host files accordingly.",
        "If there are multiple virtual host-specific files, merge their contents into the corresponding Include statements in the relevant virtual host files.",
      ],
    },

    {
      type: "heading",
      level: 4,
      text: "Check Variables",
    },
    {
      type: "bulletList",
      items: [
        "Navigate to the conf.d/variables directory.",
        "Delete the ams_default.vars file and remove any Include statements in virtual host files referencing it.",
        "If only one file remains, rename it to custom.vars and update all Include statements in the virtual host files to reflect this new name.",
        "If multiple files remain, copy their contents into the corresponding Include statements in the relevant virtual host files.",
      ],
    },

    {
      type: "heading",
      level: 4,
      text: "Remove Allowlists",
    },
    {
      type: "bulletList",
      items: [
        "Delete the conf.d/whitelists folder.",
        "Remove any Include statements in virtual host files referencing files in this folder.",
        "Replace PUBLISH_DOCROOT with DOCROOT.",
        "Remove references to the following variables: DISP_ID, PUBLISH_FORCE_SSL, PUBLISH_WHITELIST_ENABLED.",
      ],
    },

    {
      type: "heading",
      level: 4,
      text: "Check Cache",
    },
    {
      type: "bulletList",
      items: [
        "Navigate to conf.dispatcher.d/cache.",
        "Delete files prefixed with ams_.",
        "If the folder is empty, copy the rules.any file from the standard Dispatcher configuration found in the SDK src folder into this folder and update the $include statements referencing the ams_*_cache.any files.",
        "If only one file remains with a _cache.any suffix, rename it to rules.any and update the $include statements in the farm files.",
        "If multiple farm-specific cache files remain, merge their contents into the corresponding $include statements in the farm files.",
        "Delete files with the suffix _invalidate_allowed.any.",
        "Copy default_invalidate.any from the standard Dispatcher configuration into this folder and update the cache/allowedClients section in the farm files.",
      ],
    },

    {
      type: "heading",
      level: 4,
      text: "Check Client Headers",
    },
    {
      type: "bulletList",
      items: [
        "Navigate to conf.dispatcher.d/clientheaders.",
        "Delete files prefixed with ams_.",
        "If only one file remains with a _clientheaders.any suffix, rename it to clientheaders.any and update the $include statements in the farm files.",
        "If only one file remains with a _cache.any suffix, rename it to rules.any and update the $include statements in the farm files.",
        "If multiple files remain, merge their contents into the corresponding $include statements in the farm files.",
        "Copy default_clientheaders.any from the standard Dispatcher configuration into this folder and replace outdated $include statements in the farm files.",
      ],
    },

    {
      type: "code",
      language: "text",
      code: `Replace:

$include "/etc/httpd/conf.dispatcher.d/clientheaders/ams_publish_clientheaders.any"
$include "/etc/httpd/conf.dispatcher.d/clientheaders/ams_common_clientheaders.any"

With:

$include "../clientheaders/default_clientheaders.any"`,
    },

    {
      type: "heading",
      level: 4,
      text: "Check Filters",
    },
    {
      type: "bulletList",
      items: [
        "Navigate to conf.dispatcher.d/filters.",
        "Delete files prefixed with ams_.",
        "If only one file remains, rename it to filters.any and update the $include statements in the farm files.",
        "If multiple files remain, merge their contents into the corresponding $include statements in the farm files.",
        "Copy default_filters.any from the standard Dispatcher configuration and update outdated $include statements in the farm files.",
      ],
    },

    {
      type: "code",
      language: "text",
      code: '$include "../filters/default_filters.any"',
    },

    {
      type: "heading",
      level: 4,
      text: "Check Renders",
    },
    {
      type: "bulletList",
      items: [
        "Navigate to conf.dispatcher.d/renders.",
        "Delete all files in this folder.",
        "Copy default_renders.any from the standard Dispatcher configuration into this folder.",
        "Update the renders section in each farm file with the default_renders.any include.",
      ],
    },

    {
      type: "code",
      language: "text",
      code: '$include "../renders/default_renders.any"',
    },

    {
      type: "heading",
      level: 4,
      text: "Check Virtual Hosts",
    },
    {
      type: "bulletList",
      items: [
        "Rename the directory conf.dispatcher.d/vhosts to conf.dispatcher.d/virtualhosts and navigate to it.",
        "Delete files prefixed with ams_.",
        "If only one file remains, rename it to virtualhosts.any and update the $include statements in the farm files.",
        "If multiple files remain, merge their contents into the corresponding $include statements in the farm files.",
        "Copy default_virtualhosts.any from the standard Dispatcher configuration and update outdated $include statements in the farm files.",
      ],
    },

    {
      type: "code",
      language: "text",
      code: '$include "../virtualhosts/default_virtualhosts.any"',
    },

    {
      type: "heading",
      level: 4,
      text: "Include Custom Variables",
    },
    {
      type: "bulletList",
      items: [
        "In the conf.d/variables/custom.vars file, ensure it is included in each virtual host file. This file contains custom domain names.",
      ],
    },

    {
      type: "heading",
      level: 4,
      text: "Validate the Dispatcher",
    },
    {
      type: "bulletList",
      items: [
        "Navigate to the Dispatcher folder.",
        "Run the validation command.",
        "Ensure Docker is installed on your system. The output should confirm successful validation.",
      ],
    },

    {
      type: "code",
      language: "bash",
      code: "bin\\validate src\\",
    },

    {
      type: "image",
      src: "images/blogs/dispatcher/dispatcher-phases.webp",
      alt: "dispatcher-phases-img",
      width: {
        xs: "100%",
        sm: "90%",
        md: "80%",
      },
    },

    {
      type: "heading",
      level: 4,
      text: "Start the Dispatcher",
    },
    {
      type: "bulletList",
      items: [
        "Now start the Dispatcher in a Docker image with deployment information. Make sure you have the AEM Publish instance running.",
        "With your AEM Publish server running on Windows on port 4503, you can start the Dispatcher by running the following command.",
        "After running the command, verify that the Dispatcher starts successfully.",
      ],
    },

    {
      type: "code",
      language: "bash",
      code: "bin\\docker_run src host.docker.internal:4503 8080",
    },

    {
      type: "image",
      src: "images/blogs/dispatcher/starting-dispatcher.webp",
      alt: "starting-dispatcher",
      width: {
        xs: "100%",
        sm: "90%",
        md: "80%",
      },
    },

    {
      type: "paragraph",
      text:
        "This completes the main steps for converting and validating an AMS Dispatcher configuration for AEM as a Cloud Service.",
      variant: "closing",
    },
  ],
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
    date: "2024-08-01",
    author: "Suchita Mishra",
    description:
      "Discover how AEM targeting uses audiences and contextual data to deliver personalized experiences.",
    content: [],
  },
  {
    slug: "indexing",
    title: "Indexing in AEM",
    category: "AEM Sites",
    date: "2023-11-24",
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
    content: [
      {
        type: "paragraph",
        text: "Hi all! Hope you all are doing good. In today's blog, let us understand the functionalities of Show Hide in Rule Editor",
      },
      {
        type: "heading",
        level: 3,
        text: "Introduction",
      },
      {
        type: "paragraph",
        text: "In AEM 6.5.xx, we have code editor as well as visual editor wherein you can apply your rules to be followed by the fields either by using functionalities of visual editor or by customizing your own logic in JavaScript and adding the same in code editor.",
      },
      {
        type: "paragraph",
        text: "AEM Rule Editor is a powerful tool provided by AEM Forms in order to:",
      },
      {
        type: "bulletList",
        items: [
          "Add custom functionalities in the fields of your form.",
          "Set the behaviour of fields within the form structure.",
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Approach To study Rule Editor",
      },
      {
        type: "paragraph",
        text: "In this blog we will understand the power of rule editor by creating a simple College Application Form.",
      },
      {
        type: "paragraph",
        text: "The scenario states that first the candidate's eligibility needs to be checked and if found eligible the further sections of the form will be visible to the candidate for filling as per the eligibility criteria and if not then admission denied text will be shown which itself will be a part of the form.",
      },
      {
        type: "paragraph",
        text: "Prerequisites: A running AEM instance with forms addon package installed.",
      },
      {
        type: "heading",
        level: 3,
        text: "Creation of College Application Form",
      },
      {
        type: "paragraph",
        text: "Let us begin the creation of College Application Form",
      },
      {
        type: "bulletList",
        items: [
          "First navigate to create adaptive form and create your form.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/create.webp",
        alt: "Creating an adaptive form",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/form-properties.webp",
        alt: "Adaptive form properties",
      },
      {
        type: "bulletList",
        items: [
          "Choose a template of your choice, could be blank but here I have created a custom template, College Template, for the purpose of creation of the form and provide title to it. You will find the root panel wherein you can add a theme after clicking on configure. I have added Beryl theme.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/theme.webp",
        alt: "Selecting the College Template",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "bulletList",
        items: [
          "First you need to add 5 panels to your form with provided configuration. Ensure except for the first panel rest all are maked as hidden.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/hide-panel.webp",
        alt: "Hiding all panels except the first",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/personal-details-panel.webp",
        alt: "Personal Details panel",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/applicablestreamspanel.webp",
        alt: "Applicable Streams panel",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/available-streams-panel.webp",
        alt: "Available Streams panel",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/admission-details-panel.webp",
        alt: "Admission Details panel",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/admission-denied.webp",
        alt: "Admission Denied panel",
      },
      {
        type: "bulletList",
        items: [
          "Now after adding panels, you need to add fields to them. Except for first name, mark all the fields as disabled.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/last-name-configuration.webp",
        alt: "Marking fields as disabled",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "bulletList",
        items: [
          "First name , Last Name and Percentile Obtained in 10th are the fields in Personal details panel.",
          "Add the First Name Configurations.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/first-name-configuration.webp",
        alt: "First Name field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "bulletList",
        items: [
          "Add the Last Name Configurations.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/last-name.webp",
        alt: "Last Name field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "bulletList",
        items: [
          "Add the Percentile Obtained in 10th Configurations.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/peercentile.webp",
        alt: "Percentile Obtained in 10th field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "bulletList",
        items: [
          "Applicable Stream is the field in Applicable Streams panel.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/applicable.webp",
        alt: "Applicable Stream field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "bulletList",
        items: [
          "Applicable Stream is again a field in Available Streams panel.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/avvailable.webp",
        alt: "Available Stream field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "bulletList",
        items: [
          "Name as per ID proof, Contact, Address, Select Blood Group and submit button are the field in Admission Details panel.",
          "Add the Name as per ID proof Configurations.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/complete-name.webp",
        alt: "Name as per ID proof field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "bulletList",
        items: [
          "Add the Contact Configurations.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/contact.webp",
        alt: "Contact field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "bulletList",
        items: [
          "Add the Address Configurations.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/address-one.webp",
        alt: "Address field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "bulletList",
        items: [
          "Allow multiple lined in Address Configurations.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/address-two.webp",
        alt: "Address field with multiple lines enabled",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "bulletList",
        items: [
          "Add the Select Blood Group Configurations.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/bloodgroup.webp",
        alt: "Select Blood Group field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "bulletList",
        items: [
          "Add the Submit Configurations.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/submit.webp",
        alt: "Submit button configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "bulletList",
        items: [
          "Candidate not applicable text is a field in Admission Denied panel.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/text.webp",
        alt: "Candidate not applicable text configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "bulletList",
        items: [
          "With this your adaptive form is ready to add include the functionalities of rule editor.",
        ],
      },
      {
        type: "heading",
        level: 3,
        text: "Adding Rules to Fields",
      },
      {
        type: "paragraph",
        text: "In AEM we have visual as well as code editor that enables an author to add functionalities using either none of them.",
      },
      {
        type: "paragraph",
        text: "Let us understand the scenario in detail so as to implement rules in the rule editor. Here first we want to check the eligibility of candidate. If the candidate is found eligible, the respective streams will appear for him to choose. As soon as the candidate selects a field, the candidate will have to enter admission details for official purpose and hence submit the form.",
      },
      {
        type: "paragraph",
        text: "In case the candidate does not qualify to secure admission in college, he will recieve the respective message.",
      },
      {
        type: "paragraph",
        text: "Let us begin:",
      },
      {
        type: "bulletList",
        items: [
          "Go to the First Name field, select rule editor, this will navigate you to the Rule Editor Console.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/ruleeditorstart.webp",
        alt: "Opening the Rule Editor for the First Name field",
      },
      {
        type: "bulletList",
        items: [
          "We want Last Name to be enabled only when the First Name is not empty, and so select create.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/firstname-visual.webp",
        alt: "First Name rule in the visual editor",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/firstname-code.webp",
        alt: "First Name rule in the code editor",
      },
      {
        type: "bulletList",
        items: [
          "Similarly, we want the applicant to add 10th percentile only after last name is not empty.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/lastname-visual.webp",
        alt: "Last Name rule in the visual editor",
      },
      {
        type: "bulletList",
        items: [
          "Now if 10th percentile is greater than 75, we want Applicable Streams panel to be visible.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/percentile-one-visual.webp",
        alt: "Percentile greater than 75 rule in the visual editor",
      },
      {
        type: "bulletList",
        items: [
          "Now if 10th percentile is between 55-75, we want Available Streams panel to be visible.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/percentile-two-visual.webp",
        alt: "Percentile between 55 and 75 rule in the visual editor",
      },
      {
        type: "bulletList",
        items: [
          "Now if 10th percentile is less than 55, we want denied panel to be visible.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/percentile-three-visual.webp",
        alt: "Percentile less than 55 rule in the visual editor",
      },
      {
        type: "bulletList",
        items: [
          "After selecting any of the streams, Admission details panel must get available",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/applicable-visual.webp",
        alt: "Applicable Streams rule in the visual editor",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/available-visual.webp",
        alt: "Available Streams rule in the visual editor",
      },
      {
        type: "bulletList",
        items: [
          "In Admission Panel, we want to enable Contact only if Name as per ID proof is not empty.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/complete-name-visual.webp",
        alt: "Name as per ID proof rule in the visual editor",
      },
      {
        type: "bulletList",
        items: [
          "We want to enable Address only if Contact is not empty.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/contact-visual.webp",
        alt: "Contact rule in the visual editor",
      },
      {
        type: "bulletList",
        items: [
          "We want to enable Blood group only if Address is not empty.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/address.webp",
        alt: "Address rule in the visual editor",
      },
      {
        type: "bulletList",
        items: [
          "We want to enable submission after only if blood group is not empty.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/bloodgroup-visual.webp",
        alt: "Blood Group rule in the visual editor",
      },
      {
        type: "paragraph",
        text: "Now your form is ready. Preview it to find the functionalities working as per the scenario.",
      },
      {
        type: "paragraph",
        text: "Hope you enjoyed reading and understanding the concept of rule editor provided by AEM.",
      },
      {
        type: "paragraph",
        text: "Thanks for reading! 😄",
      },
    ],
  },
  {
    slug: "custom-prefill-services",
    title: "Custom Prefill Services In AEM Forms",
    category: "AEM Forms",
    date: "2024-06-20",
    author: "Yash Sakharkar",
    description:
      "Learn how custom prefill services populate Adaptive Forms with data from external systems.",
    content: [
      {
        type: "paragraph",
        text: "Welcome to the blog designed for developers new to the AEM Forms . This blog will walk you through some of the concepts like What is Custom Prefill Service In AEM Form ? and most importantly, How to Implement Custom Prefill Services In AEM Forms ? We'll cover these questions in this blog.",
      },
      {
        type: "heading",
        level: 3,
        text: "What are Prefill Services in AEM Forms ?",
      },
      {
        type: "paragraph",
        text: "Prefill Services in AEM Forms are used to populate the form field with data before form is presented to the users. These services are useful for enhancing by reducing the amount of information users need to manually, ensuring data consistency, and improving form consistency rates.",
      },
      {
        type: "heading",
        level: 3,
        text: "What are Custom Prefill Services in AEM Forms ?",
      },
      {
        type: "paragraph",
        text: "Custom Prefill Services in AEM (Adobe Experience Manager) Forms are tailored solutions designed to meet specific business requirements that are not addressed by out-of-the-box prefill functionalities. These services allow for more complex and dynamic data fetching, manipulation, and mapping to form fields based on unique logic and sources.",
      },
      {
        type: "heading",
        level: 3,
        text: "Steps to Implement Custom Prefill Services",
      },
      {
        type: "heading",
        level: 4,
        text: "Step 1: Create an Adaptive Form",
      },
      {
        type: "paragraph",
        text: "To Create an Adaptive Form Navigate to Forms -> Forms and Document -> Create -> Select Adaptive Form -> Select any Template -> Enter Title and Name -> Click Create. Form which looks like this will appear.",
      },
      {
        type: "image",
        src: "images/blogs/forms/custom-prefill-services/adaptive-form.webp",
        alt: "sampleAdaptive form",
      },
      {
        type: "paragraph",
        text: "Add the Component in the root panel for e.g Text box.",
      },
      {
        type: "image",
        src: "images/blogs/forms/custom-prefill-services/added-component-to-the-root-panel.webp",
        alt: "added-component",
      },
      {
        type: "heading",
        level: 4,
        text: "Step 2: Create a Backend Services that fetches and processes the data from the required sources.",
      },
      {
        type: "paragraph",
        text: "To Prefill an adaptive form using, Prefill Service. You must create a class that Implement com.adobe.forms.common.service.DataProvider Interface which will override getPrefillData(). Under this method we will write the business logic which will fetch the data and return the input stream of the data document.",
      },
      {
        type: "paragraph",
        text: "In the Code Snippet below we have Implemented the DataProvider Interface",
      },
      {
        type: "code",
        language: "java",
        code: `package com.infodalesforms.core.service.impl;

import com.adobe.forms.common.service.*;
import org.apache.sling.api.resource.LoginException;
import org.osgi.service.component.annotations.Component;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import javax.jcr.RepositoryException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;

@Component(service = DataProvider.class)
public class CustomPrefillServices implements DataProvider {
    @Override
    public String getServiceName() {
        return "Custom Prefill Services";
    }
    @Override
    public String getServiceDescription() {
        return "Custom Prefill Services";
    }
    @Override
    public PrefillData getPrefillData(DataOptions dataOptions) throws FormsException {
        return new PrefillData() {
            public InputStream getInputStream() {
                try {
                    return getData(dataOptions);
                } catch (ParserConfigurationException | TransformerException | RepositoryException | LoginException e) {
                    throw new RuntimeException(e);
                }
            }

            public ContentType getContentType() {
                return ContentType.XML;
            }
        };
    }

    public InputStream getData(DataOptions dataOptions) throws ParserConfigurationException,
    TransformerException, RepositoryException, LoginException {
        DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
        Document document = documentBuilder.newDocument();

        Element rootElement = document.createElement("data");
        document.appendChild(rootElement);

        Element name = document.createElement("name");
        name.setTextContent("abc");
        rootElement.appendChild(name);

        Element lastName = document.createElement("lastname");
        lastName.setTextContent("def");
        rootElement.appendChild(lastName);

        Element email = document.createElement("email");
        email.setTextContent("abc@gmail.com");
        rootElement.appendChild(email);
        DOMSource domSource = new DOMSource(document);
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        StreamResult streamResult = new StreamResult(byteArrayOutputStream);
        TransformerFactory.newInstance().newTransformer().transform(domSource, streamResult);

        return new ByteArrayInputStream(byteArrayOutputStream.toByteArray());
    }
}`,
      },
      {
        type: "paragraph",
        text: "Note : The text which are highlighted in black to create an elements in the above snippet should be similar to which you have provided after adding the textbox component in AEM Forms. In the below image, name field are similar to the one I have created an element in the code.",
      },
      {
        type: "image",
        src: "images/blogs/forms/custom-prefill-services/adaptive-forms-name-field.webp",
        alt: "name fields",
      },
      {
        type: "paragraph",
        text: "Step 3: Deploy the code to AEM Environment using mvn clean install -PautoInstallBundle",
      },
      {
        type: "paragraph",
        text: "Step 4: Navigate to Your form -> Click on \"1\" symbol in the image -> Click on Setting Symbol Option -> There you will see the out of the box services as well as Custom Prefill Services that you have created through Java Code.",
      },
      {
        type: "image",
        src: "images/blogs/forms/custom-prefill-services/prefill-adaptive-form-1.webp",
        alt: "prefill service 1",
      },
      {
        type: "image",
        src: "images/blogs/forms/custom-prefill-services/prefill-services-2.webp",
        alt: "prefill service 2",
      },
      {
        type: "paragraph",
        text: "Step 5: Click On Preview. You will see data get Prefilled into the Form.",
      },
      {
        type: "image",
        src: "images/blogs/forms/custom-prefill-services/preview-image.webp",
        alt: "preview image",
      },
      {
        type: "paragraph",
        text: "So Using above mention Steps you can create your own Prefill Services in AEM Form. If you find this blog helpful, Please share it with your friends and colleagues.",
      },
    ],
  },
  {
    slug: "geolocation-forms",
    title: "Geolocation : AEM Forms with Dynamic Location",
    category: "AEM Forms",
    date: "2024-07-19",
    author: "Nitish Bisen",
    description:
      "Explore how to integrate geolocation into AEM Forms to capture and use dynamic location information.",
    content: [
      {
        type: "paragraph",
        text: "In today’s digital world, enhancing user experience in forms can significantly impact engagement and usability. In this blog, we’ll guide you through creating dynamic forms that fetch and populate dropdown lists with city, state, and country data. By leveraging GeoNames for location data, you’ll be able to create a highly interactive and user-friendly form experience. We’ll also cover the essential steps, including setting up a GeoNames account. Join us as we dive into these powerful integrations to make your AEM forms smarter and more responsive.",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/geolocation.webp",
        alt: "Integrate Geolocation with AEM Forms",
      },
      {
        type: "paragraph",
        text: "Sign up for a GeoNames account and take note of your username. This username is required to access GeoNames REST APIs. Integrate Geolocation with AEM Forms",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/geonames-login.webp",
        alt: "Create an account in Geolocation",
      },
      {
        type: "heading",
        level: 4,
        text: "Create a Swagger file :",
      },
      {
        type: "bulletList",
        items: [
          "Retrieve all countries",
          "Retrieve child countries",
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Create Data Sources",
      },
      {
        type: "paragraph",
        text: "To integrate AEM Forms with third-party applications, configure data sources in the cloud services settings. Use the Swagger files to set up these data sources. You will need to create two separate data sources: one for retrieving all countries and another for fetching child elements.",
      },
      {
        type: "paragraph",
        text: "To connect AEM Forms with third party api's, you first make a data source in cloud services. You can use the Swagger file to set up this data source.",
      },
      {
        type: "bulletList",
        items: [
          "Log in to AEM and go to the Dashboard.",
          "From Tools, select Cloud Services.",
          "Pick or create a folder in Cloud Services to store your data sources.",
          "Define settings like data type, endpoint URL, and authentication.",
          "Save the data source",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/ds-01.webp",
        alt: "Integrate Geolocation with AEM Forms",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/ds-02.webp",
        alt: "Integrate Geolocation with AEM Forms",
      },
      {
        type: "heading",
        level: 4,
        text: "Create Form Data Model",
      },
      {
        type: "paragraph",
        text: "Build your form data model using the data sources configured in the previous step, incorporating both data sources for a comprehensive model.",
      },
      {
        type: "bulletList",
        items: [
          "Log in to AEM and go to the Dashboard.",
          "Go to Forms > Data Integrations",
          "Create an Form Data Model",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/fdm-01.webp",
        alt: "Integrate Geolocation with AEM Forms",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/fdm-02.webp",
        alt: "Integrate Geolocation with AEM Forms",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/fdm-03.webp",
        alt: "Integrate Geolocation with AEM Forms",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/fdm-04.webp",
        alt: "Integrate Geolocation with AEM Forms",
      },
      {
        type: "paragraph",
        text: "Save it.",
      },
      {
        type: "heading",
        level: 4,
        text: "Create an Adaptive Form",
      },
      {
        type: "paragraph",
        text: "Create an adaptive form featuring multiple dropdown lists for selecting countries, states, and cities. Include one dropdown for listing countries and another for states and another for cities that dynamically updates based on the selected country.",
      },
      {
        type: "bulletList",
        items: [
          "Log in to AEM and go to the Dashboard.",
          "Go to Forms > Forms & Documents.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/af-01.webp",
        alt: "Adaptive Form Home",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/af-02.webp",
        alt: "Adaptive Form Home",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/af-03.webp",
        alt: "Adaptive Form Home",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/af-04.webp",
        alt: "Adaptive Form Home",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/af-05.webp",
        alt: "Adaptive Form Home",
      },
      {
        type: "heading",
        level: 4,
        text: "Populate the Countries Dropdown List",
      },
      {
        type: "paragraph",
        text: "The countries dropdown list is populated when the form is first loaded. The screenshot below illustrates the rule editor set up to populate the country options. Ensure you provide your GeoNames username for the functionality to work.",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/af-06.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/af-07.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/af-08.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "heading",
        level: 4,
        text: "Populate the States Dropdown List",
      },
      {
        type: "paragraph",
        text: "The states dropdown list is populated when the form is first loaded. The screenshot below illustrates the rule editor set up to populate the state options. Ensure you provide your GeoNames username for the functionality to work.",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/af-09.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "heading",
        level: 4,
        text: "Populate the City Dropdown List",
      },
      {
        type: "paragraph",
        text: "The cities dropdown list is populated when the form is first loaded. The screenshot below illustrates the rule editor set up to populate the cities options. Ensure you provide your GeoNames username for the functionality to work.",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/af-10.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "heading",
        level: 4,
        text: "Final Form",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/af-11.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/af-12.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "image",
        src: "images/blogs/forms/geolocation-forms/af-13.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "paragraph",
        text: "I'm glad you found this article interesting and informative! Feel free to share it with your friends to spread the knowledge. Don't forget to follow me for upcoming blogs. Thank you!",
      },
    ],
  },
  {
    slug: "google-api-form",
    title: "AEM Forms with Google Maps API's",
    category: "AEM Forms",
    date: "2024-08-03",
    author: "Nitish Bisen",
    description:
      "Discover how to integrate Google Maps APIs with AEM Forms for location-based form experiences.",
    content: [
      {
        type: "paragraph",
        text: "In today’s digital world, enhancing user experience in forms can significantly impact engagement and usability. In this blog, we’ll explore how to supercharge your Adobe Experience Manager (AEM) forms by integrating Google Maps APIs. We’ll guide you through creating dynamic forms that fetch and display the user’s current location like street, zipcode, city, state, and country data. By leveraging Google Maps APIs for geolocation, you’ll be able to create a highly interactive and user-friendly form experience. We’ll also cover the essential steps, integrating Google Maps API keys to bring this functionality to life. Join us as we dive into these powerful integrations to make your AEM forms smarter and more responsive.",
      },
      {
        type: "image",
        src: "images/blogs/forms/google-api-form/google-apis.webp",
        alt: "Integrate Geolocation with AEM Forms",
      },
      {
        type: "heading",
        level: 4,
        text: "API's Integration",
      },
      {
        type: "paragraph",
        text: "To implement the Geolocation API in Adaptive Forms, follow these steps:",
      },
      {
        type: "bulletList",
        items: [
          { title: "Obtain an API Key from Google", text: "Sign up for the Google Maps platform to receive an API key. You can start with a trial key that remains valid for one year." },
          { title: "Create an Adaptive Form Fragment", text: "Design a form fragment with fields to display the current address." },
          { title: "Invoke the Geolocation API", text: "Trigger the API call using the click event of an image object within the Adaptive Form." },
          { title: "Process the API Response", text: "Parse the JSON data returned by the API and populate the Adaptive Form fields with the extracted address information." },
        ],
      },
      {
        type: "heading",
        level: 4,
        text: "Create an Adaptive Form",
      },
      {
        type: "paragraph",
        text: "Create an adaptive form that includes an \"Image Choice\" component for selecting geolocations. The form should feature multiple text boxes for entering Lane Number, Lane Name, Zip Code, City, and State. These text boxes should dynamically update based on the user’s clicking on the map image.",
      },
      {
        type: "bulletList",
        items: [
          "Log in to AEM and go to the Dashboard.",
          "Go to Forms > Forms & Documents.",
          "You can create an Adaptive Form or Adaptive Form Fragments",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/google-api-form/af-01.webp",
        alt: "Adaptive Form Home",
      },
      {
        type: "image",
        src: "images/blogs/forms/google-api-form/af-02.webp",
        alt: "Adaptive Form Home",
      },
      {
        type: "paragraph",
        text: "Select Image Choice component to add image.",
      },
      {
        type: "image",
        src: "images/blogs/forms/google-api-form/af-03.webp",
        alt: "Adaptive Form Home",
      },
      {
        type: "paragraph",
        text: "Select multiple Text Box to fetch data dynamically.",
      },
      {
        type: "image",
        src: "images/blogs/forms/google-api-form/af-04.webp",
        alt: "Adaptive Form Home",
      },
      {
        type: "paragraph",
        text: "Select the rule editor to provide the API key and fetch data using that key. You will use the code editor to write the necessary code for this operation.",
      },
      {
        type: "image",
        src: "images/blogs/forms/google-api-form/af-05.webp",
        alt: "Adaptive Form Home",
      },
      {
        type: "image",
        src: "images/blogs/forms/google-api-form/af-06.webp",
        alt: "Adaptive Form Home",
      },
      {
        type: "image",
        src: "images/blogs/forms/google-api-form/af-07.webp",
        alt: "Adaptive Form Home",
      },
      {
        type: "image",
        src: "images/blogs/forms/google-api-form/af-09.webp",
        alt: "Adaptive Form Home",
      },
      {
        type: "paragraph",
        text: "Source code similar to Adobe AEM Forms Documents",
      },
      {
        type: "code",
        language: "javascript",
        code: `navigator.geolocation.getCurrentPosition(showPosition, handleError);

function showPosition(position) {
  console.log("I am inside the showPosition function");
  console.log("Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude);

  var apiKey = "Provide your API Key";
  var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&key=" + apiKey;
  console.log(url);

  $.getJSON(url, function (data) {
    if (data.status === "OK" && data.results.length > 0) {
      var location = data.results[0].formatted_address;
      console.log(location);

      data.results[0].address_components.forEach(function(component) {
        switch (component.types[0]) {
          case "street_number":
            streetNumber.value = component.long_name;
            break;
          case "route":
            streetName.value = component.long_name;
            break;
          case "postal_code":
            zipCode.value = component.long_name;
            break;
          case "locality":
            city.value = component.long_name;
            break;
          case "administrative_area_level_1":
            state.value = component.long_name;
            break;
        }
      });
    } else {
      console.error("No results found or Geocode was not successful.");
    }
  }).fail(function() {
    console.error("Failed to retrieve data from Google Maps API.");
  });
}

function handleError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      console.error("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.error("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.error("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      console.error("An unknown error occurred.");
      break;
  }
}`,
      },
      {
        type: "paragraph",
        text: "Click on the Map Image to automatically populate the form with your current location.",
      },
      {
        type: "image",
        src: "images/blogs/forms/google-api-form/af-08.webp",
        alt: "Integrate Geolocation with AEM Forms",
      },
      {
        type: "paragraph",
        text: "I'm glad you found this article interesting and informative! Feel free to share it with your friends to spread the knowledge. Don't forget to follow me for upcoming blogs. Thank you!",
      },
    ],
  },
  {
    slug: "forms-introduction",
    title: "Introduction to AEM Forms",
    category: "AEM Forms",
    date: "2023-01-17",
    author: "Gaffur Shaik",
    description:
      "Get started with AEM Forms and explore its capabilities for creating responsive digital forms.",
    content: [
    {
      type: "heading",
      level: 2,
      text: "Overview",
    },
    {
      type: "paragraph",
      text:
        "Adobe Experience Manager Forms is a solution provided by Adobe for creating, managing, and optimizing electronic forms (both simple and complex) across various channels such as web and mobile. AEM Forms streamline the creation and management of forms, making it easier for businesses to digitize and improve their document-based processes. The AEM Forms Module is a powerful feature introduced by AEM for creating adaptive forms, enabling easy creation, updating, and publishing.",
    },

    {
      type: "heading",
      level: 2,
      text: "Types of AEM Forms",
    },
    {
      type: "numberedList",
      items: [
        {
          title: "PDF Forms",
          text:
            "Known as offline forms, they are saved locally, and form data is sent when it gets online.",
        },
        {
          title: "HTML Forms",
          text:
            "Browser forms with the form tag element in HTML code, styled and scripted for validation.",
        },
        {
          title: "Adaptive Forms",
          text:
            "Easily adapted to screen size and responsive, customizable on the field for user ease.",
        },
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/form-types.webp",
      alt: "AEM Form Types",
    },

    {
      type: "heading",
      level: 2,
      text: "Set Up Adobe Forms Add-on",
    },
    {
      type: "paragraph",
      text:
        "Ensure that the Adobe Forms add-on is installed and configured in your AEM instance. This add-on allows you to create, manage, and publish adaptive forms. Adobe Forms functionality is provided through the AEM Forms add-on. You can download the AEM Forms add-on from the Adobe website or get it through Adobe's software distribution portal.",
    },
    {
      type: "numberedList",
      items: [
        "Form Add-On Service Pack",
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/service-pack.webp",
      alt: "AEM Form Types",
    },
    {
      type: "paragraph",
      text:
        "If any item is missing from the Forms Module interface, it means you haven't installed the Forms service pack.",
    },
    {
      type: "image",
      src: "images/blogs/forms/form-non.webp",
      alt: "AEM Form is not setup",
    },
    {
      type: "paragraph",
      text:
        "If the AEM Form is installed successfully, this item will appear.",
    },
    {
      type: "image",
      src: "images/blogs/forms/formmodule.webp",
      alt: "AEM Form setup done",
    },

    {
      type: "heading",
      level: 2,
      text: "Adaptive Forms",
    },
    {
      type: "paragraph",
      text:
        "An Adaptive Form is an interactive digital form that adjusts its layout and content dynamically based on the user's inputs or the device on which it is being viewed. It provides a user-friendly experience by adapting to different screen sizes, ensuring ease of filling out and navigation regardless of the device. Adaptive Forms are commonly used in web applications and mobile devices, allowing for a more responsive and user-centric form-filling experience.",
    },

    {
      type: "heading",
      level: 2,
      text: "Types to Create Adaptive Form",
    },
    {
      type: "numberedList",
      items: [
        "Using a form data model",
        "Using an XDP Form Template",
        "Using an XML Schema Definition (XSD) or a JSON Schema",
        "Using none or without a form model",
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/formcreateby.webp",
      alt: "AEM Form Types",
    },

    {
      type: "heading",
      level: 2,
      text: "Step To Create an Adaptive Forms",
    },

    {
      type: "heading",
      level: 3,
      text: "Create an Adaptive Form Template",
    },
    {
      type: "paragraph",
      text:
        "Every adaptive form is based on an adaptive form template. The template defines the structure, initial content, theme, etc., the adaptive form inherits. You can create a new adaptive form template or use the out-of-the-box template when creating your adaptive form.",
    },
    {
      type: "paragraph",
      text:
        "To create an adaptive form template, follow these steps:",
    },

    {
      type: "heading",
      level: 3,
      text: "Create a folder",
    },
    {
      type: "numberedList",
      items: [
        {
          title: "Navigate to",
          text: "Tool > General > Configuration Browser.",
        },
        "Create a Folder where you can store your template.",
        {
          title: "Give a suitable title",
          text:
            "Ensure that you have selected the Editable template.",
        },
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/conffolder.webp",
      alt: "AEM Form Types",
    },
    {
      type: "image",
      src: "images/blogs/forms/selectET.webp",
      alt: "AEM Form Types",
    },

    {
      type: "heading",
      level: 3,
      text: "Create a form template",
    },
    {
      type: "numberedList",
      items: [
        {
          title: "To create a template",
          text: "Go to Tool > General > Template.",
        },
        {
          title: "Choose the folder",
          text:
            'Choose the folder you previously created, then click on the "Create" button to generate a template. In the subsequent step, the default template type is the Adaptive Form Template. Ensure that it is selected and proceed by clicking on the "Next" button.',
        },
        {
          title: "Name the template",
          text:
            "Ensure that you have enabled the template. Every template at the minimum contains a layout container at the top. There’s an adaptive form container in the middle, and again, there’s a layout container at the bottom.",
        },
        {
          title: "Enable the template",
          text:
            "Next, enable this adaptive form template so that it is available for the adaptive form authors to use. To do that, select the template and click on Enable.",
        },
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/temp-folder.webp",
      alt: "AEM Form Types",
    },
    {
      type: "image",
      src: "images/blogs/forms/template.webp",
      alt: "AEM Form Types",
    },
    {
      type: "image",
      src: "images/blogs/forms/enable-temp.webp",
      alt: "AEM Form Types",
    },

    {
      type: "heading",
      level: 3,
      text: "Create Adaptive Form",
    },
    {
      type: "image",
      src: "images/blogs/forms/formmodule.webp",
      alt: "AEM Form Types",
    },
    {
      type: "numberedList",
      items: [
        "Go to Forms > Forms & Documents.",
        "Create a folder to store your forms.",
        "Open the folder and create the Adaptive Form.",
        "Select the template for your adaptive form.",
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/form-temp.webp",
      alt: "AEM Form Types",
    },
    {
      type: "numberedList",
      items: [
        "Click Next.",
        "Provide a meaningful title. There are some additional items like Form Model and Advanced.",
        "This means you can also create forms using Form Data Model, Form Data Model, and Schema.",
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/select-datamodel.webp",
      alt: "AEM Form Types",
    },
    {
      type: "numberedList",
      items: [
        "Click on Create to create an Adaptive Form.",
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/fromcreate-by.webp",
      alt: "AEM Form Types",
    },
    {
      type: "numberedList",
      items: [
        "Open the form in Edit mode.",
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/formlable.webp",
      alt: "AEM Form Types",
    },

    {
      type: "heading",
      level: 3,
      text: "Add Fields to Adaptive Forms",
    },
    {
      type: "numberedList",
      items: [
        "Drag components to the Panel (click on it to add fields).",
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/add-text.webp",
      alt: "AEM Form Types",
    },
    {
      type: "numberedList",
      items: [
        "Search for the field (e.g. text, button, numeric box).",
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/config-fields.webp",
      alt: "AEM Form Types",
    },
    {
      type: "numberedList",
      items: [
        "Add the required fields in the form and configure the fields.",
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/fields-in-form.webp",
      alt: "AEM Form Types",
    },
    {
      type: "numberedList",
      items: [
        "Go to Preview.",
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/Preview.webp",
      alt: "AEM Form Types",
    },

    {
      type: "heading",
      level: 3,
      text: "Creating Form Fragments",
    },
    {
      type: "paragraph",
      text:
        "A fragment is a reusable component within a form, designed to serve a specific purpose such as presenting an address block or legal text. Leveraging fragments streamlines the process of creating and maintaining numerous forms, enhancing efficiency and consistency across form development.",
    },
    {
      type: "numberedList",
      items: [
        "Go to Forms and Documents.",
        "Create a folder for adaptive form fragments where you can save your form fragments.",
        "Select the folder that you created above and create a form fragment.",
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/form-fragment.webp",
      alt: "AEM Form Fragment",
    },
    {
      type: "paragraph",
      text:
        "Provide a meaningful title for the fragment form. A form Fragment can be based on a Form model and there are some advanced settings. In Form Model, you can select a form data model, Schema, Form Template, and No option.",
    },
    {
      type: "paragraph",
      text:
        "Now we have created a basic form fragment. Title: Log In.",
    },
    {
      type: "image",
      src: "images/blogs/forms/fromfragment.webp",
      alt: "AEM Form Fragment layout",
    },
    {
      type: "paragraph",
      text:
        "Every form fragment has a guide root panel. Add a component in the guide root panel called Panel.",
    },
    {
      type: "paragraph",
      text: "Add Fields",
    },
    {
      type: "numberedList",
      items: [
        {
          title: "Label",
          text: "User ID, Type: Text Button.",
        },
        {
          title: "Label",
          text: "Password, Type: Text Button.",
        },
        {
          title: "Label",
          text: "Login, Type: Submit Button.",
        },
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/LogIn-form.webp",
      alt: "AEM Form Fragment layout",
    },
    {
      type: "paragraph",
      text:
        "Edit the properties of the fields in the panel.",
    },
    {
      type: "paragraph",
      text:
        "You can also add Form Fragment in your Adaptive Form.",
    },
    {
      type: "paragraph",
      text:
        "Thank you for joining us on our AEM Forms journey through this blog. We appreciate your time and interest in exploring the fundamental concepts of AEM Forms, including Adaptive Forms and AEM Form Fragments.",
    },
  ],
  },
  {
    slug: "aem-introduction",
    title: "Introduction to AEM Sites",
    category: "AEM Sites",
    date: "2023-01-03",
    author: "Gaffur Shaik",
    description:
      "Explore AEM Sites fundamentals, core features, and its role in managing digital experiences.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "What is AEM",
      },

      {
        type: "paragraph",
        text:
          "Adobe Experience Manager (AEM) is a comprehensive web content management solution that enables organizations to create, manage, and optimize customer experiences across various digital channels, including web, mobile, email, and forms. AEM is part of the Adobe Marketing Cloud, a tool suite designed to help marketers deliver personalized and engaging content to their audience.",
      },

      {
        type: "heading",
        level: 2,
        text: "Why AEM is preferred over other CMS",
      },

      {
        type: "paragraph",
        text:
          "Adobe Experience Manager (AEM) is frequently chosen over other Content Management Systems (CMS) due to its distinctive features, capabilities, and the comprehensive value it offers to organizations. The following are the reasons for adopting AEM over other CMS:",
      },

      {
        type: "numberedList",
        items: [
          "Integration with Adobe Marketing Cloud",
          "Digital Experience Management (DXM)",
          "Personalization Emphasis",
          "Multichannel Content Delivery",
          "Versatility and Flexibility",
          "Multi-Site Management (MSM)",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Features Of AEM",
      },

      {
        type: "numberedList",
        items: [
          {
            title: "Content Management",
            text:
              "AEM allows users to create, edit, and manage digital content in a user-friendly interface. It supports the creation of websites, landing pages, and other digital experiences.",
          },
          {
            title: "Digital Asset Management",
            text:
              "AEM includes a powerful DAM system for organizing, storing, and managing digital assets such as images, videos, documents, and other media files. It allows for easy search, retrieval, and reuse of assets.",
          },
          {
            title: "Web Content Management (WCM)",
            text:
              "AEM provides robust tools for creating, editing, and managing web content. It supports the creation of websites, landing pages, and digital experiences with an intuitive authoring interface.",
          },
          {
            title: "Multi-Site Management",
            text:
              "AEM supports the management of multiple websites and digital properties from a single platform, providing centralized control over content and assets.",
          },
          {
            title: "Workflow Management",
            text:
              "AEM includes workflow tools that facilitate collaboration and streamline the content creation and approval. Workflows can be customized to fit the organization's specific needs.",
          },
          {
            title: "Mobile and Responsive Design",
            text:
              "AEM allows for the creation of mobile-responsive websites and applications. It provides tools to design and optimize content for various screen sizes, ensuring a seamless experience on mobile devices.",
          },
          {
            title: "Form Management",
            text:
              "AEM Forms allows organizations to create, manage, and optimize digital forms for various processes, such as customer onboarding, registrations, and data collection.",
          },
          {
            title: "Personalization",
            text:
              "AEM offers personalization capabilities, allowing dynamic content delivery based on user behavior and preferences. Personalization enhances user engagement by providing relevant and targeted content.",
          },
          {
            title: "Content Fragments",
            text:
              "Content Fragments in AEM allow the creation and management of reusable content pieces, enhancing consistency and simplifying updates across multiple pages. These fragments streamline content authoring, ensuring a cohesive and efficient content management strategy in AEM.",
          },
          {
            title: "Integration with Adobe Marketing Cloud",
            text:
              "AEM seamlessly integrates with the Adobe Marketing Cloud suite, providing a comprehensive solution for marketers. This integration enhances the ability to deliver personalized and engaging content across channels.",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "AEM ARCHITECTURE",
      },

      {
        type: "heading",
        level: 3,
        text: "Architecture Stack",
      },

      {
        type: "paragraph",
        text:
          "Adobe Experience Manager (AEM) architecture is built on a modular and scalable stack that supports creating, managing, and delivering digital experiences. Here's an overview of the key components in the AEM architecture stack:",
      },

    {
      type: "image",
      src: "images/blogs/sites/AEM_Architecture.webp",
      alt: "AEM Architecture",
    },

      {
        type: "numberedList",
        items: [
          {
            title: "Java Platform",
            text:
              "The Java platform plays a pivotal role, serving as the backbone for the entire system. AEM is built on a Java-based architecture, leveraging the strengths of the Java programming language to deliver a scalable, robust, and extensible platform for managing digital experiences.",
          },
          {
            title: "Java Runtime Environment (JRE)",
            text:
              "JRE stands for Java Runtime Environment. The Java Runtime Environment is a package of software that provides the minimum requirements for executing Java applications. It includes the Java Virtual Machine (JVM), libraries, and other components needed to run Java programs.",
          },
          {
            title: "Granite Platform",
            text:
              "Granite is Adobe’s Open Web Stack. The Granite Platform is an underlying foundation and set of core services in Adobe Experience Manager (AEM). It provides a framework for building and running AEM applications, facilitating common functionalities and services that are essential for content management, user interface, and system operations.",
          },
          {
            title: "Servlet engine",
            text:
              "Typically refers to the underlying technology that handles the execution of Java servlets within the AEM application. A servlet engine, also known as a servlet container or servlet runner, is responsible for managing the lifecycle of servlets, processing client requests, and generating dynamic content. In the context of AEM, which is built on a Java-based architecture, the servlet engine plays a crucial role in handling HTTP requests and managing the communication between the web server and the AEM application. AEM uses the Apache Sling framework, which is essentially a servlet engine, to process and respond to requests.",
          },
          {
            title: "CRXDE",
            text:
              'Refers to the Content Repository Extreme, the underlying repository technology used in AEM. The "de" in "CRX de" specifically stands for "Day Edition," as the technology was originally developed by Day Software, the company that created the predecessor of AEM. CRX is a Java Content Repository (JCR) that serves as the foundation for storing, managing, and retrieving digital assets, content, and configurations within AEM. It provides a hierarchical and standardized way to organize and access content, and it follows the specifications outlined in the Java Content Repository API (JSR-170 and JSR-283).',
          },
          {
            title: "Sling Content Delivery",
            text:
              "The Apache Sling framework processes and delivers dynamic content by interpreting resource-based URLs and invoking the appropriate scripts or servlets to generate the content for end-users.",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "OSGi Framework",
      },

      {
        type: "paragraph",
        text:
          "The OSGi (Open Services Gateway Initiative) framework is a fundamental component of the Adobe Experience Manager (AEM) architecture. OSGi is a modular and dynamic framework for Java that enables the development of modular applications by providing a standardized way to manage and deploy components.",
      },

    {
      type: "image",
      src: "images/blogs/sites/Aem_framework.webp",
      alt: "AEM OSGi Framework",
    },

      {
        type: "heading",
        level: 3,
        text: "Java Content Repository (JCR)",
      },

      {
        type: "paragraph",
        text:
          "The AEM JCR (Java Content Repository) stands as a cornerstone, weaving together the fabric of content management with its unique blend of hierarchical organization and standardized access. The Java Content Repository API articulates an abstract model and a Java API tailored for data storage and services intricately entwined with content-centric applications.",
      },

      {
        type: "numberedList",
        items: [
          {
            title: "Hierarchical Data Model",
            text:
              "JCR represents content as a tree-like structure where each node can have child nodes. This hierarchical data model is well-suited for organizing content in a way that reflects the relationships between different pieces of information.",
          },
          {
            title: "Node Types",
            text:
              "JCR defines node types that specify the characteristics and properties of nodes. Nodes can be of different types, each with its own set of properties and behaviors. For example, AEM uses predefined node types for pages, components, and assets.",
          },
          {
            title: "Content Versioning",
            text:
              "JCR supports versioning of content, allowing for the tracking and management of different versions of a node. This is particularly important in a content management system like AEM, where content changes over time.",
          },
          {
            title: "Query Language (JCR-SQL2 and XPath)",
            text:
              "JCR provides query languages like JCR-SQL2 and XPath, enabling users to search and retrieve content based on specific criteria. This is essential for content authors and developers when accessing and manipulating content within AEM.",
          },
          {
            title: "Access Control",
            text:
              "JCR includes mechanisms for access control, allowing administrators to define and manage permissions on nodes. This ensures that only authorized users have the necessary privileges to read or modify specific content.",
          },
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "Apache Sling",
      },

      {
        type: "paragraph",
        text:
          "Apache Sling is a key framework that plays a fundamental role in handling the web request-response cycle and facilitating content-centric applications.",
      },

      {
        type: "numberedList",
        items: [
          {
            title: "Dynamic Content Choreography",
            text:
              "Apache Sling, akin to a seasoned conductor, choreographs the dynamic rendering of content. It doesn't just respond to requests; it interprets them, dynamically selecting the right content resource based on URLs. This dynamic choreography ensures a personalized and engaging experience for users.",
          },
          {
            title: "RESTful Rhythm",
            text:
              "Apache Sling, being a framework designed for RESTful content-centric applications in Adobe Experience Manager (AEM), follows RESTful principles to facilitate efficient communication and data exchange. Representation of Resources, Resource Identification through URI, Resource Manipulation through Representations, Stateless Communication, Uniform Interface.",
          },
          {
            title: "Scripting Serenade",
            text:
              "Picture a script as the musical score of this dance. Apache Sling serenades with scripting languages like Sightly (HTL), providing a templating engine for developers and content authors. This scripting symphony enables the creation of adaptive templates, where creativity and functionality elegantly intertwine.",
          },
          {
            title: "OSGi Overture",
            text:
              "As the ballet unfolds, Apache Sling seamlessly integrates with the OSGi (Open Services Gateway Initiative) framework—a foundational overture in AEM's modular architecture. This integration enables the creation of modular applications, where components elegantly dance together in a synchronized performance.",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "TYPES OF AEM",
      },

    {
      type: "image",
      src: "images/blogs/sites/AEM-Type.webp",
      alt: "Types of AEM",
    },

      {
        type: "heading",
        level: 2,
        text: "On-Premise",
      },

      {
        type: "paragraph",
        text:
          "On-premise (standalone) deployment in AEM refers to the installation and hosting of the AEM software on servers that are physically located within an organization's own infrastructure or data center.",
      },

      {
        type: "numberedList",
        items: [
          {
            title: "Local Infrastructure",
            text:
              "In this deployment model, organizations acquire and maintain their servers, networking equipment, and other necessary hardware components. AEM is installed and configured directly on these servers, forming a dedicated environment within the organization's premises.",
          },
          {
            title: "Control and Customization",
            text:
              "On-premise deployment provides organizations with complete control over the AEM infrastructure. This includes customizing server configurations, network settings, and security measures according to the organization's specific needs and compliance requirements.",
          },
          {
            title: "Security and Compliance",
            text:
              "Organizations can implement tailored security measures and compliance protocols, ensuring that AEM aligns with the organization's internal policies and industry standards. This level of control is particularly important for industries with strict regulatory requirements.",
          },
          {
            title: "Resource Management",
            text:
              "Organizations are responsible for managing and maintaining the entire AEM infrastructure, including hardware, software updates, security patches, and backups. While this grants control, it also requires dedicated IT resources and expertise to ensure optimal performance and security.",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Cloud as a Service",
      },

      {
        type: "paragraph",
        text:
          '"AEM Cloud as a Service" refers to the deployment model of AEM where the AEM environment is hosted and managed in the cloud by Adobe or a cloud service provider. In this model, organizations do not need to set up and maintain their infrastructure instead, they leverage cloud-based resources for hosting and accessing AEM.',
      },

      {
        type: "numberedList",
        items: [
          {
            title: "Cloud Hosting",
            text:
              "The Cloud as a Service option involves Adobe hosting and managing the AEM environment on cloud infrastructure such as Adobe's Managed Services or other cloud providers like Amazon Web Services (AWS), Microsoft Azure, or Google Cloud Platform. Adobe takes care of the underlying infrastructure, including servers, storage, and networking.",
          },
          {
            title: "Scalability and Flexibility",
            text:
              "Cloud as a Service provides scalability, allowing organizations to scale resources up or down based on demand easily. This flexibility is particularly beneficial for handling varying workloads, ensuring optimal performance during peak times without the need for upfront investments in hardware.",
          },
          {
            title: "Managed Services",
            text:
              "Adobe or a chosen cloud service provider manages routine tasks such as software updates, security patches, and infrastructure maintenance. This offloads operational responsibilities from the organization, allowing them to focus more on utilizing AEM for content management and digital experience optimization.",
          },
          {
            title: "Rapid Deployment",
            text:
              "Cloud-based deployments offer rapid deployment, reducing the time and effort required to set up and configure the AEM environment. This is especially advantageous for organizations looking for a quick and efficient solution without the need for extensive infrastructure planning.",
          },
        ],
      },

      {
        type: "paragraph",
        variant: "closing",
        text:
          "A heartfelt thank you for diving into our AEM (Adobe Experience Manager) introduction blog! We hope you found the content informative and that it provided you with a solid understanding of the basics of AEM.",
      },
    ],
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

    content: [
      {
        type: "paragraph",
        text: "Happy to find you here. Welcome to another learning.",
      },

      {
        type: "heading",
        level: 2,
        text: "What is Edge Delivery Services",
      },

      {
        type: "paragraph",
        text:
          "Edge Delivery Service is a part of AEM as a Cloud Service. It is an individual module or functionality in AEM as a Cloud Service and is not dependent on AEM. You can build, run, and author a website using Edge Delivery Services without AEM. It can be integrated with AEM Author to create content and sites; however, AEM authoring is not mandatory for content authoring. It supports two ways of authoring: document-based authoring and WYSIWYG (What You See Is What You Get) authoring.",
      },

      {
        type: "heading",
        level: 2,
        text: "Edge Delivery Services Architecture",
      },

      {
        type: "bulletList",
        items: [
          "Franklin / Edge Delivery Services is based on a serverless micro-services architecture.",
          "Each individual service is designed to be single-purpose. The connections between the different services make up the overall architecture.",
          "All inter-service communication is based on HTTPS.",
          "It is a composable set of services that enables a rapid development environment.",
        ],
      },

    {
      type: "image",
      src: "images/blogs/eds/Architecture-picture.png",
      alt: "Edge Delivery Services Architecture",
    },

      {
        type: "paragraph",
        text:
          "The architecture is typically composed of three layers.",
      },

      {
        type: "heading",
        level: 3,
        text: "Authoring Layer",
      },

      {
        type: "paragraph",
        text:
          "In this layer, we create content for Edge Delivery Services. We have the following ways to create content:",
      },

      {
        type: "bulletList",
        items: [
          "AEM authoring using Universal Editor.",
          "Content can be created using Google Docs, Microsoft Docs, or spreadsheets. Teams and Slack can also be used to communicate and collaborate with Adobe when required.",
          "Code and configuration are maintained in GitHub and moved to Edge Delivery Services when needed.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "Edge Delivery Layer",
      },

      {
        type: "paragraph",
        text:
          "It is a microservice-based serverless infrastructure built on the cloud.",
      },

      {
        type: "heading",
        level: 3,
        text: "Client Infrastructure",
      },

      {
        type: "paragraph",
        text:
          "This is also the CDN layer from the client side, on top of the Edge Delivery Services CDN.",
      },

      {
        type: "heading",
        level: 2,
        text: "The Entire Edge Delivery Services Implementation",
      },

      {
        type: "paragraph",
        text:
          "After development, storage and processing are handled using the following server components.",
      },

    {
      type: "image",
      src: "images/blogs/eds/implementation.png",
      alt: "Edge Delivery Services Implementation",
    },

      {
        type: "heading",
        level: 3,
        text: "AWS",
      },

      {
        type: "paragraph",
        text:
          "In AWS there are three main components: AWS S3, Lambda, and Fastly.",
      },

      {
        type: "bulletList",
        items: [
          "AWS S3 is used for storage or as the content hub.",
          "Lambda is used for processing and computing.",
          "Fastly is used as the CDN for this stack.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "Cloudflare",
      },

      {
        type: "paragraph",
        text:
          "In Cloudflare there are three main components: R2, Worker, and Cloudflare CDN.",
      },

      {
        type: "bulletList",
        items: [
          "R2 is used for storage.",
          "Worker is used for computing.",
          "Cloudflare CDN is used as the CDN.",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Four Main Parts of Edge Delivery Services",
      },

      {
        type: "paragraph",
        text:
          "There are basically four main parts involved in Edge Delivery Services (EDS):",
      },

    {
      type: "image",
      src: "images/blogs/eds/FourMainPartsofEDS.png",
      alt: "Four Main Parts of Edge Delivery Services",
      style: {
        maxWidth: "600px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
      },
    },

      {
        type: "paragraph",
        text:
          "I will explain each and every part in detail.",
      },

      {
        type: "heading",
        level: 3,
        text: "Edge",
      },

      {
        type: "paragraph",
        text:
          "Edge is basically the CDN part. It involves three types of CDN.",
      },

    {
      type: "image",
      src: "images/blogs/eds/Edge.png",
      alt: "Edge CDN",
      
    },

      {
        type: "paragraph",
        text:
          "Bring Your Own CDN (BYOCDN) is the CDN that a client can include above the EDS CDN.",
      },

      {
        type: "paragraph",
        text:
          "Outer CDN: In EDS, we have two URLs, one for the live environment and one for the preview environment. The outer CDN displays the live URL content that has been published.",
      },

      {
        type: "paragraph",
        text:
          "Inner CDN: This displays the preview of the content that has been authored.",
      },

      {
        type: "heading",
        level: 3,
        text: "PIPE (Pipeline)",
      },

      {
        type: "paragraph",
        text:
          "The main delivery functionality is provided by PIPE (Pipeline). The main pipeline is the helix-pipeline-service, which uses the helix-html-pipeline framework to render HTML and filtered JSON after applying the required filters. The Pipeline Service pulls configuration from the Code Bus and published content from the Content Bus. The pipeline service runs as an AWS Lambda function. Mainly, the pipeline is used to convert content authored in documents into hypermedia.",
      },

      {
        type: "heading",
        level: 3,
        text: "Authoring / Author",
      },

      {
        type: "paragraph",
        text:
          "Authoring can be done using Google Docs or Microsoft Docs and can be stored in Google Drive or SharePoint and published from there.",
      },

      {
        type: "paragraph",
        text: "Authoring mainly involves three things:",
      },

    {
      type: "image",
      src: "images/blogs/eds/Authoring-Author.png",
      alt: "EDS Authoring",
    },

      {
        type: "heading",
        level: 4,
        text: "Authoring",
      },

      {
        type: "paragraph",
        text:
          "Authoring can be done using Google Docs, Microsoft Docs, or any third-party document service.",
      },

      {
        type: "heading",
        level: 4,
        text: "Sidekick",
      },

      {
        type: "paragraph",
        text:
          "Sidekick is an important extension used to publish, unpublish, or delete content from the website.",
      },

      {
        type: "heading",
        level: 3,
        text: "Dev",
      },

      {
        type: "paragraph",
        text:
          "The development part is mainly done in the GitHub repository that we create. In this repository, we need to install the AEM Code Sync GitHub app, also known as Franklin Bot. The content is served from documents stored in Google Drive or SharePoint.",
      },

    {
      type: "image",
      src: "images/blogs/eds/Dev.png",
      alt: "EDS Development",
    },

      {
        type: "paragraph",
        variant: "closing",
        text:
          "Thank you for reading this introduction to Edge Delivery Services. This overview covered the EDS architecture, authoring approaches, delivery infrastructure, and the main components involved in building and delivering content.",
      },
    ],
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
    content: [
      {
        type: "paragraph",
        text: "Adaptive Form Fragments are a feature within Adobe Experience Manager (AEM) Forms that allows for the creation of reusable form components. These fragments can be used across multiple adaptive forms, which are dynamic and responsive forms designed to provide a user-friendly experience on various devices and screen sizes.",
      },
      {
        type: "paragraph",
        text: "Adaptive Forms make it easy to create a form part, like a panel or a bunch of fields, just one time and use it again in different Adaptive Forms. These reusable parts are called Adaptive Form fragments.",
      },
      {
        type: "image",
        src: "images/blogs/forms/adaptive-form-fragments/fragments.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "heading",
        level: 3,
        text: "Key Features of Adaptive Form Fragments:",
      },
      {
        type: "heading",
        level: 4,
        text: "Reusability:",
      },
      {
        type: "paragraph",
        text: "Adaptive Form Fragments can be created once and reused across multiple forms, reducing the effort needed to recreate common form components.",
      },
      {
        type: "heading",
        level: 4,
        text: "Consistency:",
      },
      {
        type: "paragraph",
        text: "By using fragments, you ensure that the same design and functionality are applied consistently across different forms. This is particularly useful for maintaining brand standards and uniform user experiences.",
      },
      {
        type: "heading",
        level: 4,
        text: "Efficiency:",
      },
      {
        type: "paragraph",
        text: "They streamline the form creation process, saving time and resources. When updates are needed, changing a fragment automatically updates all forms that use that fragment, simplifying maintenance and version control.",
      },
      {
        type: "heading",
        level: 4,
        text: "Modularity:",
      },
      {
        type: "paragraph",
        text: "Adaptive Form Fragments promote a modular approach to form design. This modularity makes it easier to manage large and complex forms by breaking them down into smaller, manageable parts.",
      },
      {
        type: "heading",
        level: 4,
        text: "Scalability:",
      },
      {
        type: "paragraph",
        text: "As organizations grow and their form requirements become more complex, Adaptive Form Fragments allow for scalable form management. New fragments can be added and existing ones can be modified without disrupting the entire form ecosystem.",
      },
      {
        type: "heading",
        level: 3,
        text: "Why Use Adaptive Form Fragments?",
      },
      {
        type: "heading",
        level: 4,
        text: "Enhanced User Experience:",
      },
      {
        type: "paragraph",
        text: "Adaptive forms are designed to adjust to different screen sizes and devices, providing a seamless experience for users. Fragments ensure that this adaptability is consistently applied across all forms.",
      },
      {
        type: "heading",
        level: 4,
        text: "Simplified Management:",
      },
      {
        type: "paragraph",
        text: "Managing forms becomes simpler as changes can be made to a fragment and reflected across all instances where the fragment is used. This reduces the workload for form administrators and developers.",
      },
      {
        type: "heading",
        level: 3,
        text: "Create an Adaptive Form Fragments",
      },
      {
        type: "paragraph",
        text: "To create an adaptive form fragments, follow these steps:",
      },
      {
        type: "bulletList",
        items: [
          "Log in to AEM and go to the Dashboard.",
          "Go to Forms > Forms & Documents.",
          "Make a folder to keep all your forms fragments together.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/adaptive-form-fragments/aff-01.webp",
        alt: "Adaptive Form Home",
      },
      {
        type: "image",
        src: "images/blogs/forms/adaptive-form-fragments/aff-02.webp",
        alt: "Adaptive Form Fragments Create",
      },
      {
        type: "image",
        src: "images/blogs/forms/adaptive-form-fragments/aff-03.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "bulletList",
        items: [
          "Open the folder and create the Adaptive Form Fragments",
          "Provide a meaningful title for your form fragments, You can also choose from additional options like Form Model and Advanced. This lets you create form fragments using Form Data Model, Form Template, Schema, or None. If you're not using any, just select \"none.\"",
          "Click on Create to create an Adaptive Form Fragments.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/adaptive-form-fragments/aff-04.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "image",
        src: "images/blogs/forms/adaptive-form-fragments/aff-05.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "image",
        src: "images/blogs/forms/adaptive-form-fragments/aff-06.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "bulletList",
        items: [
          "Open the form and click on Edit mode.",
          "Add fields to Adaptive Forms based on what you need.",
          "As we create different sections for Basic Details, Permanent Address and Current Address.",
          "Preview the form fragment.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/adaptive-form-fragments/aff-07.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "image",
        src: "images/blogs/forms/adaptive-form-fragments/aff-08.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "image",
        src: "images/blogs/forms/adaptive-form-fragments/aff-09.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "image",
        src: "images/blogs/forms/adaptive-form-fragments/aff-10.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "bulletList",
        items: [
          "Your form fragment is created.",
          "Next, you need to add your form fragment to your form.",
          "You can put your form fragment in your existing form, or you can make a new form.",
          "Go to your form and click on edit mode.",
          "Choose the Asset tab and look for Adaptive form Fragments.",
          "Once you select the form fragment, you'll see all the form fragment models.",
          "Pick your Form Fragment and just drag and drop it onto your main panel.",
          "Open and Preview the Form fragment.",
        ],
      },
      {
        type: "image",
        src: "images/blogs/forms/adaptive-form-fragments/aff-11.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "image",
        src: "images/blogs/forms/adaptive-form-fragments/aff-12.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "image",
        src: "images/blogs/forms/adaptive-form-fragments/aff-13.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "image",
        src: "images/blogs/forms/adaptive-form-fragments/aff-14.webp",
        alt: "Adaptive Form Fragments",
      },
      {
        type: "paragraph",
        text: "I'm glad you found this article interesting and informative! Feel free to share it with your friends to spread the knowledge. Don't forget to follow me for upcoming blogs. Thank you!",
      },
    ],
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
