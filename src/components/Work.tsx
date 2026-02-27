import React from 'react';
import { useLanguage } from '../i18n';
import { Globe, Smartphone, Network, PenTool, Database, Bot } from 'lucide-react';
import { motion } from 'motion/react';

export default function Work() {
  const { t } = useLanguage();

  const products = [
    {
      icon: Globe,
      title: t('prod_web_title'),
      desc: t('prod_web_desc'),
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
      border: 'border-blue-400/20',
    },
    {
      icon: Smartphone,
      title: t('prod_mobile_title'),
      desc: t('prod_mobile_desc'),
      color: 'text-primary-400',
      bg: 'bg-primary-400/10',
      border: 'border-primary-400/20',
    },
    {
      icon: Network,
      title: t('prod_api_title'),
      desc: t('prod_api_desc'),
      color: 'text-amber-400',
      bg: 'bg-amber-400/10',
      border: 'border-amber-400/20',
    },
    {
      icon: PenTool,
      title: t('prod_uiux_title'),
      desc: t('prod_uiux_desc'),
      color: 'text-purple-400',
      bg: 'bg-purple-400/10',
      border: 'border-purple-400/20',
    },
    {
      icon: Database,
      title: t('prod_db_title'),
      desc: t('prod_db_desc'),
      color: 'text-rose-400',
      bg: 'bg-rose-400/10',
      border: 'border-rose-400/20',
    },
    {
      icon: Bot,
      title: t('prod_auto_title'),
      desc: t('prod_auto_desc'),
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10',
      border: 'border-cyan-400/20',
    },
  ];

  return (
    <section id="work" className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t('work_title')}</h2>
            <div className="space-y-4 text-lg text-zinc-400 leading-relaxed">
              <p>{t('work_desc_p1')}</p>
              <p>{t('work_desc_p2')}</p>
            </div>
          </motion.div>

          {/* Right Side: Grid of Products */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {products.map((prod, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 transition-colors group flex flex-col gap-4"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${prod.bg} ${prod.border} border`}>
                  <prod.icon className={`w-6 h-6 ${prod.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-zinc-100">{prod.title}</h3>
                  <p className="text-sm text-zinc-400">{prod.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
