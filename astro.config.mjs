import { defineConfig } from 'astro/config';
import sharp from 'sharp'; // Opcjonalnie, dla szybszej transformacji

export default defineConfig({
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  image: {
    serviceEntryPoint: '@astrojs/image/sharp' // Użyj sharp dla lepszej wydajności (opcjonalnie)
  }
});