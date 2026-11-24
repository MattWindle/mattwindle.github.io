import { defineConfig } from 'astro/config';

const SITE_URL = 'https://mattwindle.github.io';

// User site (mattwindle.github.io), so we only set `site`, never `base`.
export default defineConfig({
  site: SITE_URL,
  output: 'static',
});