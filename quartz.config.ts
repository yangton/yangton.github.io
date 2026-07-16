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
          light: "#faf9fc",       // tło strony — leciutki fioletowy odcień zamiast płaskiej szarości
          lightgray: "#e6e0f0",   // obramowania/dividery — wyraźnie jaśniejsze niż "gray"
          gray: "#8a7a9e",        // przygaszony tekst (daty, opisy) — teraz odróżnialny od lightgray
          darkgray: "#4a3d61",    // nagłówki
          dark: "#1a0f2e",        // główny tekst — najwyższy kontrast
          secondary: "#7B5EA7",   // akcent (linki, hover)
          tertiary: "#a487d4",    // akcent drugorzędny
          highlight: "rgba(123, 94, 167, 0.15)",
          textHighlight: "#7B5EA755",
        },
        darkMode: {
          light: "#0d0d0f",       // tło strony
          lightgray: "#2a2440",   // obramowania — jaśniejsze niż wcześniej (było za blisko "light")
          gray: "#8a78b5",        // przygaszony tekst — podniesiony dla czytelności na ciemnym tle
          darkgray: "#c4b8d9",    // nagłówki
          dark: "#f0ecf8",        // główny tekst
          secondary: "#9b7cc4",   // akcent
          tertiary: "#7B5EA7",    // akcent drugorzędny
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
        enableSiteMap: true,   // włączone: pomaga w SEO / indeksowaniu, zero minusów
        enableRSS: true,       // włączone: ktoś może chcieć śledzić nowe write-upy przez czytnik RSS
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