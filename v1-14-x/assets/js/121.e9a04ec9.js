(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{377:function(e,t,a){"use strict";a.r(t);var o=a(3),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installing-and-configuring-the-zowe-cross-memory-server-zwesistc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-and-configuring-the-zowe-cross-memory-server-zwesistc"}},[e._v("#")]),e._v(" Installing and configuring the Zowe cross memory server (ZWESISTC)")]),e._v(" "),a("p",[e._v("The Zowe cross memory server provides privileged cross-memory services to the Zowe Desktop and runs as an\nAPF-authorized program. The same cross memory server can be used by multiple Zowe desktops. If you wish to start Zowe without the desktop (for example bring up just the API Mediation Layer), you do not need to install and configure a cross memory server and can skip this step. The cross memory server is needed to be able to log on to the Zowe desktop and operate its apps such as the File Editor.")]),e._v(" "),a("p",[e._v("To install and configure the cross memory server, you must define APF-authorized load libraries, program properties table (PPT) entries, and a parmlib. This requires familiarity with z/OS.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#pds-sample-library-and-pdse-load-library"}},[e._v("PDS sample library and PDSE load library")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#load-module"}},[e._v("Load module")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#apf-authorize"}},[e._v("APF authorize")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#key-4-non-swappable"}},[e._v("Key 4 non-swappable")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#parmlib"}},[e._v("PARMLIB")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#proclib"}},[e._v("PROCLIB")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#saf-configuration"}},[e._v("SAF configuration")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#summary-of-cross-memory-server-installation"}},[e._v("Summary of cross memory server installation")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#starting-and-stopping-the-cross-memory-server-on-zos"}},[e._v("Starting and stopping the cross memory server on z/OS")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#zowe-auxiliary-service"}},[e._v("Zowe auxiliary service")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#when-to-configure-the-auxiliary-service"}},[e._v("When to configure the auxiliary service")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#installing-the-auxiliary-service"}},[e._v("Installing the auxiliary service")])])])])]),e._v(" "),a("h2",{attrs:{id:"pds-sample-library-and-pdse-load-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pds-sample-library-and-pdse-load-library"}},[e._v("#")]),e._v(" PDS sample library and PDSE load library")]),e._v(" "),a("p",[e._v("The cross memory server runtime artifacts, the JCL for the started tasks, the parmlib, and members containing sample configuration commands are found in the "),a("code",[e._v("SZWESAMP")]),e._v(" PDS sample library.")]),e._v(" "),a("p",[e._v("The load modules for the cross memory server and an auxiliary server it uses are found in the "),a("code",[e._v("SZWEAUTH")]),e._v(" PDSE.")]),e._v(" "),a("p",[e._v("The location of "),a("code",[e._v("SZWESAMP")]),e._v(" and "),a("code",[e._v("SZWEAUTH")]),e._v(" for a convenience build depends on the value of the "),a("code",[e._v("zowe-install.sh -h")]),e._v(" argument. For more information, see "),a("router-link",{attrs:{to:"/user-guide/install-zowe-zos-convenience-build.html#step-3-choose-a-dataset-hlq-for-the-samplib-and-loadlib"}},[e._v("Install Zowe z/OS convenience build")]),e._v(".")],1),e._v(" "),a("p",[e._v("For an SMP/E installation, "),a("code",[e._v("SZWESAMP")]),e._v(" and "),a("code",[e._v("SZWEAUTH")]),e._v(" are the SMP/E target libraries whose location depends on the value of the "),a("code",[e._v("#thlq")]),e._v(" placeholder in the sample member "),a("code",[e._v("AZWE001.F1(ZWE3ALOC)")]),e._v(".")]),e._v(" "),a("p",[e._v("The cross memory server is a long running server process that, by default, runs under the started task name "),a("code",[e._v("ZWESISTC")]),e._v(" with the user ID "),a("code",[e._v("ZWESIUSR")]),e._v(" and group of "),a("code",[e._v("ZWEADMIN")]),e._v(".")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ZWESISTC")]),e._v(" started task serves the Zowe desktop that is running under the "),a("code",[e._v("ZWESVSTC")]),e._v(" started task, and provides it with secure services that require elevated privileges, such as supervisor state, system key, or APF-authorization.")]),e._v(" "),a("p",[e._v("The user ID "),a("code",[e._v("ZWESIUSR")]),e._v(" that is assigned to the cross memory server started tasks must have a valid OMVS segment and read access to the load library "),a("code",[e._v("SZWEAUTH")]),e._v(" and PARMLIB data sets. The cross memory server loads some functions to LPA for its PC-cp services.")]),e._v(" "),a("p",[e._v("To install the cross memory server, enable the PROCLIB, PARMLIB, and load module. This topic describes the steps to do this manually.")]),e._v(" "),a("p",[e._v("If you want to install and configure the cross memory server by using scripts, see "),a("router-link",{attrs:{to:"/user-guide/scripted-configure-server.html"}},[e._v("Scripted installation and configuration of Zowe z/OS components")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"load-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-module"}},[e._v("#")]),e._v(" Load module")]),e._v(" "),a("p",[e._v("The cross memory server load module "),a("code",[e._v("ZWESIS00")]),e._v(" is installed by Zowe into a PDSE "),a("code",[e._v("SZWEAUTH")]),e._v(".  For the cross memory server to be started, the load module needs to be APF-authorized and the program needs to run in key(4) as non-swappable.")]),e._v(" "),a("h3",{attrs:{id:"apf-authorize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apf-authorize"}},[e._v("#")]),e._v(" APF authorize")]),e._v(" "),a("p",[e._v("APF authorize the PDSE "),a("code",[e._v("SZWESAUTH")]),e._v(".  This allows the SMP/E APPLY and RESTORE jobs used for applying maintenance to be operating on the runtime PDSE itself when PTF maintenance is applied.")]),e._v(" "),a("p",[e._v("Do not add the "),a("code",[e._v("SZWEAUTH")]),e._v(" data set to the system LNKLIST or LPALST concatenations.")]),e._v(" "),a("p",[e._v("To check whether a load library is APF-authorized, you can issue the following TSO command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("D PROG,APF,DSNAME=hlq.SISLOAD\n")])])]),a("p",[e._v("where the value of DSNAME is the name of the "),a("code",[e._v("SZWEAUTH")]),e._v(" data set as created during Zowe installation that contains the "),a("code",[e._v("ZWESIS01")]),e._v(" load module.")]),e._v(" "),a("p",[e._v("Issue one of the following operator commands to dynamically add the load library to the APF list (until next IPL), where the value of DSNAME is the name of the "),a("code",[e._v("SZWEAUTH")]),e._v(" data set, as created during Zowe installation.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("If the load library is not SMS-managed, issue the following operator command, where "),a("code",[e._v("volser")]),e._v(" is the name of the volume that holds the data set:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SETPROG APF,ADD,DSNAME=ZWES.SISLOAD,VOLUME=volser\n")])])])]),e._v(" "),a("li",[a("p",[e._v("If the load library is SMS-managed, issue the following operator command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SETPROG APF,ADD,DSNAME=hlq.SZWEAUTH,SMS\n")])])])])]),e._v(" "),a("p",[e._v("Add one of the following lines to your active "),a("code",[e._v("PROGxx")]),e._v(" PARMLIB member, for example "),a("code",[e._v("SYS1.PARMLIB(PROG00)")]),e._v(", to ensure that the APF authorization is added automatically after next IPL. The value of "),a("code",[e._v("DSNAME")]),e._v(" is the name of the "),a("code",[e._v("SZWEAUTH")]),e._v(" data set, as created during Zowe installation:")]),e._v(" "),a("ul",[a("li",[e._v("If the load library is not SMS-managed, add the following line, where "),a("code",[e._v("volser")]),e._v(" is the name of the volume that holds the data set:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("APF ADD DSNAME=hlq.SZWEAUTH VOLUME=volser\n")])])])]),e._v(" "),a("li",[e._v("If the load library is SMS-managed, add the following line:"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("APF ADD DSNAME=hlq.SZWEAUTH SMS\n")])])])])]),e._v(" "),a("p",[e._v("The PDS member "),a("code",[e._v("SZWESAMP(ZWESIMPRG)")]),e._v(" contains the SETPROG statement and PROGxx update for reference.")]),e._v(" "),a("h3",{attrs:{id:"key-4-non-swappable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-4-non-swappable"}},[e._v("#")]),e._v(" Key 4 non-swappable")]),e._v(" "),a("p",[e._v("The cross memory server load module "),a("code",[e._v("ZWESIS01")]),e._v(" must run in key 4 and be non-swappable. For the server to start in this environment, add the following PPT entries for the server and address spaces to the SCHEDxx member of the system PARMLIB.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("PPT PGMNAME(ZWESIS01) KEY(4) NOSWAP\n")])])]),a("p",[e._v("The PDS member "),a("code",[e._v("SZWESAMP(ZWESISCH)")]),e._v(" contains the PPT lines for reference.")]),e._v(" "),a("p",[e._v("Then, issue the following command to make the SCHEDxx changes effective:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/SET SCH=xx\n")])])]),a("h2",{attrs:{id:"parmlib"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parmlib"}},[e._v("#")]),e._v(" PARMLIB")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ZWESISTC")]),e._v(" started task must find a valid "),a("code",[e._v("ZWESIPxx")]),e._v(" PARMLIB member in order to be launched successfully. The "),a("code",[e._v("SZWESAMP")]),e._v(" PDS created at installation time contains the member "),a("code",[e._v("ZWESIP00")]),e._v(" with default configuration values. You can copy this member to another data set, for example your system PARMLIB data set, or else leave it in "),a("code",[e._v("SZWESAMP")]),e._v(".")]),e._v(" "),a("p",[e._v("If you choose to leave "),a("code",[e._v("ZWESIPxx")]),e._v(" in the installation PDS "),a("code",[e._v("SZWESAMP")]),e._v(" used at installation time, this has advantages for SMP/E maintenance because the APPLY and RESTORE jobs will be working directly against the runtime library.")]),e._v(" "),a("p",[e._v("Wherever you place the "),a("code",[e._v("ZWESIP00")]),e._v(" member, ensure that the data set is listed in the "),a("code",[e._v("PARMLIB DD")]),e._v(" statement of the started task "),a("code",[e._v("ZWESISTC")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"proclib"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proclib"}},[e._v("#")]),e._v(" PROCLIB")]),e._v(" "),a("p",[e._v("For the cross memory server to be started, you must move the JCL PROCLIB "),a("code",[e._v("ZWESISTC")]),e._v(" member from the installation PDS SAMPLIB "),a("code",[e._v("SZWESAMP")]),e._v(" into a PDS that is on the JES concatenation path.")]),e._v(" "),a("p",[e._v("You need to update the "),a("code",[e._v("ZWESISTC")]),e._v(" member in the JES concatenation path with the location of the load library that contains the load module "),a("code",[e._v("ZWESI00")]),e._v(" by editing the STEPLIB DD statement of "),a("code",[e._v("ZWESISTC")]),e._v(".  Edit the PARMLIB DD statement to point to the location of the PDS that contains the "),a("code",[e._v("ZWESIP00")]),e._v(" member.")]),e._v(" "),a("p",[e._v("For example, the sample JCL below shows "),a("code",[e._v("ZWESVSTC")]),e._v(" where the APF-authorized PDSE containing "),a("code",[e._v("ZWESI00")]),e._v(" is "),a("code",[e._v("ZWESVUSR.SISLOAD")]),e._v(" and the PDS PARMLIB containing "),a("code",[e._v("ZWESIP00")]),e._v(" is "),a("code",[e._v("ZWESVISR.SISSAMP")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-jcl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//ZWESIS01 EXEC PGM=ZWESIS01,REGION=&RGN,\n//         PARM='NAME=&NAME,MEM=&MEM'\n//STEPLIB  DD   DSNAME=ZWESVUSR.SISLOAD,DISP=SHR\n//PARMLIB  DD   DSNAME=ZWESVUSR.SISSAMP,DISP=SHR\n//SYSPRINT DD   SYSOUT=*\n")])])]),a("h2",{attrs:{id:"saf-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#saf-configuration"}},[e._v("#")]),e._v(" SAF configuration")]),e._v(" "),a("p",[e._v("You must configure the z/OS system in order to correctly run the cross memory server.  The steps to perform this are included in the JCL member "),a("code",[e._v("ZWESECUR")]),e._v(" that is used to configure a z/OS environment for Zowe, and documented in the section "),a("router-link",{attrs:{to:"/user-guide/configure-zos-system.html#configure-the-cross-memory-server-for-saf"}},[e._v("Configure the cross memory server for SAF")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"summary-of-cross-memory-server-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary-of-cross-memory-server-installation"}},[e._v("#")]),e._v(" Summary of cross memory server installation")]),e._v(" "),a("p",[e._v("You can start the cross memory server using the command "),a("code",[e._v("/S ZWESISTC")]),e._v(" once the following steps have been completed.")]),e._v(" "),a("ul",[a("li",[e._v("JCL member "),a("code",[e._v("ZWESVSTC")]),e._v(" is copied from "),a("code",[e._v("SZWESAMP")]),e._v(" installation PDS to a PDS on the JES concatenation path.")]),e._v(" "),a("li",[e._v("The PDSE Load Library "),a("code",[e._v("SZWEAUTH")]),e._v("is APF-authorized, or Load module "),a("code",[e._v("ZWESI00")]),e._v(" is copied to an existing APF Auth LoadLib.")]),e._v(" "),a("li",[e._v("The JCL member "),a("code",[e._v("ZWESVSTC")]),e._v(" DD statements are updated to point to the location of "),a("code",[e._v("ZWESI00")]),e._v(" and "),a("code",[e._v("ZWESIP00")]),e._v(".")]),e._v(" "),a("li",[e._v("The load module "),a("code",[e._v("ZWESI00")]),e._v(" must run in key 4 and be non-swappable by adding a PPT entry to the SCHEDxx member of the system PARMLIB "),a("code",[e._v("PPT PGMNAME(ZWESI00) KEY(4) NOSWAP")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"starting-and-stopping-the-cross-memory-server-on-z-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#starting-and-stopping-the-cross-memory-server-on-z-os"}},[e._v("#")]),e._v(" Starting and stopping the cross memory server on z/OS")]),e._v(" "),a("p",[e._v("The cross memory server is run as a started task from the JCL in the PROCLIB member "),a("code",[e._v("ZWESISTC")]),e._v(". It supports reusable address spaces and can be started through SDSF with the operator start command with the REUSASID=YES keyword:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/S ZWESISTC,REUSASID=YES\n")])])]),a("p",[e._v("The ZWESISTC task starts and stops the ZWESASTC task as needed. Do not start the ZWESASTC task manually.")]),e._v(" "),a("p",[e._v("To end the Zowe cross memory server process, issue the operator stop command through SDSF:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/P ZWESISTC\n")])])]),a("p",[a("strong",[e._v("Note:")])]),e._v(" "),a("p",[e._v("The starting and stopping of the "),a("code",[e._v("ZWESVSTC")]),e._v(" started task for the main Zowe servers is independent of the "),a("code",[e._v("ZWESISTC")]),e._v(" cross memory server, which is an angel process. If you are running more than one "),a("code",[e._v("ZWESVSTC")]),e._v(" instance on the same LPAR, then these will be sharing the same "),a("code",[e._v("ZWESISTC")]),e._v(" cross memory server. Stopping "),a("code",[e._v("ZWESISTC")]),e._v(" will affect the behavior of all Zowe servers on the same LPAR that use the same cross-memory server name, for example ZWESIS_STD. The Zowe Cross Memory Server is designed to be a long-lived address space. There is no requirement to recycle regularly. When the cross-memory server is started with a new version of its load module, it abandons its current load module instance in LPA and loads the updated version.")]),e._v(" "),a("p",[e._v("To diagnose problems that may occur with the Zowe "),a("code",[e._v("ZWESVSTC")]),e._v(" not being able to attach to the "),a("code",[e._v("ZWESISTC")]),e._v(" cross memory server, a log file "),a("code",[e._v("zssServer-yyyy-mm-dd-hh-mm.log")]),e._v(" is created in the instance directory "),a("code",[e._v("/logs")]),e._v(" folder each time a Zowe "),a("code",[e._v("ZWESVSTC")]),e._v(" instance is started.  More details on diagnosing errors can be found in "),a("router-link",{attrs:{to:"/troubleshoot/app-framework/app-troubleshoot.html#cannot-log-in-to-the-zowe-desktop"}},[e._v("Zowe Application Framework issues")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"zowe-auxiliary-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zowe-auxiliary-service"}},[e._v("#")]),e._v(" Zowe auxiliary service")]),e._v(" "),a("p",[e._v("Under some situations in support of a Zowe extension, the cross memory server will start, control, and stop an auxiliary address space. This run as a "),a("code",[e._v("ZWESASTC")]),e._v(" started task that runs the load module "),a("code",[e._v("ZWESAUX")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"when-to-configure-the-auxiliary-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-to-configure-the-auxiliary-service"}},[e._v("#")]),e._v(" When to configure the auxiliary service")]),e._v(" "),a("p",[e._v("Under normal Zowe operation, you will not see any auxiliary address spaces started. However, if you have installed a vendor product running on top of Zowe, this may use the auxiliary service so it should be configured to be launchable.  A vendor product documentation will specify whether it needs the Zowe auxiliary service to be configured so ensure that it is needed before attempting the configuration steps.")]),e._v(" "),a("p",[e._v("If you are just using core Zowe functionality, you "),a("strong",[e._v("do not")]),e._v(" need to configure the auxiliary service.  Even with the Zowe auxiliary service configured, there is no situation under which you should manually start the "),a("code",[e._v("ZWESASTC")]),e._v(" started task.")]),e._v(" "),a("h3",{attrs:{id:"installing-the-auxiliary-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-auxiliary-service"}},[e._v("#")]),e._v(" Installing the auxiliary service")]),e._v(" "),a("p",[e._v("To install the auxiliary service to allow it to run, you take similar steps to install and configure the cross memory server as described above, but with a different JCL PROBLIC member and a different load module. There is no PARMLIB for the auxiliary service.")]),e._v(" "),a("ul",[a("li",[e._v("JCL member "),a("code",[e._v("ZWESASTC")]),e._v(" is copied from "),a("code",[e._v("SZWESAMP")]),e._v(" installation PDS to a PDS on the JES concatenation path.")]),e._v(" "),a("li",[e._v("The PDSE load library "),a("code",[e._v("SZWEAUTH")]),e._v("is APF-authorized, or load module "),a("code",[e._v("ZWESAUX")]),e._v(" is copied to an existing APF Auth LoadLib.")]),e._v(" "),a("li",[e._v("The load module "),a("code",[e._v("ZWESAUX")]),e._v(" must run in key 4 and be non-swappable by adding a PPT entry to the SCHEDxx member of the system PARMLIB "),a("code",[e._v("PPT PGMNAME(ZWESAUX) KEY(4) NOSWAP")]),e._v(".")])]),e._v(" "),a("p",[a("strong",[e._v("Important!")])]),e._v(" "),a("p",[e._v("The cross memory "),a("code",[e._v("ZWESISTC")]),e._v(" task starts and stops the "),a("code",[e._v("ZWESASTC")]),e._v(" task as needed. "),a("strong",[e._v("Do not start the "),a("code",[e._v("ZWESASTC")]),e._v(" task manually.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);