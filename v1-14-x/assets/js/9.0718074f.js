(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{262:function(e,t,s){e.exports=s.p+"assets/img/zowe-architecture.c42394a7.png"},263:function(e,t,s){e.exports=s.p+"assets/img/zowe-desktop.7a8aff81.png"},264:function(e,t,s){e.exports=s.p+"assets/img/api-mediationlayer.8fe48a2e.png"},265:function(e,t,s){e.exports=s.p+"assets/img/api-catalog.995e6aa0.png"},266:function(e,t,s){e.exports=s.p+"assets/img/api-discovery.9480971f.png"},267:function(e,t,s){e.exports=s.p+"assets/img/desktop-explorers.3473b599.png"},419:function(e,t,s){"use strict";s.r(t);var a=s(3),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"zowe-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zowe-architecture"}},[e._v("#")]),e._v(" Zowe architecture")]),e._v(" "),a("p",[e._v("Zowe™ is a collection of components that together form a framework that allows Z-based functionality to be accessible across an organization. This includes exposing Z-based components such as z/OSMF as Rest APIs. The framework provides an environment where other components can be included and exposed to a broader non-Z based audience.")]),e._v(" "),a("p",[e._v("The following diagram depicts the high-level Zowe architecture.")]),e._v(" "),a("img",{attrs:{src:s(262),alt:"Zowe Architecture Diagram",width:"700px"}}),e._v(" "),a("p",[e._v("The diagram shows the default port numbers that are used by Zowe.  These are dependent on each instance of Zowe and are held in the Zowe instance directory configuration file "),a("code",[e._v("instance.env")]),e._v(". For more information, see "),a("router-link",{attrs:{to:"/user-guide/configure-instance-directory.html"}},[e._v("Creating and configuring the Zowe instance directory")]),e._v(".")],1),e._v(" "),a("p",[e._v("A number of servers run under Unix System Services (USS) on z/OS.  These run under the Zowe started task "),a("code",[e._v("ZWESVSTC")]),e._v(" that has its own user ID "),a("code",[e._v("ZWESVUSR")]),e._v(" and include a number of servers each with their own address space.  The "),a("code",[e._v("ZWESVSTC")]),e._v(" started task has a "),a("code",[e._v("STDOUT")]),e._v(" file that includes log and trace information for its servers.  Sever error messages are written to "),a("code",[e._v("STDERR")]),e._v(" and for problem determination. See "),a("router-link",{attrs:{to:"/troubleshoot/troubleshooting.html"}},[e._v("Troubleshooting")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"zlux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zlux"}},[e._v("#")]),e._v(" ZLUX")]),e._v(" "),a("p",[e._v("The ZLUX Node.js server is also known as the Zowe Application Framework. It provides the Zowe desktop that you can access through a web browser via port 8544. The Zowe desktop includes a number of applications that run inside the ZLUX Zowe Application Framework including a 3270 emulator and a File Editor.")]),e._v(" "),a("img",{attrs:{src:s(263),alt:"Zowe Desktop Diagram",width:"600px"}}),e._v(" "),a("p",[e._v("The ZLUX server logs are written to "),a("code",[e._v("<INSTANCE_DIR>/logs/appServer-yyyy-mm-dd-hh-mm.log")]),e._v(".  The Zowe Application Framework provides REST APIs for its services that are included on the API catalog tile "),a("code",[e._v("Zowe Application Framework")]),e._v(" that can be viewed at "),a("code",[e._v("https://<ZOWE_HOST_IP>:7554/ui/v1/apicatalog/#/tile/ZLUX/zlux")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"zssserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zssserver"}},[e._v("#")]),e._v(" zssServer")]),e._v(" "),a("p",[e._v("The Zowe desktop delegates a number of its services to the zssServer which it accesses through the http port 8542.  The zssServer is written in metalC and has native calls to z/OS to provide its services.  The zssServer logs are written to "),a("code",[e._v("<INSTANCE_DIR>/logs/zssServer-yyyy-mm-dd-hh-mm.log")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"api-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-gateway"}},[e._v("#")]),e._v(" API Gateway")]),e._v(" "),a("p",[e._v("The API Gateway is a proxy server that routes requests from clients on its northbound edge, such as web browsers or the Zowe command line interface, to servers on its southbound edge that are able to provide data to serve the request.  It is also responsible for generating the authentication token used to provide single sign-on (SSO) functionality.  The API Gateway homepage is "),a("code",[e._v("https://<ZOWE_HOST_IP>:7554")]),e._v(", that after authentication allows you to navigate to the API Catalog.")]),e._v(" "),a("img",{attrs:{src:s(264),alt:"Zowe API Mediation Layer",width:"600px"}}),e._v(" "),a("h2",{attrs:{id:"api-catalog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-catalog"}},[e._v("#")]),e._v(" API Catalog")]),e._v(" "),a("p",[e._v("The API Catalog provides a list of the API services that have registered themselves as catalog tiles.  These allow you to view the available APIs from Zowe's southbound servers as well as test REST API calls.")]),e._v(" "),a("img",{attrs:{src:s(265),alt:"Zowe API Catalog",width:"600px"}}),e._v(" "),a("h2",{attrs:{id:"api-discovery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-discovery"}},[e._v("#")]),e._v(" API Discovery")]),e._v(" "),a("p",[e._v("The API Discovery server acts as the registration service broker between the API Gateway and its southbound servers.  It can be accessed through the URL "),a("code",[e._v("https://<ZOWE_HOST_IP>:7552")]),e._v(".  You can view a list of registered API services on the API discovery homepage.")]),e._v(" "),a("img",{attrs:{src:s(266),alt:"Zowe API Discovery",width:"600px"}}),e._v(" "),a("h2",{attrs:{id:"mvs-jes-and-uss-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mvs-jes-and-uss-ui"}},[e._v("#")]),e._v(" MVS, JES, and USS UI")]),e._v(" "),a("p",[e._v("Zowe provides a number of rich GUI web applications for working with z/OS.  This includes the MVS Explorer for data sets, the JES Explorer for jobs, and the USS Explorer for the Unix File System. You can access them through the Zowe desktop.")]),e._v(" "),a("img",{attrs:{src:s(267),alt:"Zowe Desktop Explorers",width:"600px"}}),e._v(" "),a("h3",{attrs:{id:"file-api-and-jes-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-api-and-jes-api"}},[e._v("#")]),e._v(" File API and JES API")]),e._v(" "),a("p",[e._v("The File API server provides a set of REST APIs for working with z/OS data sets and Unix files.  These APIs are used by the MVS and USS Explorer apps.")]),e._v(" "),a("p",[e._v("The JES API server provides a set of REST APIs for working with JES.  These APIs are used by the JES Explorer application.")]),e._v(" "),a("p",[e._v("Both the File API and JES API servers are registered as tiles on the API catalog, so you can view the Swagger definition and test API requests and responses.")]),e._v(" "),a("h2",{attrs:{id:"cross-memory-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cross-memory-server"}},[e._v("#")]),e._v(" Cross memory server")]),e._v(" "),a("p",[e._v("Unlike all of the servers described above which run under the "),a("code",[e._v("ZWESVSTC")]),e._v(" started task as address spaces for USS processes, the cross memory server has its own separate started task "),a("code",[e._v("ZWESISTC")]),e._v(" and its own user ID "),a("code",[e._v("ZWESIUSR")]),e._v(" that runs the program "),a("code",[e._v("ZWESIS01")]),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);