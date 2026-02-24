import { useTranslations } from '../i18n/utils';

interface HeaderProps {
  lang: 'hu' | 'en';
}

export default function Header({ lang }: HeaderProps) {
  const t = useTranslations(lang);

  return (
    <header className="bg-black/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href={lang === 'hu' ? '/' : `/${lang}/`} className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight">
          Rosavallis
        </a>
        <nav>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href={`/${lang === 'hu' ? '' : lang + '/'}about`} className="text-zinc-300 hover:text-cyan-400 transition-colors">{t('nav.about')}</a></li>
            <li><a href={`/${lang === 'hu' ? '' : lang + '/'}projects`} className="text-zinc-300 hover:text-cyan-400 transition-colors">{t('nav.projects')}</a></li>
            <li><a href={`/${lang === 'hu' ? '' : lang + '/'}contact`} className="text-zinc-300 hover:text-cyan-400 transition-colors">{t('nav.contact')}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}