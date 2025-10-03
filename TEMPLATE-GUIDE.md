# PT Next Welder Website Template Guide

Template website siap pakai untuk PT Next Welder. Ikuti panduan ini untuk mengganti konten dan gambar dengan mudah.

## Struktur Folder

```
public/
└── images/
    ├── hero-banner.jpg          # Banner utama (1200x600px)
    ├── workshop-interior.jpg    # Interior bengkel (800x600px)
    ├── fence-welding.jpg        # Gambar layanan las pagar (600x400px)
    ├── canopy-structure.jpg     # Gambar layanan las kanopi (600x400px)
    ├── window-grilles.jpg       # Gambar layanan las tralis (600x400px)
    ├── custom-fabrication.jpg   # Gambar layanan custom (600x400px)
    ├── project-1.jpg            # Gambar proyek 1 (600x400px)
    ├── project-2.jpg            # Gambar proyek 2 (600x400px)
    ├── project-3.jpg            # Gambar proyek 3 (600x400px)
    ├── project-4.jpg            # Gambar proyek 4 (600x400px)
    ├── project-5.jpg            # Gambar proyek 5 (600x400px)
    └── project-6.jpg            # Gambar proyek 6 (600x400px)

src/
└── config/
    └── site-config.ts          # File konfigurasi utama (ganti teks di sini)
```

## Cara Mengganti Konten

### 1. Ganti Informasi Perusahaan
Edit file: `src/config/site-config.ts`

```typescript
export const siteConfig = {
  company: {
    name: "PT Next Welder",                    // Ganti dengan nama perusahaan Anda
    tagline: "Solusi las profesional...",      // Ganti dengan tagline perusahaan
    experience: "15+ Tahun Pengalaman"         // Ganti dengan pengalaman Anda
  },
  // ... bagian lainnya
}
```

### 2. Ganti Informasi Kontak
Edit file: `src/config/site-config.ts`

```typescript
contact: {
  phone: "+62 812 3456 7890",        // Ganti dengan nomor telepon Anda
  email: "info@nextwelder.com",      // Ganti dengan email Anda
  address: "Jl. Industri No. 123...", // Ganti dengan alamat Anda
  whatsapp: "https://wa.me/6281234567890" // Ganti dengan link WhatsApp Anda
}
```

## Cara Mengganti Gambar

### 1. Siapkan Gambar
- Gunakan format JPG untuk foto
- Kompres gambar ke kualitas 80%
- Gunakan ukuran yang direkomendasikan
- Beri nama file sesuai panduan di atas

### 2. Ganti Gambar Hero
1. Siapkan gambar dengan ukuran 1200x600px
2. Simpan dengan nama `hero-banner.jpg`
3. Ganti file di `public/images/hero-banner.jpg`

### 3. Ganti Gambar Layanan
1. Siapkan 4 gambar dengan ukuran 600x400px
2. Gunakan nama file sesuai layanan:
   - `fence-welding.jpg` untuk las pagar
   - `canopy-structure.jpg` untuk las kanopi
   - `window-grilles.jpg` untuk las tralis
   - `custom-fabrication.jpg` untuk layanan custom

### 4. Ganti Gambar Galeri
1. Siapkan 6 gambar proyek dengan ukuran 600x400px
2. Simpan dengan nama:
   - `project-1.jpg` sampai `project-6.jpg`
3. Ganti file di folder `public/images/`

## Cara Mengganti Testimoni

Edit file: `src/config/site-config.ts`

```typescript
testimonials: [
  {
    name: "Nama Klien",           // Ganti dengan nama klien
    company: "Perusahaan Klien",  // Ganti dengan perusahaan klien
    content: "Testimoni klien...", // Ganti dengan testimoni asli
    rating: 5                    // Rating bintang (1-5)
  },
  // ... tambahkan testimoni lainnya
]
```

## Cara Mengganti Statistik

Edit file: `src/config/site-config.ts`

```typescript
stats: [
  { value: 500, label: "Proyek Selesai", suffix: "+" },
  // Ganti angka dan label sesuai bisnis Anda
]
```

## Tips Pengambilan Gambar

### Gambar Hero
- Tunjukkan tim las sedang bekerja
- Pastikan bengkel terlihat rapi dan profesional
- Gunakan pencahayaan yang baik

### Gambar Layanan
- Tampilkan hasil akhir yang rapi
- Sertakan detail pekerjaan
- Tunjukkan kualitas finishing

### Gambar Galeri
- Berbagai jenis proyek
- Before/after jika memungkinkan
- Berbagai sudut pandang

## File yang Tidak Perlu Diubah

File-file berikut sudah dikonfigurasi dengan benar:
- Semua komponen React di `src/components/`
- File konfigurasi Next.js
- File styling dan animasi

## Bantuan

Jika mengalami kesulitan:
1. Pastikan nama file gambar sesuai
2. Periksa ukuran gambar
3. Restart development server dengan `npm run dev`

Template ini dirancang agar Anda hanya perlu mengganti gambar dan teks di satu tempat!