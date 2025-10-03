# Panduan Gambar untuk Website Jasa Las

Folder ini digunakan untuk menyimpan gambar-gambar yang akan ditampilkan di website jasa las.

## Jenis Gambar yang Dibutuhkan:

1. **Foto Bengkel Las** - Gambar suasana bengkel yang rapi dan profesional
2. **Contoh Pekerjaan**:
   - Pagar besi minimalis
   - Kanopi baja ringan
   - Tralis jendela
   - Pintu gerbang besi
   - Railing tangga
   - Meja/custom las lainnya

## Rekomendasi Ukuran Gambar:

- **Foto Horizontal**: 800x600px
- **Foto Vertical**: 600x800px
- **Format**: JPG atau PNG
- **Kualitas**: 72 DPI (untuk web)

## Cara Mengganti Placeholder Gambar:

1. Simpan gambar di folder ini (`public/images/`)
2. Ganti komponen placeholder dengan komponen Next.js Image:
   ```jsx
   // Sebelum (placeholder)
   <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
     <span className="text-gray-500">Gambar Bengkel Las</span>
   </div>
   
   // Sesudah (dengan gambar asli)
   <Image 
     src="/images/bengkel-las.jpg" 
     alt="Bengkel Las Profesional" 
     width={800} 
     height={600}
     className="w-full h-96 object-cover"
   />
   ```

## Contoh Penamaan File:
- bengkel-las.jpg
- pagar-minimalis.jpg
- kanopi-baja-ringan.jpg
- tralis-jendela.jpg
- pintu-gerbang-besi.jpg
- railing-tangga.jpg

Pastikan nama file menggunakan huruf kecil dan tanda hubung (-) sebagai pengganti spasi.