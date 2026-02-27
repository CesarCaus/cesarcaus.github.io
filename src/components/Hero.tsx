import React from 'react';
import { useLanguage } from '../i18n';
import { ArrowRight, Code2, LineChart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-medium text-zinc-300">
              {t('hero_greeting')}
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 to-zinc-500 leading-tight">
              {t('hero_title')}
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider">{t('role')}</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
            {t('hero_subtitle')}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 text-zinc-950 font-medium hover:bg-white transition-colors"
            >
              {t('cta_primary')}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 transition-colors"
            >
              {t('cta_secondary')}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 shadow-2xl group">
            <img
              src="../../assets\cesar-image.png"
              alt="César Caus"
              className="w-full h-full object-cover object-center grayscale opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            {/* Subtle gradient overlay to blend with the dark theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
