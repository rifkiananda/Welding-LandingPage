# PT Next Welder Website Template

Template website profesional untuk jasa las PT Next Welder. Template ini sudah siap digunakan dan mudah dikustomisasi.

## Fitur Template

- **Desain Modern**: Menggunakan Tailwind CSS dan Framer Motion
- **Multibahasa**: Support Bahasa Indonesia dan Inggris
- **Responsive**: Tampil sempurna di semua perangkat
- **Animasi Keren**: Efek transisi halus dan interaktif
- **Mudah Digunakan**: Cukup ganti gambar dan teks

## Cara Menggunakan Template

### 1. Ganti Konten Perusahaan
Edit file: `src/config/site-config.ts`
```typescript
export const siteConfig = {
  company: {
    name: "PT Next Welder",           // Ganti dengan nama perusahaan Anda
    tagline: "Solusi las profesional...", // Ganti dengan tagline Anda
    experience: "15+ Tahun Pengalaman"   // Ganti dengan pengalaman Anda
  },
  // ... ganti konten lainnya
}
```

### 2. Ganti Gambar
Ganti file-file gambar di folder `public/images/`:
- `hero-banner.jpg` - Banner utama (1200x600px)
- `workshop-interior.jpg` - Interior bengkel (800x600px)
- `fence-welding.jpg` - Gambar layanan las pagar (600x400px)
- `canopy-structure.jpg` - Gambar layanan las kanopi (600x400px)
- `window-grilles.jpg` - Gambar layanan las tralis (600x400px)
- `custom-fabrication.jpg` - Gambar layanan custom (600x400px)
- `project-1.jpg` sampai `project-6.jpg` - Gambar galeri (600x400px)

### 3. Ganti Informasi Kontak
Edit file: `src/config/site-config.ts`
```typescript
contact: {
  phone: "+62 812 3456 7890",        // Ganti dengan nomor Anda
  email: "info@nextwelder.com",      // Ganti dengan email Anda
  address: "Jl. Industri No. 123...", // Ganti dengan alamat Anda
  whatsapp: "https://wa.me/6281234567890" // Ganti dengan link WA Anda
}
```

## Struktur File

```
├── public/
│   └── images/              # Folder gambar
├── src/
│   ├── components/          # Komponen React
│   ├── config/              # File konfigurasi
│   └── app/                 # Halaman utama
├── TEMPLATE-GUIDE.md        # Panduan penggunaan
└── README-TEMPLATE.md       # Dokumentasi template
```

## Menjalankan Website

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

## Kustomisasi Lebih Lanjut

### Mengganti Warna
Edit file: `src/app/globals.css`
```css
/* Ganti warna sesuai keinginan */
.from-green-500 to-green-600  /* Warna tombol utama */
.bg-gradient-to-r from-gray-900 to-gray-800  /* Background */
```

### Menambahkan Halaman Baru
1. Buat file baru di `src/app/`
2. Tambahkan route di navigasi

## Bantuan

Jika mengalami kesulitan:
1. Baca `TEMPLATE-GUIDE.md` untuk panduan lengkap
2. Pastikan nama file gambar sesuai
3. Periksa ukuran gambar
4. Restart server dengan `npm run dev`

Template ini dirancang agar Anda hanya perlu mengganti gambar dan teks di satu tempat!