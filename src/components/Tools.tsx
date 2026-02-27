import React from 'react';
import { useLanguage } from '../i18n';
import { motion } from 'motion/react';

export default function Tools() {
  const { t } = useLanguage();

  const tools = [
    { name: 'JavaScript', category: 'Language' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'React', category: 'Frontend' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'Expo', category: 'Mobile' },
    { name: '.NET', category: 'Backend' },
    { name: 'Java', category: 'Backend' },
    { name: 'PHP', category: 'Backend' },
    { name: 'Laravel', category: 'Backend' },
    { name: 'MySQL', category: 'Database' },
    { name: 'SQL', category: 'Database' },
    { name: 'Figma', category: 'Design' },
    { name: 'Miro', category: 'Product' },
  ];

  return (
    <section id="tools" className="py-24 bg-zinc-900 border-y border-zinc-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{t('tools_title')}</h2>
          <p className="text-lg text-zinc-400">{t('tools_desc')}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="px-6 py-3 rounded-full bg-zinc-950 border border-zinc-800 hover:border-primary-500/50 hover:bg-zinc-900 transition-all cursor-default group flex items-center gap-3 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-primary-500 transition-colors" />
              <span className="font-medium text-zinc-300 group-hover:text-zinc-100">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
