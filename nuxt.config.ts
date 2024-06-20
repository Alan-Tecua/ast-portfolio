// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      '@nuxtjs/i18n',
      '@nuxtjs/cloudinary',
    ],
  cloudinary: {
    cloudName: 'nuxt-cloudinary'
  },
  pages: true,
  srcDir: 'src/',
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta:[
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://res.cloudinary.com/dd05o0vvo/image/upload/v1713794636/AlanTecuapetla-OGimage_gyzcpy.png'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://cdn.jsdelivr.net/npm/modern-normalize@2.0.0/modern-normalize.min.css',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images/favicon-32x32.png'
        },
        {
          rel: "stylesheet",
          href: "https://cdn.plyr.io/3.6.8/plyr.css"
        }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  }
})
