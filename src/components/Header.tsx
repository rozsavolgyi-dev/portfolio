import { useTranslations } from '../i18n/utils';

// Definiáljuk, hogy a Header vár egy 'lang' propot
interface HeaderProps {
  lang: 'hu' | 'en';
}

export default function Header({ lang }: HeaderProps) {
  // Inicializáljuk a fordítót az aktuális nyelvvel
  const t = useTranslations(lang);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href={lang === 'hu' ? '/' : `/${lang}/`} className="text-xl font-bold text-blue-600">
          Rosavallis
        </a>
        <nav>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href={`/${lang === 'hu' ? '' : lang + '/'}about`} className="hover:text-blue-600 transition-colors">{t('nav.about')}</a></li>
            <li><a href={`/${lang === 'hu' ? '' : lang + '/'}projects`} className="hover:text-blue-600 transition-colors">{t('nav.projects')}</a></li>
            <li><a href={`/${lang === 'hu' ? '' : lang + '/'}contact`} className="hover:text-blue-600 transition-colors">{t('nav.contact')}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}