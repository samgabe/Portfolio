// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt'
  ],

  // TailwindCSS
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
    viewer: true,
  },

  // Google Fonts
  googleFonts: {
    families: {
      Inter: '200..800',
      'JetBrains Mono': '400..700'
    }
  },

  // Image optimization
  image: {
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // Runtime config
  runtimeConfig: {
    public: {
      githubUrl: 'https://github.com/samgabe',
      portfolioUrl: 'https://samkkamauportfolio.netlify.app'
    }
  }
})
