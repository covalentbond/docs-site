(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{268:function(e,t,s){e.exports=s.p+"assets/img/zowe-desktop-unable-to-logon.0b44aed3.png"},415:function(e,t,s){"use strict";s.r(t);var o=s(3),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"troubleshooting-zowe-application-framework"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-zowe-application-framework"}},[e._v("#")]),e._v(" Troubleshooting Zowe Application Framework")]),e._v(" "),o("p",[e._v("The following topics contain information that can help you troubleshoot problems when you encounter unexpected behavior installing and using Zowe™ Application Framework which includes the Zowe Desktop.")]),e._v(" "),o("p",[e._v("Most of the solutions below identify issues by referring to the "),o("router-link",{attrs:{to:"/troubleshoot/app-framework/app-mustgather.html"}},[e._v("Zowe logs")]),e._v(". To identify and resolve issues, you should be familiar with their names and locations.")],1),e._v(" "),o("p",[e._v("The Zowe Application Framework manages issues in GitHub. When you troubleshoot a problem, you can check whether a GitHub issue (open or closed) that covers the problem already exists. For a list of issues, see the "),o("a",{attrs:{href:"https://github.com/zowe/zlux/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("zlux repo"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"desktop-apps-fail-to-load"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#desktop-apps-fail-to-load"}},[e._v("#")]),e._v(" Desktop apps fail to load")]),e._v(" "),o("p",[o("strong",[e._v("Symptom:")])]),e._v(" "),o("p",[e._v('When you open apps in the Zowe desktop, a page is displayed with the message "The plugin failed to load."')]),e._v(" "),o("p",[o("strong",[e._v("Solution:")])]),e._v(" "),o("p",[e._v("This problem might occur when you use Node.js v8.16.1, which performs auto-encoding in a way that breaks Zowe apps. See "),o("a",{attrs:{href:"https://github.com/ibmruntimes/node/issues/142",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/ibmruntimes/node/issues/142"),o("OutboundLink")],1),e._v(" for details.")]),e._v(" "),o("p",[e._v("To solve the problem, use a different version of Node.js v8, such as v8.17.0, or use Node.js v12. You can obtain them from the "),o("a",{attrs:{href:"https://www.ibm.com/ca-en/marketplace/sdk-nodejs-compiler-zos",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js marketplace"),o("OutboundLink")],1),e._v(". Download the "),o("code",[e._v("ibm-trial-node-v8.17.0-os390-s390x.pax.Z")]),e._v(" file.")]),e._v(" "),o("h2",{attrs:{id:"nodejsapp-disables-immediately"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nodejsapp-disables-immediately"}},[e._v("#")]),e._v(" NODEJSAPP disables immediately")]),e._v(" "),o("p",[o("strong",[e._v("Symptom:")])]),e._v(" "),o("p",[e._v("You receive the message "),o("code",[e._v("CEE5207E The signal SIGABRT was received in stderr")]),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("Solution:")])]),e._v(" "),o("p",[e._v("You might have reached the limit for shared message queues on your LPAR. When Node.js applications are terminated by a SIGKILL signal, shared message queues might not be deallocated. For more information, see the "),o("strong",[e._v("If the NODEJSAPP disables immediately")]),e._v(" section in the "),o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSGMCP_5.5.0/troubleshooting/node/node-troubleshooting.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Troubleshooting Node.js applications"),o("OutboundLink")],1),e._v(" topic on IBM Knowledge Center.")]),e._v(" "),o("h2",{attrs:{id:"cannot-log-in-to-the-zowe-desktop"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cannot-log-in-to-the-zowe-desktop"}},[e._v("#")]),e._v(" Cannot log in to the Zowe Desktop")]),e._v(" "),o("p",[o("strong",[e._v("Symptom:")])]),e._v(" "),o("p",[e._v("When you attempt to log in to the Zowe Desktop, you receive the following error message that is displayed beneath the "),o("strong",[e._v("Username")]),e._v(" and "),o("strong",[e._v("Password")]),e._v(" fields.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('Authentication failed for 1 types:  Types: ["zss"]\n')])])]),o("p",[o("strong",[e._v("Solution:")])]),e._v(" "),o("p",[e._v("For the Zowe Desktop to work, the node server that runs under the ZWESVSTC started task must be able to make cross memory calls to the ZWESIS01 load module running under the ZWESISTC started task. If this communication fails, you see the authentication error.")]),e._v(" "),o("p",[e._v("There are two known problems that might cause this error.  The "),o("router-link",{attrs:{to:"/getting-started/zowe-architecture.html"}},[e._v("Zowe architecture diagram")]),e._v(" shows the following connections. One of these two connections likely failed.")],1),e._v(" "),o("ol",[o("li",[e._v("The zssServer connection to the "),o("code",[e._v("ZWESISTC")]),e._v(" started task using cross memory communication. If this fails, see "),o("a",{attrs:{href:"#zss-server-unable-to-communicate-with-x-mem"}},[e._v("zssServer unable to communicate with X-MEM")]),e._v(".  The architecture diagram below has been annotated with a (1) to show this connection.")]),e._v(" "),o("li",[e._v("The Zowe Desktop ZLUX server connection to the zssServer across the default port 8542. If this fails, see "),o("a",{attrs:{href:"#zlux-unable-to-communicate-with-zssserver"}},[e._v("ZLUX unable to communicate with zssServer")]),e._v(".  The architecture diagram below has been annotated with a (2) to show this connection.")])]),e._v(" "),o("img",{attrs:{src:s(268),alt:"Zowe Desktop Unable to logon.png",width:"700px"}}),e._v(" "),o("h3",{attrs:{id:"zss-server-unable-to-communicate-with-x-mem"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zss-server-unable-to-communicate-with-x-mem"}},[e._v("#")]),e._v(" ZSS server unable to communicate with X-MEM")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Open the log file "),o("code",[e._v("$INSTANCE_DIR/logs/zssServer-yyyy-mm-dd-hh-ss.log")]),e._v(".  This file is created each time ZWESVSTC is started and only the last five files are kept.")])]),e._v(" "),o("li",[o("p",[e._v("Look for the message that starts with "),o("code",[e._v("ZIS status")]),e._v(".")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("If the communication works, the message includes "),o("code",[e._v("Ok")]),e._v(". For example:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ZIS status - Ok (name='ZWESIS_STD      ', cmsRC=0, description='Ok'\n")])])]),o("p",[e._v("If the communication works, the problem is likely that the ZLUX server is unable to communicate to the zssServer. For more information, see "),o("a",{attrs:{href:"#zlux-unable-to-communicate-with-zssserver"}},[e._v("ZLUX unable to communicate with zssServer")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("If the communication is not working, the message includes "),o("code",[e._v("Failure")]),e._v(". For example:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ZIS status - Failure (name='ZWESIS_STD      ', cmsRC=39, description='Cross-memory call ABENDed'\n")])])]),o("p",[e._v("or")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ZIS status - Failure (name='ZWESIS_STD      ', cmsRC=64, description='N/A', clientVersion=2)\n")])])]),o("p",[e._v("In this case, check that the ZWESISTC started task is running. If not, start it with the TSO command "),o("code",[e._v("/S ZWESISTC")])])]),e._v(" "),o("li",[o("p",[e._v("If the problem cannot be easily fixed (such as the ZWESISTC task not running), then it is likely that the cross memory server is not running. To check whether the cross memory is running, check that the started task "),o("code",[e._v("ZWESISTC")]),e._v(" is active.")])]),e._v(" "),o("li",[o("p",[e._v("If this is the first time you set up Zowe, it is possible that the cross memory server configuration did not complete successfully. To set up and configure the cross memory server, follow steps as described in the topic "),o("router-link",{attrs:{to:"/user-guide/configure-xmem-server.html"}},[e._v("Installing and configuring the Zowe cross memory server (ZWESISTC)")]),e._v(".  Once "),o("code",[e._v("ZWESISTC")]),e._v(" is started, if problems persist, check its log to ensure it has been able to correctly locate its load module ZWESIS01 as well as the parmlib ZWESIP00.")],1)]),e._v(" "),o("li",[o("p",[e._v("If there is an authorization problem, the message might include "),o("code",[e._v("Permission Denied")]),e._v(". For example:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ZIS status - Failure (name='ZWESIS_STD      ', cmsRC=33, description='Permission denied'\n")])])]),o("p",[e._v("Check that the user ID of the ZWESVSTC started task is authorized to access the load module. Only authorized code can call ZWESIS01 because it is an APF-authorized load module.")]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" If you are using RACF security manager, a common reason for seeing "),o("code",[e._v("Permission Denied")]),e._v(" is that the user running the started task ZWESVSTC (typically ZWESVUSR) does not have READ access to the FACILITY class ZWES.IS.")])])]),e._v(" "),o("p",[e._v("If the message includes the following text, the configuration of the Application Framework server may be incomplete:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ZIS status - Failure read failed ret code 1121 reason 0x76650446\n")])])]),o("p",[e._v("If you are using AT/TLS, then the "),o("code",[e._v('"attls" : true')]),e._v(" statement might be missing from the "),o("code",[e._v("zluxserver.json")]),e._v(" file. For more information, see "),o("router-link",{attrs:{to:"/user-guide/mvd-configuration.html#configuring-zss-for-https"}},[e._v("Configuring Zowe App Server for HTTPS communication with ZSS")]),e._v(".")],1)])]),e._v(" "),o("h3",{attrs:{id:"zlux-unable-to-communicate-with-zssserver"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#zlux-unable-to-communicate-with-zssserver"}},[e._v("#")]),e._v(" ZLUX unable to communicate with zssServer")]),e._v(" "),o("p",[e._v("Follow these steps:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Open the log file "),o("code",[e._v("$INSTANCE_DIR/logs/appServer-yyyy-mm-dd-hh-ss.log")]),e._v(".  This file is created each time ZWESVSTC is started and only the last five files are kept.")])]),e._v(" "),o("li",[o("p",[e._v("Look for the message that starts with "),o("code",[e._v("GetAddrInfoReqWrap.onlookup")]),e._v(" and the log messages below.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("yyyy-mm-dd hh:mm:ss.ms <ZWED:16842977> ZWESVUSR INFO (_zsf.apiml,apiml.\nyyyy-mm-dd hh:mm:ss.ms <ZWED:16842977> ZWESVUSR INFO (_zsf.auth,webauth\nyyyy-mm-dd hh:mm:ss.ms <ZWED:16842977> ZWESVUSR WARN (_zsf.proxy,proxy.\n  at GetAddrInfoReqWrap.onlookup Ýas oncomplete¨ (dns.js:64:26) {    \n  errno: 'ENOTFOUND',                                                  \n  code: 'ENOTFOUND',                                                    \n  syscall: 'getaddrinfo',                                              \n  hostname: 'localhost'                                                    \n")])])]),o("p",[e._v("These messages show that the host name "),o("code",[e._v("localhost")]),e._v(" cannot be reached between the Zowe desktop server and the zssServer because "),o("code",[e._v("localhost")]),e._v(" has not been mapped to an IP address.")])]),e._v(" "),o("li",[o("p",[e._v("Map localhost to port 127.0.0.1.")]),e._v(" "),o("p",[e._v("Create an entry in the file "),o("code",[e._v("/etc/hosts")]),e._v(" that contains the line")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("127.0.0.1       localhost\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Restart the "),o("code",[e._v("ZWESVSTC")]),e._v(" address space.")])])]),e._v(" "),o("h2",{attrs:{id:"server-startup-problem-ret-1115"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#server-startup-problem-ret-1115"}},[e._v("#")]),e._v(" Server startup problem ret=1115")]),e._v(" "),o("p",[o("strong",[e._v("Symptom:")]),e._v("\nWhen ZWESVSTC is restarted, the following message is returned in the output of the ZSS server log file, "),o("code",[e._v("$INSTANCE_DIR/logs/zssServer-yyyy-mm-dd-hh-ss.log")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("server startup problem ret=1115\n")])])]),o("p",[o("strong",[e._v("Solution:")]),e._v("\nThis message means that some other process is already listening on port 7542, either at address 127.0.0.1 (localhost) or at 0.0.0.0 (all addresses). This prevents the ZSS server from starting.")]),e._v(" "),o("p",[e._v("One possibility is that a previously running ZSS server did not shut down correctly, and either the operating system has not released the socket after the ZSS server shut down, or the ZSS server is still running.")]),e._v(" "),o("h2",{attrs:{id:"application-plug-in-not-in-zowe-desktop"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#application-plug-in-not-in-zowe-desktop"}},[e._v("#")]),e._v(" Application plug-in not in Zowe Desktop")]),e._v(" "),o("p",[o("strong",[e._v("Symptom:")]),o("br"),e._v("\nAn application plug-in is not appearing in the Zowe Desktop.")]),e._v(" "),o("p",[o("strong",[e._v("Solution:")]),o("br"),e._v("\nTo check whether the plug-in loaded successfully, enter the following URL in a browser to display all successfully loaded Zowe plug-ins:")]),e._v(" "),o("p",[o("code",[e._v("https://my.mainframe.com:8544/plugins?type=application")])]),e._v(" "),o("p",[e._v("You can also search the "),o("router-link",{attrs:{to:"/troubleshoot/app-framework/app-mustgather.html"}},[e._v("node server logs")]),e._v(" for the plug-in identifier, for example "),o("code",[e._v("org.zowe.sample.app")]),e._v(". If the plug-in loaded successfully, you will find the following message:")],1),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("[2019-08-06 13:54:21.341 _zsf.bootstrap INFO] - Plugin org.zowe.sampleapp at path=zlux\\org.zowe.sampleapp loaded.\n")])])]),o("p",[e._v("If the plug-in did not load successfully, you will find the following message:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("[2019-08-06 13:54:21.208 _zsf.bootstrap WARNING] - Error: org.zowe.sampleapp \n")])])]),o("p",[e._v("If the identifier is not in the logs, make sure the plug-in's locator file is in the "),o("code",[e._v("/zlux-app-server/deploy/instance/ZLUX/plugins/")]),e._v(" directory. The plug-in locator is a "),o("code",[e._v(".json")]),e._v(" file, usually with same name as the identifier, for example "),o("code",[e._v("org.zowe.sampleapp.json")]),e._v(". Open the file and make sure that the path that is defined with the "),o("code",[e._v("pluginLocation")]),e._v(" attribute is correct. If the path is relative, make sure it is relative to the "),o("code",[e._v("zlux-app-server/bin")]),e._v(" directory.")]),e._v(" "),o("p",[e._v("For more information on loading plug-ins to the Desktop, see "),o("a",{attrs:{href:"https://github.com/zowe/workshop-user-browser-app/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adding Your App to the Desktop"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"error-you-must-specify-mvd-desktop-dir-in-your-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#error-you-must-specify-mvd-desktop-dir-in-your-environment"}},[e._v("#")]),e._v(" Error: You must specify MVD_DESKTOP_DIR in your environment")]),e._v(" "),o("p",[o("strong",[e._v("Symptom:")])]),e._v(" "),o("p",[e._v("A plug-in that is built in your local environment using "),o("code",[e._v("npm run start")]),e._v(" or "),o("code",[e._v("npm run build")]),e._v(" failed with an error message about a missing MVD_DESKTOP_DIR environment variable.")]),e._v(" "),o("p",[o("strong",[e._v("Solution:")]),o("br"),e._v("\nAdd the Zowe Desktop directory path to the "),o("code",[e._v("MVD_DESKTOP_DIR")]),e._v(" environment variable. To specify the path, run the following commands in your Windows console or Linux bash shell:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Windows")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("export MVD_DESKTOP_DIR=<zlux-root-dir>/zlux-app-manager/virtual-desktop\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Mac Os/Linux")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("set MVD_DESKTOP_DIR=<zlux-root-dir>/zlux-app-manager/virtual-desktop\n")])])])])]),e._v(" "),o("h2",{attrs:{id:"error-zowe-desktop-address-space-fails-to-start-zwed0115e"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#error-zowe-desktop-address-space-fails-to-start-zwed0115e"}},[e._v("#")]),e._v(" Error: Zowe Desktop address space fails to start { ZWED0115E }")]),e._v(" "),o("p",[e._v("After launching the started task "),o("code",[e._v("ZWESVSTC")]),e._v(" there are no Zowe desktop "),o("code",[e._v("ZWE1DS")]),e._v(" address space(s).")]),e._v(" "),o("p",[o("strong",[e._v("Symptom:")]),e._v("\nCheck the log for the message")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ZWED0115E - Unable to retrieve storage object from cluster. This is probably due to a timeout. \nYou may change the default of '5000' ms by setting 'node.cluster.storageTimeout' within the config. Timeout call null/clusterManager/getStorageAll \n")])])]),o("p",[e._v("The timeout value was increased to be "),o("code",[e._v("30000")]),e._v(" in 1.11.0 release.  To check which release of Zowe you are running, see "),o("router-link",{attrs:{to:"/troubleshoot/troubleshooting.html#determining-the-zowe-release-number"}},[e._v("Determining the Zowe release number")]),e._v(". To further increase this, or update the value on a previous release you can add an entry to your "),o("code",[e._v("$INSTANCE_DIR/instance.env")]),e._v(".")],1),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ZWED_node_cluster_storageTimeout=30000\n")])])]),o("p",[e._v("where the timeout value is in milliseconds.")]),e._v(" "),o("h2",{attrs:{id:"warning-problem-making-eureka-request-error-connect-econnrefused"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#warning-problem-making-eureka-request-error-connect-econnrefused"}},[e._v("#")]),e._v(" Warning: Problem making eureka request { Error: connect ECONNREFUSED }")]),e._v(" "),o("p",[o("strong",[e._v("Symptom:")]),e._v("\nThe Zowe started task "),o("code",[e._v("ZWESVSTC")]),e._v(" log contains error messages reporting problems connecting")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Problem making eureka request { Error: connect ECONNREFUSED 10.1.1.2:7553\nat TCPConnectWrap.afterConnect [as oncomplete] (net.js:1195:14)\nerrno: 'ECONNREFUSED',\ncode: 'ECONNREFUSED',\nsyscall: 'connect',\naddress: '10.1.1.2',\nport: 7553 }\n")])])]),o("p",[o("strong",[e._v("Solution:")]),o("br"),e._v("\nYou can ignore these messages. These messages are timing-related where different Eureka servers come up, try to connect to each other, and warn that the endpoint they are trying to perform a handshake with is not available.  When all of the Eurka services have started, these errors will stop being logged.")]),e._v(" "),o("h2",{attrs:{id:"warning-zwed0159w-plugin-org-zowe-zlux-proxy-zosmf-loading-failed"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#warning-zwed0159w-plugin-org-zowe-zlux-proxy-zosmf-loading-failed"}},[e._v("#")]),e._v(" Warning: ZWED0159W - Plugin (org.zowe.zlux.proxy.zosmf) loading failed.")]),e._v(" "),o("p",[o("strong",[e._v("Symptom:")]),e._v("\nThe Zowe started task "),o("code",[e._v("ZWESVSTC")]),e._v(" log contains messages")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('ZWED0159W - Plugin (org.zowe.zlux.proxy.zosmf) loading failed. \nMessage: "ZWED0047E - Proxy (org.zowe.zlux.proxy.zosmf:data) setup failed.\nHost & Port for proxy destination are required but were missing.\n')])])]),o("p",[o("strong",[e._v("Solution:")]),o("br"),e._v("\nYou can ignore these messages which should not occur in 1.11 or later releases.  To check which release of Zowe you are running, see "),o("router-link",{attrs:{to:"/troubleshoot/troubleshooting.html#determining-the-zowe-release-number"}},[e._v("Determining the Zowe release number")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"warning-zwed0050w-could-not-read-swagger-doc-folder"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#warning-zwed0050w-could-not-read-swagger-doc-folder"}},[e._v("#")]),e._v(" Warning: ZWED0050W - Could not read swagger doc folder (..)")]),e._v(" "),o("p",[o("strong",[e._v("Symptom:")]),e._v("\nThe Zowe started task "),o("code",[e._v("ZWESVSTC")]),e._v(" log contains messages ending")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ZWED0050W - Could not read swagger doc folder <ROOT_DIR>/components/app-server/share/zlux-workflow/doc/swagger\nZWED0050W - Could not read swagger doc folder <ROOT_DIR>/components/app-server/share/zlux-app-manager/virtual-desktop/doc/swagger\nZWED0050W - Could not read swagger doc folder <ROOT_DIR>/components/app-server/share/zlux-app-manager/bootstrap/doc/swagger\nZWED0050W - Could not read swagger doc folder <ROOT_DIR>/components/app-server/share/zlux-server-framework/plugins/terminal-proxy/doc/swagger\nZWED0050W - Could not read swagger doc folder <ROOT_DIR>/components/app-server/share/tn3270-ng2/doc/swagger\n")])])]),o("p",[o("strong",[e._v("Solution:")]),o("br"),e._v("\nYou can ignore these messages.")]),e._v(" "),o("h2",{attrs:{id:"warning-zwed0047w-swagger-file-for-server-not-found"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#warning-zwed0047w-swagger-file-for-server-not-found"}},[e._v("#")]),e._v(" Warning: ZWED0047W - Swagger file for server (...) not found")]),e._v(" "),o("p",[o("strong",[e._v("Symptom:")])]),e._v(" "),o("p",[e._v("The Zowe started task "),o("code",[e._v("ZWESVSTC")]),e._v(" log contains messages ending")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("ZWED0047W - Swagger file for service (org.zowe.zosmf.workflows:zosmf) not found\nZWED0047W - Swagger file for service (org.zowe.zlux.ng2desktop:browser-preferences) not found\nZWED0047W - Swagger file for service (org.zowe.zlux.bootstrap:adminnotificationdata) not found\nZWED0047W - Swagger file for service (org.zowe.terminal.proxy:tn3270data) not found\nZWED0047W - Swagger file for service (org.zowe.terminal.tn3270:statediscovery) not found\n")])])]),o("p",[o("strong",[e._v("Solution:")]),o("br"),e._v("\nYou can ignore these messages.")])])}),[],!1,null,null,null);t.default=a.exports}}]);