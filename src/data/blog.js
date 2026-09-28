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
        src: "/images/blogs/dispatcher/dispatcher/setup_image1.webp",
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
        src: "/images/blogs/dispatcher/dispatcher/setup_image2.webp",
        alt: "Dispatcher Setup",
        style: {
          maxWidth: "650px",
        },
      },

      {
        type: "image",
        src: "/images/blogs/dispatcher/dispatcher/setup_image3.webp",
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
        src: "/images/blogs/dispatcher/dispatcher/setup_image4.webp",
        alt: "Dispatcher Setup",
        style: {
          maxWidth: "650px",
        },
      },

      {
        type: "image",
        src: "/images/blogs/dispatcher/dispatcher/setup_image5.webp",
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
        src: "/images/blogs/dispatcher/dispatcher/setup_image6.webp",
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
        src: "/images/blogs/dispatcher/dispatcher/setup_image7.webp",
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
        src: "/images/blogs/dispatcher/dispatcher/setup_image8.webp",
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
        src: "/images/blogs/dispatcher/dispatcher/setup_image9.webp",
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
        src: "/images/blogs/dispatcher/dispatcher/setup_image10.webp",
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
        src: "/images/blogs/dispatcher/dispatcher/setup_image11.webp",
        alt: "Dispatcher Setup",
      },

      {
        type: "image",
        src: "/images/blogs/dispatcher/dispatcher/setup_image12.webp",
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
        src: "/images/blogs/dispatcher/dispatcher/starting-dispatcher.webp",
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
        src: "/images/blogs/dispatcher/dispatcher/setup_image14.webp",
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
        src: "/images/blogs/dispatcher/dispatcher/setup_image15.webp",
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
        src: "/images/blogs/dispatcher/dispatcher/setup_image16.webp",
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
        src: "/images/blogs/dispatcher/dispatcher/setup_image17.webp",
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
        src: "/images/blogs/dispatcher/dispatcher/setup_image18.webp",
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
        src: "/images/blogs/dispatcher/aemcaas-dispatcher/aio-cli-tools.webp",
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
        src: "/images/blogs/dispatcher/aemcaas-dispatcher/dispatcher-config.webp",
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
        src: "/images/blogs/dispatcher/aemcaas-dispatcher/dispatcher-logs.webp",
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
        src: "/images/blogs/dispatcher/aemcaas-dispatcher/dispatcher-phases.webp",
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
        src: "/images/blogs/dispatcher/aemcaas-dispatcher/starting-dispatcher.webp",
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
    content: [
      {
        type: "paragraph",
        text: "Happy to find you here. Welcome to another learning.",
      },

      {
        type: "heading",
        level: 2,
        text: "What is Indexing?",
      },

      {
        type: "paragraph",
        text:
          "Indexing is the process of organizing data in a way that makes it faster and more efficient to search, retrieve, and access specific information. In the context of databases, search engines, or content management systems like Adobe Experience Manager (AEM), indexing involves creating a structured data representation that allows queries to execute more quickly.",
      },

      {
        type: "paragraph",
        text:
          "In AEM EDS, the index is kept in a spreadsheet and can be accessed using JSON. You can index the entire site, index a specific section of your website, or choose which properties you want to index from a page. You can also index a particular section from a page.",
      },

      {
        type: "heading",
        level: 2,
        text: "Steps to Perform Indexing",
      },

      {
        type: "heading",
        level: 3,
        text: "Step 1: Create the query-index file",
      },

      {
        type: "paragraph",
        text:
          "Create an Excel file with the name \"query-index.xlsx\" in the root folder of your project.",
      },

      {
        type: "image",
        src: "images/blogs/eds/indexing-eds/query-index-file.webp",
        alt: "query-index.xlsx file in the project root folder",
        style: {
          maxWidth: "450px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 2: Create the raw_index sheet",
      },

      {
        type: "paragraph",
        text: "Inside this file, create a sheet with the name \"raw_index\".",
      },

      {
        type: "image",
        src: "images/blogs/eds/indexing-eds/raw-index-sheet.webp",
        alt: "raw_index sheet inside query-index.xlsx",
        style: {
          maxWidth: "350px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 3: Add the headers to index",
      },

      {
        type: "paragraph",
        text:
          "Next, in that sheet add path as a header, and add the other properties that you want to index. For example, if you want to index on the basis of metadata, you add title and it will pick og:title. Similarly, you can add a response header as well.",
      },

      {
        type: "image",
        src: "images/blogs/eds/indexing-eds/headers-raw-index-sheet.webp",
        alt: "raw_index sheet with header columns",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "The highlighted properties can be added as headers in the document, and the property mentioned on the right-hand side is the one picked from the meta tags. These are not limited to the properties shown. Whatever property you add in a meta tag can be added in the query-index Excel file, and it will be picked from that meta tag.",
      },

      {
        type: "paragraph",
        text:
          "\"Last modified\" is the only property that is picked from a response header.",
      },

      {
        type: "image",
        src: "images/blogs/eds/indexing-eds/meta-tag-properties.webp",
        alt: "Index properties and the meta tags they are picked from",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 4: Publish the page",
      },

      {
        type: "paragraph",
        text:
          "Content is only indexed when you publish the page. I have a page named test under the cms folder. As soon as I publish it, it is reflected in the query-index Excel file, and it has also picked the metadata properties available on the page, as you can see in the image below.",
      },

      {
        type: "image",
        src: "images/blogs/eds/indexing-eds/displaying-index-properties.webp",
        alt: "Published page appearing in the query-index with its metadata",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 2,
        text: "Excluding a Page from the Index",
      },

      {
        type: "paragraph",
        text:
          "If you do not want to index a particular page, create a metadata block on that page and add the property \"Robots\" with the value \"noindex\".",
      },

      {
        type: "image",
        src: "images/blogs/eds/indexing-eds/metadata-block.webp",
        alt: "Metadata block with Robots set to noindex",
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
      src: "/images/blogs/forms/form-rule-editor/clientlib_property.webp",
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
      src: "/images/blogs/forms/form-rule-editor/folder_Structure.webp",
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
      src: "/images/blogs/forms/form-rule-editor/blog_js.webp",
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
      src: "/images/blogs/forms/form-rule-editor/form_image.webp",
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
      src: "/images/blogs/forms/form-rule-editor/propertyadded.webp",
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
      src: "/images/blogs/forms/form-rule-editor/functiovisible.webp",
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
      src: "/images/blogs/forms/form-rule-editor/funnctionset.webp",
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
      src: "/images/blogs/forms/form-rule-editor/agefiled.webp",
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
      src: "/images/blogs/forms/form-rule-editor/screen-capture.mp4",
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
      src: "/images/blogs/forms/submitting-adaptive-form/flowchart.webp",
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
      src: "/images/blogs/forms/submitting-adaptive-form/mysql-connector.webp",
      alt: "mysql-connector",
    },
    {
      type: "paragraph",
      text:
        "Now got to the http://localhost:4502/system/console/bundles and upload the bundle.",
    },
    {
      type: "image",
      src: "/images/blogs/forms/submitting-adaptive-form/system-console.webp",
      alt: "system-console",
    },
    {
      type: "image",
      src: "/images/blogs/forms/submitting-adaptive-form/system-console-2.webp",
      alt: "system-console-2",
    },
    {
      type: "paragraph",
      text:
        "After uploading the bundle if it appears in system/console/bundles then it has successfully uploaded.",
    },
    {
      type: "image",
      src: "/images/blogs/forms/submitting-adaptive-form/system-console-3.webp",
      alt: "system-console-3",
    },
    {
      type: "paragraph",
      text:
        "After successfully installing the respective database connector you then need to create database so that whatever form you submit, that needs to be submitted to the created database. In this we're creating a database name adaptiveform_db.",
    },
    {
      type: "image",
      src: "/images/blogs/forms/submitting-adaptive-form/Database.webp",
      alt: "Database",
    },
    {
      type: "paragraph",
      text:
        "After creating a database, a configuration needs to be done so that our form model knows in which database he need to submit the data.",
    },
    {
      type: "image",
      src: "/images/blogs/forms/submitting-adaptive-form/configuration.webp",
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
      src: "/images/blogs/forms/submitting-adaptive-form/data-model-creation.mp4",
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
      src: "/images/blogs/forms/submitting-adaptive-form/form submission.mp4",
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
      src: "/images/blogs/forms/ocr-data-aem-forms/ocr.webp",
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
      src: "/images/blogs/forms/ocr-data-aem-forms/ds01.webp",
      alt: "Data Source",
    },
    {
      type: "image",
      src: "/images/blogs/forms/ocr-data-aem-forms/ds02.webp",
      alt: "Data Source",
    },
    {
      type: "image",
      src: "/images/blogs/forms/ocr-data-aem-forms/ds03.webp",
      alt: "Data Source",
    },
    {
      type: "image",
      src: "/images/blogs/forms/ocr-data-aem-forms/ds04.webp",
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
      src: "/images/blogs/forms/ocr-data-aem-forms/fdm01.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "/images/blogs/forms/ocr-data-aem-forms/fdm02.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "/images/blogs/forms/ocr-data-aem-forms/fdm03.webp",
      alt: "Form Data Model",
    },
    {
      type: "paragraph",
      text: "Select you data source",
    },
    {
      type: "image",
      src: "/images/blogs/forms/ocr-data-aem-forms/fdm04.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "/images/blogs/forms/ocr-data-aem-forms/fdm05.webp",
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
      src: "/images/blogs/forms/ocr-data-aem-forms/clib.webp",
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
      src: "/images/blogs/forms/ocr-data-aem-forms/af01.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "/images/blogs/forms/ocr-data-aem-forms/af02.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "/images/blogs/forms/ocr-data-aem-forms/af03.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "/images/blogs/forms/ocr-data-aem-forms/af04.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "/images/blogs/forms/ocr-data-aem-forms/af05.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "/images/blogs/forms/ocr-data-aem-forms/af06.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "/images/blogs/forms/ocr-data-aem-forms/af07.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "/images/blogs/forms/ocr-data-aem-forms/af08.webp",
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
      src: "/images/blogs/forms/sms-twoway-aem-forms/s2f.png",
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
      src: "/images/blogs/forms/sms-twoway-aem-forms/ds01.png",
      alt: "Data Source",
    },
    {
      type: "image",
      src: "/images/blogs/forms/sms-twoway-aem-forms/ds02.png",
      alt: "Data Source",
    },
    {
      type: "image",
      src: "/images/blogs/forms/sms-twoway-aem-forms/ds03.png",
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
      src: "/images/blogs/forms/sms-twoway-aem-forms/fdm01.webp",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "/images/blogs/forms/sms-twoway-aem-forms/ds04.png",
      alt: "Form Data Model",
    },
    {
      type: "image",
      src: "/images/blogs/forms/sms-twoway-aem-forms/ds05.png",
      alt: "Form Data Model",
    },
    {
      type: "paragraph",
      text: "Select you data source",
    },
    {
      type: "image",
      src: "/images/blogs/forms/sms-twoway-aem-forms/ds06.png",
      alt: "Form Data Model",
    },
    {
      type: "paragraph",
      text: "Test your Model and Service and save it.",
    },
    {
      type: "image",
      src: "/images/blogs/forms/sms-twoway-aem-forms/ds07.png",
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
      src: "/images/blogs/forms/sms-twoway-aem-forms/af01.png",
      alt: "Adaptive Form",
    },
    {
      type: "paragraph",
      text: "Go to properties",
    },
    {
      type: "image",
      src: "/images/blogs/forms/sms-twoway-aem-forms/af02.png",
      alt: "Adaptive Form",
    },
    {
      type: "paragraph",
      text: "Select your form data model",
    },
    {
      type: "image",
      src: "/images/blogs/forms/sms-twoway-aem-forms/af004.png",
      alt: "Adaptive Form",
    },
    {
      type: "image",
      src: "/images/blogs/forms/sms-twoway-aem-forms/af03.png",
      alt: "Adaptive Form",
    },
    {
      type: "paragraph",
      text:
        "Open the form in edit mode. Open the rule editor for the following field. Provide your API key and API Secret Key.",
    },
    {
      type: "image",
      src: "/images/blogs/forms/sms-twoway-aem-forms/af04.png",
      alt: "Adaptive Form",
    },
    {
      type: "paragraph",
      text: "Always use country code.",
    },
    {
      type: "image",
      src: "/images/blogs/forms/sms-twoway-aem-forms/af05.png",
      alt: "Adaptive Form",
    },
    {
      type: "paragraph",
      text: "OTP Sent Successfully",
    },
    {
      type: "image",
      src: "/images/blogs/forms/sms-twoway-aem-forms/af06.png",
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
    content: [
      {
        type: "paragraph",
        text: "Welcome all, let's begin learning GraphQL.",
      },

      {
        type: "heading",
        level: 3,
        text: "Introduction",
      },

      {
        type: "paragraph",
        text:
          "Adobe Experience Manager is a headless Content Management System. The content from backend is delivered by two ways",
      },

      {
        type: "bulletList",
        items: [
          "Application Programming Interface",
          "GraphQL",
        ],
      },

      {
        type: "paragraph",
        text:
          "GraphQL is a query based content delivery medium that is used to deliver precise data from any structured yet flexible source like Content Fragment to third party.",
      },

      {
        type: "heading",
        level: 3,
        text: "GraphQL",
      },

      {
        type: "bulletList",
        items: [
          "Single end point.",
          "Status response is always 200.",
          "Precise content delivery.",
          "Precise content delivery.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "API",
      },

      {
        type: "bulletList",
        items: [
          "Multiple end points.",
          "Status response is 2nn, 3nn, 4nn, 5nn",
          "Complete content delivery.",
          "Caching is performed by HTTP Caching Headers.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "Content Fragment",
      },

      {
        type: "paragraph",
        text:
          "It is a feature of AEM that facilitates the delivery, creation plus management of flexible and scalable content in modular and reusable approach to third party.",
      },

      {
        type: "heading",
        level: 3,
        text: "Creation of Content Fragment",
      },

      {
        type: "bulletList",
        items: [
          "Navigate to Configuration Browser from tools console check the checkboxes Cloud Configurations, Content Fragment Models and GraphQL Persistent Queries.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/contentfragmentimage-one-65e2dc07e665a.webp",
        alt: "Content Fragment",
      },

      {
        type: "bulletList",
        items: [
          "You will find your created folder in crx/de console.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/contentfragmentimage-two-65e2dc0a5f3b1.webp",
        alt: "Content Fragment",
      },

      {
        type: "bulletList",
        items: [
          "From Navigation console, navigate to Assets then files and again create a folder and in cloud services add the path of our created folder.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/contentfragmentimage-three-65e2dc0a143d9.webp",
        alt: "Content Fragment",
      },

      {
        type: "bulletList",
        items: [
          "Now inside that folder create content fragment.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/contentfragmentimage-four-65e2dc070118c.webp",
        alt: "Content Fragment",
      },

      {
        type: "bulletList",
        items: [
          "Add fields of your choice for your model.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/contentfragmentimage-five-65e2dc06b92ad.webp",
        alt: "Content Fragment",
      },

      {
        type: "bulletList",
        items: [
          "Now from Tools console navigate to Assets then Content Fragment Models and then choose your model to create various content fragments.",
          "Here in this example Content Fragment India model is created and from it Maharashtra, Andhra Pradesh, Madhya Pradesh and Rajasthan content fragments are created each specified with state, language, population and district.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/contentfragmentimage-six-65e2dc0937997.webp",
        alt: "Content Fragment",
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/contentfragmentimage-sevenjpg-65e2dc08ca152.webp",
        alt: "Content Fragment",
      },

      {
        type: "bulletList",
        items: [
          "You will find your created content fragments in crx/de.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/contentfragmentimage-eight-65e2dc0606534.webp",
        alt: "Content Fragment",
      },

      {
        type: "bulletList",
        items: [
          "Now your content fragments are ready.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "GraphQL Implementation",
      },

      {
        type: "bulletList",
        items: [
          "Here we are using GraphQL in AEM 6.5 with service pack of 6.5.18.",
          "In GraphQL we set up an endpoint which is resource specific in order to retrieve data from that particular resource. For that navigate to Tools then Assets and click GraphQL.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/graphql-one-65e2dc0eb19b8.webp",
        alt: "GraphQL",
      },

      {
        type: "bulletList",
        items: [
          "Create an endpoint and provide the schema of your content fragment model.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/graphql-two-65e2dc126bb28.webp",
        alt: "GraphQL",
      },

      {
        type: "bulletList",
        items: [
          "Now from Tools go to Generals and hit GraphQL editor.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/graphql-three-65e2dc11edaf5.webp",
        alt: "GraphQL",
      },

      {
        type: "bulletList",
        items: [
          "You will find a console in front of you. Select your end point and now you are ready to fire queries to get your data.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/graphql-four-65e2dc0d64109.webp",
        alt: "GraphQL",
      },

      {
        type: "bulletList",
        items: [
          "Now in order to get all your schema available in your defined endpoint fire the provided query:",
        ],
      },

      {
        type: "code",
        language: "graphql",
        code: `{  __schema
    { types
        {
            name
            description
        }
    }
}`,
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/graphql-five-65e2dc0d449a0.webp",
        alt: "GraphQL",
      },

      {
        type: "bulletList",
        items: [
          "You can retrieve your created schema either by path or by list. Here name of your schema is your model name which is the endpoint.",
          "When you retrieve data by path you can select only one content fragment at a time and accordingly display the required data.",
        ],
      },

      {
        type: "code",
        language: "graphql",
        code: `query { indiaByPath (_path : "/content/dam/graphql-case-study/andhra-pradesh")
               {item {
                       state,
                       language,
                       population,
                       districts
                   }
               }
           }`,
      },

      {
        type: "paragraph",
        text:
          "Here we are selecting Andhra Pradesh by passing its path and retrieving the data.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/graphql-six-65e2dc105ef87.webp",
        alt: "GraphQL",
      },

      {
        type: "bulletList",
        items: [
          "We can also get all the available content fragments if we pass the schema by list.",
        ],
      },

      {
        type: "code",
        language: "graphql",
        code: `query {
    indiaList {
      items {
            _path,
            _variation,
            state,
            population,
            language,
            districts
        }
    }
  }`,
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/graphql-seven-65e2dc101273a.webp",
        alt: "GraphQL",
      },

      {
        type: "bulletList",
        items: [
          "Also in order to retrieve the only selected data you can add filters.",
        ],
      },

      {
        type: "code",
        language: "graphql",
        code: `query {
    indiaList (filter : {
        state : {
        _expressions : {
            value : "Maharashtra",
            _operator : EQUALS_NOT
        }
    }
    }) {
        items {
        state,
        language,
        population,
        districts
        }
    }
    }`,
      },

      {
        type: "paragraph",
        text:
          "Here we are retrieving all the content fragments excluding Maharashtra.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/graphql-eight-65e2dc0b4dae9.webp",
        alt: "GraphQL",
      },

      {
        type: "bulletList",
        items: [
          "Now if we want to cache our queries then just add Persisted Queries and provide a name to it.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/graphql-nine-65e2dc0ed3b9c.webp",
        alt: "GraphQL",
      },

      {
        type: "bulletList",
        items: [
          "This will cache your query and then you can copy the url of selected query and hit on any browser to consume the data.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/graphql-ten-65e2dc1166e00.webp",
        alt: "GraphQL",
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-graphql/graphql-eleven-65e2dc0b6a29f.webp",
        alt: "GraphQL",
      },

      {
        type: "bulletList",
        items: [
          "You can also publish the query directly and you will find the replication on your published instance with all your data associated with your respective end point.",
          "You can easily fetch the previous queries from History and reuse them.",
        ],
      },

      {
        type: "paragraph",
        text:
          "I hope you find this blog helpful and interesting. Please share and for more blogs surf our website.",
      },
    ],
  },
  {
    slug: "slightly-in-aem",
    title: "Slightly in AEM",
    category: "AEM Sites",
    date: "2023-01-07",
    author: "Shruti Meshram",
    description:
      "Discover how HTL (Sightly) separates presentation logic from business logic in AEM.",
    content: [
      {
        type: "paragraph",
        text: "Hello, welcome to another learning.",
      },

      {
        type: "heading",
        level: 3,
        text: "Slightly in AEM",
      },

      {
        type: "paragraph",
        text:
          "In this blog we will be discussing Slightly in AEM. We will be focused upon understansing what exactly slightly is and what advantages does it provide.",
      },

      {
        type: "heading",
        level: 3,
        text: "What Slightly",
      },

      {
        type: "paragraph",
        text:
          "Slightly, commaonly referred as sly is a templating engine which is indeed a part of AEM's Slightly templating framework. It is segregates the business logic and presentation logic. It offers a cleaner way to develop frontend scripts.",
      },

      {
        type: "paragraph",
        text:
          "The main purpose of Slightly is not only to provide a clean, easy and maintainable rendering in AEM compared to JSP but also protects injection attacks.",
      },

      {
        type: "heading",
        level: 3,
        text: "Syntax",
      },

      {
        type: "paragraph",
        text: "Slightly offers a very simple syntax.",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "Expression Language or Interpolation",
            text:
              "Just like JSP, Slightly also offers expression language. The syntax for the same is ${expression}. This is used to evaluate the expression and display the result. It is used to display the value of a variable or an object.",
          },
          {
            title: "Attributes",
            text:
              "Attributes are used to inject data and the syntax is data-sly, for example data-sly-use, data-sly-repeat and data-sly-include.",
          },
          {
            title: "Dynamic Data Rendering",
            text:
              "Snippets like data-sly-test and data-sly-repeat allows helps to dynamically render the data.",
          },
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "Commonly Used Tags used in Slightly",
      },

      {
        type: "bulletList",
        items: [
          "data-sly-use is used to include sling models in slightly.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<sly data-sly-use.model="com.infodales.aem.core.models.HelloWorldModel">
    \${model.message}
</sly>`,
      },

      {
        type: "bulletList",
        items: [
          "data-sly-test is a basic sly tag more over used like an if-else statement. It is used to test the condition and render the data accordingly.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<sly data-sly-test="\${condition}">
    <p>If condition is true, render this.</p>
</sly>`,
      },

      {
        type: "bulletList",
        items: [
          "This is how we can actually use datasly-test to render the condition. It displays the name of the author if currentPage.author is not null",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<sly data-sly-test.authorName="\${currentPage.author}">
<p>Author: \${authorName}</p>
</sly>
<sly data-sly-test="\${!currentPage.author}">
    <p>No author found</p>
</sly>`,
      },

      {
        type: "bulletList",
        items: [
          "data-sly-choose Is again a form of if-else statement that chooses the data to be rendered conditionally. Here we are using it to display the page title.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<sly data-sly-choose>
<sly data-sly-test="\${page.title}">
    <h1>\${page.title}</h1>
</sly>
<sly data-sly-test="\${!page.title}">
    <p>No title available</p>
</sly>
</sly>`,
      },

      {
        type: "bulletList",
        items: [
          "data-sly-unwrap is used to remove the just outer sly tag keeping the inner content as it is hence removing the unwanted markups.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `                                <sly data-sly-test="\${true}">
<sly data-sly-unwrap>
    <div>
        <p>Unwrap this div</p>
    </div>
</sly>
                                </sly>`,
      },

      {
        type: "bulletList",
        items: [
          "data-sly-call is used to call a template or a component. It is used to include the template or component in the current file.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: "<sly data-sly-call=\"${'template.html'}\"></sly>",
      },

      {
        type: "bulletList",
        items: [
          "data-sly-set is used to set the value of a variable and use it in the template.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<sly data-sly-set.hello="Hello World">
    \${hello}
</sly>`,
      },

      {
        type: "bulletList",
        items: [
          "data-sly-attribute is used to set the attribute of an element dynamically.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: "<div data-sly-attribute.class=\"${'container-class'}\"></div>",
      },

      {
        type: "bulletList",
        items: [
          "data-sly-text is used to display the text content of an element which can be from model or expression.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: "<div data-sly-text=\"${'Hello World'}\"></div>",
      },

      {
        type: "bulletList",
        items: [
          "data-sly-include is used to include the content of a some fragments or templates for resue here.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: "<sly data-sly-include=\"${'header.html'}\"></sly>",
      },

      {
        type: "bulletList",
        items: [
          "data-sly-repeat is a loop statement which is used to iterate over a list of items.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<ul>
    <sly data-sly-repeat="\${items}">
        <li>\${item}</li>
    </sly>
</ul>`,
      },

      {
        type: "bulletList",
        items: [
          "data-sly-template Is used to add a resuable template in the current file.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<sly data-sly-template.myTemplate>
<div class="testComponent">\${componentData}</div>
</sly>

<sly data-sly-call="\${testTemplate @componentData='Data'}"></sly>`,
      },

      {
        type: "bulletList",
        items: [
          "data-sly-resource is used to include another component and path manipulations. Here we are including customtext component and naming it as customText. Also we are performing path manipulations that produces path/before/this/path and path/after/this/path respectively.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<div data-sly-resource="\${'customText' @ resourceType='/apps/local-project/components/content/customtext'}"></div>
<section data-sly-resource="\${'path/before' @ appendPath='this/path'}"></section>
<section data-sly-resource="\${'path/after' @ prependPath='this/path'}"></section>`,
      },

      {
        type: "bulletList",
        items: [
          "data-sly-skip In order to skip all the unwanted code when false id returned this tag is used.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<sly data-sly-skip="\${!page.title}">
    <h1>\${page.title}</h1>
</sly>`,
      },

      {
        type: "bulletList",
        items: [
          "data-sly-append Is used to append the content of an element or a variable.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: "<sly data-sly-append=\" ${page.description}\"></sly>",
      },

      {
        type: "bulletList",
        items: [
          "@context is one of the freqently used slightly attribute. @context = 'html' escapes the specail characters ensuring the content is treated as html.@context='url' ensures that the url is encoded properly. @context='text' ensures that the content is treated as plain text and @context='unsafe' renders the content without escaping which is really dangerous as it prone to XSS(cross-site-scripting) attacks.",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<div data-sly-use.script="testscript.js" data-sly-context="\${'unsafe'}">
    \${script.dynamicContent}
</div>

<div data-sly-use.text="markuptext" data-sly-context="\${'html'}">
    \${text.htmlContent}
</div>

<a href="\${homepage.url @ context='url'}">Home Page</a>

<div data-sly-use.text="plaintext" @context="text">
    \${text.plainTextContent}
</div>`,
      },

      {
        type: "heading",
        level: 3,
        text: "Conclusion",
      },

      {
        type: "paragraph",
        text:
          "Here we come to the conclusion of the blog where we have understood how we can produce a frontent scripts using Slightly with some commonly used sly tags and their syntax.",
      },

      {
        type: "paragraph",
        text:
          "I hope you enjoyed the learing and have found the blog informative.",
      },
    ],
  },
  {
    slug: "templates",
    title: "Editable Templates in AEM",
    category: "AEM Sites",
    date: "2023-03-25",
    author: "Shruti Meshram",
    description:
      "Learn how to create editable templates, configure policies, and enable flexible page authoring in AEM.",
    content: [
      {
        type: "paragraph",
        text: "Hi, happy to find you. Welcome to another blog.",
      },

      {
        type: "heading",
        level: 3,
        text: "Editable Templates in AEM",
      },

      {
        type: "paragraph",
        text:
          "Editable Templates are pre-designed feature of AEM that outline the layout, design, and components for a web page. They serve as guides, establishing how content should be organized on a page. By defining the arrangement of elements such as text, images, and other components, templates help maintain consistency across different pages.",
      },

      {
        type: "heading",
        level: 3,
        text: "Creation of Templates",
      },

      {
        type: "paragraph",
        text:
          "Let us understand the concept of templates in AEM by creating one.",
      },

      {
        type: "bulletList",
        items: [
          "In order to create a template, we need to have a template type. Here we are using a page as a template type. To do so navigate to tools, general, templates and create one template.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/templatesUIfolder.webp",
        alt: "templatesUIfolder",
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/pagetemplatetype.webp",
        alt: "pagetemplatetype",
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/createtemplate.webp",
        alt: "createtemplate",
      },

      {
        type: "bulletList",
        items: [
          "Having created the template, we can see that it is in draft state. This means while creating a page with this template, the template itself will not be visible. Hence we need to enable it.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/drafttemplate.webp",
        alt: "drafttemplate",
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/enablingtemplate.webp",
        alt: "enablingtemplate",
      },

      {
        type: "bulletList",
        items: [
          "Now let us simply create a page with the template created. Go to the sites, create a page, choose content template to create page and here we have named it as home page.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/contenttemplatepagecreation.webp",
        alt: "contenttemplatepagecreation",
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/homepage.webp",
        alt: "homepage",
      },

      {
        type: "bulletList",
        items: [
          "After creating so, let us add some components to the page but for that we need to add them to the policies of the template. Policies are set of rules that not only allows the component to be added in on the page but also can add some styling to it. To do so, go to edit template and you will open the template of the created page.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/edittemplates.webp",
        alt: "edittemplates",
      },

      {
        type: "bulletList",
        items: [
          "Now here at the top right corner, we can see structure and on clicking it we can see structure, initial and layout.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/structureinitiallayout.webp",
        alt: "structureinitiallayout",
      },

      {
        type: "bulletList",
        items: [
          "Structure: When we add components to the sturure, those components cannot de removed from the page directly and will be present in all the pages created with this template before or after adding the componnet.",
          "Initial Content: When we add components to the initial content, those components can be removed from the page directly and will be present in all the pages created with this template after adding the componnet.",
          "Layout: This adjests the layout of the container added on the template and also the components added.",
          "Lets add a component to the template. Click on the container, go to policies and add a component. Here we have added breadcrumb component in structure and text component in initial content.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/policies.webp",
        alt: "policies",
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/structurepolicy.webp",
        alt: "structurepolicy",
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/addingbreadcrumb.webp",
        alt: "addingbreadcrumb",
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/completepagefromtemplate.webp",
        alt: "completepagefromtemplate",
      },

      {
        type: "bulletList",
        items: [
          "Now let us understand the this in crx/de. In conf folder, there exists your project folder there in you find settings, wcm and templates. In templates your templates are stored with policies, structure and inital content. In template types, your base template is stored.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/conffolder.webp",
        alt: "conffolder",
      },

      {
        type: "heading",
        level: 3,
        text: "Custom Template Types",
      },

      {
        type: "paragraph",
        text:
          "We can even create our own custom template type for the purpose of creation of a template. Simply copy the predefined template type and configure it. Let us understand how do we actually configure it.",
      },

      {
        type: "bulletList",
        items: [
          "In inital jcr:content, we need to add the sling:resourceType as our page component of the project. Also we can predefine the template to which the template type will be configured.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/customtemplatetype.webp",
        alt: "customtemplatetype",
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/initialjcrcontent.webp",
        alt: "initialjcrcontent",
      },

      {
        type: "bulletList",
        items: [
          "Similarly to root and container of the inital, we need to add the sling:resourceType property that points to the container comnponent of the project.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/initialcontainer.webp",
        alt: "initialcontainer",
      },

      {
        type: "bulletList",
        items: [
          "In jcr:content of the template type, we need to add the description as well as the title of the template type.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/title.webp",
        alt: "title",
      },

      {
        type: "bulletList",
        items: [
          "In jcr:content of policies, we need to add the cq:policies that points to project level page policies and leaving the sling:resourceType pointing to core components policy mapping untouched.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/policiesjcr.webp",
        alt: "policiesjcr",
      },

      {
        type: "bulletList",
        items: [
          "In structure jcr:content, root and container, we need to add sling:resourceType pointing to the same page component.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/structurejcrcontent.webp",
        alt: "structurejcrcontent",
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/structurejcrcontainer.webp",
        alt: "structurejcrcontainer",
      },

      {
        type: "bulletList",
        items: [
          "This ensures completion of creation of a custom template type for the p[urpose of creation of the template. When you navigate to tools then to templates and then to your project wherein you have specified the template type, you ca start to create a template with the custom template type now.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/customtemplateavailable.webp",
        alt: "customtemplateavailable",
      },

      {
        type: "heading",
        level: 3,
        text: "Template Content Policies and Page Policies",
      },

      {
        type: "paragraph",
        text:
          "Policies in templates as discussed earlier are indeed the configurations which describe the set of components allowed as well as design and style configured.",
      },

      {
        type: "paragraph",
        text:
          "cq:policy, in created templates is an important property that provides a reference to the content policy for paragraph system of the page along with the references to the actual components whereas the actual policy definations are stored under /settings/wcm/policies/wcm/foundation/components. Pages policies are the content policies for the main parsys container of the page.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/contentpolicies.webp",
        alt: "contentpolicies",
      },

      {
        type: "heading",
        level: 3,
        text: "Unavailibility of Templates while Creating a Page",
      },

      {
        type: "paragraph",
        text:
          "There comes a scenario that having created a template successfully, you may not be able to find one while crerating a page in project hierarchy. There could be two reasons, either it is in draft state or the template is not allowed in the hierarchy. If it is in draft state, you need to enable it as discussed above but what if we need to allow it in a hierarchy.",
      },

      {
        type: "paragraph",
        text:
          "Suppose you need to create a page in we-retail site hierarchy with your custom template. Despite being enabled, this custom template is not available in the hierarchy. This is because the template is not allowed in the hierarchy. To allow it, select the page within which you need to allow the template and click on the properties. Here you can see the advance tab. In advance tab, you will find template settings, allowed templates, add the path of the template in the allowed paths and there you go. You have the template available for creatinf the page.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/weretailhierarchy.webp",
        alt: "weretailhierarchy",
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/allowedtemplate.webp",
        alt: "allowedtemplate",
      },

      {
        type: "image",
        src: "/images/blogs/sites/templates/templateavailable.webp",
        alt: "templateavailable",
      },

      {
        type: "heading",
        level: 3,
        text: "Conclusion",
      },

      {
        type: "paragraph",
        text:
          "We have successfully created a template and a page out of it. We also have a clear idea of structure, inital content and layout as well as we have a clear idea of where exactly this is stored in the crx/de. We have also understood the creation and configuration of custom template types what content and page policies are how to troubleshood unavailibility of termplates in the hierarchy.",
      },

      {
        type: "paragraph",
        text:
          "I hope you enjoyed the learing and have found the blog informative.",
      },
    ],
  },
  {
    slug: "system-user",
    title: "System User in AEM",
    category: "AEM Sites",
    date: "2023-04-02",
    author: "Shruti Meshram",
    description:
      "Understand how to create service users and configure secure repository access for AEM operations.",
    content: [
      {
        type: "paragraph",
        text: "Hello, hope you are all doing well. Welcome to another blog.",
      },

      {
        type: "heading",
        level: 3,
        text: "System User in AEM",
      },

      {
        type: "paragraph",
        text:
          "System users are designated accounts created to handle system-level tasks or to provide specific permissions to certain processes or services within the AEM platform. These accounts are not intended for human use, but are linked to automated operations, integrations, or system functions within AEM.",
      },

      {
        type: "heading",
        level: 3,
        text: "Creation of System User",
      },

      {
        type: "paragraph",
        text:
          "In order to create a system user we need to follow the following steps.",
      },

      {
        type: "bulletList",
        items: [
          "You ned to go the explorer console (http://localhost:4502/crx/explorer/index.jsp) of aem and click on user administration.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/system-user/explorerconsole.webp",
        alt: "explorerconsole",
      },

      {
        type: "bulletList",
        items: [
          "You need to simply create a new system user. Here we have created aem_bot user.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/system-user/createsystemuser.webp",
        alt: "createsystemuser",
      },

      {
        type: "bulletList",
        items: [
          "Now having created a system user, we need to add permissions to it. In order to do so go to useradmin console and search for aem_bot and add the required permissions.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/system-user/permissionstosystemuser.webp",
        alt: "permissionstosystemuser",
      },

      {
        type: "bulletList",
        items: [
          "This user is stored in the system folder within home folder in crx/de.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/system-user/homefolder.webp",
        alt: "homefolder",
      },

      {
        type: "bulletList",
        items: [
          "System users can also be created using configurations. In configMgr (http://localhost:4502/system/console/configMgr), search for an ACS configuration factory called Ensure Service User. This is a configuration factory that actually creates the system user and adds permissions to it. Here we have created a system user called aem-service-bot within aembots folder. Also we have added permisions to it.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/system-user/ensureserviceuser.webp",
        alt: "ensureserviceuser",
      },

      {
        type: "image",
        src: "/images/blogs/sites/system-user/permissionsconfig.webp",
        alt: "permissionsconfig",
      },

      {
        type: "bulletList",
        items: [
          "type=allow says that the permissions are being granted (deny could be used) and privileges=jcr:read,jcr:all,rep:write defines for what the permissions are actually granted.",
          "jcr:read grants reading permision.",
          "jcr:all grants all the permissions like read, write, delete, modify etc.",
          "rep:write grants the permission of write.",
          "path=/content/local-project being the repository location where the granted permissions are exercised.",
          "There are some more commonly used permissions like jcr:modifyProperties, jcr:addChildNodes, jcr:removeChildNodes, rep:readProperties, rep:readNodes and crx:replicate with selfexplainatory names.",
          "This created system user can be loacted in crx/de under home folder.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/system-user/configurationstore.webp",
        alt: "configurationstore",
      },

      {
        type: "heading",
        level: 3,
        text: "Configuring System User",
      },

      {
        type: "paragraph",
        text:
          "In order to configure the system user we need to follow the following steps.",
      },

      {
        type: "bulletList",
        items: [
          "Now we need to first get the bundle id so that we can bind the created system user.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/system-user/bundleid.webp",
        alt: "bundleid",
      },

      {
        type: "bulletList",
        items: [
          "Search for Apache Sling Service User Mapper Service Ammendment (http://localhost:4502/system/console/configMgr) which is a factory configuration. Here we need to add the system configuration.",
          "Now we need to add the bundle id: reference name = name of the system user.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/system-user/botammendment.webp",
        alt: "botammendment",
      },

      {
        type: "heading",
        level: 3,
        text: "Consuming System User",
      },

      {
        type: "paragraph",
        text:
          "Now the system user is ready to be consumed. We need to create a utility class wherein there exists a map. This map consumes our reference name with whihch the system user is binds with the bundle id. It indeed returns a resource resolver",
      },

      {
        type: "code",
        language: "java",
        code: `package com.infodales.aem.core.util;

import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;

import java.util.HashMap;
import java.util.Map;

public final class SubserviceConsumption {
    private SubserviceConsumption() {
    }
    public ResourceResolver subserviceResolver(ResourceResolverFactory factory) throws LoginException {
        final Map<String, Object> parameters = new HashMap<String, Object>();
        parameters.put(factory.SUBSERVICE, "bot");
        return factory.getServiceResourceResolver(parameters);
    }
}`,
      },

      {
        type: "heading",
        level: 3,
        text: "Conclusion",
      },

      {
        type: "paragraph",
        text:
          "Here we have sucessfully created a system user, provided permissions to it via explorer and ensure user configurations and have configured it. We have also consumed the system user via a parameter map that returns a resource resolver which can be used to access a recource in the provided path and perform permitted operations on it.",
      },

      {
        type: "paragraph",
        text:
          "I hope you enjoyed the learing and have found the blog informative.",
      },
    ],
  },
  {
    slug: "repoinit",
    title: "Repoinit in AEM",
    category: "AEM Sites",
    date: "2023-04-27",
    author: "Shruti Meshram",
    description:
      "Discover how RepoInit automates repository setup, service users, and access control configurations in AEM.",
    content: [
      {
        type: "paragraph",
        text: "Hi reader welcome to another blog.",
      },

      {
        type: "heading",
        level: 3,
        text: "Repoinit in AEM",
      },

      {
        type: "paragraph",
        text:
          "Repoinit is a tool used for automating repository initialization tasks. It’s a script-based approach that helps configure the underlying Java Content Repository by defining the structure and settings for the repository, such as creating nodes, assigning properties, and configuring permissions.",
      },

      {
        type: "heading",
        level: 3,
        text: "Purpose of Repoinit",
      },

      {
        type: "paragraph",
        text: "Repoinit serves the following purposes:",
      },

      {
        type: "bulletList",
        items: [
          "Automating Repository Setup : Rather than manually configuring nodes, properties, and permissions within the JCR, repoinit enables you to define these settings in a script that can be executed at startup or during deployment. This reduces manual effort and ensures consistency.",
          "Customizing Repository Structures : Repoinit offers a standardized method for tailoring the content repository to meet specific project needs, like setting up new nodes, access control lists (ACLs), properties, or even custom node types.",
          "Improving Deployment Flexibility : By scripting repository configurations, repoinit allows you to easily replicate these setups across various AEM environments (e.g., from development to production), which helps maintain consistency and reduces the chance for configuration errors.",
          "Integration and Setup : Repoinit is also useful when integrating AEM with other systems or for configuring custom content structures, workflows, or user access during initialization.",
          "Managing Permissions : Through repoinit, administrators can set detailed permissions on specific repository nodes, ensuring that only authorized users or systems have access to certain content.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "Understanding the Basic Script of Repoinit",
      },

      {
        type: "paragraph",
        text:
          "You can find repoinit in AEM\\crx-quickstart\\launchpad\\config\\org\\apache\\sling\\jcr\\repoinit wherein there exisits RepositoryInitializerScript of type .config.",
      },

      {
        type: "code",
        language: "text",
        code: `:org.apache.felix.configadmin.revision:=L"1"
scripts=[ \\
"create\\ path\\ (sling:OrderedFolder)\\ /content/dam/local-project", \\
"create\\ path\\ (nt:unstructured)\\ /content/dam/local-project/jcr:content", \\
"set\\ properties\\ on\\ /content/dam/local-project/jcr:content\\n\\ \\ set\\ cq:conf{String}\\ to\\ /conf/local-project\\n\\ \\ set\\ jcr:title{String}\\ to\\ \\"Local\\ Project\\"\\nend", \\
]
service.factoryPid="org.apache.sling.jcr.repoinit.RepositoryInitializer"
service.pid="org.apache.sling.jcr.repoinit.RepositoryInitializer~local-project"`,
      },

      {
        type: "paragraph",
        text: "Let us understand the meaning of each line.",
      },

      {
        type: "bulletList",
        items: [
          ":org.apache.felix.configadmin.revision:=L\"1\" This line specifies the revision number for the configuration. It is a part of the Apache Felix Configuration Admin specification, which is used for managing configurations in OSGi-based environments (which AEM uses).L\"1\" indicates that this is the first version (or revision) of the configuration, and it is often used for versioning the configuration of services.",
          "scripts=[ ... ] : This part begins the definition of a list of scripts that will be executed in sequence when the RepositoryInitializer service starts up.",
          "create path (sling:OrderedFolder) : This command creates a path in the repository with a node type of sling:OrderedFolder. This is a special type of node that allows you to store child nodes in a specific order.",
          "create path (nt:unstructured) : This command creates a path in the repository with a node type of nt:unstructured.",
          "set properties on /content/dam/local-project/jcr:content : This part specifies that you want to set properties on the node /content/dam/local-project/jcr:content created earlier.",
          "set cq:conf{String} to /conf/local-project : This sets a property called cq:conf on the jcr:content node. The value of the property is /conf/local-project, which is likely referring to a configuration for this content (possibly related to a particular project or feature).",
          "set jcr:title{String} to \"Local Project\" : This sets another property called jcr:title with the value \"Local Project\". The jcr:title property is commonly used to give a human-readable title to content.",
          "end : This marks the end of the property-setting block.",
          "service.factoryPid=\"org.apache.sling.jcr.repoinit.RepositoryInitializer\" : This line indicates that this configuration is meant for the RepositoryInitializer service in AEM, which is responsible for initializing the repository based on the provided repoinit scripts.",
          "service.factoryPid : refers to the factory PID (Persistent Identifier) that is used to create the service instance. It links the configuration to the service for repository initialization.",
          "service.pid=\"org.apache.sling.jcr.repoinit.RepositoryInitializer~local-project\" service.pid stands for the Service PID, which uniquely identifies this particular instance of the RepositoryInitializer service. The ~local-project suffix indicates that this particular instance of the service is related to the \"local-project\" configuration.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "Conclusion",
      },

      {
        type: "paragraph",
        text:
          "Here we have understood the importance of repoinit and what the script for repoinit says.",
      },

      {
        type: "paragraph",
        text:
          "I hope you enjoyed the learing and have found the blog informative.",
      },
    ],
  },
  {
    slug: "contentasaservice",
    title: "Content as a Service in AEM",
    category: "AEM Sites",
    date: "2024-11-12",
    author: "Shruti Meshram",
    description:
      "Explore how AEM delivers reusable content through APIs to websites, apps, and headless channels.",
    content: [
      {
        type: "paragraph",
        text: "Hi, hope you are doing well. Welcome to another blog.",
      },

      {
        type: "heading",
        level: 3,
        text: "Content as a Service in AEM",
      },

      {
        type: "paragraph",
        text:
          "Content as a Service in AEM is a powerful feature of AEM that circulates content in structured format like JSON instead of serving it as mear webpages thus aiding in its usage across multiple platforms including mobile apps, IoT devices. This content can be consumed by various other websites, applications, and devices.",
      },

      {
        type: "heading",
        level: 3,
        text: "Features of Content as a Service in AEM",
      },

      {
        type: "paragraph",
        text:
          "Content as a Service thus provides a variety of powerful features that include:",
      },

      {
        type: "bulletList",
        items: [
          "Headless Content Delivery : Headless content delivery in AEM is like having a supercharged content hub that feeds all your digital experiences—websites, mobile apps, kiosks, or even smart devices—without being tied to a specific front-end design. Think of AEM as the brain of your content. It stores and manages everything—text, images, videos, structured data—and makes it available through APIs. These APIs act like messengers, delivering content to any front-end framework you choose, whether it’s React, Angular, Vue.js, or even something new in the future. This setup gives developers the freedom to build fast, modern, and interactive applications while letting content creators work in AEM without worrying about code. It’s a flexible, scalable way to keep content consistent across platforms, ensuring that updates happen in one place but appear everywhere your audience interacts with your brand.",
          "Content Fragments in AEM are like neatly organized content blocks that you can create once and reuse across multiple platforms. They help structure content in a way that’s flexible, consistent, and API-friendly, making them perfect for headless content delivery. Once created, these fragments can be referenced anywhere within AEM pages, or they can be delivered directly to websites, mobile apps, or other digital platforms through APIs. For more details on content fragments, refer our blog on content fragments (https://infodales.com/blogs/ContentFragments.html).",
          "GraphQL & REST APIs : If you're familiar with GraphQL, you'll love AEM’s implementation. Instead of making multiple requests to retrieve different pieces of content, GraphQL lets you ask for exactly what you need in a single request. This makes content delivery faster and more efficient, reducing unnecessary data transfers. It’s perfect for structured content like product catalogs, blogs, FAQs, and content fragments, where you only want specific fields rather than an entire data set. For more details refer our Graphql (https://infodales.com/blogs/aem-graphql.html) blog where the content fragments are actualy exported using GraphQL AEM content Services also supports REST APIs, provides a flexible way to fetch content in JSON format. It follows a more traditional API structure, where each request retrieves predefined content endpoints. This is useful when you need to integrate AEM with other systems or when working with applications that rely on RESTful architecture.",
        ],
      },

      {
        type: "paragraph",
        text:
          "Here we will be creating a few content fragments which store data of stars. This data will be then exported as a JSON RESTful API endpoint.",
      },

      {
        type: "heading",
        level: 3,
        text: "Creation of Content Fragment Model and respective Content Fragments.",
      },

      {
        type: "paragraph",
        text:
          "To begin with, we need to have a few content fragments that stores the data of stars. We will be creating a content fragment model and proceed with adding content fragments.",
      },

      {
        type: "bulletList",
        items: [
          "Navigate to tools and then to assets and then to content fragments. Here you can see a few folders. Go to your project folder and then create a content Fragment model.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/contentasaservice/cfmodel.webp",
        alt: "cfmodel",
      },

      {
        type: "image",
        src: "/images/blogs/sites/contentasaservice/createcfmodel.webp",
        alt: "createcfmodel",
      },

      {
        type: "image",
        src: "/images/blogs/sites/contentasaservice/createcf1.webp",
        alt: "createcf1",
      },

      {
        type: "image",
        src: "/images/blogs/sites/contentasaservice/completecfmodel.webp",
        alt: "completecfmodel",
      },

      {
        type: "bulletList",
        items: [
          "Having created the content fragment model, we need to create a few content fragments. To do so, navigate to navigations, assets and then files. Now create a folder, here we have created Stars Data folder.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/contentasaservice/assets.webp",
        alt: "assets",
      },

      {
        type: "image",
        src: "/images/blogs/sites/contentasaservice/starsfolder.webp",
        alt: "starsfolder",
      },

      {
        type: "bulletList",
        items: [
          "Within this folder will reside all the content fragments. To do so, we need to add the folder where in there exists our content fragment model in the cloud configurations of the stars data folder. Select the folder and go to properties and in cloud configurations, add the path of the folder in which we have the content fragment model.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/contentasaservice/properties1.webp",
        alt: "properties1",
      },

      {
        type: "image",
        src: "/images/blogs/sites/contentasaservice/properties2.webp",
        alt: "properties2",
      },

      {
        type: "image",
        src: "/images/blogs/sites/contentasaservice/cloudconfigurations.webp",
        alt: "cloudconfigurations",
      },

      {
        type: "bulletList",
        items: [
          "Having done so, we have created a few content fragmengs which are now ready to be exported.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/contentasaservice/allcf.webp",
        alt: "allcf",
      },

      {
        type: "heading",
        level: 3,
        text: "Endpoint Creation",
      },

      {
        type: "paragraph",
        text:
          "Now we have all the prerequisits ready for the creation of an endpoint which will sore the data of the content fragments. Here is the code snippet for the same which we will be understanding.",
      },

      {
        type: "code",
        language: "java",
        code: `package com.local.core.constants;

public class StarEndpointConstant {
    public static final String ENDPOINTPATH = "/bin/stars";
    public static final String STAR_PARENT_FOLDER_PATH = "/content/dam/stars-data";
    public static final String STAR_MASTER = "/jcr:content/data/master";
    public static final String STAR_NAME = "starName";
    public static final String DATEOFDISCOVERY = "discoveryDate";
    public static final String SPECTRALINFO = "spectralType";
    public static final String SPECTRUM = "spectrum";
    public static final String SOLAR_MASS = "solarMass";
    public static final String IS_PART_OF_BINARY_STAR_SYSTEM = "isPartOfBinaryStarSystem";
    public static final String PART_OF_BINARY_STAR_SYSTEM = "Part of Binary Star System";
    public static final String DISCOVERY = "discovery";
}`,
      },

      {
        type: "code",
        language: "java",
        code: `package com.local.core.servlets;

import com.local.core.constants.StarEndpointConstant;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.json.JSONException;
import org.json.JSONObject;
import org.osgi.service.component.annotations.Component;
import javax.jcr.*;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@Component(service = {Servlet.class}, property = {
        "sling.servlet.paths="+ StarEndpointConstant.ENDPOINTPATH,
        "sling.servlet.methods=GET"
})
public class StarsServlet extends SlingSafeMethodsServlet {

    private String discoveryDate;
    private List<String> spectral;
    private String solarMass;
    private String isPartOfBinaryStarSystem;

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        ResourceResolver resolver = request.getResourceResolver();
        Resource resource= resolver.getResource(StarEndpointConstant.STAR_PARENT_FOLDER_PATH);
        Node starData = resource.adaptTo(Node.class);
        try {
            JSONObject starJSONObject = new JSONObject();
            NodeIterator stars = starData.getNodes();
            while(stars.hasNext()){
                Node star =  stars.nextNode();
                String name = star.getName();
                if(!name.contains(":")){
                    Node starMaster = resolver.getResource(star.getPath()+ StarEndpointConstant.STAR_MASTER).adaptTo(Node.class);
                    String starName = starMaster.getProperty(StarEndpointConstant.STAR_NAME).getValue().getString();
                    JSONObject starDataJsonObject = new JSONObject();
                    JSONObject starSpectrumJsonObject = new JSONObject();
                    if(starMaster.hasProperty(StarEndpointConstant.DATEOFDISCOVERY)){
                        Calendar calendar = starMaster.getProperty(StarEndpointConstant.DATEOFDISCOVERY).getValue().getDate();
                        int year = calendar.get(calendar.YEAR);
                        int month = calendar.get(calendar.MONTH);
                        int day = calendar.get(calendar.DAY_OF_MONTH);
                        discoveryDate = year + "-" + month + "-" + day;
                        starDataJsonObject.put(StarEndpointConstant.DISCOVERY, discoveryDate);
                    }
                    if(starMaster.hasProperty(StarEndpointConstant.SPECTRALINFO)){
                        spectral = new ArrayList<>();
                        Value[] spectralProperties = starMaster.getProperty(StarEndpointConstant.SPECTRALINFO).getValues();
                        for(Value spectralProperty : spectralProperties) {
                            spectral.add(spectralProperty.toString());
                        }
                        for(String spectrum : spectral){
                            starSpectrumJsonObject.put(spectrum.split(":")[0], spectrum.split(":")[1]);
                        }
                        starDataJsonObject.put(StarEndpointConstant.SPECTRUM,starSpectrumJsonObject);
                    }
                    if(starMaster.hasProperty(StarEndpointConstant.SOLAR_MASS)){
                        solarMass = starMaster.getProperty(StarEndpointConstant.SOLAR_MASS).getValue().toString();
                        starDataJsonObject.put(StarEndpointConstant.SOLAR_MASS, solarMass);
                    }
                    if(starMaster.hasProperty(StarEndpointConstant.IS_PART_OF_BINARY_STAR_SYSTEM)){
                        if(starMaster.getProperty(StarEndpointConstant.IS_PART_OF_BINARY_STAR_SYSTEM).getBoolean()){
                            starDataJsonObject.put(StarEndpointConstant.PART_OF_BINARY_STAR_SYSTEM, "YES");
                        }else{
                            starDataJsonObject.put(StarEndpointConstant.PART_OF_BINARY_STAR_SYSTEM, "YES");
                        }
                    }
                    starJSONObject.put(starName, starDataJsonObject);
                }
            }
            out.println(starJSONObject);
        } catch (RepositoryException e) {
            throw new RuntimeException(e);
        } catch (IllegalArgumentException illegalArgumentException) {
            illegalArgumentException.printStackTrace();
        } catch (JSONException jsonException){
            jsonException.printStackTrace();
        }
    }

}`,
      },

      {
        type: "paragraph",
        text:
          "Now let us step by step understand what does this code tries to do.",
      },

      {
        type: "bulletList",
        items: [
          "We have created a servlet which is registered by path and we expect to recieve a json response from this servlet when this path is hit.",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `    @Component(service = {Servlet.class}, property = {
    "sling.servlet.paths="+ StarEndpointConstant.ENDPOINTPATH,
    "sling.servlet.methods=GET"
})`,
      },

      {
        type: "bulletList",
        items: [
          "We are mapping all the properties defined in the content fragments (star name, date of discovery, spectral, is part of binary star system and solar mass).",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/contentasaservice/alpha-centuri-a.webp",
        alt: "alpha centuri a",
      },

      {
        type: "bulletList",
        items: [
          "starSpectrumJsonObject puts all the spectal data. This is a multi field property, and so the spectral property value is first added in a List of String and then is added in starSpectrumJsonObject with key as substring before \":\" and value as after \":\". Having collected this data, it is then added in starDataJsonObject.",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `if(starMaster.hasProperty(StarEndpointConstant.SPECTRALINFO)){
    spectral = new ArrayList<>();
    Value[] spectralProperties = starMaster.getProperty(StarEndpointConstant.SPECTRALINFO).getValues();
    for(Value spectralProperty : spectralProperties) {
        spectral.add(spectralProperty.toString());
    }
    for(String spectrum : spectral){
         starSpectrumJsonObject.put(spectrum.split(":")[0], spectrum.split(":")[1]);
    }
    starDataJsonObject.put(StarEndpointConstant.SPECTRUM,starSpectrumJsonObject);
}`,
      },

      {
        type: "bulletList",
        items: [
          "Discovery date is a date object added. This date object extracted using calendar object and constants.",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `if(starMaster.hasProperty(StarEndpointConstant.DATEOFDISCOVERY)){
    Calendar calendar = starMaster.getProperty(StarEndpointConstant.DATEOFDISCOVERY).getValue().getDate();
    int year = calendar.get(calendar.YEAR);
    int month = calendar.get(calendar.MONTH);
    int day = calendar.get(calendar.DAY_OF_MONTH);
        discoveryDate = year + "-" + month + "-" + day;
    starDataJsonObject.put(StarEndpointConstant.DISCOVERY, discoveryDate);
}`,
      },

      {
        type: "bulletList",
        items: [
          "This is then added in the starJSONObject and this is provided in the response of the code.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/contentasaservice/response.webp",
        alt: "response",
      },

      {
        type: "heading",
        level: 3,
        text: "Conclusion",
      },

      {
        type: "paragraph",
        text:
          "We have now understood how content fragments are exported as a JSON RESTful API endpoint. This created response is now ready to be consumed by any other application.",
      },

      {
        type: "paragraph",
        text:
          "I hope you enjoyed the learing and have found the blog informative.",
      },
    ],
  },
  {
    slug: "junits",
    title: "Unit Testing in AEM",
    category: "AEM Sites",
    date: "2023-02-10",
    author: "Owais Pathan",
    description:
      "Learn how to write unit tests for AEM components, services, and models to improve code reliability.",
    content: [
      {
        type: "paragraph",
        text: "Hi, hope you are doing well. Welcome to another blog.",
      },

      {
        type: "heading",
        level: 3,
        text: "What is Unit Testing",
      },

      {
        type: "paragraph",
        text:
          "Unit testing in Java is the process of testing individual methods or classes in isolation to verify their correctness. It ensures that each unit of code works as expected, improving reliability and supporting Test-Driven Development (TDD). Frameworks like JUnit and TestNG are commonly used for writing and automating unit tests using assertions to validate expected outputs.For unit testing in java a framework is used called Junit 5.",
      },

      {
        type: "paragraph",
        text:
          "Lets have a look on how we can perform unit testing in AEM for that we will take the example of sling model and perform unit testing on it. We are using Junit5 framework specifically.",
      },

      {
        type: "paragraph",
        text:
          "I have a component in which i have title, description and a multifield naming tags in which we can add multiple tags and below is the sling model for the component",
      },

      {
        type: "code",
        language: "java",
        code: `package com.infodales.core.models;

import com.infodales.core.pojo.SamplePojo;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.inject.Inject;
import java.util.List;

@Model(adaptables = Resource.class,
defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class SampleModel {

@ValueMapValue
private String title;

@Inject
private List<SamplePojo> castInfo;

    public String getTitle() {
    return title;
    }

    public List<SamplePojo> getCastInfo() {
        return castInfo;
        }
}`,
      },

      {
        type: "paragraph",
        text: "And below is the pojo class \"SamplePojo\"",
      },

      {
        type: "code",
        language: "java",
        code: `            package com.infodales.core.pojo;

            import org.apache.sling.api.resource.Resource;
            import org.apache.sling.models.annotations.Model;
            import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

            @Model(adaptables = Resource.class)
            public class SamplePojo {

            @ValueMapValue
            private String cardTitle;

            @ValueMapValue
            private String cardImage;

            public String getCardTitle() {
            return cardTitle;
            }

            public String getCardImage() {
            return cardImage;
            }
}`,
      },

      {
        type: "paragraph",
        text:
          "In the above code we need to test the getter's and setter's of the fields, So to write the Junits for the above code we will create a class called SampleModelTest, In that we will be using \"AemContextExtension\" it is a JUnit 5 extension provided by the AEM Mocks library (io.wcm.testing.mock.aem.junit5). It is used to simplify and enhance unit testing of Adobe Experience Manager (AEM) components, services, and Sling models by automatically managing an instance of AemContext.",
      },

      {
        type: "paragraph",
        text:
          "Also we need to generate the json of the component that we have created as i have create the card component which has one textfield for title and one multifield inside that multifield we have cardTitle and cardImage, below is the json for that, this json needs to kept in the code under the resources folder under test package",
      },

      {
        type: "image",
        src: "/images/blogs/sites/junits/json.webp",
        alt: "json",
      },

      {
        type: "paragraph",
        text: "Below is the final Test class for our class.",
      },

      {
        type: "code",
        language: "java",
        code: `package com.infodales.core.models;

import com.infodales.core.pojo.SamplePojo;
import com.infodales.core.testcontext.AppAemContext;
import io.wcm.testing.mock.aem.junit5.AemContext;
import io.wcm.testing.mock.aem.junit5.AemContextExtension;
import org.apache.sling.api.resource.Resource;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static junit.framework.Assert.assertEquals;

@ExtendWith(AemContextExtension.class)
public class SampleModelTest {

private final AemContext aemContext = AppAemContext.newAemContext();

private SampleModel sampleModel;

@BeforeEach
void setUp() {
aemContext.addModelsForClasses(SampleModel.class);
aemContext.load()
.json("/content/techcombank/web/vn/en/samplejson.json", "/content");
aemContext.currentResource("/content/sample");
Resource resource = aemContext.request().getResource();
sampleModel = resource.adaptTo(SampleModel.class);
}

@Test
void testTitle() {
String expectedTitle = "Companies";
assertEquals(expectedTitle, sampleModel.getTitle());
}

@Test
void testCastInfo() {
List<SamplePojo> castInfo = sampleModel.getCardInfo();
    SamplePojo samplePojo = castInfo.get(0);

    String ExpectedCardTitle = "Infodales";
    assertEquals(ExpectedCardTitle, samplePojo.getCardTitle());

    String ExpectedCardImage = "/content/dam/Infodales/actress/Infodales.jpg";
    assertEquals(ExpectedCardImage, samplePojo.getCardImage());
    }

}`,
      },

      {
        type: "bulletList",
        items: [
          "In the above code first of all we need to annotate our class with @ExtendWith(AemContextExtension.class) it Integrates AEM Mocks into JUnit 5.",
          "Next is we have initialize AEM Context and SampleModel.AppAemContext.newAemContext() is a custom method (from AppAemContext) that creates an AemContext instance.",
          "Next we added the setup method it runs before each test method, inisde that method",
        ],
      },

      {
        type: "numberedList",
        items: [
          "First we have loaded test data from a JSON file (samplejson.json), simulating content in AEM.",
          "We have registered SampleModel as a Sling model using addModelsForClasses().",
          "Next is we have set the current resource to /content/sample, meaning sampleModel adapts from this resource.",
          "The method adaptTo(SampleModel.class) Converts the resource into a SampleModel instance.",
          "Now the json has adapted to our sling model.",
        ],
      },

      {
        type: "bulletList",
        items: [
          "@Test it is used to mark a method as test method in testTitle() method we are checking weather our expected value is similar to that of the value form the json for that we use assertEquals method",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/junits/TestTitleMethod.webp",
        alt: "TestTitleMethod",
      },

      {
        type: "bulletList",
        items: [
          "Similarly in the testCastInfo() method we are testing card title and cardImage values weather they are similar to that of present in the json as in json we only added one value so we will test that only.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/junits/cardInfoTest.webp",
        alt: "cardInfoTest",
      },

      {
        type: "paragraph",
        text:
          "Now we will run the junit class by clicking on run button as shown in the below image",
      },

      {
        type: "image",
        src: "/images/blogs/sites/junits/testclass.webp",
        alt: "testclass",
      },

      {
        type: "paragraph",
        text: "As you can see the above test cases have passed.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/junits/passedtestcases.webp",
        alt: "passedtestcases",
      },

      {
        type: "paragraph",
        text: "Thanks for reading 😄",
      },
    ],
  },
  {
    slug: "event-handler-and-listener",
    title: "Event Handler and Event Listener in AEM",
    category: "AEM Sites",
    date: "2024-11-28",
    author: "Yash Sakharkar",
    description:
      "Understand how AEM event handlers and listeners respond to repository changes and application events.",
    content: [
      {
        type: "heading",
        level: 4,
        text: "Overview",
      },

      {
        type: "paragraph",
        text:
          "An Event Handler manages events at the Sling level, while an Event Listener handles events at the JCR level. Both are responsible for executing actions when an event occurs. .",
      },

      {
        type: "heading",
        level: 4,
        text: "Event Handler (OSGi Event Handler) in AEM",
      },

      {
        type: "paragraph",
        text:
          "An OSGi Event Handler listens for OSGi events, including resource modifications, workflow events, and system events. It is implemented using org.osgi.service.event.EventHandler and registered via OSGi service properties.",
      },

      {
        type: "heading",
        level: 4,
        text: "Syntax",
      },

      {
        type: "code",
        language: "java",
        code: `@Component(service = EventHandler.class,
immediate = true,
property = {
EventConstants.EVENT_TOPIC + "=org/apache/sling/api/resource/Resource/ADDED",
EventConstants.EVENT_TOPIC + "=org/apache/sling/api/resource/Resource/REMOVED",
EventConstants.EVENT_FILTER + "+(path=/content/we-retail/us/en/*)"
})
public class SampleEventHandler implements EventHandler {`,
      },

      {
        type: "heading",
        level: 4,
        text: "How to create Event Handler In AEM",
      },

      {
        type: "code",
        language: "java",
        code: `package com.sample.core.listeners;

import org.apache.sling.api.SlingConstants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.event.Event;
import org.osgi.service.event.EventConstants;
import org.osgi.service.event.EventHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component(service = EventHandler.class,
immediate = true,
property = {
      EventConstants.EVENT_TOPIC + "=org/apache/sling/api/resource/Resource/ADDED",
      EventConstants.EVENT_TOPIC + "=org/apache/sling/api/resource/Resource/REMOVED",
               EventConstants.EVENT_FILTER + "+(path=/content/we-retail/us/en/*)"
})
public class SampleEventHandler implements EventHandler {
private final Logger logger = LoggerFactory.getLogger(getClass());
@Override
public void handleEvent(Event event) {
logger.info("Event Topic" + event.getTopic(),event.getProperty(SlingConstants.PROPERTY_PATH));
}
}`,
      },

      {
        type: "heading",
        level: 4,
        text: "Logs",
      },

      {
        type: "image",
        src: "/images/blogs/sites/event-handler-and-listener/eventhandler.webp",
        alt: "Event-Listener-image",
      },

      {
        type: "paragraph",
        text:
          "In the example above, we created a class named SampleEventHandler, which implements the EventHandler interface and overrides the handleEvent method. Additionally, we have defined the event topics that should trigger the event.",
      },

      {
        type: "heading",
        level: 4,
        text: "Event Listener (JCR Event Listener) in AEM",
      },

      {
        type: "paragraph",
        text:
          "A JCR Event Listener listens for changes in the JCR repository, such as node additions, modifications, or deletions. It is implemented using javax.jcr.observation.EventListener and registered via ObservationManager.",
      },

      {
        type: "heading",
        level: 4,
        text: "Syntax",
      },

      {
        type: "code",
        language: "java",
        code: `@Component(service = EventListener.class,
immediate = true)
public class SampleEventListener implements EventListener {`,
      },

      {
        type: "heading",
        level: 4,
        text: "How to create Event Listener In AEM",
      },

      {
        type: "code",
        language: "java",
        code: `package com.sample.core.listeners;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.observation.Event;
import javax.jcr.observation.EventIterator;
import javax.jcr.observation.EventListener;
import java.util.HashMap;
import java.util.Map;

@Component(service = EventListener.class,
immediate = true)
public class SampleEventListener implements EventListener {
private final Logger logger = LoggerFactory.getLogger(getClass());

@Reference
private ResourceResolverFactory resourceResolverFactory;
@Activate
@Modified
protected void Activate() throws LoginException, RepositoryException {
   Map<String,Object> map = new HashMap<>();
   map.put(ResourceResolverFactory.SUBSERVICE,"test");
    ResourceResolver resourceResolver = resourceResolverFactory.getServiceResourceResolver(map);
    Session session = resourceResolver.adaptTo(Session.class);
    session.getWorkspace().getObservationManager().addEventListener(this,
          Event.PROPERTY_ADDED | Event.NODE_ADDED | Event.NODE_REMOVED | Event.PROPERTY_CHANGED,
          "/content/we-retail/us/en",
          true,
          null,null,false
          );
    logger.info("--Property Changed Or removed --");
}
@Override
public void onEvent(EventIterator events) {
   logger.info("Event Listener Called");
   while (events.hasNext()){
      try {
         logger.info("Event Path is " + events.nextEvent().getPath());
      } catch (RepositoryException e) {
         throw new RuntimeException(e);
      }
   }
}
}`,
      },

      {
        type: "paragraph",
        text:
          "In the example above, we created SampleEventListener, which implements the EventListener interface and overrides the onEvent method. Using ObservationManager, we can add an event listener and define event types such as PROPERTY_ADDED, PROPERTY_CHANGED, and NODE_ADDED to trigger the event.",
      },

      {
        type: "heading",
        level: 4,
        text: "ResourceChangeListener in AEM",
      },

      {
        type: "paragraph",
        text:
          "The ResourceChangeListener in AEM listens for changes in Sling resources (e.g., content modifications in /content, configuration updates in /conf, etc.). It is more efficient than JCR Event Listeners because it operates at the Sling level rather than directly in the JCR repository.",
      },

      {
        type: "heading",
        level: 4,
        text: "Syntax",
      },

      {
        type: "code",
        language: "java",
        code: `@Component(service = ResourceChangeListener.class,
immediate = true,
property = {
      ResourceChangeListener.PATHS + "=" + "/content/we-retail/us/en",
      ResourceChangeListener.CHANGES + "=" + "ADDED",
      ResourceChangeListener.CHANGES + "=" + "CHANGED",
      ResourceChangeListener.CHANGES + "=" + "REMOVED"
})
@ServiceDescription("SampleResourceChangeListener")
public class SampleResourceChangeListener implements ResourceChangeListener {`,
      },

      {
        type: "heading",
        level: 4,
        text: "How to create ResourceChangeListener In AEM",
      },

      {
        type: "code",
        language: "java",
        code: `package com.sample.core.listeners;
import org.apache.sling.api.resource.observation.ResourceChange;
import org.apache.sling.api.resource.observation.ResourceChangeListener;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.propertytypes.ServiceDescription;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@Component(service = ResourceChangeListener.class,
immediate = true,
property = {
      ResourceChangeListener.PATHS + "=" + "/content/we-retail/us/en",
      ResourceChangeListener.CHANGES + "=" + "ADDED",
      ResourceChangeListener.CHANGES + "=" + "CHANGED",
      ResourceChangeListener.CHANGES + "=" + "REMOVED"
})
@ServiceDescription("SampleResourceChangeListener")
public class SampleResourceChangeListener implements ResourceChangeListener {
private final Logger logger = LoggerFactory.getLogger(getClass());
@Override
public void onChange( List<ResourceChange> list) {
 list.forEach(resourceChange -> {
     logger.info("Event Type = {}", resourceChange.getType());
     logger.info("Event Path = {}", resourceChange.getPath());
     logger.info("Event External = {}", resourceChange.isExternal());
 });
}
}`,
      },

      {
        type: "image",
        src: "/images/blogs/sites/event-handler-and-listener/resourcelistener.webp",
        alt: "resource-listener-image",
      },

      {
        type: "paragraph",
        text:
          "In the example above we have created the SampleResourceChangeListener which implements ResourceChangeListener and overrides onChange event , the event will get triggered when we change , add , remove the Node .",
      },
    ],
  },
  {
    slug: "sitemap",
    title: "SiteMap Implementation in AEM",
    category: "AEM Sites",
    date: "2024-12-12",
    author: "Yash Sakharkar",
    description:
      "Learn how to generate XML sitemaps in AEM to help search engines discover and index website pages.",
    content: [
      {
        type: "heading",
        level: 4,
        text: "What is a sitemap ?",
      },

      {
        type: "paragraph",
        text:
          "In AEM (Adobe Experience Manager), a sitemap is a structured XML file that lists the URLs of a website to help search engines like Google and Bing crawl and index the content efficiently. AEM provides multiple ways to generate and manage sitemaps, including sitemap.xml for search engines and HTML sitemaps for users. .",
      },

      {
        type: "heading",
        level: 4,
        text: "Why Are Sitemaps Important?",
      },

      {
        type: "bulletList",
        items: [
          "Better SEO (Search Engine Optimization) – Helps search engines find and index content faster.",
          "Improves Website Crawling – Ensures all important pages are discovered, even those not well-linked.",
          "Enhances User Experience – HTML sitemaps help users navigate large websites easily.",
          "Supports Multiple Content Types – Video, images, news, and e-commerce sites benefit from specialized sitemaps.",
        ],
      },

      {
        type: "heading",
        level: 4,
        text: "XML Sitemap (For Search Engines)",
      },

      {
        type: "bulletList",
        items: [
          "Used primarily by search engines like Google, Bing, and Yahoo.",
          "Helps search engines crawl and index the website efficiently.",
          "Enhances User Experience – HTML sitemaps help users navigate large websites easily.",
          "For e.g we have the url for google ,https://www.google.com/sitemap.xml",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/sitemap/googlesitemap.webp",
        alt: "google-sitemap-image",
      },

      {
        type: "paragraph",
        text:
          "Similarly we can create the site map for our site created on AEM.",
      },

      {
        type: "heading",
        level: 4,
        text: "How to implement Sitemap on Author Instance",
      },

      {
        type: "bulletList",
        items: [
          "Navigate to http://localhost:4502/system/console/configMgr.",
          "Search for the org.apache.sling.sitemap.impl.SitemapGeneratorManagerImpl",
          "Checked on All on-demand checkbox.",
          "Save the changes",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/sitemap/sitemap-generator-image.webp",
        alt: "sitemap-generator-image",
      },

      {
        type: "bulletList",
        items: [
          "Checking on All on Demand will allow you to create the sitemap .",
          "Note : allOnDemand configuration is having a drawback as it processes data and generates a sitemap everytime we hit the URL to generate a sitemap.",
          "Similarly search for PageTreeSitemapGeneratorImpl in config manager.",
          "This configuration allows you to add the last modified date and also will represent data in xml format.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/sitemap/page-tre-sitemap-generator-image.webp",
        alt: "page-tre--sitemap-generator-image",
      },

      {
        type: "bulletList",
        items: [
          "Navigate to http://localhost:4502/sites.html/content open page properties , on Advanced check the Generated Sitemap check box.",
          "Now on the browser hit this url http://localhost:4502/content/sample.sitemap.xml.",
        ],
      },

      {
        type: "code",
        language: "text",
        code: `This XML file does not appear to have any style information associated with it. The document tree is shown below.
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
<url>
<loc>/content/sample.html</loc>
<lastmod>2019-02-11T17:34:23.056Z</lastmod>
</url>
<url>
<loc>/content/sample/en.html</loc>
<lastmod>2024-03-27T17:17:13.153Z</lastmod>
</url>
<url>
<loc>/content/sample/en/contact-us.html</loc>
<lastmod>2020-02-06T17:29:33.318Z</lastmod>
</url>
<url>
<loc>/content/sample/en/faq.html</loc>
<lastmod>2021-01-26T20:47:39.275Z</lastmod>
</url>
<url>
<loc>/content/sample/en/faq/who-is-csa.html</loc>
<lastmod>2022-05-25T20:13:01.403Z</lastmod>
</url>
<url>
<loc>/content/sample/en/faq/do-i-need-travel-protection.html</loc>
<lastmod>2022-05-25T19:44:14.081Z</lastmod>
</url>
<url>
<loc>/content/sample/en/faq/when-can-i-buy-travel-protection-.html</loc>
<lastmod>2019-03-13T17:05:47.527Z</lastmod>
</url>
<url>
<loc>/content/sample/en/faq/when-does-coverage-begin.html</loc>
<lastmod>2019-03-13T17:07:39.002Z</lastmod>
</url>
<url>
<loc>/content/sample/en/faq/maximum-trip-length.html</loc>
<lastmod>2019-03-13T17:08:54.688Z</lastmod>
</url>
<url>
<loc>/content/sample/en/faq/can-my-traveling-companions-and-i-be-insured-on-the-same-plan-.html</loc>
<lastmod>2019-03-13T17:09:55.142Z</lastmod>
</url>`,
      },

      {
        type: "paragraph",
        text: "Similarly you can create SiteMap on publish instances too.",
      },

      {
        type: "heading",
        level: 4,
        text: "Dispatcher Configuration for SiteMap",
      },

      {
        type: "bulletList",
        items: [
          "Include the following entry in the dispatcher/src/conf.dispatcher.d/filters/filters.any file.",
        ],
      },

      {
        type: "code",
        language: "text",
        code: "/0201 { /type \"allow\" /path \"/content/*\" /selectors '(sitemap-index|sitemap)' /extension \"xml\" }",
      },

      {
        type: "paragraph",
        text:
          "Include the .xml extension in the rewrite rules within the dispatcher/src/conf.d/rewrites/rewrite.rules file.",
      },

      {
        type: "code",
        language: "text",
        code: "RewriteCond %{REQUEST_URI} (.html|.jpe?g|.webp|.svg|.xml)$",
      },
    ],
  },
  {
    slug: "slingjobs",
    title: "Schedule Sling Jobs In AEM",
    category: "AEM Sites",
    date: "2024-12-27",
    author: "Yash Sakharkar",
    description:
      "Discover how to schedule and execute background jobs in AEM using Sling Jobs and schedulers.",
    content: [
      {
        type: "heading",
        level: 3,
        text: "Overview of Sling Jobs in Adobe Experience Manager (AEM)",
      },

      {
        type: "paragraph",
        text:
          "Apache Sling Jobs are a mechanism in AEM to perform asynchronous tasks reliably. They are built using the Sling Event and Job Handling framework, enabling you to offload tasks like data processing, page replication, or integration workflows that don't need to happen in real-time.In this blog, we will see how to schedule a job in AEM so that it executes at a particular interval of time.",
      },

      {
        type: "heading",
        level: 4,
        text: "What is Sling Jobs ?",
      },

      {
        type: "paragraph",
        text:
          "In AEM, Sling Jobs are a part of the event-driven architecture that enables task scheduling, processing, and management in an asynchronous and persistent manner. They are used to perform long-running or non-blocking tasks like importing data, sending notifications, or cleaning up resources.",
      },

      {
        type: "heading",
        level: 4,
        text: "How Sling Jobs Work",
      },

      {
        type: "bulletList",
        items: [
          "Job Creation",
        ],
      },

      {
        type: "bulletList",
        items: [
          "In AEM, the Sling Job Manager allows you to create jobs using the JobBuilder. By calling jobManager.createJob(TOPIC), you define the job's topic (which is essentially the type of job you're creating). The TOPIC is a unique identifier that helps link the job to a specific Job Consumer that processes jobs with that topic. Once the job is created with the topic, you can add additional properties or parameters (key-value pairs) to specify the task’s details. These properties are used during job execution to provide any necessary data for processing the job. For e.g Creating a job with a specific topic",
        ],
      },

      {
        type: "code",
        language: "java",
        code: "JobBuilder jobBuilder = jobManager.createJob(\"com/example/processFile\");",
      },

      {
        type: "bulletList",
        items: [
          "Topic: \"com/example/processFile\" — this identifies the type of job. Properties : You can add data that the job consumer will need to process the job.",
        ],
      },

      {
        type: "bulletList",
        items: [
          "Job Submission",
        ],
      },

      {
        type: "bulletList",
        items: [
          "After the job is created, it needs to be submitted to the Sling Job Manager. When a job is submitted, it does not execute immediately but gets added to a job queue. The Job Manager ensures that the job is stored in the queue with its associated topic and properties. The queue is responsible for organizing and scheduling jobs for execution based on priorities, concurrency settings, and job availability. Submission allows AEM to manage when and how the job will be processed without blocking other operations.",
        ],
      },

      {
        type: "code",
        language: "java",
        code: "jobManager.addJob(\"com/example/processFile\", properties);",
      },

      {
        type: "bulletList",
        items: [
          "Topic: \"com/example/processFile\" — this identifies the type of job. Properties : You can add data that the job consumer will need to process the job.",
        ],
      },

      {
        type: "bulletList",
        items: [
          "Job Execution",
        ],
      },

      {
        type: "bulletList",
        items: [
          "Once a job is queued, Job Consumers are responsible for executing the job. AEM manages a pool of worker threads that process jobs asynchronously. These worker threads are part of a dedicated thread pool designed for job execution, ensuring that long-running tasks don't interfere with the user-facing application. The Job Consumer—a service listening for specific topics—picks up jobs from the queue and processes them in the background. The execution process is decoupled from the main application flow, meaning it happens in parallel, improving performance and ensuring the system remains responsive.",
        ],
      },

      {
        type: "code",
        language: "java",
        code: "@Component(service = JobConsumer.class,property = { JobConsumer.PROPERTY_TOPICS + \"=com/example/processFile\" })",
      },

      {
        type: "heading",
        level: 4,
        text: "How to create and schedule the sling Job",
      },

      {
        type: "paragraph",
        text:
          "We can schedule the job at specific intervals of time using job builder andscheduler builder .In the below code we are creating a simple job using the job manager and scheduling that job to execute after every one minute.",
      },

      {
        type: "code",
        language: "java",
        code: `package com.sample.core.servlets;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.event.jobs.JobBuilder;
import org.apache.sling.event.jobs.JobManager;
import org.apache.sling.event.jobs.ScheduledJobInfo;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import java.io.IOException;
import java.util.*;

@Component(
service = Servlet.class,
property = {
"sling.servlet.paths=/bin/schedulejob",
"sling.servlet.methods=POST"
}
)
public class SampleJobSchedulerServlet extends SlingAllMethodsServlet {
private static final String TOPIC = "content/archival/scheduled/job";
@Reference
JobManager jobManager;

@Override
protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
Collection<ScheduledJobInfo> myJobs = jobManager.getScheduledJobs(TOPIC, 1, null);
List<String> listOfString = new ArrayList<>();
listOfString.add("custom value");
if (myJobs.isEmpty()) {
   Map<String, Object> map = new HashMap<>();
   map.put("customParam", "Hello, this is a sample Sling job!");
   JobBuilder jobBuilder = jobManager.createJob(TOPIC);
   jobBuilder.properties(map);
   JobBuilder.ScheduleBuilder scheduleBuilder = jobBuilder.schedule();
   scheduleBuilder.cron("0 * * * * ?");
   scheduleBuilder.daily(0, 0);
   if(scheduleBuilder.add() ==null){
      scheduleBuilder.add(listOfString);
   }
   else {
      response.getWriter().write("Scheduled Job for " +TOPIC);
   }
   }
   }
   }`,
      },

      {
        type: "paragraph",
        text:
          "In the above code, we define a scheduled job by invoking the jobManager.createJob() method and assigning it a topic (\"content/archival/scheduled/job\"). We then verify if the job is already scheduled by calling jobManager.getScheduledJobs(). If it’s not, we use ScheduleBuilder to configure the job to run daily at midnight and add it to the queue with scheduleBuilder.add().",
      },

      {
        type: "code",
        language: "java",
        code: `package com.sample.core.jobs;

import org.apache.sling.event.jobs.Job;
import org.apache.sling.event.jobs.consumer.JobConsumer;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component(service = JobConsumer.class, immediate = true,
      property = {
            JobConsumer.PROPERTY_TOPICS + "=" + "content/archival/scheduled/job"
      })
public class SampleJobConsumer implements JobConsumer {
private final Logger logger = LoggerFactory.getLogger(getClass());
@Override
public JobResult process(Job job) {
   String customParam = (String) job.getProperty("customParam");
   logger.info("Custom Param: ", customParam);
   return JobResult.OK;
}
}`,
      },

      {
        type: "paragraph",
        text:
          "In the above code, we define a Job Consumer component that listens for jobs on the \"content/archival/scheduled/job\" topic. When a scheduled job is triggered, this component executes logic. You can access job properties or custom parameters to process the archival task as needed. If the task completes successfully, return JobResult.OK to indicate that the job was successfully executed.",
      },

      {
        type: "heading",
        level: 4,
        text: "How to trigger the job",
      },

      {
        type: "bulletList",
        items: [
          "Test the Servlet:",
        ],
      },

      {
        type: "bulletList",
        items: [
          "Use Postman to send a request to the path /bin/schedulejob.",
        ],
      },

      {
        type: "bulletList",
        items: [
          "Check the Response :",
        ],
      },

      {
        type: "bulletList",
        items: [
          "If the status code is 200, you will receive the response: \"Scheduled Job for content/archival/scheduled/job\".",
        ],
      },

      {
        type: "bulletList",
        items: [
          "Navigate to slingevent",
        ],
      },

      {
        type: "bulletList",
        items: [
          "Go to http://localhost:4502/system/console/slingevent",
        ],
      },

      {
        type: "bulletList",
        items: [
          "Search for your Job Topic Name",
        ],
      },

      {
        type: "bulletList",
        items: [
          "for e.g content/archival/scheduled/job you will find you job has been schedule under scheduled job section",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/slingjobs/cronjob.webp",
        alt: "cron-job-image",
      },

      {
        type: "bulletList",
        items: [
          "Also you will find logs of when it was created and finished",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/slingjobs/slingstatistics.webp",
        alt: "sling-statistics-image",
      },

      {
        type: "bulletList",
        items: [
          "Navigate to Logs:",
        ],
      },

      {
        type: "bulletList",
        items: [
          "Go to http://localhost:4502/system/console/slinglog.",
        ],
      },

      {
        type: "bulletList",
        items: [
          "Create Logger for Job Consumer:",
        ],
      },

      {
        type: "bulletList",
        items: [
          "Set up a logger for the job consumer in the Sling log.",
        ],
      },

      {
        type: "bulletList",
        items: [
          "Verify Job Execution :",
        ],
      },

      {
        type: "bulletList",
        items: [
          "You will observe that the job runs repeatedly according to the schedule specified in the cron expression.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/slingjobs/slinglogs.webp",
        alt: "sling-logs-image",
      },
    ],
  },
  {
    slug: "content-fragments",
    title: "Content Fragments in AEM",
    category: "AEM Sites",
    date: "2024-10-10",
    author: "Shruti Meshram",
    description:
      "Explore how AEM Content Fragments enable structured, reusable content for headless and omnichannel experiences.",
    content: [
      {
        type: "paragraph",
        text: "Hi, welcome to another blog.",
      },

      {
        type: "heading",
        level: 3,
        text: "Content fragments in AEM",
      },

      {
        type: "paragraph",
        text:
          "today we will be focusing upon what is a content fragment, why is it used and how exactly can we create one.",
      },

      {
        type: "heading",
        level: 3,
        text: "Introduction",
      },

      {
        type: "paragraph",
        text:
          "In Adobe Experience Manager (AEM), Content Fragments are pieces of content that are created in a structured way and can be reused across different pages, apps, and channels. Think of them as building blocks for content that can be shared and used consistently, whether you’re working on a website, a mobile app, or even an email campaign.",
      },

      {
        type: "paragraph",
        text:
          "A Content Fragment Model is essentially a template that defines what kind of content you can have in a fragment — like text, numbers, dates, and so on. It helps organize and structure content so it can be reused easily across your platforms.",
      },

      {
        type: "heading",
        level: 3,
        text: "Aids Content Fragments Provide",
      },

      {
        type: "paragraph",
        text: "Content fragments actually make work alot easy by providing",
      },

      {
        type: "bulletList",
        items: [
          "Structured Content : Instead of just throwing in random text, content fragments are organized by fields like titles, body text, dates, and more. This structure makes it easy to manage and reuse.",
          "Reusability : Content fragments aren’t limited to one page or project. Once you create one, you can use it anywhere—on a website, in an app, or in emails. This saves you from copying and pasting the same content over and over.",
          "API Access : Need to pull content from AEM into another system? No problem. Content fragments can be accessed through AEM's GraphQL API or REST APIs to serve content everywhere.",
        ],
      },

      {
        type: "paragraph",
        text:
          "Hence, they help in dynamic content injection, maintain consistency and multichanel delivery.",
      },

      {
        type: "heading",
        level: 3,
        text: "Creation of Content Fragments",
      },

      {
        type: "paragraph",
        text:
          "Now having an idea of this powerful feature of aem, lets try and create one. We will be creating a for the purpose of storing data of varios stars.",
      },

      {
        type: "bulletList",
        items: [
          "First we need to create a Content Fragment Model. Navigate to content fragment model from tools.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-fragments/cfmodel.webp",
        alt: "cfmodel",
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-fragments/createcfmodel.webp",
        alt: "createcfmodel",
      },

      {
        type: "bulletList",
        items: [
          "In this model, we need to add the fields of the content fragments. We can specify the field labels, their data types, property types and various other properties.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-fragments/cfmodelraw.webp",
        alt: "cfmodelraw",
      },

      {
        type: "bulletList",
        items: [
          "Here we have a text field, a multifield, a boolean field, a date field and a numfield.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-fragments/completecfmodel.webp",
        alt: "completecfmodel",
      },

      {
        type: "bulletList",
        items: [
          "After creating a model we are ready to create various content fragments using this model. In order to do so, navigate to Assets and create a folder stars.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-fragments/assets.webp",
        alt: "assets",
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-fragments/starsfolder.webp",
        alt: "starsfolder",
      },

      {
        type: "bulletList",
        items: [
          "Now we need to add cloud configurations to this folder so that it allows the creation of content fragments. To do so go to its properties, navigate to cloud configurations tab and then add the path of the folder in which we have our content fragment model.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-fragments/properties1.webp",
        alt: "properties1",
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-fragments/properties2.webp",
        alt: "properties2",
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-fragments/cloudconfigurations.webp",
        alt: "cloudconfigurations",
      },

      {
        type: "bulletList",
        items: [
          "Having added the cloud configurations, simply create the content fragment using the model and add the respective data.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-fragments/createcf1.webp",
        alt: "createcf1",
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-fragments/createcf2.webp",
        alt: "createcf2",
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-fragments/createcf3.webp",
        alt: "createcf3",
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-fragments/createcf4.webp",
        alt: "createcf4",
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-fragments/allcf.webp",
        alt: "allcf",
      },

      {
        type: "heading",
        level: 3,
        text: "Conclusion",
      },

      {
        type: "paragraph",
        text:
          "This is how we create content fragments whose data can be exported by graphql or as a REST API.",
      },

      {
        type: "paragraph",
        text: "I hope you ejoyed this learning.",
      },
    ],
  },
  {
    slug: "etc-mapping",
    title: "ETC Mapping in AEM",
    category: "AEM Sites",
    date: "2024-10-25",
    author: "Yash Sakharkar",
    description:
      "Understand how AEM resource mappings help manage URL resolution and resource access.",
    content: [
      {
        type: "heading",
        level: 3,
        text: "Overview",
      },

      {
        type: "paragraph",
        text:
          "In AEM (Adobe Experience Manager), ETC Mapping is primarily used for routing or transforming content based on a defined mapping between the source and the destination locations in the repository. The term ETC refers to \"Experience Targeted Content\", which is used to manage how content is structured, served, or redirected within AEM.",
      },

      {
        type: "heading",
        level: 4,
        text: "What is ETC Mapping in AEM ?",
      },

      {
        type: "paragraph",
        text:
          "In the context of Adobe Experience Manager (AEM), ETC Mapping typically refers to the Experience Targeted Content (ETC) system, which is used to map content or redirect requests to different locations or resources based on specific conditions, such as user profile, geographical location, or language preferences. However, ETC Mapping is not a standard, widely recognized term in AEM documentation. It might be referring to a specific implementation within your organization or an alias for content mapping used in certain workflows.",
      },

      {
        type: "heading",
        level: 4,
        text: "Request-Resource Mapping",
      },

      {
        type: "image",
        src: "/images/blogs/sites/etc-mapping/request-resource-mapping.webp",
        alt: "resource-request-mapping",
      },

      {
        type: "heading",
        level: 4,
        text: "Local Domain Setup",
      },

      {
        type: "bulletList",
        items: [
          "In the setup, a local domain is configured.",
          "A user requests this domain in their browser.",
        ],
      },

      {
        type: "heading",
        level: 4,
        text: "Request Reaches Apache Server",
      },

      {
        type: "bulletList",
        items: [
          "The request is first directed to the Apache server.",
          "However, the Apache server does not know what specific content should be served for the requested domain.",
        ],
      },

      {
        type: "heading",
        level: 4,
        text: "Request Moves to AEM",
      },

      {
        type: "bulletList",
        items: [
          "Since Apache lacks this information, it forwards the request to the AEM server.",
        ],
      },

      {
        type: "heading",
        level: 4,
        text: "AEM Resolves the Content",
      },

      {
        type: "bulletList",
        items: [
          "AEM serves the identified content back to the client (browser).",
          "This completes the request-response cycle.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/etc-mapping/request-resource-mapping-with-url.webp",
        alt: "request-resource-mapping-with-url",
      },

      {
        type: "heading",
        level: 4,
        text: "Client Request",
      },

      {
        type: "bulletList",
        items: [
          "The client requests a page using the URL: public:4503/women.html.",
        ],
      },

      {
        type: "heading",
        level: 4,
        text: "Request Reaches Apache Server",
      },

      {
        type: "bulletList",
        items: [
          "The request is first directed to the Apache server.",
          "The Apache server, however, does not know what specific content should be served for the requested URL",
        ],
      },

      {
        type: "heading",
        level: 4,
        text: "Request Forwarded to AEM",
      },

      {
        type: "bulletList",
        items: [
          "Since the Apache server cannot resolve the content, it forwards the request to the AEM server for handling.",
        ],
      },

      {
        type: "heading",
        level: 4,
        text: "AEM Resolves the Content Path",
      },

      {
        type: "bulletList",
        items: [
          "In AEM, the requested URL /women.html is mapped to the actual content path: /content/we-retail/us/en/women.html.",
          "This mapping ensures that AEM serves the correct content for the requested page.",
        ],
      },

      {
        type: "heading",
        level: 4,
        text: "URL Rewriting",
      },

      {
        type: "bulletList",
        items: [
          "AEM automatically hides the internal content structure (/content/we-retail/us/en) in the URL, presenting a cleaner and user-friendly URL (/women.html) to the client.",
        ],
      },

      {
        type: "heading",
        level: 4,
        text: "Response Sent to Client",
      },

      {
        type: "bulletList",
        items: [
          "AEM serves the content at /content/we-retail/us/en/women.html back to the client, but the client sees the cleaner URL public:4503/women.html.",
        ],
      },

      {
        type: "heading",
        level: 4,
        text: "How ETC Mapping Works",
      },

      {
        type: "bulletList",
        items: [
          "ETC Mapping in AEM facilitates this process by defining the rules for mapping short, user-friendly URLs to the actual internal content paths..",
          "This process is also known as URL rewriting in AEM.",
        ],
      },

      {
        type: "heading",
        level: 4,
        text: "For the local setup, add the domain to the host file",
      },

      {
        type: "bulletList",
        items: [
          "Navigate to C:\\Windows\\System32\\Drivers\\etc\\hosts.",
          "Add the following entry: 127.0.0.1 publish.4503.",
        ],
      },

      {
        type: "heading",
        level: 4,
        text: "Steps to Create ETC Mapping in AEM",
      },

      {
        type: "bulletList",
        items: [
          "Login in to the publish instance",
          "Open the CRX/DE Lite interface in your browser:",
          "http://localhost:4503/crx/de/index.jsp.",
        ],
      },

      {
        type: "heading",
        level: 4,
        text: "Navigate to the ETC Mapping Node",
      },

      {
        type: "bulletList",
        items: [
          "Go to the path: /etc/map.",
        ],
      },

      {
        type: "heading",
        level: 4,
        text: "Create a New Node for the Domain",
      },

      {
        type: "bulletList",
        items: [
          "Under /etc/map, create a new node for the domain (if it does not exist).",
          "Example: If your domain is public, create a node named http (for HTTP domains) or https (for HTTPS domains).",
          "Inside this node, create another node for the specific domain this node should be of type “sling:Mapping”, e.g., public.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/etc-mapping/etc-map-node-path.webp",
        alt: "etc-map-node-path",
      },

      {
        type: "heading",
        level: 4,
        text: "Configure Properties for the Mapping Node",
      },

      {
        type: "image",
        src: "/images/blogs/sites/etc-mapping/publish-4503-home.webp",
        alt: "AEM-tools-page",
      },

      {
        type: "paragraph",
        text: "Add the following properties to the mapping node:",
      },

      {
        type: "bulletList",
        items: [
          "sling:internalRedirect: If the domain name matches the node name, we use sling:internalRedirect. When you enter the domain name in the browser, it internally redirects to the specified content path.",
        ],
      },

      {
        type: "heading",
        level: 4,
        text: "Create a node for Clientlibs",
      },

      {
        type: "paragraph",
        text:
          "Create a new node under the publish node, and name it, for example, etc_clientlibs. Add the following properties to the mapping node:",
      },

      {
        type: "bulletList",
        items: [
          "Set the value of sling:match to etc[.]clientlibs/(.+).",
          "Set the value of sling:internalRedirect to /etc.clientlibs/$1.",
        ],
      },

      {
        type: "paragraph",
        text:
          "When the node name does not match the domain name, we use the sling:match property. In this case, sling:match captures everything after the domain (matching etc[.]clientlibs/(.+)) and stores it in a variable. This variable ($1) is then resolved and appended in the sling:internalRedirect property, such as in /etc.clientlibs/$1. Here, $1 corresponds to whatever matches (.+) in the sling:match property.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/etc-mapping/etc_clientlibs_image.webp",
        alt: "etc-map-node-path",
      },

      {
        type: "paragraph",
        text:
          "Click Save All. Then, access http://publish:4503 in your browser, and you will be redirected to the home page.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/etc-mapping/home-html-image.webp",
        alt: "home-html-image",
      },

      {
        type: "paragraph",
        text:
          "Create a node under the http folder, for example, named publish_home (of type sling:mapping).",
      },

      {
        type: "paragraph",
        text: "Add the following properties to this node:",
      },

      {
        type: "bulletList",
        items: [
          "sling:internalRedirect: /content/we-retail/us/en/home.html.",
          "sling:match : publish.4503/$.",
        ],
      },

      {
        type: "paragraph",
        text:
          "Explanation: As discussed earlier, any request that matches the sling:match value (in this case, publish.4503/$) will resolve to the content path specified in the sling:internalRedirect property.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/etc-mapping/publish_home_image.webp",
        alt: "publish_home_image",
      },

      {
        type: "paragraph",
        text: "Create a configuration for the rest of the pages.",
      },

      {
        type: "paragraph",
        text:
          "Now, let's assume you are accessing domain/page.html in the browser. The path should resolve to /content/page.html, but the /content part will be hidden, displaying only /page.html. This approach is known as URL rewriting in AEM.",
      },

      {
        type: "paragraph",
        text: "Modify the publish.4503 node.",
      },

      {
        type: "paragraph",
        text:
          "Add the following values to the sling:internalRedirect property:",
      },

      {
        type: "bulletList",
        items: [
          "/content/we-retail/us/en",
          "/",
        ],
      },

      {
        type: "paragraph",
        text:
          "Explanation: Whenever you access publish.4503/pagename.html, the system will automatically resolve the path starting with /content/we-retail/us/en or /, hiding this part of the path. As a result, only publish.4503/pagename.html will be displayed in the browser.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/etc-mapping/modified_publish_node.webp",
        alt: "modified_publish_node",
      },

      {
        type: "paragraph",
        text:
          "Now, if you access http://publish:4503/women.html in the browser… it looks like",
      },

      {
        type: "image",
        src: "/images/blogs/sites/etc-mapping/women_html_image.webp",
        alt: "women_html_image",
      },

      {
        type: "paragraph",
        text: "Conclusion:",
      },

      {
        type: "paragraph",
        text:
          "ETC mapping in AEM is a powerful tool for optimizing URL structures, enhancing user experience, and simplifying content management by effectively handling internal redirects and URL rewriting. By leveraging properties like sling:match and sling:internalRedirect, you can create clean, user-friendly URLs that align with your project’s requirements while maintaining seamless backend functionality.",
      },
    ],
  },
  {
    slug: "clientlibs",
    title: "Clientlibs in AEM",
    category: "AEM Sites",
    date: "2023-03-01",
    author: "Shruti Meshram",
    description:
      "Learn how AEM Client Libraries organize, manage, and deliver CSS and JavaScript assets.",
    content: [
      {
        type: "paragraph",
        text: "Hi, welcome to another learning",
      },

      {
        type: "heading",
        level: 2,
        text: "Clientlibs in AEM",
      },

      {
        type: "paragraph",
        text:
          "Here we will learn what are clientlibs, properties in clientlibs and how to include them in aem component.",
      },

      {
        type: "heading",
        level: 3,
        text: "Introduction",
      },

      {
        type: "paragraph",
        text:
          "Clientlibs are cq:ClientLibraryFolder which help an aem developer to segregate css and js. There are two types of clientlibs, one at component level which is created within the component itself (generally they are bound component specific clientlibs) and global level clientlibs (they are common for more than one components) which are present within the clientlibs folder of the project it self.",
      },

      {
        type: "paragraph",
        text:
          "We will be understanding the concept of clientlibs using a democomponent, having simply 3 h1 tags.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/componentslightly.webp",
        alt: "componentslightly",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/componentonpage.webp",
        alt: "componentonpage",
      },

      {
        type: "paragraph",
        text:
          "In order to create a clientlib, simply right click, create, in type select cq:ClientLibraryfolder and provide name.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/creation_One.webp",
        alt: "creation One",
      },

      {
        type: "paragraph",
        text:
          "Here in clientlibs, you can segregate css and js files, hence you need to create css folder, js folder, css.txt file and js.txt file.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/folders.webp",
        alt: "folders",
      },

      {
        type: "heading",
        level: 3,
        text: "Properties in Clientlibs",
      },

      {
        type: "paragraph",
        text:
          "Clientlibs have a few special properties each proving an additional functionality",
      },

      {
        type: "bulletList",
        items: [
          "Categories : It is a multi property that adds a clientlib to a group that is when referred, the clientlib gets loaded.",
          "Allow Proxy : It is a boolean property which allows the clientlibs to load at dispatcher level via a proxy servlet",
          "Embed : It is a multi property that allows inclusion of various other clientlibs by adding their respective categories such that they combine together to form one single clientlib.",
          "Dependency : It is again a multi property that actually adds refers another clientlib by adding its category to it such that the clientlib do not merge with the original clientlib rather loads itself. also it helps to add other dependencies like that of jQuery.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "Including Clientlibs",
      },

      {
        type: "paragraph",
        text:
          "Now we have an idea about how exactly the clientlibs are created. Now we need to add the html and css to them and understand how do we include clientlibs to our component.",
      },

      {
        type: "bulletList",
        items: [
          "In democlientlibs, we have created hey.css and hi.css within css folder and hey.js and hi.js in js folder. In base file, we actually add the entries of the js as well as css files that will load along with the clientlibs and also these files load as per the sequence added.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/heycss.webp",
        alt: "heycss",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/hicss.webp",
        alt: "hicss",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/demobase.webp",
        alt: "demobase",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/heyjs.webp",
        alt: "heyjs",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/hijswithoutdependency.webp",
        alt: "hijswithoutdependency",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/hijswithoutdependency.webp",
        alt: "hijswithoutdependency",
      },

      {
        type: "bulletList",
        items: [
          "Now we need to add properties to democlientlibs",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/democlientlibspropertiesraw.webp",
        alt: "democlientlibspropertiesraw",
      },

      {
        type: "bulletList",
        items: [
          "Now inorder to add the clientlibs to component, just add the following snippet as shown. Here we have added name of the categories. Also we have stated clientlib.all this means alls the js as well as css files will load. We can specify which type of files do we want to load, clientlib.css will load only css files and clientlib.js will load only js files.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/clientlibsinclusionsnippet.webp",
        alt: "clientlibsinclusionsnippet",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/pagewithoutembedanddependency.webp",
        alt: "pagewithoutembedanddependency",
      },

      {
        type: "bulletList",
        items: [
          "Now as we can see the heading tags have changed their colours as per the clientlibs added. Also one thing to be noted that we have added hey.js first and then hi.js and hence hey is getting printed first and then hi in the console.",
          "Now let us understand dependency. Let us create a glbal level clientlibs named helloclientlibs, under the clientlibs folder of local-project.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/helloclientlibs.webp",
        alt: "helloclientlibs",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/helloclientlibsproperties.webp",
        alt: "helloclientlibsproperties",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/hellocss.webp",
        alt: "hellocss",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/hellojs.webp",
        alt: "hellojs",
      },

      {
        type: "bulletList",
        items: [
          "Having created the helloclientlibs, now we will add it as a dependency. In dependency property of democlientlibs,we have added categories of helloclientlibs.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/hellodependency.webp",
        alt: "hellodependency",
      },

      {
        type: "bulletList",
        items: [
          "We can clearly see that hello.css and hello.js is applied.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/dependencysuccess.webp",
        alt: "dependencysuccess",
      },

      {
        type: "bulletList",
        items: [
          "Similarly we will create functional clientlib. As you can see, it is a component level client created just like democlientlibs with only morning.js that has a function which prints greeting message.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/functionalcomplete.webp",
        alt: "functionalcomplete",
      },

      {
        type: "bulletList",
        items: [
          "We will call this method in hi.js. Here we are simply calling the greet functional reference when we click on hi heading.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/hijswithembed.webp",
        alt: "hijswithembed",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/embedsuccess.webp",
        alt: "embedsuccess",
      },

      {
        type: "bulletList",
        items: [
          "In inspect element, source tab, we can find two network calls, one to democlientlibs and other to helloclientlib whereas functional clientlib merges with democlientlib to form an embed clientlib.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/sourcetab.webp",
        alt: "sourcetab",
      },

      {
        type: "heading",
        level: 3,
        text: "Core Componnet Clientlibs Model",
      },

      {
        type: "paragraph",
        text:
          "Okay so till now we have understood how a set of stylesheets and js script files are included in slightly. Now there comes a question what if a developer need more control over the clientlibs. He wants a certain set of stylesheet to be applied only to a printed copy of the page or ensure the clientlibs to load after completion of html parsing. Well these things cannot be achieved by including clientlibs in this way. AEM provides Core Component's Clientlibraries model to achieve this.",
      },

      {
        type: "paragraph",
        text:
          "Here we have created a simple demonstration component with editconfig as dialog. Also we have added a simple paragraph and provided a class called para to it. Also we have creared a clientlib folder called coreclientlib and added a stylesheet.css and script.js flies in the same way as demonstrated earlier.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/deonstrationcomponent.webp",
        alt: "deonstrationcomponent",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/coreclientlibs.webp",
        alt: "coreclientlibs",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/demonstrationcategories.webp",
        alt: "demonstrationcategories",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/stylesheet.webp",
        alt: "stylesheet",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/script.webp",
        alt: "script",
      },

      {
        type: "paragraph",
        text:
          "Now we have included this clientlib as a core component model clientlib and also we have specified a few attributes to it.",
      },

      {
        type: "code",
        language: "html",
        code: `<sly data-sly-use.clientlibs="\${'com.adobe.cq.wcm.core.components.models.ClientLibraries' @
    categories='demonstration.coreclientlibs',
    media='print',
    async=true,
    defer=true,
    onload='console.log(\\'loaded: \\' + this.src)',
    crossorigin='anonymous'}">
    \${clientlibs.jsAndCssIncludes @ context="unsafe"}
</sly>

<div>
  <p class="para">Hello Learner</p>
</div>`,
      },

      {
        type: "paragraph",
        text: "Let us understand every attribute.",
      },

      {
        type: "bulletList",
        items: [
          "media='print' : This ensures that the stylesheet css properties will be applied only to the printed copy. media='screen' and media='all' ensures that the css gets applied during on-screen rendering and for all the media types respectively.",
          "async='true' : This is an important parameter that contrtols the loading of the provided javascript files asynchronously. This means the javascript will keep on loading along with other resources and the page will also keep on rendering simultaneously. Now there could be some functions in the script which must load only after completion of page loading. In such scenarios, these functions must be added within DOMContentLoaded event listner explicitely.",
          "defer='true' : Now this ensures that javascript is loaded only after completion of parsing of all the escaped html characters and when the page content is ready to render. async and defer actually increase the page performance.",
          "onload : This attribute defines a simple function that gets called after complete loading of javascript.",
          "crossorigin='anonymous' : This handles Cross Origin Resurce Sharing. anonymous in this case is allowing all the other resources to load without authentication (both cookie creds authentication and HTTP authentication). This is dangerous. crossorigin='use-credentials' is always preferred.",
          "${clientlibs.jsAndCssIncludes @ context=\"unsafe\"} is actually an alternative to clientlib.all where context=\"unsafe\" tells that output is treated as raw HTML. ${clientlibs.cssIncludes @ context=\"unsafe\"} and ${clientlibs.jsIncludes @ context=\"unsafe\"} are again self expalinatory.",
          "The component is added on the page. The text colour remains as it is even if the css has loaded successfully. Also the console prints the onload function even if it is not written in script.js file. Also in the printed preview of the page, the css gets applied properly. All these observations hereby justify the conditional attributes applied.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/loadcss.webp",
        alt: "loadcss",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/loadjs.webp",
        alt: "loadjs",
      },

      {
        type: "image",
        src: "/images/blogs/sites/clientlibs/printmode.webp",
        alt: "printmode",
      },

      {
        type: "heading",
        level: 3,
        text: "Conclusion",
      },

      {
        type: "paragraph",
        text:
          "We have now a clear idea of what exactly are clientlibs, how to ceate them, which property provides which feature and how to include them in any component.",
      },

      {
        type: "paragraph",
        text:
          "I hope you enjoyed the learing and have found the blog informative.",
      },
    ],
  },
  {
    slug: "content-transfer-tool",
    title: "Content Transfer Tool (CTT) Overview: Migrating Content to AEM as a Cloud Service",
    category: "AEM Sites",
    date: "2024-09-14",
    author: "Ankit Pardhi",
    description:
      "Discover how the Content Transfer Tool migrates AEM content from on-premise or AMS to AEM Cloud.",
    content: [
      {
        type: "paragraph",
        text:
          "If you're planning to migrate your existing Adobe Experience Manager (AEM) content to AEM as a Cloud Service, the Content Transfer Tool (CTT) is your go-to solution. Developed by Adobe, this tool simplifies the migration process by enabling you to move content from an on-premise or AEM Managed Services (AMS) instance to AEM Cloud. In this, we’ll give you a straightforward overview of how the Content Transfer Tool works and why it’s essential for a smooth migration to the cloud.",
      },

      {
        type: "heading",
        level: 3,
        text: "What is the Content Transfer Tool (CTT)?",
      },

      {
        type: "paragraph",
        text:
          "The Content Transfer Tool is designed to help you migrate content from a Source AEM instance (such as on-premise or AMS) to a Target AEM Cloud Service instance. Not only does it move your content, but it also transfers groups automatically, making the migration process more efficient. One of the best features of the CTT is that it integrates seamlessly with the Cloud Acceleration Manager, providing you with an enhanced migration experience.",
      },

      {
        type: "paragraph",
        text: "Here’s why that matters:",
      },

      {
        type: "bulletList",
        items: [
          "Self-service extraction: Migrate content once and deploy it across multiple environments simultaneously.",
          "User-friendly experience: The tool has helpful loading indicators, error handling, and guardrails to keep things running smoothly.",
          "Persistent logs: You can always access ingestion logs for troubleshooting purposes.",
          "Validation reports: You get detailed reports to verify that everything migrated successfully, including groups and user roles.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "The Two Main Phases of Content Transfer",
      },

      {
        type: "paragraph",
        text:
          "The migration process using CTT happens in two main phases: Extraction and Ingestion. Let’s break these down.",
      },

      {
        type: "paragraph",
        text: "1. Extraction Phase",
      },

      {
        type: "paragraph",
        text:
          "In the extraction phase, content is pulled from the source AEM instance and placed into a temporary cloud storage area called a migration set. Adobe provides this cloud storage space, and it's where your content will \"live\" while it’s transferred from your source instance to the cloud.",
      },

      {
        type: "paragraph",
        text: "Key things to remember about the Extraction Phase:",
      },

      {
        type: "bulletList",
        items: [
          "Migration Set: A cloud storage area where the content is temporarily stored during migration.",
          "Top-Up Feature: After the initial content extraction, you can transfer only the new changes made to the content since the last transfer, reducing the need for a complete content freeze.",
        ],
      },

      {
        type: "paragraph",
        text: "2. Ingestion Phase",
      },

      {
        type: "paragraph",
        text:
          "Once the content is in the migration set, the next step is ingesting it into the target AEM Cloud Service instance. This phase moves the content from the migration set into your cloud instance.",
      },

      {
        type: "paragraph",
        text: "Key things to remember about the Ingestion Phase:",
      },

      {
        type: "bulletList",
        items: [
          "Delta Content Ingestion: Only new or changed content is applied during ingestion to avoid overwriting all your content.",
          "Wipe Option: Disable this option to apply only the changes (delta content) on top of the existing content.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "Attributes of a Migration Set",
      },

      {
        type: "paragraph",
        text:
          "A migration set is a critical part of the CTT workflow. Here are the essential details you need to know:",
      },

      {
        type: "bulletList",
        items: [
          "Maximum Migration Sets: You can create up to 10 migration sets within a single project in Cloud Acceleration Manager.",
          "Unique Naming: Each migration set must have a unique name for easy identification.",
          "Differential Content Transfer: With the top-up feature, you only transfer the content changes made since the previous migration, helping you minimize downtime before going live.",
        ],
      },

      {
        type: "paragraph",
        text:
          "Important: After the first big content transfer, Adobe recommends frequent differential content top-ups. This reduces the content freeze period during the final transfer before you go live on the AEM Cloud.",
      },

      {
        type: "heading",
        level: 3,
        text: "Migration Set Expiry",
      },

      {
        type: "paragraph",
        text:
          "A migration set will expire after approximately 45 days of inactivity. But don’t worry, you’ll get plenty of warnings before this happens. You can extend the expiration by performing any of these actions:",
      },

      {
        type: "bulletList",
        items: [
          "Edit the description of the migration set.",
          "Extract more content into it.",
          "Ingest content from it.",
        ],
      },

      {
        type: "paragraph",
        text:
          "You’ll also see visual indicators on the project card and in the migration job table, reminding you that a migration set is approaching expiration.",
      },

      {
        type: "heading",
        level: 3,
        text: "Prerequisites for Content Transfer Tool",
      },

      {
        type: "paragraph",
        text:
          "The Content Transfer Tool facilitates migration to AEM, but certain conditions must be met for successful usage:",
      },

      {
        type: "numberedList",
        items: [
          "AEM Version: Supports AEM 6.3 or higher.",
          "Segment Store Size: Handles repositories with fewer than 750 million JCR nodes and an online compacted size of up to 500 GB on Author and 50 GB on Publish. For larger sizes, consult Adobe Customer Care.",
          "Repository Size: Supports up to 20 TB for File Data Store. Larger sizes are possible for Amazon S3 and Azure Data Stores. Pre-copy steps can speed up transfers.",
          "Lucene Index Size: Total Lucene index size should not exceed 25 GB, excluding /oak:index/lucene and /oak:index/damAssetLucene.",
          "Immutable Paths: Cannot migrate immutable paths directly. For specific paths like /etc, AEM Forms to AEM Forms as a Cloud Service is supported.",
          "MongoDB Node Property Limit: MongoDB node property values must not exceed 16 MB. Run an oak-run script to identify and convert large property values to Binary if needed.",
        ],
      },

      {
        type: "paragraph",
        text: "What’s Next?",
      },

      {
        type: "paragraph",
        text:
          "Now that you have an understanding of the Content Transfer Tool (CTT) and how it can help move content from your existing AEM instance to AEM Cloud, it’s time to get started. Before diving into the tool, make sure to review the Prerequisites for Content Transfer Tool to ensure everything is in place for a smooth migration.",
      },

      {
        type: "heading",
        level: 3,
        text: "Step-by-Step Guide to Using the Content Transfer Tool (CTT) for AEM Migration",
      },

      {
        type: "paragraph",
        text: "Best Practices Before Running CTT",
      },

      {
        type: "bulletList",
        items: [
          "Run revision cleanup or compaction on the source AEM instance to reduce the repository size.",
          "Perform a data store consistency check using the oak-run jar to avoid any unexpected behavior.",
          "Ensure there is enough free disk space on the source instance (at least 1.5 times the repository size) for temporary extraction.",
        ],
      },

      {
        type: "paragraph",
        text: "Step 1: Installing the Content Transfer Tool",
      },

      {
        type: "paragraph",
        text:
          "First, install the Content Transfer Tool on your AEM source instance (AEM 6.3 or higher). You can download this tool from the AEM Software Distribution Portal (https://experience.adobe.com/downloads).",
      },

      {
        type: "numberedList",
        items: [
          "Go to the Software Distribution Portal and search for the Content Transfer Tool.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-transfer-tool/CttToolDownloadsImage1.webp",
        alt: "CTT Tool Downloads Image",
      },

      {
        type: "numberedList",
        start: 2,
        items: [
          "Download the tool and upload it to your AEM source instance using Package Manager.",
          "Once installed, you will see a new card for Content Transfer under tools > operations > content transfer on your AEM start screen.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-transfer-tool/ViewCttToolInAEM2.webp",
        alt: "View CTT Tool in your AEM instances",
      },

      {
        type: "paragraph",
        text: "Step 2: Retrieve your Access Token from the Cloud Service",
      },

      {
        type: "paragraph",
        text:
          "To migrate content using the Content Transfer Tool (CTT), you will need to retrieve an Access Token from your AEM as a Cloud Service environment. This token is required to authenticate the migration set when uploading content from the source AEM instance.",
      },

      {
        type: "paragraph",
        text: "Here’s how to retrieve your Access Token:",
      },

      {
        type: "numberedList",
        items: [
          "Login to your AEM as a Cloud Service Author instance using your admin credentials.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-transfer-tool/RetriveAccessToken3.webp",
        alt: "Retrieve Access Token",
      },

      {
        type: "numberedList",
        start: 2,
        items: [
          "Once logged in, navigate to the following URL in your browser: /libs/granite/migration/token.json This will trigger the system to generate and display the Access Token needed for the migration.",
          "The JSON response will appear on the screen, containing your Access Token. The format of the JSON response will look like this: { \"token\": \"your-access-token-string\" }",
          "Copy the Access Token from the JSON response and save it securely for use in the migration process. You’ll need to input this token when setting up your Migration Set in the Transfer Tool UI.",
        ],
      },

      {
        type: "paragraph",
        text: "Step 3: Creating a Migration Set",
      },

      {
        type: "paragraph",
        text:
          "The next step is to create a migration set. A migration set defines all the content (pages, digital assets, etc.) you wish to transfer.",
      },

      {
        type: "numberedList",
        items: [
          "Go to the Content Transfer Tool UI in AEM, and click Create New Migration Set.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-transfer-tool/CreateMigrationSet4.webp",
        alt: "creating a migration set",
      },

      {
        type: "numberedList",
        start: 2,
        items: [
          "Name your migration set (for example, “WKND Base Content”).",
          "Enter the Cloud Service Destination URL. This is the URL of the AEM as a Cloud Service environment you want to migrate to.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-transfer-tool/UploadAccessToken5.webp",
        alt: "upload access token",
      },

      {
        type: "numberedList",
        start: 4,
        items: [
          "Enter the Retrieved Access Token from the cloud service by navigating to /libs/granite/migration/token.json.",
          "Choose which content paths to include in your migration set (e.g., /content/WKND, /conf/WKND, /assets/WKND).",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-transfer-tool/AddMigrationPath6.webp",
        alt: "Add path for migration",
      },

      {
        type: "numberedList",
        start: 6,
        items: [
          "Save the migration set. After this, a new migration set will be created.",
        ],
      },

      {
        type: "paragraph",
        text: "Step 4: Extraction Phase",
      },

      {
        type: "paragraph",
        text:
          "Now it’s time to extract the content from your AEM source instance.",
      },

      {
        type: "numberedList",
        items: [
          "Select your migration set and click Extract.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-transfer-tool/ExtractMigrationSet7.webp",
        alt: "Extract Migration set",
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-transfer-tool/RunningMigrationset8.webp",
        alt: "Image of Running Migration Set",
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-transfer-tool/FinishedMigrationSet9.webp",
        alt: "Finished Migration set running",
      },

      {
        type: "numberedList",
        start: 2,
        items: [
          "The extraction will pull the content from your source repository and upload it to Adobe-managed temporary cloud storage.",
          "You can monitor the extraction by viewing the logs.",
        ],
      },

      {
        type: "paragraph",
        text: "Step 5: Ingestion Phase",
      },

      {
        type: "paragraph",
        text:
          "Once extraction is complete, the next step is to ingest the content into your AEM as a Cloud Service environment.",
      },

      {
        type: "numberedList",
        items: [
          "Select your migration set again and click Ingest.",
          "Choose whether to wipe existing content on the target cloud instance. It’s recommended to wipe the target instance for the first migration to ensure a clean environment.",
          "You can choose to ingest on the Author, Publish, or both environments.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-transfer-tool/InjectMigrationSet10.webp",
        alt: "Inject Migration Set",
      },

      {
        type: "numberedList",
        start: 4,
        items: [
          "Click Ingest to start the process. You can monitor the ingestion progress in the logs.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-transfer-tool/PandingInjection11.webp",
        alt: "Running Injection",
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-transfer-tool/FinishedInjectionMigrationSet12.webp",
        alt: "Injection Finished",
      },

      {
        type: "paragraph",
        text: "Step 6: Verifying the Migration",
      },

      {
        type: "paragraph",
        text:
          "Once the ingestion process is complete, log into your AEM as a Cloud Service environment to verify that all your content has been successfully transferred.",
      },

      {
        type: "numberedList",
        items: [
          "Navigate to Sites Console to check if all pages have been migrated.",
          "Check Assets to ensure all digital files have been migrated.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/content-transfer-tool/ViewMigationInCloudAEM13.webp",
        alt: "View content in AEM Cloud instance",
      },

      {
        type: "paragraph",
        text: "Step 7: Top-up Migration (Delta Migration)",
      },

      {
        type: "paragraph",
        text:
          "For ongoing projects, content might still be edited on the AEM source instance after the initial migration. The Content Transfer Tool allows you to perform Delta Migrations, where only newly added or changed content is migrated.",
      },

      {
        type: "numberedList",
        items: [
          "After creating new content (e.g., a new page), go to the Content Transfer Tool and select your migration set.",
          "Click Extract, but this time, turn off the option to overwrite the staging container to preserve previously migrated content.",
          "Perform the Ingestion as usual, and the new or updated content will be added to the AEM cloud environment.",
          "Verify that the new content has been migrated by checking your Sites Console and Assets in the cloud.",
        ],
      },

      {
        type: "paragraph",
        text:
          "Thank you for taking the time to explore this blog. I hope it provided valuable insights and enhanced your understanding of the topic.",
      },

      {
        type: "paragraph",
        text:
          "Stay tuned for more informative content, and keep learning and growing! 😊",
      },
    ],
  },
  {
    slug: "query-builder",
    title: "Query Builder in AEM",
    category: "AEM Sites",
    date: "2023-05-23",
    author: "Suchita Mishra",
    description:
      "Explore how AEM Query Builder retrieves repository content using flexible search predicates.",
    content: [
      {
        type: "paragraph",
        text:
          "If we talk about the Search APIs available in AEM, we have two options available with us i.e., Query Builder and JCR SQL2. We'll look into the query builder concept in this blog and get all the questions related to this topic cleared. So, let's get started.",
      },

      {
        type: "heading",
        level: 3,
        text: "Query Builder",
      },

      {
        type: "paragraph",
        text:
          "In Adobe Experience Manager (AEM), a Query Builder is a powerful and flexible tool that allows us to create and execute queries to retrieve content from the AEM repository. It provides a structured and efficient way to search for specific content based on various criteria.",
      },

      {
        type: "paragraph",
        text:
          "The Query Builder uses SQL-like syntax, but it's specifically designed for querying the AEM repository. We can build queries using a web-based interface or by constructing queries programmatically using the QueryBuilder API. It basically simplifies the process of searching for content and enables users to define complex queries with conditions and filters.",
      },

      {
        type: "paragraph",
        text:
          "For example, we could ask the Query Builder to find all pages of a certain type in a specific part of our website. It's a handy tool for quickly locating and working with the content we're interested in within AEM.",
      },

      {
        type: "paragraph",
        text:
          "We have a Query Builder Debugger Tool which can be used to execute the search queries on the JCR (Java Content Repository). We can use this tool for dry run purposes for our AEM queries.",
      },

      {
        type: "paragraph",
        text: "AEM Query Builder debugger URL:",
      },

      {
        type: "paragraph",
        text: "http://localhost:4502/libs/cq/search/content/querydebug.html",
      },

      {
        type: "image",
        src: "/images/blogs/sites/query-builder/query-builder-console.png",
        alt: "Query debugger console",
      },

      {
        type: "paragraph",
        text: "In the Query builder console, run a simple query like:",
      },

      {
        type: "paragraph",
        text: "type = cq:Page",
      },

      {
        type: "paragraph",
        text:
          "This query will provide us all the nodes having their primary type as cq:Page and we will get the search results in the form of hits.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/query-builder/query-debugger-console.png",
        alt: "Query debugger console",
      },

      {
        type: "paragraph",
        text:
          "Query builder comprises of queries, so let's just look into what all a query consists of:",
      },

      {
        type: "numberedList",
        items: [
          "Predicates - If we don't provide any parameter, the predicate type is mirrored in the final query.",
          "Parameters - Predicate parameter",
          "Value - Value of predicate",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/query-builder/query.png",
        alt: "Query",
      },

      {
        type: "heading",
        level: 3,
        text: "List of Standard predicates",
      },

      {
        type: "paragraph",
        text:
          "Here's the list of available standard predicates that we'll be using to write our query.",
      },

      {
        type: "bulletList",
        items: [
          "type : It is used for searching a particular type of node only. For ex. cq:Page, dam:Asset, nt:unstructured, etc.",
          "path : It defines a particular path or hierarchy that needs to be searched.",
        ],
      },

      {
        type: "bulletList",
        items: [
          "path.self = true : If true, it searches the sub nodes including the main node given in the path and if false, it searches the sub nodes only.",
          "path.exact = true : If it is true, the exact path is matched, if false all the descendants are included.",
          "path.flat = true : If true, then it searches the direct children only.",
        ],
      },

      {
        type: "bulletList",
        items: [
          "property : This is used for search based on JCR property.",
        ],
      },

      {
        type: "bulletList",
        items: [
          "property.value : It defines the property value to be searched. Multiple values of the particular property could be given using n_property.value = xyz.",
          "property.depth : It is used to specify the number of levels to search beneath a node. For example, when property.depth is set to 3, the search extends up to 3 levels below the base node. This parameter is mostly used for nested search.",
          "property.and : In the case of multiple properties, the default behavior involves applying an OR operator. To switch to an AND operator set property.and = true.",
          "property.operation : equals, unequals, like, not, exists.",
        ],
      },

      {
        type: "bulletList",
        items: [
          "“equals” for exact match (default)",
          "“unequals” for unequality comparison",
          "“like” for using the jcr:like xpath function",
          "“not” for no match, (value param will be ignored)",
          "“exists” for existence matches. (value can be true – property must exist).",
        ],
      },

      {
        type: "bulletList",
        items: [
          "fulltext : used for full text search",
        ],
      },

      {
        type: "bulletList",
        items: [
          "fulltext.relPath : can specify the relative path to search in (eg. property or subnode)",
        ],
      },

      {
        type: "bulletList",
        items: [
          "daterange : This predicate facilitates searching within a date property range.",
        ],
      },

      {
        type: "bulletList",
        items: [
          "daterange.property : Specify the date property on which query needs to run.",
          "daterange.lowerBound : Fix a lower bound date range eg. 2020-08-31",
          "daterange.lowerOperation : “>” (default) or “>=”",
          "daterange.upperBound : Fix a upper bound date range eg. 2023-01-25",
          "daterange.upperOperation : “<” (default) or “<=”",
        ],
      },

      {
        type: "bulletList",
        items: [
          "relativedaterange : It is an extension of daterange which uses relative offsets to server time. It also supports 1s 2m 3h 4d 5w 6M 7y.",
        ],
      },

      {
        type: "bulletList",
        items: [
          "relativedaterange.lowerBound : Lower bound offset, default=0",
          "relativedaterange.upperBound : Upper bound offset.",
        ],
      },

      {
        type: "bulletList",
        items: [
          "nodename : This is used to search exact node names within the result set. It allows certain wildcards, such as nodename = text*, which searches for \"text\" and any characters following it. Similarly, nodename = text? looks for all records starting with \"text\" but excludes results containing only \"text.\"",
          "tagid : This predicate is used to search for a specific tag on a page by specifying its exact tagid. (Note:- It searches for tags within /etc/tags, so the service user used for the query must have access to this path as well.)",
        ],
      },

      {
        type: "bulletList",
        items: [
          "tagid.property : this can be used to specify the path of node where tags are stored.",
        ],
      },

      {
        type: "bulletList",
        items: [
          "tagsearch : It searches for matching tag.",
          "mainasset : mainasset=true means search only Dam Asset and not the subassets.",
          "group : This predicate is used to create logical conditions in your query. You can create complex conditions using OR & AND operators in different groups.",
          "orderBy : This predicate is used to sort the result sets obtained in the query. e.g. orderby=@jcr:score or orderby=@jcr:content/cq:lastModified",
        ],
      },

      {
        type: "bulletList",
        items: [
          "orderby.sort : You may define the sorting way for the search results e.g. orderby.desc=true or orderby.sort = desc for descending and orderby.asc=true or orderby.sort=asc for ascending.",
          "orderby.case : support case insensitive orderby.case=ignore (since 6.2)",
          "orderby=my predicate (eg: orderby=path) : this can also be used to sort by path.",
        ],
      },

      {
        type: "bulletList",
        items: [
          "p.hits=full : Use this when you want to return all the properties in a node.",
          "p.hits=selective : Use this if you want to return selective properties in search results. Use this with p.properties=sling:resourceType jcr:primaryType Example :- p.properties = jcr:path",
          "p.nodedepth : Use this when you need properties of a node and its child nodes in the same search result. Use this with p.hits=full",
          "p.facets=true : This will be used to Search Facets based search for the assigned Query. If you want to calculate the count of tags which are present in your search result or you want to know how many templates for a particular page are there etc, you may go with Facets based search.",
          "p.guesstotal : The purpose of the p.guessTotal parameter is to return the appropriate number of results that can be shown by combining the minimum viable p.offset and p.limit values. The advantage of using this parameter is improved performance with large result sets. This avoids calculating the full total (e.g calling result.getSize()) and reading the entire result set.",
          "p.offset : defines start of index means from which index you want to fetch records from query result.",
          "p.limit : defines page size. In simple words how many records you want to fetch. Each query result will display results from p.offset to p.offset + p.limit.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "Query Builder JAVA API",
      },

      {
        type: "paragraph",
        text:
          "Now that we've gone through the number of standard predicates available with us, let's use these queries in our java code and get the required result via Java API.",
      },

      {
        type: "paragraph",
        text: "We can use AEM queries in three ways in java:",
      },

      {
        type: "numberedList",
        items: [
          "Using HTTP request",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `Session session = request.getResourceResolver().adaptTo(Session.class);
PredicateGroup root = PredicateGroup.create(request.getParameterMap());
Query query = queryBuilder.createQuery(root, session);`,
      },

      {
        type: "numberedList",
        start: 2,
        items: [
          "Using Predicates",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `PredicateGroup group = new PredicateGroup();
group.add(new Predicate("mypath", "path").set("path", "/content/mysite"));
group.add(new Predicate("mytype", "type").set("type", "cq:Page"));
Query query = queryBuilder.createQuery(group, session);`,
      },

      {
        type: "numberedList",
        start: 3,
        items: [
          "Using Hash Map",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `Map<String, String> predicateMap = new HashMap();
predicateMap.put("path", "/content/mysite");
predicateMap.put("type", "cq:Page");
Query query = queryBuilder.createQuery(PredicateGroup.create(predicateMap), session);`,
      },

      {
        type: "paragraph",
        text:
          "When we get the query, we can simply get the search results in the form of hits and we can iterate over the list of results i.e., hits and use that result in our java code.",
      },

      {
        type: "code",
        language: "java",
        code: `//Get search results
SearchResult result = query.getResult();
List<Hit> resultList = result.getHits();

//Iterate query results
for (Hit hit : resultList ) {
    // Write your logic here
}`,
      },

      {
        type: "paragraph",
        text:
          "Hope you got the concept of query builder and how to write queries and use those queries in our java code as well. We'll go through some sample set of examples of creating queries in the next blog.",
      },

      {
        type: "paragraph",
        text: "Thanks for reading! 😄",
      },
    ],
  },
  {
    slug: "experience-fragment",
    title: "Experience Fragments in AEM",
    category: "AEM Sites",
    date: "2024-09-30",
    author: "Shruti Meshram",
    description:
      "Learn how Experience Fragments enable reusable, consistent experiences across pages and channels.",
    content: [
      {
        type: "paragraph",
        text: "Hi, happy to find you here. Hope you are doing well.",
      },

      {
        type: "heading",
        level: 3,
        text: "Experiencefragments in AEM",
      },

      {
        type: "paragraph",
        text:
          "Here we will be understanding the functionality of experience fragments. How to create them and what functionality do they provide.",
      },

      {
        type: "heading",
        level: 3,
        text: "Introduction",
      },

      {
        type: "paragraph",
        text:
          "Suppose you have a component which will remain the same throughout the pages of your website such that even its authored content also remains the same, it becomes tidious to add the component on every page and author the same data to it. In order to solve this, aem provides experience fragments. It provides a component to become an experience fragment and serve the discussed functionality.",
      },

      {
        type: "heading",
        level: 3,
        text: "Creation of an Experience Fragment",
      },

      {
        type: "paragraph",
        text:
          "Here we will be using a demo componentnent as an experience fragment. To create n experience fragment :",
      },

      {
        type: "bulletList",
        items: [
          "Go to the experience fragments from navigation, and create a folder. In this folder, you will have your experience fragment.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/experience-fragment/experiencefrag.webp",
        alt: "experiencefrag",
      },

      {
        type: "image",
        src: "/images/blogs/sites/experience-fragment/create-folder.webp",
        alt: "create folder",
      },

      {
        type: "bulletList",
        items: [
          "Now create an experience fragment. We need to select a template and for the purpose we are using web variation.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/experience-fragment/createef.webp",
        alt: "createef",
      },

      {
        type: "image",
        src: "/images/blogs/sites/experience-fragment/creation-of-ex1.webp",
        alt: "creation of ex1",
      },

      {
        type: "bulletList",
        items: [
          "Go to edit template, add the demo component to the policies and now add the component to the container. This is how you have succcessfully created your experience fragment. Author it and see the result on the page. For the purpose we are displaying the text and path fields only via properties.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/experience-fragment/creation-of-ex2.webp",
        alt: "creation of ex2",
      },

      {
        type: "image",
        src: "/images/blogs/sites/experience-fragment/creation-of-ex4.webp",
        alt: "creation of ex4",
      },

      {
        type: "image",
        src: "/images/blogs/sites/experience-fragment/creation-of-ex5.webp",
        alt: "creation of ex5",
      },

      {
        type: "image",
        src: "/images/blogs/sites/experience-fragment/creation-of-ex6.webp",
        alt: "creation of ex6",
      },

      {
        type: "bulletList",
        items: [
          "Now having created the experience fragment, you need to add this in your website pages. This is done by adding the experience fragment component to the template and authoring it by providing the path to our experience fragment.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/experience-fragment/creation-of-ex7.webp",
        alt: "creation of ex7",
      },

      {
        type: "image",
        src: "/images/blogs/sites/experience-fragment/creation-of-ex8.webp",
        alt: "creation of ex8",
      },

      {
        type: "image",
        src: "/images/blogs/sites/experience-fragment/creation-of-ex9.webp",
        alt: "creation of ex9",
      },

      {
        type: "image",
        src: "/images/blogs/sites/experience-fragment/creation-of-ex10.webp",
        alt: "creation of ex10",
      },

      {
        type: "image",
        src: "/images/blogs/sites/experience-fragment/creation-of-ex11.webp",
        alt: "creation of ex11",
      },

      {
        type: "image",
        src: "/images/blogs/sites/experience-fragment/creation-of-ex12.webp",
        alt: "creation of ex12",
      },

      {
        type: "image",
        src: "/images/blogs/sites/experience-fragment/creation-of-ex13.webp",
        alt: "creation of ex13",
      },

      {
        type: "bulletList",
        items: [
          "Now this creates your experience fragment particular to the template. Every page created by this template will have this component.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "Conclusion",
      },

      {
        type: "paragraph",
        text:
          "Here we have understood how to create an experience fragment and how to use them. Also we have briefly discussed the use case of experience fragments.",
      },

      {
        type: "paragraph",
        text:
          "I hope you enjoyed blog and the concept of experience fragments.",
      },
    ],
  },
  {
    slug: "osgi-factory-cardinality-and-limit",
    title: "OSGi Factory Configuration cardinality and limit",
    category: "AEM Sites",
    date: "2024-08-17",
    author: "Shruti Meshram",
    description:
      "Understand OSGi factory configuration cardinality and limits when managing multiple configuration instances in AEM.",
    content: [
      {
        type: "paragraph",
        text: "Happy to find you here. Welcome to another learning.",
      },

      {
        type: "heading",
        level: 4,
        text: "Use case for OSGi Factory Configuration",
      },

      {
        type: "paragraph",
        text:
          "Lets say we have a configuration and we need it to have different values for its attributes defined for different scenarios. Speaking of a hypothetical scenario, say you are dealing with multiple api calls whose urls and timeout period are consumed via OSGi configurations. You need to create a separate configuration each having the same attributes and same attribute definations which are api url and timeout period. In this case aem provides a facility to group them all to be various instances of one OSGi configuration which is declared as an OSGi factory.",
      },

      {
        type: "heading",
        level: 4,
        text: "Creation of OSGi Configuration Factory",
      },

      {
        type: "bulletList",
        items: [
          "Lets begin by creating an interface called ApiHandlerService, where you will add the methods which you want to find in the configuration.",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `package com.local.core.services;

public interface ApiHandlerService {
    String getApiEndpont();
    int getTimeout();
    String callApi();
}`,
      },

      {
        type: "bulletList",
        items: [
          "Now we need to create the respective object class defination for the same interface. We need to add the name to the same. This is the name from which we will be able to find configuration in the felix console. Then for each method, we need to add the attribute defination, consisting of two properties, name and description. We can also add the default value for the method, the way we have added timeout. Also we have added limit to the timeout by fixing its range.",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `package com.local.core.services;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

@ObjectClassDefinition(
        name = "Api Handeler Configuration"
)
public @interface ApiHandlerConfig {
    @AttributeDefinition(
            name = "Api Endpoint",
            description = "This provides the enpoint url"
    )
    String apiEndpoint();

    @AttributeDefinition(
            name = "Timeout in seconds",
            description = "This provides the timeout in seconds",
            min = "1",
            max = "60"
    )
    int timeout() default 50;
}`,
      },

      {
        type: "bulletList",
        items: [
          "After creating the object class defination, we need to create the implementation class. In Component annotation, provide the property configurationPolicy = ConfigurationPolicy.REQUIRE. This is added for factory configuration. Also in Designate annotation, provide a property factory = true. This ensures successful creation of the factory configuration. In callApi() method, we are actually consuming the values set in an instance of the configuration factory.",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `package com.local.core.services.impl;
import com.local.core.services.ApiHandlerConfig;
import com.local.core.services.ApiHandlerService;
import org.apache.sling.caconfig.annotation.Configuration;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.ConfigurationPolicy;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.metatype.annotations.Designate;

@Component(
    service = ApiHandlerService.class,
    configurationPolicy = ConfigurationPolicy.REQUIRE, // This is for factory configuration
    immediate = true
)
@Designate(ocd= ApiHandlerConfig.class, factory = true)
public class ApiHandlerServiceImpl implements ApiHandlerService {

    private String apiEndpoint;
    private int timeout;

    @Activate
    @Modified
    protected void activate(ApiHandlerConfig config){
        this.apiEndpoint = config.apiEndpoint();
        this.timeout = config.timeout();
    }

    @Override
    public String getApiEndpont() {
        return "";
    }

    @Override
    public int getTimeout() {
        return 0;
    }

    @Override
    public String callApi() {
        return "Calling at API :: " + apiEndpoint + " with timeout :: " + timeout;
    }
}`,
      },

      {
        type: "bulletList",
        items: [
          "Now after creating the factory configuration, you will need to cisit the felix console (http://localhost:4502/system/console/configMgr) to find the configuration factory in there with a + sign.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/osgi-factory-cardinality-and-limit/plus.webp",
        alt: "plus",
      },

      {
        type: "bulletList",
        items: [
          "You need to add instances in the factory which will get stored with a unique Persistent Identity (PID). Here we have created two instances for the factory with fake api, one showing the todo and the other showing the recipies.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/osgi-factory-cardinality-and-limit/configuration1.webp",
        alt: "configuration1",
      },

      {
        type: "image",
        src: "/images/blogs/sites/osgi-factory-cardinality-and-limit/configuration2.webp",
        alt: "configuration2",
      },

      {
        type: "bulletList",
        items: [
          "After creating these, we now will create a manager class which will iterate over the instances and create get the values entered for the endpoint and respective timeouts. Here in order to consume multiple values from the OSGi factory, we have created a list of type ApiHandlerService via Reference annotation with property cardinality = ReferenceCardinality.MULTIPLE. This tells the sling that with this reference, multiple services will be bound.",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `package com.local.core.services.impl;

import com.local.core.services.ApiHandlerService;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.annotations.ReferenceCardinality;
import java.util.ArrayList;
import java.util.List;

@Component(
        service = ApiHandlerManager.class
)
public class ApiHandlerManager {

    @Reference(cardinality = ReferenceCardinality.MULTIPLE)
    private List<ApiHandlerService> apiHandlerServices;

    public void handlerRequests() {
        List<String> requestsHandeled = new ArrayList<>();
        for(ApiHandlerService apiHandlerService : apiHandlerServices){
            requestsHandeled.add(apiHandlerService.callApi());
        }
        for(String requestOutput : requestsHandeled)
            System.out.println(requestOutput);
    }
}`,
      },

      {
        type: "bulletList",
        items: [
          "Now we will retrieve the values hence recieved from a servlet. Here particularly in this example we are showing the values in stdout.log file in crx-quickstart\\logs\\stdout.",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `package com.local.core.servlets;

import com.local.core.services.impl.ApiHandlerManager;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import java.io.IOException;
import java.io.PrintWriter;

@Component(
        service = Servlet.class,
        property = {
                "sling.servlet.paths=/bin/apiHandler",
                "sling.servlet.methods=GET"
        }
)
public class ApiHandlerServlet extends SlingSafeMethodsServlet {
    @Reference
    private ApiHandlerManager apiHandlerManager;
    @Override
    protected void doGet(SlingHttpServletRequest request,
     SlingHttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.println("Servlet Invoked");
        apiHandlerManager.handlerRequests();
        out.println("check logs");
    }
}`,
      },

      {
        type: "image",
        src: "/images/blogs/sites/osgi-factory-cardinality-and-limit/output.webp",
        alt: "output",
      },

      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },

      {
        type: "paragraph",
        text:
          "So here we have understood the concepts of factory configurations with a small example of cadinality and limit. Also we have understood how to retrieve the values of each instance via a servlet. Here we have printed the values in logs but you can have the direct access to the values in servlet itself by changing the return type of the method handlerRequests().",
      },

      {
        type: "paragraph",
        text:
          "I hope you enjoyed the learing and have found the blog informative.",
      },
    ],
  },
  {
    slug: "cloud-services",
    title: "AEM as a Cloud Service: Powering Next-Generation Digital Experiences",
    category: "AEM Sites",
    date: "2023-05-24",
    author: "Nitish Bisen",
    description:
      "Explore the cloud-native capabilities of AEM as a Cloud Service for scalable digital experiences.",
    content: [
      {
        type: "heading",
        level: 3,
        text: "What’s AEM as a Cloud Service",
      },

      {
        type: "paragraph",
        text:
          "It is designed to provide a scalable, agile, and fully managed digital experience platform for organizations to create, manage, and deliver compelling digital experiences across channels.",
      },

      {
        type: "heading",
        level: 3,
        text: "Features of AEM as a Cloud Service",
      },

      {
        type: "paragraph",
        text:
          "AEM as a Cloud Service offers a range of powerful features designed to enhance digital experience management and streamline content delivery. Here are some key features of AEM as a Cloud Service:",
      },

      {
        type: "image",
        src: "/images/blogs/sites/cloud-services/features.jpg",
        alt: "AEM Cloud Features",
      },

      {
        type: "heading",
        level: 4,
        text: "Scalibility",
      },

      {
        type: "paragraph",
        text:
          "One of the significant advantages of Adobe Cloud Services for businesses is its scalability. With Adobe Cloud Services, you can effortlessly adjust your resources up or down based on your needs. Adobe allows you to increase or decrease instances as per your request, providing flexibility and cost-effectiveness. Moreover, Adobe Cloud Services features reactive auto-scaling capabilities, which intelligently detect when additional capacity is needed. This proactive approach ensures that your applications and services can handle sudden spikes in traffic or increased workload seamlessly, without compromising performance or user experience.",
      },

      {
        type: "heading",
        level: 4,
        text: "Updates",
      },

      {
        type: "paragraph",
        text:
          "AEM as a Cloud Service provides continuous updates and improvements without the need for manual upgrades. This ensures that businesses always have access to the latest features, security patches, and performance enhancements.",
      },

      {
        type: "heading",
        level: 4,
        text: "Security and Compilances",
      },

      {
        type: "paragraph",
        text:
          "Adobe places a strong emphasis on security and compliance within AEM as a Cloud Service. It incorporates robust security measures, undergoes regular audits, and holds various compliance certifications to guarantee data protection and adherence to regulatory standards.",
      },

      {
        type: "heading",
        level: 4,
        text: "API's & Integration",
      },

      {
        type: "paragraph",
        text:
          "AEM as a Cloud Service offers comprehensive API and integration capabilities, including RESTful and GraphQL APIs, Adobe I/O Runtime for custom microservices, seamless integration with Adobe Experience Cloud solutions and third-party systems, headless CMS support, integration frameworks like Adobe Cloud Manager, robust security measures, and authentication mechanisms. These features enable organizations to build connected digital experiences, leverage data-driven insights, extend functionality through custom developments, and integrate seamlessly with external systems and services.",
      },

      {
        type: "heading",
        level: 4,
        text: "Low Cost",
      },

      {
        type: "paragraph",
        text:
          "AEM as a Cloud Service provides excellent value for businesses as it offers a cost-effective solution compared to similar offerings in the market. Despite its affordability, it doesn't compromise on quality and provides a wide range of robust features and high-performance capabilities.",
      },

      {
        type: "heading",
        level: 4,
        text: "Microservices Architecture",
      },

      {
        type: "paragraph",
        text:
          "Microservice architecture in AEM as a Cloud Service enables modular and scalable development by breaking down complex applications into smaller, independently deployable services. This approach enhances flexibility, facilitates continuous delivery, and improves fault tolerance and resilience in AEM implementations.",
      },

      {
        type: "heading",
        level: 3,
        text: "Comparing Cloud-Based Infrastructure with On-Premise and Adobe Managed Solutions",
      },

      {
        type: "image",
        src: "/images/blogs/sites/cloud-services/comparing.jpg",
        alt: "AEM Cloud vs On-Premises",
      },

      {
        type: "bulletList",
        items: [
          "Author and Publisher instances in the system can be seamlessly scaled up or down in response to real-time traffic demands, ensuring continuous availability without any downtime. This system supports both vertical scaling (increasing resources on existing instances) and horizontal scaling (adding more instances to the infrastructure).",
          "Access to the AEM Author environment is managed through Adobe Identity Management Services (IMS) and administered via the Adobe Admin Console. AEM Assets as a Cloud Service exclusively provides an authoring environment where content creation and management take place. Notably, the system maintains a clear separation between code/configurations and content.",
          "Data handling within the Author and Publish instances is facilitated through the Content Repository Service, enabling efficient reading and storage operations. Changes to code and configurations are now managed via Git repositories integrated with the Cloud Manager. Deployment of these changes occurs through specialized production or non-production pipelines within the Cloud Manager environment, with APIs available for pipeline triggering and monitoring.",
          "The system leverages the Sling Content Distribution feature for content publishing, diverging from traditional Content Replication methods. This architecture fully decouples Author and Publish instances, ensuring seamless publish events and consistent state across the publishing service. This model operates on the principles of the Publish-Subscribe model.",
          "For handling heavy asset loads, a scalable shared data store is implemented to store and serve all assets, thereby relieving primary AEM instances from this resource-intensive task.",
          "Additionally, advanced networking capabilities are available via the Cloud Manager APIs, allowing for the configuration of Flexible and Dedicated egress IP setups as well as Virtual Private Network (VPN) connections, enhancing the system's networking flexibility and security measures.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "AEM Cloud Architecture Overview",
      },

      {
        type: "paragraph",
        text:
          "The AEM Cloud architecture is designed to provide a robust and scalable platform for managing and delivering digital experiences. At its core, the architecture comprises several key components that work together seamlessly to ensure efficient content management, delivery, and operational excellence. Let's explore these components in detail:",
      },

      {
        type: "image",
        src: "/images/blogs/sites/cloud-services/architecture.webp",
        alt: "AEM as a Cloud Architecture",
      },

      {
        type: "paragraph",
        text:
          "Image Source : Adobe (https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/overview/architecture#:~:text=AEM%20as%20a%20Cloud%20Service%20is%20made%20up%20of%20high,on%20their%20respective%20use%20cases.)",
      },

      {
        type: "heading",
        level: 4,
        text: "Content Management Service",
      },

      {
        type: "paragraph",
        text:
          "In the context of Content Management in Adobe Experience Manager (AEM) as a Cloud Service, Identity Management Service and Asset Compute Service are two important components that enhance the capabilities and efficiency of managing digital content.",
      },

      {
        type: "heading",
        level: 4,
        text: "- Identity Management Service",
      },

      {
        type: "bulletList",
        items: [
          "User Authentication: IMS handles user authentication, allowing users to securely log in to the AEM environment using their credentials.",
          "Access Controls: IMS enforces access controls based on user roles and permissions, ensuring that users have appropriate access to content and functionality.",
          "Single Sign-On (SSO): IMS supports Single Sign-On integration, allowing users to access multiple applications and services within the AEM ecosystem without having to re-enter their credentials.",
          "Identity Federation: IMS can integrate with external identity providers (IdPs) for identity federation, enabling seamless authentication and access management across different systems.",
          "User Profile Management: IMS manages user profiles, preferences, and settings, providing a personalized experience for users based on their roles and permissions.",
        ],
      },

      {
        type: "heading",
        level: 4,
        text: "- Asset Compute Service",
      },

      {
        type: "paragraph",
        text:
          "Asset Compute Service (ACS) in AEM as a Cloud Service is a serverless compute platform that automates the processing and transformation of digital assets (images, videos, documents, etc.) within the AEM environment.",
      },

      {
        type: "heading",
        level: 4,
        text: "Experience Delivery Service",
      },

      {
        type: "paragraph",
        text:
          "The Experience Delivery Service focuses on delivering rich and personalized experiences to end-users across various channels and devices. It leverages content targeting, personalization algorithms, and adaptive delivery mechanisms to optimize user engagement and satisfaction.",
      },

      {
        type: "heading",
        level: 4,
        text: "- Data Service",
      },

      {
        type: "paragraph",
        text:
          "The Data service in AEM as a Cloud Service plays a crucial role in providing access to essential customer data, including licensing metrics (e.g., Content Requests, Storage, Users) and usage reports (e.g., uploads, downloads). This data can be accessed through APIs or within product user interfaces like Cloud Manager, enabling organizations to monitor and analyze key performance indicators related to their digital experiences.",
      },

      {
        type: "heading",
        level: 4,
        text: "- Real-Users Metric Service",
      },

      {
        type: "paragraph",
        text:
          "AEM as a Cloud Service is responsible for gathering essential metrics from customer experiences, including but not limited to page views, core web vitals, and conversion events. It also handles queries related to this data",
      },

      {
        type: "heading",
        level: 4,
        text: "Container Orchestration Service",
      },

      {
        type: "paragraph",
        text:
          "The Container Orchestration Service orchestrates and manages containerized applications within the AEM Cloud environment. It ensures scalability, resilience, and efficient resource utilization through automated deployment, scaling, and monitoring of containerized services.",
      },

      {
        type: "heading",
        level: 4,
        text: "Edge Delivery Services",
      },

      {
        type: "paragraph",
        text:
          "AEM can seamlessly integrate with GitHub code repositories, enabling developers to build and enhance experiences with Edge Delivery Services. This integration unlocks a range of new configuration options for the associated experiences. These options include setting up the Adobe-Managed CDN for optimized content delivery, as well as accessing valuable licensing metrics and SLA reports for performance monitoring and optimization.",
      },

      {
        type: "heading",
        level: 4,
        text: "Content Repository Services",
      },

      {
        type: "paragraph",
        text:
          "Content Repository Services provide a centralized and scalable storage solution for digital assets, documents, and content fragments. They offer version control, metadata management, and efficient retrieval mechanisms to support content-rich applications and workflows.",
      },

      {
        type: "heading",
        level: 4,
        text: "Replication Service",
      },

      {
        type: "paragraph",
        text:
          "The Replication Service facilitates content synchronization and replication across multiple environments and geographic locations. It ensures consistency and availability of content by efficiently transferring updates, changes, and configurations between different instances of the AEM Cloud architecture.",
      },

      {
        type: "heading",
        level: 4,
        text: "Testing Service",
      },

      {
        type: "paragraph",
        text:
          "The Testing Service enables automated testing, validation, and quality assurance of digital experiences and applications within the AEM Cloud environment. It supports continuous integration (CI) and continuous delivery (CD) pipelines, ensuring reliable and error-free deployments.",
      },

      {
        type: "heading",
        level: 4,
        text: "CI/CD Service",
      },

      {
        type: "paragraph",
        text:
          "The CI/CD Service streamlines the software development lifecycle by automating build, test, and deployment processes. It integrates with version control systems, testing frameworks, and deployment pipelines to enable rapid iteration, feedback, and delivery of enhancements and updates. Together, these key components form a comprehensive and scalable architecture for AEM Cloud, empowering organizations to create, deliver, and optimize engaging digital experiences efficiently and effectively.",
      },

      {
        type: "heading",
        level: 3,
        text: "Migrating to AEM as a Cloud Service",
      },

      {
        type: "paragraph",
        text: "Here are the different steps of Migration:",
      },

      {
        type: "image",
        src: "/images/blogs/sites/cloud-services/Migration.jpg",
        alt: "AEM as a Cloud Architecture",
      },

      {
        type: "bulletList",
        items: [
          "Planning: Identify the components that need to be migrated and create a detailed plan with tasks and timelines.",
          "Estimation: Assess the complexity of the migration items and break them down into manageable units for estimation.",
          "Execution: Develop migration scripts, rules, and tools required for the actual data and application migration.",
          "Testing: Conduct thorough testing to validate all functionalities, ensuring they work as expected post-migration. Perform full regression testing to catch any issues.",
          "Performance Testing: Measure the performance of the migrated application against predefined benchmarks to ensure optimal performance.",
          "UAT: Business teams and end-users perform validation tests to ensure that the migrated system meets their requirements and expectations. Get sign-off from stakeholders.",
          "Go-Live: Deploy the migrated system into production, making it live for users.",
          "Post-Launch: Provide training sessions for authors and end-users to familiarize them with new features and functionalities of the migrated system.",
          "Optimization: Continuously monitor user interactions and system performance post-migration. Make necessary adjustments and optimizations based on feedback and data analysis to improve the system's effectiveness and efficiency.",
        ],
      },

      {
        type: "paragraph",
        text:
          "AEM as a Cloud Service revolutionizes digital experiences by offering unmatched scalability, performance, and security. This cloud-native solution empowers businesses to elevate their digital presence, streamline content management, and deliver seamless customer journeys across multiple channels, marking a significant step forward in the era of digital transformation.",
      },

      {
        type: "paragraph",
        text:
          "I'm glad you found this article interesting and informative! Feel free to share it with your friends to spread the knowledge.",
      },

      {
        type: "paragraph",
        text: "Don't forget to follow me for upcoming blogs. Thank you!",
      },
    ],
  },
  {
    slug: "context-aware-configuration",
    title: "Context Aware Configuration",
    category: "AEM Sites",
    date: "2023-11-09",
    author: "Ankit Pardhi",
    description:
      "Learn how Context-Aware Configuration provides site-specific settings to AEM components and services.",
    content: [
      {
        type: "heading",
        level: 3,
        text: "Introduction",
      },

      {
        type: "paragraph",
        text:
          "Managing the settings for different parts of a website can be a headache, especially for large sites with varied needs. Adobe Experience Manager (AEM) has a powerful tool called Context Aware Configuration (CA-Config) that makes this job much easier. CA-Config allows you to apply different settings to different sections of your website based on their specific requirements.",
      },

      {
        type: "paragraph",
        text:
          "Think of CA-Config like a smart manager for your website’s settings. For example, if you run a global website, you can use CA-Config to ensure each regional section of your site shows the right content for that area. This means your visitors in the USA see different information than visitors in Japan, all managed smoothly from one place.",
      },

      {
        type: "paragraph",
        text:
          "The real benefit of CA-Config is its simplicity and precision. You can control settings exactly where you need them without dealing with complicated setups. This makes it easier to keep your site running smoothly, no matter how big or complex it gets. In this blog, we’ll explore how CA-Config works and how it can help you manage your website more effectively.",
      },

      {
        type: "heading",
        level: 3,
        text: "What is Context Aware Configuration?",
      },

      {
        type: "paragraph",
        text:
          "Context Aware Configuration (CA-Config) in Adobe Experience Manager (AEM) is a powerful feature that allows for the flexible and dynamic application of settings and configurations based on the context of content within the AEM hierarchy. It enables the definition of configurations that are specific to content resources or resource trees, rather than being globally applied.",
      },

      {
        type: "paragraph",
        text:
          "With CA-Config, configurations can be tailored to different sections of a website or application, such as regional sites or tenant-specific pages. This is particularly useful for large, multi-faceted websites that serve diverse audiences with varying needs. CA-Config supports hierarchy-based inheritance, which means that configurations can inherit settings from their parent context, allowing for a structured and organized approach to configuration management.",
      },

      {
        type: "paragraph",
        text:
          "One of the key benefits of CA-Config is its ability to provide context-specific settings without the need for complex coding or deployment processes. It simplifies the management of environment-specific configurations, enabling developers to adjust application behavior dynamically, based on the specific site or content context.",
      },

      {
        type: "paragraph",
        text:
          "n practice, CA-Config is implemented by defining configuration properties in Sling, creating context configurations under the /conf folder, and associating these configurations with content paths. This approach not only streamlines the configuration process but also enhances the scalability and maintainability of AEM projects",
      },

      {
        type: "heading",
        level: 3,
        text: "Advantages of Using CA-Config",
      },

      {
        type: "paragraph",
        text:
          "The main advantages of using CA-Config over traditional OSGi configurations include:",
      },

      {
        type: "bulletList",
        items: [
          "Context-specific settings: Configurations can be applied to specific areas of the content tree, allowing for greater flexibility.",
          "Hierarchy-based inheritance: Settings can inherit from parent configurations, making it easier to manage configurations across a site.",
          "Simplified management: CA-Config simplifies the management of configurations, especially for large sites with complex structures.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "How To Create Context Aware Configuration",
      },

      {
        type: "heading",
        level: 4,
        text: "Step : 1 Creating OSGi Configuration",
      },

      {
        type: "bulletList",
        items: [
          "Define an interface similar to creating an OSGi configuration.",
          "Use the @Configuration annotation instead of the usual OSGi annotations.",
          "Provide labels, descriptions, names, and specify the collection property (true or false).",
          "Define properties using the @Property annotation.",
          "Provide label and description.",
          "Default values can be provided if needed.",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `import org.apache.sling.caconfig.annotation.Configuration;
import org.apache.sling.caconfig.annotation.Property;

@Configuration(  name = "Test Context Aware Configuration",
                                description = "Context Aware Configuration.")
public @interface ContextAwareConfig {
    @Property( label = "Site Country",
    description="value for the site country")
    String siteCountry();

    @Property( label = "Site Owner",
    description="value for the site owner")
    String siteOwner();

    @Property( label = "Site Language",
    description="value for the site language")
    String siteLanguage();
}`,
      },

      {
        type: "heading",
        level: 4,
        text: "Step : 2 Call OSGi configuration in Sling Model",
      },

      {
        type: "bulletList",
        items: [
          "First, we create a model class that can work with configurations.",
          "Inside this model class, we define a function that needs information like the current page and the resource resolver.",
          "Context-aware configurations are based on resources that understand their context. To access configurations, we use the ConfigurationResolver service.",
          "We can obtain the ConfigurationBuilder through the ConfigurationResolver service. This service provides a method to retrieve the ConfigurationBuilder.",
          "Alternatively, we can directly adapt our content resource to the ConfigurationBuilder interface to access the configuration.",
          "The ConfigurationBuilder can retrieve configurations as ValueMap or by adapting the configuration resources. Sometimes, we need to specify a configuration name, but it's often automatically derived from annotations.",
          "The ConfigurationResolver internally uses the ConfigurationResourceResolver to fetch configuration resources. These resources are usually stored under the bucket name sling:configs.",
          "Once you have the ConfigurationBuilder, it offers only one method called 'as'. This 'as' method returns your context-aware configuration, which you can then use anywhere in your application.",
          "Finally, we execute the function using the @PostConstruct annotation. Inside this function, we initialize variables with values retrieved from the configuration.",
        ],
      },

      {
        type: "paragraph",
        text: "You can refer below code",
      },

      {
        type: "code",
        language: "java",
        code: `@Model(
adaptables = {SlingHttpServletRequest.class},
adapters = {ContextAwareConfig.class},
defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
            )
public class ContextAwareConfigModel {
    private String siteCountry;
    private String siteOwner;
    private String siteLanguage;
    @SlingObject
    ResourceResolver resourceResolver;
    private ContextAwareConfig CAConfig;
    @ScriptVariable
    Page currentPage;
    @PostConstruct
    void init() {
        ContextAwareConfig CAConfig=getCAConfiguration(currentPage.getPath(),resourceResolver);
        siteCountry=CAConfig.siteCountry();
        siteOwner=CAConfig.siteOwner();
        siteLanguage=CAConfig.siteLanguage();
    }
    ContextAwareConfig getCAConfiguration( String currentPage, ResourceResolver resourceResolver){
        String currentPath = StringUtils.isNotBlank(currentPage) ? currentPage : StringUtils.EMPTY;
        Resource contentResource = resourceResolver.getResource(currentPath);
        if (contentResource != null) {
            ConfigurationBuilder configurationBuilder = contentResource.adaptTo(ConfigurationBuilder.class);
            if (configurationBuilder != null) {
                return configurationBuilder.as(ContextAwareConfig.class);
            }
        }
        return null;
    }
    public String getSiteCountry() {
        return siteCountry;
    }

    public String getSiteOwner() {
        return siteOwner;
    }

    public String getSiteLanguage() {
        return siteLanguage;
    }
}`,
      },

      {
        type: "heading",
        level: 4,
        text: "Step : 3 Create Component",
      },

      {
        type: "bulletList",
        items: [
          "In component display the value of CA configuration",
        ],
      },

      {
        type: "code",
        language: "html",
        code: `<sly data-sly-use.ConfigValue="com.weretail.core.models.impl.ContextAwareConfigModel">
    <h4>>Site Country : \${ConfigValue.siteCountry}</h4>
    <h4>Site Owner : \${ConfigValue.siteOwner}</h4>
    <h4>>Site Language : \${ConfigValue.siteLanguage}</h4>
</sly>`,
      },

      {
        type: "heading",
        level: 4,
        text: "Step : 4 Create Folder",
      },

      {
        type: "bulletList",
        items: [
          "Create a folder sturucture under /conf/project according to your site",
          "Folders jcr:primarytype would be sling:folder",
          "Node name would be your configurations relative path",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/context-aware-configuration/Screenshot-2024-03-13-193115.webp",
        alt: "Text",
      },

      {
        type: "bulletList",
        items: [
          "Add property and value to the node that you have defined in your configuration",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/context-aware-configuration/Screenshot-2024-03-13-192641.webp",
        alt: "Screenshot 2024 03 13 192641",
      },

      {
        type: "image",
        src: "/images/blogs/sites/context-aware-configuration/Screenshot-2024-03-13-192729.webp",
        alt: "Screenshot 2024 03 13 192729",
      },

      {
        type: "image",
        src: "/images/blogs/sites/context-aware-configuration/Screenshot-2024-03-13-192757.webp",
        alt: "Screenshot 2024 03 13 192757",
      },

      {
        type: "heading",
        level: 4,
        text: "Step : 5 Add rererence to your site",
      },

      {
        type: "bulletList",
        items: [
          "Inside /content/mysite under the specific site hierarchy, add property sling:configRef = [path of the folder that has a configuration for that specific site] in jcr: content.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/context-aware-configuration/Screenshot-2024-03-13-193534.webp",
        alt: "Screenshot 2024 03 13 193534",
      },

      {
        type: "heading",
        level: 4,
        text: "Step : 6 Add component to your page",
      },

      {
        type: "bulletList",
        items: [
          "When we utilize a component on a webpage, it acquires its configuration based on the sling:configRef path. If, within a hierarchy, a specific configuration is not explicitly defined, the component inherits configuration values from its parent. For instance, if we do not define sling:configRef in ca/b1/jcr:content, it will inherit configuration settings from the ca parent.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/context-aware-configuration/endResult.webp",
        alt: "endResult",
      },

      {
        type: "heading",
        level: 3,
        text: "Conclusion",
      },

      {
        type: "paragraph",
        text:
          "Context Aware Configuration (CA-Config) in Adobe Experience Manager (AEM) significantly simplifies the management of website settings, particularly for large and complex sites. By allowing configurations to be tailored to specific sections of a site, CA-Config ensures that content is relevant and localized for different audiences. Its flexibility and precision reduce the need for complex inheritance structures, making it easier to maintain consistency across the site. Implementing CA-Config involves defining configuration properties, integrating them with Sling Models, and creating components that display these configurations. This streamlined approach enhances the scalability and maintainability of AEM projects, ensuring a smooth and efficient content management experience.",
      },
    ],
  },
  {
    slug: "targeting-in-aem",
    title: "Targeting in AEM - Part 1",
    category: "AEM Sites",
    date: "2024-08-01",
    author: "Suchita Mishra",
    description:
      "Discover how AEM targeting uses audiences and contextual data to deliver personalized experiences.",
    content: [
      {
        type: "paragraph",
        text:
          "Content personalization in short means delivering the right content to the right person in real-time.",
      },

      {
        type: "paragraph",
        text:
          "The targeting engine is the mechanism that drives the logic for targeted content. You can use either AEM or Adobe Target as the targeting engine, AEM provides a built-in targeting engine that processes page requests and determines the content to display. AEM as a targeting engine only supports Experience Targeting but Adobe Target should be used for A/B testing.",
      },

      {
        type: "paragraph",
        text:
          "Let us see how to use the AEM targeting engine to enable the experience targeting for a web page.",
      },

      {
        type: "heading",
        level: 3,
        text: "Setup ContextHub",
      },

      {
        type: "paragraph",
        text:
          "ContextHub is a framework for storing, manipulating, and presenting context data. The ContextHub Javascript API enables us to access stores to create, update, and delete data as necessary. To enable the ContextHub features and to link to the ContextHub JavaScript libraries, including the <contexthub> component in the <head> section of our web page.",
      },

      {
        type: "paragraph",
        text:
          "Add the below HTL code to the overridden customheaderlibs.html file of your page component(here the page component is extending from core page component - core/wcm/components/page/v2/page)",
      },

      {
        type: "paragraph",
        text:
          "<sly data-sly-resource=\" ${'contexthub' @ resourceType = 'granite/contexthub/components/contexthub'}\"/>",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image.png",
        alt: "image",
      },

      {
        type: "paragraph",
        text:
          "ContextHub includes a segmentation engine that manages segments and determines which segments are resolved for the current context.",
      },

      {
        type: "paragraph",
        text:
          "Once the ContextHub is enabled for the project, client context data can be explored through the browser local storage.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-1.png",
        alt: "image1",
      },

      {
        type: "heading",
        level: 3,
        text: "Configuration Browser - EnableContextHub Segments",
      },

      {
        type: "paragraph",
        text:
          "Enable the ContextHub segments for your site under Configuration Browser.",
      },

      {
        type: "paragraph",
        text:
          "Tools → General → Configuration Browser → Select the project → Properties → Check ContextHub Segments",
      },

      {
        type: "paragraph",
        text: "Save and Close",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-2.png",
        alt: "image2",
      },

      {
        type: "heading",
        level: 3,
        text: "Configure Segment Path and ContextHub Path",
      },

      {
        type: "paragraph",
        text:
          "Assign Segment path and ContextHub path to your site root node, the default ContextHub path is /libs/settings/cloudsettings/legacy",
      },

      {
        type: "paragraph",
        text: "& segment path — /conf/<tenant>/settings/wcm/segments",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-3.png",
        alt: "image3",
      },

      {
        type: "heading",
        level: 3,
        text: "Create Brand",
      },

      {
        type: "paragraph",
        text:
          "Create a Brand to manage the Audiences through Activities console,",
      },

      {
        type: "paragraph",
        text: "Tools → Personalization → Activities, Create Brand",
      },

      {
        type: "paragraph",
        text: "Select Brand Template, add a title, and Create.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-4.png",
        alt: "image4",
      },

      {
        type: "heading",
        level: 3,
        text: "Create Audiences - Create ContextHub Segment",
      },

      {
        type: "paragraph",
        text:
          "An audience, called segment in ContextHub, is a class of visitors defined by specific criteria, which then determines who sees a targeted activity.",
      },

      {
        type: "paragraph",
        text: "Create the required Audiences,",
      },

      {
        type: "paragraph",
        text: "Tools → Personalization → Audiences,",
      },

      {
        type: "paragraph",
        text: "Create ContextHub Segments under the corresponding project.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-5.png",
        alt: "image5",
      },

      {
        type: "paragraph",
        text:
          "Specify the required boost factor, If there is more than one segment that gets resolved the one with a higher boost factor is selected.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-6.png",
        alt: "image6",
      },

      {
        type: "paragraph",
        text: "Create.",
      },

      {
        type: "paragraph",
        text:
          "Assign the segments to the audience accordingly (similarly as shown below), by editing the segment we've created.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-7.png",
        alt: "image7",
      },

      {
        type: "heading",
        level: 3,
        text: "Create Activities",
      },

      {
        type: "paragraph",
        text:
          "Activities consist of audiences that you are targeting, and the period of time when the targeting is applied.",
      },

      {
        type: "paragraph",
        text:
          "First Create an Area under Brand and create the Activity inside the Area,",
      },

      {
        type: "paragraph",
        text: "Tools → Personalization → Activities",
      },

      {
        type: "paragraph",
        text:
          "Enter Title, Name and select the Target Engine as ContextHub.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-8.png",
        alt: "image8",
      },

      {
        type: "paragraph",
        text: "Add Experience for each audience",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-9.png",
        alt: "image9",
      },

      {
        type: "paragraph",
        text: "Set the Duration and Priority",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-10.png",
        alt: "image10",
      },

      {
        type: "paragraph",
        text: "And Save.",
      },

      {
        type: "heading",
        level: 3,
        text: "Enable Target Configuration",
      },

      {
        type: "paragraph",
        text:
          "Enable the Target Configuration — Brand, Area to the root page properties or to the specific page(you can configure more than one brand).",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-11.png",
        alt: "image11",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-12.png",
        alt: "image12",
      },

      {
        type: "paragraph",
        text: "Save and Close.",
      },

      {
        type: "paragraph",
        text:
          "Now we are done with all the configurations and we can go ahead with the authoring part which will be done in the targeting mode of AEM.",
      },

      {
        type: "heading",
        level: 3,
        text: "Author Targeted Content",
      },

      {
        type: "paragraph",
        text:
          "Author targeted content using the Targeting mode of AEM. Targeting mode provides tools for creating content for the experiences of your marketing activities.",
      },

      {
        type: "paragraph",
        text: "Select Targeting Mode from the Dropdown.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-13.png",
        alt: "image13",
      },

      {
        type: "paragraph",
        text: "Select the Brand and Activity and click on Start Targeting.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-14.png",
        alt: "image14",
      },

      {
        type: "paragraph",
        text: "On required components select the Target option.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-15.png",
        alt: "image15",
      },

      {
        type: "paragraph",
        text:
          "Now select the Audience and define the experience for the components,",
      },

      {
        type: "paragraph",
        text: "Default - Default experience",
      },

      {
        type: "paragraph",
        text: "Summer Female - the experience for female users in Summer",
      },

      {
        type: "paragraph",
        text: "Summer Male - the experience for male users in Summer",
      },

      {
        type: "paragraph",
        text: "Winter Female - the experience for female users in Winter",
      },

      {
        type: "paragraph",
        text: "Winter Male - the experience for male users in Winter",
      },

      {
        type: "paragraph",
        text:
          "Select the corresponding audience and edit the component data, also we need to set the targeting engine i.e, ContextHub, by clicking on settings.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-16.png",
        alt: "image16",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-17.png",
        alt: "image17",
      },

      {
        type: "paragraph",
        text:
          "Now author the targeted component according to the audiences.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-18.png",
        alt: "image18",
      },

      {
        type: "paragraph",
        text: "Summer Female:",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-19.png",
        alt: "image19",
      },

      {
        type: "paragraph",
        text:
          "Similarly, edit the authoring for the rest of the audiences accordingly.",
      },

      {
        type: "paragraph",
        text: "Summer Male:",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-20.png",
        alt: "image20",
      },

      {
        type: "paragraph",
        text: "Winter Female:",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-21.png",
        alt: "image21",
      },

      {
        type: "paragraph",
        text: "Winter Male:",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-22.png",
        alt: "image22",
      },

      {
        type: "paragraph",
        text:
          "Save all the authoring changing for different audiences and click next.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-23.png",
        alt: "image23",
      },

      {
        type: "paragraph",
        text:
          "The target audiences and experiences are defined as we added in the Activities (can be modified if needed).",
      },

      {
        type: "paragraph",
        text: "Click next.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-24.png",
        alt: "image24",
      },

      {
        type: "paragraph",
        text: "Define the duration and Priority and Save it.",
      },

      {
        type: "paragraph",
        text:
          "We have successfully saved our activity and now we will get different personalized experiences for different audiences and seasons based on what we configured.",
      },

      {
        type: "paragraph",
        text:
          "We can verify the targeting and personalization by viewing the page in the preview mode. On the top left corner we'll have the contextHub option available which will provide some contextHub features, using which we can verify the experiences that the particular audience/user will get along with the resolved segments.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-25.png",
        alt: "image25",
      },

      {
        type: "paragraph",
        text: "PERSONA - defines the user i.e., which user is logged in.",
      },

      {
        type: "paragraph",
        text:
          "LOCATION - defines from what location that user is actually logging in from.",
      },

      {
        type: "paragraph",
        text:
          "In our case, we can test the experiences by defining the persona.",
      },

      {
        type: "paragraph",
        text: "Summer Female User:",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-26.png",
        alt: "image26",
      },

      {
        type: "paragraph",
        text: "Summer Male User:",
      },

      {
        type: "image",
        src: "/images/blogs/sites/targeting-in-aem/image-27.png",
        alt: "image27",
      },

      {
        type: "paragraph",
        text:
          "So, we have verified the targeting and we are successfully able to get the personalized content based on the segments/audiences that we created.",
      },

      {
        type: "paragraph",
        text: "Hope you find the blog insightful. Thanks!! 😄",
      },
    ],
  },
  {
    slug: "indexing",
    title: "Indexing in AEM",
    category: "AEM Sites",
    date: "2023-11-24",
    author: "Shruti Meshram",
    description:
      "Understand how Oak indexes improve AEM repository query performance and content retrieval.",
    content: [
      {
        type: "paragraph",
        text:
          "Happy to find you all well. Let us discuss in today's blog an efficient way to perform search operations in AEM.",
      },

      {
        type: "paragraph",
        text:
          "Indexing is a technique which enables the user to retrieve data with minimal node traversal and in minimum amount of time. Suppose, an AEM user wants to find all the images present in crx/de console which actually is categorized as a slow query in AEM as the process search gets terminated due to 100000+ node traversal. This is a case where you need to perform indexing upon desired property to retrieve the data (i.e images). Also in case where you need to enhance the search performance, it is recommended to perform indexing so that the data retrieval is cost efficient. Oak query engine supports XPath, SQL-2 and JQOM and Apache Oak-based backend allows multiple indexes to be plugged in a repository. PropertyIndex is predefined in repository itself, Apache Lucene and Apache Solr can be customized.",
      },

      {
        type: "heading",
        level: 3,
        text: "While executing a query",
      },

      {
        type: "heading",
        level: 4,
        text: "Case 1: No index is applied",
      },

      {
        type: "paragraph",
        text: "Traversal Index is by default used to run the search.",
      },

      {
        type: "heading",
        level: 4,
        text: "Case 2:Multiple indexes as applicable for a search",
      },

      {
        type: "paragraph",
        text:
          "Oak internally finds out the most cost efficient index and implements it for the search.",
      },

      {
        type: "heading",
        level: 3,
        text: "Diagrammatic Representation of Handling Indexes",
      },

      {
        type: "image",
        src: "/images/blogs/sites/indexing/image-one.webp",
        alt: "Indexing in AEM",
      },

      {
        type: "heading",
        level: 4,
        text: "Creating Indexes in AEM",
      },

      {
        type: "paragraph",
        text:
          "Oak supports Lucene indexing for property search (where an index is applied directly upon a property) as well as full text search. Here we will be focusing upon creating lucene indexings.",
      },

      {
        type: "heading",
        level: 4,
        text: "Steps for creating indexes in AEM",
      },

      {
        type: "paragraph",
        text:
          "Under oak:index, in crx/de create indexing-in-aem as QueryIndexDefinition and add a mandatory property type lucene as shown in the xml. Also add the provided properties and rename the prop0 node as properties and you may also rename nt:base to nt:unstructured.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/indexing/image-two.webp",
        alt: "Indexing in AEM",
      },

      {
        type: "paragraph",
        text:
          "After successfully creating the index, you can find the generated index here (http://localhost:4502/libs/granite/operations/content/diagnosistools/indexManager.html)",
      },

      {
        type: "paragraph",
        text: "You need to find all the info as well as its consistency in",
      },

      {
        type: "image",
        src: "/images/blogs/sites/indexing/image-three.webp",
        alt: "Indexing in AEM",
      },

      {
        type: "paragraph",
        text:
          "Also your index will be available in quickstart itself \\crx-quickstart\\repository\\index If you are able to find the generated index in both the locations then congrats! You have successfully created your first index.",
      },

      {
        type: "heading",
        level: 3,
        text: "Lucene Indexing Example",
      },

      {
        type: "paragraph",
        text:
          "Oak engine for both property search as well as for full text search internally implements lucene indexing. Let us understand by an example. We need to search all the nodes in crx/de with property property dam:Asset from nt:base. Then for this we need to navigate to crx/de console, click on tools, the Query and select SQL-2 rather than XPath, enter the query for the search i.e",
      },

      {
        type: "paragraph",
        text:
          "SELECT * FROM [nt:base] WHERE [jcr:primaryType] = 'dam:Asset'",
      },

      {
        type: "paragraph",
        text:
          ", to find the node traversal reaches its provided limit and so the process search terminates.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/indexing/image-four.webp",
        alt: "Indexing in AEM",
      },

      {
        type: "paragraph",
        text:
          "Also while checking the query explanation from operation console (http://localhost:4502/libs/granite/operations/content/diagnosistools/queryPerformance.html), an error message gets displayed",
      },

      {
        type: "image",
        src: "/images/blogs/sites/indexing/image-five.webp",
        alt: "Indexing in AEM",
      },

      {
        type: "paragraph",
        text:
          "This triggers the need of creating an index over the property jcr:primaryType with sole reason to minimize the nodes traversed for the search to execute and generate the desired result.",
      },

      {
        type: "paragraph",
        text:
          "In order to generate an index create assetType index (a node under /oak:index of type oak:QueryIndexDefinition) with provided properties.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/indexing/image-six.webp",
        alt: "Indexing in AEM",
      },

      {
        type: "paragraph",
        text:
          "Re run the same query to get the results. You can also find you index applied on the search when you find the explanation of your query.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/indexing/image-seven.webp",
        alt: "Indexing in AEM",
      },

      {
        type: "paragraph",
        text:
          "Here at the top you can find the assetType index applied for the generated search after clicking on Explain button.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/indexing/image-eight.webp",
        alt: "Indexing in AEM",
      },

      {
        type: "image",
        src: "/images/blogs/sites/indexing/image-nine.webp",
        alt: "Indexing in AEM",
      },

      {
        type: "heading",
        level: 4,
        text: "Lucene Indexing Properties and Explanations",
      },

      {
        type: "paragraph",
        text:
          "While performing lucene indexing, we have a variety of properties and nodes.",
      },

      {
        type: "heading",
        level: 3,
        text: "1.Node with type oak:QueryIndexDefinition",
      },

      {
        type: "bulletList",
        items: [
          "It has to have a mandatory property “type” “String” “lucene” else the node itself don’t save.",
          "“compatVersion” “Long” “2” version 1 is deprecated and does not support property restrictions and index time aggregation whereas version 2 is faster to run queries.",
          "“evaluatePathRestrictions” “boolean” “true” set the run to consider path restrictions provided.",
          "“excludedPaths” “String[]” consists of paths which need to be excluded from search run.",
          "“includedPaths” “String[]” consists of paths included for the search.",
          "“async” “String” “async” it allows the index to keep running in the background even it multiple tasks are executing at a time.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "2.Node name indexRules",
      },

      {
        type: "bulletList",
        items: [
          "They consist of configuration of index for provided node or property.",
          "They consist of configuration of index for provided node or property.",
          "Within this each first level node thus created will encounter the provided differed set of rules.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "3.nt:base",
      },

      {
        type: "bulletList",
        items: [
          "It consists of property definitions in the form of node created under it as a property.",
          "There can be variety of property nodes on which the indexing needs to be done.",
          "The name of the prop0 needs to be converted to the name of the property itself to be indexed also the name property must be changed to the indexed property name.",
          "“isRegexp” ”boolean” “false”, if set to true, then it will be considered as a regular expression.",
          "“ordered” “boolean” “true” so as to implement order by clause.",
          "“propertyIndex” “boolean” “true” allows to check equality condition, not null condition and ordering condition.",
          "“sync” “boolean” “true” requires propertyIndex condition to be true always and ensures that the changes to the content are available as soon as they are committed.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "4.Full text search in lucene indexing",
      },

      {
        type: "paragraph",
        text:
          "And these indexes consist of entries of columns that contain the generated tokens. These inverted indexes fall handy while running the generated search.",
      },

      {
        type: "heading",
        level: 4,
        text: "Conclusion",
      },

      {
        type: "paragraph",
        text:
          "Lucene indexing is hence a powerful mechanism that ensures fast retrieval of data. In case the requirement demands a customized property for the lucene search to execute, the property can also be generated in the backend.",
      },

      {
        type: "paragraph",
        text:
          "The AEM crx/de itself has many ootb indexes which indeed avoids the traversal index search but in special cases, where node traversals exceed the declared limits, oak search engine applies lucene indexes for property, node as well as full text searches.",
      },

      {
        type: "paragraph",
        text: "Hope you find this blog informative.",
      },
    ],
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
      src: "/images/blogs/forms/form-submission/server.webp",
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
      src: "/images/blogs/forms/form-submission/configuration2.webp",
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
      src: "/images/blogs/forms/form-submission/regform.webp",
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
      src: "/images/blogs/forms/form-submission/formprop.webp",
      alt: "Form properties",
    },
    {
      type: "image",
      src: "/images/blogs/forms/form-submission/formprop2.webp",
      alt: "Form properties",
    },
    {
      type: "paragraph",
      text:
        "In the subject, I've included ${firstName} Form Submission. This means that the \"firstName\" corresponds to the name property of the First Name textbox. After receiving the email, you'll see the user's first name in the subject line. Once all properties are configured, start your fake SMTP server and submit the form.",
    },

    {
      type: "image",
      src: "/images/blogs/forms/form-submission/formtest.webp",
      alt: "Test Form",
    },
    {
      type: "image",
      src: "/images/blogs/forms/form-submission/smtp.webp",
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
        type: "centerParagraph",
        text: "First navigate to create adaptive form and create your form.",
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
        type: "centerParagraph",
        text: "Choose a template of your choice, could be blank but here I have created a custom template, College Template, for the purpose of creation of the form and provide title to it. You will find the root panel wherein you can add a theme after clicking on configure. I have added Beryl theme.",
        
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/theme.webp",
        alt: "Selecting the College Template",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "centerParagraph",
        text: "First you need to add 5 panels to your form with provided configuration. Ensure except for the first panel rest all are maked as hidden.",
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
        type: "centerParagraph",
        text: "Now after adding panels, you need to add fields to them. Except for first name, mark all the fields as disabled.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/last-name-configuration.webp",
        alt: "Marking fields as disabled",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "centerParagraph",
        text: "First name , Last Name and Percentile Obtained in 10th are the fields in Personal details panel. First you need to add the First Name Configurations.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/first-name-configuration.webp",
        alt: "First Name field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "centerParagraph",
        text: "Add the Last Name Configurations.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/last-name.webp",
        alt: "Last Name field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "centerParagraph",
        text: "Add the Percentile Obtained in 10th Configurations.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/peercentile.webp",
        alt: "Percentile Obtained in 10th field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "centerParagraph",
        text: "Applicable Stream is the field in Applicable Streams panel.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/applicable.webp",
        alt: "Applicable Stream field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "centerParagraph",
        text: "Applicable Stream is again a field in Available Streams panel.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/avvailable.webp",
        alt: "Available Stream field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "centerParagraph",
        text: "Name as per ID proof, Contact, Address, Select Blood Group and submit button are the field in Admission Details panel. Add the Name as per ID proof Configurations.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/complete-name.webp",
        alt: "Name as per ID proof field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "centerParagraph",
        text: "Add the Contact Configurations.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/contact.webp",
        alt: "Contact field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "centerParagraph",
        text: "Add the Address Configurations.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/address-one.webp",
        alt: "Address field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "centerParagraph",
        text: "Allow multiple lined in Address Configurations.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/address-two.webp",
        alt: "Address field with multiple lines enabled",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "centerParagraph",
        text: "Add the Select Blood Group Configurations.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/bloodgroup.webp",
        alt: "Select Blood Group field configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "centerParagraph",
        text: "Add the Submit Configurations.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/submit.webp",
        alt: "Submit button configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "centerParagraph",
        text: "Candidate not applicable text is a field in Admission Denied panel.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/text.webp",
        alt: "Candidate not applicable text configuration",
        style: { maxWidth: "500px", maxHeight: "550px" },
      },
      {
        type: "centerParagraph",
        text: "With this your adaptive form is ready to add include the functionalities of rule editor.",
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
        type: "centerParagraph",
        text: "Go to the First Name field, select rule editor, this will navigate you to the Rule Editor Console.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/ruleeditorstart.webp",
        alt: "Opening the Rule Editor for the First Name field",
      },
      {
        type: "centerParagraph",
        text: "We want Last Name to be enabled only when the First Name is not empty, and so select create.",
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
        type: "centerParagraph",
        text: "Similarly, we want the applicant to add 10th percentile only after last name is not empty.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/lastname-visual.webp",
        alt: "Last Name rule in the visual editor",
      },
      {
        type: "centerParagraph",
        text: "Now if 10th percentile is greater than 75, we want Applicable Streams panel to be visible.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/percentile-one-visual.webp",
        alt: "Percentile greater than 75 rule in the visual editor",
      },
      {
        type: "centerParagraph",
        text: "Now if 10th percentile is between 55-75, we want Available Streams panel to be visible.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/percentile-two-visual.webp",
        alt: "Percentile between 55 and 75 rule in the visual editor",
      },
      {
        type: "centerParagraph",
        text: "Now if 10th percentile is less than 55, we want denied panel to be visible.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/percentile-three-visual.webp",
        alt: "Percentile less than 55 rule in the visual editor",
      },
      {
        type: "centerParagraph",
        text: "After selecting any of the streams, Admission details panel must get available",
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
        type: "centerParagraph",
        text: "In Admission Panel, we want to enable Contact only if Name as per ID proof is not empty.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/complete-name-visual.webp",
        alt: "Name as per ID proof rule in the visual editor",
      },
      {
        type: "centerParagraph",
        text: "We want to enable Address only if Contact is not empty.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/contact-visual.webp",
        alt: "Contact rule in the visual editor",
      },
      {
        type: "centerParagraph",
        text: "We want to enable Blood group only if Address is not empty.",
      },
      {
        type: "image",
        src: "images/blogs/forms/rule-editor-show-hide/address.webp",
        alt: "Address rule in the visual editor",
      },
      {
        type: "centerParagraph",
        text: "We want to enable submission after only if blood group is not empty.",
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
        src: "/images/blogs/forms/forms-introduction/form-types.webp",
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
        src: "/images/blogs/forms/forms-introduction/service-pack.webp",
        alt: "AEM Form Types",
      },
      {
        type: "paragraph",
        text:
          "If any item is missing from the Forms Module interface, it means you haven't installed the Forms service pack.",
      },
      {
        type: "image",
        src: "/images/blogs/forms/forms-introduction/form-non.webp",
        alt: "AEM Form is not setup",
      },
      {
        type: "paragraph",
        text:
          "If the AEM Form is installed successfully, this item will appear.",
      },
      {
        type: "image",
        src: "/images/blogs/forms/forms-introduction/formmodule.webp",
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
        src: "/images/blogs/forms/forms-introduction/formcreateby.webp",
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
        src: "/images/blogs/forms/forms-introduction/conffolder.webp",
        alt: "AEM Form Types",
      },
      {
        type: "image",
        src: "/images/blogs/forms/forms-introduction/selectET.webp",
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
        src: "/images/blogs/forms/forms-introduction/temp-folder.webp",
        alt: "AEM Form Types",
      },
      {
        type: "image",
        src: "/images/blogs/forms/forms-introduction/template.webp",
        alt: "AEM Form Types",
      },
      {
        type: "image",
        src: "/images/blogs/forms/forms-introduction/enable-temp.webp",
        alt: "AEM Form Types",
      },

      {
        type: "heading",
        level: 3,
        text: "Create Adaptive Form",
      },
      {
        type: "image",
        src: "/images/blogs/forms/forms-introduction/formmodule.webp",
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
        src: "/images/blogs/forms/forms-introduction/form-temp.webp",
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
        src: "/images/blogs/forms/forms-introduction/select-datamodel.webp",
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
        src: "/images/blogs/forms/forms-introduction/fromcreate-by.webp",
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
        src: "/images/blogs/forms/forms-introduction/formlable.webp",
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
        src: "/images/blogs/forms/forms-introduction/add-text.webp",
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
        src: "/images/blogs/forms/forms-introduction/config-fields.webp",
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
        src: "/images/blogs/forms/forms-introduction/fields-in-form.webp",
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
        src: "/images/blogs/forms/forms-introduction/Preview.webp",
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
        src: "/images/blogs/forms/forms-introduction/form-fragment.webp",
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
        src: "/images/blogs/forms/forms-introduction/fromfragment.webp",
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
        src: "/images/blogs/forms/forms-introduction/LogIn-form.webp",
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
        src: "/images/blogs/sites/aem-introduction/AEM_Architecture.webp",
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
        src: "/images/blogs/sites/aem-introduction/Aem_framework.webp",
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
        src: "/images/blogs/sites/aem-introduction/AEM-Type.webp",
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
    content: [
      {
        type: "paragraph",
        text:
          "Lets begin today's learning regarding vanity urls and their handelling in AEM.",
      },

      {
        type: "heading",
        level: 4,
        text: "Introduction",
      },

      {
        type: "paragraph",
        text:
          "Vanity URLs are nothing but friendly URLs. Suppose we have a URL:localhost/content/abc/def/ghi/organization/team.html which is not really eye catching to the users so AEM authors are provided the previllege to transform this URL into a more user friendly URL such as localhost:4502/organization/team.html which is indeed a vanity url of the provided one.",
      },

      {
        type: "heading",
        level: 4,
        text: "Adding Vanity URLs via Page Properties",
      },

      {
        type: "paragraph",
        text:
          "In order to do this, AEM Authors should open the page properties of the page and set up the friendly.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/vanity-urls/ImageOne.webp",
        alt: "PageWithOriginalURL",
      },

      {
        type: "image",
        src: "/images/blogs/sites/vanity-urls/ImageTwo.webp",
        alt: "PageProperties",
      },

      {
        type: "paragraph",
        text:
          "Go to Basic tab and find vanity path as a multifield to add the required vanity url and select save and close.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/vanity-urls/ImageThree.webp",
        alt: "VanityURLsMultifield",
      },

      {
        type: "paragraph",
        text:
          "There in you also find a Redirect checkbox, if checked, the vanity url generates a status code of 302 along with initiator as other and reaches the parent url through internal redirect.",
      },

      {
        type: "paragraph",
        text:
          "The vanity URL on the other hand provides a status code of 200 with initiator as the vanity url itself",
      },

      {
        type: "image",
        src: "/images/blogs/sites/vanity-urls/ImageFour.webp",
        alt: "PageWithFriendlyURL",
      },

      {
        type: "image",
        src: "/images/blogs/sites/vanity-urls/ImageFive.webp",
        alt: "RedirectCheckbox",
      },

      {
        type: "image",
        src: "/images/blogs/sites/vanity-urls/ImageSix.webp",
        alt: "StatusCodeCheckWithoutRedirect",
      },

      {
        type: "image",
        src: "/images/blogs/sites/vanity-urls/ImageSeven.webp",
        alt: "StatusCodeCheckWithRedirect",
      },

      {
        type: "heading",
        level: 4,
        text: "Dispatcher Configuration of Vanity URLs",
      },

      {
        type: "paragraph",
        text:
          "Everytime an author adds a vanity url, its entry needs to be made at the dispatcher level and this becomes tedious so, in AEM dispatcher has an auto allow feature listed in vanity tree.",
      },

      {
        type: "paragraph",
        text:
          "All the map entries for vanity urls are available in localhost:4502/system/console/jcrresolver stating external redirect with status code 302.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/vanity-urls/ImageEight.webp",
        alt: "JCRResolverConsole",
      },

      {
        type: "paragraph",
        text:
          "In order to exercise auto-filter mechanism of dispatcher content/software distribution package needs to be downloaded (a feature of AEM Cloud as a Service) and configured in the dispatcher itself.",
      },

      {
        type: "paragraph",
        text:
          "In dispatcher, /vhost, we specify the rules for vanity_urls. Also we can specify which file should store vanity urls and after how many seconds the file must get refreshed.",
      },

      {
        type: "code",
        language: "text",
        code: `   /vanity_urls{
   /url "/libs/granite/dispatcher/content/vanityUrls.html"
   /file "/temp/vanity-urls"
/delay "400"
    }`,
      },

      {
        type: "paragraph",
        text:
          "Here /libs/content/dispatcher/content/vanityUrls.html is a page that displays all the vanity urls available in AEM.",
      },

      {
        type: "paragraph",
        text: "/temp/vanity-urls is file that stores all the vanity urls",
      },

      {
        type: "image",
        src: "/images/blogs/sites/vanity-urls/ImageNine.webp",
        alt: "VanityURLPage",
      },

      {
        type: "paragraph",
        text:
          "/delay 400 is the time period till which the /temp/vanity-urls file will not get refreshed if the time difference between current moment and file's last modification is less than that of /delay.",
      },

      {
        type: "paragraph",
        text:
          "A refreshed request can be explicitly trigerred by just requesting a non-existing url to ensure /delay elapse.",
      },

      {
        type: "paragraph",
        text: "For example : localhost/non-existing/page.html",
      },

      {
        type: "paragraph",
        text:
          "It is recommended to use rewrite rules instead of default mechanism to ensure namespace resolutions, higherlevel logic implementation and increased performance.",
      },

      {
        type: "code",
        language: "text",
        code: "RewriteRule ^/home /content/abc/def/ghi/home.html [PT,L,NC]",
      },

      {
        type: "paragraph",
        text:
          "L (i.e last flag) is used to increase the performance as it skips the unnecessary rules without generating a proxy request. PT (i.e pass through flag) looks for a vanity url starting with provided initals and then fetches the complete path from the renderer. NC (i.e no case sensitivity) ignores casings.",
      },

      {
        type: "paragraph",
        text:
          "I hope you find this blog informative and helpful and if so please do like.",
      },
    ],
  },
  {
    slug: "osgi-configuration-factory",
    title: "OSGI Configuration Factory",
    category: "AEM Sites",
    date: "2023-06-24",
    author: "Yash Sakharkar",
    description:
      "Understand how OSGi factory configurations manage multiple configurable service instances in AEM.",
    content: [
      {
        type: "heading",
        level: 3,
        text: "What is OSGI In AEM ?",
      },

      {
        type: "paragraph",
        text:
          "OSGi is a fundamental element in the technology stack of Adobe Experience Manager (AEM). It is used to control the composite bundles of AEM and their configuration. OSGi “provides the standardized primitives that allow applications to be constructed from small, reusable, and collaborative components. These components can be composed into an application and deployed”.",
      },

      {
        type: "heading",
        level: 3,
        text: "What is OSGI Configuration In AEM ?",
      },

      {
        type: "paragraph",
        text:
          "OSGi Configurations in AEM are used to set up and customize the properties of OSGi components and services. These Configurations are often stored in configuration files or managed through the AEM Web Console.",
      },

      {
        type: "heading",
        level: 3,
        text: "What is OSGI Factory Configuration In AEM ?",
      },

      {
        type: "paragraph",
        text:
          "OSGi Factory Configuration in Adobe Experience Manager (AEM) refers to a way of creating multiple instances of an OSGi service, each with its own unique configuration. This is particularly useful when you need several instances of a service with different settings.",
      },

      {
        type: "heading",
        level: 3,
        text: "Key Concepts of OSGi Factory Configuration",
      },

      {
        type: "heading",
        level: 4,
        text: "Factory Configuration",
      },

      {
        type: "paragraph",
        text:
          "Unlike standard OSGi Configurations, which apply a single configuration to a single service instance, factory Configurations allow multiple instances of a service to be created, each with a unique configuration. Each instance is created with a distinct configuration, enabling different behavior or settings for each instance.",
      },

      {
        type: "heading",
        level: 4,
        text: "Identifiers",
      },

      {
        type: "paragraph",
        text:
          "Each factory configuration instance is identified by a unique identifier, typically appended to the configuration’s PID (Persistent Identifier).",
      },

      {
        type: "heading",
        level: 4,
        text: "Configuration Format",
      },

      {
        type: "paragraph",
        text:
          "Factory Configurations often use .config or .cfg.json files, with a filename pattern that includes a factory identifier.",
      },

      {
        type: "heading",
        level: 3,
        text: "Now we will see Implementation of factory configuration",
      },

      {
        type: "paragraph",
        text: "Here is the code to create Osgi Configuration :",
      },

      {
        type: "code",
        language: "java",
        code: `package com.demo.core.conf;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

@ObjectClassDefinition(name = "Osgi Factory Configuration", description = "Osgi Factory Configuration Demo")
public @interface OsgiFactoryConfiguration {
    @AttributeDefinition(name = "configId",description = "ConfigId",type = AttributeType.INTEGER)
    int configurationId();
    @AttributeDefinition(name = "configName",description = "ConfigName",type = AttributeType.STRING)
    String configName() default "Config #";
}`,
      },

      {
        type: "paragraph",
        text:
          "Create a Service which contains the methods to get Configuration Name and Ids. :",
      },

      {
        type: "code",
        language: "java",
        code: `package com.demo.core.services;

import java.util.List;

public interface OsgiFactoryConfigService {
    int getConfigurationId();
    String getConfigName();
    public OsgiFactoryConfigService get(int configId);
    List<OsgiFactoryConfigService> getAllConfiguration();
}`,
      },

      {
        type: "paragraph",
        text:
          "Create a Java Class with @Component Annotation and Implements the service and override all the Methods. Under @Designate Annotation include the Configuration class, to include the configuration class use \"ocd\" Interface. ocd is @ObjectClassDefinition Annotation is used to define a class or interface that describes the configuration options available for a particular OSGi service or component. This annotation helps in creating a clear and structured way to handle configuration properties, making them easier to manage and understand.",
      },

      {
        type: "code",
        language: "java",
        code: `package com.demo.core.services.impl;

import com.demo.core.conf.OsgiFactoryConfiguration;
import com.demo.core.conf.OsgiFactoryConfigurator;
import com.demo.core.services.OsgiFactoryConfigService;
import org.osgi.service.cm.Configuration;
import org.osgi.service.cm.ConfigurationAdmin;
import org.osgi.service.component.annotations.*;
import org.osgi.service.metatype.annotations.Designate;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Dictionary;
import java.util.Hashtable;
import java.util.List;

@Component(service = OsgiFactoryConfigService.class, configurationPolicy = ConfigurationPolicy.REQUIRE)
@Designate(ocd = OsgiFactoryConfiguration.class,factory = true)
public class OsgiConfigurationFactoryImpl implements OsgiFactoryConfigService {
    private int configurationId;
    private String configurationName;
    List<OsgiFactoryConfigService> list;

    @Activate
    @Modified
    public void activate(final OsgiFactoryConfiguration config) throws IOException {
        configurationId = config.configurationId();
        configurationName = config.configName();
    }

    @Reference(service = OsgiFactoryConfigService.class,
              cardinality = ReferenceCardinality.MULTIPLE
            , policy = ReferencePolicy.DYNAMIC)
    public void bindOSGiFactoryConfig(final OsgiFactoryConfigService configService) {
        if (list == null) {
            list = new ArrayList<>();
        }
        list.add(configService);
    }

    public void unbindOSGiFactoryConfig(final OsgiFactoryConfigService configService) {
        list.remove(configService);

    }

    @Override
    public int getConfigurationId() {
        return configurationId;
    }

    @Override
    public String getConfigName() {
        return configurationName;
    }

    @Override
    public List<OsgiFactoryConfigService> getAllConfiguration() {
        return list;
    }

    @Override
    public OsgiFactoryConfigService get(int configId) {
        for (OsgiFactoryConfigService confFact : list) {
            if (configurationId == confFact.getConfigurationId())
                return confFact;
        }
        return null;
    }

}`,
      },

      {
        type: "heading",
        level: 3,
        text: "Cardinality in AEM ?",
      },

      {
        type: "paragraph",
        text:
          "Cardinality in OSGi is specified using annotations or XML Configurations and indicates whether a service dependency is mandatory or optional, and whether the component expects a single instance or multiple instances of the service.",
      },

      {
        type: "heading",
        level: 3,
        text: "Cardinality Options",
      },

      {
        type: "heading",
        level: 4,
        text: "Mandatory Single (1..1)",
      },

      {
        type: "paragraph",
        text:
          "The component requires exactly one instance of the service. The component cannot function without this service, and only one instance is expected.",
      },

      {
        type: "heading",
        level: 4,
        text: "Optional Single (0..1)",
      },

      {
        type: "paragraph",
        text:
          "The component can function without the service (optional), but if the service is present, only one instance is expected.",
      },

      {
        type: "heading",
        level: 4,
        text: "Mandatory Multiple (1..n)",
      },

      {
        type: "paragraph",
        text:
          "The component requires at least one instance of the service but can accept multiple instances. It must have at least one service bound to function properly.",
      },

      {
        type: "heading",
        level: 4,
        text: "Optional Multiple (0..n)",
      },

      {
        type: "paragraph",
        text:
          "The component can function without the service, but if the service is available, it can bind to multiple instances.",
      },

      {
        type: "paragraph",
        text:
          "Create a Java Class with @Model as an annotation through which we can get all the Configurations that passed from Felic console",
      },

      {
        type: "code",
        language: "java",
        code: `package com.demo.core.models.impl;

import com.demo.core.models.OsgiConfigurationModel;
import com.demo.core.services.OsgiFactoryConfigService;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;

import java.util.List;

@Model(adaptables = SlingHttpServletRequest.class,
        adapters = OsgiConfigurationModel.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class OsgiConfigurationModelImpl implements OsgiConfigurationModel {
    @OSGiService
    OsgiFactoryConfigService osgiFactoryConfigService;
    @Override
    public List<OsgiFactoryConfigService> getAllConfigurations() {
        return osgiFactoryConfigService.getAllConfiguration();
    }
}`,
      },

      {
        type: "paragraph",
        text:
          "Create the components and with the help of Slightly we can display all the Configurations in AEM page.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/osgi-configuration-factory/slightlycode.webp",
        alt: "Language copies image",
      },

      {
        type: "paragraph",
        text:
          "Now Redirect to localhost:4502/system/console/configMgr and search you configuration name.",
      },

      {
        type: "paragraph",
        text:
          "After refreshing the Page you will find all the Configurations with the unique identifier.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/osgi-configuration-factory/FelixConsole.webp",
        alt: "Language copies image",
      },

      {
        type: "paragraph",
        text: "Click On '+' icon to add the Configurations",
      },

      {
        type: "image",
        src: "/images/blogs/sites/osgi-configuration-factory/felixconsole2.webp",
        alt: "Language copies image",
      },

      {
        type: "paragraph",
        text:
          "Now login in to the AEM , Go to site Console and open the page",
      },

      {
        type: "image",
        src: "/images/blogs/sites/osgi-configuration-factory/osgifactorypage.webp",
        alt: "Language copies image",
      },
    ],
  },
  {
    slug: "aem-msm",
    title: "MSM (Multi Site Manager)",
    category: "AEM Sites",
    date: "2023-05-09",
    author: "Yash Sakharkar",
    description:
      "Discover how AEM Multi Site Manager simplifies multi-site content management using blueprints and live copies.",
    content: [
      {
        type: "heading",
        level: 3,
        text: "What is MSM?",
      },

      {
        type: "paragraph",
        text:
          "MSM is a Multi Site Manager in Adobe Experience Manager that allows you to reuse content across multiple sites. MSM lets you create live copies and blueprints of sites or pages and how the content is Synchronized between them. MSM also works with translation tools to create and maintain multilingual sites.",
      },

      {
        type: "heading",
        level: 3,
        text: "What is the use of MSM in AEM?",
      },

      {
        type: "bulletList",
        items: [
          "Creating and managing the sites that are in multiple languages and countries.",
          "Reusing and replicating the same content across multiple websites while maintaining consistent branding and content.",
          "Translate content automatically using i18n translation.",
          "Publishing content changes from the blueprints to live copies.",
          "Localizing content for different cultures or regions by detaching elements of the live copies.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "Advantages of MSM in AEM",
      },

      {
        type: "bulletList",
        items: [
          "It minimizes the time and effort required to manage multiple websites that share the same content.",
          "It ensures consistency in the look of all the WebPages across different sites.",
          "Translate content automatically using i18n translation.",
          "It allows AEM developers to specify relationships between the sites so that changes made on one site will automatically be reflected on other sites.",
          "It integrates with translation tools like i18n to create and maintain multilingual sites.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "Important terms used with MSM",
      },

      {
        type: "heading",
        level: 4,
        text: "Language Copies",
      },

      {
        type: "paragraph",
        text:
          "Language copies are the type of live copies in AEM that are created from a source page in a different language. Language copies allow you to reuse the content structure and layout of the page while translating the content into other languages. Language copies can be created using the “Language Copy” command in AEM wizard which also integrates with third-party translation tools.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/Languagemasterdiagram.webp",
        alt: "Language master diagram",
      },

      {
        type: "heading",
        level: 4,
        text: "Blueprints",
      },

      {
        type: "paragraph",
        text:
          "A blueprint is a structural definition of your site that you can use as a source for managing and creating live copies. A live copy is a copy of a page branch that inherits from the source and can be synchronized with it. A blueprint configuration identifies an existing copy that you want to use as the source of one or more live copies. You can also specify the rollout configuration to use for synchronizing the content between the blueprint and the live copies. A blueprint rollout will push all modifications to all of its live copies.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/blueprints-copies.webp",
        alt: "country specific website",
      },

      {
        type: "heading",
        level: 4,
        text: "Live Copies",
      },

      {
        type: "paragraph",
        text:
          "Live Copies in MSM are the copies of source pages or sites that inherit the content and structure from the source but can also be modified independently. Live copies allow you to reuse the content across multiple sites and pages, and synchronize them with the source needed.",
      },

      {
        type: "heading",
        level: 4,
        text: "Advantages of using live copies in AEM",
      },

      {
        type: "numberedList",
        items: [
          "You can manage multiple sites and pages that share the same content with less effort and time.",
          "You can ensure the consistency and accuracy of content across different sites or pages.",
          "You can customize the content of live copies to suit different regions and languages.",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "Now step to step we will see how to create Language Copies in MSM",
      },

      {
        type: "bulletList",
        items: [
          "Create a page e.g. Language Master by right clicking on your project.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/CreateLanguagemaster.webp",
        alt: "Create Language master image",
      },

      {
        type: "bulletList",
        items: [
          "Similarly, create a master page for “English” by right clicking on Language Master. Click on create -> Language Copy tab.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/creating-language-copy.webp",
        alt: "creating language copy image",
      },

      {
        type: "bulletList",
        items: [
          "Click on the Add Pages button and select the language of which copies you wish to make. Currently we have selected English (en).",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/Add-language-master-page.webp",
        alt: "Add language master page image",
      },

      {
        type: "bulletList",
        items: [
          "After selecting a page, Click “Next” on the next tab. Click on Translation Setting and select Default Configuration and on the Left hand side you will find Target Language Here, you can select what language copies you want to make. In the below Image we have selected Hindi as a language.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/Creating-hindi-language-copy.webp",
        alt: "Creating hindi language copy image",
      },

      {
        type: "bulletList",
        items: [
          "In this way you can create the language copies of many languages. In the below Image we have created language copies in French, Italian, German languages.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/Language-copiesss.webp",
        alt: "Language copies image",
      },

      {
        type: "heading",
        level: 3,
        text: "Steps to create Blueprints in MSM in AEM",
      },

      {
        type: "bulletList",
        items: [
          "Click on the create button and select Site -> Select your project Blueprint.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/blue-print-1.webp",
        alt: "blue print 1 image",
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/blue-print-2.webp",
        alt: "blue print 2 image",
      },

      {
        type: "paragraph",
        text:
          "Note: In case you do not find your project. Go to Tools -> Sites -> Blueprints and there, create your Blueprint.",
      },

      {
        type: "bulletList",
        items: [
          "In the properties section, mention “Title” and “Name” of your site and select the “Site Owner” and also mention the languages in which the site should be displayed.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/blueprint-3.webp",
        alt: "blueprint 3 image",
      },

      {
        type: "bulletList",
        items: [
          "In the below Image you can find the live copies of English and Hindi under India(hi) page.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/blueprint4.webp",
        alt: "blueprint 4 image",
      },

      {
        type: "paragraph",
        text:
          "Now the question is if we can create live copies with Blueprints then what’s the use of live copy option in Sites?",
      },

      {
        type: "paragraph",
        text:
          "Consider we have a Site in French and English language, but there should be a need of creating the site in other languages, e.g. Spanish in such a case you can create a Live Copy of Spanish language.",
      },

      {
        type: "heading",
        level: 3,
        text: "Steps to create the live copies in MSM",
      },

      {
        type: "bulletList",
        items: [
          "In the below Image we have created a page “Master Copy” and under it we have a test component.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/master-copy.webp",
        alt: "master copy image",
      },

      {
        type: "bulletList",
        items: [
          "Click on the page you have created and author it. Here we have a test page under which I have added a “Text” component and authored it.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/text-component.webp",
        alt: "text component image",
      },

      {
        type: "bulletList",
        items: [
          "Now to create a live copy of the test page in French language, Click on create live copy -> Language Master Page -> select live copy (French Page).",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/live-copy.webp",
        alt: "live copy image",
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/French-Live-Copy.webp",
        alt: "French live copy image",
      },

      {
        type: "bulletList",
        items: [
          "Click on the Next Button -> Choose the destination for which page you need to create a live copy.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/french-live-copy-destination.webp",
        alt: "french live copy destination image",
      },

      {
        type: "bulletList",
        items: [
          "Add Title and Name, also select the Rollout Configs i.e. Standard Rollout Config, and Push on Modify. Click on the Next Button.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/creating-french-live-copy.webp",
        alt: "creating french live copy image",
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/created-french-copy.webp",
        alt: "created french live copy image",
      },

      {
        type: "bulletList",
        items: [
          "Now to create a Live Copy of the Master Copy (Test Page) inside the French page. Again, Click on Live Copy -> Open master Copy there you will find the Test Page. Select that Page -> Select the destination as French Page -> Inside the French Page Test will be created. In the below Image, you will find a Test Page, Its URL will be /fr/fr/test.html.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/aem-msm/French-Test-Component.webp",
        alt: "french test component image",
      },
    ],
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
    content: [
      {
        type: "paragraph",
        text: "Happy to find you here. Welcome to another learning.",
      },

      {
        type: "heading",
        level: 2,
        text: "Document Based Authoring",
      },

      {
        type: "paragraph",
        text:
          "Document-Based Authoring (DBA) in Adobe Experience Manager (AEM) is a content authoring paradigm designed to simplify the creation, management, and delivery of structured content. Unlike traditional page-based authoring, where authors focus on creating and managing individual web pages, DBA allows authors to work with content in a more modular, reusable, and centralized way, often in the form of documents.",
      },

      {
        type: "paragraph",
        text:
          "Currently, when a request comes in, the content is served through the publish instance. With Edge Delivery Services, the content is served through EDS and no publish instance is required. We can build and run a website on AEM as a Cloud Service without using AEM.",
      },

      {
        type: "image",
        src: "images/blogs/eds/document-based-authoring/content-is-served-through-documents.webp",
        alt: "Content served through documents in Edge Delivery Services",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "Now we will create a sample website to learn document based authoring. Below are the requirements to create a website:",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "GitHub account",
            text: "All your code will be kept in your GitHub repository.",
          },
          {
            title: "Google account",
            text:
              "For now we are using Google Docs, so we need a Google account. Otherwise, a Microsoft account can be used as well.",
          },
          {
            title: "Basic knowledge",
            text: "You should have a basic understanding of HTML, CSS and JavaScript.",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Steps to Create and Configure an Edge Delivery Services Project",
      },

      {
        type: "heading",
        level: 3,
        text: "Step 1: Create a repository from the template",
      },

      {
        type: "paragraph",
        text:
          "Create a new repository in your GitHub using the Adobe boilerplate template:",
      },

      {
        type: "code",
        code: "https://github.com/adobe/aem-boilerplate",
      },

      {
        type: "image",
        src: "images/blogs/eds/document-based-authoring/adobe-template.webp",
        alt: "Creating a repository from the AEM boilerplate template",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 2: Install the AEM Code Sync GitHub App",
      },

      {
        type: "paragraph",
        text:
          "Install the AEM Code Sync GitHub App on your repository. Open the URL below in the browser and click Install.",
      },

      {
        type: "code",
        code: "https://github.com/apps/aem-code-sync",
      },

      {
        type: "image",
        src: "images/blogs/eds/document-based-authoring/aem-code-sync.webp",
        alt: "Installing the AEM Code Sync GitHub App",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 3: Create a folder in Google Drive",
      },

      {
        type: "paragraph",
        text: "Go to Google Drive and create a folder with the project name.",
      },

      {
        type: "image",
        src: "images/blogs/eds/document-based-authoring/folder-creation.webp",
        alt: "Project folder created in Google Drive",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 4: Create the documents and share them",
      },

      {
        type: "paragraph",
        text:
          "Create three Docs files in the project folder with the names index, nav and footer. Give editor permission to the helix@adobe.com account, and add some content in them.",
      },

      {
        type: "image",
        src: "images/blogs/eds/document-based-authoring/docs-creation-google-drive.webp",
        alt: "index, nav and footer documents in Google Drive",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 5: Add the Drive path to fstab.yaml",
      },

      {
        type: "paragraph",
        text:
          "After that, go to GitHub. There is a file called fstab.yaml. Add the path of your Google Drive folder in it and commit the change.",
      },

      {
        type: "image",
        src: "images/blogs/eds/document-based-authoring/adding-path-to-git-code.webp",
        alt: "Google Drive folder path added to fstab.yaml",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 6: Add the AEM Sidekick extension",
      },

      {
        type: "paragraph",
        text:
          "Now add the AEM Sidekick extension to your browser, then go inside your project folder. In the Sidekick you will get the option to add the project. Add the project, and you can now preview or publish the pages.",
      },

      {
        type: "image",
        src: "images/blogs/eds/document-based-authoring/sidekick.webp",
        alt: "AEM Sidekick with the Add project option",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 7: Open the preview and live URLs",
      },

      {
        type: "paragraph",
        text:
          "There are two URLs you can use to see the pages. To create them you need the branch in which your code is available, your repo name and your owner name. The .page extension is used for preview and the .live extension for the published site, as shown below.",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "Preview URL",
            text: "https://{branch}--{repo}--{owner}.aem.page/",
          },
          {
            title: "Publish URL",
            text: "https://{branch}--{repo}--{owner}.aem.live/",
          },
        ],
      },

      {
        type: "paragraph",
        text:
          "Whenever you hit the URL, the index page available in that folder is displayed. If the index page is not present, it throws a 404 Not Found.",
      },

      {
        type: "paragraph",
        text:
          "Below is how your website is going to look. For the content of the page, you can refer to the Google Drive folder used in this example.",
      },

      {
        type: "image",
        src: "images/blogs/eds/document-based-authoring/index-page.webp",
        alt: "Final index page of the sample website",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },
    ],
  },
  {
    slug: "adding-metadata-in-edge-delivery-services",
    title: "Adding Metadata in Edge Delivery Services",
    category: "AEM EDS",
    date: "2024-12-20",
    author: "Owais Pathan",
    description:
      "Learn how to add and manage page metadata in EDS to improve SEO and content discovery.",
    content: [
      {
        type: "paragraph",
        text: "Happy to find you here. Welcome to another learning.",
      },

      {
        type: "heading",
        level: 2,
        text: "What is Metadata?",
      },

      {
        type: "paragraph",
        text:
          "Metadata refers to the information embedded in a webpage or associated with its content that describes its characteristics, purpose, and other properties. Metadata is not typically visible to users but plays a crucial role in how search engines, browsers, and other systems interpret and interact with the webpage.",
      },

      {
        type: "paragraph",
        text: "Metadata can be added to a page in two ways:",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "Using a block",
            text: "Used to add page-level metadata.",
          },
          {
            title: "Using a Google Sheet or Excel",
            text: "Used for site-level or bulk metadata.",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Using the Metadata Block",
      },

      {
        type: "paragraph",
        text:
          "To add metadata to a page, we add a block called the metadata block. It is a special block that is handled internally by the HTML rendering service to add meta tags in the head of the HTML structure.",
      },

      {
        type: "paragraph",
        text:
          "There should be only one metadata block per page, and it should be placed at the bottom of the page. It can technically be kept anywhere, but the bottom is the convention. The image below shows how to create the block.",
      },

      {
        type: "image",
        src: "images/blogs/eds/adding-metadata/metadata-block.webp",
        alt: "Metadata block added to a page",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "In the image above, we have added title, description, image, template, color, theme and robots. If you don't add a title, the first h1 of the page is picked, and similarly for the description the first paragraph is picked. After adding the block, preview the page and you can see the values added in the meta tag section, as shown in the image below.",
      },

      {
        type: "image",
        src: "images/blogs/eds/adding-metadata/metadata-added.webp",
        alt: "Meta tags added in the page head",
        style: {
          maxWidth: "300px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text: "This is how we add metadata using the block.",
      },

      {
        type: "heading",
        level: 2,
        text: "Using an Excel Sheet",
      },

      {
        type: "paragraph",
        text:
          "When we want to add metadata for a particular hierarchy, or for pages under a particular folder, or add metadata in bulk, we use an Excel sheet.",
      },

      {
        type: "heading",
        level: 3,
        text: "Step 1: Create the metadata sheet",
      },

      {
        type: "paragraph",
        text:
          "To add metadata using a Google Sheet or Excel, we need to create a file with the name metadata under the root folder, meaning the main folder where all the project files are kept.",
      },

      {
        type: "image",
        src: "images/blogs/eds/adding-metadata/metadata-sheet-name.webp",
        alt: "metadata sheet in the project root folder",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 2: Add the URL column and meta tags",
      },

      {
        type: "paragraph",
        text:
          "Inside the file we need to create a column called URL, where we define the hierarchy on which the metadata should be applied. The other columns are the meta tags that you want to apply, and their values.",
      },

      {
        type: "image",
        src: "images/blogs/eds/adding-metadata/metadata-excel-properties.webp",
        alt: "metadata sheet with URL column and meta tag columns",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "If the URL is /**, the metadata is applied to all the pages. If you want to apply the meta tags only to the pages under a folder, for example /cms/, define it as shown in the image above.",
      },

      {
        type: "paragraph",
        text:
          "Note: If you apply a meta tag, say \"Theme\", using both the metadata block and the sheet, the metadata block is given priority.",
      },

      {
        type: "heading",
        level: 3,
        text: "Step 3: Verify the result",
      },

      {
        type: "image",
        src: "images/blogs/eds/adding-metadata/bulk-metadata-added.webp",
        alt: "Bulk metadata applied to pages",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text: "As you can see, the metadata properties have been added to the pages.",
      },

      {
        type: "paragraph",
        variant: "closing",
        text: "Thanks for reading 😄",
      },
    ],
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
    content: [
      {
        type: "paragraph",
        text: "Happy to find you here. Welcome to another learning.",
      },

      {
        type: "heading",
        level: 2,
        text: "What are Redirects?",
      },

      {
        type: "paragraph",
        text:
          "Redirects in AEM Edge Delivery Services (EDS) are mechanisms to route user requests from one URL to another at the edge server level, reducing latency and improving performance. These redirects occur before requests reach the AEM origin server, ensuring faster response times and efficient content delivery.",
      },

      {
        type: "paragraph",
        text:
          "Redirects can be done for internal links as well as external links.",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "Internal links",
            text: "Redirects within the website.",
          },
          {
            title: "External links",
            text: "Redirects to external websites.",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Internal Redirect",
      },

      {
        type: "paragraph",
        text: "Redirects between pages within the website are internal redirects.",
      },

      {
        type: "heading",
        level: 3,
        text: "Step 1: Create the redirects sheet",
      },

      {
        type: "paragraph",
        text:
          "For the redirect rules, you need to create an Excel sheet with the name redirects in the root folder of the project.",
      },

      {
        type: "image",
        src: "images/blogs/eds/redirects-in-eds/redirects-excel-created.webp",
        alt: "redirects Excel sheet created in the project root folder",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 2: Add the Source and Destination columns",
      },

      {
        type: "paragraph",
        text:
          "Inside the sheet we need to create two columns with the headers \"Source\" and \"Destination\", as shown in the image below. In the Source column we add the source URL, and in the Destination column we add the URL where it should redirect to.",
      },

      {
        type: "image",
        src: "images/blogs/eds/redirects-in-eds/redirects-excel-properties.webp",
        alt: "redirects sheet with Source and Destination columns",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 3: Before the redirect rule",
      },

      {
        type: "paragraph",
        text:
          "Before the redirect rule is added, when we hit /dm in the URL we get a 404 Not Found, as you can see in the image below.",
      },

      {
        type: "image",
        src: "images/blogs/eds/redirects-in-eds/404-not-found.webp",
        alt: "404 Not Found page when opening /dm",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 4: After the redirect rule",
      },

      {
        type: "paragraph",
        text:
          "After creating the redirect rule, we can see that it redirects to the /demo/demo1 URL.",
      },

      {
        type: "image",
        src: "images/blogs/eds/redirects-in-eds/redirect-url.webp",
        alt: "/dm redirecting to /demo/demo1",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 2,
        text: "External Redirect",
      },

      {
        type: "paragraph",
        text:
          "For external redirects, in the same sheet, replace the destination with any external URL and you will see that it lands on the external link.",
      },

      {
        type: "image",
        src: "images/blogs/eds/redirects-in-eds/external-redirects-excel.webp",
        alt: "redirects sheet with an external URL as the destination",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 2,
        text: "What are Custom HTTP Response Headers?",
      },

      {
        type: "paragraph",
        text:
          "HTTP response headers in Adobe Experience Manager (AEM) Edge Delivery Services (EDS) are metadata sent back from the server to the client (usually a web browser) in response to an HTTP request. These headers provide information about the server's response, including status codes, content details, cache directives, and security policies. In the context of AEM EDS, headers play a critical role in controlling and optimizing the delivery of content at the edge.",
      },

      {
        type: "heading",
        level: 2,
        text: "Steps to Add Response Headers to the Page",
      },

      {
        type: "heading",
        level: 3,
        text: "Step 1: Create the .helix folder",
      },

      {
        type: "paragraph",
        text:
          "To add headers to the pages, we need to create a folder with the name \".helix\" under the root folder of our project.",
      },

      {
        type: "image",
        src: "images/blogs/eds/redirects-in-eds/helix-folder.webp",
        alt: ".helix folder in the project root",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 2: Create the headers sheet",
      },

      {
        type: "paragraph",
        text:
          "Inside that folder we need to create an Excel sheet with the name \"headers\".",
      },

      {
        type: "image",
        src: "images/blogs/eds/redirects-in-eds/headers-file.webp",
        alt: "headers Excel sheet inside the .helix folder",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 3: Add the url, key and value columns",
      },

      {
        type: "paragraph",
        text: "In that sheet there will be three columns: url, key and value.",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "url",
            text:
              "This column holds the path of a folder, and the header will be applied to the pages present under that folder.",
          },
          {
            title: "key",
            text: "This column holds the key of the header.",
          },
          {
            title: "value",
            text: "This column holds the value of the header.",
          },
        ],
      },

      {
        type: "image",
        src: "images/blogs/eds/redirects-in-eds/headers-file-properties.webp",
        alt: "headers sheet with url, key and value columns",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 4: Verify the headers on the page",
      },

      {
        type: "paragraph",
        text:
          "In the sheet above, the header \"author\" is applied to all the pages in the website, and the header \"cms\" is applied to the pages present under the cms folder.",
      },

      {
        type: "image",
        src: "images/blogs/eds/redirects-in-eds/headers-added.webp",
        alt: "Response headers visible in the browser",
        style: {
          maxWidth: "450px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 5: Activate the headers sheet",
      },

      {
        type: "paragraph",
        text:
          "One more thing: whenever you create this headers sheet, you will get the option to activate it instead of publishing it. This is done for security reasons.",
      },

      {
        type: "image",
        src: "images/blogs/eds/redirects-in-eds/Activating-headers-sheet.webp",
        alt: "Activate option shown for the headers sheet",
        style: {
          maxWidth: "450px",
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
    slug: "servlets",
    title: "Servlets in AEM",
    category: "AEM Sites",
    date: "2023-02-01",
    author: "Shruti Meshram",
    description:
      "Explore how Sling Servlets handle HTTP requests and implement custom backend functionality in AEM.",
    content: [
      {
        type: "paragraph",
        text: "Happy to see you. Welcome to a new blog.",
      },

      {
        type: "heading",
        level: 2,
        text: "Servlets in AEM",
      },

      {
        type: "paragraph",
        text:
          "In this blog we will be understanding what are servlets in AEM plus what are the ways in which they are registered. Also we will understand in brief which type to use and when. Lets begin!",
      },

      {
        type: "heading",
        level: 2,
        text: "What are Servlets",
      },

      {
        type: "paragraph",
        text:
          "Servlets are java classes which are meant to handle HTTP requests and their respective responses also allowing the developer to generate dynamic content. They provide variety of methods like doGET, doPOST, doPUT, doOPTIONS and doHEAD.",
      },

      {
        type: "paragraph",
        text:
          "doGET - Handles HTTP GET requests, typically used to retrieve data from the server. It is used to serve resources and render data without altering the server's state.",
      },

      {
        type: "paragraph",
        text:
          "doPOST - Handles HTTP POST requests, used for submitting data to the server to create or modify resources. It is generally used for form submissions, API requests, or sending data that may change the server state.",
      },

      {
        type: "paragraph",
        text:
          "doPUT - Handles HTTP PUT requests, which are used to update an existing resource or create a new one if it doesn’t exist.",
      },

      {
        type: "paragraph",
        text:
          "doOPTIONS - Handles HTTP OPTIONS requests, used by clients to discover what HTTP methods are supported by the server for a given resource. It is generally used for handeling CORS(Cross Origin Resource Sharing) and checking server's capability.",
      },

      {
        type: "paragraph",
        text:
          "doHEAD - Handles HTTP HEAD requests, which are similar to GET but do not return the body of the response, only headers.",
      },

      {
        type: "heading",
        level: 4,
        text: "Registering a Servlet",
      },

      {
        type: "paragraph",
        text:
          "There are tow ways in which a servlet is actually registered in aem",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "By Path",
            text:
              "Whenever we have to test the reponse or functioning of the servlet prior, it is preferred to register it by path. Also whenever any custom endpoint is created in the aem environment, they generally are not tied to any sort of aem resource, like components. In such case too, the servlet is preferred to be registered by path. An example is creating an endpoint from content fragments.",
          },
          {
            title: "By Resource Type",
            text:
              "Now when a servlet is supposed to act on a specific resource or is supposed to work within the context of a specific resource or perform logic specifically related to the content or inputs recieved from the page, at this moment we are ought to register the servlet by resource type.",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Registering by Path",
      },

      {
        type: "bulletList",
        items: [
          "In order to register a servlet by path, you need to add the following snippet to it. Remember the path must begin with /bin.",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `@Component(
        service = Servlet.class,
        property = {
                "sling.servlet.paths=/bin/asset",
                "sling.servlet.methods=GET",
                "sling.servlet.extension=json"
        }
)`,
      },

      {
        type: "bulletList",
        items: [
          "Here we have created a servlet that reads the metadata properties of an asset.",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `package com.local.core.servlets;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.service.component.annotations.Component;

import javax.jcr.Node;
import javax.jcr.Property;
import javax.jcr.PropertyIterator;
import javax.naming.spi.Resolver;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Properties;

@Component(
        service = Servlet.class,
        property = {
                "sling.servlet.paths=/bin/asset",
                "sling.servlet.methods=GET",
                "sling.servlet.extension=json"
        }
)
public class AssetPathServlet extends SlingSafeMethodsServlet {
    @Override
    protected void doGet(SlingHttpServletRequest request,
    SlingHttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.println("Get Invoked");
        try(ResourceResolver resolver = request.getResourceResolver()){
            Resource resource = resolver.getResource("/content/dam/Sample/sun.jpg");
            Node asset = resource.adaptTo(Node.class);
            Node metadata = asset.getNode("jcr:content").getNode("metadata");
            out.println(metadata.getName());
            PropertyIterator allProperties = metadata.getProperties();

            if(allProperties.hasNext()){
                while(allProperties.hasNext()){
                    Property property = allProperties.nextProperty();
                    out.println(property.getName());
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }

    }
}`,
      },

      {
        type: "bulletList",
        items: [
          "Here as you can see the servlet is registered by /bin/assets.json. On hitting the servlet in the postman, we are able to see its response in the console.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/servlets/postsmanpath.webp",
        alt: "postsmanpath",
      },

      {
        type: "heading",
        level: 2,
        text: "Register by Resource",
      },

      {
        type: "bulletList",
        items: [
          "In order to register your servlet by a resource type, you need to first create a component and add it on a page. In this case we have added a demo component on a page.",
          "You need to add the following snippet to your servlet. The same functionality we will achieve by registering the servlet by resource type.",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `@Component(
            service = Servlet.class
    )
    @SlingServletResourceTypes(
        resourceTypes = "/apps/local-project/components/servletresource",
        methods = HttpConstants.METHOD_GET
    )`,
      },

      {
        type: "bulletList",
        items: [
          "After registering your servlet with resource type, you need to hit it on the postman to recieve its response. The path to the servlet will be the path of the page on which your component is present ending till the location of the component itself.",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `package com.local.core.servlets;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.servlets.annotations.SlingServletResourceTypes;
import org.osgi.service.component.annotations.Component;

import javax.jcr.Node;
import javax.jcr.Property;
import javax.jcr.PropertyIterator;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import java.io.IOException;
import java.io.PrintWriter;

@Component(
        service = Servlet.class
)
@SlingServletResourceTypes(
    resourceTypes = "/apps/local-project/components/servletresource",
    methods = HttpConstants.METHOD_GET
)
public class AssetResourceServlet extends SlingSafeMethodsServlet {
    @Override
    protected void doGet(SlingHttpServletRequest request,
    SlingHttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.println("Get Invoked");
        try(ResourceResolver resolver = request.getResourceResolver()){
            Resource resource = resolver.getResource("/content/dam/Sample/sun.jpg");
            Node asset = resource.adaptTo(Node.class);
            Node metadata = asset.getNode("jcr:content").getNode("metadata");
            out.println(metadata.getName());
            PropertyIterator allProperties = metadata.getProperties();

            if(allProperties.hasNext()){
                while(allProperties.hasNext()){
                    Property property = allProperties.nextProperty();
                    out.println(property.getName());
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }

    }
}`,
      },

      {
        type: "image",
        src: "/images/blogs/sites/servlets/postmanresource.webp",
        alt: "postmanresource",
      },

      {
        type: "heading",
        level: 2,
        text: "Conclusion",
      },

      {
        type: "paragraph",
        text:
          "Here we have learnt what are servlets, how they are registered and when to use which way to register it. Also we have tested both the servlets as registered by resource as well as by path.",
      },

      {
        type: "paragraph",
        text:
          "I hope you enjoyed the learing and have found the blog informative.",
      },
    ],
  },
  {
    slug: "custom-button-and-console",
    title: "Creating custom button & console in AEM",
    category: "AEM Sites",
    date: "2023-08-09",
    author: "Suchita Mishra",
    description:
      "Learn how to extend the AEM authoring interface with custom console actions and buttons.",
    content: [
      {
        type: "paragraph",
        text:
          "Adobe Experience Manager (AEM) is a comprehensive content management solution for building websites, mobile apps, and forms. AEM's flexibility allows developers to customize its interface extensively. In this blog, we'll walk through the steps to create a custom button in the AEM console and how to add a custom navigation tab and console.",
      },

      {
        type: "heading",
        level: 3,
        text: "Prerequisites",
      },

      {
        type: "paragraph",
        text: "Before we start, ensure you have the following:",
      },

      {
        type: "bulletList",
        items: [
          "Running AEM instance (AEM 6.x)",
          "Basic knowledge of AEM and Sling",
          "Familiarity with JSP, and front-end technologies like HTML, CSS, Javascript",
        ],
      },

      {
        type: "heading",
        level: 3,
        text: "Creating a Custom Button in an AEM Console",
      },

      {
        type: "paragraph",
        text:
          "In AEM, all the core content and components resides in the /libs directory in CRX. When customization or modification is required, it's best practice to overlay the specific node from /libs to the /apps directory. This approach ensures that the original content remains untouched, allowing for safer and more manageable updates. By overlaying and modifying nodes in /apps, you can tailor your AEM instance to meet unique requirements while maintaining a clear distinction between out-of-the-box functionality and custom development.",
      },

      {
        type: "paragraph",
        text: "Let's create a custom button in the AEM Sites Console.",
      },

      {
        type: "paragraph",
        text:
          "All related nodes for the Sites Console are located under /libs/wcm/core/content/sites. Within jcr:content, the /actions/selection node contains all the available buttons that appear when selecting any page in the Sites Console. To customize or add new functionality, we can overlay and modify any node as needed. In this scenario, we'll create a new button which will simply redirect us to a new page, on click of it. To do this, we'll overlay the /selection node under /apps and create a new node named \"opennewpage\" with a \"data\" sub-node and add respective properties to it as shown below.",
      },

      {
        type: "paragraph",
        text: "/apps overlayed node structure",
      },

      {
        type: "image",
        src: "/images/blogs/sites/custom-button-and-console/apps-overlay-structure.png",
        alt: "apps overlay structure",
      },

      {
        type: "paragraph",
        text: "opennewpage node properties",
      },

      {
        type: "image",
        src: "/images/blogs/sites/custom-button-and-console/opennewpage-node-properties.png",
        alt: "opennewpage node properties",
      },

      {
        type: "paragraph",
        text: "data node properties",
      },

      {
        type: "image",
        src: "/images/blogs/sites/custom-button-and-console/data-node-properties.png",
        alt: "data node properties",
      },

      {
        type: "paragraph",
        text:
          "Save all the nodes & we've successfully customized the AEM Sites Console by adding a custom button.",
      },

      {
        type: "paragraph",
        text:
          "To check the availability of our custom button, navigate to the Sites Console at http://localhost:4502/sites.html/content, select any page, we'll spot our custom button in the selection bar (as shown below). Clicking on it will smoothly redirect us based on the URL specified in its data node's href property.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/custom-button-and-console/custom-button.png",
        alt: "opennewpage node properties",
      },

      {
        type: "paragraph",
        text:
          "This slight adjustment enhances the console's usability, granting users a more fluid and user-friendly interaction.",
      },

      {
        type: "heading",
        level: 3,
        text: "Creating a Custom Tool Navigation Menu and a new Console",
      },

      {
        type: "paragraph",
        text:
          "Now let's create a custom console in our AEM environment. To achieve this, we need to overlay the tools node from /libs/cq/core/content/nav/tools to /apps. Once overlaid, we can add our own navigation menu by creating a new node and configuring the necessary properties (as shown below).",
      },

      {
        type: "image",
        src: "/images/blogs/sites/custom-button-and-console/tools-menu.png",
        alt: "navigation menu",
      },

      {
        type: "paragraph",
        text:
          "After setting up the navigation menu, the next step is to add a subnode under our custom \"console-menu\" node. This subnode will represent the AEM console tool, which can be configured to perform any additional functionality we require. By creating this subnode and adding the respective properties according to our needs, we ensure the custom console tool is fully functional and integrated seamlessly into the AEM console.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/custom-button-and-console/console-tool.png",
        alt: "console tool",
      },

      {
        type: "paragraph",
        text:
          "We've configured the tool to redirect to the new console page located at /apps/[project]/content/sample-console.html. The next step involves creating this page. First, create a node of type cq:Page at the project level. This node should be assigned a meaningful title and the property sling:resourceType, which will reference the specific page component we plan to use.",
      },

      {
        type: "paragraph",
        text: "sample-console page",
      },

      {
        type: "image",
        src: "/images/blogs/sites/custom-button-and-console/console-page.png",
        alt: "console page",
      },

      {
        type: "paragraph",
        text: "sample-console node properties",
      },

      {
        type: "image",
        src: "/images/blogs/sites/custom-button-and-console/console-page-properties.png",
        alt: "console-page-properties",
      },

      {
        type: "paragraph",
        text: "jcr:content node properties",
      },

      {
        type: "image",
        src: "/images/blogs/sites/custom-button-and-console/page-jcr-properties.png",
        alt: "page-jcr-properties",
      },

      {
        type: "paragraph",
        text:
          "After establishing the cq:Page node, the next task is to develop the page component itself. This involves configuring the HTML and any associated scripts within the page component to display the desired content on our custom console. The page component's HTML should be crafted to present the necessary interface and functionality required for our console.",
      },

      {
        type: "paragraph",
        text:
          "After creating the page component and adding the content & styling to it (can be done accordingly), we have sucessfully created our custom AEM console. Upon clicking our sample console tool, it effortlessly redirects us to the meticulously designed page we've created.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/custom-button-and-console/console.png",
        alt: "console",
      },

      {
        type: "paragraph",
        text:
          "With that, we've successfully added a custom button to the AEM console, created a unique navigation menu, and personalized the AEM console itself. I hope you've found this blog helpful. Thanks for reading along! 😄",
      },
    ],
  },
  {
    slug: "introduction-to-components-and-sling-model",
    title: "Introduction to Components and Sling Model",
    category: "AEM Sites",
    date: "2023-01-18",
    author: "Shruti Meshram",
    description:
      "Learn how to build reusable AEM components and use Sling Models to efficiently access and manage content in the JCR.",
    content: [
      {
        type: "paragraph",
        text: "Hello, good to see you. Let us begin with a new learning.",
      },

      {
        type: "heading",
        level: 2,
        text: "Introduction to Components and Sling Model",
      },

      {
        type: "paragraph",
        text:
          "Today we will understand the basics of components and sling model in AEM.",
      },

      {
        type: "heading",
        level: 2,
        text: "What are Components",
      },

      {
        type: "paragraph",
        text:
          "Components are the building blocks of content on a page. A component is a reusable unit of functionality that can be placed on a page to represent specific content or behavior, such as a text block, image, carousel, form, or other interactive elements. Components are responsible for rendering content and logic on a web page and are used extensively in AEM’s Editable Templates and Pages.",
      },

      {
        type: "heading",
        level: 2,
        text: "How Do AEM Components Work",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "Rendering Content",
            text:
              "A component is usually called within a page’s HTML by its resource type . The page requests content, which the component renders based on its configuration and underlying logic.",
          },
          {
            title: "Dialog Configuration",
            text:
              "Components have dialogs where authors can configure the properties of the component, such as uploading an image or adding text. This dialog makes it easy for authors to personalize the content without needing to write code.",
          },
          {
            title: "Editable Content",
            text:
              "Components allow AEM authors to interact with the content directly in the AEM author interface. They can use drag-and-drop functionality to add, move, or remove components on a page.",
          },
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "Creation of Component",
      },

      {
        type: "bulletList",
        items: [
          "First you need to go to crx/de and in your project, go to components and then create component.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/introduction-to-components-and-sling-model/createComponent.webp",
        alt: "createComponent",
      },

      {
        type: "bulletList",
        items: [
          "You will get a dialog box wherein you need to add all the details for the component creation which includes the pre filled ones.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/introduction-to-components-and-sling-model/componentDialog.webp",
        alt: "componentDialog",
      },

      {
        type: "bulletList",
        items: [
          "Therein you need to rename the .jsp file to .html file and also add a cd:dialog. This is the dialog in which the fiels persists which are then authored. Here we have created the text field, path field, date picker and a chekbor. For every such field, we have to add a different sling:resourceType. These sling:resourceTypes can be found from the ADOBE Granite UI (https://developer.adobe.com/experience-manager/reference-materials/6-5/granite-ui/api/jcr_root/libs/granite/ui/index.html).",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/introduction-to-components-and-sling-model/dialogconfiguration.webp",
        alt: "dialogconfiguration",
      },

      {
        type: "image",
        src: "/images/blogs/sites/introduction-to-components-and-sling-model/fields.webp",
        alt: "fields",
      },

      {
        type: "bulletList",
        items: [
          "Then, you simple need to add the component on the page. You need to edit template, add the component to the cointainer's policy and then simply drop your component.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/introduction-to-components-and-sling-model/editTemplate.webp",
        alt: "editTemplate",
      },

      {
        type: "image",
        src: "/images/blogs/sites/introduction-to-components-and-sling-model/addingPolicy.webp",
        alt: "addingPolicy",
      },

      {
        type: "heading",
        level: 2,
        text: "Creating Sling Model",
      },

      {
        type: "bulletList",
        items: [
          "Now we need tto render the authored values of the component via sling model.",
          "@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL) This defines that the Sling Model can be adapted from a Resource and pecifies how fields in the model should be injected.",
          "@ValueMapValue annotation is specifically used to inject properties from a Sling Resource into a Sling Model. It works with ValueMaps, which are essentially key-value pairs that store resource properties in AEM. The @Inject annotation can be used with different types, and AEM will automatically resolve the correct source for the injection. Here we are using it to inject ResourceResolver",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `package com.local.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.jcr.Node;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class DemoComponentModel {

    @Inject
    ResourceResolver resolver;

    @ValueMapValue
    String text;
    @ValueMapValue
    String linkTo;
    @ValueMapValue
    String showCheck;

    String nodeName;

    public String getText() {
        return text;
    }

    public String getLinkTo() {
        return linkTo;
    }

    public String getShowCheck() {
        return showCheck;
    }

    public String getNodeName() {
        return nodeName;
    }

    @PostConstruct
    protected void init() {
        try{
            Resource resource = resolver.getResource(linkTo);
            Node node = resource.adaptTo(Node.class);
            nodeName = node.getName();
        }catch(Exception e){
            e.printStackTrace();
        }
    }
}`,
      },

      {
        type: "image",
        src: "/images/blogs/sites/introduction-to-components-and-sling-model/complete.webp",
        alt: "complete",
      },

      {
        type: "heading",
        level: 2,
        text: "Conclusion",
      },

      {
        type: "paragraph",
        text:
          "We have created a simple component and have learnt how to render its authoreded values using a sling model.",
      },

      {
        type: "paragraph",
        text:
          "I hope you enjoyed the learing and have found the blog informative.",
      },
    ],
  },
  {
    slug: "tabs-and-multifields",
    title: "Tabs and Multifield in AEM",
    category: "AEM Sites",
    date: "2023-01-18",
    author: "Shruti Meshram",
    description:
      "Discover how to use tabs and multifields in AEM dialogs to create organized and flexible authoring experiences.",
    content: [
      {
        type: "paragraph",
        text: "Hi, happy to find you here. Welcome to another blog",
      },

      {
        type: "heading",
        level: 3,
        text: "Tabs and Multifield in AEM",
      },

      {
        type: "paragraph",
        text:
          "We will be learning how tabs are created in a component and how do we handle multifield. Also we will be focusing upon some more annotations of sling model. Here we have taken a small example of authoring product details like product name, description and product quantity. Here is the simple outlook of the dialog's xml which we are going to create in this blog. We have created a component called tabsandmultifielddemo where you can find the jcr:title and group as provided.",
      },

      {
        type: "image",
        src: "/images/blogs/sites/tabs-and-multifields/xmlstructure.webp",
        alt: "xmlstructure",
      },

      {
        type: "image",
        src: "/images/blogs/sites/tabs-and-multifields/componentlayout.webp",
        alt: "componentlayout",
      },

      {
        type: "heading",
        level: 3,
        text: "Tabs",
      },

      {
        type: "paragraph",
        text:
          "In order to create tabs, you need to follow the following steps-",
      },

      {
        type: "bulletList",
        items: [
          "In items, create a node called tabs with sling:resourceType = granite/ui/components/coral/foundation/tabs",
          "Then, create items and within items will reside your tabs, here tabone and tabtwo. the sling:resourceType for both will be same as provided, the jcr:title will differ. It will be Tab One and Tab Two respectively.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/tabs-and-multifields/generictabproperties.webp",
        alt: "generictabproperties",
      },

      {
        type: "bulletList",
        items: [
          "Now here you need to again add items within it columns within it again items and then columns and then in these items we can add our fields. This is because items define a container that can hold different components or fields. This allows you to structure the dialog in a hierarchical way, ensuring it’s organized and easier to manage. columns are used within items to organize fields in a specific layout (like multiple columns side by side), which is particularly useful when you want to present multiple fields on a single tab in an organized and visually appealing manner. Similarly, you need to create the same structure for tabtwo.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/tabs-and-multifields/itemscolumnsitemscolumns.webp",
        alt: "itemscolumnsitemscolumns",
      },

      {
        type: "bulletList",
        items: [
          "For tabone, in this the last items container node hence created, create 3 fields called productName, productPrice and productDescrition with the provided propertied.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/tabs-and-multifields/productName.webp",
        alt: "productName",
      },

      {
        type: "image",
        src: "/images/blogs/sites/tabs-and-multifields/productDescription.webp",
        alt: "productDescription",
      },

      {
        type: "image",
        src: "/images/blogs/sites/tabs-and-multifields/productPrice.webp",
        alt: "productPrice",
      },

      {
        type: "heading",
        level: 3,
        text: "Multifield",
      },

      {
        type: "paragraph",
        text:
          "Since there could be a list of products with provided set of information and creating a component for each product scpecification is a bad idea, so aem provides a facility of creating a multifield for the same same.",
      },

      {
        type: "paragraph",
        text:
          "Multifields allow authors to input a dynamic, flexible number of values in a single field. This is ideal for situations where the number of items is not fixed or known in advance. To create the multifield, follow the following steps.",
      },

      {
        type: "bulletList",
        items: [
          "Create a node called multifield with sling:resourceType = granite/ui/components/coral/foundation/form/multifield. Within multifield, create a node called field. The names must be same, the property name of field is important. Here we have named it as products.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/tabs-and-multifields/multifield.webp",
        alt: "multifield",
      },

      {
        type: "bulletList",
        items: [
          "Here you can find the properties to be added in multifield and field nodes.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/tabs-and-multifields/multifieldproperties.webp",
        alt: "multifieldproperties",
      },

      {
        type: "image",
        src: "/images/blogs/sites/tabs-and-multifields/fieldproperties.webp",
        alt: "fieldproperties",
      },

      {
        type: "bulletList",
        items: [
          "Now create the productListNames, productListDescription and productListPrice as created for tabone. Ensure tehre are no duplicate names for any two widgets.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/tabs-and-multifields/productListName.webp",
        alt: "productListName",
      },

      {
        type: "image",
        src: "/images/blogs/sites/tabs-and-multifields/productListDescription.webp",
        alt: "productListDescription",
      },

      {
        type: "image",
        src: "/images/blogs/sites/tabs-and-multifields/productListPrice.webp",
        alt: "productListPrice",
      },

      {
        type: "bulletList",
        items: [
          "After creating the component, drag and drop it on a page, here we have added it on Test page. The dialog box of the component hence created will look like this.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/tabs-and-multifields/authimageOne.webp",
        alt: "authimageOne",
      },

      {
        type: "image",
        src: "/images/blogs/sites/tabs-and-multifields/authimageTwo.webp",
        alt: "authimageTwo",
      },

      {
        type: "heading",
        level: 3,
        text: "Sling Model",
      },

      {
        type: "paragraph",
        text:
          "Having authored values, we need to retrieve the values from backend. For this we need to create the sling model",
      },

      {
        type: "code",
        language: "java",
        code: `package com.local.core.models;

import com.adobe.xmp.schema.service.StandardRelaxNGProvider;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.local.core.pojo.Products;
import org.apache.commons.math.analysis.solvers.BrentSolver;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.Self;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.inject.Inject;
import javax.inject.Named;
import java.util.List;

@Model(adaptables = SlingHttpServletRequest.class)
public class TabAndMultifieldModel {

    @Self
    SlingHttpServletRequest request;

    @Inject
    @Via("resource")
    @Named("productName")
    @Required
    String product;

    @Inject
    @Via("resource")
    @Required
    String productDescription;

    @Inject
    @Via("resource")
    @Optional
    @Default(values = "1")
    String productPrice;

    @Inject
    @Via("resource")
    @Optional
    private List<Products> products;

    String info;

    @PostConstruct
    protected void init() {
        info = product + " || " + productDescription;
        ResourceResolver resolver = request.getResourceResolver();
        try{

            PageManager pageManager = resolver.adaptTo(PageManager.class);
            if(pageManager != null){
                Page currentPage = pageManager.getContainingPage(request.getResource());
                info = currentPage.getTitle() + " :: " + info;
            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public String getInfo() {
        return info;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public String getProductPrice() {
        return productPrice;
    }

    public String getProduct() {
        return product;
    }
    public List<Products> getProducts() {
        return products;
    }
}`,
      },

      {
        type: "bulletList",
        items: [
          "Here we have added SlingHttpServletRequest as adaptables, this is to recieve those objects which cannot be recieved directly from Resource.",
          "@Inject is used to map the values for tabs and multifield exclusively.",
          "@Via is here used to map the field through resource.",
          "Here we have not added defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL, rather have added annotations @Required and @Optional here.",
          "@Named is used to map the field name to a substitue name referred in the backend.",
          "To add the multifield, we need to create a pojo class annoted with model, having field names same as that of the name property and applied @Inject to it.",
          "Here the list of pojo needs to be named with that of the field name and here in our case it is products.",
        ],
      },

      {
        type: "code",
        language: "java",
        code: `package com.local.core.pojo;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import javax.inject.Inject;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class Products {
    @Inject
    String productListName;
    @Inject
    String productListDescription;
    @Inject
    String productListPrice;

    public String getProductListName() {
        return productListName;
    }

    public String getProductListDescription() {
        return productListDescription;
    }

    public String getProductListPrice() {
        return productListPrice;
    }
}`,
      },

      {
        type: "bulletList",
        items: [
          "Here info string provides the collective values hence retrieved and processed from a method annoted with @PostConstruct, which gets called only after all the authoring is complete.",
          "The values is hence recieved from Slightly using the following snippet in the .html file.",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/tabs-and-multifields/htl.webp",
        alt: "htl",
      },

      {
        type: "bulletList",
        items: [
          "The final output looks like this:",
        ],
      },

      {
        type: "image",
        src: "/images/blogs/sites/tabs-and-multifields/output.webp",
        alt: "output",
      },

      {
        type: "heading",
        level: 3,
        text: "Conclusion",
      },

      {
        type: "paragraph",
        text:
          "We have created a component having multifield and tabs. Also we have learnt some more annotaions, the role of pojo and how exactlymultifield and tabs are rendered.",
      },

      {
        type: "paragraph",
        text:
          "I hope you enjoyed the learing and have found the blog informative.",
      },
    ],
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
    slug: "blockoption-universal-editor-eds-eds",
    title: "Block Option in Edge Delivery Service",
    category: "AEM EDS",
    date: "",
    author: "Shruti Kawadkar",
    description:
      "Explore block options in EDS to customize block behavior, variations, and content presentation.",
    content: [
      {
        type: "paragraph",
        text:
          "Picture this. You've just shipped a nice \"Promo\" block for your EDS site: an image next to some text and a button. Marketing loves it. Two weeks later someone messages you: \"Love it! Can we get one where the image is on the right instead?\" Then a week later: \"Actually, can the image be a full-width background too?\"",
      },

      {
        type: "paragraph",
        text:
          "You've got three choices here. Build three separate blocks and maintain three near-identical copies forever. Hard-code a compromise nobody's happy with. Or, the good option, give the same block a dropdown and let the author pick the flavor.",
      },

      {
        type: "paragraph",
        text:
          "That third option is called a Block Option, and once you see how it's wired up under the hood, you'll want to use it everywhere.",
      },

      {
        type: "heading",
        level: 2,
        text: "What is a Block Option?",
      },

      {
        type: "paragraph",
        text:
          "A Block Option lets a content author pick a variation of a block right inside Universal Editor, instead of a developer building a separate block for every variation. Instead of three blocks like this:",
      },

      {
        type: "bulletList",
        items: [
          "Promo Showcase Left",
          "Promo Showcase Right",
          "Promo Showcase Full",
        ],
      },

      {
        type: "paragraph",
        text:
          "we build one block called Promo Showcase, and give it a single dropdown that behaves like a costume rack:",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "Layout Style",
            text: "Image Left, Image Right, or Image Full",
          },
        ],
      },

      {
        type: "paragraph",
        text:
          "Same fields, same JS file, same CSS file. The author just picks which \"costume\" the block wears on any given page.",
      },

      {
        type: "heading",
        level: 2,
        text: "The Property That Makes It All Work: name: \"classes\"",
      },

      {
        type: "paragraph",
        text:
          "This is the one detail that's easy to miss, and it's the whole reason any of this works. In your block's model JSON, if you name a field exactly classes, AEM treats it as a reserved, protected field name. It's not just another piece of authored data. The value the author picks gets automatically stamped onto the block's outer <div> as a live CSS class.",
      },

      {
        type: "paragraph",
        text:
          "Rename that same field to something else, say layoutStyle, and the magic disappears completely. It becomes an inert value that nobody reads, and it will not turn into a class on its own. The literal string classes is the entire spell. Here's what that field looks like in the block model:",
      },

      {
        type: "image",
        src: "images/blogs/eds/blockoption-universal-editor-eds/block_option_eds_name_property.webp",
        alt: "promo-showcase.json model with the classes field",
        style: {
          maxWidth: "300px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 2,
        text: "How the Final Class List Actually Gets Built",
      },

      {
        type: "paragraph",
        text:
          "This is the part most blog posts skip, and it's exactly where people get confused the first time. The class you see on a block in the browser isn't added by one single thing. It's assembled in three separate stages, each one adding its own piece, in this order:",
      },

      {
        type: "heading",
        level: 3,
        text: "Stage 1: EDS adds the default classes automatically",
      },

      {
        type: "paragraph",
        text:
          "The moment a block loads, EDS's own block-loading script runs a decoration step on every block on the page. This step doesn't know or care what your block does. It always adds two things automatically: the generic block class, and the block's own name as a class (lowercased, with spaces turned into hyphens, so \"Promo Showcase\" becomes promo-showcase). At this point, before any authoring choice is even considered, the element already looks like this:",
      },

      {
        type: "code",
        code: '<div class="block promo-showcase">',
      },

      {
        type: "heading",
        level: 3,
        text: "Stage 2: The classes field adds the author's pick",
      },

      {
        type: "paragraph",
        text:
          "This is where our reserved field steps in. Because we named it classes, whatever the author selected in the Layout Style dropdown, say \"Image Right\", which maps to the value image-right, gets appended onto that same class list, right alongside the two classes EDS already added. Nothing gets overwritten; it's purely additive:",
      },

      {
        type: "code",
        code: '<div class="block promo-showcase image-right">',
      },

      {
        type: "heading",
        level: 3,
        text: "Stage 3: Your own JavaScript can add more classes at runtime",
      },

      {
        type: "paragraph",
        text:
          "This stage is optional and has nothing to do with authoring at all. Inside your block's JS file, you're free to add extra classes based on behavior, for example adding a .zoom class only while the user is hovering over the CTA button. These classes are never picked by the author and never live in the JSON model. They exist purely to support interactive states, and they come and go as the user interacts with the page.",
      },

      {
        type: "paragraph",
        text:
          "Put together, one class list can end up carrying classes from all three sources at once, and each one is doing a completely different job:",
      },

      {
        type: "bulletList",
        items: [
          {
            title: "Stage 1",
            text: "EDS auto-adds block and promo-showcase",
          },
          {
            title: "Stage 2",
            text:
              "The classes field adds image-right (from the author's dropdown pick)",
          },
          {
            title: "Stage 3 (optional)",
            text: "Your block's JS adds behavior classes like .zoom at runtime",
          },
          {
            title: "Result",
            text: "CSS reads whichever of these classes are present and renders accordingly",
          },
        ],
      },

      {
        type: "paragraph",
        text:
          "Once you can see those three stages separately, the whole feature stops feeling like magic. Nothing \"moves\" the image on its own. It's just three different mechanisms quietly contributing to the same class list, and your CSS selectors reacting to whichever classes happen to be there.",
      },

      {
        type: "heading",
        level: 2,
        text: "See It in Action",
      },

      {
        type: "paragraph",
        text:
          "Here is the exact same Promo Showcase content rendered with each Layout Style. Only the class changes between them. First, Layout Style set to Image Left (class image-left):",
      },

      {
        type: "image",
        src: "images/blogs/eds/blockoption-universal-editor-eds/block_option_eds_left_image.webp",
        alt: "Promo Showcase with Layout Style set to Image Left",
        style: {
          maxWidth: "500px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text: "Image Right (class image-right):",
      },

      {
        type: "image",
        src: "images/blogs/eds/blockoption-universal-editor-eds/block_option_eds_right_image.webp",
        alt: "Promo Showcase with Layout Style set to Image Right",
        style: {
          maxWidth: "500px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text: "Image Full (class image-full):",
      },

      {
        type: "image",
        src: "images/blogs/eds/blockoption-universal-editor-eds/block_option_eds_full_image.webp",
        alt: "Promo Showcase with Layout Style set to Image Full",
        style: {
          maxWidth: "500px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "Notice the Content, CTA, and Image never changed. Only the class name did, and that alone was enough to completely rebuild the layout.",
      },

      {
        type: "heading",
        level: 2,
        text: "CSS Does the Actual Heavy Lifting",
      },

      {
        type: "paragraph",
        text:
          "Once that class exists, there's nothing special about the CSS. It's exactly as ordinary as CSS gets:",
      },

      {
        type: "image",
        src: "images/blogs/eds/blockoption-universal-editor-eds/block_option_eds_css.webp",
        alt: "promo-showcase.css rules for image-right and image-full",
        style: {
          maxWidth: "300px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "No conditionals, no JavaScript deciding where things go. The class is the switch, and CSS selectors are the wiring.",
      },

      {
        type: "heading",
        level: 2,
        text: "What About JavaScript?",
      },

      {
        type: "paragraph",
        text: "Here's the real decorate() function running behind this block:",
      },

      {
        type: "image",
        src: "images/blogs/eds/blockoption-universal-editor-eds/block_option_eds_js.webp",
        alt: "decorate() function in promo-showcase.js",
        style: {
          maxWidth: "500px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "Read through it and you'll notice something: it never once looks at block.classList, and never checks which Layout Style was selected. All it does is take the authored rows (Image, Content, CTA) and wrap them into .promo-showcase-image and .promo-showcase-content containers, then remove the original rows. That's the entire job.",
      },

      {
        type: "paragraph",
        text:
          "This is exactly what Stage 2 and Stage 3 working together should feel like in the best case: the class from the classes field is already sitting on the block by the time this function runs, CSS has already claimed full responsibility for the visual differences, and the JavaScript stays completely layout-agnostic. It runs identically whether Layout Style is set to Image Left, Image Right, or Image Full, because it genuinely doesn't need to know or care. That's not a missing feature; for a purely visual option like this one, it's the correct amount of JavaScript to write.",
      },

      {
        type: "heading",
        level: 2,
        text: "Proof It's Real: the Rendered HTML",
      },

      {
        type: "paragraph",
        text:
          "Everything above is a nice theory until you open DevTools and see it happen. This is the moment the whole chain (dropdown, classes field, assembled class list, CSS) becomes undeniable:",
      },

      {
        type: "image",
        src: "images/blogs/eds/blockoption-universal-editor-eds/block_option_eds_devtools_code.webp",
        alt: "DevTools showing class=\"block promo-showcase image-right\"",
        style: {
          maxWidth: "650px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "That one class, sitting quietly in the inspector next to block and promo-showcase, is the entire payoff of everything explained above.",
      },

      {
        type: "heading",
        level: 2,
        text: "select vs. multiselect",
      },

      {
        type: "paragraph",
        text:
          "Adobe's Block Options also support a multiselect component, letting authors combine multiple options at once. This is handy for independent toggles like \"large\" or \"highlighted.\" But layouts like ours aren't independent: an image can't sensibly be on the left and the right at the same time. Mixing those would just hand your authors a way to break the design.",
      },

      {
        type: "paragraph",
        text:
          "Rule of thumb: reach for select when options compete with each other, and save multiselect for options that happily coexist.",
      },

      {
        type: "heading",
        level: 2,
        text: "Wrapping Up",
      },

      {
        type: "paragraph",
        text:
          "Block Options aren't a separate feature bolted onto EDS. They're a naming convention with real consequences. Name a field classes, and you've plugged the author's choice into a class list that EDS was already building for you, right alongside its own default classes and anything your JS adds later.",
      },

      {
        type: "paragraph",
        text:
          "Next time you catch yourself about to duplicate a block just to tweak its layout, pause and ask: could this just be a class? Nine times out of ten, the answer is yes, and your authors get one clean dropdown instead of a shelf full of near-identical blocks to choose from.",
      },

      {
        type: "paragraph",
        variant: "closing",
        text: "Thanks for reading 😄",
      },
    ],
  },
  {
    slug: "block-creation-eds",
    title: "Block Creation in Edge Delivery Service",
    category: "AEM EDS",
    date: "2024-12-15",
    author: "Owais Pathan",
    description:
      "Learn to create custom, reusable blocks in EDS using JavaScript, CSS, and structured content.",
    content: [
      {
        type: "paragraph",
        text: "Happy to find you here. Welcome to another learning.",
      },

      {
        type: "heading",
        level: 2,
        text: "What is a Block?",
      },

      {
        type: "paragraph",
        text:
          "A block is a modular, reusable unit of content or functionality that is designed to streamline content delivery and personalization at the edge. Blocks are the building blocks for rendering web pages or delivering experiences directly at the edge, enabling faster delivery and reduced latency by leveraging edge computing principles.",
      },

      {
        type: "paragraph",
        text:
          "For the sake of this blog, we will create a cards block which will display multiple cards on the page.",
      },

      {
        type: "heading",
        level: 2,
        text: "Steps to Create a Block",
      },

      {
        type: "paragraph",
        text:
          "To create a block, we add a table in the document and then add the content in it. Let us understand this with an example. Suppose we need to create a multiple cards section which looks something like the image below.",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-in-documentbase-Eds/Block-Cards.webp",
        alt: "Final cards block layout",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text: "To create the above block, we will follow the steps below.",
      },

      {
        type: "heading",
        level: 3,
        text: "Step 1: Create the table in the document",
      },

      {
        type: "paragraph",
        text:
          "First of all, we need to create a table in the document where we want to add the block, in the manner shown below.",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-in-documentbase-Eds/Cards-Table.webp",
        alt: "Cards table in the document",
        style: {
          maxWidth: "350px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "In this table we give the title of the block in the first row, and then the image and description in the rows below. After creating this, when we preview the page we get the DOM that is created out of the box, as shown in the image below.",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-in-documentbase-Eds/Out-of-the-box-dom.webp",
        alt: "Out-of-the-box DOM generated for the block",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 2: Create the block folder",
      },

      {
        type: "paragraph",
        text:
          "Now we need to rewrite this DOM structure using JavaScript and add CSS to make it look presentable. In the repository we have a folder called blocks. Inside it we need to create a folder named after the block, which is the name we gave in the first row of the table.",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-in-documentbase-Eds/github-code.webp",
        alt: "cards folder inside the blocks folder in GitHub",
        style: {
          maxWidth: "220px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 3: Create the JS and CSS files",
      },

      {
        type: "paragraph",
        text:
          "Inside this folder we create two files, one JS and one CSS. For this blog the names are cards.js and cards.css.",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-in-documentbase-Eds/cards-files.webp",
        alt: "cards.js and cards.css files inside the cards folder",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 4: Add the logic in cards.js",
      },

      {
        type: "paragraph",
        text:
          "Inside cards.js we add the logic below to make the block presentable. You can modify it as per your needs and project requirements.",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-in-documentbase-Eds/jscode.webp",
        alt: "JavaScript code in cards.js",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 3,
        text: "Step 5: Add the styles in cards.css",
      },

      {
        type: "paragraph",
        text: "Inside cards.css we add the styles below.",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-in-documentbase-Eds/card-css.webp",
        alt: "CSS code in cards.css",
        style: {
          maxWidth: "450px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "After adding all the CSS and JS code, the block renders as shown below. These are the 5 steps in which you can create a block and publish it on the page.",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-in-documentbase-Eds/final-card-look.webp",
        alt: "Final rendered cards block",
        style: {
          maxWidth: "450px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 2,
        text: "Separating Sections",
      },

      {
        type: "paragraph",
        text:
          "Whenever you create a block or write anything in the document, it comes under a section tag. If you want your next content to come under a different section, you need to separate the sections. Here is how.",
      },

      {
        type: "paragraph",
        text:
          "If you add any content to the page, this is how it comes under a section.",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-in-documentbase-Eds/section-image.webp",
        alt: "Content placed under a single section",
        style: {
          maxWidth: "450px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text:
          "To separate the sections, use a hyphen (\"-\") three times or a horizontal line, as shown in the image below.",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-in-documentbase-Eds/added-seperation.webp",
        alt: "Section separator added to the document",
        style: {
          maxWidth: "450px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text: "After adding the separator, this is how the sections get separated.",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-in-documentbase-Eds/seperated-sections.webp",
        alt: "Content split into separate sections",
        style: {
          maxWidth: "450px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "heading",
        level: 2,
        text: "How to Add Custom CSS to a Particular Section",
      },

      {
        type: "paragraph",
        text:
          "Suppose you have two sections as shown below and you want to apply a CSS class to each section, or add an attribute to a section. For that, create a table with the title Section Metadata. For a style, add style in the first column and its classes in the second. For an attribute, put the attribute name in the first column and the attribute value in the second, as shown below.",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-in-documentbase-Eds/Adding-CSS-in-section.webp",
        alt: "Section Metadata table with style and attribute rows",
        style: {
          maxWidth: "450px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text: "This is how it gets added to the section, as shown below.",
      },

      {
        type: "image",
        src: "images/blogs/eds/block-in-documentbase-Eds/Added-CSS-and-attribute.webp",
        alt: "CSS class and attribute applied to the section",
        style: {
          maxWidth: "550px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },

      {
        type: "paragraph",
        text: "Now your block is ready and you can preview it on the page.",
      },

      {
        type: "paragraph",
        variant: "closing",
        text: "Thanks for reading 😄",
      },
    ],
  },


];
