import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aimommywisdom.com',
  integrations: [sitemap()],
});
