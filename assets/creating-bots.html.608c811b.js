import{_ as o,r as t,o as p,c as i,a as s,b as n,d as e,e as l}from"./app.cdd6451b.js";const c={},r=l('<h1 id="創造屬於你的-chat-bots" tabindex="-1"><a class="header-anchor" href="#創造屬於你的-chat-bots" aria-hidden="true">#</a> 創造屬於你的 Chat Bots</h1><ul><li><a href="#notes">備註</a></li><li><a href="#requirements">需求</a></li><li><a href="#quick-introduction">快速入門</a></li><li><a href="#examples">範例</a></li><li><a href="#c#-api">C# 的應用程式介面</a></li></ul><h2 id="備註" tabindex="-1"><a class="header-anchor" href="#備註" aria-hidden="true">#</a> 備註</h2>',3),D={class:"custom-container tip"},d=s("p",{class:"custom-container-title"},"小提示",-1),y={href:"https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/Scripting/ChatBot.cs",target:"_blank",rel:"noopener noreferrer"},C=s("a",{href:"#examples"},"Examples",-1),h=s("p",null,[s("strong",null,"Minecraft Console Client"),n(" 擁有豐富的 C# API 可以用來創造許多擁有複雜功能的Chat Bots (需要建立可行的功能呦)，因為這是普通淺層的按鍵腳本難以做到的。")],-1),u=s("h2",{id:"需求",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#需求","aria-hidden":"true"},"#"),n(" 需求")],-1),m=s("ul",null,[s("li",null,"掌握基礎的 C# ( C Sharp ) 程式語言 。"),s("li",null,"使用程式編輯器的經驗")],-1),v=s("p",null,"如果您不熟悉 C# 程式語言，可以看看下方，我們為您準備了一些簡單的課程，讓您一邊構思自己想寫的功能，一邊補足在寫Chat Bot 時必要的知識，祝您在學習 C# 程式的路上順利<3",-1),b=s("p",null,"速成課程 :",-1),g={href:"https://www.youtube.com/watch?v=67oWw9TanOk&list=PL82C6-O4XrHfoN_Y4MwGvJz5BntiL0z0D",target:"_blank",rel:"noopener noreferrer"},f=s("p",null,"更多詳細教學 :",-1),E={href:"https://www.youtube.com/playlist?list=PLdo4fOcmZ0oVxKLQCHpiUWun7vlJJvUiN",target:"_blank",rel:"noopener noreferrer"},B={href:"https://docs.microsoft.com/en-us/dotnet/csharp/",target:"_blank",rel:"noopener noreferrer"},_=l(`<h2 id="快速入門" tabindex="-1"><a class="header-anchor" href="#快速入門" aria-hidden="true">#</a> 快速入門</h2><p>快速入門是建立在您有C#的知識上🙏</p><div class="custom-container tip"><p class="custom-container-title">小提示</p><p><strong>在這裡，我們將“聊天機器人”和“腳本”兩個術語，進行互換</strong></p></div><p>創建一個空白的資料夾和一個名為 <code>ExampleChatBot.cs</code>的檔案，把兩者都放在跟MCC啟動器同一個位置的資料夾。</p><p>可以貼上以下的範例程式碼在 ExampleChatBot.cs 中</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">//MCCScript 1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">MCC</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">LoadBot</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">ExampleChatBot</span><span style="color:#D4D4D4;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">//MCCScript Extensions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// The code and comments above are defining a &quot;Script Metadata&quot; section</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">// Every single chat bot (script) must be a class which extends the ChatBot class.</span></span>
<span class="line"><span style="color:#6A9955;">// Your class must be instantiates in the &quot;Script Metadata&quot; section and passed to MCC.LoadBot function.</span></span>
<span class="line"><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">ExampleChatBot</span><span style="color:#D4D4D4;"> : </span><span style="color:#4EC9B0;">ChatBot</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// This method will be called when the script has been initialized for the first time, it&#39;s called only once</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// Here you can initialize variables, eg. Dictionaries. 等...</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">public</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">override</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">void</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">Initialize</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#DCDCAA;">LogToConsole</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&quot;An example Chat Bot has been initialized!&quot;</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// This is a function that will be run when we get a chat message from a server</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// In this example it just detects the type of the message and prints it out</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">public</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">override</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">void</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">GetText</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">string</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">text</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">string</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">string</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">username</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&quot;&quot;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">text</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">GetVerbatim</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">text</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#DCDCAA;">IsPrivateMessage</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">text</span><span style="color:#D4D4D4;">, </span><span style="color:#569CD6;">ref</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">, </span><span style="color:#569CD6;">ref</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">username</span><span style="color:#D4D4D4;">))</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#DCDCAA;">LogToConsole</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">username</span><span style="color:#D4D4D4;"> + </span><span style="color:#CE9178;">&quot; has sent you a private message: &quot;</span><span style="color:#D4D4D4;"> + </span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#C586C0;">else</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (</span><span style="color:#DCDCAA;">IsChatMessage</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">text</span><span style="color:#D4D4D4;">, </span><span style="color:#569CD6;">ref</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">, </span><span style="color:#569CD6;">ref</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">username</span><span style="color:#D4D4D4;">))</span></span>
<span class="line"><span style="color:#D4D4D4;">        {</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#DCDCAA;">LogToConsole</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">username</span><span style="color:#D4D4D4;"> + </span><span style="color:#CE9178;">&quot; has said: &quot;</span><span style="color:#D4D4D4;"> + </span><span style="color:#9CDCFE;">message</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"><span style="color:#D4D4D4;">        }</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>啟動MCC，連接到伺服器並輸入此指令: <code>/script ExampleChatBot.cs</code>.</p><p>如果一切正常順利，您將將可以看到: <code>[Example Chat Bot] An example Chat Bot has been initialised!</code> 的訊息顯示在您的指令窗中。</p><h3 id="chat-bots-的內部結構" tabindex="-1"><a class="header-anchor" href="#chat-bots-的內部結構" aria-hidden="true">#</a> Chat Bots 的內部結構</h3><p>Chat Bot (Script)的程式結構是您要遵守的:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">&lt;script metadata&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;chat bot class&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Script Metadata</strong> is a section with a custom format that mixes in C# with our format using comments.</p><p>Every single Chat Bot (Script) must have this section at the beginning in order to work.</p><h3 id="script-的位元組數據格式" tabindex="-1"><a class="header-anchor" href="#script-的位元組數據格式" aria-hidden="true">#</a> Script 的位元組數據格式</h3><p><code>//MCCScript 1.0</code> marks the beginning of the <strong>Script Metadata</strong> section, this must always be on the first line or the Chat Bot (Script) will not load and will throw an error.</p><p><code>//MCCScript Extensions</code> marks the end of the <strong>Script Metadata</strong> section, this must be defined before a Chat Bot (Script) class.</p><p>In order for your Chat Bot (Script) to properly load in-between the <code>//MCCScript 1.0</code> and the <code>//MCCScript Extensions</code> lines you must instantiate your Chat Bot (Script) class and pass it to the <code>MCC.LoadBot</code> function.</p><p>Example code:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">MCC.LoadBot(new YourChatBotClassNameHere());</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Script Metadata</strong> section allows for including C# packages and libraries with: <code>//using &lt;namespace&gt;</code> and <code>/dll &lt;dll name&gt;</code>.</p><div class="custom-container tip"><p class="custom-container-title">小提示</p><p><strong>Avoid adding whitespace between <code>//</code> and keywords</strong></p></div><p>By the default the following packages are loaded:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">using</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">System</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">using</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">System</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">Collections</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">Generic</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">using</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">System</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">Text</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">RegularExpressions</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">using</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">System</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">Linq</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">using</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">System</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">Text</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">using</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">System</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">IO</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">using</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">System</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">Net</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">using</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">System</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">Threading</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">using</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">MinecraftClient</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">using</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">MinecraftClient</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">Mapping</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#C586C0;">using</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">MinecraftClient</span><span style="color:#D4D4D4;">.</span><span style="color:#4EC9B0;">Inventory</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">//using System.Collections.Immutable</span></span>
<span class="line"><span style="color:#6A9955;">//dll MyDll.dll</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>這些是範例</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">//MCCScript 1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">//using System.Collections.Immutable</span></span>
<span class="line"><span style="color:#6A9955;">//dll MyDll.dll</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">MCC</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">LoadBot</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">ExampleChatBot</span><span style="color:#D4D4D4;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">//MCCScript Extensions</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chat-bot-的class文件" tabindex="-1"><a class="header-anchor" href="#chat-bot-的class文件" aria-hidden="true">#</a> Chat Bot 的Class文件</h3><p>After the end of the <strong>Script Metadata</strong> section, you basically can define any number of classes you like, the only limitation is that the main class of your Chat Bot (Script) must extend <code>ChatBot</code> class.</p><p>There are no required methods, everything is optional.</p><p>When the Chat Bot (Script) has been initialized for the first time the <code>Initialize</code> method will be called.</p><p>In it you can initialize variables, eg. Dictionaries, etc..</p><div class="custom-container tip"><p class="custom-container-title">小提示</p><p><strong>For allocating resources like a database connection, we recommend allocating them in <code>AfterGameJoined</code> and freeing them in <code>OnDisconnect</code></strong></p></div>`,33),x=s("h2",{id:"範例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#範例","aria-hidden":"true"},"#"),n(" 範例")],-1),M={href:"https://github.com/MCCTeam/Minecraft-Console-Client/tree/master/MinecraftClient/ChatBots",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/MCCTeam/Minecraft-Console-Client/tree/master/MinecraftClient/config",target:"_blank",rel:"noopener noreferrer"},w=s("h2",{id:"c-的應用程式介面",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#c-的應用程式介面","aria-hidden":"true"},"#"),n(" C# 的應用程式介面")],-1),S={href:"https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/Scripting/ChatBot.cs",target:"_blank",rel:"noopener noreferrer"},k=s("p",null,"Each method is well documented with standard C# documentation comments.",-1),q=s("p",null,"In the future we will make a script to auto-generate this section based on the documentation in the code.",-1);function F(T,I){const a=t("ExternalLinkIcon");return p(),i("div",null,[r,s("div",D,[d,s("p",null,[s("strong",null,[n("目前此頁只寫了Chat Bot API的基礎知識，你掌握這些基礎便可以製作基本的 Chat Bot 了。 如果想了解更多，可以點開這裡 "),s("a",y,[n("ChatBot.cs"),e(a)]),n(" 和範例 "),C,n(". 此頁將在未來持續更新<3")])])]),h,u,m,v,b,s("ul",null,[s("li",null,[s("a",g,[n("C# Crash Course playlist by Teddy Smit"),e(a)])])]),f,s("ul",null,[s("li",null,[s("a",E,[n("Learn C# Youtube Playlist by Microsoft"),e(a)])]),s("li",null,[s("a",B,[n("Getting started with C# (An index of tutorials and the documentation) by Microsoft"),e(a)])])]),_,n(". "),x,s("p",null,[n("You can find a lot of examples in our Git Hub Repository at "),s("a",M,[n("ChatBots"),e(a)]),n(" and "),s("a",A,[n("config"),e(a)]),n(".")]),w,s("p",null,[n("As of the time of writing, the C# API has been changed in forks that are yet to be merged, so for now you can use the "),s("a",S,[n("ChatBot.cs"),e(a)]),n(" for reference.")]),k,q])}const z=o(c,[["render",F],["__file","creating-bots.html.vue"]]);export{z as default};