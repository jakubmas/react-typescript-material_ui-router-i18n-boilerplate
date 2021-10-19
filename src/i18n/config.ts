import i18n from 'i18next'
import home from './en/home.json'
import homePl from './pl/home.json'
import { initReactI18next } from 'react-i18next'

export const resources = {
  en: {
    translation: home
  },
  pl: {
    translation: homePl
  }
} as const

i18n.use(initReactI18next).init({
  lng: 'en',
  resources
})
