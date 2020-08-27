(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{401:function(e,t,a){"use strict";a.r(t);var s=a(3),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"verify-zowe-runtime-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify-zowe-runtime-directory"}},[e._v("#")]),e._v(" Verify Zowe runtime directory")]),e._v(" "),a("p",[e._v("The Zowe runtime directory "),a("code",[e._v("ROOT_DIR")]),e._v(" contains the code modules that make up Zowe.  If these code modules are altered in any way, the behavior of Zowe is unpredictable. To check if the "),a("code",[e._v("ROOT_DIR")]),e._v(" has been altered, Zowe provides a verify tool that comprises a script file "),a("code",[e._v("zowe-verify-authenticity.sh")]),e._v(" and the files it needs to check the release contents.")]),e._v(" "),a("p",[e._v("You can use this verify tool on Zowe version 1.9 and later.")]),e._v(" "),a("ul",[a("li",[e._v("If you use Zowe version 1.14 or later, the verify tool is delivered with Zowe, so you can skip "),a("a",{attrs:{href:"#step-1-obtain-the-verify-tool-prior-to-v114"}},[e._v("Step 1")]),e._v(" below, but you can still download the verify tool if required.")]),e._v(" "),a("li",[e._v("If you use Zowe version 1.9, 1.10, 1.11, 1.12, and 1.13, you must obtain the verify tool separately and use it to verify the "),a("code",[e._v("ROOT_DIR")]),e._v(".")])]),e._v(" "),a("p",[a("strong",[e._v("Contents in this topic")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#step-1-obtain-the-verify-tool-required-for-versions-before-v114"}},[e._v("Step 1: Obtain the verify tool (Required for versions before v1.14)")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#step-2-verify-your-runtime-directory"}},[e._v("Step 2: Verify your runtime directory")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#step-3-review-results"}},[e._v("Step 3: Review results")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#mismatch"}},[e._v("Mismatch")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#match"}},[e._v("Match")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#zowe-verify-authenticitysh-parameters"}},[e._v("zowe-verify-authenticity.sh parameters")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#use-of-zowe-verify-authenticitysh-by-zowe-supportsh"}},[e._v("Use of zowe-verify-authenticity.sh by zowe-support.sh")])])]),e._v(" "),a("h2",{attrs:{id:"step-1-obtain-the-verify-tool-required-for-versions-before-v1-14"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-obtain-the-verify-tool-required-for-versions-before-v1-14"}},[e._v("#")]),e._v(" Step 1: Obtain the verify tool (Required for versions before v1.14)")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Start a USS terminal session with the z/OS system where Zowe is installed.")])]),e._v(" "),a("li",[a("p",[e._v("Create a new, writable, local directory, for example, "),a("code",[e._v("/u/username/hash")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Go to the "),a("a",{attrs:{href:"https://github.com/zowe/zowe-install-packaging/blob/staging/files/fingerprint.pax",target:"_blank",rel:"noopener noreferrer"}},[e._v("download link"),a("OutboundLink")],1),e._v(" to download the "),a("code",[e._v("fingerprint.pax")]),e._v(" PAX file.")])]),e._v(" "),a("li",[a("p",[e._v("Upload the downloaded file to a temporary directory such as "),a("code",[e._v("/tmp")]),e._v(" on your z/OS USS file system by using SFTP or a similar file transfer utility.\nWhen you transfer the PAX file between systems, you must use binary transfer mode.")])]),e._v(" "),a("li",[a("p",[e._v("Extract the PAX file from inside the local directory you created (in this example, it is "),a("code",[e._v("/u/username/hash")]),e._v(") using commands like the following one:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd /u/username/hash\npax -ppx -rf /tmp/fingerprint.pax\n")])])])]),e._v(" "),a("li",[a("p",[e._v("When the PAX file is extracted, you will see the following files in your "),a("code",[e._v("/u/username/hash")]),e._v(" directory:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("HashFiles.class")]),e._v(" (binary)")]),e._v(" "),a("li",[a("code",[e._v("RefRuntimeHash-1.9.0.txt")]),e._v(" (text)")]),e._v(" "),a("li",[a("code",[e._v("RefRuntimeHash-1.10.0.txt")]),e._v(" (text)")]),e._v(" "),a("li",[a("code",[e._v("RefRuntimeHash-1.11.0.txt")]),e._v(" (text)")]),e._v(" "),a("li",[a("code",[e._v("RefRuntimeHash-1.12.0.txt")]),e._v(" (text)")]),e._v(" "),a("li",[a("code",[e._v("RefRuntimeHash-1.13.0.txt")]),e._v(" (text)")]),e._v(" "),a("li",[a("code",[e._v("zowe-verify-authenticity.sh")]),e._v(" (text)")])])])]),e._v(" "),a("p",[e._v("Each "),a("code",[e._v("RefRuntimeHash-V.v.p.txt")]),e._v(" file is specific to a Zowe release, where "),a("code",[e._v("V.v.p")]),e._v(" is your Zowe release number, for example, "),a("code",[e._v("1.9.0")]),e._v(". This list of files is updated to include new Zowe releases as they become available. For example, if you use Zowe version 1.14, you will see "),a("code",[e._v("RefRuntimeHash-1.14.0.txt")]),e._v(" in the list.")]),e._v(" "),a("h2",{attrs:{id:"step-2-verify-your-runtime-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-verify-your-runtime-directory"}},[e._v("#")]),e._v(" Step 2: Verify your runtime directory")]),e._v(" "),a("p",[e._v("Now you are ready to verify your runtime directory "),a("code",[e._v("ROOT_DIR")]),e._v(", for example, "),a("code",[e._v("/usr/lpp/zowe/v1.14")]),e._v(", which contains the following files. You can show these files by using the "),a("code",[e._v("ls")]),e._v(" command.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/u/username/hash:>ls /usr/lpp/zowe/v1.14\nbin  components  fingerprint  install_log  manifest.json  scripts\n")])])]),a("p",[e._v("Note that you will not have a "),a("code",[e._v("fingerprint")]),e._v(" directory in releases prior to v1.14.0.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Change to the runtime directory.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd /usr/lpp/zowe/v1.14\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Run the "),a("code",[e._v("zowe-verify-authenticity.sh")]),e._v(" script.")]),e._v(" "),a("p",[e._v("The script will automatically choose the correct "),a("code",[e._v("RefRuntimeHash-V.v.p.txt")]),e._v(" file that matches the release found in your runtime directory.")]),e._v(" "),a("p",[a("strong",[e._v("For Zowe v1.14 and later")])]),e._v(" "),a("p",[e._v("Issue the following command. You do not need to specify any parameters to this script.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("bin/zowe-verify-authenticity.sh\n")])])]),a("p",[e._v("If you suspect that the versions of the files in "),a("code",[e._v("ROOT_DIR")]),e._v(" have been altered since this version of Zowe was installed, you might want to use the verify tool's script or files which you downloaded instead of the ones in your runtime directory. In this case, you can call the downloaded script and specify the options "),a("code",[e._v("-f")]),e._v(" and "),a("code",[e._v("-h")]),e._v(" in the following way:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/u/username/hash/zowe-verify-authenticity.sh -f /u/username/hash -h /u/username/hash\n")])])]),a("p",[e._v("To display a list of parameters, enter this command")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("bin/zowe-verify-authenticity.sh -?\n")])])]),e._v(" "),a("p",[a("strong",[e._v("For Zowe releases prior to v1.14")])]),e._v(" "),a("p",[e._v("Issue commands similar to the following. In this example, you use Zowe v1.9.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/u/username/hash/zowe-verify-authenticity.sh -r /usr/lpp/zowe/v1.9 -f /u/username/hash -h /u/username/hash\n")])])])])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("zowe-verify-authenticity.sh")]),e._v(" script creates a "),a("code",[e._v("CustRuntimeHash.txt")]),e._v(" file, which it compares with the "),a("code",[e._v("RefRuntimeHash-V.v.p.txt")]),e._v(" file.")]),e._v(" "),a("h2",{attrs:{id:"step-3-review-results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-review-results"}},[e._v("#")]),e._v(" Step 3: Review results")]),e._v(" "),a("p",[e._v("You will get one of the following results.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#mismatch"}},[e._v("Mismatch")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#match"}},[e._v("Match")])])]),e._v(" "),a("h3",{attrs:{id:"mismatch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mismatch"}},[e._v("#")]),e._v(" Mismatch")]),e._v(" "),a("p",[e._v("When files don't match, you see output similar to the following.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("USERNAME:/u/username/hash: >zowe-verify-authenticity.sh  -l ~/hash-v1.12.0 \nzowe-verify-authenticity.sh started\nInfo: Logging to directory /u/username/hash-v1.12.0\nInfo: zoweVersion = 1.12.0\nInfo: Gathering files ...\nInfo: Checking java ...\nInfo: Calculating hashes ...\nInfo: Comparing results ...\nInfo: Number of files different =  14749\nInfo: Number of files extra     =  171\nInfo: Number of files missing   =  22\nError: Verification FAILED\nInfo: Result files and script log are in directory /u/username/hash-v1.12.0\nzowe-verify-authenticity.sh ended\nUSERNAME:/u/username/hash: >\n")])])]),a("h4",{attrs:{id:"troubleshooting-and-hints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-and-hints"}},[e._v("#")]),e._v(" Troubleshooting and hints")]),e._v(" "),a("p",[e._v("This is a worst-case scenario of a bad mismatch.  To find out what the problem is, you could, for example, start by referring to the "),a("router-link",{attrs:{to:"/troubleshoot/troubleshoot-zowe-release.html#check-the-zowe-release-number"}},[a("code",[e._v("manifest.json")]),e._v(" file")]),e._v(" to see whether one of the components is from the wrong release.")],1),e._v(" "),a("p",[e._v("If you have many files different but none missing or extra, you might have a file tagging or code-page problem.  Check that the environment variables are set as required according to "),a("code",[e._v("zowe-set-env.sh")]),e._v(".")]),e._v(" "),a("p",[e._v("The hash files mentioned above are left in the "),a("code",[e._v("/u/username/hash")]),e._v(" directory in case you want to use a GUI tool to perform a better file comparison.")]),e._v(" "),a("h3",{attrs:{id:"match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#match"}},[e._v("#")]),e._v(" Match")]),e._v(" "),a("p",[e._v("When files match, you see output similar to the following.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe-verify-authenticity.sh started\nInfo: Logging to directory /u/username/hash-v1.12.0\nInfo: zoweVersion = 1.12.0\nInfo: Gathering files ...\nInfo: Checking java ...\nInfo: Calculating hashes ...\nInfo: Comparing results ...\nInfo: Number of files different =  0\nInfo: Number of files extra     =  0\nInfo: Number of files missing   =  0\nInfo: Verification PASSED\nInfo: Result files and script log are in directory /u/username/hash-v1.12.0\nzowe-verify-authenticity.sh ended\n")])])]),a("h2",{attrs:{id:"zowe-verify-authenticity-sh-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zowe-verify-authenticity-sh-parameters"}},[e._v("#")]),e._v(" zowe-verify-authenticity.sh parameters")]),e._v(" "),a("p",[e._v("Usage:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe-verify-authenticity.sh [-r <runtime-dir>] [-h <HashPgm-dir>] [-f <HashRef-dir>] [-l <output-dir>]\n")])])]),a("ul",[a("li",[e._v("All parameters are optional")]),e._v(" "),a("li",[e._v("You can use dot (.) and tilde (~) in the parameters")])]),e._v(" "),a("p",[e._v("Description of parameters:")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("-r <runtime-dir>")])]),e._v(" "),a("p",[e._v("Root directory of the executables used by Zowe at run time. The typical value is "),a("code",[e._v("/usr/lpp/zowe")]),e._v(". The default value is the parent directory of the "),a("code",[e._v("bin")]),e._v(" folder where this script is located.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("-h <HashPgm-dir>")])]),e._v(" "),a("p",[e._v("Directory of the hash key program. The typical value is "),a("code",[e._v("/usr/lpp/zowe/fingerprint")]),e._v(". The default value is the "),a("code",[e._v("fingerprint")]),e._v(" directory of the parent folder where this script is located.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("-f <HashRef-dir>")])]),e._v(" "),a("p",[e._v("Directory of the reference hash key file "),a("code",[e._v("RefRuntimeHash-V.v.p.txt")]),e._v(". The typical value and default value are the same as that of the "),a("code",[e._v("-h")]),e._v(" parameter. The values specified for "),a("code",[e._v("-h")]),e._v(" and "),a("code",[e._v("-f")]),e._v(" can be the same or different.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("-l <output-dir>")])]),e._v(" "),a("p",[e._v("Output directory where the following log and output files will be written.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zowe-verify-authenticity.log\nCustRuntimeHash.sort\nCustRuntimeHash.txt \nRefRuntimeHash.sort  \n")])])]),a("p",[e._v("The typical value is "),a("code",[e._v("~/zowe/fingerprint")]),e._v(". The directory will be created if you specify it but it does not exist.")]),e._v(" "),a("p",[e._v("The following defaults will be tried in the listed order:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/global/zowe/log \n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("~/zowe\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$TMPDIR\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/tmp\n")])])])])]),e._v(" "),a("h2",{attrs:{id:"use-of-zowe-verify-authenticity-sh-by-zowe-support-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-of-zowe-verify-authenticity-sh-by-zowe-support-sh"}},[e._v("#")]),e._v(" Use of zowe-verify-authenticity.sh by zowe-support.sh")]),e._v(" "),a("p",[e._v("Starting in Zowe v1.14, the "),a("code",[e._v("zowe-verify-authenticity.sh")]),e._v(" script is automatically called, with no parameters, by "),a("code",[e._v("zowe-support.sh")]),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);