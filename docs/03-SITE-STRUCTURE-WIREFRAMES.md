# 03 — Site Structure & Wireframes

Website ini **single-page** dengan scroll panjang, navigasi anchor-link.
Urutan section berikut ini **final** — jangan diubah urutannya tanpa alasan
kuat, karena disusun sebagai alur emosional: kenalkan brand → cerita → bukti
produk → bukti visual → bukti sosial → ajakan bisnis → ajakan aksi.

```
1. Navbar (sticky, transparan di atas hero → solid setelah scroll)
2. Hero
3. About ("Tentang LilzBake")
4. Products ("Produk Favorit")
5. Gallery ("Momen Manis LilzBake") — grid 9 foto
6. Video ("Lihat Prosesnya") — 2 video cinematic
7. Testimonials ("Kata Mereka")
8. B2B / Supplier ("Untuk Bisnis & Acara Spesialmu")
9. Contact ("Yuk, Pesan Sekarang")
10. Footer
11. Floating WhatsApp button (persisten, muncul setelah scroll melewati hero)
```

---

## 1. Navbar

```
┌──────────────────────────────────────────────────────────────┐
│ [Logo LilzBake]   Tentang  Produk  Galeri  Testimoni  Bisnis  │
│                                             Kontak  [Chat Admin]│
└──────────────────────────────────────────────────────────────┘
```
- Desktop: logo kiri, menu tengah/kanan, tombol "Chat Admin" solid coklat paling kanan.
- Mobile: logo kiri, hamburger kanan → menu fullscreen overlay dengan background
  `--color-bg-alt` dan motif line-art tipis, tombol "Chat Admin" tetap terlihat
  di bagian bawah overlay.
- Sticky: transparan (blend dengan hero) saat di atas, begitu discroll >80px
  berubah jadi solid `--color-surface` + shadow tipis (bukan shadow abu-abu
  generik — pakai shadow warna coklat sangat transparan, mis.
  `rgba(161,108,55,0.12)`).

---

## 2. Hero

```
┌──────────────────────────────────────────────────────────────┐
│  Baked With Love · Est. 2019                                  │
│                                                                │
│  Rasa yang                              ┌──────────────┐      │
│  Bikin Kangen.                          │              │      │
│  Taste Of Nostalgia                     │  [Box Photo] │      │
│                                          │  (floating,  │      │
│  Roti dan cake jadul premium dari       │  tilted)     │      │
│  Surabaya Timur — dibuat dengan bahan   │              │      │
│  pilihan, tanpa pengawet...             └──────────────┘      │
│                                                                │
│  [Pesan via WhatsApp]  [Lihat Produk Kami]                    │
│                                                                │
│  Roti Jadoel · Cake Jadoel · Hampers                          │
└──────────────────────────────────────────────────────────────┘
```
- Layout desktop: 2 kolom (teks kiri ~55%, visual box kanan ~45%).
- Layout mobile: 1 kolom — badge → headline → tagline → subheadline → CTA
  stack → box image di bawah teks (bukan di atas, supaya headline terbaca
  duluan).
- Background: gradient sangat halus dari `--color-bg-main` ke `--color-bg-alt`
  (135deg), dengan watermark motif line-art roti (opacity ~5%) tersebar di
  beberapa titik, terutama di belakang area kosong kanan-atas dan kiri-bawah.
- Detail animasi lengkap ada di `04-ANIMATION-INTERACTION-SPEC.md`.

---

## 3. About

```
┌──────────────────────────────────────────────────────────────┐
│  Sejak 2019                                                   │
│                                                                │
│  Bakery yang Setia Sama Rasa Lama     ┌────────────────────┐  │
│                                        │                    │  │
│  LilzBake lahir dari kerinduan...     │  [Roti Bantal Wide │  │
│  ...bergumam "ini rasanya kayak       │   Banner Photo]    │  │
│  dulu."                               │                    │  │
│                                        └────────────────────┘  │
│  [Bahan Premium] [Tanpa Pengawet] [Resep Nostalgia]           │
└──────────────────────────────────────────────────────────────┘
```
- Desktop: teks kiri (~50%), foto banner `product-roti-bantal-wide.jpg` kanan
  dengan sudut membulat lembut (radius besar, ~24px) dan sedikit rotasi
  statis (-2deg) untuk kesan "ditempel seperti foto polaroid", bukan kotak
  sempurna.
- Mobile: foto di atas (full width, radius disesuaikan), teks di bawah.
- 3 value tag ditampilkan sebagai pill horizontal, wrap ke baris baru di
  mobile.

---

## 4. Products

```
┌──────────────────────────────────────────────────────────────┐
│  Produk Favorit                                               │
│  Delapan rasa jadul andalan kami — semuanya bisa jadi hampers. │
│                                                                │
│  ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐                      │
│  │ Foto  │ │ Foto  │ │ Foto  │ │ Foto  │                      │
│  │ Roti  │ │ Roti  │ │ Roti  │ │ Roti  │                      │
│  │Bantal │ │ Sisir │ │ Smeer │ │Assort.│                      │
│  └───────┘ └───────┘ └───────┘ └───────┘                      │
│  ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐                      │
│  │ Foto  │ │ Foto  │ │ Foto  │ │ Foto  │                      │
│  │Kue Sus│ │ Cake  │ │ Roti  │ │Eclair │                      │
│  │       │ │Jadoel │ │ Sobek │ │       │                      │
│  └───────┘ └───────┘ └───────┘ └───────┘                      │
│                                                                │
│   [Foto hampers] Semua produk bisa dikemas jadi hampers cantik │
│                                                                │
│              [Lihat Semua Produk di Instagram]                │
└──────────────────────────────────────────────────────────────┘
```
- Grid 4 kolom × 2 baris (desktop) → 2 kolom (tablet) → 1 kolom
  scroll-snap horizontal (mobile, terasa premium seperti carousel produk).
- Semua 8 kartu memakai foto asli (tidak ada lagi placeholder di section
  ini — lihat pemetaan file final di `05-ASSETS-MEDIA-GUIDE.md`).
- Kartu: foto rasio 4:5 di atas, nama produk (Fraunces, 22px), deskripsi
  singkat (Plus Jakarta Sans, 15px), radius sudut 20px, background
  `--color-surface`.
- Baris "hampers" di bawah grid: banner tipis full-width memakai
  `product-hampers.jpg` sebagai visual kecil di sisi teks (bukan section
  terpisah, cukup 1 baris penutup grid produk) — menegaskan bahwa kedelapan
  produk di atas bisa jadi hampers, tanpa mengulang section B2B yang sudah
  membahas hampers untuk konteks acara/bisnis.

---

## 5. Gallery

```
┌──────────────────────────────────────────────────────────────┐
│  Momen Manis LilzBake                                         │
│  Sebagian kecil dari yang sudah kami panggang...              │
│                                                                │
│  ┌────┐┌────┐┌────┐                                           │
│  │ 1  ││ 2  ││ 3  │   <- grid 3 kolom, foto persegi/4:5        │
│  ├────┤├────┤├────┤                                           │
│  │ 4  ││ 5  ││ 6  │                                           │
│  ├────┤├────┤├────┤                                           │
│  │ 7  ││ 8  ││ 9  │                                           │
│  └────┘└────┘└────┘                                           │
└──────────────────────────────────────────────────────────────┘
```
- Grid masonry-ish 3 kolom (desktop), 2 kolom (tablet), 2 kolom scroll
  (mobile) — variasikan tinggi kartu (beberapa 4:5, beberapa 1:1) supaya
  tidak terasa kaku seperti grid Instagram biasa.
- Foto index 1, 5, 8 (atau posisi lain yang pas secara komposisi) memakai
  3 foto asli yang tersedia; sisanya placeholder — lihat pemetaan lengkap di
  `05-ASSETS-MEDIA-GUIDE.md`.
- Klik foto → lightbox sederhana (fade in, tanpa slide dramatis).

---

## 6. Video

```
┌──────────────────────────────────────────────────────────────┐
│  Lihat Prosesnya                                               │
│  Dari oven sampai ke tanganmu...                               │
│                                                                │
│      ┌───────────┐        ┌───────────┐                       │
│      │  9:16     │        │  9:16     │                       │
│      │  video 1  │        │  video 2  │                       │
│      │  ▶        │        │  ▶        │                       │
│      └───────────┘        └───────────┘                       │
│      Proses Panggang       Unboxing Hampers                   │
└──────────────────────────────────────────────────────────────┘
```
- 2 frame video portrait (9:16) berdampingan di desktop, stack vertikal di
  mobile.
- Frame dibungkus seperti bingkai foto polaroid tipis (border putih tebal
  8-12px + shadow lembut), konsisten dengan gaya "ditempel" di About section.
- State sebelum diklik: poster image (ambil frame pertama video atau pakai
  foto produk terkait sebagai poster sementara) + tombol play bulat
  transparan-blur di tengah.

---

## 7. Testimonials

```
┌──────────────────────────────────────────────────────────────┐
│  Kata Mereka                                                   │
│  Bukan kami yang bilang enak — biar pelanggan yang cerita.     │
│                                                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ "quote"  │ │ "quote"  │ │ "quote"  │ │ "quote"  │  (scroll │
│  │ — Nama   │ │ — Nama   │ │ — Nama   │ │ — Nama   │   horiz. │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘  drag)   │
└──────────────────────────────────────────────────────────────┘
```
- Desktop: scroll horizontal dengan drag/scroll-snap (bukan carousel
  auto-play — biarkan user kontrol, lebih tenang & sesuai brand).
  Alternatif jika ingin lebih sederhana: grid 2x2 statis, boleh dipakai jika
  agent menilai lebih stabil untuk implementasi awal.
- Kartu testimoni: background `--color-surface`, tanda kutip besar Fraunces
  italic di pojok kiri-atas sebagai elemen dekoratif (bukan ikon quote
  generik dari icon library).

---

## 8. B2B / Supplier

```
┌──────────────────────────────────────────────────────────────┐
│  Untuk Bisnis & Acara Spesialmu                                │
│  Selain melayani pembelian langsung...                        │
│                                                                │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐              │
│  │ Supplier   │  │ Hampers &  │  │ Katering   │              │
│  │ Cafe/Toko  │  │ Souvenir   │  │ Event      │              │
│  └────────────┘  └────────────┘  └────────────┘              │
│                                                                │
│              [Diskusikan Kebutuhanmu]                          │
└──────────────────────────────────────────────────────────────┘
```
- Background section ini pakai `--color-bg-alt` untuk menandai pergeseran
  konteks dari "konsumen individu" ke "bisnis".
- 3 kartu sejajar, ikon line-art custom kecil di atas tiap judul (bukan
  ikon library generik seperti Font Awesome/Lucide polos — gambar ulang
  gaya line-art tipis sesuai motif kemasan, atau minimal styling ulang
  strokenya jadi warna coklat brand & stroke-width tipis).

---

## 9. Contact

```
┌──────────────────────────────────────────────────────────────┐
│  Yuk, Pesan Sekarang                                           │
│  Kami siap bantu dari Surabaya Timur...                        │
│                                                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │ WA Admin 1  │  │ WA Admin 2  │  │ Instagram   │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
│  ┌─────────────┐  ┌─────────────┐                              │
│  │ Email       │  │ Area Layanan│                              │
│  └─────────────┘  └─────────────┘                              │
└──────────────────────────────────────────────────────────────┘
```
- Grid kartu kontak (bukan form — sesuai keputusan: order langsung via
  WhatsApp, jadi tidak perlu form kontak kompleks).
- Tiap kartu kontak: ikon kecil + label + value, klik langsung membuka
  wa.me / instagram.com / mailto: sesuai jenisnya.

---

## 10. Footer & Floating WA Button

- Footer: background `--color-text-dark` (`#5c3a1e`) dengan teks krem
  (`--color-bg-main`) — satu-satunya section gelap di halaman, untuk
  memberi "penutup" visual yang tegas di akhir scroll.
- Floating WhatsApp button: pojok kanan-bawah, muncul (fade+scale in) setelah
  user scroll melewati hero (~600px), ikon WA + label singkat "Chat Kami" saat
  di-hover (desktop) / selalu terlihat compact (mobile).

---

## Breakpoints

| Nama | Lebar |
|---|---|
| Mobile | < 640px |
| Tablet | 640px – 1024px |
| Desktop | > 1024px |
| Desktop besar (opsional max-width content) | max-width container: 1280px |
