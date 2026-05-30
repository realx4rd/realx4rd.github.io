// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Update `site` to your real domain before deploying (used for canonical URLs + sitemap).
  site: 'https://clickandlearn.academy',
  integrations: [alpinejs(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
