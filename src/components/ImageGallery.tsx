'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
// Removed unused t import

interface ImageItem {
  id: number;
  title: string;
  description: string;
  fileName: string;
}

const ImageGallery = () => {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // List of images to be displayed in the gallery
  const images: ImageItem[] = [
    { 
      id: 1, 
      title: language === 'en' ? "Minimalist Iron Fence" : "Pagar Besi Minimalis", 
      description: language === 'en' 
        ? "Wrought iron fence with powder coating finish" 
        : "Pagar besi tempa dengan finishing powder coating", 
      fileName: "project-1.jpg" 
    },
    { 
      id: 2, 
      title: language === 'en' ? "Light Steel Canopy" : "Kanopi Baja Ringan", 
      description: language === 'en' 
        ? "Polycarbonate roof canopy for car garage" 
        : "Kanopi atap polikarbonat untuk garasi mobil", 
      fileName: "project-2.jpg" 
    },
    { 
      id: 3, 
      title: language === 'en' ? "Window Grilles" : "Tralis Jendela", 
      description: language === 'en' 
        ? "Wrought iron grilles with ornamental pattern" 
        : "Tralis besi tempa dengan motif ornamental", 
      fileName: "project-3.jpg" 
    },
    { 
      id: 4, 
      title: language === 'en' ? "Iron Gate" : "Pintu Gerbang Besi", 
      description: language === 'en' 
        ? "Main gate with automatic access" 
        : "Pintu gerbang utama dengan akses otomatis", 
      fileName: "project-4.jpg" 
    },
    { 
      id: 5, 
      title: language === 'en' ? "Stair Railing" : "Railing Tangga", 
      description: language === 'en' 
        ? "Stainless steel stair railing for interior" 
        : "Railing tangga stainless steel untuk interior", 
      fileName: "project-5.jpg" 
    },
    { 
      id: 6, 
      title: language === 'en' ? "Custom Welded Table" : "Meja Las Custom", 
      description: language === 'en' 
        ? "Fabrication workbench from steel plate and hollow iron" 
        : "Meja kerja fabrikasi dari plat baja dan besi hollow", 
      fileName: "project-6.jpg" 
    }
  ];

  const openImageModal = (id: number) => {
    setSelectedImage(id);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <div 
          key={image.id} 
          className="group block overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          onClick={() => openImageModal(image.id)}
        >
          <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-dashed rounded-t-lg w-full h-64 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-blue-900/10"></div>
            <div className="relative z-10 text-center">
              <div className="bg-gray-300 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">{image.title}</p>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-900">{image.title}</h4>
            <p className="text-gray-600 text-sm mt-1">{image.description}</p>
          </div>
        </div>
      ))}
      
      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
              onClick={closeImageModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-gray-300 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">
                  {language === 'en' ? 'Project Image' : 'Gambar Proyek'} {selectedImage}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;