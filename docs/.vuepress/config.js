const { defaultTheme } = require("vuepress");
const { backToTopPlugin } = require("@vuepress/plugin-back-to-top");
const { externalLinkIconPlugin } = require("@vuepress/plugin-external-link-icon");
const { nprogressPlugin } = require("@vuepress/plugin-nprogress");

module.exports = {
    base: "/docs/",
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
        ],

        sidebar: ["/guide/README.md", "/guide/installation.md", "/guide/usage.md", "/guide/configuration.md"],

        repo: "https://github.com/MCCTeam/Minecraft-Console-Client",
    }),

    plugins: [backToTopPlugin(), externalLinkIconPlugin(), nprogressPlugin()],
};
