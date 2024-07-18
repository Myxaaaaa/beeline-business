import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ruTranslations from '../public/locales/ru/translation.json';
import kgTranslations from '../public/locales/ky/translation.json';
import enTranslations from '../public/locales/en/translation.json';

i18next.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslations },
        ru: { translation: ruTranslations },
        ky: { translation: kgTranslations }
    },
    lng: localStorage.getItem('lng') || 'ru',
    fallbackLng: 'ru',
    interpolation: {
        escapeValue: false
    }
});
