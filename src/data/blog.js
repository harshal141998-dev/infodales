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
    content: [
      {
        type: "paragraph",
        text: "Happy to find you here. Welcome to another learning.",
      },

      {
        type: "heading",
        level: 2,
        text: "What is Sidekick in terms of EDS?",
      },

      {
        type: "paragraph",
        text:
          "In the context of AEM Edge Delivery Services (EDS), the term \"Sidekick\" does not have a defined or standard meaning as it does in classic AEM. However, if you are referencing a \"sidekick\" in general, it could imply a supportive utility, feature, or tool designed to aid in managing or delivering content efficiently in the edge delivery context.",
      },

      {
        type: "paragraph",
        text: "In the Sidekick we can create two types of buttons.",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-customization/types-of-buttons.webp",
        alt: "Types of buttons in the Sidekick",
        style: {
          maxWidth: "450px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "To explain the customization of the Sidekick, we will add two buttons to it: a Google Assist action button, and an action container that will contain YouTube as an action button.",
      },

      {
        type: "heading",
        level: 2,
        text: "Steps to Customize the Sidekick",
      },

      {
        type: "heading",
        level: 3,
        text: "Step 1: Create the tools/sidekick folder",
      },

      {
        type: "paragraph",
        text:
          "To customize the Sidekick, we need to create a folder called tools in our GitHub repository, and under that we need to create a folder called sidekick.",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-customization/github-folder-structure.webp",
        alt: "tools/sidekick folder structure in GitHub",
        style: {
          maxWidth: "300px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 2: Create the config.json file",
      },

      {
        type: "paragraph",
        text:
          "Inside the sidekick folder we need to create a file called config.json.",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-customization/config-json-file.webp",
        alt: "config.json file inside the sidekick folder",
        style: {
          maxWidth: "300px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 3: Add the JSON structure",
      },

      {
        type: "paragraph",
        text:
          "Inside that file we need to create the JSON structure as shown in the image below, adding our JSON under the plugins object. An action means a single button, and an action container means a dropdown type. So we are creating the google-assist action button, and also an action container called tools, under which we are creating YouTube as an action.",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-customization/config-file.webp",
        alt: "config.json with the google-assist action and tools container",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text: "In the image above there are some terms, which are explained below.",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "id",
            text:
              "We need to provide an id. This is the main thing, as it is also used while creating an action container.",
          },
          {
            title: "title",
            text: "This is the label shown on the Sidekick.",
          },
          {
            title: "environments",
            text:
              "Here we specify in which environments we want that button to be displayed.",
          },
          {
            title: "url",
            text:
              "Defines what action should be performed when that button is clicked.",
          },
          {
            title: "passConfig",
            text:
              "With this property, whenever we go to the URL provided, we can see all the information such as the repo, owner and branch of our GitHub in the URL, which means it passes all the configuration.",
          },
        ],
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-customization/passconfig.webp",
        alt: "URL showing the configuration passed by passConfig",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "bulletList",
        items: [
          {
            title: "passReferrer",
            text:
              "By default it is false if not provided. If it is true, the URL will show which page you came from, as shown below.",
          },
        ],
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-customization/passReference.webp",
        alt: "URL showing the referrer passed by passReferrer",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "bulletList",
        items: [
          {
            title: "excludePaths",
            text:
              "This disables the action we have created on the pages under the paths we have provided.",
          },
          {
            title: "includePaths",
            text:
              "Here we provide the paths on which that action should be displayed.",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "The Final Result",
      },

      {
        type: "paragraph",
        text:
          "This is how we customized the Sidekick. As you can see in the image below, the buttons have been added.",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-customization/final-sidekick.webp",
        alt: "Sidekick showing the new Google Assist button and tools container",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        variant: "closing",
        text: "Thanks for reading 😄",
      },
    ],
  },
  {
    slug: "sidekick-library",
    title: "Sidekick Library in Edge Delivery Services",
    category: "AEM EDS",
    date: "2025-01-10",
    author: "Owais Pathan",
    description:
      "Explore the Sidekick Library and how it helps manage and extend Edge Delivery Services functionality.",
    content: [
      {
        type: "paragraph",
        text: "Happy to find you here. Welcome to another learning.",
      },

      {
        type: "heading",
        level: 2,
        text: "What is Sidekick Library?",
      },

      {
        type: "paragraph",
        text:
          "In AEM Edge Delivery Services (EDS), the Sidekick Library is a set of utilities, tools, or pre-defined functions provided to enhance and simplify the development, management, and customization of edge delivery configurations. The Sidekick Library acts as a support framework, enabling developers to work more efficiently with EDS by offering reusable components, patterns, and APIs tailored for edge delivery use cases.",
      },

      {
        type: "paragraph",
        text:
          "To create a Sidekick Library we need to do the setup in two places: first in the GitHub code/config of the git repo, and second in the file/content setup of the content repository.",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-library/setup-list.webp",
        alt: "Sidekick Library setup list",
        style: {
          maxWidth: "500px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 2,
        text: "Steps to Create the Sidekick Library",
      },

      {
        type: "heading",
        level: 3,
        text: "Step 1: Create the library.html file",
      },

      {
        type: "paragraph",
        text:
          "The first step is to create a file called library.html under the tools/sidekick folder in our GitHub repo.",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-library/library-html-file.webp",
        alt: "library.html file inside tools/sidekick",
        style: {
          maxWidth: "400px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 2: Add the HTML code provided by Adobe",
      },

      {
        type: "paragraph",
        text:
          "Inside the library.html file we need to add the HTML code provided by Adobe. You can get that code from the link below, and the code looks like the image that follows.",
      },

      {
        type: "code",
        code:
          "https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/resources/sidekick/sidekick-library#sidekick-plugin-setup",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-library/library-html-code.webp",
        alt: "HTML code added to library.html",
        style: {
          maxWidth: "450px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 3: Add the action button in config.json",
      },

      {
        type: "paragraph",
        text:
          "Next we need to create the action button in our Sidekick, so we will add the JSON below in the config.json file under the tools/sidekick folder. In this JSON, the URL should contain the path of the library.html file.",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-library/config-json.webp",
        alt: "config.json with the Sidekick library button",
        style: {
          maxWidth: "450px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 4: Create the library Excel file",
      },

      {
        type: "paragraph",
        text:
          "Next we need to create a folder hierarchy as tools/sidekick in the root folder of the project in Google Drive or SharePoint. Inside it, create an Excel file with the name library.",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-library/library-excel.webp",
        alt: "library Excel file in tools/sidekick",
        style: {
          maxWidth: "450px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 5: Create the blocks folder",
      },

      {
        type: "paragraph",
        text:
          "Inside the same hierarchy we will create a folder called blocks, in which we will keep all the blocks that we need in the Sidekick Library.",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-library/blocks-folder.webp",
        alt: "blocks folder inside tools/sidekick",
        style: {
          maxWidth: "450px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 6: Create a document for each block",
      },

      {
        type: "paragraph",
        text:
          "Inside the blocks folder we will create a document for each block. In this case, I will only take the example of the cards block.",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-library/cards-document.webp",
        alt: "cards document inside the blocks folder",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 7: Add the block to its document",
      },

      {
        type: "paragraph",
        text: "In this cards document we will add the cards block.",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-library/cards-block.webp",
        alt: "cards block added to the cards document",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 8: Register the block in the library Excel",
      },

      {
        type: "paragraph",
        text:
          "Next we will add the path of each block document (in this case, cards) in the library Excel that we created. This Excel has two columns: name and path. The name column holds the name of the block that should be displayed, and the path column holds the path of the block document.",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-library/library-excel-properties.webp",
        alt: "library Excel with name and path columns",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 9: Open the library from the Sidekick",
      },

      {
        type: "paragraph",
        text:
          "Now if you click on the Sidekick Library button in the Sidekick, you will see that a new palette has been opened.",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-library/library-pallet.webp",
        alt: "Sidekick Library palette",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "You can see that you get the cards option, and under it, whatever card we have added shows up on the right-hand side along with a copy option. You can copy it and paste it into any document.",
      },

      {
        type: "heading",
        level: 2,
        text: "Creating Block Variations",
      },

      {
        type: "paragraph",
        text:
          "You can also create variations of a block, and those will be visible in the Sidekick Library too. To create variations, follow the steps below.",
      },

      {
        type: "heading",
        level: 3,
        text: "Step 1: Separate the variations",
      },

      {
        type: "paragraph",
        text:
          "First, separate the two variations with a separator, which is a horizontal line or three hyphens (---).",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-library/variations-seperator.webp",
        alt: "Two block variations separated by a horizontal line",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 2: Add library metadata",
      },

      {
        type: "paragraph",
        text:
          "After that, add a table with the heading Library Metadata in each section. In it we can add a name and description, so that both variations have different names and are easy to choose.",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-library/library-metadata.webp",
        alt: "Library metadata table with name and description",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 3: Choose a variation in the library",
      },

      {
        type: "paragraph",
        text:
          "Now you can see in the Sidekick Library palette that two variations have been added, and you can choose either one.",
      },

      {
        type: "image",
        src: "images/blogs/eds/sidekick-library/varation-sidekick-library.webp",
        alt: "Block variations shown in the Sidekick Library palette",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        variant: "closing",
        text: "Thanks for reading 😄",
      },
    ],
  },
  {
    slug: "dispatcher-vs-edge-delivery",
    title: "AEM Dispatcher vs Edge Delivery Services CDN",
    category: "AEM EDS",
    date: "2026-09-09",
    author: "Shruti Meshram",
    description:
      "Learn how to customize the EDS Sidekick to support authoring workflows and project requirements.",
    content: [
      {
        type: "paragraph",
        text:
          "Glad to have you here. Let's dive into another exciting learning experience.",
      },

      {
        type: "heading",
        level: 2,
        text: "Where Did the Dispatcher Go?",
      },

      {
        type: "paragraph",
        text:
          "In AEM as a Cloud Service's traditional Sites architecture, Dispatcher and Publish are still there, doing the same caching, load-balancing, and security job they always did. But with Edge Delivery Services, that whole tier disappears: content is pre-rendered to static HTML/JSON ahead of time, and delivery happens straight from Adobe's managed CDN (Fastly) with stateless, auto-scaling edge compute standing in for what Publish used to render on demand. So the Dispatcher didn't get replaced by an equivalent component. Its three jobs got absorbed and redistributed: caching moved to the CDN, load balancing became a property of Fastly's global anycast network rather than something you configure, and security moved to CDN-level rules and access control.",
      },

      {
        type: "image",
        src: "images/blogs/eds/dispatcher-vs-eds-cdn/dispatcher_vs_eds_cdn.webp",
        alt: "AEM Dispatcher compared with the Edge Delivery Services CDN",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 2,
        text: "How Load Balancing Actually Happens in EDS",
      },

      {
        type: "bulletList",
        items: [
          "Classic AEM needed load balancing because Dispatcher sits in front of a fixed set of Publish instances that can get overwhelmed under traffic spikes.",
          "EDS removes that problem at the root: pages are pre-rendered to static HTML/JSON ahead of time, so there's no render step left to bottleneck.",
          "The only \"compute\" left, turning a doc into HTML and applying blocks, runs as stateless, serverless edge functions on Fastly's network, not on a fixed server fleet.",
          "Fastly's anycast routing automatically sends each request to the nearest healthy point of presence (PoP), so there's no manual routing decision to make.",
          "Those edge functions scale horizontally on demand at each PoP, independent of every other region.",
          "Net effect: load balancing stops being something you configure (no /renders list, no dispatcher farm) and becomes a built-in property of the CDN's global architecture.",
        ],
      },

      {
        type: "image",
        src: "images/blogs/eds/dispatcher-vs-eds-cdn/eds_anycast_load_balancing.webp",
        alt: "Anycast load balancing across Fastly points of presence in EDS",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 2,
        text: "Caching in Edge Delivery Services",
      },

      {
        type: "paragraph",
        text: "Let's understand how caching happens in EDS.",
      },

      {
        type: "bulletList",
        items: [
          "Rendered HTML/JSON/media sits at up to three layers: the browser, the outer/BYO CDN (if you have one), and Adobe's inner CDN (Fastly). Each layer has its own copy, keyed by full URL.",
          "When an author hits Publish, EDS calls the CDN's purge API directly and clears just the URLs/cache keys that actually changed. Nothing else in the cache is touched.",
          "If push invalidation isn't wired up for your CDN vendor, EDS just falls back to short TTLs (5 minutes) so staleness self-heals quickly instead of being purged explicitly.",
          "There's no filesystem cache tied to a specific server instance. Cache lives in the CDN's distributed edge network, so there's no \"flush all instances\" step.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "How This Differs from Dispatcher Caching",
      },

      {
        type: "bulletList",
        items: [
          "Dispatcher caches on the local disk of each web server instance in front of Publish. EDS caches across a globally distributed CDN network, with no per-instance disk and no risk of one instance serving stale content while another is fresh.",
          "Dispatcher relies on a flush agent, a replication agent configured on Publish that sends an HTTP flush request to Dispatcher whenever a page is activated. EDS calls the CDN's purge API directly as part of the publish pipeline, so there's no separate agent to configure or troubleshoot.",
          "Classic Dispatcher setups often flush by path hierarchy (invalidate a page and everything beneath it, /*), which can over-purge. EDS purges by exact URL/cache key, which is more surgical.",
          "Dispatcher caching is essentially one tier (in front of Publish). EDS caching is multi-tier by design: CDN and browser both cache, each with their own TTL, so freshness is tuned per layer rather than one flat rule.",
        ],
      },

      {
        type: "image",
        src: "images/blogs/eds/dispatcher-vs-eds-cdn/dispatcher_vs_eds_caching.webp",
        alt: "Dispatcher caching compared with EDS multi-tier CDN caching",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 2,
        text: "Shortening URLs in EDS",
      },

      {
        type: "bulletList",
        items: [
          "Path mapping (paths.yaml / paths.json) decides what public URL a piece of content gets at publish time. It's not a runtime rewrite, it's baked into how the content gets indexed and served.",
          "The mapping works as a mountpoints-style rule: a content source path (e.g. a Google Drive folder, or /content/site/en/products/x when AEM is the source) is mapped to a shorter external path (/products/x).",
          "Multiple mappings can coexist. You can shorten one section of the site while leaving another untouched, and even mount different content sources at different path prefixes.",
          "When AEM is the source, this file is paths.json; when it's Google Drive/SharePoint, it's paths.yaml. Same concept, different format depending on the authoring surface.",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Redirects",
      },

      {
        type: "bulletList",
        items: [
          "Redirects are authored, not coded: a spreadsheet (or a redirects tab in the site's content sheet) with two columns, source path and destination.",
          "On publish, this sheet becomes a redirects.json file, and the delivery pipeline checks it on every incoming request before rendering, so a match returns a 301 immediately, with no deploy needed.",
          "Destinations can be relative (redirect within the same site) or fully-qualified external URLs (redirect off-site).",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Domain Entry",
      },

      {
        type: "bulletList",
        items: [
          "The inner CDN (aem.page / aem.live) always exists by default. A custom domain sits in front of it, it doesn't replace it.",
          "If you're using the Adobe-managed CDN, the domain is attached through Cloud Manager's Custom Domains screen: you supply the domain, Adobe gives you a CNAME target, and you either bring your own TLS certificate or let Adobe auto-provision one (renews automatically).",
          "If you're on a BYO CDN (Cloudflare, Akamai, CloudFront, your own Fastly), the domain is configured on your CDN vendor's side, then pointed at your aem.live origin. The config file (cdn.prod.host key) tells EDS which hostname is the \"production\" one for cache-header and push-invalidation purposes.",
          "Each git branch can carry its own domain mapping (helix-config.yaml), so main maps to your production domain, while other branches map to staging/preview domains automatically.",
        ],
      },

      {
        type: "image",
        src: "images/blogs/eds/dispatcher-vs-eds-cdn/eds_url_and_domain_flow.webp",
        alt: "URL mapping and custom domain flow in Edge Delivery Services",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },
    ],
  },
  {
    slug: "create-a-block-in-aem-eds-with-universal-editor-authoring",
    title: "Create a Block in AEM EDS using Universal Editor Authoring",
    category: "AEM EDS",
    date: "2026-09-10",
    author: "Harshal Farkade",
    description:
      "In EDS, a block is the fundamental unit of authorable, styleable, and scriptable content on a page, the EDS equivalent of a component.",
    content: [
      {
        type: "heading",
        level: 2,
        text: "What Is a Block?",
      },

      {
        type: "paragraph",
        text:
          'In Edge Delivery Services (EDS), a block is the fundamental unit of authorable, styleable, and scriptable content on a page, the EDS equivalent of a "component." An author never writes HTML or JSON directly; they build a page in a document (Word / Google Doc) or in the Universal Editor, and EDS converts whatever they authored into a predictable chunk of DOM that a matching JavaScript file then decorates.',
      },

      {
        type: "image",
        src: "images/blogs/eds/block-with-universaleditor/block-insert-ue.png",
        alt: "Block being inserted in Universal Editor",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "From the Universal Editor's point of view, a block is defined by three cooperating pieces, not just code:",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "Component-Definition",
            text:
              "What shows up in the Insert panel (title, icon / group) and which AEM resourceType backs it, so the editor knows how to render an authoring outline for it.",
          },
          {
            title: "Component-Model",
            text:
              "The authorable schema: which fields (text, richtext, image reference, boolean, select…) an author can fill in, and their labels / order in the properties panel.",
          },
          {
            title: "Component-Filter",
            text:
              "The rules for where the block is allowed to be used (e.g. only inside a Section) and, for container blocks, what child components it is allowed to contain.",
          },
        ],
      },

      {
        type: "paragraph",
        text:
          "Once an author drops the block onto a page and fills in its fields inside the Universal Editor, EDS renders that authored content as plain semantic HTML on the page. The block's own decorate() function then receives that raw, EDS-generated markup and reshapes it into its final presentational structure, while the block's CSS scopes styling to just that block.",
      },

      {
        type: "paragraph",
        text:
          "Mental model: the model / definition / filter JSON is the authoring contract that tells the Universal Editor how to let an author create and configure the block. The JS / CSS is the runtime behaviour that tells the browser how to actually render it. A block is incomplete until both sides exist and agree on the same block id.",
      },

      {
        type: "heading",
        level: 2,
        text: "What Does the Block Folder Structure Look Like?",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-with-universaleditor/block-folder-structure.png",
        alt: "Block folder structure",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 2,
        text: "Step 1: Create the Block Folder",
      },

      {
        type: "paragraph",
        text:
          "Create a folder named after the block, the way it is shown in the image above, and inside that folder create the files below:",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "_teaser.json",
            text:
              "Defines the Universal Editor model for the block. It registers the block as an authorable component (definitions) and specifies which fields (image, title, button link, etc.) an author can fill in, along with their labels and order in the authoring panel.",
          },
          {
            title: "teaser.js",
            text:
              "Contains the decorate() logic that transforms the authored DOM into the final markup.",
          },
          {
            title: "teaser.css",
            text: "Contains styles scoped to the block.",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Step 2: Add the Model to the _teaser.json File",
      },

      {
        type: "paragraph",
        text:
          "The model describes the fields available to the author. For example, a teaser can contain an image and a title.",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-with-universaleditor/teaser-json-example.json.png",
        alt: "_teaser.json model opened in VS Code",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "The Important Part: Model ID",
      },

      {
        type: "paragraph",
        text:
          'The model has an ID such as "teaser". That ID connects the model to the block\'s Universal Editor registration.',
      },

      {
        type: "code",
        code: `Block
  |
  +--> model: "teaser"
          |
          +--> fields: image, title, body, ...`,
      },

      {
        type: "heading",
        level: 2,
        text: "Step 3: How the Three JSON Files Fit Together",
      },

      {
        type: "paragraph",
        text:
          "Once the model exists, the block needs to be registered in three areas:",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "component-definition.json",
            text:
              "Registers the block as an available authorable component and contains information such as title/group and model reference.",
          },
          {
            title: "component-models.json",
            text:
              "Provides the model/schema used by Universal Editor to understand the fields and authoring structure.",
          },
          {
            title: "component-filters.json",
            text:
              "Controls where the component is allowed to be added, such as a section/container filter.",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Step 4: Why Do We Run npm run build:json",
      },

      {
        type: "paragraph",
        text:
          "Your block's model, _teaser.json, lives inside the block's own folder and is the file you actually edit day to day. But Universal Editor doesn't read files inside individual block folders directly. It reads three consolidated root files:",
      },

      {
        type: "bulletList",
        items: [
          "component-definition.json",
          "component-models.json",
          "component-filters.json",
        ],
      },

      {
        type: "paragraph",
        text:
          'Running npm run build:json scans every block\'s model file, merges the relevant entries into these three root files, and keeps them in sync with what you\'ve authored at the block level. In short: you edit the small, block-scoped file; this command "compiles" it into the big project-level files that the Universal Editor actually consumes.',
      },

      {
        type: "code",
        code: "npm run build:json",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-with-universaleditor/npm-build-json.png",
        alt: "npm run build:json output",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text: "Run this command every time you:",
      },

      {
        type: "bulletList",
        items: [
          "Add or remove a field from a block's model",
          "Change a model's ID",
          "Add a new block that needs to appear in the Insert panel",
          "Change filter/definition rules for a block",
        ],
      },

      {
        type: "paragraph",
        text:
          "If you skip this step, your changes will exist locally in the block folder but won't show up in the Universal Editor, since the editor never reads the block-level file directly.",
      },

      {
        type: "heading",
        level: 2,
        text: "Step 5: Why Do We Run npm run lint",
      },

      {
        type: "paragraph",
        text:
          "Linting checks the project for configured formatting and code-quality problems. A block can work in the browser and still contain problems that the repository's CI checks reject. If fixable issues are reported, run:",
      },

      {
        type: "code",
        code: `npm run lint
npm run lint:fix`,
      },

      {
        type: "paragraph",
        text:
          "Always run lint again after the automatic fix. Some issues require manual correction.",
      },

      {
        type: "heading",
        level: 3,
        text: "Why Fix Lint Before Committing?",
      },

      {
        type: "paragraph",
        text:
          "Lint can be part of the automated checks that run when a Pull Request is opened. Committing obvious lint problems can therefore create an avoidable CI failure.",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-with-universaleditor/npm run lint fix.png",
        alt: "npm run lint:fix output",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "A clean lint result means the code meets the repository's configured quality rules, CI is less likely to fail for avoidable reasons, and reviewers can focus on functionality.",
      },

      {
        type: "heading",
        level: 2,
        text: "Step 6: Commit and Push",
      },

      {
        type: "code",
        code: `git checkout -b feature/hero-banner-block
git add .
git commit -m "feat: add hero-banner block with model, definition & filter entries"
git push origin feature/hero-banner-block`,
      },

      {
        type: "paragraph",
        text: "Then open a Pull Request against main.",
      },

      {
        type: "heading",
        level: 2,
        text: "What Happens in the Pull Request?",
      },

      {
        type: "paragraph",
        text:
          "Once a PR is opened, EDS doesn't just run your repository's own lint/build/test checks. It also triggers two additional automated checks that are specific to Edge Delivery Services: GitHub Actions and Adobe Code Sync. Both must complete, and both can block the merge if they fail.",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "GitHub Actions",
            text:
              "Runs your repo's configured lint, build, and test scripts against the changed files. These are the same checks you ran locally, now enforced in CI so nothing gets merged that breaks the pipeline.",
          },
          {
            title: "Adobe Code Sync",
            text:
              "Syncs your branch to a live .page preview environment and, on many repos, runs a Lighthouse audit against that preview, checking performance, accessibility, best practices, and SEO scores for the pages/blocks affected by the PR.",
          },
        ],
      },

      {
        type: "image",
        src: "images/blogs/eds/block-with-universaleditor/Adobe-code-sync-check.png",
        alt: "GitHub Actions checks passing on the Pull Request",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Why You Must Add a Test URL in the PR Comment",
      },

      {
        type: "paragraph",
        text:
          "Adobe Code Sync deploys every PR branch to its own preview environment, but it doesn't automatically know which page a reviewer should check to see your new block working. That's why the workflow requires you to manually add a comment on the PR with the test URL, pointing to the actual page where the block is authored and rendered:",
      },

      {
        type: "code",
        code: "https://main--<repo>--<owner>.aem.page/<path-to-test-page>",
      },

      {
        type: "paragraph",
        text:
          "Why this matters: without a test URL, a reviewer (or the CI bot, on repos where this is enforced) has no direct way to confirm the block actually renders correctly on a live page. The lint/build/test checks only confirm the code is valid. They don't confirm the block looks and behaves right when authored. The test URL is what closes that gap.",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-with-universaleditor/added the url for adobe sync check.png",
        alt: "Test URL added as a comment on the Pull Request",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "What Happens If You Don't Add It?",
      },

      {
        type: "paragraph",
        text:
          "On repos where a test URL comment is a required step, the PR can be blocked from merging even if GitHub Actions and Adobe Code Sync both pass. A green CI status only proves the code compiles and passes automated checks. It doesn't prove the authored content renders correctly, so reviewers (or an automated required-comment check) will hold the merge until a working test URL is posted. In practice this usually shows up as one of the following:",
      },

      {
        type: "bulletList",
        items: [
          "The PR sits with all checks green but is still not merge-eligible because a required review comment/checklist item is unchecked.",
          "A reviewer requests changes simply asking \"what's the test URL?\" before they'll approve, since they have no way to visually verify the block.",
          "If the branch preview was never verified, a broken block (wrong field mapping, missing CSS, decorate() error) can slip through even though lint/build/tests all passed, because none of those checks actually render the page.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "What Happens After Adding the Test URL Comment",
      },

      {
        type: "paragraph",
        text: "Once the comment with the working .page URL is added:",
      },

      {
        type: "bulletList",
        items: [
          "Reviewers can open the link directly and see the block rendered with real authored content, not just read the code diff.",
          "They can confirm styling, field mapping, and behavior all match what was intended, closing the loop that automated checks can't cover.",
          "The PR becomes fully mergeable once GitHub Actions, Adobe Code Sync, and the manual visual verification via the test URL are all satisfied.",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "What Happens After Merging to main",
      },

      {
        type: "paragraph",
        text:
          "Verify the post-merge checks. The workflow also describes Adobe AEM Code Sync verification using a .page / .live test URL:",
      },

      {
        type: "code",
        code: "https://main--<repo>--<owner>.aem.page/<path-to-test-page>",
      },

      {
        type: "paragraph",
        text:
          "Verify that the block appears, authored content is present, styling works, and the rendered output matches what was authored, as shown at the start of this blog.",
      },

      {
        type: "heading",
        level: 2,
        text: "Quick Command Reference",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "npm run build:json",
            text: "Regenerates consolidated component JSON from model files.",
          },
          {
            title: "npm run lint",
            text: "Runs lint/code-quality checks.",
          },
          {
            title: "npm run lint:fix",
            text:
              "Automatically fixes lintable issues; run lint again afterward.",
          },
        ],
      },

      {
        type: "paragraph",
        variant: "closing",
        text:
          "Thank you for reading. This guide covered what a block is, how the model, definition and filter JSON files work together, why build:json and lint matter, and how the Pull Request and test URL workflow verifies your block in Edge Delivery Services.",
      },
    ],
  },
  {
    slug: "authoring-in-the-universal-editor",
    title: "Authoring in the Universal editor",
    category: "AEM EDS",
    date: "2026-09-10",
    author: "Ayush Khandekar",
    description:
      "Learn Authoring in the universal editor: Content Tree, Components, Actions in detail",
    content: [
      {
        type: "paragraph",
        text:
          "In our last post, we covered what the Universal Editor is conceptually: an editor-as-a-service that connects to your live app instead of rendering it itself. This time, we're opening it up and walking through the actual authoring screen, panel by panel and action by action, the way an author or developer would actually use it day to day.",
      },

      {
        type: "heading",
        level: 2,
        text: "The Canvas at a Glance",
      },

      {
        type: "paragraph",
        text:
          'Once a page is opened in the Universal Editor, via the Sidekick\'s "AEM Editor" button or directly through an author URL, you land on a three-part screen: a slim toolbar across the top, the live preview of your page in the center (the "canvas"), and a panel on the right that toggles between the content tree, properties, and comments.',
      },

      {
        type: "image",
        src: "images/blogs/eds/authoring-universaleditor/content-tree-overview.webp",
        alt: "Universal Editor canvas showing a live page preview alongside its content tree of Page, Main, Section, and block nodes",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "Notice that the canvas on the left is rendering the real, live page (the same Hero block, same image, same copy your visitors would see) while the panel on the right shows that page's exact structure as a nested tree. Nothing in that tree is invented for the editor; it's a direct reflection of the components actually present on the page.",
      },

      {
        type: "heading",
        level: 2,
        text: "Reading the Content Tree: Page > Main > Section > Block",
      },

      {
        type: "paragraph",
        text:
          "The content tree always follows the same nesting pattern, and once you recognize it, every page in the Universal Editor reads the same way:",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "Page",
            text: "The root node. One per page, at the very top of the tree.",
          },
          {
            title: "Main",
            text:
              "The page's main content container, corresponding to the <main> element in the rendered HTML. Everything an author can edit lives inside it.",
          },
          {
            title: "Section",
            text:
              "A wrapper grouping one or more blocks together, matching EDS's own concept of a Section (the same one you can target with section metadata like a background style). A page can, and usually does, have several Sections stacked one after another.",
          },
          {
            title: "Blocks and components",
            text:
              "The actual authored content inside a Section: a Hero, a Cards grid, a Banner, or a plain Text/Image/Title/Button. In the screenshot above, the first Section holds two Hero blocks, a Cards block, and two Banners.",
          },
        ],
      },

      {
        type: "paragraph",
        text:
          'Expand a block itself and you\'ll often find its own editable fields listed as child rows, for example an "Image" and a "Text: Hero" row nested under a Hero node. Those correspond exactly to the fields defined in that block\'s JSON model, the same component-models.json pipeline we covered in the previous post. If a field is exposed in the model, it shows up here as something an author can click straight to.',
      },

      {
        type: "heading",
        level: 2,
        text: "The Top Toolbar",
      },

      {
        type: "image",
        src: "images/blogs/eds/authoring-universaleditor/top-toolbar.webp",
        alt: "Universal Editor top toolbar showing the home, undo/redo, URL bar, permissions, preview, open, and Publish controls",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          'The bar running across the top of the editor is mostly navigation and page-level actions rather than content editing: a home icon back to the console, undo/redo, the current author URL and page path, a permissions/collaborators icon, a device-preview toggle, an "open in a new tab" icon to view the page outside the editor frame, and, on the far right, the Publish button, which pushes the current state of the page live. The overflow menu next to it holds less-frequent actions like page properties and version history.',
      },

      {
        type: "heading",
        level: 2,
        text: "The Right-Hand Panel Rail",
      },

      {
        type: "image",
        src: "images/blogs/eds/authoring-universaleditor/action-icon-rail.webp",
        alt: "Universal Editor's vertical icon rail with panel toggles and quick action icons",
        style: {
          maxWidth: "260px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "That thin strip of icons on the right edge does two different jobs, stacked in the same rail:",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "Panel toggles",
            text:
              'The top few icons switch what\'s showing in the right-hand panel: a properties/filter view, the content tree (the layers icon, which is the one selected in our screenshots, which is why we keep seeing "Content tree" as the panel heading), and a comments view for review and feedback threads.',
          },
          {
            title: "Quick actions",
            text:
              "The icons below the toggles are a shortcut for whatever node is currently selected: add a component, duplicate it, delete it, or copy it. These mirror the same options you get from the right-click/context menu on a tree node, just one click away without opening that menu.",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Component Actions: Add, Duplicate, Delete, Copy, Move",
      },

      {
        type: "paragraph",
        text:
          "Right-click any node in the content tree (or use its drag handle) and you get a context menu of actions. What's available depends on what kind of node you clicked:",
      },

      {
        type: "image",
        src: "images/blogs/eds/authoring-universaleditor/block-context-menu.webp",
        alt: "Context menu on a Hero block showing Duplicate, Delete, Copy, Move down, and Move to bottom",
        style: {
          maxWidth: "350px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text: "On a block like Hero, the menu offers:",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "Duplicate",
            text:
              "Clones the block, content and all, directly below itself. The fastest way to build a second Hero or a third Card without starting from a blank field.",
          },
          {
            title: "Delete",
            text: "Removes the block from the page entirely.",
          },
          {
            title: "Copy",
            text:
              "Copies the block to the clipboard so it can be pasted somewhere else on the same page, or on a different page altogether.",
          },
          {
            title: "Move down / Move to bottom",
            text:
              "Reorders the block among its siblings without dragging, which is useful once a Section has more than a couple of blocks stacked in it.",
          },
        ],
      },

      {
        type: "image",
        src: "images/blogs/eds/authoring-universaleditor/section-context-menu.webp",
        alt: "Context menu on a Section showing an additional Add option above Duplicate, Delete, Copy, Move down, and Move to bottom",
        style: {
          maxWidth: "350px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "On a container like a Section (or Main), the same menu gains one more option at the top: Add. That's because a Section's whole job is to hold other components, so, unlike a leaf block, it needs a way to insert something new into itself. Selecting Add is what opens the component picker covered next.",
      },

      {
        type: "heading",
        level: 2,
        text: "The Component Picker: Default Content vs. Blocks",
      },

      {
        type: "paragraph",
        text:
          'Choosing Add (or the equivalent quick-action icon) opens a searchable "Search component" dialog listing everything that\'s allowed to be inserted at that point in the tree:',
      },

      {
        type: "image",
        src: "images/blogs/eds/authoring-universaleditor/search-component-dialog.webp",
        alt: "Universal Editor's Search component dialog with All, Default Content, and Blocks tabs listing available components",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "This dialog is a direct, visual read-out of the same JSON pipeline we walked through in the previous post. The two tabs, Default Content and Blocks, correspond to the two groups defined in the project's merged component-definition.json:",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "Default Content",
            text:
              "The small set of generic, built-in components every project ships with (Text, Title, Image, Button in this project's case), the simple pieces you reach for when a full block would be overkill.",
          },
          {
            title: "Blocks",
            text:
              "Every custom block a developer has added a _<blockname>.json model for: Hero, Cards, Card, Banner, Article Meta, Author Profile, and so on. This list grows every time a new block is built and its model is merged in.",
          },
        ],
      },

      {
        type: "paragraph",
        text:
          "Which items actually appear here for a given container is also filter-controlled. A Section doesn't necessarily offer the exact same list as, say, inside a Cards block, because each container's allowed children are declared separately in component-filters.json. That's exactly the filter-and-container mechanism from the previous post, now visible as a UI you can click through rather than a JSON file you have to read.",
      },

      {
        type: "heading",
        level: 2,
        text: "Putting It Together",
      },

      {
        type: "paragraph",
        text:
          'None of what you see on this screen is arbitrary. It\'s a live, visual expression of the same three generated files (definitions, models, filters) covered in our overview post. The content tree is the component structure; the properties panel is the model\'s fields; the component picker is the definitions grouped and filtered per container. Once that mapping clicks, authoring in the Universal Editor stops feeling like "a new tool to learn" and starts feeling like a direct window into the project\'s own configuration.',
      },

      {
        type: "paragraph",
        variant: "closing",
        text:
          "Up next in this series: building a brand-new block from scratch (the JS, the CSS, and the JSON model) and watching it appear in this exact component picker. That guide is coming soon.",
      },
    ],
  },
  {
    slug: "eds-and-the-universal-editor-overview",
    title: "EDS and the Universal Editor Overview",
    category: "AEM EDS",
    date: "2026-09-10",
    author: "Ayush Khandekar",
    description:
      "Learn Authoring in the universal editor: Content Tree, Components, Actions in detail",
    content: [
      {
        type: "paragraph",
        text:
          "If you've been anywhere near the Adobe Experience Manager ecosystem in the last couple of years, you've heard the term \"Edge Delivery Services\" thrown around a lot, often alongside claims of perfect Lighthouse scores and sites that go live in weeks. Most overviews stop at the marketing pitch. This one doesn't. We're going one level deeper into how a request actually flows through EDS, what a real project looks like, and how the Universal Editor connects to it under the hood.",
      },

      {
        type: "heading",
        level: 2,
        text: "Part 1: What Is Edge Delivery Services?",
      },

      {
        type: "paragraph",
        text:
          "Edge Delivery Services (EDS), formerly known internally as \"Helix\" or \"Franklin\" (names you'll still see scattered across tool and repository names), is Adobe's modern content delivery framework, built directly into Adobe Experience Manager as a Cloud Service. Its core idea is simple: separate authoring from rendering. Content is authored somewhere, either in a document or in an AEM page through the Universal Editor, converted into clean, semantic HTML, and served straight from Adobe's edge network with no server-side application logic at request time.",
      },

      {
        type: "paragraph",
        text:
          "It's worth being precise about one thing: EDS is not a CDN replacement. It's designed to sit on top of your existing CDN, or Adobe's own managed CDN, and handle how content is authored, assembled, and shipped to that CDN.",
      },

      {
        type: "heading",
        level: 3,
        text: "How a Page Actually Gets Served",
      },

      {
        type: "paragraph",
        text:
          "This is the part most overviews skip, and it's the part that actually explains why EDS feels so fast to develop on. Every EDS project is built from three separate \"buses\":",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "Code Bus",
            text:
              "Your HTML, CSS, and JavaScript, synced directly from your GitHub repository via the AEM Code Sync GitHub App.",
          },
          {
            title: "Content Bus",
            text:
              "Your actual page content, pulled from wherever you author it: an AEM as a Cloud Service content source when the project uses the Universal Editor, or a connected Google Drive/SharePoint folder for document-based authoring.",
          },
          {
            title: "Media Bus",
            text:
              "Images and other binary assets, optimized and served separately from the content that references them.",
          },
        ],
      },

      {
        type: "paragraph",
        text:
          "When a visitor requests a page, Helix Admin pulls the code from the code bus, the content from the content bus, and the assets from the media bus, merges them on the fly, and hands the result to the CDN. Your JavaScript only ever enhances DOM that is already valid, readable HTML, so nothing is client-render-blocking, which is a large part of why EDS scores so well on Core Web Vitals. There's no build step and no deploy pipeline in between. Pushing a commit to your repo, or publishing a change from your content source, updates the live site within seconds.",
      },

      {
        type: "image",
        src: "images/blogs/eds/eds-universaleditor-overview/architecture.webp",
        alt: "Edge Delivery Services architecture diagram showing Experience Delivery, Content Management, CDN, and authoring layers",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "You'll also come across two URL types once you set a project up: an aem.page URL, which is your preview environment showing unpublished changes, and an aem.live URL, which is the actual published site your visitors hit. Both sit behind the same code and content buses. The difference is simply which version of the content each one is pointed at.",
      },

      {
        type: "heading",
        level: 3,
        text: "Two Ways to Author, One Rendering Engine",
      },

      {
        type: "paragraph",
        text:
          "It's a common misconception that EDS only means \"writing content in a Word or Google document.\" That's one valid authoring mode, document-based authoring, but it's not the only one. A project built on the Universal Editor / xwalk variant of Adobe's boilerplate is authored visually against a real AEM as a Cloud Service content source instead, and EDS renders that published AEM content through exactly the same block-based pipeline either way. The two modes differ mainly in one config file:",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "fstab.yaml",
            text:
              "Used by document-based projects to mount a Google Drive folder or SharePoint site as the content root.",
          },
          {
            title: "paths.json",
            text:
              "Used by Universal Editor / xwalk projects to map a real AEM content path (e.g. /content/your-site/) to the site root instead.",
          },
        ],
      },

      {
        type: "paragraph",
        text:
          "A project only needs one of these, not both, unless you're deliberately building a hybrid setup where some sections are authored in AEM and others as plain documents, which is a valid but distinct architecture decision.",
      },

      {
        type: "heading",
        level: 3,
        text: "Blocks: The Building Blocks of an EDS Page",
      },

      {
        type: "paragraph",
        text:
          "Content needs a way to render as more than plain text, such as a carousel, an accordion, or a hero banner, and that's what blocks are for. A block is a structured, named section of content. EDS turns it into a corresponding div in the page's DOM, and a matching JavaScript/CSS pair in your repo's /blocks folder decorates it into the real UI. In a Universal Editor project, each block folder also carries a small JSON model file describing its authoring fields, more on that in Part 2. A typical project looks like this:",
      },

      {
        type: "bulletList",
        items: [
          "/blocks/hero/hero.js and hero.css",
          "/blocks/cards/cards.js and cards.css",
          "/styles, /scripts, head.html",
        ],
      },

      {
        type: "paragraph",
        text:
          "Adobe maintains a small set of blocks in its boilerplate templates that ship with every new project, plus a larger, open-source Block Collection of commonly needed blocks (carousels, tabs, accordions, and similar) that you can pull in as a starting point and then fully restyle. Neither is meant to be used unmodified. The value is the content structure they define, not the exact CSS. Curious how a block actually gets built end to end? See our guide on creating a block with the Universal Editor.",
      },

      {
        type: "heading",
        level: 3,
        text: "Why Teams Are Actually Adopting EDS",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "Performance that shows up in Lighthouse, not just marketing slides",
            text:
              "EDS sites are built performance-first from the ground up: minimal JavaScript, no heavy client-side framework, unbundled CSS/JS shipped as-is, and a rendering pipeline optimized for Core Web Vitals. A 100 Lighthouse score, which used to take serious specialist effort on a traditional stack, becomes a realistic default here.",
          },
          {
            title: "SEO, and now GEO, by default",
            text:
              "Fast, semantic, server-rendered HTML has always been good for traditional search engine optimization (SEO). What's newer is that the same properties (clean markup, fast load times, clear content structure) also make a site easier for AI-driven \"answer engines\" to read and cite, which Adobe refers to as generative engine optimization (GEO).",
          },
          {
            title: "Development speed, with no build step and no bundler",
            text:
              "There are no Maven builds, no Cloud Manager pipelines, and no OSGi bundles to manage. Developers write plain HTML, modern CSS, and vanilla JavaScript, and a published change goes live within seconds. That simplicity also makes EDS codebases very approachable for AI coding assistants, since there's no complex build graph to reason about.",
          },
          {
            title: "Plays well with classic AEM",
            text:
              "EDS doesn't require a rip-and-replace project. EDS and classic AEM Sites can run side by side on the same domain, which is common on larger sites where only certain sections (like a blog, or a campaign microsite) move to EDS first, with content flowing both ways between the two. EDS also integrates with Adobe Target for personalization and experimentation, and with Adobe Launch/Tags.",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Part 2: Authoring with the Universal Editor",
      },

      {
        type: "paragraph",
        text:
          "The Universal Editor is a visual, what-you-see-is-what-you-get (WYSIWYG) editor built as a genuine editor-as-a-service. It works in tandem with AEM to author content, but runs independently of any specific front end rather than being baked into it. That's a deliberate design choice: it supports true decoupling of the implementation, letting developers use virtually any framework or architecture they want without imposing any SDK or technology constraint. Adobe positions it as the natural successor to the older Page Editor and SPA Editor for AEM in-context authoring going forward.",
      },

      {
        type: "heading",
        level: 3,
        text: "How the Connection Actually Works",
      },

      {
        type: "paragraph",
        text:
          "The Universal Editor doesn't render your page itself. It loads your live application in a remote frame and connects to it via a small JavaScript library embedded in your page. That library is what lets the editor detect editable regions, report the page's structure back as a content tree, and push authoring changes back into AEM in real time. For an EDS project, AEM renders the HTML but pulls in the scripts, styles, icons, and other resources straight from Edge Delivery Services, so everything an author edits is persisted back to AEM, while everything a visitor sees is still served through the same fast EDS pipeline described in Part 1.",
      },

      {
        type: "image",
        src: "images/blogs/eds/eds-universaleditor-overview/universaleditorsidepanel.webp",
        alt: "Universal Editor canvas showing a page's content tree alongside a live in-context preview",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "The content tree on the right mirrors the exact component structure of the page, so an author can jump straight to any component instead of hunting for it visually. Selecting a component, here an image and heading inside a Hero block, opens its properties directly in a side panel, letting you swap an asset, edit alt text, or change copy without ever leaving the visual preview.",
      },

      {
        type: "image",
        src: "images/blogs/eds/eds-universaleditor-overview/universaleditorpanel.webp",
        alt: "Universal Editor properties panel for editing an image and text component in-context",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "What Defines the Editable Fields",
      },

      {
        type: "paragraph",
        text:
          "The fields you see in that properties panel aren't generated automatically. They come from a small set of JSON model files that live alongside each block in the repository, and are merged into three root files the Universal Editor reads directly from the published site:",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "component-definition.json",
            text:
              "What the editor's \"Insert component\" panel is built from, listing every component available to authors.",
          },
          {
            title: "component-models.json",
            text:
              "The actual editable fields for each component (text, rich text, image, boolean, select, and more). This is what turns into the form you see in the side panel.",
          },
          {
            title: "component-filters.json",
            text:
              "Controls which child components are allowed inside a given container, so an author can't drop a component somewhere it was never designed to go.",
          },
        ],
      },

      {
        type: "paragraph",
        text:
          "These three root files are never hand-edited. They're generated from smaller fragment files, one per block, and rebuilt with a single command whenever a block's model changes. That's matched on the front end by the corresponding block's own CSS and JS, which decide how the same field actually renders once the page is live. Any field exposed this way shows up automatically in the Universal Editor, which is also how developers extend the editor for their own custom components.",
      },

      {
        type: "heading",
        level: 3,
        text: "Getting Started as a Developer",
      },

      {
        type: "paragraph",
        text:
          "For EDS projects specifically, Adobe provides a dedicated starter template built for exactly this Universal-Editor-plus-EDS combination, so you don't have to wire the connection up by hand. Instrumenting a fully custom, non-EDS AEM application instead is more involved. It means announcing the Universal Editor's service endpoint, loading its embed script, and defining a persistence connection back to your content source. But for a standard EDS project, the starter template handles nearly all of it out of the box.",
      },

      {
        type: "heading",
        level: 2,
        text: "Privacy-Respecting Operational Telemetry",
      },

      {
        type: "paragraph",
        text:
          "To help diagnose performance issues and measure experiments, EDS-powered sites collect a limited set of operational data, but only a small, sampled slice of total page views, and with personally identifiable information deliberately excluded. It's built for troubleshooting, not for tracking individual visitors.",
      },

      {
        type: "heading",
        level: 2,
        text: "Frequently Asked Questions",
      },

      {
        type: "heading",
        level: 3,
        text: "Is Edge Delivery Services free?",
      },

      {
        type: "paragraph",
        text:
          "EDS is included as part of Adobe Experience Manager as a Cloud Service. It isn't a separately licensed add-on product.",
      },

      {
        type: "heading",
        level: 3,
        text: "What are the code bus, content bus, and media bus?",
      },

      {
        type: "paragraph",
        text:
          "They're the three sources merged to build every page on request: the code bus holds your HTML/CSS/JS from GitHub, the content bus holds authored content, and the media bus holds images and other binary assets. Splitting them apart is what lets a content change go live without any code redeploy.",
      },

      {
        type: "heading",
        level: 3,
        text: "Do I need to set up my own CDN?",
      },

      {
        type: "paragraph",
        text:
          "Not necessarily. New EDS projects are reachable on .aem.page (preview) and .aem.live (published) domains immediately, backed by Adobe's own CDN. You can layer your own CDN on top of that if you need custom caching rules or a branded domain, but it isn't required to get started.",
      },

      {
        type: "heading",
        level: 3,
        text: "Do I need to know classic AEM to use the Universal Editor?",
      },

      {
        type: "paragraph",
        text:
          "Not necessarily. The Universal Editor's WYSIWYG interface lets authors publish content confidently without deep AEM experience, while developers work in plain HTML/CSS/JS and simple JSON field definitions, rather than traditional AEM-specific component APIs.",
      },

      {
        type: "heading",
        level: 3,
        text: "Can I try it before committing to a project?",
      },

      {
        type: "paragraph",
        text:
          "Yes. Adobe provides a ready-made tutorial environment for hands-on exploration, as well as a self-guided tutorial that walks through setting up a project from scratch in under half an hour.",
      },

      {
        type: "heading",
        level: 2,
        text: "Where to Go From Here",
      },

      {
        type: "paragraph",
        text:
          "If you want to get hands-on, Adobe's aem.live documentation is the canonical source for EDS, alongside Experience League's Universal Editor documentation for the AEM side of things. Support is available through the Experience League Community, a Discord channel for quick questions, and formal support tickets for teams with a contractual SLA once their site is registered in Cloud Manager.",
      },
    ],
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
        src: "images/blogs/eds/introduction-to-eds/Architecture-picture.png",
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
        src: "images/blogs/eds/introduction-to-eds/implementation.png",
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
        src: "images/blogs/eds/introduction-to-eds/FourMainPartsofEDS.png",
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
        src: "images/blogs/eds/introduction-to-eds/Edge.png",
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
        src: "images/blogs/eds/introduction-to-eds/Authoring-Author.png",
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
        src: "images/blogs/eds/introduction-to-eds/Dev.png",
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
    content: [
      {
        type: "paragraph",
        text: "Happy to find you here. Welcome to another learning.",
      },

      {
        type: "paragraph",
        text:
          "If you have opened an EDS project for the first time, the folder structure can look a little confusing. There is no components folder like we are used to in AEM Sites, no OSGi bundles, and no ui.apps. Instead you will find folders like blocks, scripts and styles sitting right at the root of the project. In this blog we will go through every important folder and file in an EDS project, understand what each one is responsible for, and see how a page actually loads from the moment a user opens it to the moment it is fully rendered on the screen.",
      },

      {
        type: "heading",
        level: 2,
        text: "1. Project Structure Overview",
      },

      {
        type: "paragraph",
        text: "A typical EDS project looks like this:",
      },

      // TODO: add the project folder tree image here

      {
        type: "paragraph",
        text:
          "Each of these folders has a clear, single responsibility, so let's break them down one by one before we look at how they work together.",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "scripts/",
            text:
              "Controls the page runtime and overall loading lifecycle. This is where the main JavaScript logic of the EDS project sits, including page decoration, block discovery, block loading, and execution of common site functionality. Files such as scripts.js act as the main entry point for processing the page.",
          },
          {
            title: "blocks/",
            text:
              "Contains reusable page components such as hero banners, cards, columns, and custom blocks. Each block typically has its own JavaScript (.js) for behavior and CSS (.css) for styling. Blocks are identified from the page HTML and dynamically loaded during page processing.",
          },
          {
            title: "styles/",
            text:
              "Contains global styles that apply across the whole website, such as common layouts, typography, spacing, variables, and shared design rules. Unlike block-specific CSS, these styles are generally used across multiple pages and components.",
          },
          {
            title: "fonts/",
            text:
              "Contains the font files and related resources used by the website. These fonts are loaded and applied through the project's global styling configuration to maintain consistent typography.",
          },
          {
            title: "icons/",
            text:
              "Contains reusable icon assets referenced throughout the website. These can be used by blocks or common site functionality without duplicating the same assets in multiple components.",
          },
          {
            title: "models/",
            text:
              "Contains the source configuration and definitions used by Universal Editor for content authoring. These configurations define components, fields, properties, and authoring behavior, helping Universal Editor understand what content authors can create and edit.",
          },
          {
            title: "Root configuration files",
            text:
              "Project-level configuration files that control different aspects of the EDS project, such as paths, metadata, sitemap and index configuration, component definitions, filters, and other project behavior. These files help connect the codebase, authoring setup, and EDS runtime configuration together.",
          },
        ],
      },

      {
        type: "paragraph",
        text:
          "Out of all of these, the relationship between head.html, the files inside scripts/, and the blocks loaded from blocks/ is the most important one to understand, because that is what actually decides how fast and how correctly your page loads.",
      },

      {
        type: "heading",
        level: 2,
        text: "2. Page Request and Runtime Flow",
      },

      {
        type: "paragraph",
        text:
          "When a user opens a page, the browser first receives the page HTML and then starts loading the resources that the project needs. At a high level, this is what happens:",
      },

      {
        type: "paragraph",
        text:
          "EDS delivers the page HTML, after which head.html provides the global resources and aem.js and scripts.js are loaded. This starts the page processing lifecycle, where the page sections and blocks are identified and prepared, the required block CSS and JavaScript resources are loaded, and finally the processed and decorated content is displayed to the user as the final page UI.",
      },

      // TODO: add the runtime flow image here

      {
        type: "paragraph",
        text:
          "This entire runtime flow is controlled by two JavaScript files, scripts/aem.js and scripts/scripts.js. Both files get loaded on every page, but they do not do the same job, so let's understand each one separately.",
      },

      {
        type: "heading",
        level: 2,
        text: "3. head.html: Loading Global Resources",
      },

      {
        type: "paragraph",
        text:
          "head.html is the very first thing that gets pulled in, and it is responsible for making sure the global resources are available before anything else runs.",
      },

      {
        type: "image",
        src: "images/blogs/eds/projectStructure-Eds/project_structure_head.webp",
        alt: "head.html structure",
        style: {
          maxWidth: "350px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "Think of head.html as the doorway. It does not decide how the page behaves, it simply makes sure the door is open and the right files are in the room before the actual work starts.",
      },

      {
        type: "heading",
        level: 2,
        text: "4. scripts/aem.js: Core EDS Utilities",
      },

      {
        type: "paragraph",
        text:
          "aem.js provides the core, reusable utility functions that are used to process a page. It does not know anything specific about your project. It just knows how to read metadata, prepare sections and load blocks. Some of its important functions are:",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "getMetadata()",
            text:
              "Reads metadata values defined for the current page, such as the page title, description, template-related information, navigation settings, or other custom metadata used during page processing and rendering.",
          },
          {
            title: "decorateSections()",
            text:
              "Identifies the sections present inside the main page content and prepares them by adding the required structure and classes. Once sections are identified, EDS can treat each section as a separate unit and load or process them at different stages of the page lifecycle.",
          },
          {
            title: "decorateBlocks()",
            text:
              "Identifies the blocks available within the page sections and prepares them for further processing. It recognizes the block structure from the page HTML and ensures that each block can later be loaded with its corresponding resources.",
          },
          {
            title: "decorateBlock()",
            text:
              "Prepares an individual block by adding the required classes, attributes, and block-specific information so that EDS can correctly identify, load, and render that block.",
          },
          {
            title: "decorateButtons()",
            text:
              "Identifies links or elements in the page content that are intended to behave as buttons and applies the required button-related classes, allowing them to receive consistent button styling across the site.",
          },
          {
            title: "decorateIcons()",
            text:
              "Identifies icon references within the page content and replaces or transforms them into the appropriate icon elements, making the required icon assets available for rendering.",
          },
          {
            title: "loadBlock()",
            text:
              "Loads the CSS and JavaScript required for an individual block and then executes the block's decorate() function to transform the original block HTML into its final UI. This acts as the main connection between the EDS runtime and the corresponding component files inside the blocks/ folder.",
          },
          {
            title: "loadSection()",
            text:
              "Loads and processes the blocks contained within a single section. This allows EDS to handle the page section by section rather than requiring all page content to be processed in exactly the same way or at the same time.",
          },
          {
            title: "loadSections()",
            text:
              "Loads and processes multiple sections across the page, coordinating their loading so that the page content can be progressively prepared and rendered as part of the overall page lifecycle.",
          },
        ],
      },

      {
        type: "paragraph",
        text: "The overall role of aem.js can be represented like this:",
      },

      // TODO: add the aem.js role image here

      {
        type: "heading",
        level: 2,
        text: "5. scripts/scripts.js: Project Page Lifecycle",
      },

      {
        type: "paragraph",
        text:
          "While aem.js gives you the reusable EDS utilities, scripts.js is where your project decides how a page actually gets processed. Its main lifecycle looks like this:",
      },

      {
        type: "image",
        src: "images/blogs/eds/projectStructure-Eds/project_structure_loadpage.webp",
        alt: "scripts.js lifecycle",
        style: {
          maxWidth: "220px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "This divides page loading into three phases, Eager, Lazy and Delayed, and each phase loads a different set of resources depending on how important they are for the initial experience.",
      },

      {
        type: "heading",
        level: 2,
        text: "6. Eager Loading",
      },

      {
        type: "paragraph",
        text:
          "The eager phase handles the content that is required the moment the page opens. It starts with loadEager(document), and the goal is simple: get the most important content on screen as fast as possible.",
      },

      {
        type: "paragraph",
        text:
          "The process starts when loadEager() is executed. First, the page is prepared for processing. The main content of the page is then decorated so that the page structure can be properly identified and organized.",
      },

      {
        type: "paragraph",
        text:
          "After decorating the main content, the system processes the sections and blocks present on the page. During the eager phase, priority is given to the first section because it generally contains the content that the user sees immediately when the page loads.",
      },

      {
        type: "paragraph",
        text:
          "The required blocks inside this important section are loaded and decorated, allowing their HTML, CSS, and JavaScript to be processed. Once this processing is complete, the important content becomes visible to the user.",
      },

      {
        type: "heading",
        level: 2,
        text: "7. decorateMain(): Preparing the Main Page Content",
      },

      {
        type: "paragraph",
        text:
          "During the eager phase, the main page content is processed through decorateMain(), which internally runs these steps in order:",
      },

      // TODO: add the decorateMain() steps image here

      {
        type: "bulletList",
        items: [
          {
            title: "decorateButtons()",
            text:
              "Identifies eligible links or page elements that should be displayed as buttons and applies the required classes and structure. This ensures that buttons are styled consistently across the page and behave according to the project's design.",
          },
          {
            title: "decorateIcons()",
            text:
              "Identifies icon references in the page content and converts them into actual icon elements. The required icon files are typically loaded from the icons/ folder, for example icons/search.svg, allowing icons to be displayed consistently throughout the website.",
          },
          {
            title: "buildAutoBlocks()",
            text:
              "Provides an extension point for automatically generating blocks based on the page content. In a fresh EDS project, this function usually exists as a placeholder, but developers can add custom logic to automatically convert specific content patterns into blocks.",
          },
          {
            title: "decorateSections() and decorateBlocks()",
            text:
              "Work together to identify and prepare the structure of the page. decorateSections() identifies the different sections in the page content, while decorateBlocks() identifies the individual blocks inside those sections. This allows the EDS runtime to determine which blocks are present and load the required CSS and JavaScript resources for them.",
          },
        ],
      },

      {
        type: "paragraph",
        text:
          "By the end of this process, EDS knows which sections exist on the page, which blocks live inside each section, and which block resources still need to be fetched.",
      },

      {
        type: "heading",
        level: 2,
        text: "8. Runtime Block Lifecycle",
      },

      {
        type: "paragraph",
        text:
          "Once decoration is complete, blocks get loaded as part of the section loading process. Put together, the full lifecycle of an existing block looks like this:",
      },

      {
        type: "paragraph",
        text:
          "When the browser first loads the page HTML, the scripts.js file starts the page processing lifecycle and calls decorateMain() to prepare and organize the main content. The page content is then divided into sections, and the blocks inside each section are identified and prepared for processing. Each section and its blocks are processed, and for every individual block, loadBlock() is called to load the required block CSS and import the corresponding block JavaScript. The block's decorate() function is then executed, transforming the original block HTML into the required structure, styling, and behavior. After all the required sections and blocks have been processed, the transformed content is rendered and displayed to the user as the final page interface.",
      },

      // TODO: add the block lifecycle image here

      {
        type: "paragraph",
        text:
          "Notice the division of responsibility here: the runtime is responsible for loading and executing a block, while the block's own JavaScript is responsible for transforming its own content. A typical block file looks as simple as this:",
      },

      {
        type: "code",
        code: `export default function decorate(block) {
  // Transform the block DOM
}`,
      },

      {
        type: "heading",
        level: 2,
        text: "9. Lazy Loading",
      },

      {
        type: "paragraph",
        text:
          "After the critical content is displayed, EDS loads the remaining page content and resources in the Lazy phase. This is important because loading every section, block, image, style, and other resource immediately would increase the amount of work the browser has to perform during the initial page load. Moving non-critical work to Lazy allows EDS to prioritize what the user needs first and process the rest afterward.",
      },

      {
        type: "paragraph",
        text:
          "The loadLazy() phase loads the remaining content that is not required immediately when the page first opens. It processes the remaining sections and blocks, and then loads additional page elements such as the header and footer. Lazy styles and fonts are also loaded during this phase, allowing the most important content to appear first while less critical resources are loaded afterward.",
      },

      {
        type: "heading",
        level: 2,
        text: "10. Header and Footer Loading",
      },

      {
        type: "paragraph",
        text:
          "The Header and Footer are not treated like regular page content. They are loaded separately, during this same lazy phase, and they can rely on page metadata to decide exactly what to load:",
      },

      {
        type: "image",
        src: "images/blogs/eds/projectStructure-Eds/project_structure_header_footer.webp",
        alt: "Header and footer metadata flow",
        style: {
          maxWidth: "300px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "If no metadata is configured, the implementation simply falls back to sensible default paths. So although Header and Footer are very much part of the runtime, they are handled a little differently from the blocks that live inside your main page content.",
      },

      {
        type: "paragraph",
        text:
          "The header and footer can contain a significant amount of content and resources, such as navigation links, icons, images, menus, and other site-wide elements. Loading all of this during the initial page processing could add unnecessary work before the main page content becomes visible. Therefore, EDS loads the Header and Footer during the Lazy phase, allowing the main page content to get priority while these shared site elements are loaded afterward.",
      },

      {
        type: "heading",
        level: 2,
        text: "11. Delayed Loading",
      },

      {
        type: "paragraph",
        text:
          "The last phase is the delayed phase, started using loadDelayed(). This is where scripts/delayed.js is loaded, well after the initial content has already been processed. This phase is meant for things that do not affect what the user sees first, such as analytics, third-party integrations, tracking scripts, and other non-critical functionality. Put together, the complete loading strategy of an EDS page is:",
      },

      {
        type: "bulletList",
        items: [
          { title: "Eager", text: "Critical page content" },
          { title: "Lazy", text: "Remaining page resources" },
          { title: "Delayed", text: "Non-critical functionality" },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "12. The blocks/ Folder",
      },

      {
        type: "paragraph",
        text:
          "The blocks/ folder contains the reusable components used to build different sections of an EDS page. Each component, such as a Hero, Cards, Columns, Header, or Footer, is maintained as an independent block.",
      },

      // TODO: add the blocks/ folder image here

      {
        type: "paragraph",
        text: "Each block usually carries its own small set of files:",
      },

      // TODO: add the block files image here

      {
        type: "bulletList",
        items: [
          {
            title: ".js",
            text:
              "Contains the JavaScript that processes the block, transforms its HTML, and adds the required functionality and behavior.",
          },
          {
            title: ".css",
            text:
              "Contains the styles specific to that block, including its layout, appearance, spacing, and responsive behavior.",
          },
          {
            title: ".json",
            text:
              "Contains the block configuration used for Universal Editor authoring, defining how the component is exposed to authors and what content or fields can be configured.",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "13. The styles/ Folder",
      },

      {
        type: "paragraph",
        text:
          "This folder holds the global project styles, split across three files that each load at a different point:",
      },

      // TODO: add the styles/ folder image here

      {
        type: "bulletList",
        items: [
          {
            title: "styles.css",
            text:
              "Contains the global and critical styles, loaded as part of the initial page resources. This is where you typically find your CSS variables, base page styling, typography, responsive rules and common layout rules.",
          },
          {
            title: "lazy-styles.css",
            text:
              "Contains styles that are not needed for the first render, so it is loaded during the lazy phase instead.",
          },
          {
            title: "fonts.css",
            text:
              "Contains your @font-face declarations, which point to the actual font files kept in the fonts/ folder.",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "14. The fonts/ and icons/ Folders",
      },

      {
        type: "paragraph",
        text:
          "The fonts/ folder simply holds the font files referenced from styles/fonts.css:",
      },

      // TODO: add the fonts/ folder image here

      {
        type: "paragraph",
        text:
          "And the icons/ folder holds the reusable icon assets that get picked up and rendered by the project's components:",
      },

      // TODO: add the icons/ folder image here

      {
        type: "heading",
        level: 2,
        text: "15. Universal Editor Runtime Support",
      },

      {
        type: "paragraph",
        text:
          "Along with running the published site, an EDS project also carries scripts that support the page when it is opened inside Universal Editor:",
      },

      // TODO: add the editor support scripts image here

      {
        type: "bulletList",
        items: [
          {
            title: "editor-support.js",
            text:
              "Normally, when an author changes something in Universal Editor, the page does not need a full reload. Instead, Universal Editor fires content update events, and this script listens for them and updates just the affected part of the page.",
          },
        ],
      },

      {
        type: "paragraph",
        text:
          "When an author edits content in Universal Editor, the editor sends an update event, which is received by editor-support.js. The affected DOM element is then identified, and the updated content is processed before the affected region is replaced with the new content. The relevant content is then decorated again so that the updated element or block receives the required EDS structure, styling, and behavior without requiring the entire page to be reloaded.",
      },

      // TODO: add the editor-support.js flow image here

      {
        type: "paragraph",
        text:
          "The script listens for events like aue:content-patch, aue:content-update, aue:content-add, aue:content-move, aue:content-remove and aue:content-copy, which together let the author preview updates without a full page refresh.",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "editor-support-rte.js",
            text:
              "Rich text fields often contain more than one DOM element, such as a heading, a couple of paragraphs and a link.",
          },
        ],
      },

      // TODO: add the editor-support-rte.js image here

      {
        type: "paragraph",
        text:
          "This script groups those related elements together so that Universal Editor can treat them as one single editable rich text region instead of several disconnected pieces.",
      },

      {
        type: "heading",
        level: 2,
        text: "16. Published Page vs Universal Editor",
      },

      {
        type: "paragraph",
        text:
          "The same EDS project can run in two different contexts: a published website and the Universal Editor authoring environment. In both cases, the core EDS runtime is responsible for processing the page, identifying sections and blocks, and loading the required block resources. The main difference is that, in Universal Editor, additional editor support scripts enable authors to edit content directly and handle content changes dynamically without following the normal published-page experience.",
      },

      {
        type: "image",
        src: "images/blogs/eds/projectStructure-Eds/project_structure_comparison.webp",
        alt: "Published page vs Universal Editor",
        style: {
          maxWidth: "400px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "The regular EDS lifecycle is always what processes the page. The editor support scripts simply add the extra behavior needed for live editing on top of it.",
      },

      {
        type: "heading",
        level: 2,
        text: "17. The models/ Folder",
      },

      {
        type: "paragraph",
        text:
          "This folder contains the source configuration used by Universal Editor:",
      },

      {
        type: "image",
        src: "images/blogs/eds/projectStructure-Eds/project_structure_model.webp",
        alt: "models folder tree",
        style: {
          maxWidth: "250px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "These files define things like the available components, their fields, how and where they can be placed, page metadata and section configuration. From these source files, the actual configuration files get generated at the project root, i.e. component-definition.json, component-models.json and component-filters.json.",
      },

      // TODO: add the generated root files image here

      {
        type: "paragraph",
        text:
          "Block level configuration and component authoring deserve a blog of their own, so here we are only covering where these files sit in the project and how they connect to Universal Editor.",
      },

      {
        type: "heading",
        level: 2,
        text: "18. Other Important Root Files",
      },

      {
        type: "paragraph",
        text: "A few more files at the project root round out the configuration:",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "paths.json",
            text:
              "Maps content paths to public site paths, and can also hold mappings for project configuration and metadata resources. It follows AEM content path to path mapping to public URL.",
          },
          {
            title: "helix-query.yaml",
            text:
              "Defines the configuration for the project's query index, which powers things like search, content listings, related content and sitemap generation.",
          },
          {
            title: "helix-sitemap.yaml",
            text:
              "Configures sitemap generation, based on the page information already captured by the query index.",
          },
          {
            title: "package.json",
            text:
              "Holds the project's development configuration: its dependencies, dev dependencies, and the npm scripts used for tasks like JavaScript linting, CSS linting, automatic lint fixing, JSON generation and other development tooling.",
          },
        ],
      },

      {
        type: "paragraph",
        variant: "closing",
        text: "Thanks for reading 😄",
      },
    ],
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
