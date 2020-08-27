(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{368:function(e,t,o){"use strict";o.r(t);var n=o(3),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("The installation of Zowe™ consists of two independent processes: installing the Zowe runtime on z/OS and installing Zowe CLI on a desktop computer.")]),e._v(" "),o("p",[e._v("The Zowe z/OS runtime provides a web desktop that runs in a web browser providing a number of applications for z/OS users, together with an API mediation layer that provides capabilities useful for z/OS developers.")]),e._v(" "),o("p",[e._v("Zowe CLI can connect to z/OS servers and allows tasks to be performed through a command line interface.")]),e._v(" "),o("ul",[o("li",[e._v("A desktop computer that accesses the Zowe z/OS runtime through a web browser or REST API client does not need to have Zowe CLI installed.")]),e._v(" "),o("li",[e._v("The z/OS servers that Zowe CLI connects to does not require the Zowe z/OS components to be installed on those servers.")]),e._v(" "),o("li",[e._v("A desktop computer that uses Zowe CLI does not require the Zowe z/OS runtime to be installed on the z/OS server.")])]),e._v(" "),o("p",[e._v("Before you start the installation, review the information on system requirements and other considerations.")]),e._v(" "),o("h2",{attrs:{id:"planning-the-installation-of-zowe-z-os-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#planning-the-installation-of-zowe-z-os-components"}},[e._v("#")]),e._v(" Planning the installation of Zowe z/OS components")]),e._v(" "),o("p",[e._v("The following information is required during the installation process of the Zowe z/OS components.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("The zFS directory where you will install the Zowe runtime files and folders.  For more details of setting up and configuring the UNIX Systems Services (USS) environment, see "),o("router-link",{attrs:{to:"/user-guide/configure-uss.html"}},[e._v("UNIX System Services considerations for Zowe")]),e._v(".")],1)]),e._v(" "),o("li",[o("p",[e._v("A HLQ that the installation can create a load library and samplib containing load modules and JCL samples required to run Zowe.")])]),e._v(" "),o("li",[o("p",[e._v("Multiple instances of Zowe can be started from the same Zowe z/OS runtime.  Each launch of Zowe has its own zFS directory that is known as an instance directory.")])]),e._v(" "),o("li",[o("p",[e._v("Zowe uses a zFS directory to contain its northbound certificate keys as well as a truststore for its southbound keys.  Northbound keys are one presented to clients of the Zowe desktop or Zowe API Gateway, and southbound keys are for servers that the Zowe API gateway connects to.  The certificate directory is not part of the Zowe runtime so that it can be shared between multiple Zowe runtimes and have its permissions secured independently.")])]),e._v(" "),o("li",[o("p",[e._v("Zowe has two started tasks.")]),e._v(" "),o("ul",[o("li",[o("p",[o("code",[e._v("ZWESVSTC")]),e._v(" brings up the Zowe runtime containing the Zowe desktop, the API mediation layer and a number of Zowe applications.")])]),e._v(" "),o("li",[o("p",[o("code",[e._v("ZWESISTC")]),e._v(" is a cross memory server that the Zowe desktop uses to perform APF-authorized code. More details on the cross memory server are described in "),o("router-link",{attrs:{to:"/user-guide/configure-xmem-server.html"}},[e._v("Configuring the Zowe cross memory server")]),e._v(".")],1),e._v(" "),o("p",[e._v("In order for the two started tasks to run correctly, security manager configuration needs to be performed.  This is documented in "),o("router-link",{attrs:{to:"/user-guide/configure-zos-system.html"}},[e._v("Configuring the z/OS system for Zowe")]),e._v(" and a sample JCL member "),o("code",[e._v("ZWESECUR")]),e._v(" is shipped with Zowe that contains commands for RACF, TopSecret, and ACF2 security managers.")],1)])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);