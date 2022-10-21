import{_ as o,o as i,c,a as n,b as e,e as t,d as s,r as l}from"./app.d5b8fb94.js";const p={},r=t('<h1 id="creating-chat-bots" tabindex="-1"><a class="header-anchor" href="#creating-chat-bots" aria-hidden="true">#</a> Creating Chat Bots</h1><ul><li><a href="#notes">Notes</a></li><li><a href="#requirements">Requirements</a></li><li><a href="#quick-introduction">Quick Introduction</a></li><li><a href="#examples">Examples</a></li><li><a href="#c#-api">C# API</a></li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2>',3),d=s("\u2139\uFE0F NOTE: For now this page contains only the bare basics of the Chat Bot API, enough of details to teach you how to make basic Chat Bots. For more details you need to take a look at the "),u={href:"https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/Scripting/ChatBot.cs",target:"_blank",rel:"noopener noreferrer"},h=s("ChatBot.cs"),m=s(" and "),k=n("a",{href:"#examples"},"Examples",-1),v=s(". This page will be improved in the future."),b=n("p",null,[n("strong",null,"Minecraft Console Client"),s(" has a rich C# API which allows you to create Chat Bots (effectively plugins) which can help you create complex automations which normal scripts may not be able to do.")],-1),g=n("h2",{id:"requirements",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),s(" Requirements")],-1),f=n("ul",null,[n("li",null,"A basic knowledge of C# programming language"),n("li",null,"A text editor")],-1),C=n("p",null,"If you're not familiar with the C# programming language, we suggest taking a look at the following resources:",-1),_=n("p",null,"Crash courses:",-1),y={href:"https://learn.microsoft.com/en-us/shows/csharp-fundamentals-for-absolute-beginners/",target:"_blank",rel:"noopener noreferrer"},w=s("C# Fundamentals for Absolute Beginners by Bob Tabor ("),x=n("strong",null,"Recommended",-1),M=s(")"),B={href:"https://www.youtube.com/playlist?list=PLdo4fOcmZ0oVxKLQCHpiUWun7vlJJvUiN",target:"_blank",rel:"noopener noreferrer"},S=s("Learn C# Youtube Playlist by Microsoft"),q=n("p",null,"More in-depth:",-1),E={href:"https://docs.microsoft.com/en-us/dotnet/csharp/",target:"_blank",rel:"noopener noreferrer"},T=s("Getting started with C# (An index of tutorials and the documentation) by Microsoft"),I={href:"https://www.youtube.com/watch?v=67oWw9TanOk&list=PL82C6-O4XrHfoN_Y4MwGvJz5BntiL0z0D",target:"_blank",rel:"noopener noreferrer"},L=s("C# Course playlist by Teddy Smit ("),A=n("em",null,"Recommended if you already know some programming",-1),N=s(")"),P=t(`<h2 id="quick-introduction" tabindex="-1"><a class="header-anchor" href="#quick-introduction" aria-hidden="true">#</a> Quick Introduction</h2><p>This introduction assumes that you have the basic knowledge of C#.</p><blockquote><p><strong>\u2139\uFE0F NOTE: Here we will use terms Chat Bot and Script interchangeably</strong></p></blockquote><p>Create a new empty file and name it <code>ExampleChatBot.cs</code> in the same folder where you have your MCC installed.</p><p>Paste the following example code:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">//MCCScript 1.0</span>

MCC<span class="token punctuation">.</span><span class="token function">LoadBot</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ExampleChatBot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//MCCScript Extensions</span>

<span class="token comment">// The code and comments above are defining a &quot;Script Metadata&quot; section</span>

<span class="token comment">// Every single chat bot (script) must be a class which extends the ChatBot class.</span>
<span class="token comment">// Your class must be instantiates in the &quot;Script Metadata&quot; section and passed to MCC.LoadBot function.</span>
<span class="token keyword">class</span> <span class="token class-name">ExampleChatBot</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">ChatBot</span></span>
<span class="token punctuation">{</span>
    <span class="token comment">// This method will be called when the script has been initialized for the first time, it&#39;s called only once</span>
    <span class="token comment">// Here you can initialize variables, eg. Dictionaries. etc...</span>
	<span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">LogToConsole</span><span class="token punctuation">(</span><span class="token string">&quot;An example Chat Bot has been initialized!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token comment">// This is a function that will be run when we get a chat message from a server</span>
    <span class="token comment">// In this example it just detects the type of the message and prints it out</span>
	<span class="token keyword">public</span> <span class="token keyword">override</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">GetText</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> text<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token class-name"><span class="token keyword">string</span></span> message <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
		<span class="token class-name"><span class="token keyword">string</span></span> username <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
		text <span class="token operator">=</span> <span class="token function">GetVerbatim</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">IsPrivateMessage</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token keyword">ref</span> message<span class="token punctuation">,</span> <span class="token keyword">ref</span> username<span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token function">LogToConsole</span><span class="token punctuation">(</span>username <span class="token operator">+</span> <span class="token string">&quot; has sent you a private message: &quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">IsChatMessage</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token keyword">ref</span> message<span class="token punctuation">,</span> <span class="token keyword">ref</span> username<span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token function">LogToConsole</span><span class="token punctuation">(</span>username <span class="token operator">+</span> <span class="token string">&quot; has said: &quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Start MCC, connect to a server and run the following internal command: <code>/script ExampleChatBot.cs</code>.</p><p>If you did everything right you should see: <code>[Example Chat Bot] An example Chat Bot has been initialised!</code> message appear in your console log.</p><h3 id="structure-of-chat-bots" tabindex="-1"><a class="header-anchor" href="#structure-of-chat-bots" aria-hidden="true">#</a> Structure of Chat Bots</h3><p>Chat Bot (Script) structure is the following:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script metadata&gt;
&lt;chat bot class&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Script Metadata</strong> is a section with a custom format that mixes in C# with our format using comments. Every single Chat Bot (Script) must have this section at the beginning in order to work.</p><h3 id="script-metadata-format" tabindex="-1"><a class="header-anchor" href="#script-metadata-format" aria-hidden="true">#</a> Script Metadata Format</h3><p><code>//MCCScript 1.0</code> marks the beginning of the <strong>Script Metadata</strong> section, this must always be on the first line or the Chat Bot (Script) will not load and will throw an error.</p><p><code>//MCCScript Extensions</code> marks the end of the <strong>Script Metadata</strong> section, this must be defined before a Chat Bot (Script) class.</p><p>In order for your Chat Bot (Script) to properly load in-between the <code>//MCCScript 1.0</code> and the <code>//MCCScript Extensions</code> lines you must instantiate your Chat Bot (Script) class and pass it to the <code>MCC.LoadBot</code> function.</p><p>Example code:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>MCC.LoadBot(new YourChatBotClassNameHere());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Script Metadata</strong> section allows for including C# packages and libraries with: <code>//using &lt;namespace&gt;</code> and <code>/dll &lt;dll name&gt;</code>.</p><blockquote><p><strong>\u2139\uFE0F NOTE: Avoid adding whitespace between <code>//</code> and keywords</strong></p></blockquote><p>By the default the following packages are loaded:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Text<span class="token punctuation">.</span>RegularExpressions</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Linq</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Text</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>IO</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Net</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">MinecraftClient</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">MinecraftClient<span class="token punctuation">.</span>Mapping</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">MinecraftClient<span class="token punctuation">.</span>Inventory</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">//using System.Collections.Immutable</span>
<span class="token comment">//dll MyDll.dll</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Full Example:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">//MCCScript 1.0</span>

<span class="token comment">//using System.Collections.Immutable</span>
<span class="token comment">//dll MyDll.dll</span>

MCC<span class="token punctuation">.</span><span class="token function">LoadBot</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ExampleChatBot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//MCCScript Extensions</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="chat-bot-class" tabindex="-1"><a class="header-anchor" href="#chat-bot-class" aria-hidden="true">#</a> Chat Bot Class</h3><p>After the end of the <strong>Script Metadata</strong> section, you basically can define any number of classes you like, the only limitation is that the main class of your Chat Bot (Script) must extend <code>ChatBot</code> class.</p><p>There are no required methods, everything is optional.</p><p>When the Chat Bot (Script) has been initialized for the first time the <code>Initialize</code> method will be called. In it you can initialize variables, eg. Dictionaries, etc..</p><blockquote><p><strong>\u2139\uFE0F NOTE: For allocating resources like a database connection, we recommend allocating them in <code>AfterGameJoined</code> and freeing them in <code>OnDisconnect</code></strong>.</p></blockquote><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2>`,32),z=s("You can find a lot of examples in our Git Hub Repository at "),O={href:"https://github.com/MCCTeam/Minecraft-Console-Client/tree/master/MinecraftClient/ChatBots",target:"_blank",rel:"noopener noreferrer"},G=s("ChatBots"),D=s(" and "),F={href:"https://github.com/MCCTeam/Minecraft-Console-Client/tree/master/MinecraftClient/config",target:"_blank",rel:"noopener noreferrer"},H=s("config"),R=s("."),V=n("h2",{id:"c-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#c-api","aria-hidden":"true"},"#"),s(" C# API")],-1),Y=s("As of the time of writing, the C# API has been changed in forks that are yet to be merged, so for now you can use the "),J={href:"https://github.com/MCCTeam/Minecraft-Console-Client/blob/master/MinecraftClient/Scripting/ChatBot.cs",target:"_blank",rel:"noopener noreferrer"},Q=s("ChatBot.cs"),W=s(" for reference."),U=n("p",null,"Each method is well documented with standard C# documentation comments.",-1),j=n("p",null,"In the future we will make a script to auto-generate this section based on the documentation in the code.",-1);function K(X,Z){const a=l("ExternalLinkIcon");return i(),c("div",null,[r,n("blockquote",null,[n("p",null,[n("strong",null,[d,n("a",u,[h,e(a)]),m,k,v])])]),b,g,f,C,_,n("ul",null,[n("li",null,[n("a",y,[w,x,M,e(a)])]),n("li",null,[n("a",B,[S,e(a)])])]),q,n("ul",null,[n("li",null,[n("a",E,[T,e(a)])]),n("li",null,[n("a",I,[L,A,N,e(a)])])]),P,n("p",null,[z,n("a",O,[G,e(a)]),D,n("a",F,[H,e(a)]),R]),V,n("p",null,[Y,n("a",J,[Q,e(a)]),W]),U,j])}var nn=o(p,[["render",K],["__file","creating-bots.html.vue"]]);export{nn as default};