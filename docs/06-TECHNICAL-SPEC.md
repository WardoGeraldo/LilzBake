# 06 — Technical Spec

## Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS (dengan token warna & font custom, lihat di bawah)
- **Animasi**: Framer Motion
- **Font loading**: `next/font/google` untuk Fraunces & Plus Jakarta Sans
- **Gambar**: `next/image` untuk semua gambar (otomatis lazy-load,
  optimasi format, responsive `sizes`)
- **Deploy target**: Vercel (default Next.js), tapi tidak wajib

## Struktur folder disarankan

```
app/
  layout.tsx          → font setup, metadata global, <html lang="id">
  page.tsx             → merangkai semua section sesuai urutan di 03-SITE-STRUCTURE-WIREFRAMES.md
  globals.css          → CSS variables warna, base styles
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Products.tsx
  ProductCard.tsx
  Gallery.tsx
  GalleryLightbox.tsx
  VideoSection.tsx
  VideoCard.tsx
  Testimonials.tsx
  TestimonialCard.tsx
  B2BSection.tsx
  Contact.tsx
  Footer.tsx
  FloatingWhatsApp.tsx
  decorative/
    BreadDoodle.tsx    → komponen SVG line-art kecil reusable (untuk motif dekoratif)
lib/
  whatsapp.ts           → helper generate link wa.me dengan pesan pre-filled
  content.ts            → (opsional) semua string copy dari 02-CONTENT-COPY.md dipusatkan di sini, supaya mudah diedit tanpa sentuh komponen
public/
  images/ ...            (lihat 05-ASSETS-MEDIA-GUIDE.md)
  videos/ ...
```

## Tailwind config — token warna & font

```js
// tailwind.config.js (potongan relevan)
module.exports = {
  theme: {
    extend: {
      colors: {
        'bg-main': '#fde5db',
        'bg-alt': '#fadfc9',
        surface: '#ffffff',
        'text-primary': '#a16c37',
        'text-secondary': '#a3692d',
        'text-body': '#9a6f42',
        'text-dark': '#5c3a1e',
        'accent-gold': '#c9974f',
        ink: '#3d2712',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
    },
  },
};
```

```tsx
// app/layout.tsx (potongan relevan)
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
});
```

## WhatsApp link helper

```ts
// lib/whatsapp.ts
const ADMIN_1 = '6281233336560';
const ADMIN_2 = '6281267228888';

export function waLink(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const WA_LINKS = {
  admin1General: waLink(ADMIN_1, 'Halo LilzBake! Aku mau tanya-tanya soal produk kalian 🍞'),
  admin2General: waLink(ADMIN_2, 'Halo LilzBake! Aku mau tanya-tanya soal produk kalian 🍞'),
  b2b: waLink(ADMIN_1, 'Halo LilzBake! Aku tertarik kerja sama sebagai supplier/hampers untuk acara/bisnisku. Boleh minta info lebih lanjut?'),
};
```

## Metadata / SEO

```tsx
// app/layout.tsx metadata export
export const metadata = {
  title: 'LilzBake — Roti & Cake Jadul Premium Surabaya | Taste Of Nostalgia',
  description: 'LilzBake menghadirkan roti bantal, roti sisir, roti smeer, dan cake jadoel premium tanpa pengawet dari Surabaya Timur. Cocok untuk hampers, oleh-oleh, dan supplier cafe/event.',
  openGraph: {
    title: 'LilzBake — Roti & Cake Jadul Premium Surabaya',
    description: 'Taste Of Nostalgia — roti dan cake jadul premium dari Surabaya Timur.',
    images: ['/images/og-image.jpg'],
    locale: 'id_ID',
  },
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/apple-touch-icon.png',
  },
};
```

### JSON-LD structured data (LocalBusiness, tanpa alamat fisik)

Karena LilzBake tidak punya alamat toko fisik (area layanan saja), gunakan
`areaServed` tanpa `address` wajib, atau gunakan tipe `Bakery` dengan
`areaServed` mengarah ke Surabaya Timur:

```json
{
  "@context": "https://schema.org",
  "@type": "Bakery",
  "name": "LilzBake",
  "description": "Roti dan cake jadul premium dari Surabaya Timur, tanpa pengawet, dengan cita rasa nostalgia.",
  "areaServed": "Surabaya Timur, Indonesia",
  "telephone": "+6281233336560",
  "email": "lilzbake.id@gmail.com",
  "sameAs": ["https://instagram.com/lilzbake"],
  "slogan": "Taste Of Nostalgia"
}
```

Sisipkan sebagai `<script type="application/ld+json">` di `app/layout.tsx`
atau lewat komponen khusus.

## Responsive breakpoints (Tailwind default, dipakai konsisten)

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px (jadikan `max-w-7xl mx-auto` sebagai container utama konten)

## Aksesibilitas (checklist)

- [ ] Semua gambar punya `alt` sesuai daftar di `05-ASSETS-MEDIA-GUIDE.md`.
- [ ] Kontras teks coklat (`--color-text-body` dkk) di atas background krem
      dicek dengan tool contrast checker — jika ada teks panjang yang
      kontrasnya kurang dari AA (4.5:1), gunakan `--color-text-dark`
      (`#5c3a1e`) untuk paragraf tersebut, bukan pertahankan warna terang di
      body text panjang.
- [ ] Semua elemen interaktif (tombol, link) punya visible focus state
      (outline/ring warna `--color-accent-gold`, bukan dihilangkan dengan
      `outline: none` tanpa pengganti).
- [ ] Video punya `controls` native (jangan buat custom player yang tidak
      accessible tanpa keyboard).
- [ ] Hormati `prefers-reduced-motion` (detail di 04-ANIMATION-INTERACTION-SPEC.md).

## Performance budget (target)

- Lighthouse Performance (mobile): ≥ 85
- Largest Contentful Paint: < 2.5s pada koneksi 4G
- Total JS bundle (initial load, sebelum interaksi): usahakan < 250KB
  gzip (Framer Motion di-import selektif per komponen, bukan seluruh
  library di root layout)
- Gambar hero & above-the-fold: preload/priority (`priority` prop di
  `next/image` untuk gambar hero saja, jangan semua gambar).
- Video: `preload="none"`, tidak ada autoplay video besar di initial load.

## Environment / config lain

- Bahasa halaman: `<html lang="id">`
- Tidak ada backend/database yang dibutuhkan untuk versi awal ini (semua
  konten statis, order lewat WhatsApp) — jadi tidak perlu API routes kompleks,
  cukup static site generation (SSG) penuh untuk performa maksimal.
- Jika nanti ingin tambah CMS (supaya admin bisa update galeri/testimoni
  tanpa sentuh kode), pertimbangkan headless CMS ringan (mis. Sanity/
  Contentful) di iterasi berikutnya — di luar scope paket ini.
