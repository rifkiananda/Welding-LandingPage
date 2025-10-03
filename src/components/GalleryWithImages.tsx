import React from 'react';
import ImagePlaceholder from '@/components/ImagePlaceholder';

// Komponen ini menunjukkan contoh bagaimana galeri akan terlihat dengan gambar asli

const GalleryWithImages = () => {
  // Contoh data gambar hasil pekerjaan dengan path gambar
  const galleryImages = [
    { 
      id: 1, 
      title: "Pagar Rumah Minimalis", 
      description: "Pagar besi tempa dengan finishing powder coating",
      // Contoh path gambar (akan diganti dengan gambar asli)
      imagePath: "/images/pagar-minimalis.jpg"
    },
    { 
      id: 2, 
      title: "Kanopi Baja Ringan", 
      description: "Kanopi atap polikarbonat untuk garasi mobil",
      imagePath: "/images/kanopi-baja-ringan.jpg"
    },
    { 
      id: 3, 
      title: "Tralis Jendela", 
      description: "Tralis besi tempa dengan motif ornamental",
      imagePath: "/images/tralis-jendela.jpg"
    },
    { 
      id: 4, 
      title: "Pintu Gerbang Besi", 
      description: "Pintu gerbang utama dengan akses otomatis",
      imagePath: "/images/pintu-gerbang-besi.jpg"
    },
    { 
      id: 5, 
      title: "Railing Tangga", 
      description: "Railing tangga stainless steel untuk interior",
      imagePath: "/images/railing-tangga.jpg"
    },
    { 
      id: 6, 
      title: "Meja Las Custom", 
      description: "Meja kerja fabrikasi dari plat baja dan besi hollow",
      imagePath: "/images/meja-las-custom.jpg"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Galeri Hasil Pekerjaan</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Lihat contoh hasil pekerjaan kami yang telah memuaskan ratusan pelanggan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              {/* Contoh penggunaan komponen ImagePlaceholder dengan gambar */}
              <ImagePlaceholder 
                // src={image.imagePath} // Uncomment ini saat gambar sudah ada
                alt={image.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
                placeholderText={image.title}
                description={image.description}
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-900">{image.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Cara Menambahkan Gambar Asli</h3>
          <p className="text-blue-800 mb-4">
            Untuk menampilkan gambar asli di galeri ini:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Tambahkan file gambar ke folder <code className="bg-blue-200 px-1 rounded">public/images/</code></li>
            <li>Pastikan nama file sesuai dengan yang ada di data gambar</li>
            <li>Uncomment prop <code className="bg-blue-200 px-1 rounded">src</code> di komponen ImagePlaceholder</li>
            <li>Contoh: <code className="bg-blue-200 px-1 rounded">src="/images/pagar-minimalis.jpg"</code></li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default GalleryWithImages;