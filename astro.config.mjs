import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [preact(), tailwind(), mdx()],
  images: {
    service: 'noop'
  },

  // Excluir dotenv del proceso de empaquetado
  exclude: [
    'dotenv'
  ]
});

