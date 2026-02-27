import React from 'react';
import { useLanguage } from '../i18n';
import { Search, PenTool, Settings, Code2, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    { icon: Search, title: t('process_step1_title'), desc: t('process_step1_desc') },
    { icon: PenTool, title: t('process_step2_title'), desc: t('process_step2_desc') },
    { icon: Settings, title: t('process_step3_title'), desc: t('process_step3_desc') },
    { icon: Code2, title: t('process_step4_title'), desc: t('process_step4_desc') },
    { icon: Rocket, title: t('process_step5_title'), desc: t('process_step5_desc') },
  ];

  return (
    <section id="process" className="py-24 bg-zinc-900 border-y border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{t('process_title')}</h2>
          <p className="text-lg text-zinc-400 leading-relaxed">{t('process_desc')}</p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-800 via-primary-500/50 to-zinc-800 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-primary-500/50 group-hover:bg-primary-500/10 transition-all relative shadow-xl">
                  <step.icon className="w-8 h-8 text-zinc-400 group-hover:text-primary-400 transition-colors" />
                  
                  {/* Mobile connecting line */}
                  {i !== steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-8 left-1/2 w-px h-8 bg-zinc-800" />
                  )}
                </div>
                
                <div className="bg-zinc-950/50 backdrop-blur-sm p-4 rounded-2xl border border-zinc-800/50 w-full h-full">
                  <div className="text-primary-500 font-mono text-xs mb-2">0{i + 1}</div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
