(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{380:function(t,e,s){"use strict";s.r(e);var a=s(3),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"configuring-the-zowe-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-zowe-apis"}},[t._v("#")]),t._v(" Configuring the Zowe APIs")]),t._v(" "),s("p",[t._v("Review the security considerations for Zowe APIs and learn how to prevent the Denial of Service (DoS) attacks.")]),t._v(" "),s("p",[t._v("The default configuration before Zowe version 1.14.0 contains "),s("strong",[t._v("Data sets and Unix files")]),t._v(" and "),s("strong",[t._v("Jobs")]),t._v(" API microservices which might be vulnerable to DoS attacks in the form of slow https attacks. You can add additional configuration to the start script of these components in order to prevent resource starvation via slow https attacks.")]),t._v(" "),s("ul",[s("li",[t._v("To update the configuration of the "),s("strong",[t._v("Data sets and Unix files")]),t._v(" component, modify the "),s("code",[t._v("start.sh")]),t._v(" script within the runtime component directory "),s("code",[t._v("/zowe/runtime/components/files-api/bin")]),t._v(".")]),t._v(" "),s("li",[t._v("To update the configuration of the "),s("strong",[t._v("Jobs")]),t._v(" component, modify the "),s("code",[t._v("start.sh")]),t._v(" script within the runtime component directory "),s("code",[t._v("/zowe/runtime/components/jobs-api/bin")]),t._v(".")])]),t._v(" "),s("p",[t._v("Ensure that the "),s("code",[t._v("-Dserver.connection-timeout=8000")]),t._v(" parameter is set. This parameter specifies how long the component waits to receive all the required information from the client that makes a request.")]),t._v(" "),s("p",[t._v("See a snippet of a configured "),s("code",[t._v("start.sh")]),t._v(" script for the Jobs component as follows:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("_BPX_JOBNAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${ZOWE_PREFIX}")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${COMPONENT_CODE}")]),t._v(" java -Xms16m -Xmx512m -Dibm.serversocket.recover"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true -Dfile.encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("UTF-8 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -Djava.io.tmpdir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/tmp -Xquickstart "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -Dserver.port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${JOBS_API_PORT}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -Dcom.ibm.jsse2.overrideDefaultTLS"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -Dserver.ssl.keyAlias"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${KEY_ALIAS}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -Dserver.ssl.keyStore"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${KEYSTORE}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -Dserver.ssl.keyStorePassword"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${KEYSTORE_PASSWORD}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -Dserver.ssl.keyStoreType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${KEYSTORE_TYPE}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -Dserver.compression.enabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -Dserver.connection-timeout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -Dconnection.httpsPort"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${GATEWAY_PORT}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -Dconnection.ipAddress"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${ZOWE_EXPLORER_HOST}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -Dspring.main.banner-mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("off "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -Djava.protocol.handler.pkgs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("com.ibm.crypto.provider "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -jar "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${ROOT_DIR}")]),t._v("/components/jobs-api/bin/jobs-api-server-1.0.0-boot.jar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),s("p",[t._v("In version 1.14.0 and later, the preceding snippet reflects the default configuration.")])])}),[],!1,null,null,null);e.default=r.exports}}]);