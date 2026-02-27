import React, { useState } from 'react';
import { useLanguage } from '../i18n';
import { Mail, Linkedin, Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  const links = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/cesarcaus/', color: 'hover:text-blue-400 hover:border-blue-400/50' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/CesarCaus', color: 'hover:text-zinc-100 hover:border-zinc-100/50' },
    { name: 'Email', icon: Mail, href: 'mailto:cesarcausdev@gmail.com', color: 'hover:text-primary-400 hover:border-primary-400/50' },
  ];

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = t('error_name_required');
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = t('error_email_required');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('error_email_invalid');
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = t('error_message_required');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-zinc-950 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{t('contact_title')}</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t('contact_desc')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-300 transition-all duration-300 ${link.color} group`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-current transition-colors">
                    <link.icon className="w-6 h-6" />
                  </div>
                  <span className="font-medium text-lg">{link.name}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl"
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-100">{t('contact_success')}</h3>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">{t('contact_name')}</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-1 transition-all ${
                        errors.name 
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' 
                          : 'border-zinc-800 focus:border-primary-500 focus:ring-primary-500'
                      }`} 
                      placeholder="Seu nome" 
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">{t('contact_email')}</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-1 transition-all ${
                        errors.email 
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' 
                          : 'border-zinc-800 focus:border-primary-500 focus:ring-primary-500'
                      }`} 
                      placeholder="seu@email.com" 
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">{t('contact_message')}</label>
                  <textarea 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-1 transition-all resize-none ${
                      errors.message 
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' 
                        : 'border-zinc-800 focus:border-primary-500 focus:ring-primary-500'
                    }`} 
                    placeholder="Como posso ajudar?" 
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-primary-500 text-zinc-50 font-medium py-4 rounded-xl hover:bg-primary-400 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  {t('contact_send')}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
