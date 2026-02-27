/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Process from './components/Process';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-primary-500/30 selection:text-primary-200">
        <Navbar />
        <main>
          <Hero />
          <Work />
          <Tools />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
