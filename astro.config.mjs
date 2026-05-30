// @ts-check
import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Your GitHub Pages URL. Change this if you later add a custom domain.
  site: 'https://realx4rd.github.io',
  integrations: [alpinejs(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
