import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [preact(), tailwind(), mdx()]
});