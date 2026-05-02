import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://username.github.io",
  output: "static",
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [sitemap()]
});
