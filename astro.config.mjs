import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import node from '@astrojs/node';


export default defineConfig({
  output: "server",
  integrations: [preact(), tailwind(), mdx()],
  adapter: node({
    mode: 'standalone',
  })
});
