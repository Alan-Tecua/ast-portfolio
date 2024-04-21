// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      '@nuxtjs/i18n',
    ],
  pages: true,
  srcDir: 'src/',
  i18n: {
    vueI18n: './i18n.config.ts'
  }
})
