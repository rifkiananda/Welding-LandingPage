'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from '@/components/ServiceCard';
import { siteConfig } from '@/config/site-config';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/utils/translations';

const Services = () => {
  const { language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-base text-green-600 font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {t('servicesTitle', language)}
          </motion.h2>
          <motion.h3 
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('servicesHeading', language)}
          </motion.h3>
          <motion.p 
            className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('servicesSubtitle', language)}
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {siteConfig.services[language].map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              fileName={service.fileName}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">{t('servicesMaterials', language)}</h4>
              <ul className="space-y-2 text-gray-300">
                {siteConfig.materials[language].map((material, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {material}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">{t('servicesWelding', language)}</h4>
              <ul className="space-y-2 text-gray-300">
                {siteConfig.processes[language].map((process, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {process}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">{t('servicesFinishing', language)}</h4>
              <ul className="space-y-2 text-gray-300">
                {siteConfig.finishing[language].map((finish, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {finish}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;