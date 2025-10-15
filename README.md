# Astro Frame

A lightweight, multilingual Astro starter template designed for developers to quickly build static websites with support for Polish (PL) and English (EN) languages, SCSS styling, TypeScript, WebP image optimization, and SEO enhancements.

## 🚀 Features

- **Multilingual Support (i18n)**: Built-in internationalization with Polish (`pl`) as the default language and English (`en`) as an additional language, using Astro's i18n routing.
- **SCSS Styling**: Integrated SCSS support for modular and maintainable CSS, compiled via `sass`.
- **WebP Image Optimization**: Optimized image handling with `.webp` format using Astro's built-in `astro:assets` module for fast and modern websites.
- **SEO Optimization**: Enhanced SEO with `astro-seo` for Open Graph and Twitter meta tags.
- **TypeScript**: Full TypeScript support for type-safe development.
- **Static Assets**: Support for static assets in `public/` and dynamic assets in `src/assets/`.

## 📂 Project Structure

```plaintext
/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── home-og.jpg
├── src/
│   ├── assets/
│   │   └── astro.svg
│   ├── i18n/
│   │   ├── pl.json
│   │   └── en.json
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── [locale]/
│   │   │   └── index.astro
│   │   └── index.astro
│   ├── styles/
│   │   └── global.scss
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

- **`public/`**: Static assets like `favicon.svg` and images for Open Graph (`home-og.jpg`).
- **`src/assets/`**: Dynamic assets (e.g., `astro.svg`) for optimized imports.
- **`src/i18n/`**: JSON files for translations (`pl.json`, `en.json`).
- **`src/layouts/`**: Reusable layout component (`Layout.astro`) with SEO and i18n support.
- **`src/pages/`**: Pages with i18n routing (`index.astro` for `/`, `[locale]/index.astro` for `/en/`).
- **`src/styles/`**: SCSS styles (`global.scss`).
- **`astro.config.mjs`**: Configures i18n and image optimization.
- **`tsconfig.json`**: TypeScript configuration for type-safe development.

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/gmaxsoft/astro_frame.git
   cd astro_frame
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Commands
Run these commands from the project root:
| Command | Action |
|---------|--------|
| `npm run dev` | Starts the development server at `http://localhost:4321` |
| `npm run build` | Builds the production site to `./dist/` |
| `npm run preview` | Previews the built site locally |
| `npm run astro ...` | Runs Astro CLI commands (e.g., `astro check`) |

### Usage
- **Development**: Run `npm run dev` to start the server. Access the site at:
  - `http://localhost:4321/` for Polish (default).
  - `http://localhost:4321/en/` for English.
- **Build**: Run `npm run build` to generate static files in `dist/`.
- **Translations**: Add or edit translations in `src/i18n/pl.json` and `src/i18n/en.json`.
- **Images**: Place static images in `public/images/` (e.g., `home-og.jpg`) or dynamic images in `src/assets/` for optimization with `<Image>` from `astro:assets`.
- **SCSS**: Add styles in `src/styles/global.scss` and import in `.astro` files with `<style lang="scss">`.

## 🌐 Multilingual Setup
The project supports two languages:
- **Polish (`pl`)**: Default, accessible at `/` (e.g., `http://localhost:4321/`).
- **English (`en`)**: Accessible at `/en/` (e.g., `http://localhost:4321/en/`).

To add a new language (e.g., German `de`):
1. Add the language to `astro.config.mjs`:
   ```js
   i18n: {
     defaultLocale: 'pl',
     locales: ['pl', 'en', 'de']
   }
   ```
2. Create `src/i18n/de.json` with translations.
3. Update `src/pages/[locale]/index.astro` in `getStaticPaths` to include `{ params: { locale: 'de' } }`.

## 🖼️ Image Optimization
Images (including `.webp`) are optimized using Astro's built-in `astro:assets` module:
- **Static Images**: Place in `public/images/` and use `<img src="/images/example.webp">`.
- **Dynamic Images**: Place in `src/assets/` and import:
  ```astro
  ---
  import exampleImage from '../assets/example.webp';
  import { Image } from 'astro:assets';
  ---
  <Image src={exampleImage} alt="Example" width={800} height={600} />
  ```
- Install `sharp` for faster image processing:
  ```bash
  npm install sharp
  ```

## 🎨 SCSS Styling
- SCSS is supported via the `sass` package.
- Add global styles in `src/styles/global.scss` and import in `.astro` files:
  ```astro
  <style lang="scss">
    @import '../styles/global.scss';
  </style>
  ```

## 🔍 SEO
SEO is handled by the `astro-seo` package, with Open Graph and Twitter meta tags configured in `src/layouts/Layout.astro`. Update meta tags via props:
```astro
<Layout title="Page Title" description="Page Description" ogImage="/images/home-og.jpg">
```

## 📚 Learn More
- [Astro Documentation](https://docs.astro.build)
- [Astro i18n Guide](https://docs.astro.build/en/guides/internationalization/)
- [Astro Image Optimization](https://docs.astro.build/en/guides/images/)

## 📬 Contact
For questions or contributions, open an issue on [GitHub](https://github.com/gmaxsoft/astro_frame) or contact the maintainer.