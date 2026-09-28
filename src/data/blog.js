export const articles = [
  {
    slug: "dispatcher",
    title: "Working with Dispatcher",
    category: "Dispatcher",
    date: "2023-04-25",
    author: "Shruti Meshram",
    description:
      "Understand how AEM Dispatcher improves performance, caching, and security for AEM websites.",
    content: [
    {
      type: "paragraph",
      text: "I hope you all are doing well. Let's begin our learning with Dispatcher in AEM.",
    },

    {
      type: "heading",
      level: 2,
      text: "1. Introduction",
    },

    {
      type: "paragraph",
      text: "Dispatcher is an Apache HTTP Web Server. It is used for exercising the functionalities such as caching, load balancing providing and limiting access of domains and security.",
    },

    {
      type: "paragraph",
      text: "AEM publish instance cannot communicate with the dispatcher (web server) and so AEM module helps in the task. It conveys the requests of the dispatcher to the Publish instance and provides the response from the publish instance to the dispatcher back again.",
    },

    {
      type: "paragraph",
      text: "First any request coming from the client goes to Content Delivery Network (CDN), if the response is available, is returned else it goes to Dispatcher where again the response availability is checked in cache. If found it is returned else it goes to the publish instance to fetch the response of the request and travels back the same route to serve the response to the client.",
    },

    {
      type: "paragraph",
      text: "Here we are setting up Apache 2.2 – 32 bit and Dispatcher 4.2.1.",
    },

    {
      type: "heading",
      level: 2,
      text: "2. Setup For Dispatcher",
    },

    {
      type: "list",
      items: [
        "Download the provided version.",
        "After download, open file to install it. You will find the following dialog box, click on next.",
      ],
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/setup_image1.webp",
      alt: "Dispatcher Setup",
      width: {
        xs: "100%",
        sm: "90%",
        md: "80%",
      },
    },

    {
      type: "list",
      items: [
        "Accept the license and click on next and then you will find a Server Information dialog box. Add your respective network domain, server name and a working email address so that you get all the server related problems via email. Select the default port as 80 or else you can change it to 8000 for current user. Here the port is set to 80.",
      ],
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/setup_image2.webp",
      alt: "Dispatcher Setup",
      style: {
        maxWidth: "650px",
      },
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/setup_image3.webp",
      alt: "Dispatcher Setup",
      style: {
        maxWidth: "650px",
      },
    },

    {
      type: "list",
      items: [
        "Click on Next, select Typical and then click on Next again and you will find the default location of installed Apache Server in your system. You can either change it or keep it same.",
      ],
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/setup_image4.webp",
      alt: "Dispatcher Setup",
      style: {
        maxWidth: "650px",
      },
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/setup_image5.webp",
      alt: "Dispatcher Setup",
      style: {
        maxWidth: "650px",
      },
    },

    {
      type: "list",
      items: [
        "Then click on Next, the setup is almost completed, click on install. Installation takes about 5 minutes.",
        "After installation is complete click Finish.",
      ],
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/setup_image6.webp",
      alt: "Dispatcher Setup",
    },

    {
      type: "list",
      items: [
        "Now after completion of installation process we need to check whether everything is properly installed or not. Hit the URL http://localhost to find.",
      ],
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/setup_image7.webp",
      alt: "Dispatcher Setup",
    },

    {
      type: "list",
      items: [
        "Now your dispatcher is installed and is ready to get configured. For configuration purpose you will be requiring disp_apache2.2.dll, dispatcher.any and httpd.conf files. It is recommended to get them from your workspace.",
      ],
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/setup_image8.webp",
      alt: "Dispatcher Setup",
    },

    {
      type: "list",
      items: [
        "Open the Apache and find modules folder. In modules folder paste disp_apache2.2.dll file. Then in conf folder paste dispatcher.any and httpd.conf files.",
      ],
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/setup_image9.webp",
      alt: "Dispatcher Setup",
    },

    {
      type: "list",
      items: [
        "httpd.conf file is the starting point of dispatcher so here you need to add LoadModule which is a DSO (Dynamically Shared Object). You need to provide entry of disp_apache2.2.dll file.",
      ],
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/setup_image10.webp",
      alt: "Dispatcher Setup",
    },

    {
      type: "list",
      items: [
        "In httpd.conf file you find your server root and administrator's email id which you added in server information dialog box.",
        "In IfModule provide location of dispatcher.any and also set the log level. In Directory add the handler and your httpd.conf file is ready.",
      ],
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/setup_image11.webp",
      alt: "Dispatcher Setup",
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/setup_image12.webp",
      alt: "Dispatcher Setup",
    },

    {
      type: "heading",
      level: 2,
      text: "3. Setup For Publish Instance",
    },

    {
      type: "list",
      items: [
        "In order to setup Publish instance copy the jar and license of AEM to a new folder and rename the jar to publish instance jar with required port number. By default it is 4503 but here we have set it to 4506.",
      ],
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/starting-dispatcher.webp",
      alt: "Dispatcher Setup",
    },

    {
      type: "list",
      items: [
        "Then open command prompt and go to the directory where you have your jar and type java -jar cq-publish-4506.jar. This will open your publish instance with following run modes.",
      ],
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/setup_image14.webp",
      alt: "Publish Instance Setup",
    },

    {
      type: "list",
      items: [
        "Now we need to configure the port of publish instance in our author so go to author instance, then go to welcome page of author instance, find Replication options and select Agents on Author. Select Default Agent (publish) and edit.",
        "In Transport tab you will find the url, change the port to 4506.",
      ],
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/setup_image15.webp",
      alt: "Publish Instance Setup",
    },

    {
      type: "list",
      items: [
        "Now in publish instance, upload your project, acs commons and service pack and replicate them all from package manager console.",
        "Service pack may not get replicated from Package Manager Console properly. If so, go to Activate Tree and provide the path of your service pack in crx console and uncheck On Modify. First dry run and see if your service pack is ready to replicate and if yes, then click on Activate.",
      ],
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/setup_image16.webp",
      alt: "Publish Instance Setup",
    },

    {
      type: "list",
      items: [
        "Go to Felix console of publish instance and check whether all your bundles are Active or not once and if no then resolve the remaining dependencies which completes your publish instance setup.",
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "4. dispatcher.any file",
    },

    {
      type: "list",
      items: [
        "dispatcher.any file determines complete behavior of your dispatcher.",
        "It has project specific /farms files (you can have single /farms file too, there is no restriction) where each farm file configures a set of load balanced renders.",
        "Set your publish instance as a render via setting its port and IP address.",
      ],
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/setup_image17.webp",
      alt: "dispatcher.any",
    },

    {
      type: "list",
      items: [
        "In /virtualhosts file we configure domains which are allowed in headers. Set your preferred domains here.",
        "/filter section sets the paths of requests that you want your dispatcher to handle. You can enable open consoles (crx content repository, OSGI console, servlet engines), non-public content directories (/bin, /content, /home and so on) and can also deny content grabbing.",
        "/cache section consists of a docroot file wherein the dispatcher will store files relative to this directory, decline the subsequent requests and allow the web server to deliver them as regular static content.",
        "/statfileslevel indicates the hierarchy up to which a .stat file gets created that checks the time of cache in the dispatcher and that of replication in publish environment. If time of modification in publish environment is greater than that of the cache then it means there is an updated version available and this will delete the previously generated cache and allow the entry of new cache in the provided level.",
        "In /rules section of /cache we have to specify how caching should happen according to the url generated. You can have your own rule sets.",
      ],
    },

    {
      type: "image",
      src: "/images/blogs/dispatcher/setup_image18.webp",
      alt: "dispatcher.any",
    },

    {
      type: "list",
      items: [
        "Within the cache section we have /invalidate wherein we define which request needs to be available for dispatcher flushing after activation. You can set the dispatcher flush agent on both Author as well as on Publish but prefer setting it on publish because author is a development environment and modifications are tend to happen whereas publish is a read-only environment where unusual modifications happen only via publishing the pages by author instance.",
        "Set the clients which can activate the content in /allowedClients section by providing the IP address and setting the /type “allow”.",
        "/ignoreUrlParams section allows you to ignore query parameters passed in the url while caching the response.",
        "Finally you can enable /auth_checker to check the whether the cached page which is requested for delivery matches its header with that of the one which is allowed via /filters by internally passing ‘?uri=’ parameter. If the status code becomes 200 then only the page is sent out for the delivery.",
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "5. Publishing The Content And Checking On Dispatcher",
    },

    {
      type: "list",
      items: [
        "Simply go to your author instance and select the page that you want to publish and hit Quick Publish.",
        "Then go to your publish instance and check whether your published page is visible or not.",
        "Go to your dispatcher and type http://localhost/ complete path of your page and done.",
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "6. Errors And Possible Solutions",
    },

    {
      type: "list",
      items: [
        {
          title: "Service pack is not getting uploaded",
          text: "replicate it in package manager and then use Activation tree from author instance to achieve the same.",
        },
        {
          title: "Bundle is not getting uploaded",
          text: "Try force upload of snapshot of your project from packageManager(zip) or upload extracted snapshot from Felix console (do not forget to check start bundle) or (least recommended) change the port of your project’s pom.xml file to 4506 from 4503 and do single package.",
        },
        {
          title: "Socket Error",
          text: "Recheck your IP address in Allowed Clients section.",
        },
        {
          title: "Null Pointer Exception",
          text: "Agents on Author, Publish Queue might not be idle.",
        },
        {
          title: "Problem in triggering the jar of publish instance",
          text: "rename the quickstart file to crx-quickstart-old. Abort the starting process of from command prompt and rerun java -jar cq-publish-4506.jar. You will find a new quickstart file now which gets generated with respective script.",
        },
      ],
    },

    {
      type: "paragraph",
      text: "I hope you find this blog informative, please share and for more blogs please surf our website.",
    },

    {
      type: "paragraph",
      text: "Thank you",
    },
  ],
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
    content: [
    {
      type: "paragraph",
      text: "The basic concept is to map the AEM component to React component. Basically, the AEM Component runs at the server side and exports the content in the form of JSON Model API, so that the JSON file, for example en.model.json, is consumed by our React Component running at the client side in the browser. We'll know more about the following concept with the help of the following diagram.",
    },

    {
      type: "image",
      src: "/images/blogs/spa/spa-component-mapping/flowchart.webp",
      alt: "AEM Flowchart",
    },

    {
      type: "heading",
      level: 2,
      text: "Steps to map AEM component to React component",
    },

    {
      type: "numberedList",
      items: [
        {
          title: "Create an AEM component",
          text: "Create an AEM component by right clicking on the components folder under the wknd-spa-react project and selecting Create Component. Add the label, title and component group to the component and create it.",
        },
        {
          title: "Create the dialog",
          text: "Let's consider 'test' as our component in the wknd-spa-react project and its path will be wknd-spa-react/components/test. Create the dialog box through which the author can author the fields.",
        },
        {
          title: "Create a Sling Model",
          text: "Create a Sling Model so that you can map the authored values with the backend. Add adaptables, adapters and resourceType to the @Model annotation. Inherit the ComponentExporter interface to the service implementation class, and override the getExportedType() method which returns the resourceType of the component.",
        },
      ],
    },

    {
      type: "image",
      src: "/images/blogs/spa/spa-component-mapping/createaemcomponent.webp",
      alt: "Creating AEM Component",
    },

    {
      type: "image",
      src: "/images/blogs/spa/spa-component-mapping/testcomponent.webp",
      alt: "Test Component Image",
    },

    {
      type: "code",
      language: "java",
      code: `package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import com.adobe.aem.guides.wknd.spa.react.core.models.Test;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
    adaptables = SlingHttpServletRequest.class,
    adapters = {Test.class, ComponentExporter.class},
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
    resourceType = TestModelImpl.RESOURCE_TYPE
)
@Exporter(
    name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
    extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class TestModelImpl implements Test {

    static final String RESOURCE_TYPE =
        "wknd-spa-react/components/test";

    @ValueMapValue
    private String name;

    @Override
    public String getName() {
        return name;
    }

    @Override
    public String getExportedType() {
        return TestModelImpl.RESOURCE_TYPE;
    }
}`,
    },

    {
      type: "paragraph",
      text: "It is mandatory to implement ComponentExporter as it is used to export the content of our component in JSON format.",
    },

    {
      type: "image",
      src: "/images/blogs/spa/spa-component-mapping/GetExporterType Method.webp",
      alt: "Component Exporter Method",
    },

    {
      type: "paragraph",
      text: "On hitting test.model.json you will find the response in JSON format.",
    },

    {
      type: "image",
      src: "/images/blogs/spa/spa-component-mapping/jsonfile.webp",
      alt: "en.model.json URL Image",
    },

    {
      type: "paragraph",
      text: "In the ui.frontend folder/src, right click on the components folder and create a Test.js file. Import React and MapTo from the react and @adobe/aem-react-editable-components libraries.",
    },

    {
      type: "image",
      src: "/images/blogs/spa/spa-component-mapping/reactcomponent.webp",
      alt: "Creating React Component",
    },

    {
      type: "paragraph",
      text: "Create a class component and write a JSX script in the render() method. At last, add the MapTo() function and export the class using the AEM component resource type.",
    },

    {
      type: "code",
      language: "javascript",
      code: `import React, { Component } from "react";
import { MapTo } from "@adobe/aem-react-editable-components";

export const TestEditConfig = {
  emptyLabel: "Test",
  isEmpty: function (props) {
    return !props || !props.name;
  },
};

export default class Test extends Component {
  render() {
    if (TestEditConfig.isEmpty(this.props)) {
      return null;
    }

    return (
      <p className="TestComponents">
        {this.props.name}
      </p>
    );
  }
}

MapTo("wknd-spa-react/components/test")(Test, TestEditConfig);`,
    },

    {
      type: "paragraph",
      text: "With MapTo() you can map your React component to the Sling Model using the resourceType.",
    },

    {
      type: "image",
      src: "/images/blogs/spa/spa-component-mapping/maptomethod.webp",
      alt: "Map To Method Image",
    },

    {
      type: "paragraph",
      text: "Import your React component in the import-component.js file and similarly import your import-component.js file in index.js.",
    },

    {
      type: "image",
      src: "/images/blogs/spa/spa-component-mapping/importreactcomponent.webp",
      alt: "Import Component.js Image",
    },

    {
      type: "paragraph",
      text: "MapTo() will look for the Sling Model registered with the same resource type that we have passed in MapTo().",
    },

    {
      type: "paragraph",
      text: "Build the ui.frontend folder with $ mvn clean install -PautoInstallPackage. Search for your component and you will find the minified form of JavaScript in the ui.apps folder.",
    },

    {
      type: "image",
      src: "/images/blogs/spa/spa-component-mapping/minifiedjs.webp",
      alt: "Minified JS Image",
    },

    {
      type: "paragraph",
      text: "Deploy the SPA code to AEM using Maven: $ mvn clean install -PautoInstallSinglePackage.",
    },

    {
      type: "paragraph",
      text: "Open AEM, select Sites from Navigation, click on the Create button and select Page. Choose the template, add a title to the page and click Done.",
    },

    {
      type: "image",
      src: "/images/blogs/spa/spa-component-mapping/createaempage.webp",
      alt: "Creating AEM Page",
    },

    {
      type: "paragraph",
      text: "Add the 'test' component, author it and you will find the data rendered on your page.",
    },

    {
      type: "image",
      src: "/images/blogs/spa/spa-component-mapping/Add component on page.webp",
      alt: "Adding Component To Page",
    },

    {
      type: "paragraph",
      text: "Click on Preview and inspect your page. In the Network tab you will find en.model.json. The Layout Container has a sling:resourceType of your component and is recognized by the SPA Editor using the :type property, just like the Text and Image components.",
    },

    {
      type: "image",
      src: "/images/blogs/spa/spa-component-mapping/responsivegrid.webp",
      alt: "Inspect test.model.json Image",
    },
  ],
  },
  {
    slug: "spa-getting-started",
    title: "Getting started with AEM SPA",
    category: "AEM SPA",
    date: "2023-03-29",
    author: "Suchita Mishra",
    description:
      "Explore the fundamentals of AEM SPA Editor and how to build single-page applications with AEM.",
    content: [
    {
      type: "paragraph",
      text: "Welcome to the blog designed for developers new to the AEM SPA concept. This blog will walk you through some of the well known questions like What is SPA? Why SPA? and mainly Why SPA with AEM? We'll cover these questions in this blog.",
    },

    {
      type: "paragraph",
      text: "Firstly we'll look into the approaches that we have with us to build a web application.",
    },

    {
      type: "heading",
      level: 2,
      text: "Approaches",
    },

    {
      type: "list",
      items: [
        {
          title: "Traditional Approach ( Client - Server )",
          text: "In traditional approach, the client makes a request of a page to the server and the server will return the HTML i.e., the content, and when the client needs another page, he makes another request to the server and the server will return the different responses for the specified content.",
        },
        {
          title: "Single Page Application (SPA)",
          text: "In SPA, the client makes the initial request and the server responds with the content and as much as possible content with the initial request. When a client has some content and it's moving from page to page, it doesn't make any request to the server and all the content is present at the client side only.",
        },
      ],
    },

    {
      type: "image",
      src: "/images/blogs/spa/getting-started-with-AEM-SPA/Initial Request 1.webp",
      alt: "traditional approach",
    },

    {
      type: "image",
      src: "/images/blogs/spa/getting-started-with-AEM-SPA/Initial Request 2.webp",
      alt: "SPA approach",
    },

    {
      type: "paragraph",
      text: "If a client makes some request which is not present at the client side, in that case the client will make the request to the server for the specific content and the server will return the content in the form of Json.",
    },

    {
      type: "paragraph",
      text: "With SPA, the initial request is a bit slow as the server tries to dump the content as much as possible as per the SPA configurations, but the subsequent request is faster as the client serves the content from the client side only and not the server side.",
    },

    {
      type: "heading",
      level: 2,
      text: "What is SPA?",
    },

    {
      type: "paragraph",
      text: "SPA stands for Single Page Application. It is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. In a traditional multi-page application, when you navigate from one page to another, the browser requests a new page from the server, and the entire page is reloaded.",
    },

    {
      type: "paragraph",
      text: "In contrast, a Single Page Application loads a single HTML page and dynamically updates it's content as the user interacts with the application. This is often achieved using JavaScript frameworks or libraries such as Angular, React, or Vue.js. SPAs provide a smoother and more seamless user experience because they can update specific parts of the page without requiring a full page reload.",
    },

    {
      type: "heading",
      level: 2,
      text: "Why SPA?",
    },

    {
      type: "paragraph",
      text: "Single Page Applications (SPAs) are favored for several reasons, and their adoption is driven by the desire to enhance user experiences and streamline web development. Here are some key reasons why SPAs are often preferred:",
    },

    {
      type: "list",
      items: [
        {
          title: "Seamless User Experience",
          text: "SPAs provide a smoother and more seamless user experience by dynamically updating content without the need for full page reloads. This leads to faster response times and a more fluid interaction, creating a more engaging and enjoyable user interface.",
        },
        {
          title: "Reduced Loading Time",
          text: "Traditional multi-page applications often involve reloading the entire page, resulting in longer loading times. SPAs, on the other hand, load initial resources upfront and fetch additional data asynchronously, reducing latency and making the application feel more responsive.",
        },
        {
          title: "Asynchronous Data Loading",
          text: "SPAs leverage asynchronous data loading, often using AJAX or similar techniques. This allows for fetching data in the background, updating the content without requiring a complete page refresh. It contributes to a dynamic and interactive user experience.",
        },
        {
          title: "Efficient Resource Utilization",
          text: "SPAs can be more resource-efficient as they load resources, such as scripts and stylesheets, only once during the initial page load. Subsequent interactions with the application involve fetching only the necessary data, minimizing redundant requests to the server.",
        },
        {
          title: "Client-Side Routing",
          text: "SPAs handle navigation on the client side, updating the URL and rendering content dynamically. This reduces the need for server requests during navigation, contributing to a more responsive and fluid application.",
        },
        {
          title: "Mobile Responsiveness",
          text: "SPAs are well-suited for mobile devices due to their ability to load content dynamically and provide a responsive user interface. This is crucial in the current era where a significant portion of web traffic comes from mobile devices.",
        },
        {
          title: "Support for Offline Mode",
          text: "Some SPAs can incorporate service workers and caching strategies, enabling them to function partially or entirely offline. This is particularly beneficial for users with intermittent internet connectivity.",
        },
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "Why SPA with AEM?",
    },

    {
      type: "image",
      src: "/images/blogs/spa/getting-started-with-AEM-SPA/Initial Request 3.webp",
      alt: "SPA with AEM",
    },

    {
      type: "paragraph",
      text: "Both SPA & AEM have different architectures and the advantage of SPA is high performance, AEM has a client server architecture and we must say that one of the biggest advantages of AEM is authoring. So, if we integrate these things together i.e the capability of SPA and the capability of AEM, would result in a very powerful AEM SPA application.",
    },

    {
      type: "heading",
      level: 2,
      text: "How can we implement SPA in AEM?",
    },

    {
      type: "paragraph",
      text: "There are basically four technologies/frameworks to develop SPA:",
    },

    {
      type: "list",
      items: [
        "React JS",
        "Angular JS",
        "Vue JS",
        "Handlebar & Ember",
      ],
    },

    {
      type: "paragraph",
      text: "We would be working with React js to develop an AEM SPA application.",
    },

    {
      type: "heading",
      level: 2,
      text: "Creating an AEM SPA Project",
    },

    {
      type: "paragraph",
      text: "Note: Ensure that a fresh instance of AEM, started in Author mode, is running locally.",
    },

    {
      type: "paragraph",
      text: "Create the project:",
    },

    {
      type: "numberedList",
      items: [
        "Open the command line terminal and enter the following maven command.",
      ],
    },

    {
      type: "code",
      language: "bash",
      code: `mvn -B org.apache.maven.plugins:maven-archetype-plugin:3.2.1:generate -D
archetypeGroupId=com.adobe.aem -D archetypeArtifactId=aem-project-archetype -D
archetypeVersion=35 -D appTitle="SPA React" -D appId="spa-react" -D
artifactId="aem-spa.react" -D groupId="com.adobe.aem.spa.react" -D
frontendModule="react" -D aemVersion=6.5.0`,
    },

    {
      type: "paragraph",
      text: "[ Replace the AEM version accordingly ]",
    },

    {
      type: "paragraph",
      text: "The following folder and file structure is generated by the maven archetype on our local file system & each folder represents an individual Maven module.",
    },

    {
      type: "image",
      src: "/images/blogs/spa/getting-started-with-AEM-SPA/SPA Folder structure.webp",
      alt: "SPA folder structure",
    },

    {
      type: "paragraph",
      text: "We will primarily be working with the ui.frontend module, which is the React app.",
    },

    {
      type: "paragraph",
      text: "Deploy and build the project using the following command:",
    },

    {
      type: "code",
      language: "bash",
      code: "mvn clean install -PautoInstallSinglePackage",
    },

    {
      type: "paragraph",
      text: "The build will take around a minute and should end with the BUILD SUCCESS message.",
    },

    {
      type: "heading",
      level: 2,
      text: "Ui.Frontend Module",
    },

    {
      type: "paragraph",
      text: "Ui.frontend module has the following folder structure",
    },

    {
      type: "image",
      src: "/images/blogs/spa/getting-started-with-AEM-SPA/UI Frontend FS.webp",
      alt: "UI frontend folder structure",
    },

    {
      type: "paragraph",
      text: "There are few important files that we should know in this structure i.e., .env.development, package.json & clientlib.config.js",
    },

    {
      type: "heading",
      level: 3,
      text: ".env.development",
    },

    {
      type: "image",
      src: "/images/blogs/spa/getting-started-with-AEM-SPA/env.webp",
      alt: "env development",
    },

    {
      type: "paragraph",
      text: "This file contains the path of the JSON API which is consumed by the react app to display the content on the frontend module and also the root path of the frontend module.",
    },

    {
      type: "paragraph",
      text: "We can provide the content to the frontend in two ways:",
    },

    {
      type: "numberedList",
      items: [
        {
          title: "via AEM",
          text: "We need to provide the proxy path to the AEM which is added in the package.json file.",
        },
        {
          title: "via static mock file",
          text: "The static mock json file is added under the public folder.",
        },
      ],
    },

    {
      type: "image",
      src: "/images/blogs/spa/getting-started-with-AEM-SPA/proxy path.webp",
      alt: "proxy path",
    },

    {
      type: "image",
      src: "/images/blogs/spa/getting-started-with-AEM-SPA/mock file path.webp",
      alt: "mock file path",
    },

    {
      type: "heading",
      level: 3,
      text: "package.json",
    },

    {
      type: "paragraph",
      text: "This file consists of all the dependencies and the scripts required for the frontend module.",
    },

    {
      type: "heading",
      level: 3,
      text: "clientlib.config.js",
    },

    {
      type: "paragraph",
      text: "This file has the configuration for the clientlib generator, i.e., the clientlibs are generated in this file.",
    },

    {
      type: "heading",
      level: 3,
      text: "src folder",
    },

    {
      type: "paragraph",
      text: "All the React components, images and styles are kept in this folder",
    },

    {
      type: "image",
      src: "/images/blogs/spa/getting-started-with-AEM-SPA/src folder.webp",
      alt: "src folder",
    },

    {
      type: "heading",
      level: 2,
      text: "How to create an SPA component?",
    },

    {
      type: "image",
      src: "/images/blogs/spa/getting-started-with-AEM-SPA/Initial Request 4.webp",
      alt: "SPA component creation",
    },

    {
      type: "paragraph",
      text: "In normal cases, AEM components render at server side, but SPA components should be rendered at client side as per the concept. So we'll be creating a React component and then we'll map the AEM component to the React component.",
    },

    {
      type: "paragraph",
      text: "The AEM component will not be having any rendering script, it will only have the dialog and the SPA component will have the rendering logic and this SPA component will get content from the AEM repository in the form of Json, and this complete client side application will be deployed in AEM in the form of client libraries.",
    },

    {
      type: "paragraph",
      text: "Our SPA component should have the capability of authoring as well, as per the AEM basic principles. So, for authoring, the SPA development framework provides an SPA editor.",
    },

    {
      type: "paragraph",
      text: "SPA Editor: It adds the capability of authoring to the SPA component.",
    },

    {
      type: "paragraph",
      text: "Now, coming to the creation of the SPA component, so basically SPA component has two parts i.e, AEM component and React component and when we combine these two it makes a complete SPA component",
    },

    {
      type: "image",
      src: "/images/blogs/spa/getting-started-with-AEM-SPA/Initial Request 5.webp",
      alt: "SPA component",
    },

    {
      type: "paragraph",
      text: "These two sections have different responsibilities:",
    },

    {
      type: "paragraph",
      text: "AEM component is used to create dialog and sling model (used for content exporter) and the React component is used for rendering and the content for rendering is provided by the sling model in the form of json.",
    },

    {
      type: "paragraph",
      text: "But these two sections must be mapped as AEM component is at server side and React component is at client side. So, now the SPA framework comes into picture i.e., the React framework as it provides the functionality to map the AEM component to the React component.",
    },

    {
      type: "paragraph",
      text: "So, once we have a React component and an AEM component, we map both the components using MapTo() functionality which has two sections, the first section has the resource type of the AEM component & the other section is for the React component",
    },

    {
      type: "image",
      src: "/images/blogs/spa/getting-started-with-AEM-SPA/Initial Request 6.webp",
      alt: "SPA component mapping",
    },

    {
      type: "paragraph",
      text: "Hope you all understood the basic concept of AEM SPA. In the next blog, we'll look into how to create AEM components and React components and implement the mapping and rendering of the SPA components on the page.",
    },

    {
      type: "paragraph",
      text: "Thanks for reading! 😁",
    },
  ],
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
        type: "centerParagraph",
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
        type: "centerParagraph",
        text: "Select Image Choice component to add image.",
      },
      {
        type: "image",
        src: "images/blogs/forms/google-api-form/af-03.webp",
        alt: "Adaptive Form Home",
      },
      {
        type: "centerParagraph",
        text: "Select multiple Text Box to fetch data dynamically.",
      },
      {
        type: "image",
        src: "images/blogs/forms/google-api-form/af-04.webp",
        alt: "Adaptive Form Home",
      },
      {
        type: "centerParagraph",
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
        type: "centerParagraph",
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
        type: "centerParagraph",
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
    content: [
    {
      type: "paragraph",
      text: "Happy to find you here. Welcome to another learning.",
    },

    {
      type: "heading",
      level: 2,
      text: "What is Placeholder?",
    },

    {
      type: "paragraph",
      text: "Placeholders in AEM Edge Delivery Services (EDS) are dynamically replaceable tokens or variables used to customize content based on contextual data. They act as placeholders for dynamic values that are resolved at runtime, such as user-specific details, device information, geolocation, or other attributes.",
    },

    {
      type: "paragraph",
      text: "In most websites, there are strings or variables that are used throughout the site. Especially in sites that support multiple languages, it is not a good idea to hard code such values. Instead, placeholders can be used and managed centrally.",
    },

    {
      type: "paragraph",
      text: "Placeholders can be managed as a spreadsheet that is either in the root folder of the project or in the locales root folder in the case of a multilingual site.",
    },

    {
      type: "paragraph",
      text: "In this blog, we will explain the placeholder concept using a multilingual site example where region-specific content is displayed using placeholders.",
    },

    {
      type: "heading",
      level: 2,
      text: "Steps to implement placeholder for region-specific content",
    },

    {
      type: "numberedList",
      items: [
        {
          title: "Create language-specific placeholder files",
          text: "Let's say we have a site that is initially available only in English but is later expanded to French. To display the same content in both languages, create a placeholder sheet in each English and French hierarchy.",
        },
      ],
    },

    {
      type: "image",
      src: "images/blogs/eds/placeholders-in-Edge-Delivery-Services/language-specific-files.webp",
      alt: "Language-specific placeholder files",
    },

    {
      type: "numberedList",
      items: [
        {
          title: "Add Key and Text columns",
          text: "Inside the placeholder sheet, create two columns: Key and Text. For example, the English value can be 'First Name', while the French value can be 'Prénom'. The corresponding language value will then be displayed on the site.",
        },
      ],
    },

    {
      type: "image",
      src: "images/blogs/eds/placeholders-in-Edge-Delivery-Services/placeholder-spreadsheet-content.webp",
      alt: "Placeholder spreadsheet content",
    },

    {
      type: "numberedList",
      items: [
        {
          title: "Add page metadata",
          text: "Use page metadata to determine which placeholder values should be displayed. In this example, locale and Language metadata are added to the English and French pages.",
        },
      ],
    },

    {
      type: "image",
      src: "images/blogs/eds/placeholders-in-Edge-Delivery-Services/metadata-for-locale.webp",
      alt: "Metadata for locale",
    },

    {
      type: "numberedList",
      items: [
        {
          title: "Create the Author block",
          text: "Inside the English and French pages, create an Author block containing only the block heading. The remaining data will be populated using JavaScript.",
        },
      ],
    },

    {
      type: "image",
      src: "images/blogs/eds/placeholders-in-Edge-Delivery-Services/Author-block.webp",
      alt: "Author block",
    },

    {
      type: "numberedList",
      items: [
        {
          title: "Customize placeholder file loading",
          text: "EDS provides an inbuilt library to read the placeholder file from the root folder. In this implementation, the logic is customized so that the placeholder file is read from the respective 'en' or 'fr' hierarchy based on the prefix available in aem.js.",
        },
      ],
    },

    {
      type: "image",
      src: "images/blogs/eds/placeholders-in-Edge-Delivery-Services/aemjs-code.webp",
      alt: "AEM JavaScript placeholder logic",
    },

    {
      type: "numberedList",
      items: [
        {
          title: "Create the block JavaScript and CSS",
          text: "Write the required CSS and JavaScript for the block. The block reads the placeholder values and displays the corresponding content in English and French on their respective pages.",
        },
      ],
    },

    {
      type: "image",
      src: "images/blogs/eds/placeholders-in-Edge-Delivery-Services/block-code.webp",
      alt: "Placeholder block code",
    },

    {
      type: "paragraph",
      text: "The metadata property 'locale' is read from the page, and based on its value, the corresponding placeholder values are retrieved and displayed on the page.",
    },

    {
      type: "image",
      src: "images/blogs/eds/placeholders-in-Edge-Delivery-Services/final-output.webp",
      alt: "Final placeholder output",
    },

    {
      type: "paragraph",
      text: "Thanks for reading 😄",
    },
  ],
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
