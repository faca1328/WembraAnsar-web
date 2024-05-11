import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import node from '@astrojs/node';


export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [preact(), tailwind(), mdx()],
  adapter: node({
    mode: 'standalone',
  })
});
