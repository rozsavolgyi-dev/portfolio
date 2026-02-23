import { ui, defaultLang } from './ui';

// Kinyeri a nyelvet az URL-ből (pl. /en/rolunk -> en)
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

// Visszaad egy 't' nevű függvényt, amivel a kulcsok alapján fordítunk
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}