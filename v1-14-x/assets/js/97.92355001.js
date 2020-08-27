(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{404:function(e,o,t){"use strict";t.r(o);var n=t(3),a=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"troubleshooting-installation-and-startup-of-zowe-z-os-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-installation-and-startup-of-zowe-z-os-components"}},[e._v("#")]),e._v(" Troubleshooting installation and startup of Zowe z/OS components")]),e._v(" "),t("p",[e._v("The following topics contain information that can help you troubleshoot problems when you encounter unexpected behavior installing Zowe z/OS components or starting Zowe's "),t("code",[e._v("ZWESVSTC")]),e._v(" started task.")]),e._v(" "),t("h2",{attrs:{id:"unable-to-create-bpxas-instances"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unable-to-create-bpxas-instances"}},[e._v("#")]),e._v(" Unable to create BPXAS instances")]),e._v(" "),t("p",[t("strong",[e._v("Symptom:")])]),e._v(" "),t("p",[e._v("When you start "),t("code",[e._v("ZWESVSTC")]),e._v(" started task, either by running the "),t("code",[e._v("zowe-start.sh")]),e._v(" script or by launching the started task directly, you encounter the following error in the log:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<ROOT_DIR>/bin/internal/run-zowe.sh 1: FSUM7726 cannot fork: reason code  = 094500f7: EDC5112I Resource temporarily unavailable.\n")])])]),t("p",[e._v("You will also encounter the following messages in the SYSLOG:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("0290  S ZWESVSTC                                                               \n0281  $HASP100 ZWESVSTC ON STCINRDR                                            \n0290  IEF695I START ZWESVSTC WITH JOBNAME ZWESVSTC IS ASSIGNED TO USER         \n      ZWESVUSR, GROUP ZWEADMIN                                                 \n0281  $HASP373 ZWESVSTC STARTED                                                \n0090  IEA602I ADDRESS SPACE CREATE FAILED.  MAXUSERS WOULD HAVE BEEN EXCEEDED  \n0290  BPXP005I A FORK OR SPAWN ERROR WAS ENCOUNTERED.  RETURN CODE 00000070    \n      REASON CODE 094500F7                                                     \n0090  IEA602I ADDRESS SPACE CREATE FAILED.  MAXUSERS WOULD HAVE BEEN EXCEEDED  \n0090  IEA602I ADDRESS SPACE CREATE FAILED.  MAXUSERS WOULD HAVE BEEN EXCEEDED  \n0090  IEA602I ADDRESS SPACE CREATE FAILED.  MAXUSERS WOULD HAVE BEEN EXCEEDED  \n")])])]),t("p",[t("strong",[e._v("Solution:")])]),e._v(" "),t("p",[e._v("This problem occurs when the maximum number of "),t("code",[e._v("BPXAS")]),e._v(" instances have been reached.")]),e._v(" "),t("p",[e._v("This may be because when the Zowe instance directory was created, it was generated in the same location as the Zowe root directory.  The Zowe instance directory is created by using the script "),t("code",[e._v("<ROOT_DIR>/bin/zowe-configure-instance.sh -c <PATH_TO_INSTANCE_DIR>")]),e._v(". See "),t("router-link",{attrs:{to:"/user-guide/configure-instance-directory.html#creating-an-instance-directory"}},[e._v("Creating an instance directory")]),e._v(". The Zowe runtime directory is replaced when new PTFs are applied and should be considered as a read-only set of files. Zowe instance directories are designed to live outside the directory structure and are used to start a Zowe runtime.")],1),e._v(" "),t("p",[e._v("This problem will only occur with Zowe drivers prior to v1.10 and has been resolved in v1.10 where the "),t("code",[e._v("zowe-configure-instance.sh")]),e._v(" script will report error if it detects the "),t("code",[e._v("-c")]),e._v(" argument because the installation directory location is an existing Zowe runtime directory.")]),e._v(" "),t("h2",{attrs:{id:"errors-caused-when-running-the-zowe-desktop-with-node-8-16-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#errors-caused-when-running-the-zowe-desktop-with-node-8-16-1"}},[e._v("#")]),e._v(" Errors caused when running the Zowe desktop with node 8.16.1")]),e._v(" "),t("p",[t("strong",[e._v("Symptom:")])]),e._v(" "),t("p",[e._v("When you start the "),t("code",[e._v("ZWESVSTC")]),e._v(" started task, you encounter the following error messages:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/usr/lpp/zowe/components/app-server/share/zlux-app-server/lib/initInstance.js:1\n(function (exports, require, module, __filename, __dirname) {\nSyntaxError: Invalid or unexpected token\n    at createScript (vm.js:80:10)\n    at Object.runInThisContext (vm.js:139:10)\n    at Module._compile (module.js:617:28)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)\n    at Function.Module._load (module.js:498:3)\n    at Function.Module.runMain (module.js:694:10)\n    at startup (bootstrap_node.js:204:16)\n    at bootstrap_node.js:625:3\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/global/zowe/instances/prod/bin/internal/run-zowe.sh 3: FSUM7332 syntax error: got ), expecting Newline\n")])])]),t("p",[t("strong",[e._v("Solution:")])]),e._v(" "),t("p",[e._v("This problem occurs when you use Node.js v8.16.1 which is not supported on Zowe. There is a known issue with node.js v8.16.1 and Zowe desktop encoding. Use a supported version of Node.js instead. For more information, see "),t("router-link",{attrs:{to:"/user-guide/install-nodejs-zos.html#supported-nodejs-versions"}},[e._v("Supported Node.js versions")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"cannot-start-zowe-and-unix-commands-not-found-with-fsum7351"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cannot-start-zowe-and-unix-commands-not-found-with-fsum7351"}},[e._v("#")]),e._v(" Cannot start Zowe and UNIX commands not found with FSUM7351")]),e._v(" "),t("p",[t("strong",[e._v("Symptom:")])]),e._v(" "),t("p",[e._v("When you start the ZWESVSTC started task, you might encounter the following error message:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dirname: <instance-dir>/bin/internal/run-zowe.sh 2: FSUM7351 not found\npwd: <instance-dir>/bin/internal/run-zowe.sh 2: FSUM7351 not found\n.: <instance-dir>/bin/internal/run-zowe.sh 3: /bin/internal/read-instance.sh: not found\n")])])]),t("p",[t("strong",[e._v("Solution:")])]),e._v(" "),t("p",[e._v("Check that /bin is part on your PATH. Do "),t("code",[e._v("echo $PATH")]),e._v(" to check. If it is missing, make sure that it is appended to PATH in your profile, for example, in "),t("code",[e._v("/etc/profile/")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"various-warnings-show-when-connecting-zowe-with-another-domain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#various-warnings-show-when-connecting-zowe-with-another-domain"}},[e._v("#")]),e._v(" Various warnings show when connecting Zowe with another domain")]),e._v(" "),t("p",[t("strong",[e._v("Symptoms:")])]),e._v(" "),t("p",[e._v("When you configure the Zowe environment variable "),t("code",[e._v("ZOWE_EXPLORER_HOST")]),e._v(" in "),t("code",[e._v("instance.env")]),e._v(" with a domain (for example, "),t("code",[e._v("domain-a.com")]),e._v("), and access Zowe with another domain (for example, "),t("code",[e._v("domain-b.com")]),e._v("), you may see the following errors:")]),e._v(" "),t("ul",[t("li",[e._v("Certificate warnings similar to the following one:"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("domain-b.com:8544 uses an invalid security certificate.\n\nThe certificate is only valid for the following names: domain-a.com, <ip-of-domain-a>, localhost.localdomain, localhost, 127.0.0.1\n")])])])]),e._v(" "),t("li",[e._v("No pinned applications show in Zowe Desktop.")]),e._v(" "),t("li",[e._v("JES Explorer, MVS Explorer, USS Explorer may show errors similar to the following one if you ignore the certificate error."),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Blocked by Content Security Policy\n\nAn error occurred during a connection to domain-a.com:7554.\n\nFirefox prevented this page from loading in this way because the page has a content security policy that disallows it.\n")])])])])]),e._v(" "),t("p",[e._v("The above warnings and errors will also show when you plan to use Zowe with multiple domain names.")]),e._v(" "),t("p",[t("strong",[e._v("Solutions:")])]),e._v(" "),t("p",[e._v("You can take the following steps:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("When you prepare the "),t("code",[e._v("bin/zowe-setup-certificates.env")]),e._v(" file, specify the "),t("code",[e._v("HOSTNAME=")]),e._v(" and "),t("code",[e._v("IPADDRESS=")]),e._v(" parameters to accept multiple domains separated by comma (from Zowe v1.14.0). The following configuration is an example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("HOSTNAME=domain-a.com,domain-b.com\nIPADDRESS=<ip-of-domain-a>,<ip-of-domain-b>\n")])])]),t("p",[e._v("Then you can proceed to run the "),t("code",[e._v("bin/zowe-setup-certificates.sh")]),e._v(" script.")])]),e._v(" "),t("li",[t("p",[e._v("After you run the "),t("code",[e._v("bin/zowe-configure-instance.sh")]),e._v(" script, modify the "),t("code",[e._v("instance.env")]),e._v(" file located in the instance directory in the following ways to reflect the multiple domains you plan to use.")]),e._v(" "),t("ul",[t("li",[e._v("Add a line of "),t("code",[e._v("ZWE_EXTERNAL_HOSTS")]),e._v(". For example, "),t("code",[e._v("ZWE_EXTERNAL_HOSTS=domain-a.com,domain-b.com")]),e._v(".")]),e._v(" "),t("li",[e._v("Add a line of "),t("code",[e._v("ZWE_REFERRER_HOSTS")]),e._v(". For example, "),t("code",[e._v("ZWE_REFERRER_HOSTS=domain-a.com,domain-b.com")]),e._v(".")]),e._v(" "),t("li",[e._v("Find the line that starts with "),t("code",[e._v("ZOWE_EXPLORER_FRAME_ANCESTORS")]),e._v(" and modify its values to "),t("code",[e._v('ZOWE_EXPLORER_FRAME_ANCESTORS="${ZOWE_EXPLORER_HOST}:*,domain-a.com:*,domain-b.com:*,${ZOWE_IP_ADDRESS}:*"')]),e._v(".")])])])]),e._v(" "),t("p",[t("strong",[e._v("Drawback:")])]),e._v(" "),t("p",[e._v("With this change, you must use the API Mediation Layer Gateway port (default is 7554) to access Zowe Desktop, for example, "),t("code",[e._v("https://domain-a.com:7554/ui/v1/zlux")]),e._v(" or "),t("code",[e._v("https://domain-b.com:7554/ui/v1/zlux")]),e._v(". Using Desktop port (default is 8544) like "),t("code",[e._v("https://domain-b.com:8544/")]),e._v(" is not supported.")])])}),[],!1,null,null,null);o.default=a.exports}}]);