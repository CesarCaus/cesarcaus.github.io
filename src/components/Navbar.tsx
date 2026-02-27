import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_work'), href: '#work' },
    { name: t('nav_tools'), href: '#tools' },
    { name: t('nav_process'), href: '#process' },
    { name: t('nav_contact'), href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 rounded-full flex items-center justify-center">
            {/* Placeholder for your actual logo */}
            <img src="../../assets/Logo-v1.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-medium tracking-tight">César Caus</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-zinc-400">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-zinc-50 transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-px bg-zinc-800"></div>

          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-zinc-500" />
            <div className="flex bg-zinc-900/50 rounded-full p-1 border border-zinc-800/50">
              {(['pt', 'en', 'es'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                    language === lang
                      ? 'bg-zinc-800 text-zinc-50 shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-zinc-950 border-b border-zinc-800 p-6"
          >
            <ul className="flex flex-col gap-4 text-sm font-medium text-zinc-400 mb-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block py-2 hover:text-zinc-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 border-t border-zinc-800 pt-6">
              <Globe className="w-5 h-5 text-zinc-500" />
              <div className="flex gap-2">
                {(['pt', 'en', 'es'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-4 py-2 text-xs font-medium rounded-full transition-all ${
                      language === lang
                        ? 'bg-zinc-800 text-zinc-50 shadow-sm'
                        : 'bg-zinc-900/50 text-zinc-500 border border-zinc-800/50'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
