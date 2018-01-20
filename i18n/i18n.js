import I18n from 'react-native-i18n'

I18n.fallbacks = true

const translations = {}

translations.en = require('./locales/en.json')
translations.es = require('./locales/es.json')

I18n.translations = translations

export default I18n
