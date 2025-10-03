# Dokumentasi: Cara Menambahkan Gambar ke Website Jasa Las

Dokumen ini menjelaskan langkah-langkah untuk menambahkan gambar asli ke website jasa las agar tampil lebih profesional dan menarik.

## Struktur Folder Gambar

```
public/
└── images/
    ├── pagar-minimalis.jpg
    ├── kanopi-baja-ringan.jpg
    ├── tralis-jendela.jpg
    ├── pintu-gerbang-besi.jpg
    ├── railing-tangga.jpg
    ├── meja-las-custom.jpg
    ├── bengkel-las.jpg
    └── banner-utama.jpg
```

## Langkah-langkah Menambahkan Gambar

### 1. Menyiapkan Gambar

1. **Ambil foto berkualitas tinggi**:
   - Gunakan kamera dengan resolusi minimal 8MP
   - Pastikan pencahayaan cukup (alami lebih baik)
   - Fokus pada subjek utama (hasil las)
   - Hindari bayangan yang terlalu gelap

2. **Edit gambar**:
   - Potong ke ukuran yang sesuai
   - Sesuaikan kecerahan dan kontras
   - Kompres ke format JPG dengan kualitas 80%

3. **Penamaan file**:
   - Gunakan huruf kecil semua
   - Pisahkan kata dengan tanda hubung (-)
   - Contoh: `pagar-minimalis.jpg`, `kanopi-baja-ringan.jpg`

### 2. Mengunggah Gambar

1. **Simpan gambar di folder yang tepat**:
   ```
   public/images/nama-gambar.jpg
   ```

2. **Pastikan format file**:
   - JPG untuk foto (80% kualitas)
   - PNG untuk grafik atau logo
   - Ukuran file maksimal 500KB per gambar

### 3. Mengganti Placeholder dengan Gambar Asli

#### Contoh pada komponen Gallery:

**Sebelum (menggunakan placeholder)**:
```jsx
<div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
  <span className="text-gray-500">Hasil Pekerjaan 1</span>
</div>
```

**Sesudah (dengan gambar asli)**:
```jsx
<Image 
  src="/images/pagar-minimalis.jpg"
  alt="Pagar Minimalis Besi Tempa"
  width={600}
  height={400}
  className="w-full h-64 object-cover"
/>
```

#### Contoh pada komponen Hero:

**Sebelum (menggunakan placeholder)**:
```jsx
<div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
  <span className="text-gray-500">Gambar Bengkel Las</span>
</div>
```

**Sesudah (dengan gambar asli)**:
```jsx
<Image 
  src="/images/banner-utama.jpg"
  alt="Tim Las Profesional Sedang Bekerja"
  width={1200}
  height={600}
  className="w-full h-96 object-cover"
/>
```

## Komponen ImagePlaceholder

Kami telah membuat komponen khusus untuk memudahkan penggantian placeholder dengan gambar asli:

```jsx
<ImagePlaceholder 
  src="/images/nama-gambar.jpg"  // Tambahkan ini saat gambar tersedia
  alt="Deskripsi gambar"
  width={600}
  height={400}
  className="w-full h-48 object-cover"
  placeholderText="Judul Gambar"
  description="Deskripsi singkat"
/>
```

## Rekomendasi Gambar

### Gambar Wajib:
1. **Banner Utama** - Tim las sedang bekerja
2. **Foto Bengkel** - Tampak keseluruhan bengkel
3. **Contoh Pekerjaan**:
   - Pagar besi minimalis
   - Kanopi baja ringan
   - Tralis jendela
   - Pintu gerbang besi
   - Railing tangga
   - Fabrikasi custom

### Gambar Tambahan:
1. **Proses Pengerjaan** - Tahapan las
2. **Alat dan Peralatan** - Mesin las profesional
3. **Tim** - Ahli las sedang bekerja
4. **Before/After** - Perbandingan hasil

## Tips Fotografi untuk Jasa Las

1. **Komposisi**:
   - Tunjukkan detail hasil las
   - Sertakan lingkungan penggunaan
   - Gunakan sudut menarik

2. **Pencahayaan**:
   - Hindari pantulan pada permukaan logam
   - Gunakan pencahayaan softbox jika perlu
   - Manfaatkan cahaya alami pagi/sore

3. **Perspektif**:
   - Tampak depan, samping, dan detail
   - Tampilkan skala (dengan manusia atau objek referensi)
   - Fokus pada finishing dan kualitas

## Troubleshooting

### Gambar tidak muncul:
1. Pastikan file ada di folder `public/images/`
2. Periksa penulisan path: `/images/nama-file.jpg`
3. Restart development server: `npm run dev`

### Gambar terlalu besar:
1. Kompres dengan tools seperti TinyJPG
2. Sesuaikan dimensi ke maksimal 1200px lebar
3. Gunakan format WebP untuk kualitas lebih baik

### Gambar terlihat buram:
1. Gunakan resolusi asli yang cukup tinggi
2. Hindari upscale gambar kecil
3. Pastikan format JPG dengan kualitas 80-90%

## Hak Cipta dan Lisensi

1. **Gunakan foto sendiri** untuk hasil terbaik
2. **Jika menggunakan stok foto**, pastikan:
   - Memiliki lisensi komersial
   - Memberi atribusi jika diperlukan
   - Tidak melanggar hak cipta pihak lain

## Contoh Implementasi

Lihat file `src/components/GalleryWithImages.tsx` untuk contoh implementasi lengkap penggunaan gambar.

Untuk melihat contoh gambar visual, buka file `public/images/CONTOH-GAMBAR.md`.

---
Dokumentasi ini dibuat untuk memandu pengguna dalam menambahkan gambar berkualitas ke website jasa las. Ikuti panduan ini untuk hasil terbaik.