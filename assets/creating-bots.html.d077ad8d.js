import{_ as o,r as t,o as p,c as i,a as s,b as n,d as e,e as l}from"./app.b292e524.js";const r={},c=l('<h1 id="creating-chat-bots" tabindex="-1"><a class="header-anchor" href="#creating-chat-bots" aria-hidden="true">#</a> Creating Chat Bots</h1><ul><li><a href="#notes">Notes</a></li><li><a href="#requirements">Requirements</a></li><li><a href="#quick-introduction">Quick Introduction</a></li><li><a href="#examples">Examples</a></li><li><a href="#c#-api">C# API</a></li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2>',3),d={class:"custom-container tip"},D=s("p",{class:"custom-container-title"},"Wskazówka",-1),y={href:"https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/Scripting/ChatBot.cs",target:"_blank",rel:"noopener noreferrer"},u=s("a",{href:"#examples"},"Examples",-1),h=s("p",null,[s("strong",null,"Minecraft Console Client"),n(" has a rich C# API which allows you to create Chat Bots (effectively plugins) which can help you create complex automations which normal scripts may not be able to do.")],-1),C=s("h2",{id:"requirements",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),n(" Requirements")],-1),m=s("ul",null,[s("li",null,"A basic knowledge of C# programming language"),s("li",null,"A text editor")],-1),v=s("p",null,"If you're not familiar with the C# programming language, we suggest taking a look at the following resources:",-1),b=s("p",null,"Crash courses:",-1),g={href:"https://www.youtube.com/watch?v=67oWw9TanOk&list=PL82C6-O4XrHfoN_Y4MwGvJz5BntiL0z0D",target:"_blank",rel:"noopener noreferrer"},f=s("p",null,"More in-depth:",-1),E={href:"https://www.youtube.com/playlist?list=PLdo4fOcmZ0oVxKLQCHpiUWun7vlJJvUiN",target:"_blank",rel:"noopener noreferrer"},B={href:"https://docs.microsoft.com/en-us/dotnet/csharp/",target:"_blank",rel:"noopener noreferrer"},x=l(`<h2 id="quick-introduction" tabindex="-1"><a class="header-anchor" href="#quick-introduction" aria-hidden="true">#</a> Quick Introduction</h2><p>This introduction assumes that you have the basic knowledge of C#.</p><div class="custom-container tip"><p class="custom-container-title">Wskazówka</p><p><strong>Here we will use terms Chat Bot and Script interchangeably</strong></p></div><p>Create a new empty file and name it <code>ExampleChatBot.cs</code> in the same folder where you have your MCC installed.</p><p>Paste the following example code:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">//MCCScript 1.0</span></span>
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
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// Here you can initialize variables, eg. Dictionaries. etc...</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Start MCC, connect to a server and run the following internal command: <code>/script ExampleChatBot.cs</code>.</p><p>If you did everything right you should see: <code>[Example Chat Bot] An example Chat Bot has been initialised!</code> message appear in your console log.</p><h3 id="structure-of-chat-bots" tabindex="-1"><a class="header-anchor" href="#structure-of-chat-bots" aria-hidden="true">#</a> Structure of Chat Bots</h3><p>Chat Bot (Script) structure is the following:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">&lt;script metadata&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;chat bot class&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Script Metadata</strong> is a section with a custom format that mixes in C# with our format using comments.</p><p>Every single Chat Bot (Script) must have this section at the beginning in order to work.</p><h3 id="script-metadata-format" tabindex="-1"><a class="header-anchor" href="#script-metadata-format" aria-hidden="true">#</a> Script Metadata Format</h3><p><code>//MCCScript 1.0</code> marks the beginning of the <strong>Script Metadata</strong> section, this must always be on the first line or the Chat Bot (Script) will not load and will throw an error.</p><p><code>//MCCScript Extensions</code> marks the end of the <strong>Script Metadata</strong> section, this must be defined before a Chat Bot (Script) class.</p><p>In order for your Chat Bot (Script) to properly load in-between the <code>//MCCScript 1.0</code> and the <code>//MCCScript Extensions</code> lines you must instantiate your Chat Bot (Script) class and pass it to the <code>MCC.LoadBot</code> function.</p><p>Example code:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">MCC.LoadBot(new YourChatBotClassNameHere());</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Script Metadata</strong> section allows for including C# packages and libraries with: <code>//using &lt;namespace&gt;</code> and <code>/dll &lt;dll name&gt;</code>.</p><div class="custom-container tip"><p class="custom-container-title">Wskazówka</p><p><strong>Avoid adding whitespace between <code>//</code> and keywords</strong></p></div><p>By the default the following packages are loaded:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">using</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">System</span><span style="color:#D4D4D4;">;</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">//using System.Collections.Immutable</span></span>
<span class="line"><span style="color:#6A9955;">//dll MyDll.dll</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Full Example:</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">//MCCScript 1.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">//using System.Collections.Immutable</span></span>
<span class="line"><span style="color:#6A9955;">//dll MyDll.dll</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">MCC</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">LoadBot</span><span style="color:#D4D4D4;">(</span><span style="color:#569CD6;">new</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">ExampleChatBot</span><span style="color:#D4D4D4;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">//MCCScript Extensions</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chat-bot-class" tabindex="-1"><a class="header-anchor" href="#chat-bot-class" aria-hidden="true">#</a> Chat Bot Class</h3><p>After the end of the <strong>Script Metadata</strong> section, you basically can define any number of classes you like, the only limitation is that the main class of your Chat Bot (Script) must extend <code>ChatBot</code> class.</p><p>There are no required methods, everything is optional.</p><p>When the Chat Bot (Script) has been initialized for the first time the <code>Initialize</code> method will be called.</p><p>In it you can initialize variables, eg. Dictionaries, etc..</p><div class="custom-container tip"><p class="custom-container-title">Wskazówka</p><p><strong>For allocating resources like a database connection, we recommend allocating them in <code>AfterGameJoined</code> and freeing them in <code>OnDisconnect</code></strong></p></div>`,33),_=s("h2",{id:"examples",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),n(" Examples")],-1),w={href:"https://github.com/MCCTeam/Minecraft-Console-Client/tree/master/MinecraftClient/ChatBots",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/MCCTeam/Minecraft-Console-Client/tree/master/MinecraftClient/config",target:"_blank",rel:"noopener noreferrer"},A=s("h2",{id:"c-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#c-api","aria-hidden":"true"},"#"),n(" C# API")],-1),M={href:"https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/Scripting/ChatBot.cs",target:"_blank",rel:"noopener noreferrer"},S=s("p",null,"Each method is well documented with standard C# documentation comments.",-1),q=s("p",null,"In the future we will make a script to auto-generate this section based on the documentation in the code.",-1);function I(F,T){const a=t("ExternalLinkIcon");return p(),i("div",null,[c,s("div",d,[D,s("p",null,[s("strong",null,[n("For now this page contains only the bare basics of the Chat Bot API, enough of details to teach you how to make basic Chat Bots. For more details you need to take a look at the "),s("a",y,[n("ChatBot.cs"),e(a)]),n(" and "),u,n(". This page will be improved in the future.")])])]),h,C,m,v,b,s("ul",null,[s("li",null,[s("a",g,[n("C# Crash Course playlist by Teddy Smit"),e(a)])])]),f,s("ul",null,[s("li",null,[s("a",E,[n("Learn C# Youtube Playlist by Microsoft"),e(a)])]),s("li",null,[s("a",B,[n("Getting started with C# (An index of tutorials and the documentation) by Microsoft"),e(a)])])]),x,n(". "),_,s("p",null,[n("You can find a lot of examples in our Git Hub Repository at "),s("a",w,[n("ChatBots"),e(a)]),n(" and "),s("a",k,[n("config"),e(a)]),n(".")]),A,s("p",null,[n("As of the time of writing, the C# API has been changed in forks that are yet to be merged, so for now you can use the "),s("a",M,[n("ChatBot.cs"),e(a)]),n(" for reference.")]),S,q])}const z=o(r,[["render",I],["__file","creating-bots.html.vue"]]);export{z as default};
