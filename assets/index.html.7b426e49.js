import{_ as l,r as s,o as u,c as h,a as e,b as t,d as o,w as a,e as r}from"./app.cf5feacd.js";const d={},c=r('<h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1><ul><li><a href="#about">O produktu</a></li><li><a href="#quick-intro">Rychlý úvod</a></li><li><a href="#features">Funkce</a></li><li><a href="#why-minecraft-console-client">Proč konzolový klient?</a></li><li><a href="#getting-help">Zjískání pomoci</a></li><li><a href="#bugs-ideas-feature-requests">Odeslání hlášení o chybě nebo nápadu/požadavku na funkci</a></li><li><a href="#notes-on-some-features">Důležité poznámky k některým funkcím</a></li><li><a href="#credits">Kredity</a></li><li><a href="#disclaimer">Zodpovědnost</a></li><li><a href="#license">License</a></li></ul><h2 id="o-produktu" tabindex="-1"><a class="header-anchor" href="#o-produktu" aria-hidden="true">#</a> O produktu</h2><p><strong>Minecraft Console Client (MCC)</strong> is a lightweight cross-platform open-source <strong>Minecraft</strong> TUI client for <strong>Java edition</strong> that allows you to connect to any Minecraft Java server, send commands and receive text messages in a fast and easy way without having to open the main Minecraft game.</p><p>It also provides various automations that you can enable for administration and other purposes, as well as extensible C# API for creating Bots.</p>',5),p={href:"https://github.com/ORelio",target:"_blank",rel:"noopener noreferrer"},f={href:"http://www.minecraftforum.net/topic/1314800-/",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"funkce",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#funkce","aria-hidden":"true"},"#"),t(" Funkce")],-1),m=e("p",null,"Chat",-1),b=e("li",null,"Send and receive chat messages",-1),y=e("li",null,[e("p",null,"Entity Handling")],-1),_=r('<p><em>NOTE: Some of mentioned features are disabled by default and you will have to turn them on in the configuration file and some may require additional configuration on your part for your specific usage.</em></p><h2 id="proc-konzolovy-klient" tabindex="-1"><a class="header-anchor" href="#proc-konzolovy-klient" aria-hidden="true">#</a> Proč konzolový klient?</h2><ul><li>Easy to use</li><li>Helpful community</li><li>Open-Source</li><li>Fast performance</li><li>Easy Scripting/Automation</li><li>Cross-Platform</li><li>Docker Support</li><li>10 years of continuous development</li><li>Active contributors</li><li>Widely used</li></ul><h2 id="quick-intro" tabindex="-1"><a class="header-anchor" href="#quick-intro" aria-hidden="true">#</a> Quick Intro</h2><p>Don&#39;t have time to read through the documentation, we got you, our community has made some simple introduction videos about the <strong>Minecraft Console Client</strong>.</p><h3 id="the-list-of-the-tutorials" tabindex="-1"><a class="header-anchor" href="#the-list-of-the-tutorials" aria-hidden="true">#</a> The list of the tutorials:</h3><p>Installation:</p>',7),k={href:"https://www.youtube.com/watch?v=BkCqOCa2uQw",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.youtube.com/watch?v=FxJ0KFIHDrY",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,"Using Commands, Scripts and other features:",-1),v={href:"https://youtu.be/JbDpwwETEnU",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.youtube.com/watch?v=XE7rYBFJxn0",target:"_blank",rel:"noopener noreferrer"},T=e("h2",{id:"zjiskani-pomoci",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#zjiskani-pomoci","aria-hidden":"true"},"#"),t(" Zjískání pomoci")],-1),x=e("p",null,"MCC has a community that is willing to help, we have a Discussions section in out Git Hub repository.",-1),D={href:"https://github.com/MCCTeam/Minecraft-Console-Client/discussions",target:"_blank",rel:"noopener noreferrer"},I=e("h3",{id:"before-getting-help",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#before-getting-help","aria-hidden":"true"},"#"),t(" Before getting help")],-1),A=e("ul",null,[e("li",null,[e("strong",null,"Please use the search option here or in the discussion section and read the documentation so we avoid duplicate questions. Thank you!")]),e("li",null,[e("strong",null,"Please be kind and patient, respect others as they're the ones using their time to help you")])],-1),S=e("h2",{id:"bugs-ideas-feature-requests",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bugs-ideas-feature-requests","aria-hidden":"true"},"#"),t(" Bugs, Ideas, Feature Requests")],-1),z={href:"https://github.com/MCCTeam/Minecraft-Console-Client/issues",target:"_blank",rel:"noopener noreferrer"},B=e("a",{href:"%5Bhere%5D(https://github.com/MCCTeam/Minecraft-Console-Client)"},"Github repository",-1),R=r('<p>Navigate to the Issues section, search for a bug, idea or a feature using the search option here in the documentation and in the <code>Issues</code> section on Git Hub before making your own.</p><p>If you haven&#39;t found anything similar, go ahead and click on the <code>New issue</code> button, then choose what you want to do.</p><p>If you&#39;re reporting a bug, please be descriptive as much as possible, try to explain how to re-create the bug, attack screenshots and logs, make sure that you have <a href="configuration.me#debugmessages"><code>debugmessages</code></a> set to <code>true</code> before sending a bug report or taking a screenshot.</p><h3 id="before-submitting" tabindex="-1"><a class="header-anchor" href="#before-submitting" aria-hidden="true">#</a> Before submitting</h3><ul><li><strong>Please use the search option here or in the <code>Issues</code> section and read the documentation so we avoid duplicate questions/ideas/reports. Thank you!</strong></li><li><strong>Please be kind, patient and respect others. Thank you!</strong></li></ul><h2 id="notes-on-some-features" tabindex="-1"><a class="header-anchor" href="#notes-on-some-features" aria-hidden="true">#</a> Notes on some features</h2><h3 id="inventory-terrain-and-entity-handling" tabindex="-1"><a class="header-anchor" href="#inventory-terrain-and-entity-handling" aria-hidden="true">#</a> Inventory, Terrain and Entity Handling</h3><p>Inventory handling is currently not supported in versions: <code>1.4.6 - 1.9</code> (<em>The inventory handling code is in the place, but we&#39;re missing Item Palettes, on which we&#39;re working.</em>)</p><p>Terrain handling is currently not supported in versions: <code>1.4.6 - 1.6</code></p><p>Entity handling is currently not supported in versions: <code>1.4.6 - 1.7</code></p><p>There features might not always be implemented in the latest version of the game, since they&#39;re often subjected to major changes by Mojang, and we need some time to figure out what has changed and to implement the required changes.</p><p>If there was a major game update, and the MCC hasn&#39;t been updated to support these features, if you&#39;re a programmer, feel free to contribute to the project.</p><h3 id="path-finding-and-physics" tabindex="-1"><a class="header-anchor" href="#path-finding-and-physics" aria-hidden="true">#</a> Path-Finding and Physics</h3><p>Currently the path-finding and physics have some limitations, those are:</p><ul><li>Path finding under slabs is not supported (currently being worked on, partialy complete but not avaliable in the main branch)</li><li>Swimming is not supported yet</li><li>Jumping is not supported yet</li><li>Knockback is not supported yet</li></ul><p>What is supported and works:</p><ul><li>Terrain navigation (path-finding with A* algorithm and walking)</li><li>Climbing up and down the ladders and all types of vines</li><li>Gravity</li></ul><h2 id="kredity" tabindex="-1"><a class="header-anchor" href="#kredity" aria-hidden="true">#</a> Kredity</h2>',18),P={href:"https://github.com/ORelio",target:"_blank",rel:"noopener noreferrer"},q={href:"http://www.minecraftforum.net/topic/1314800-/",target:"_blank",rel:"noopener noreferrer"},j=e("p",null,"Many features would not have been possible without the help of our talented community:",-1),F=e("p",null,[e("strong",null,"Maintainers")],-1),L=e("p",null,"ORelio, ReinforceZwei, milutinke, BruceChenQAQ, bradbyte",-1),E=e("p",null,[e("strong",null,"Ideas")],-1),N={href:"https://github.com/MCCTeam/Minecraft-Console-Client/issues?q=is%3Aissue+%5BIdea%5D+is%3Aopen",target:"_blank",rel:"noopener noreferrer"},H=e("p",null,[e("strong",null,"Bug Hunters")],-1),G={href:"https://github.com/MCCTeam/Minecraft-Console-Client/issues?q=is%3Aissue+%5BBUG%5D+is%3Aopen+",target:"_blank",rel:"noopener noreferrer"},J=e("p",null,[e("strong",null,"Contributors")],-1),O={href:"https://github.com/MCCTeam/Minecraft-Console-Client/graphs/contributors",target:"_blank",rel:"noopener noreferrer"},Z=r('<p><strong>Libraries:</strong></p><p>Minecraft Console Client also borrows code from the following libraries:</p><table><thead><tr><th>Name</th><th>Purpose</th><th>Author</th><th>License</th></tr></thead><tbody><tr><td>Biko</td><td>Proxy handling</td><td>Benton Stark</td><td>MIT</td></tr><tr><td>Heijden.Dns</td><td>DNS SRV Lookup</td><td>Geoffrey Huntley</td><td>MIT</td></tr><tr><td>DotNetZip</td><td>Zlib compression</td><td>Dino Chiesa</td><td>MS-PL</td></tr></tbody></table><h2 id="zodpovednost" tabindex="-1"><a class="header-anchor" href="#zodpovednost" aria-hidden="true">#</a> Zodpovědnost</h2><p>Even if everything should work, we are not responsible for any damage this app could cause to your computer or your server.</p><p>This app does not steal your password. If you don&#39;t trust it, don&#39;t use it or check &amp; compile from the source code.</p><p>Also, remember that when you connect to a server with this program, you will appear where you left the last time.</p><p>This means that <strong>you can die if you log in in an unsafe place on a survival server!</strong></p><p>Use the script scheduler bot to send a teleport command after logging in.</p><p>We remind you that <strong>you may get banned</strong> by your server for using this program. Use accordingly with server rules.</p><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2><p>Minecraft Console Client is a totally free of charge, open source project.</p>',12),U={href:"https://github.com/MCCTeam/Minecraft-Console-Client",target:"_blank",rel:"noopener noreferrer"},K=e("p",null,"Unless specifically stated, source code is from the MCC Team or Contributors, and available under CDDL-1.0.",-1),Q={href:"http://qstuff.blogspot.fr/2007/04/why-cddl.html",target:"_blank",rel:"noopener noreferrer"},V={href:"http://opensource.org/licenses/CDDL-1.0",target:"_blank",rel:"noopener noreferrer"};function W(X,Y){const i=s("ExternalLinkIcon"),n=s("RouterLink");return u(),h("div",null,[c,e("p",null,[t("It was originally made by "),e("a",p,[t("ORelio"),o(i)]),t(" in 2012 on the "),e("a",f,[t("Minecraft Forum"),o(i)]),t(", now it's maintained by him and many other contributors from the community.")]),g,e("ul",null,[e("li",null,[m,e("ul",null,[b,e("li",null,[o(n,{to:"/l10n/cs/guide/chat-bots.html#chat-log"},{default:a(()=>[t("Log chat history")]),_:1})]),e("li",null,[o(n,{to:"/l10n/cs/guide/chat-bots.html#alerts"},{default:a(()=>[t("Get alerted on certain keywords")]),_:1})]),e("li",null,[o(n,{to:"/l10n/cs/guide/chat-bots.html#auto-respond"},{default:a(()=>[t("Auto Respond")]),_:1})])])]),e("li",null,[e("p",null,[o(n,{to:"/l10n/cs/guide/chat-bots.html#anti-afk"},{default:a(()=>[t("Anti AFK")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/l10n/cs/guide/chat-bots.html#auto-relog"},{default:a(()=>[t("Auto Relog")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/l10n/cs/guide/chat-bots.html#script-scheduler"},{default:a(()=>[t("Script Scheduler")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/l10n/cs/guide/chat-bots.html#remote-control"},{default:a(()=>[t("Remote Control")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/l10n/cs/guide/chat-bots.html#auto-respond"},{default:a(()=>[t("Auto Respond")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/l10n/cs/guide/chat-bots.html#auto-attack"},{default:a(()=>[t("Auto Attack")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/l10n/cs/guide/chat-bots.html#auto-fishing"},{default:a(()=>[t("Auto Fishing")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/l10n/cs/guide/chat-bots.html#auto-eat"},{default:a(()=>[t("Auto Eat")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/l10n/cs/guide/chat-bots.html#auto-craft"},{default:a(()=>[t("Auto Craft")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/l10n/cs/guide/chat-bots.html#mailer"},{default:a(()=>[t("Mailer Bot")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/l10n/cs/guide/chat-bots.html#auto-drop"},{default:a(()=>[t("Auto Drop")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/l10n/cs/guide/chat-bots.html#replay-mod"},{default:a(()=>[t("Replay Mod")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/l10n/cs/guide/creating-bots.html#creating-chat-bots"},{default:a(()=>[t("API for creating Bots in C#")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/l10n/cs/guide/installation.html#using-docker"},{default:a(()=>[t("Docker Support")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/l10n/cs/guide/usage.html#inventory"},{default:a(()=>[t("Inventory Handling")]),_:1})])]),e("li",null,[e("p",null,[o(n,{to:"/l10n/cs/guide/usage.html#move"},{default:a(()=>[t("Terrain Traversing")]),_:1})])]),y]),_,e("ul",null,[e("li",null,[e("a",k,[t("Installation on Windows by Daenges"),o(i)])]),e("li",null,[e("a",w,[t("Installation on Windows + Auto AFK and More by Dexter113"),o(i)])])]),C,e("ul",null,[e("li",null,[e("a",v,[t("Minecraft Console Client | Tutorial | Commands, Scripts, AppVars, Matches, Tasks and C# Scripts by Daenges"),o(i)])]),e("li",null,[e("a",M,[t("Console Client Tutorial - Scripting by Zixxter"),o(i)])])]),T,x,e("p",null,[t("Click "),e("a",D,[t("here"),o(i)]),t(" to access it.")]),I,A,S,e("p",null,[t("Bug reporting, idea submitting or feature requesting are done in the "),e("a",z,[t("Issues"),o(i)]),t(" section of our "),B,t(".")]),R,e("p",null,[e("em",null,[t("Project initiated by "),e("a",P,[t("ORelio"),o(i)]),t(" in 2012 on the "),e("a",q,[t("Minecraft Forum"),o(i)]),t(".")])]),j,F,L,E,e("p",null,[t("ambysdotnet, Awpocalypse, azoundria, bearbear12345, bSun0000, Cat7373, dagonzaros, Dids, Elvang, fuckofftwice, GeorgH93, initsuj, JamieSinn, joshbean39, LehmusFIN, maski, medxo, mobdon, MousePak, TNT-UP, TorchRJ, yayes2, Yoann166, ZizzyDizzyMC and "),e("a",N,[t("many more"),o(i)]),t(".")]),H,e("p",null,[t("1092CQ, ambysdotnet, bearbear12345, c0dei, Cat7373, Chtholly, Darkaegis, dbear20, DigitalSniperz, doranchak, drXor, FantomHD, gerik43, ibspa, iTzMrpitBull, JamieSinn, k3ldon, KenXeiko, link3321, lyze237, mattman00000, Nicconyancat, Pokechu22, ridgewell, Ryan6578, Solethia, TNT-UP, TorchRJ, TRTrident, WeedIsGood, xp9kus, Yoann166 and "),e("a",G,[t("many more"),o(i)]),t(".")]),J,e("p",null,[t("Allyoutoo, Aragas, Bancey, bearbear12345, corbanmailloux, Daenges, dbear20, dogwatch, initsuj, JamieSinn, justcool393, lokulin, maxpowa, medxo, milutinke, Pokechu22, ReinforceZwei, repository, TheMeq, TheSnoozer, vkorn, v1RuX, yunusemregul, ZizzyDizzyMC, BruceChenQAQ, bradbyte "),e("em",null,[t("... And all the "),e("a",O,[t("GitHub contributors"),o(i)]),t("!")])]),Z,e("p",null,[t("The source code is available at "),e("a",U,[t("Github Repository"),o(i)])]),K,e("p",null,[t("More info about CDDL-1.0: "),e("a",Q,[t("http://qstuff.blogspot.fr/2007/04/why-cddl.html"),o(i)])]),e("p",null,[t("Full license at "),e("a",V,[t("http://opensource.org/licenses/CDDL-1.0"),o(i)])])])}const ee=l(d,[["render",W],["__file","index.html.vue"]]);export{ee as default};
