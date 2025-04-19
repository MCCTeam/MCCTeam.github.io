import{_ as a,r as t,o as r,c as o,a as n,b as e,d as s,w as d,e as c}from"./app.cf5feacd.js";const p={},h=n("h1",{id:"ein-simples-skript-erstellen",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ein-simples-skript-erstellen","aria-hidden":"true"},"#"),e(" Ein simples Skript erstellen")],-1),m={href:"https://mccteam.github.io/guide/usage.html#internal-commands",target:"_blank",rel:"noopener noreferrer"},u=n("code",null,"/help",-1),b=n("code",null,"#",-1),_=c(`<p>Appvariablen die mit dem set-Befehl oder im [AppVars] INI Abschnitt definiert wurden, können verwendet werden. Die folgenden nur-lesen Variablen können benutzt werden: <code>%username%, %login%, %serverip%, %serverport%, %datetime%</code></p><h2 id="beispiel" tabindex="-1"><a class="header-anchor" href="#beispiel" aria-hidden="true">#</a> Beispiel</h2><p><code>beispiel-skript.txt</code>: Sende eine Hallo-Nachricht, warte 60 Sekunden und verlasse den Server.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;"># Dies ist ein Beispiel-Skript für den Minecraft Konsolen Client</span></span>
<span class="line"><span style="color:#D4D4D4;"># Jede Zeile die mit &quot;#&quot; beginnt wird ignoriert und wie ein Kommentar behandelt.</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span>
<span class="line"><span style="color:#D4D4D4;">send Hallo Welt! Ich bin ein Bot, der mit dem Minecraft Konsolen Client programmiert wurde.</span></span>
<span class="line"><span style="color:#D4D4D4;">wait 60</span></span>
<span class="line"><span style="color:#D4D4D4;">send Verlasse jetzt. Tschüss :)</span></span>
<span class="line"><span style="color:#D4D4D4;">exit</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),f={href:"https://github.com/MCCTeam/Minecraft-Console-Client/tree/master/MinecraftClient/config",target:"_blank",rel:"noopener noreferrer"};function v(D,g){const i=t("ExternalLinkIcon"),l=t("RouterLink");return r(),o("div",null,[h,n("p",null,[e("Ein simples Skript ist eine Text-Datei mit einem Befehl pro Zeile. Siehe "),n("a",m,[e("Interne Befehle"),s(i)]),e(" Sektion oder Typ "),u,e(" in der Konsole um vefügbare Befehle zu sehen. Jede Zeile die mit "),b,e(" bginnt wird ignoriert und wie ein Kommentar behandelt.")]),_,n("p",null,[e("Besuche "),n("a",f,[e("Beispiel-Skripte"),s(i)]),e(" um mehr Beispiele zu sehen.")]),n("p",null,[e("Wenn du fortgeschrittene Funktionen sehen willst, besuche"),s(l,{to:"/l10n/de/guide/creating-bots.html"},{default:d(()=>[e("Chatbots erstellen")]),_:1})])])}const x=a(p,[["render",v],["__file","creating-text-script.html.vue"]]);export{x as default};
