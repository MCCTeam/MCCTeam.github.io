import{_ as o,r as t,o as l,c as r,a as n,b as e,d as s,w as c,e as d}from"./app.b292e524.js";const p={},m=n("h1",{id:"creating-simple-script",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#creating-simple-script","aria-hidden":"true"},"#"),e(" Creating Simple Script")],-1),u={href:"https://mccteam.github.io/guide/usage.html#internal-commands",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"/help",-1),_=n("code",null,"#",-1),g=d(`<p>Application variables defined using the set command or [AppVars] INI section can be used. The following read-only variables can also be used: <code>%username%, %login%, %serverip%, %serverport%, %datetime%</code></p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p><code>sample-script.txt</code>: Send a hello message, wait 60 seconds and disconnect from server.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;"># This is a sample script for Minecraft Console Client</span></span>
<span class="line"><span style="color:#D4D4D4;"># Any line beginning with &quot;#&quot; is ignored and treated as a comment.</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">send Hello World! I&#39;m a bot scripted using Minecraft Console Client.</span></span>
<span class="line"><span style="color:#D4D4D4;">wait 60</span></span>
<span class="line"><span style="color:#D4D4D4;">send Now quitting. Bye :)</span></span>
<span class="line"><span style="color:#D4D4D4;">exit</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v={href:"https://github.com/MCCTeam/Minecraft-Console-Client/tree/master/MinecraftClient/config",target:"_blank",rel:"noopener noreferrer"};function b(f,D){const a=t("ExternalLinkIcon"),i=t("RouterLink");return l(),r("div",null,[m,n("p",null,[e("A simple script is a text file with one command per line. See "),n("a",u,[e("Internal Commands"),s(a)]),e(" section or type "),h,e(" in the console to see available commands. Any line beginning with "),_,e(" is ignored and treated as a comment.")]),g,n("p",null,[e("Go to "),n("a",v,[e("example scripts"),s(a)]),e(" to see more example.")]),n("p",null,[e("If you want need advanced functions, please see "),s(i,{to:"/l10n/cs/guide/creating-bots.html"},{default:c(()=>[e("Creating Chat Bots")]),_:1})])])}const y=o(p,[["render",b],["__file","creating-text-script.html.vue"]]);export{y as default};
