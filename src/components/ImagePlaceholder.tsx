import React from 'react';
import Image from 'next/image';

// Komponen ini menunjukkan cara yang benar untuk menampilkan gambar
// Saat ini menggunakan placeholder, tapi bisa diganti dengan gambar asli

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  placeholderText?: string;
  description?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholderText = 'Gambar akan muncul di sini',
  description
}) => {
  // Jika src disediakan, gunakan komponen Next.js Image
  if (src) {
    return (
      <div className="relative">
        <Image 
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </div>
    );
  }

  // Jika tidak ada src, tampilkan placeholder
  return (
    <div className={`bg-gray-200 border-2 border-dashed rounded-xl flex flex-col items-center justify-center ${className}`}>
      <div className="bg-gray-300 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
      <p className="text-gray-500 font-medium">{placeholderText}</p>
      {description && (
        <p className="text-gray-400 text-sm mt-2 text-center px-4">{description}</p>
      )}
      <div className="mt-4 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg max-w-xs">
        <p className="text-xs text-center">
          Untuk menggunakan gambar asli, tambahkan file ke folder <code className="bg-blue-200 px-1 rounded">public/images/</code> dan berikan path ke prop <code className="bg-blue-200 px-1 rounded">src</code>
        </p>
      </div>
    </div>
  );
};

export default ImagePlaceholder;