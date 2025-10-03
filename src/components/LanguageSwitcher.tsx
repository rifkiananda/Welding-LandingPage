'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  
  const switchLanguage = (newLanguage: 'en' | 'id') => {
    setLanguage(newLanguage);
    
    // Update the URL path
    if (newLanguage === 'en') {
      // Remove /id prefix if present
      const newPath = pathname.startsWith('/id') 
        ? pathname.replace('/id', '') || '/' 
        : pathname;
      router.push(newPath);
    } else {
      // Add /id prefix if not present
      const newPath = pathname.startsWith('/id') 
        ? pathname 
        : `/id${pathname}`;
      router.push(newPath);
    }
  };

  return (
    <div className="flex items-center space-x-2 bg-gray-800 rounded-md p-1">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors duration-200 ${
          language === 'en'
            ? 'bg-green-600 text-white'
            : 'text-gray-300 hover:text-white hover:bg-gray-700'
        }`}
      >
        EN
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => switchLanguage('id')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors duration-200 ${
          language === 'id'
            ? 'bg-green-600 text-white'
            : 'text-gray-300 hover:text-white hover:bg-gray-700'
        }`}
      >
        ID
      </button>
    </div>
  );
};

export default LanguageSwitcher;