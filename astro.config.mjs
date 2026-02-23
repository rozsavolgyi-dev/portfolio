import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
  i18n: {
    defaultLocale: "hu",
    locales: ["hu", "en"],
    routing: {
      prefixDefaultLocale: false, // A magyar URL-ek nem kapnak /hu/ előtagot
    },
  },
});
