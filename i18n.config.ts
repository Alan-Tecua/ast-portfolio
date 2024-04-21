export default defineI18nConfig(() => ({
  strategy: 'no_prefix',
  legacy: false,
  warnHtmlMessage: false,
  locale: 'en',
  defaultLocale: 'en',
  fallbackLocale: {
    'default': ['en', 'ja'],
  },
  // TODO lazy load
  messages: {
    en: {
      // ...en_common,
    },
    // ja: {
    //   ...ja_common,
    // },
    fr: {
      // ...fr_common,
    },
  }
}))
