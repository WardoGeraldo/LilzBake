# 05 — Assets & Media Guide

## Aset yang SUDAH TERSEDIA (di folder `assets/images/` paket ini)

Copy seluruh isi `assets/images/` ke `public/images/` di project Next.js.

| File | Ukuran | Format | Pemakaian |
|---|---|---|---|
| `hero-packaging-box.webp` | 900px lebar, transparan | WebP + alpha | Visual utama Hero — box packaging LilzBake, sudah di-crop rapi dengan background transparan, siap dianimasikan (lihat 04-ANIMATION-INTERACTION-SPEC.md) |
| `product-kue-sus.jpg` | 700px lebar | JPEG | Kartu produk "Kue Sus Vla" di section Products; juga dipakai sebagai salah satu foto di grid Gallery |
| `product-roti-bantal.jpg` | 700px lebar | JPEG | Kartu produk "Roti Bantal" di section Products; juga dipakai di grid Gallery |
| `product-roti-bantal-wide.jpg` | 1000px lebar, crop 16:9 | JPEG | Banner foto di section About (crop wide dari foto roti bantal yang sama) |

**Alt text untuk tiap gambar (wajib diisi untuk SEO & aksesibilitas):**

```
hero-packaging-box.webp →
  "Kemasan LilzBake berwarna peach dengan ilustrasi roti dan tulisan Baked With Love Est. 2019"

product-kue-sus.jpg →
  "Tangan mengambil kue sus LilzBake dari dalam kotak kemasan"

product-roti-bantal.jpg →
  "Deretan roti bantal LilzBake dengan topping taburan di atas nampan"

product-roti-bantal-wide.jpg →
  "Close-up roti bantal LilzBake yang empuk dan lembut"
```

---

## Pemetaan 9 foto Gallery (FINAL — sudah dikonfirmasi client)

Semua 9 slot gallery sudah punya nama file final. Client akan menaruh file
foto ini langsung di `public/images/` dengan nama persis seperti di bawah —
AI agent tidak perlu menunggu atau membuat placeholder untuk gallery ini lagi.

| Slot | Nama file | Alt text |
|---|---|---|
| 1 | `product-roti-bantal.jpg` | Deretan roti bantal LilzBake dengan topping taburan di atas nampan |
| 2 | `product-roti-sisir.jpg` | Roti sisir LilzBake close-up menampilkan tekstur berserat khasnya |
| 3 | `product-roti-smeer.jpg` | Roti smeer LilzBake dengan olesan mentega dan gula yang meresap |
| 4 | `product-roti-assorted.jpg` | Beragam jenis roti jadul LilzBake berjajar dalam satu foto |
| 5 | `product-kue-sus.jpg` | Tangan mengambil kue sus LilzBake dari dalam kotak kemasan |
| 6 | `product-cake-jadoel.jpg` | Cake jadoel LilzBake dalam kemasan hampers |
| 7 | `product-roti-sobek.jpg` | Roti LilzBake disobek menampilkan kelembutan tekstur dalamnya |
| 8 | `product-eclair.jpg` | Eclair LilzBake dengan lapisan cokelat mengilap di atasnya |
| 9 | `product-hampers.jpg` | Paket hampers LilzBake lengkap siap dikirim ke pelanggan |

> **Catatan untuk agent**: gunakan urutan di atas persis sebagai urutan render
> grid (slot 1 → posisi pertama grid, dst) kecuali ada alasan layout (mis.
> menyesuaikan rasio potret/lanskap tiap foto untuk grid masonry) — dalam
> kasus itu, urutan boleh diacak ringan asalkan seluruh 9 foto tetap tampil.

> ✅ **Update**: Eclair sudah dikonfirmasi sebagai produk resmi ke-8 di
> section Products (lihat `02-CONTENT-COPY.md`) — total sekarang ada
> **8 produk**: Roti Bantal, Roti Sisir, Roti Smeer, Roti Assorted, Kue Sus,
> Cake Jadoel, Roti Sobek, dan Eclair. Semua produk ini juga bisa dikemas
> jadi hampers (lihat catatan hampers di `02-CONTENT-COPY.md` section
> Products — foto `product-hampers.jpg` dipakai sebagai visual pendukung
> baris tersebut, bukan lagi sekadar foto galeri berdiri sendiri).

## Foto produk untuk Roti Sisir & Roti Smeer (section Products)

Foto asli untuk kedua produk ini **sudah tersedia** (`product-roti-sisir.jpg`
dan `product-roti-smeer.jpg`, sama seperti yang dipakai di Gallery slot 2 & 3
di atas) — jadi kartu produk "Roti Sisir" dan "Roti Smeer" di section
Products **tidak lagi memakai placeholder**. Update di `03-SITE-STRUCTURE-WIREFRAMES.md`
bagian Products: hapus catatan "(placeholder — foto menyusul)" pada kedua
kartu tersebut, ganti dengan pemakaian file yang sama seperti di gallery.

## Video Cinematic Portrait (9:16) — FINAL

| Nama file | Konten |
|---|---|
| `video-sisir.mp4` | Proses Pembuatan Roti Sisir |
| `video-sisir2.mp4` | Hampers LilzBake |

- **Durasi**: 10–25 detik per video (loop pendek, ringan).
- **Format**: MP4 (H.264), resolusi 1080×1920, kompres sampai di bawah
  8–10MB per file sebelum upload (HandBrake/ffmpeg).
- **Poster/thumbnail**: ambil 1 frame still dari tiap video, simpan sebagai
  `video-sisir-poster.jpg` dan `video-sisir2-poster.jpg` untuk dipakai
  sebagai `poster` attribute sebelum video diklik play.
- Simpan di `assets/videos/video-sisir.mp4` dan `assets/videos/video-sisir2.mp4`.
- Caption di bawah video (final, sudah sinkron dengan `02-CONTENT-COPY.md`):
  ```
  Video 1: Proses Pembuatan Roti Sisir
  Video 2: Hampers LilzBake
  ```

### Favicon & OG Image

- Favicon: crop bagian wordmark "LILZBAKE" atau ikon kecil dari kemasan,
  format `.ico` + `.png` (32×32, 180×180 untuk apple-touch-icon).
- OG Image (untuk share link, 1200×630): gunakan foto kemasan
  (`hero-packaging-box.webp`) di atas background gradient `--color-bg-main`
  → `--color-bg-alt`, tambahkan wordmark + tagline "Taste Of Nostalgia" di
  sisi kosong.

---

## Struktur folder aset yang disarankan di project Next.js

```
public/
  images/
    hero-packaging-box.webp
    product-roti-bantal.jpg
    product-roti-bantal-wide.jpg
    product-roti-sisir.jpg
    product-roti-smeer.jpg
    product-roti-assorted.jpg
    product-kue-sus.jpg
    product-cake-jadoel.jpg
    product-roti-sobek.jpg
    product-eclair.jpg
    product-hampers.jpg
    video-sisir-poster.jpg
    video-sisir2-poster.jpg
    favicon.ico
    apple-touch-icon.png
    og-image.jpg
  videos/
    video-sisir.mp4
    video-sisir2.mp4
```

> Catatan: nama-nama file di atas dipakai langsung sebagai identitas foto
> (bukan `gallery-01.jpg` dst) — lebih mudah dikelola & lebih deskriptif untuk
> SEO (nama file ikut jadi sinyal untuk image search). Urutan tampil di grid
> gallery tetap mengikuti tabel "Pemetaan 9 foto Gallery" di atas.
