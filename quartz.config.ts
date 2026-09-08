import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Yangton // Security Research",
    pageTitleSuffix: " · AppSec",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "yangton.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "IBM Plex Mono",
        body: "IBM Plex Mono",
        code: "JetBrains Mono",
      },
      colors: {
        
        lightMode: {
          light: "#f7f5fb",
          lightgray: "#e2dcee",
          gray: "#8a7a9e",
          darkgray: "#3a2d51",
          dark: "#170f26",
          secondary: "#6b4f96",
          tertiary: "#a487d4",
          highlight: "rgba(123, 94, 167, 0.15)",
          textHighlight: "#7B5EA755",
        },
        darkMode: {
          light: "#0a0a0c",        
          lightgray: "#221d33",    
          gray: "#7d6ea3",         
          darkgray: "#c9bce3",     
          dark: "#eee7fb",         
          secondary: "#9b7cc4",    
          tertiary: "#7B5EA7",     
          highlight: "rgba(123, 94, 167, 0.15)",
          textHighlight: "#6b5b9555",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config