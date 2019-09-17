(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{458:function(e,t,a){"use strict";a.r(t);var i=a(15),s=Object(i.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"rest-apis-without-code-changes-required"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rest-apis-without-code-changes-required","aria-hidden":"true"}},[e._v("#")]),e._v(" REST APIs without code changes required")]),e._v(" "),a("p",[e._v("As a user of Zowe API Mediation Layer, onboard a REST API service with the Zowe API Mediation Layer without changing the code of the API service. The following procedure is an overview of steps to onboard an API service through the API Gateway in the API Mediation Layer.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#identify-the-api-that-you-want-to-expose"}},[e._v("Identify the API that you want to expose")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#route-your-api"}},[e._v("Route your API")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#define-your-service-and-api-in-yaml-format"}},[e._v("Define your service and API in YAML format")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#configuration-parameters"}},[e._v("Configuration parameters")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#add-and-validate-the-definition-in-the-api-mediation-layer-running-on-your-machine"}},[e._v("Add and validate the definition in the API Mediation Layer running on your machine")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#add-a-definition-in-the-api-mediation-layer-in-the-zowe-runtime"}},[e._v("Add a definition in the API Mediation Layer in the Zowe runtime")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#optional-check-the-log-of-the-api-mediation-layer"}},[e._v("(Optional) Check the log of the API Mediation Layer")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#optional-reload-the-services-definition-after-the-update-when-the-api-mediation-layer-is-already-started"}},[e._v("(Optional) Reload the services definition after the update when the API Mediation Layer is already started")])])]),e._v(" "),a("h2",{attrs:{id:"identify-the-api-that-you-want-to-expose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#identify-the-api-that-you-want-to-expose","aria-hidden":"true"}},[e._v("#")]),e._v(" Identify the API that you want to expose")]),e._v(" "),a("p",[e._v("Onboard an API service through the API Gateway without making code changes.")]),e._v(" "),a("p",[a("strong",[e._v("Tip:")]),e._v(" For more information about the structure of APIs and which APIs to expose in the Zowe API Mediation Layer, see "),a("router-link",{attrs:{to:"/extend/extend-apiml/api-mediation-onboard-overview.html"}},[e._v("Onboarding Overview")]),e._v(".")],1),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Identify the following parameters of your API service:")]),e._v(" "),a("ul",[a("li",[e._v("Hostname")]),e._v(" "),a("li",[e._v("Port")]),e._v(" "),a("li",[e._v("(Optional) base path where the service is available.\nThis URL is called base URL of the service.")])]),e._v(" "),a("p",[a("strong",[e._v("Example:")])]),e._v(" "),a("p",[e._v("In the sample service described earlier, the URL of the service is: "),a("code",[e._v("http://localhost:8080")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Identify all APIs that this service provides that you want to expose through the API Gateway.")]),e._v(" "),a("p",[a("strong",[e._v("Example:")])]),e._v(" "),a("p",[e._v("In the sample service, this REST API is the one available at the path "),a("code",[e._v("/v2")]),e._v(" relative to base URL of the service. This API is version     2 of the Pet Store API.")])]),e._v(" "),a("li",[a("p",[e._v("Choose the "),a("em",[e._v("service ID")]),e._v(" of your service. The "),a("em",[e._v("service ID")]),e._v(" identifies the service in the API Gateway. The service ID is an alphanumeric string in lowercase ASCII.")]),e._v(" "),a("p",[a("strong",[e._v("Example:")])]),e._v(" "),a("p",[e._v("In the sample service, the "),a("em",[e._v("service ID")]),e._v(" is "),a("code",[e._v("petstore")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Decide which URL to use to make this API available in the API Gateway. This URL is refered to as the gateway URL and is composed of the API type and the major version.")]),e._v(" "),a("p",[a("strong",[e._v("Example:")])]),e._v(" "),a("p",[e._v("In the sample service, we provide a REST API. The first segment is "),a("code",[e._v("/api")]),e._v(". To indicate that this is version 2, the second segment is "),a("code",[e._v("/v2")]),e._v(".")])])]),e._v(" "),a("h3",{attrs:{id:"route-your-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#route-your-api","aria-hidden":"true"}},[e._v("#")]),e._v(" Route your API")]),e._v(" "),a("p",[e._v("After you identify the APIs you want to expose, define the "),a("em",[e._v("routing")]),e._v(" of your API. Routing is the process of sending requests from the API gateway to a specific API service. Route your API by using the same format as in the following "),a("code",[e._v("petstore")]),e._v(" example.")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" The API Gateway differentiates major versions of an API.")]),e._v(" "),a("p",[a("strong",[e._v("Example:")])]),e._v(" "),a("p",[e._v("To access version 2 of the "),a("code",[e._v("petstore")]),e._v(" API use the following gateway URL:")]),e._v(" "),a("p",[a("code",[e._v("https://gateway-host:port/api/v2/petstore")])]),e._v(" "),a("p",[e._v("The base URL of the version 2 of the "),a("code",[e._v("petstore")]),e._v(" API is:")]),e._v(" "),a("p",[a("code",[e._v("http://localhost:8080/v2")])]),e._v(" "),a("p",[e._v("The API Gateway routes REST API requests from the gateway URL "),a("code",[e._v("https://gateway:port/api/v2/petstore")]),e._v(" to the service "),a("code",[e._v("http://localhost:8080/v2")]),e._v(". This method provides access to the service in the API Gateway through the gateway URL.")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" This method enables you to access the service through a stable URL and move the service to another machine without changing the gateway URL. Accessing a service through the API Gateway also enables you to have multiple instances of the service running on different machines to achieve high-availability.")]),e._v(" "),a("h2",{attrs:{id:"define-your-service-and-api-in-yaml-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#define-your-service-and-api-in-yaml-format","aria-hidden":"true"}},[e._v("#")]),e._v(" Define your service and API in YAML format")]),e._v(" "),a("p",[e._v("Define your service and API in YAML format in the same way as presented in the following sample "),a("code",[e._v("petstore")]),e._v(" service example.")]),e._v(" "),a("p",[a("strong",[e._v("Example:")])]),e._v(" "),a("p",[e._v("To define your service in YAML format, provide the following definition in a YAML file as in the following sample "),a("code",[e._v("petstore")]),e._v(" service:")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("serviceId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" petstore\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("catalogUiTileId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" static\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Petstore Sample Service  \n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" This is a sample server Petstore service\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("instanceBaseUrls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8080")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("routes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("gatewayUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" api/v2\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("serviceRelativeUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" /v2\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" io.swagger.petstore\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("gatewayUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" api/v2\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("swaggerUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("8080/v2/swagger.json\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("documentationUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//petstore.swagger.io/\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 2.0.0\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("catalogUiTiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("static")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Static API services\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Services which demonstrate how to make an API service discoverable in the APIML ecosystem using YAML definitions\n")])])]),a("p",[e._v("In this example, a suitable name for the file is "),a("code",[e._v("petstore.yml")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Notes:")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The filename does not need to follow specific naming conventions but it requires the "),a("code",[e._v(".yml")]),e._v(" extension.")])]),e._v(" "),a("li",[a("p",[e._v("The file can contain one or more services defined under the "),a("code",[e._v("services:")]),e._v(" node.")])]),e._v(" "),a("li",[a("p",[e._v("Each service has a service ID. In this example, the service ID is "),a("code",[e._v("petstore")]),e._v(". The service can have one or more instances. In this case, only one instance "),a("code",[e._v("http://localhost:8080")]),e._v(" is used.")])]),e._v(" "),a("li",[a("p",[e._v("A service can provide multiple APIs that are routed by the API Gateway. In this case, requests with the relative base path "),a("code",[e._v("api/v2")]),e._v(" at the API Gateway (full gateway URL: "),a("code",[e._v("https://gateway:port/api/v2/...")]),e._v(") are routed to the relative base path "),a("code",[e._v("/v2")]),e._v(" at the full URL of the service ("),a("code",[e._v("http://localhost:8080/v2/...")]),e._v(").")])])]),e._v(" "),a("p",[a("strong",[e._v("Tips:")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("There are more examples of API definitions at this "),a("a",{attrs:{href:"https://github.com/zowe/api-layer/tree/master/config/local/api-defs",target:"_blank",rel:"noopener noreferrer"}},[e._v("link"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("For more details about how to use YAML format, see this "),a("a",{attrs:{href:"https://learnxinyminutes.com/docs/yaml/",target:"_blank",rel:"noopener noreferrer"}},[e._v("link"),a("OutboundLink")],1)])])]),e._v(" "),a("h2",{attrs:{id:"configuration-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-parameters","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration parameters")]),e._v(" "),a("p",[e._v("The following list describes the configuration parameters:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("serviceId")])]),e._v(" "),a("p",[e._v("Specifies the service instance identifier that is registered in the API Mediation Layer installation.\nThe service ID is used in the URL for routing to the API service through the gateway.\nThe service ID uniquely identifies the service in the API Mediation Layer.\nThe system administrator at the customer site defines this parameter.")]),e._v(" "),a("p",[a("strong",[e._v("Important!")]),e._v("  Ensure that the service ID is set properly with the following considerations:")]),e._v(" "),a("ul",[a("li",[e._v("When two API services use the same service ID, the API gateway considers the services to be clones (two instances for the same service). An incoming API request can be routed to either of them.")]),e._v(" "),a("li",[e._v("The same service ID should be set only for multiple API service instances for API scalability.")]),e._v(" "),a("li",[e._v("The service ID value must contain only lowercase alphanumeric characters.")]),e._v(" "),a("li",[e._v("The service ID cannot contain more than 40 characters.")]),e._v(" "),a("li",[e._v("The service ID is linked to security resources. Changes to the service ID require an update of security resources.")])]),e._v(" "),a("p",[a("strong",[e._v("Examples:")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If the customer system administrator sets the service ID to "),a("code",[e._v("sysviewlpr1")]),e._v(",\nthe API URL in the API Gateway appears as the following URL:")]),e._v(" "),a("p",[a("code",[e._v("https://gateway:port/api/v1/sysviewlpr1/...")])])]),e._v(" "),a("li",[a("p",[e._v("If customer system administrator sets the service ID to "),a("code",[e._v("vantageprod1")]),e._v(",\nthe API URL in the API Gateway appears as the following URL:")]),e._v(" "),a("p",[e._v("http://gateway:port/api/v1/vantageprod1/...")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("title")])]),e._v(" "),a("p",[e._v('Specifies the human readable name of the API service instance (for example, "Endevor Prod" or "Sysview LPAR1"). This value is displayed in the API catalog when a specific API service instance is selected. This parameter is externalized and set by the customer system administrator.')]),e._v(" "),a("p",[a("strong",[e._v("Tip:")]),e._v(" We recommend that you provide a specific default value of the "),a("code",[e._v("title")]),e._v(".\nUse a title that describes the service instance so that the end user knows the specific purpose of the service instance.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("description")])]),e._v(" "),a("p",[e._v("Specifies a short description of the API service.")]),e._v(" "),a("p",[a("strong",[e._v("Example:")]),e._v(' "CA Endevor SCM - Production Instance" or "CA SYSVIEW running on LPAR1".')]),e._v(" "),a("p",[e._v("This value is displayed in the API Catalog when a specific API service instance is selected. This parameter is externalized and set by the customer system administrator.")]),e._v(" "),a("p",[a("strong",[e._v("Tip:")]),e._v(" Describe the service so that the end user knows the function of the service.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("instanceBaseUrls")])]),e._v(" "),a("p",[e._v("Specifies a list of base URLs to your service to the REST resource. It will be the prefix for the following URLs:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("homePageRelativeUrl")])]),e._v(" "),a("li",[a("strong",[e._v("statusPageRelativeUrl")])]),e._v(" "),a("li",[a("strong",[e._v("healthCheckRelativeUrl")])])]),e._v(" "),a("p",[a("strong",[e._v("Examples:")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("- http://host:port/filemasterplus")]),e._v(" for an HTTP service")]),e._v(" "),a("li",[a("code",[e._v("- https://host:port/endevor")]),e._v(" for an HTTPS service")])]),e._v(" "),a("p",[e._v("You can provide one URL if your service has one instance. If your service provides multiple instances for the high-availability then you can provide URLs to these instances.")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//host1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("port1/endevor\n  https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//host2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("port2/endevor\n")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("homePageRelativeUrl")])]),e._v(" "),a("p",[e._v("Specifies the relative path to the homepage of your service. The path should start with "),a("code",[e._v("/")]),e._v(".\nIf your service has no homepage, omit this parameter.")]),e._v(" "),a("p",[a("strong",[e._v("Examples:")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("homePageRelativeUrl: /")]),e._v(" The service has homepage with URL "),a("code",[e._v("${baseUrl}/")])]),e._v(" "),a("li",[a("code",[e._v("homePageRelativeUrl: /ui/")]),e._v(" The service has homepage with URL "),a("code",[e._v("${baseUrl}/ui/")])]),e._v(" "),a("li",[a("code",[e._v("homePageRelativeUrl:")]),e._v(" The service has homepage with URL "),a("code",[e._v("${baseUrl}")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("statusPageRelativeUrl")])]),e._v(" "),a("p",[e._v("Specifies the relative path to the status page of your service.\nStart this path with "),a("code",[e._v("/")]),e._v(". If you service has not a status page, omit this parameter.")]),e._v(" "),a("p",[a("strong",[e._v("Example:")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("statusPageRelativeUrl: /application/info")]),e._v(" the result URL will be "),a("code",[e._v("${baseUrl}/application/info")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("healthCheckRelativeUrl")])]),e._v(" "),a("p",[e._v("Specifies the relative path to the health check endpoint of your service.\nStart this URL with "),a("code",[e._v("/")]),e._v(". If your service does not have a health check endpoint, omit this parameter.")]),e._v(" "),a("p",[a("strong",[e._v("Example:")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("healthCheckRelativeUrl: /application/health")]),e._v(". This results in the URL:\n"),a("code",[e._v("${baseUrl}/application/health")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("routes")])]),e._v(" "),a("p",[e._v("The routing rules between the gateway service and your service.")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("routes.gatewayUrl")])]),e._v(" "),a("p",[e._v("Both "),a("em",[e._v("gatewayUrl")]),e._v(" and "),a("em",[e._v("serviceUrl")]),e._v(" parameters specify how the API service endpoints are mapped to the API\ngateway endpoints. The "),a("em",[e._v("gatewayUrl")]),e._v(" parameter sets the target endpoint on the gateway.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("routes.serviceUrl")])]),e._v(" "),a("p",[e._v("Both "),a("em",[e._v("gatewayUrl")]),e._v(" and "),a("em",[e._v("serviceUrl")]),e._v(" parameters specify how the API service endpoints are mapped to the API\ngateway endpoints. The "),a("em",[e._v("serviceUrl")]),e._v(" parameter points to the target endpoint on the gateway.")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("apiInfo")])]),e._v(" "),a("p",[e._v("This section defines APIs that are provided by the service. Currently, only one API is supported.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("apiInfo.apiId")])]),e._v(" "),a("p",[e._v("Specifies the API identifier that is registered in the API Mediation Layer installation.\nThe API ID uniquely identifies the API in the API Mediation Layer.\nThe same API can be provided by multiple services. The API ID can be used\nto locate the same APIs that are provided by different services.\nThe creator of the API defines this ID.\nThe API ID needs to be a string of up to 64 characters\nthat uses lowercase alphanumeric characters and a dot: "),a("code",[e._v(".")]),e._v(".\nWe recommend that you use your organization as the prefix.")]),e._v(" "),a("p",[a("strong",[e._v("Examples:")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("org.zowe.file")])]),e._v(" "),a("li",[a("code",[e._v("com.ca.sysview")])]),e._v(" "),a("li",[a("code",[e._v("com.ibm.zosmf")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("apiInfo.gatewayUrl")])]),e._v(" "),a("p",[e._v("The base path at the API gateway where the API is available. Ensure that this path is\nthe same as the "),a("em",[e._v("gatewayUrl")]),e._v(" value in the "),a("em",[e._v("routes")]),e._v(" sections.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("apiInfo.swaggerUrl")])]),e._v(" "),a("p",[e._v("(Optional) Specifies the HTTP or HTTPS address where the Swagger JSON document is available.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("apiInfo.documentationUrl")])]),e._v(" "),a("p",[e._v("(Optional) Specifies a URL to a website where external documentation is provided.\nThis can be used when "),a("em",[e._v("swaggerUrl")]),e._v(" is not provided.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("apiInfo.version")])]),e._v(" "),a("p",[e._v("(Optional) Specifies the actual version of the API in "),a("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("semantic versioning"),a("OutboundLink")],1),e._v(" format. This can be used when "),a("em",[e._v("swaggerUrl")]),e._v(" is not provided.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("catalogUiTileId")])]),e._v(" "),a("p",[e._v('Specifies the unique identifier for the API services group.\nThis is the grouping value used by the API Mediation Layer to group multiple API services\ntogether into "tiles".\nEach unique identifier represents a single API Catalog UI dashboard tile.\nSpecify the value based on the ID of the defined tile.')])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("catalogUiTile")])]),e._v(" "),a("p",[e._v("This section contains definitions of tiles. Each tile is defined in a section that has its tile ID as a key.\nA tile can be used by multiple services.")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("catalogUiTiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("tile1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Tile 1\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" This is the first tile with ID tile1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("tile2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Tile 2\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" This is the second tile with ID tile2\n")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("catalogUiTile.{tileId}.title")])]),e._v(" "),a("p",[e._v("Specifies the title of the API services product family. This value is displayed in the API catalog UI dashboard as the tile title.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("catalogUiTile.{tileId}.description")])]),e._v(" "),a("p",[e._v("Specifies the detailed description of the API Catalog UI dashboard tile.\nThis value is displayed in the API catalog UI dashboard as the tile description.")])])]),e._v(" "),a("h2",{attrs:{id:"add-and-validate-the-definition-in-the-api-mediation-layer-running-on-your-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-and-validate-the-definition-in-the-api-mediation-layer-running-on-your-machine","aria-hidden":"true"}},[e._v("#")]),e._v(" Add and validate the definition in the API Mediation Layer running on your machine")]),e._v(" "),a("p",[e._v("After you define the service in YAML format, you are ready to add your service definition to the API Mediation Layer ecosystem.")]),e._v(" "),a("p",[e._v("The following procedure describes how to add your service to the API Mediation Layer on your local machine.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Copy or move your YAML file to the "),a("code",[e._v("config/local/api-defs")]),e._v(" directory in the directory with API Mediation layer.")])]),e._v(" "),a("li",[a("p",[e._v("Start the API Mediation Layer services.")]),e._v(" "),a("p",[a("strong",[e._v("Tip:")]),e._v(" For more information about how to run the API Mediation Layer locally, see "),a("a",{attrs:{href:"https://github.com/zowe/api-layer/blob/master/docs/local-configuration.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Running the API Mediation Layer on Local Machine."),a("OutboundLink")],1)])]),e._v(" "),a("li",[a("p",[e._v("Run your Java application.")]),e._v(" "),a("p",[a("strong",[e._v("Tip:")]),e._v(" Wait for the services to be ready. This process may take a few minutes.")])]),e._v(" "),a("li",[a("p",[e._v("Go to the following URL to reach the API Gateway (port 10010) and see the paths that are routed by the API Gateway:")]),e._v(" "),a("p",[a("code",[e._v("https://localhost:10010/application/routes")])]),e._v(" "),a("p",[e._v("The following line should appear:")]),e._v(" "),a("p",[a("code",[e._v('/api/v2/petstore/**: "petstore"')])]),e._v(" "),a("p",[e._v("This line indicates that requests to relative gateway paths that start with "),a("code",[e._v("/api/v2/petstore/")]),e._v(" are routed to the service with the service ID "),a("code",[e._v("petstore")]),e._v(".")]),e._v(" "),a("p",[e._v("You successfully defined your Java application if your service is running and you can access the service endpoints. The following example is the service endpoint for the sample application:")]),e._v(" "),a("p",[a("code",[e._v("https://localhost:10010/api/v2/petstore/pets/1")])])])]),e._v(" "),a("h2",{attrs:{id:"add-a-definition-in-the-api-mediation-layer-in-the-zowe-runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-a-definition-in-the-api-mediation-layer-in-the-zowe-runtime","aria-hidden":"true"}},[e._v("#")]),e._v(" Add a definition in the API Mediation Layer in the Zowe runtime")]),e._v(" "),a("p",[e._v("After you define and validate the service in YAML format, you are ready to add your service definition to the API Mediation Layer running as part of the Zowe runtime installation.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Locate the Zowe runtime directory. The Zowe runtime directory is chosen during Zowe installation.\nThe location of the directory is in the "),a("code",[e._v("zowe-install.yaml")]),e._v(" file in the variable "),a("code",[e._v("install:rootDir")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" We use the "),a("code",[e._v("${zoweRuntime}")]),e._v(" symbol in following instructions.")])]),e._v(" "),a("li",[a("p",[e._v("Copy your YAML file to the "),a("code",[e._v("${zoweRuntime}/api-mediation/api-defs")]),e._v(" directory.")])]),e._v(" "),a("li",[a("p",[e._v("Run your application.")])]),e._v(" "),a("li",[a("p",[e._v("Restart Zowe runtime or follow steps in section "),a("a",{attrs:{href:"#optional-reload-the-services-definition-after-the-update-when-the-api-mediation-layer-is-already-started"}},[e._v("(Optional) Reload the services definition after the update when the API Mediation Layer is already started")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Go to the following URL to reach the API Gateway (default port 7554) and see the paths that are routed by the API Gateway: https://${zoweHostname}😒{gatewayHttpsPort}/application/routes")]),e._v(" "),a("p",[e._v("The following line should appear:")]),e._v(" "),a("p",[a("code",[e._v('/api/v2/petstore/**: "petstore"')])]),e._v(" "),a("p",[e._v("This line indicates that requests to the relative gateway paths that start with "),a("code",[e._v("/api/v2/petstore/")]),e._v(" are routed to the service with service ID "),a("code",[e._v("petstore")]),e._v(".")]),e._v(" "),a("p",[e._v("You successfully defined your Java application if your service is running and you can access its endpoints. The endpoint displayed for the sample application is: "),a("code",[e._v("https://l${zoweHostname}:${gatewayHttpsPort}/api/v2/petstore/pets/1")])])])]),e._v(" "),a("h2",{attrs:{id:"optional-check-the-log-of-the-api-mediation-layer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-check-the-log-of-the-api-mediation-layer","aria-hidden":"true"}},[e._v("#")]),e._v(" (Optional) Check the log of the API Mediation Layer")]),e._v(" "),a("p",[e._v("The API Mediation Layer prints the following messages to its log when the API definitions are processed:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Scanning directory with static services definition: config/local/api-defs\nStatic API definition file: /Users/plape03/workspace/api-layer/config/local/api-defs/petstore.yml\nAdding static instance STATIC-localhost:petstore:8080 for service ID petstore mapped to URL http://localhost:8080\n")])])]),a("h2",{attrs:{id:"optional-reload-the-services-definition-after-the-update-when-the-api-mediation-layer-is-already-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-reload-the-services-definition-after-the-update-when-the-api-mediation-layer-is-already-started","aria-hidden":"true"}},[e._v("#")]),e._v(" (Optional) Reload the services definition after the update when the API Mediation Layer is already started")]),e._v(" "),a("p",[e._v("The following procedure enables you to refresh the API definitions after you change the definitions when the API Mediation Layer is already running.")]),e._v(" "),a("p",[a("strong",[e._v("Follow these steps:")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Use a REST API client to issue a POST request to the Discovery Service (port 10011):")]),e._v(" "),a("p",[a("code",[e._v("http://localhost:10011/discovery/api/v1/staticApi")])]),e._v(" "),a("p",[e._v("The Discovery Service requires authentication by a client certificate. If the API Mediation Layer is running on your local machine, the certificate is stored at "),a("code",[e._v("keystore/localhost/localhost.pem")]),e._v(".")]),e._v(" "),a("p",[e._v("This example uses the "),a("a",{attrs:{href:"https://httpie.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTPie command-line HTTP client"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("http --cert=keystore/localhost/localhost.pem --verify=keystore/local_ca/localca.cer -j POST     https://localhost:10011/discovery/api/v1/staticApi\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Check if your updated definition is effective.")]),e._v(" "),a("p",[a("strong",[e._v("Notes:")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("It can take up to 30 seconds for the API Gateway to pick up the new routing.")])]),e._v(" "),a("li",[a("p",[e._v("The basic authentication will be replaced by client certificates when the Discovery Service is updated to use HTTPS.")])])])])])])},[],!1,null,null,null);t.default=s.exports}}]);