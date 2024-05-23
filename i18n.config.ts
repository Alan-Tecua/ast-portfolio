import en_common from '~/locales/en/common.json'
import jp_common from '~/locales/jp/common.json'
import es_common from '~/locales/es/common.json'

export default defineI18nConfig(() => ({
  strategy: 'no_prefix',
  legacy: false,
  warnHtmlMessage: false,
  locale: 'en',
  defaultLocale: 'en',
  fallbackLocale: {
    'default': ['en', 'jp'],
  },
  // TODO lazy load
  messages: {
    en: {
      ...en_common,
    },
    jp: {
      ...jp_common,
    },
    es: {
      ...es_common,
    },
  }
}))
