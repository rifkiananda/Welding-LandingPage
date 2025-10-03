'use client';

import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  fileName: string;
  index: number;
  language?: 'en' | 'id';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, fileName, index }) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-xl group service-card">
      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 text-white group-hover:from-green-600 group-hover:to-green-700 transition-all duration-300">
        <span className="font-bold text-xl">{index + 1}</span>
      </div>
      
      <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg w-full h-48 flex items-center justify-center mb-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-blue-900/10"></div>
        <div className="relative z-10 text-center">
          <div className="bg-gray-300 border-2 border-dashed rounded-xl w-12 h-12 mx-auto mb-2" />
          <p className="text-gray-600 text-sm font-medium">{fileName}</p>
        </div>
      </div>
      
      <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;