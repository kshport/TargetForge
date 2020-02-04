import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en_universal from './resources/lang/en/universal.json';
import ru_universal from './resources/lang/ru/universal.json';
import ru_proxies from './resources/lang/ru/proxies.json';
import en_proxies from './resources/lang/ru/proxies.json';
import ru_dashboard from './resources/lang/ru/dashboard.json';

const resources = {
    en: {
        universal: en_universal,
        proxies: en_proxies,
    },
    ru: {
        universal: ru_universal,
        proxies: ru_proxies,
        dashboard: ru_dashboard,
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
