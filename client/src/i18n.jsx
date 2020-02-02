import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en_universal from './resources/lang/en/universal.json';
import ru_universal from './resources/lang/ru/universal.json';

const resources = {
    en: {
        universal: en_universal,
    },
    ru: {
        universal: ru_universal,
    }
};

i18n
.use(initReactI18next)
.init({
    resources,
    lng: 'ru',
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
