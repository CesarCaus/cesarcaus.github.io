import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es';

type Translations = {
  [key in Language]: {
    nav_about: string;
    nav_work: string;
    nav_process: string;
    nav_tools: string;
    nav_contact: string;
    role: string;
    hero_greeting: string;
    hero_title: string;
    hero_subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    
    work_title: string;
    work_desc_p1: string;
    work_desc_p2: string;
    prod_web_title: string;
    prod_web_desc: string;
    prod_mobile_title: string;
    prod_mobile_desc: string;
    prod_api_title: string;
    prod_api_desc: string;
    prod_uiux_title: string;
    prod_uiux_desc: string;
    prod_db_title: string;
    prod_db_desc: string;
    prod_auto_title: string;
    prod_auto_desc: string;

    process_title: string;
    process_desc: string;
    process_step1_title: string;
    process_step1_desc: string;
    process_step2_title: string;
    process_step2_desc: string;
    process_step3_title: string;
    process_step3_desc: string;
    process_step4_title: string;
    process_step4_desc: string;
    process_step5_title: string;
    process_step5_desc: string;

    tools_title: string;
    tools_desc: string;
    
    contact_title: string;
    contact_desc: string;
    contact_name: string;
    contact_email: string;
    contact_message: string;
    contact_send: string;
    contact_success: string;
    error_name_required: string;
    error_email_required: string;
    error_email_invalid: string;
    error_message_required: string;
    footer_rights: string;
  };
};

const translations: Translations = {
  pt: {
    nav_about: 'Sobre',
    nav_work: 'Trabalho',
    nav_process: 'Processo',
    nav_tools: 'Ferramentas',
    nav_contact: 'Contato',
    role: 'Analista de Produtos & Desenvolvedor de Software',
    hero_greeting: 'Olá, eu sou o César Caus.',
    hero_title: 'Construindo a ponte entre Negócios e Tecnologia.',
    hero_subtitle: 'Transformo visões estratégicas em produtos digitais escaláveis, unindo a mentalidade de produto com a execução técnica.',
    cta_primary: 'Ver Trabalho',
    cta_secondary: 'Entrar em Contato',
    
    work_title: 'Meu Trabalho',
    work_desc_p1: 'Atuo na interseção entre a estratégia de negócios e a engenharia de software, garantindo que cada produto não apenas atenda às necessidades do usuário, mas também seja tecnicamente robusto e escalável.',
    work_desc_p2: 'Para garantir a excelência, utilizo metodologias eficazes como o Atomic Design para criar interfaces consistentes e escaláveis, e a Arquitetura Limpa (Clean Architecture) para desenvolver sistemas manuteníveis, testáveis e preparados para o futuro.',
    prod_web_title: 'Sistemas Web Escaláveis',
    prod_web_desc: 'Plataformas robustas e de alta performance.',
    prod_mobile_title: 'Aplicativos Mobile',
    prod_mobile_desc: 'Experiências nativas e multiplataforma.',
    prod_api_title: 'Integrações e APIs',
    prod_api_desc: 'Comunicação fluida entre sistemas complexos.',
    prod_uiux_title: 'Design de Produto',
    prod_uiux_desc: 'Prototipagem e interfaces centradas no usuário.',
    prod_db_title: 'Modelagem de Dados',
    prod_db_desc: 'Arquitetura de banco de dados eficiente.',
    prod_auto_title: 'Automações de Tarefas',
    prod_auto_desc: 'Scripts e integrações que agilizam processos diários.',

    process_title: 'Produto & Desenvolvimento',
    process_desc: 'A verdadeira inovação acontece quando a visão estratégica de produto e a excelência técnica caminham juntas. Um não sobrevive sem o outro. Veja como construo softwares robustos, escaláveis e focados na experiência do usuário:',
    process_step1_title: 'Descoberta',
    process_step1_desc: 'Entendimento do problema, validação de hipóteses e estratégia.',
    process_step2_title: 'Design & UX',
    process_step2_desc: 'Prototipagem focada na jornada do usuário e Atomic Design.',
    process_step3_title: 'Arquitetura',
    process_step3_desc: 'Definição da base técnica, Clean Architecture e escalabilidade.',
    process_step4_title: 'Desenvolvimento',
    process_step4_desc: 'Código limpo, testes automatizados e integração contínua.',
    process_step5_title: 'Evolução',
    process_step5_desc: 'Lançamento, análise de métricas e melhoria contínua.',

    tools_title: 'Ferramentas & Tecnologias',
    tools_desc: 'O ecossistema que utilizo para transformar ideias em produtos reais, cobrindo desde a concepção até o desenvolvimento full-stack.',

    contact_title: 'Vamos conversar?',
    contact_desc: 'Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte das suas visões.',
    contact_name: 'Nome',
    contact_email: 'E-mail',
    contact_message: 'Mensagem',
    contact_send: 'Enviar Mensagem',
    contact_success: 'Mensagem enviada com sucesso!',
    error_name_required: 'O nome é obrigatório',
    error_email_required: 'O e-mail é obrigatório',
    error_email_invalid: 'Insira um e-mail válido',
    error_message_required: 'A mensagem é obrigatória',
    footer_rights: 'Todos os direitos reservados.',
  },
  en: {
    nav_about: 'About',
    nav_work: 'Work',
    nav_process: 'Process',
    nav_tools: 'Tools',
    nav_contact: 'Contact',
    role: 'Product Analyst & Software Developer',
    hero_greeting: 'Hello, I\'m César Caus.',
    hero_title: 'Bridging the gap between Business and Technology.',
    hero_subtitle: 'I transform strategic visions into scalable digital products, combining product mindset with technical execution.',
    cta_primary: 'View Work',
    cta_secondary: 'Get in Touch',
    
    work_title: 'My Work',
    work_desc_p1: 'I work at the intersection of business strategy and software engineering, ensuring that each product not only meets user needs but is also technically robust and scalable.',
    work_desc_p2: 'To ensure excellence, I use effective methodologies such as Atomic Design to create consistent and scalable interfaces, and Clean Architecture to develop maintainable, testable, and future-proof systems.',
    prod_web_title: 'Scalable Web Systems',
    prod_web_desc: 'Robust and high-performance platforms.',
    prod_mobile_title: 'Mobile Apps',
    prod_mobile_desc: 'Native and cross-platform experiences.',
    prod_api_title: 'Integrations & APIs',
    prod_api_desc: 'Seamless communication between complex systems.',
    prod_uiux_title: 'Product Design',
    prod_uiux_desc: 'Prototyping and user-centered interfaces.',
    prod_db_title: 'Data Modeling',
    prod_db_desc: 'Efficient database architecture.',
    prod_auto_title: 'Task Automations',
    prod_auto_desc: 'Scripts and integrations that speed up daily processes.',

    process_title: 'Product & Development',
    process_desc: 'True innovation happens when strategic product vision and technical excellence walk together. One cannot survive without the other. Here is how I build robust, scalable, and UX-focused software:',
    process_step1_title: 'Discovery',
    process_step1_desc: 'Understanding the problem, validating hypotheses, and strategy.',
    process_step2_title: 'Design & UX',
    process_step2_desc: 'Prototyping focused on user journey and Atomic Design.',
    process_step3_title: 'Architecture',
    process_step3_desc: 'Defining the technical foundation, Clean Architecture, and scalability.',
    process_step4_title: 'Development',
    process_step4_desc: 'Clean code, automated testing, and continuous integration.',
    process_step5_title: 'Evolution',
    process_step5_desc: 'Launch, metrics analysis, and continuous improvement.',

    tools_title: 'Tools & Technologies',
    tools_desc: 'The ecosystem I use to turn ideas into real products, covering everything from conception to full-stack development.',

    contact_title: "Let's talk?",
    contact_desc: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
    contact_name: 'Name',
    contact_email: 'Email',
    contact_message: 'Message',
    contact_send: 'Send Message',
    contact_success: 'Message sent successfully!',
    error_name_required: 'Name is required',
    error_email_required: 'Email is required',
    error_email_invalid: 'Please enter a valid email',
    error_message_required: 'Message is required',
    footer_rights: 'All rights reserved.',
  },
  es: {
    nav_about: 'Sobre mí',
    nav_work: 'Trabajo',
    nav_process: 'Proceso',
    nav_tools: 'Herramientas',
    nav_contact: 'Contacto',
    role: 'Analista de Productos y Desarrollador de Software',
    hero_greeting: 'Hola, soy César Caus.',
    hero_title: 'Construyendo el puente entre Negocios y Tecnología.',
    hero_subtitle: 'Transformo visiones estratégicas en productos digitales escalables, uniendo la mentalidad de producto con la ejecución técnica.',
    cta_primary: 'Ver Trabajo',
    cta_secondary: 'Contactar',
    
    work_title: 'Mi Trabajo',
    work_desc_p1: 'Trabajo en la intersección entre la estrategia de negocios y la ingeniería de software, asegurando que cada producto no solo satisfaga las necesidades del usuario, sino que también sea técnicamente robusto y escalable.',
    work_desc_p2: 'Para garantizar la excelencia, utilizo metodologías efectivas como Atomic Design para crear interfaces consistentes y escalables, y Arquitectura Limpia (Clean Architecture) para desarrollar sistemas mantenibles, probables y preparados para el futuro.',
    prod_web_title: 'Sistemas Web Escalables',
    prod_web_desc: 'Plataformas robustas y de alto rendimiento.',
    prod_mobile_title: 'Aplicaciones Móviles',
    prod_mobile_desc: 'Experiencias nativas y multiplataforma.',
    prod_api_title: 'Integraciones y APIs',
    prod_api_desc: 'Comunicación fluida entre sistemas complejos.',
    prod_uiux_title: 'Diseño de Producto',
    prod_uiux_desc: 'Prototipado e interfaces centradas en el usuario.',
    prod_db_title: 'Modelado de Datos',
    prod_db_desc: 'Arquitectura de base de datos eficiente.',
    prod_auto_title: 'Automatización de Tareas',
    prod_auto_desc: 'Scripts e integraciones que agilizan procesos diarios.',

    process_title: 'Producto y Desarrollo',
    process_desc: 'La verdadera innovación ocurre cuando la visión estratégica del producto y la excelencia técnica caminan juntas. Una no sobrevive sin la otra. Así es como construyo software robusto, escalable y enfocado en la experiencia del usuario:',
    process_step1_title: 'Descubrimiento',
    process_step1_desc: 'Entendimiento del problema, validación de hipótesis y estrategia.',
    process_step2_title: 'Diseño y UX',
    process_step2_desc: 'Prototipado enfocado en el viaje del usuario y Atomic Design.',
    process_step3_title: 'Arquitectura',
    process_step3_desc: 'Definición de la base técnica, Clean Architecture y escalabilidad.',
    process_step4_title: 'Desarrollo',
    process_step4_desc: 'Código limpio, pruebas automatizadas e integración continua.',
    process_step5_title: 'Evolución',
    process_step5_desc: 'Lanzamiento, análisis de métricas y mejora continua.',

    tools_title: 'Herramientas y Tecnologías',
    tools_desc: 'El ecosistema que utilizo para transformar ideas en productos reales, cubriendo desde la concepción hasta el desarrollo full-stack.',

    contact_title: '¿Hablamos?',
    contact_desc: 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.',
    contact_name: 'Nombre',
    contact_email: 'Correo electrónico',
    contact_message: 'Mensaje',
    contact_send: 'Enviar Mensaje',
    contact_success: '¡Mensaje enviado con éxito!',
    error_name_required: 'El nombre es obligatorio',
    error_email_required: 'El correo es obligatorio',
    error_email_invalid: 'Introduce un correo válido',
    error_message_required: 'El mensaje es obligatorio',
    footer_rights: 'Todos los derechos reservados.',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations['en']) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: keyof Translations['en']) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
