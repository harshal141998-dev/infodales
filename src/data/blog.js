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
