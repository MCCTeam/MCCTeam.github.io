const { defaultTheme } = require("vuepress");
const { backToTopPlugin } = require("@vuepress/plugin-back-to-top");
const { externalLinkIconPlugin } = require("@vuepress/plugin-external-link-icon");
const { nprogressPlugin } = require("@vuepress/plugin-nprogress");
const { searchPlugin } = require("@vuepress/plugin-search");

module.exports = {
    base: "/",
    title: "Minecraft Console Client",
    description: require("../../package"),
    head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
        ["link", { rel: "icon", href: "../../favicon.ico" }],
    ],
    theme: defaultTheme({
        logo: "http://i.pics.rs/LLDhE.png",

        navbar: [
            {
                text: "About & Features",
                link: "/guide/",
            },

            {
                text: "Installation",
                link: "/guide/installation.md",
            },

            {
                text: "Usage",
                link: "/guide/usage.md",
            },

            {
                text: "Configuration",
                link: "/guide/configuration.md",
            },

            {
                text: "Chat Bots",
                link: "/guide/chat-bots.md",
            },
        ],

        sidebar: ["/guide/README.md", "/guide/installation.md", "/guide/usage.md", "/guide/configuration.md", "/guide/chat-bots.md", "/guide/creating-bots.md", "/guide/contibuting.md"],

        repo: "https://github.com/MCCTeam/Minecraft-Console-Client",

        search: true,
        searchMaxSuggestions: 10,
    }),

    plugins: [
        backToTopPlugin(),
        externalLinkIconPlugin(),
        nprogressPlugin(),
        searchPlugin({
            maxSuggestions: 15,

            hotKeys: ["s", "/"],
            locales: {
                "/": {
                    placeholder: "Search",
                },
            },
        }),
    ],
};
