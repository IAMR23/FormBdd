import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify"; // Importa el adaptador de Netlify

export default defineConfig({
  // ...
  integrations: [tailwind()],
  server: {
    host: true,
  },
  output: "server",
  adapter: netlify(),
});
