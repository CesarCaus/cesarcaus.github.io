import React from 'react';
import { useLanguage } from '../i18n';
import Logo from '@/assets/Logo-v1.png'

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className=" h-6 flex items-center justify-center">
            {/* Placeholder for your actual logo */}
            <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-sm font-medium text-zinc-400 tracking-tight">César Caus</span>
        </div>
        <p className="text-sm text-zinc-500">
          &copy; {currentYear} — {t('footer_rights')}
        </p>
      </div>
    </footer>
  );
}
