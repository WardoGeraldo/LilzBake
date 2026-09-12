# LilzBake Website — Spec Package untuk AI Coding Agent

Paket ini berisi brief lengkap untuk membangun website profil bisnis **LilzBake**
(Roti & Cake Jadul Premium, Surabaya Timur). Dibuat supaya bisa langsung
di-*paste*/di-*attach* ke AI coding agent kamu (Antigravity + Gemini 3.8 Flash)
dan menghasilkan website yang presisi dengan visi brand ini — tanpa agent
harus menebak-nebak.

## Cara pakai

1. **Upload seluruh folder ini** (termasuk folder `assets/`) ke project Antigravity.
2. Minta agent membaca semua file `.md` di sini **sebelum** menulis kode apa pun.
3. Urutan baca yang disarankan (file sudah diberi nomor):
   - `01-BRAND-IDENTITY.md` → siapa LilzBake, palet warna, tipografi, suara brand
   - `02-CONTENT-COPY.md` → semua teks jadi (headline, deskripsi, CTA, dsb) — **jangan diparafrase ulang oleh AI**, pakai apa adanya
   - `03-SITE-STRUCTURE-WIREFRAMES.md` → urutan section, layout tiap section, komponen
   - `04-ANIMATION-INTERACTION-SPEC.md` → animasi hero "unboxing", scroll reveal, micro-interaction
   - `05-ASSETS-MEDIA-GUIDE.md` → daftar aset yang tersedia vs yang masih kurang
   - `06-TECHNICAL-SPEC.md` → stack, struktur folder Next.js, dependency, SEO, performa
4. Aset foto yang sudah tersedia & sudah dioptimasi ada di `assets/images/`.
   Copy folder ini ke `public/images/` di project Next.js kamu.

## Prompt starter yang bisa kamu paste ke Antigravity

```
Kamu adalah frontend engineer senior. Bangun website single-page untuk LilzBake
menggunakan Next.js 14 (App Router) + Tailwind CSS + Framer Motion, mengikuti
SELURUH spesifikasi di file 01 sampai 06 pada folder ini secara ketat:
- Palet warna, font, dan voice brand HARUS sesuai 01-BRAND-IDENTITY.md
- Gunakan copy di 02-CONTENT-COPY.md apa adanya, jangan ditulis ulang
- Ikuti urutan section & wireframe di 03-SITE-STRUCTURE-WIREFRAMES.md
- Animasi hero dan scroll-reveal HARUS sesuai timing & easing di
  04-ANIMATION-INTERACTION-SPEC.md — jangan menambah animasi lain di luar spec
- Gunakan aset di assets/images/ sesuai pemetaan di 05-ASSETS-MEDIA-GUIDE.md
- Ikuti struktur folder, dependency, dan SEO checklist di 06-TECHNICAL-SPEC.md
Setelah selesai, buat daftar aset yang masih perlu aku upload manual
(6 foto galeri + 2 video) sesuai spesifikasi teknis di 05-ASSETS-MEDIA-GUIDE.md.
```

## Yang masih kamu perlu siapkan sendiri (tidak ada di paket ini)

- **6 foto produk tambahan** untuk melengkapi grid galeri 9 foto (baru ada 3: box,
  kue sus, roti bantal). Lihat detail spek di `05-ASSETS-MEDIA-GUIDE.md`.
- **2 video cinematic portrait** produk (9:16). Spek durasi/format ada di file yang sama.
- **Testimoni asli pelanggan** — di `02-CONTENT-COPY.md` sudah ada 4 contoh
  placeholder yang realistis, tapi sebaiknya diganti dengan testimoni asli
  (boleh screenshot chat WA / DM Instagram, atau kutipan tertulis + nama).
- **Domain** — belum ditentukan. Sarankan sesuatu seperti `lilzbake.id` atau
  `lilzbake.com` saat deploy.

## Catatan penting

File-file ini ditulis sebagai **kontrak desain**, bukan sekadar ide. Semakin
agent mengikuti angka/hex/copy persis seperti tertulis, semakin dekat hasilnya
dengan visi "hangat, nostalgic, mesmerizing" yang kamu mau — bukan template
generik ala AI (background krem + font serif kontras + aksen terracotta yang
"terlihat sama di semua website AI").
