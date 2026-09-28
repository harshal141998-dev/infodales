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
    content: [
      
    {
      type: "paragraph",
      text:
        "Adobe Experience Manager (AEM) Forms provides a powerful rule editor that allows you to create dynamic and interactive forms. By adding custom JavaScript functions, you can extend the functionality of your forms and create more sophisticated logic. In this blog, we'll walk through the steps to add custom functions to the rule editor.",
    },

    {
      type: "heading",
      level: 4,
      text: "Prerequisites :",
    },
    {
      type: "paragraph",
      text:
        "Before we begin, make sure you have access to AEM Forms and are familiar with basic AEM concepts.",
    },

    {
      type: "heading",
      level: 4,
      text: "Understanding the Rule Editor:",
    },
    {
      type: "paragraph",
      text:
        "Before diving into adding custom functions, it is essential to understand the Rule Editor's role in AEM Forms. The Rule Editor enables form designers to create rules based on conditions and actions, facilitating dynamic form behavior. These rules can be applied to form fields, buttons, and other elements to control visibility, enable/disable features, validate data, and more.",
    },

    {
      type: "heading",
      level: 4,
      text: "Need for Custom Functions:",
    },
    {
      type: "paragraph",
      text:
        "While AEM Forms offers a comprehensive set of built-in functions, there are situations where you may require additional functionality specific to your organization's requirements. These could include complex calculations, data manipulation, integration with external systems, or specialized validation rules. Custom functions allow you to extend the Rule Editor's capabilities to address these needs.",
    },

    {
      type: "heading",
      level: 4,
      text: "Steps to Add Custom Functions :",
    },

    {
      type: "heading",
      level: 4,
      text: "Step 1:",
    },
    {
      type: "bulletList",
      items: [
        "Login to CRXDE and navigate to the apps folder.",
      ],
    },

    {
      type: "heading",
      level: 4,
      text: "Step 2:",
    },
    {
      type: "bulletList",
      items: [
        "Create a new folder under the apps folder, let's call it customfunction-in-forms (you can choose any name you like). Then save your changes.",
      ],
    },

    {
      type: "heading",
      level: 4,
      text: "Step 3:",
    },
    {
      type: "paragraph",
      text: "Create client libraries",
    },
    {
      type: "bulletList",
      items: [
        "Within the customfuction-in-forms folder, create a new node of type cq:ClientLibraryFolder called clientlibs.",
        "Set the properties for the clientlibs folder by adding the following:",
      ],
    },
    {
      type: "numberedList",
      items: [
        "allowProxy: Set to true.",
        "categories: Specify relevant categories (e.g., customfunction.form).",
      ],
    },
    {
      type: "image",
      src: "images/blogs/function_rule_editor/clientlib_property.webp",
      alt: "properties",
    },

    {
      type: "heading",
      level: 4,
      text: "Step 4:",
    },
    {
      type: "paragraph",
      text: "Structure your files:",
    },
    {
      type: "bulletList",
      items: [
        "Create a folder called js under the clientlibs folder.",
        "Within the js folder, create a file named customfunction.js.",
        "Create another file named js.txt under the clientlibs folder and add entry of your js file",
      ],
    },
    {
      type: "image",
      src: "images/blogs/function_rule_editor/folder_Structure.webp",
      alt: "folder structure",
    },
    {
      type: "bulletList",
      items: [
        "add below code in customfunction.js file",
      ],
    },
    {
      type: "image",
      src: "images/blogs/function_rule_editor/blog_js.webp",
      alt: "js code",
    },

    {
      type: "heading",
      level: 4,
      text: "Step 5:",
    },
    {
      type: "bulletList",
      items: [
        "Create adaptive form with three fields drop down list , number and text field",
      ],
    },
    {
      type: "image",
      src: "images/blogs/function_rule_editor/form_image.webp",
      alt: "form image",
    },

    {
      type: "heading",
      level: 4,
      text: "Step 6:",
    },
    {
      type: "bulletList",
      items: [
        "Add clientlibs category in root panel(Adaptive form container) properties.",
      ],
    },
    {
      type: "image",
      src: "images/blogs/function_rule_editor/propertyadded.webp",
      alt: "form image",
    },

    {
      type: "heading",
      level: 4,
      text: "Step 7:",
    },
    {
      type: "bulletList",
      items: [
        "Go to Rule Editor of dropdown list.",
        "Click on plus icon to create a rule.",
      ],
    },
    {
      type: "image",
      src: "images/blogs/function_rule_editor/functiovisible.webp",
      alt: "form image",
    },
    {
      type: "bulletList",
      items: [
        "You can see your function in left side after clicking functions tab.",
      ],
    },

    {
      type: "heading",
      level: 4,
      text: "Step 8:",
    },
    {
      type: "bulletList",
      items: [
        "Click on dropdown and select [SET OPTIONS OF].",
        "Select your object",
        "Select function output",
        "select your function",
      ],
    },
    {
      type: "image",
      src: "images/blogs/function_rule_editor/funnctionset.webp",
      alt: "form image",
    },
    {
      type: "bulletList",
      items: [
        "Save your changes.",
      ],
    },

    {
      type: "heading",
      level: 4,
      text: "Step 9:",
    },
    {
      type: "bulletList",
      items: [
        "Same thing you need to do for age field, you can refer the image below.",
        "Follow the steps that are mentioned below.",
      ],
    },
    {
      type: "image",
      src: "images/blogs/function_rule_editor/agefiled.webp",
      alt: "form image",
    },
    {
      type: "bulletList",
      items: [
        "Save your changes.",
      ],
    },

    {
      type: "heading",
      level: 4,
      text: "Step 10:",
    },
    {
      type: "bulletList",
      items: [
        "Rules are defined now we need to test the form.",
      ],
    },
    {
      type: "video",
      src: "images/blogs/function_rule_editor/screen-capture.mp4",
      alt: "screen-capture",
    },
  
    ],
  },
  {
    slug: "submitting-adaptive-form",
    title: "Submitting Adaptive Form using Form Data Model",
    category: "AEM Forms",
    date: "2023-02-28",
    author: "Owais Pathan",
    description:
      "Discover how to submit Adaptive Forms using a Form Data Model to integrate with backend services.",
    content: [
      
    {
      type: "paragraph",
      text:
        "This blog will help you understand how to connect a database to your AEM adaptive forms to retrieve and insert form values. When integrating Adaptive Forms with a Database, establishing seamless connections to data sources becomes essential for retrieving customer data during form rendering. Various scenarios may require data retrieval from these sources based on user inputs within Adaptive Forms. Additionally, upon submitting an Adaptive Form to a database, the captured data can be efficiently updated back into the corresponding data sources.",
    },

    {
      type: "heading",
      level: 3,
      text: "We are going to achieve below flow as a part of this blog",
    },
    {
      type: "bulletList",
      items: [
        "Setting up Database in this case its MySQL.",
        "Creating Form Data Model",
        "Submitting Form to the Database using Form data model",
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/flowchart.webp",
      alt: "form-data-model-flow",
    },

    {
      type: "heading",
      level: 3,
      text: "Setting up Database",
    },
    {
      type: "paragraph",
      text:
        "Go to the official website to download the bundle of your respective database in this case it is MySQL. Click the highlighted link and your bundle get's downloaded.",
    },
    {
      type: "image",
      src: "images/blogs/forms/mysql-connector.webp",
      alt: "mysql-connector",
    },
    {
      type: "paragraph",
      text:
        "Now got to the http://localhost:4502/system/console/bundles and upload the bundle.",
    },
    {
      type: "image",
      src: "images/blogs/forms/system-console.webp",
      alt: "system-console",
    },
    {
      type: "image",
      src: "images/blogs/forms/system-console-2.webp",
      alt: "system-console-2",
    },
    {
      type: "paragraph",
      text:
        "After uploading the bundle if it appears in system/console/bundles then it has successfully uploaded.",
    },
    {
      type: "image",
      src: "images/blogs/forms/system-console-3.webp",
      alt: "system-console-3",
    },
    {
      type: "paragraph",
      text:
        "After successfully installing the respective database connector you then need to create database so that whatever form you submit, that needs to be submitted to the created database. In this we're creating a database name adaptiveform_db.",
    },
    {
      type: "image",
      src: "images/blogs/forms/Database.webp",
      alt: "Database",
    },
    {
      type: "paragraph",
      text:
        "After creating a database, a configuration needs to be done so that our form model knows in which database he need to submit the data.",
    },
    {
      type: "image",
      src: "images/blogs/forms/configuration.webp",
      alt: "configuration",
    },
    {
      type: "bulletList",
      items: [
        "In Datasource name you can provide any name that you wanted to keep.",
        "In JDBC Driver class you need to provide the driver class of your respective database.",
        "In JDBC Connection URL you need to provide the url of database and proper database name as well.",
        "Then click on save and your configuration is done.",
      ],
    },

    {
      type: "heading",
      level: 3,
      text: "Creating Form Data Model",
    },
    {
      type: "bulletList",
      items: [
        "To create a form data model go to forms.",
        "Then click on data integrations.",
        "Then click on create option.",
        "Inside that you will see form data model option click on it.",
        "After clicking on it, add the title for form data model and click on next.",
        "Then select the data source which you configured in data pooled configuration.",
        "And your form data model is created",
      ],
    },
    {
      type: "paragraph",
      text:
        "After creating the form data model you need to do the required configuration. First you need to add the services GET, INSERT and UPDATE and after adding the services and database you need to test the individual service. After that you need to configure the default services you need for the form data model in this we configured GET, Insert this needs to configured because whenever you create a form your form uses this defualt services to submit the data in to the database.",
    },
    {
      type: "video",
      src: "images/blogs/forms/data-model-creation.mp4",
      alt: "data-model-creation",
    },

    {
      type: "heading",
      level: 3,
      text: "Submitting Form to the Database using Form data model",
    },
    {
      type: "paragraph",
      text:
        "To submit form using form data model we need to follow the below steps:",
    },
    {
      type: "bulletList",
      items: [
        "We need to create an adpative form.",
        "While creating an adaptive form we need to select the proper form data model which we created.",
        "After creating form we need to map the fields of form with data model fields so that proper data gets submitted to respective fields in database.",
        "Need to map submit button with form data model this confiuration is done when we edit the button in submissions we need to select submission type in that we need to select form data model below that we need to provide the form data model endpoint.",
        "After this your form is ready when you fill the data and submit the form it will get submitted to the database.",
      ],
    },
    {
      type: "video",
      src: "images/blogs/forms/form submission.mp4",
      alt: "form-submission",
    },
    {
      type: "paragraph",
      text: "I hope you find this informative and helpful.",
      variant: "closing",
    },
  
    ],
  },
  {
    slug: "ocr-data-aem-forms",
    title: "OCR Data Extraction in AEM Forms",
    category: "AEM Forms",
    date: "2023-06-09",
    author: "Nitish Bisen",
    description:
      "Explore how OCR technology extracts text and structured information from documents in AEM Forms.",
    content: [
      
    {
      type: "heading",
      level: 3,
      text: "OCR Data",
    },
    {
      type: "paragraph",
      text:
        "OCR stands for Optical Character Recognition. OCR data refers to the output generated by OCR software or systems when they scan and convert printed or handwritten text into digital text that computers can understand and process. This data typically includes the recognized text itself, along with information about its formatting, layout, and structure.",
    },
    {
      type: "paragraph",
      text:
        "OCR technology has advanced significantly in recent years, allowing for high accuracy in converting scanned documents, images, or even live text from a camera feed into editable and searchable text. OCR data is valuable in various applications, such as digitizing books and documents, extracting information from forms, enabling text search in scanned documents, and aiding visually impaired individuals in accessing written content.",
    },

    {
      type: "heading",
      level: 3,
      text: "OCR Data Extraction in AEM Forms",
    },
    {
      type: "paragraph",
      text:
        "Optical Character Recognition (OCR) integration in Adobe Experience Manager (AEM) Forms can significantly streamline data extraction from scanned documents or images. Choose a suitable OCR engine based on your requirements. Adobe Acrobat provides OCR capabilities, or you can opt for third-party OCR engines like Tesseract, ABBYY FineReader, or Google Cloud Vision API.",
    },
    {
      type: "paragraph",
      text:
        "Integrate the chosen OCR engine with AEM Forms. This might involve installing plugins, libraries, or APIs provided by the OCR engine provider. Allow users to upload scanned documents or images through AEM Forms. Preprocess the uploaded documents/images if necessary. This may include tasks like image enhancement, noise reduction, or deskewing to improve OCR accuracy. Utilize the integrated OCR engine to extract text from the uploaded documents/images. This step involves passing the document/image to the OCR engine and receiving the extracted text.",
    },
    {
      type: "paragraph",
      text:
        "There are several organizations offering OCR services, and if they have well-documented REST APIs, integrating them with AEM Forms using the data integration capability becomes straightforward. For the sake of this tutorial, we'll showcase OCR data extraction using ID Analyzer for uploaded documents.",
    },
    {
      type: "paragraph",
      text:
        "This update maintains clarity and aligns with the tutorial's purpose, focusing on the integration with ID Analyzer for OCR data extraction.",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/ocr.webp",
      alt: "OCR Data Extraction",
    },

    {
      type: "heading",
      level: 3,
      text: "Create a Swagger File",
    },
    {
      type: "paragraph",
      text:
        "Creating a Swagger file involves defining your API's structure, endpoints, parameters, responses, and other details using the Swagger/OpenAPI Specification. Here's a step-by-step guide to help you create a Swagger file:",
    },
    {
      type: "bulletList",
      items: [
        "Understand Swagger/OpenAPI Specification",
        "Choose a Swagger Editor",
        "Define API Info",
        "Define Paths and Operations",
        "Define Parameters and Responses",
        "Add Security Definitions (if needed)",
        "Export and Save",
        "Validate and Test",
      ],
    },
    {
      type: "paragraph",
      text:
        "Use tools like Swagger Inspector or Postman to validate and test your Swagger file against your actual API endpoints.",
    },
    {
      type: "code",
      language: "yaml",
      code: `swagger: '2.0'
info:
  version: 1.0.0
  title: Simple API
  description: Learning Swagger
host: api.idanalyzer.com

schemes:
  - https
paths:
  /:
    post:
      summary: Decode Documents
      produces:
        - application/json
      consumes:
        - application/x-www-form-urlencoded
      operationId: Decode Documents
      parameters:
        - in: formData
          name: file_base64
          type: string
          description: Base 64 image of the Documents
        - in: formData
          name: apikey
          type: string
          description: API Secret Key

      responses:
        '200':
          description: Successfull Response
          schema:
            $ref: '#/definitions/returnvalue'

definitions:
  result:
    type: object
    properties:
      fullName:
        type: string
      documentNumber:
        type: string
      address:
        type: string
      dob:
        type: string
      pincode:
        type: string

  returnvalue:
    type: object
    properties:
      result:
        type: object
        $ref: '#/definitions/result'`,
    },

    {
      type: "heading",
      level: 3,
      text: "Create a Data Source",
    },
    {
      type: "paragraph",
      text:
        "To connect AEM/AEM Forms with third party api's, you first make a data source in cloud services. You can use the Swagger file to set up this data source.",
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
      src: "images/blogs/ocr-data/ds01.webp",
      alt: "Data Source",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/ds02.webp",
      alt: "Data Source",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/ds03.webp",
      alt: "Data Source",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/ds04.webp",
      alt: "Data Source",
    },

    {
      type: "heading",
      level: 3,
      text: "Create a Form Data Model",
    },
    {
      type: "paragraph",
      text:
        "Creating a form data model in AEM Forms involves defining the structure of your form data, including the fields, data types, and validation rules. Here's a step-by-step guide:",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/fdm01.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/fdm02.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/fdm03.webp",
      alt: "Form Data Model",
    },
    {
      type: "paragraph",
      text: "Select you data source",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/fdm04.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/fdm05.webp",
      alt: "Form Data Model",
    },

    {
      type: "heading",
      level: 3,
      text: "Create a Client Lib",
    },
    {
      type: "paragraph",
      text:
        "To proceed, we'll require the base64 encoded representation of the uploaded document. This encoded string serves as a crucial parameter in our REST invocation process.",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/clib.webp",
      alt: "Client lib",
    },

    {
      type: "heading",
      level: 3,
      text: "Create an Adaptive Form",
    },
    {
      type: "paragraph",
      text:
        "Maximize the potential of your adaptive form by integrating the POST invocations of the Form Data Model. Effortlessly extract valuable data from user-uploaded documents by leveraging this powerful feature. Transmit the base64 encoded string of the uploaded document securely through the form data model's POST invocation, ensuring smooth and efficient data extraction processes. Enhance your adaptive form's functionality and elevate your data collection capabilities with this seamless integration.",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/af01.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/af02.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/af03.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/af04.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/af05.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/af06.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/af07.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "images/blogs/ocr-data/af08.webp",
      alt: "Form Data Model",
    },
    {
      type: "paragraph",
      text:
        "By integrating the POST invocations of the Form Data Model, extracting data from user-uploaded documents becomes a seamless process in adaptive forms. Leveraging the form data model's capabilities allows for efficient transmission of base64 encoded strings, enhancing data extraction and processing. With this integration, adaptive forms are empowered to deliver enhanced functionality and streamlined data collection experiences.",
    },
    {
      type: "paragraph",
      text:
        "I'm glad you found this article interesting and informative! Feel free to share it with your friends to spread the knowledge. Don't forget to follow me for upcoming blogs. Thank you!",
      variant: "closing",
    },
  
    ],
  },
  {
    slug: "sms-twoway-aem-forms",
    title: "Enhancing Security with SMS Two Factor Authentication in AEM Forms",
    category: "AEM Forms",
    date: "2023-06-24",
    author: "Nitish Bisen",
    description:
      "Learn how to strengthen AEM Forms security using SMS-based two-factor authentication.",
    content: [
      
    {
      type: "heading",
      level: 3,
      text: "SMS Two-Factor Authentication",
    },
    {
      type: "paragraph",
      text:
        "In today's digital landscape, security is paramount. With cyber threats evolving constantly, safeguarding user accounts has become a top priority for businesses and individuals alike. One effective way to enhance security is through SMS-based two-factor authentication (2FA), a robust method that adds an extra layer of protection to online accounts. Let's delve into how SMS 2FA works and why it's a crucial tool in the fight against unauthorized access.",
    },
    {
      type: "paragraph",
      text:
        "SMS 2FA adds an extra layer of security by requiring users to verify their identity not only with a password but also with a unique verification code sent to their mobile devices. This blog post dives into the process of implementing SMS 2FA with AEM Forms and highlights its benefits.",
    },

    {
      type: "heading",
      level: 3,
      text: "Create Developer Account",
    },
    {
      type: "paragraph",
      text:
        "Many organizations offer SMS 2FA services, and if they have clear REST APIs, you can integrate them with AEM Forms effortlessly. In this tutorial, I've chosen Vonage API to show how SMS 2FA works with AEM Forms.",
    },
    {
      type: "paragraph",
      text:
        "Begin by creating a developer account on the Vonage API platform. Once you've registered, take note of the API Key and API Secret Key provided by Vonage API Dashboard. These keys are crucial for accessing and using Vonage API's REST APIs effectively.",
    },
    {
      type: "image",
      src: "images/blogs/sms/s2f.png",
      alt: "SMS Two-Factor Authentication",
    },

    {
      type: "heading",
      level: 3,
      text: "Create a Swagger File",
    },
    {
      type: "paragraph",
      text:
        "Creating a Swagger file involves defining your API's structure, endpoints, parameters, responses, and other details using the Swagger/OpenAPI Specification. Here's a step-by-step guide to help you create a Swagger file:",
    },
    {
      type: "bulletList",
      items: [
        "Understand Swagger/OpenAPI Specification",
        "Choose a Swagger Editor",
        "Define API Info",
        "Define Paths and Operations",
        "Define Parameters and Responses",
        "Add Security Definitions (if needed)",
        "Export and Save",
        "Validate and Test",
      ],
    },
    {
      type: "paragraph",
      text:
        "Use tools like Swagger Inspector or Postman to validate and test your Swagger file against your actual API endpoints.",
    },
    {
      type: "code",
      language: "yaml",
      code: `swagger: '2.0'
info:
  version: 1.0.0
  title: Nexmo Verify API
  description: API for verifying OTP codes and sending SMS with codes using Nexmo (formerly Vonage)
host: api.nexmo.com
basePath: /verify
schemes:
  - https
paths:
  /check/json:
    post:
      summary: Verify OTP Code
      produces:
        - application/json
      consumes:
        - application/x-www-form-urlencoded
      operationId: VerifyOTPCode
      parameters:
        - in: formData
          name: api_key
          type: string
          description: API Key
        - in: formData
          name: api_secret
          type: string
          description: API Secret Key
        - in: formData
          name: request_id
          type: string
          description: Vonage Request ID
        - in: formData
          name: code
          type: string
          description: OTP Code
      responses:
        '200':
          description: Successful Response
          schema:
            $ref: '#/definitions/ReturnValue'
  /json:
    post:
      summary: Send SMS with Code
      produces:
        - application/json
      consumes:
        - application/x-www-form-urlencoded
      operationId: SendSMSWithCode
      parameters:
        - in: formData
          name: api_key
          type: string
          description: API Key
        - in: formData
          name: api_secret
          type: string
          description: API Secret Key
        - in: formData
          name: number
          type: string
          description: Number to send SMS
        - in: formData
          name: brand
          type: string
          description: Vonage Brand
        - in: formData
          name: code_length
          type: string
          description: Verification Code Length
      responses:
        '200':
          description: Successful Response
          schema:
            $ref: '#/definitions/ReturnValue'

definitions:
  ReturnValue:
    type: object
    properties:
      request_id:
        type: string
      status:
        type: string`,
    },

    {
      type: "heading",
      level: 3,
      text: "Create a Data Source",
    },
    {
      type: "paragraph",
      text:
        "To connect AEM/AEM Forms with third party api's, you first make a data source in cloud services. You can use the Swagger file to set up this data source.",
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
      src: "images/blogs/sms/ds01.png",
      alt: "Data Source",
    },
    {
      type: "image",
      src: "images/blogs/sms/ds02.png",
      alt: "Data Source",
    },
    {
      type: "image",
      src: "images/blogs/sms/ds03.png",
      alt: "Data Source",
    },

    {
      type: "heading",
      level: 3,
      text: "Create a Form Data Model",
    },
    {
      type: "paragraph",
      text:
        "Creating a form data model in AEM Forms involves defining the structure of your form data, including the fields, data types, and validation rules. Here's a step-by-step guide:",
    },
    {
      type: "image",
      src: "images/blogs/sms/fdm01.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "images/blogs/sms/ds04.png",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "images/blogs/sms/ds05.png",
      alt: "Form Data Model",
    },
    {
      type: "paragraph",
      text: "Select you data source",
    },
    {
      type: "image",
      src: "images/blogs/sms/ds06.png",
      alt: "Form Data Model",
    },
    {
      type: "paragraph",
      text: "Test your Model and Service and save it.",
    },
    {
      type: "image",
      src: "images/blogs/sms/ds07.png",
      alt: "Form Data Model",
    },

    {
      type: "heading",
      level: 3,
      text: "Create an Adaptive Form",
    },
    {
      type: "paragraph",
      text:
        "Connect your form's data with the adaptive form to check the phone number users enter. You can make your own adaptive form and use its data to send and check OTP codes the way you need to.",
    },
    {
      type: "image",
      src: "images/blogs/sms/af01.png",
      alt: "Adaptive Form",
    },
    {
      type: "paragraph",
      text: "Go to properties",
    },
    {
      type: "image",
      src: "images/blogs/sms/af02.png",
      alt: "Adaptive Form",
    },
    {
      type: "paragraph",
      text: "Select your form data model",
    },
    {
      type: "image",
      src: "images/blogs/sms/af004.png",
      alt: "Adaptive Form",
    },
    {
      type: "image",
      src: "images/blogs/sms/af03.png",
      alt: "Adaptive Form",
    },
    {
      type: "paragraph",
      text:
        "Open the form in edit mode. Open the rule editor for the following field. Provide your API key and API Secret Key.",
    },
    {
      type: "image",
      src: "images/blogs/sms/af04.png",
      alt: "Adaptive Form",
    },
    {
      type: "paragraph",
      text: "Always use country code.",
    },
    {
      type: "image",
      src: "images/blogs/sms/af05.png",
      alt: "Adaptive Form",
    },
    {
      type: "paragraph",
      text: "OTP Sent Successfully",
    },
    {
      type: "image",
      src: "images/blogs/sms/af06.png",
      alt: "Adaptive Form",
    },

    {
      type: "paragraph",
      text:
        "In conclusion, SMS-based two-factor authentication enhances security, improves user confidence, and aligns with industry best practices. Integrating SMS 2FA with AEM Forms empowers organizations to protect sensitive data and mitigate security risks effectively. Strengthen your security posture today with SMS 2FA and AEM Forms.",
    },
    {
      type: "paragraph",
      text:
        "I'm glad you found this article interesting and informative! Feel free to share it with your friends to spread the knowledge. Don't forget to follow me for upcoming blogs. Thank you!",
      variant: "closing",
    },
  
    ],
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
    content: [
      {
      type: "paragraph",
      text:
        "This blog aims to guide you through the process of setting up email notifications upon submitting an adaptive form. When users submit an adaptive form, it's essential to acknowledge their submission promptly. By setting up email notifications, you can ensure users receive confirmation and administrators stay informed. A common practice after receiving a submission through an Adaptive Form is to send a confirmation email to the submitter. To set this up, we'll choose the \"Send Email\" option as the submit action.",
    },

    {
      type: "heading",
      level: 2,
      text: "Email Submission Methods",
    },
    {
      type: "paragraph",
      text: "Methods to submit the form via email:",
    },
    {
      type: "numberedList",
      items: [
        "Through an SMTP Server.",
      ],
    },
    {
      type: "paragraph",
      text:
        "For testing purposes, we utilize a Fake SMTP Server. Here's how to set it up:",
    },
    {
      type: "numberedList",
      items: [
        "Download the Fake SMTP Server by searching for it on Google.",
        "Find a reliable source and download the Fake SMTP Server software.",
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/form submission/server.webp",
      alt: "Fake SMTP Server",
    },

    {
      type: "heading",
      level: 2,
      text: "Configuration Needed",
    },
    {
      type: "paragraph",
      text:
        "Before we begin, we need to configure mail services by navigating to the Felix Configuration Manager in your browser. The below screenshot shows you the configuration properties for Adobe mail server.",
    },
    {
      type: "paragraph",
      text: "Configure your Email Configuration",
    },
    {
      type: "image",
      src: "images/blogs/forms/form submission/configuration2.webp",
      alt: "Configuration",
    },
    {
      type: "paragraph",
      text:
        "In your Day CQ Mail Service, add your hostname (which may be localhost) and set the server port according to your server specifications. Then, provide a username and password, and specify the email address to be used in the \"From:\" field of messages sent by the mailer.",
    },

    {
      type: "heading",
      level: 2,
      text: "Create an Adaptive Form",
    },
    {
      type: "paragraph",
      text:
        "After completing the configuration, it's time to create an Adaptive Form. Simply design a form according to your requirements. We've created a registration form.",
    },
    {
      type: "image",
      src: "images/blogs/forms/form submission/regform.webp",
      alt: "registration",
    },
    {
      type: "paragraph",
      text:
        "Now configure the form properties to enable submission and receive email notifications. Follow the below steps:",
    },
    {
      type: "numberedList",
      items: [
        "Navigate to the form and select 'Edit.'",
        "Choose the submission properties.",
        "Select 'Send Email' as the submit action.",
        "In the Action Configuration, input your email address in the 'From' section as specified in the configuration settings.",
        "In the 'To' section, enter ${email} to dynamically capture the recipient's email address.",
        "Provide a suitable subject in the 'Subject' section, such as '${firstName} Form Submission,' ensuring personalization.",
        "Save it",
      ],
    },
    {
      type: "image",
      src: "images/blogs/forms/form submission/formprop.webp",
      alt: "Form properties",
    },
    {
      type: "image",
      src: "images/blogs/forms/form submission/formprop2.webp",
      alt: "Form properties",
    },
    {
      type: "paragraph",
      text:
        "In the subject, I've included ${firstName} Form Submission. This means that the \"firstName\" corresponds to the name property of the First Name textbox. After receiving the email, you'll see the user's first name in the subject line. Once all properties are configured, start your fake SMTP server and submit the form.",
    },

    {
      type: "image",
      src: "images/blogs/forms/form submission/formtest.webp",
      alt: "Test Form",
    },
    {
      type: "image",
      src: "images/blogs/forms/form submission/smtp.webp",
      alt: "SMTP Server",
    },

    {
      type: "paragraph",
      text:
        "I'm glad you found this article interesting and informative! Feel free to share it with your friends to spread the knowledge. Don't forget to follow me for upcoming blogs. Thank you!",
      variant: "closing",
    },
  

    ],
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
