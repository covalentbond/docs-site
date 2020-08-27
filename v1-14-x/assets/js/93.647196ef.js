(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{409:function(e,r,t){"use strict";t.r(r);var s=t(3),i=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),t("h2",{attrs:{id:"error-jobs-search-failing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-jobs-search-failing"}},[e._v("#")]),e._v(" Error Jobs search failing")]),e._v(" "),t("h3",{attrs:{id:"error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error"}},[e._v("#")]),e._v(" Error:")]),e._v(" "),t("p",[e._v("Search for jobs using SDSF failed for prefix {} and owner {}: exc.sdsf_invocation_failed 8 (Issue does not impace ZD&T boxes)")]),e._v(" "),t("h3",{attrs:{id:"solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[e._v("#")]),e._v(" Solution:")]),e._v(" "),t("p",[e._v("You must be authorized to use SDSF with REXX on your z/OS system. In order to do this, activate the SDSF RACF class and add the following 3 profiles to your system:")]),e._v(" "),t("ul",[t("li",[e._v("GROUP.ISFSORIG")]),e._v(" "),t("li",[e._v("GROUP.ISFSPROG.SDSF")]),e._v(" "),t("li",[e._v("ISF.CONNECT.")])]),e._v(" "),t("p",[e._v("Users must belong to a group that has READ access to these profiles.")]),e._v(" "),t("p",[e._v("This is quite a complex area and you should ask your systems programmer for advice. On most systems, the GROUP.* profiles are not required and it is sufficient to have the following ISF profile defined:")]),e._v(" "),t("p",[e._v("class profile SDSF ISF.CONNECT.** (G)")]),e._v(" "),t("h2",{attrs:{id:"services-that-are-not-running-appear-to-be-running"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#services-that-are-not-running-appear-to-be-running"}},[e._v("#")]),e._v(" Services that are Not Running Appear to be Running")]),e._v(" "),t("h3",{attrs:{id:"error-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-2"}},[e._v("#")]),e._v(" Error:")]),e._v(" "),t("p",[e._v("Services that are not running appear to be running. The following message is displayed in the Discovery Service:")]),e._v(" "),t("p",[t("strong",[e._v("EMERGENCY! EUREKA MAY BE INCORRECTLY CLAIMING INSTANCES ARE UP WHEN THEY'RE NOT. RENEWALS ARE LESSER THAN THRESHOLD AND HENCE THE INSTANCES ARE NOT BEING EXPIRED JUST TO BE SAFE.")])]),e._v(" "),t("h3",{attrs:{id:"cause"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cause"}},[e._v("#")]),e._v(" Cause:")]),e._v(" "),t("p",[e._v("This message is expected behavior of the discovery service. If a service is incorrectly terminated without properly unregistering from Eureka, it initially enters "),t("em",[e._v("eviction status")]),e._v(" for a brief timeframe before the service is deregistered. Failure to properly terminate occurs when a service fails to respond to three consecutive heartbeat renewals. After the three heartbeat renewals are returned without a response, the Eureka discovery service keeps the service in "),t("em",[e._v("eviction status")]),e._v(" for one additional minute. If the service does not respond within this minute, the Eureka service unregisters this unresponsive service. When more than 15 percent of currently registered services are in "),t("em",[e._v("eviction status")]),e._v(", "),t("em",[e._v("self preservation mode")]),e._v(" is enabled. In "),t("em",[e._v("self preservation mode")]),e._v(", no services in eviction status are deregistered. As a result, these services continue to appear to be running even though they are not running.")]),e._v(" "),t("h3",{attrs:{id:"solution-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution-2"}},[e._v("#")]),e._v(" Solution:")]),e._v(" "),t("p",[e._v("Use one of the following options to exit self preservation mode:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Restart the services that appear to be running")])]),e._v(" "),t("p",[e._v("Relaunch the services that appear to be registered. After the message disappears, close each of the services one at a time. Allow for a 3-minute period between closing each service.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Restart the discovery service")])]),e._v(" "),t("p",[e._v("Manually restart the discovery service. The new instance will not be in self preservation mode. In a few minutes, the running services re-register.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Adjust the threshold of services in eviction status")])]),e._v(" "),t("p",[e._v("Change the frequency of the discovery service from entering self preservation mode by adjusting the threshold of services in eviction status.")]),e._v(" "),t("p",[t("strong",[e._v("Note:")]),e._v(" The default threshold is .85. This results in the discovery service entering self preservation mode when 15 percent of currently registered services are in "),t("em",[e._v("eviction status")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Example:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("eureka.renewalPercentThreshold=0.3\n")])])]),t("p",[e._v("This threshold limit causes the discovery service to enter self preservation mode when less than 30 percent of services are not responding.")])])])])}),[],!1,null,null,null);r.default=i.exports}}]);