import React from 'react';
// Removed unused Image import

// Komponen ini menunjukkan contoh implementasi gambar yang benar
// Setelah Anda memiliki gambar asli, ganti placeholder dengan komponen ini

const ContohImplementasiGambar = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contoh Implementasi Gambar</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Ini adalah contoh bagaimana website akan terlihat dengan gambar asli.
          </p>
        </div>
        
        {/* Contoh Hero Section dengan Gambar */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Banner Utama</h3>
          <div className="relative h-96 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10 z-10"></div>
            <div className="bg-gray-200 w-full h-full flex items-center justify-center">
              <div className="text-center z-20 text-white">
                <h1 className="text-4xl font-bold mb-2">Jasa Las Profesional</h1>
                <p className="text-xl">Solusi las terbaik untuk kebutuhan Anda</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-white/90 text-gray-900 px-4 py-2 rounded-lg">
              <p className="font-medium">Banner Utama Website</p>
            </div>
          </div>
        </div>
        
        {/* Contoh Galeri dengan Gambar */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Galeri Pekerjaan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Pagar Besi Minimalis</span>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-gray-900">Pagar Besi Minimalis</h4>
                <p className="text-gray-600 text-sm mt-1">Finishing powder coating tahan cuaca</p>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Kanopi Baja Ringan</span>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-gray-900">Kanopi Baja Ringan</h4>
                <p className="text-gray-600 text-sm mt-1">Atap polikarbonat anti bocor</p>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Tralis Jendela</span>
                </div>
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-gray-900">Tralis Jendela</h4>
                <p className="text-gray-600 text-sm mt-1">Desain ornamental custom</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contoh About dengan Gambar */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Tentang Kami</h3>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                Kami adalah penyedia jasa las profesional dengan pengalaman lebih dari 10 tahun. 
                Dengan tim ahli yang terampil, kami menghadirkan solusi las berkualitas tinggi.
              </p>
              <p className="text-gray-700">
                Bengkel kami dilengkapi dengan peralatan las terkini dan bahan baku terbaik untuk 
                memastikan hasil akhir yang tahan lama dan estetis.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 rounded-xl overflow-hidden">
                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Bengkel Las Profesional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Instruksi untuk pengguna */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Cara Mengganti Placeholder dengan Gambar Asli</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-blue-800">1. Simpan Gambar di Folder yang Tepat</h4>
              <p className="text-blue-700 text-sm">
                Tempatkan file gambar di folder <code className="bg-blue-200 px-1 rounded">public/images/</code>
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-blue-800">2. Ganti Placeholder dengan Komponen Image</h4>
              <div className="mt-2 bg-gray-800 text-gray-100 p-4 rounded-lg text-sm">
                <pre>{`<Image 
  src="/images/nama-gambar.jpg"
  alt="Deskripsi gambar"
  width={600}
  height={400}
  className="w-full h-48 object-cover"
/>`}</pre>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-blue-800">3. Contoh Penggunaan</h4>
              <div className="mt-2 bg-gray-800 text-gray-100 p-4 rounded-lg text-sm">
                <pre>{`{/* Sebelum */}
<div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
  <span className="text-gray-500">Pagar Minimalis</span>
</div>

{/* Sesudah */}
<Image 
  src="/images/pagar-minimalis.jpg"
  alt="Pagar Minimalis Besi Tempa"
  width={600}
  height={400}
  className="w-full h-64 object-cover"
/>`}</pre>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-medium text-yellow-800 mb-2">💡 Tips</h4>
            <ul className="list-disc list-inside text-yellow-700 space-y-1 text-sm">
              <li>Pastikan nama file menggunakan huruf kecil dan tanda hubung</li>
              <li>Kompres gambar untuk ukuran file yang lebih kecil</li>
              <li>Gunakan resolusi yang sesuai (600x400px untuk galeri)</li>
              <li>Tambahkan alt text yang deskriptif untuk aksesibilitas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContohImplementasiGambar;