import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";


export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [preact(), tailwind(), mdx()]
});
