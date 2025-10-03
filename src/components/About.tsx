'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteConfig } from '@/config/site-config';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/utils/translations';

const About = () => {
  const { language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="lg:text-center mb-12"
        >
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">{t('aboutTitle', language)}</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {siteConfig.company.name}
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t('aboutSubtitle', language)} {siteConfig.company.experience[language]}
          </p>
        </motion.div>

        <motion.div 
          className="mt-10"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-1 shadow-xl">
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg w-full h-96 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                    <p className="text-gray-300 font-medium">Interior Bengkel {siteConfig.company.name}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <p className="text-lg text-gray-600 mb-6">
                {t('aboutDescription1', language)}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t('aboutDescription2', language)}
              </p>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h4 className="text-lg font-medium text-gray-900 mb-4">{t('aboutWhyChoose', language)}</h4>
                <ul className="space-y-3">
                  {[
                    t('aboutCertifiedWelders', language),
                    t('aboutQualityMaterials', language),
                    t('aboutOnTime', language),
                    t('aboutCompetitivePricing', language)
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                          <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <p className="ml-3 text-base text-gray-600">{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;