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
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fafafa",
          lightgray: "#ede8f5",
          gray: "#9b8bb0",
          darkgray: "#3d3050",
          dark: "#1a0f2e",
          secondary: "#7B5EA7",
          tertiary: "#a487d4",
          highlight: "rgba(123, 94, 167, 0.15)",
          textHighlight: "#7B5EA755",
        },
        darkMode: {
          light: "#0d0d0f",
          lightgray: "#1e1a2e",
          gray: "#6b5b95",
          darkgray: "#c4b8d9",
          dark: "#f0ecf8",
          secondary: "#9b7cc4",
          tertiary: "#7B5EA7",
          highlight: "rgba(107, 91, 149, 0.15)",
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
        enableSiteMap: false,
        enableRSS: false,
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