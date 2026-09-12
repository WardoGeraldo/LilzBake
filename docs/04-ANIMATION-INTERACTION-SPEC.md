# 04 — Animation & Interaction Spec

## Filosofi animasi (baca ini dulu)

Website akan terasa "mesmerizing" bukan karena banyak animasi, tapi karena
**satu momen animasi hero yang diorkestrasi dengan baik**, ditambah
micro-interaction yang konsisten & ringan di seluruh halaman. Ini prinsip
yang harus dipegang AI agent:

1. **Satu momen besar** di hero (urutan "unboxing" saat halaman dimuat).
2. **Reveal scroll yang seragam & halus** di section lain — bukan
   fade-slide-up dramatis di setiap section (itu pola generik yang harus
   dihindari). Cukup fade + scale sangat halus, cepat, dan konsisten.
3. **Motion menjawab aksi user** (hover, klik, scroll) — bukan animasi acak
   yang looping tanpa alasan, kecuali floating box di hero (itu memang
   elemen "hidup" yang disengaja, terinspirasi dari referensi kaleng jamu
   yang melayang di gambar referensi brand lain — dipakai di sini untuk
   packaging box LilzBake, bukan brand lain).
4. Semua animasi **harus ringan**: gunakan `transform` (translate/scale/rotate)
   dan `opacity` saja — hindari animasi yang memicu reflow/layout
   (mis. animasikan `width`/`height`/`top`/`left` langsung).
5. **Hormati `prefers-reduced-motion`**: jika user mengaktifkan reduce motion,
   matikan floating loop & parallax, sisakan fade sederhana saja (durasi
   dipercepat, tanpa gerakan posisi).

## Rekomendasi library

- **Framer Motion** untuk orkestrasi hero (sequence, stagger) — terintegrasi
  natural dengan Next.js/React, bundle size wajar untuk kebutuhan ini.
- **IntersectionObserver native / `useInView` dari Framer Motion** untuk
  scroll-reveal — TIDAK perlu GSAP ScrollTrigger untuk scope sebesar ini,
  supaya bundle tetap ringan ("tidak berat" sesuai requirement awal).
- Video: native `<video>` dengan `preload="none"` dan poster image, JANGAN
  autoplay video besar tanpa interaksi user (berat & mengganggu).

---

## A. Hero — "Unboxing Sequence" (animasi utama, sekali saat page load)

Timeline (total durasi ~1.8 detik untuk seluruh sequence, lalu lanjut ke
idle loop):

| Waktu (detik) | Elemen | Animasi |
|---|---|---|
| 0.0 | Badge "Baked With Love · Est. 2019" | opacity 0→1, translateY 8px→0, easing `easeOut`, durasi 0.5s |
| 0.15 | Headline "Rasa yang Bikin Kangen." | muncul per-kata (stagger 0.06s antar kata), opacity 0→1 + translateY 14px→0, easing `easeOut`, durasi tiap kata 0.5s |
| 0.4 | Tagline italic "Taste Of Nostalgia" | opacity 0→1, sedikit scale 0.96→1, durasi 0.6s |
| 0.5 | Subheadline paragraf | opacity 0→1, translateY 10px→0, durasi 0.5s |
| 0.65 | Tombol CTA (2 tombol) | opacity 0→1 + translateY 10px→0, stagger 0.08s antar tombol |
| 0.3 (paralel) | Box packaging image | masuk dari atas: translateY -60px→0 sambil rotate dari -8deg → -4deg (posisi akhir sedikit miring, bukan lurus sempurna), scale 0.92→1, easing custom `cubic-bezier(0.16, 1, 0.3, 1)` (efek "jatuh lalu settle" — sedikit overshoot lembut di akhir), durasi 1.0s |
| 0.9 (setelah box settle) | Shadow di bawah box | fade in mengikuti posisi box, opacity 0→0.25 |
| 1.0 (setelah semua masuk) | Box packaging | masuk ke **idle floating loop** (lihat di bawah) — tidak berhenti, looping selama user di hero |
| 0.6–1.4 (paralel, halus) | 2–3 elemen dekoratif line-art roti (SVG kecil) di sekitar box | fade in + translate diagonal singkat (mis. dari 15px offset ke posisi akhir), lalu ikut floating pelan dengan periode berbeda dari box utama (supaya tidak terasa seperti "menempel kaku") |

**Idle floating loop (setelah sequence awal selesai, berulang terus selama
hero terlihat):**
- Box: `translateY` naik-turun ±10px, durasi 4s per siklus, easing
  `easeInOut`, `repeat: Infinity`, `repeatType: mirror`.
- Rotasi ikut halus: dari -4deg ke -2deg dan kembali, durasi 5s (periode
  beda dari translateY supaya gerakannya organik, tidak sinkron kaku).
- Shadow di bawah box: scale & opacity berlawanan arah dengan translateY box
  (box naik → shadow mengecil & memudar sedikit; box turun → shadow membesar)
  — efek ini yang membuat floating terasa punya "bobot", bukan sekadar
  elemen mengambang tanpa gravitasi.
- Elemen dekoratif line-art: floating dengan amplitudo lebih kecil (±5px),
  periode 6-7s, arah gerak sedikit berbeda dari box (mis. diagonal, bukan
  vertikal murni) supaya terasa seperti debu tepung/remah yang melayang
  pelan, bukan duplikat animasi box.

**Parallax scroll (opsional tapi disarankan, ringan):** saat user scroll ke
bawah menjauhi hero, box bergerak translateY sedikit lebih lambat dari
kecepatan scroll (`translateY: scrollY * 0.15`) dan fade out opacity menuju
0 saat mendekati batas section About — memberi kesan depth tanpa JS berat
(gunakan `useScroll` + `useTransform` dari Framer Motion, atau CSS
`position: sticky` + opacity berbasis scroll listener yang di-throttle).

---

## B. Scroll Reveal (semua section setelah hero)

Gunakan **satu pola konsisten** untuk semua elemen yang reveal saat masuk
viewport:

- opacity: 0 → 1
- scale: 0.98 → 1 (BUKAN translateY besar/slide — cukup scale halus supaya
  tidak terasa seperti template "fade-slide-up" generik)
- durasi: 0.5s, easing `easeOut`
- trigger: `IntersectionObserver` dengan `threshold: 0.15`, animasi hanya
  jalan sekali per elemen (`triggerOnce: true`) — jangan reset animasi saat
  scroll naik-turun berulang (mengganggu & terasa murahan).

**Stagger khusus untuk grid** (Products, Gallery, Testimonials, B2B cards):
- Delay antar item: 0.06s (jangan lebih dari itu — supaya grid besar seperti
  gallery 9 foto tidak terasa lambat).
- Maksimal stagger total per grid: 0.4s (jika item banyak, cap delay-nya,
  jangan linear tanpa batas).

**Yang TIDAK boleh dianimasikan dengan reveal ini:**
- Navbar (selalu langsung terlihat).
- Footer (langsung terlihat, tidak perlu reveal — dia di akhir scroll,
  reveal di situ terasa percuma).

---

## C. Micro-interactions (hover, klik)

| Elemen | Interaksi |
|---|---|
| Tombol CTA solid (mis. "Pesan via WhatsApp") | Hover: scale 1→1.03, background sedikit lebih gelap (`--color-text-secondary` → turunan lebih gelap 8%), durasi 0.2s |
| Tombol CTA outline/ghost | Hover: background fill dari transparan → `--color-bg-alt`, border tetap, durasi 0.2s |
| Kartu produk | Hover: translateY 0→-6px, shadow membesar halus (shadow warna coklat transparan, bukan abu-abu), foto di dalam kartu scale 1→1.05 (dengan `overflow:hidden` di container foto), durasi 0.3s |
| Foto gallery | Hover: scale 1→1.04 dalam container overflow-hidden, overlay gradient coklat tipis muncul dari bawah (opacity 0→0.15), durasi 0.3s |
| Video card | Hover: tombol play scale 1→1.1, poster sedikit dim (brightness 100%→90%) |
| Link navbar | Hover: underline tumbuh dari kiri ke kanan (width 0%→100%, bukan underline instan) |
| Floating WA button | Hover (desktop): expand dari icon bulat jadi pill dengan label "Chat Kami", durasi 0.25s, easing `easeOut` |

---

## D. Video Section — perilaku spesifik

- State awal: poster image + tombol play besar di tengah (bulat, background
  blur/frosted `backdrop-filter: blur(8px)` + `background: rgba(255,255,255,0.25)`).
- Klik tombol play → video fade in (opacity 0→1, durasi 0.3s) sambil poster
  fade out, video mulai play dengan controls native browser muncul.
- `preload="none"` wajib — video baru di-load saat user klik play, supaya
  tidak membebani initial page load.

---

## F. Referensi Visual — partakefoods.com (elemen yang diadopsi)

Client menyukai animasi di [partakefoods.com](https://partakefoods.com/) (dibuat
studio Wonderkind, di Shopify). Situs itu untuk brand cookies playful yang
ditujukan ke anak-anak/keluarga — jadi **jangan tiru mentah-mentah nuansanya**
(terlalu ceria/kekanakan untuk LilzBake yang nostalgic-premium). Yang diadopsi
adalah **teknik animasinya**, diterapkan dengan energi yang lebih tenang &
hangat sesuai brand LilzBake:

### 1. Marquee ticker (teks berjalan tanpa henti)

Partake pakai ticker "Delicious • Wholesome • Inclusive •" berulang di bawah
hero. Terapkan pola yang sama untuk LilzBake, isi dengan kata kunci brand:

```
Taste Of Nostalgia • Roti Jadoel • Cake Jadoel • Tanpa Pengawet • Bahan Premium •
```

- Posisi: strip tipis (~48-56px tinggi) tepat di bawah Hero, sebelum section
  About — jadi "jahitan" transisi antar section, bukan section sendiri.
- Background: `--color-text-dark` (`#5c3a1e`) dengan teks krem
  (`--color-bg-main`) — satu-satunya strip gelap selain footer, memberi jeda
  visual dari dominasi krem.
- Animasi: `translateX` infinite loop linear, durasi 25-30s per putaran penuh
  (lebih lambat dari Partake — kesan tenang, bukan energic/cepat), arah kiri
  terus-menerus. Pause saat `prefers-reduced-motion`.
- Font: Fraunces italic kecil (bukan sans — beda dari Partake yang pakai
  sans playful, di sini serif italic lebih pas dengan nuansa nostalgic).

### 2. Komposisi layered/parallax di Hero (bukan cuma 1 gambar mengambang)

Partake menyusun cookie + crumbs + badge sebagai elemen terpisah yang
bergerak di kecepatan berbeda. Terapkan prinsip yang sama pada Hero LilzBake
(bukan cuma box packaging sendirian):

- **Layer 1 (paling depan, gerak paling cepat/responsif)**: box packaging —
  sudah dispesifikasikan di bagian A.
- **Layer 2 (tengah)**: 2-3 elemen dekoratif line-art roti kecil (sudah ada
  di bagian A) — geser jadi ikut merespons **mouse-move** juga di desktop
  (bukan cuma floating loop otomatis): `translate` mengikuti posisi kursor
  dengan damping/lerp halus, amplitudo kecil (maks ±12px), supaya terasa
  hidup saat user gerak-gerakkan mouse — efek depth seperti Partake.
- **Layer 3 (paling belakang)**: watermark motif line-art besar & samar
  (opacity 4-6%, sudah ada di bagian Hero wireframe) — statis atau parallax
  sangat lambat mengikuti scroll saja (bukan mouse), memberi kedalaman tanpa
  ramai.
- Mouse-parallax **hanya aktif di desktop** (`window.matchMedia('(pointer: fine)')`)
  — jangan dipaksakan di mobile (tidak ada cursor, dan bisa memicu jank saat
  scroll pakai touch).

### 3. Reveal dengan sedikit "bounce" (opsional, halus)

Partake pakai overshoot easing yang cukup kentara (khas playful brand).
Untuk LilzBake, pakai versi **jauh lebih halus** — sedikit overshoot di akhir
animasi hero saja (box "settle" — sudah ditulis di bagian A dengan
`cubic-bezier(0.16, 1, 0.3, 1)`), TAPI jangan pakai bounce di reveal
scroll section lain (bagian B tetap pakai `easeOut` polos, scale+opacity) —
supaya kesan keseluruhan tetap tenang & elegan, bounce hanya jadi "signature
moment" satu kali di hero, bukan berulang di semua tempat (konsisten dengan
prinsip "satu momen besar" di bagian atas file ini).

### 4. Marquee logo mitra (opsional, jika ada logo cafe/toko partner B2B)

Jika ke depannya LilzBake punya daftar logo cafe/toko yang sudah jadi
pelanggan tetap (seperti retailer logos di Partake: Kroger, Target, dst),
tambahkan strip marquee logo serupa di section B2B/Supplier — infinite
scroll horizontal, grayscale/monokrom coklat muda (bukan warna asli logo,
supaya tetap konsisten dengan palet brand), full color saat di-hover.
*(Belum ada datanya sekarang — catat sebagai enhancement masa depan, bukan
requirement wajib versi pertama.)*

### 5. Yang SENGAJA TIDAK diadopsi dari Partake

- Sticker/badge bentuk lucu berwarna-warni cerah — tidak sesuai palet
  krem-coklat & nuansa nostalgic LilzBake.
- Energi visual yang sangat "loud"/playful (banyak elemen bergerak
  bersamaan, warna kontras tinggi) — LilzBake harus terasa tenang & hangat,
  gerakan dibuat lebih lambat & elemen lebih sedikit di layar dalam satu waktu.

---

## G. Aksesibilitas & performa (checklist wajib)

- [ ] Semua animasi memeriksa `window.matchMedia('(prefers-reduced-motion: reduce)')` — jika true, floating loop & parallax dimatikan, transisi reveal dipercepat jadi 0.15s tanpa scale/translate (opacity saja).
- [ ] Tidak ada animasi yang menyebabkan Cumulative Layout Shift (CLS) — semua gambar punya `width`/`height` (atau `next/image` dengan aspect ratio) sebelum animasi jalan.
- [ ] Floating animation di hero di-pause otomatis saat tab tidak aktif (`document.visibilityState`) untuk hemat CPU/baterai.
- [ ] Gunakan `will-change: transform` HANYA pada elemen yang benar-benar looping terus-menerus (box hero), jangan taruh di semua elemen reveal (boros memory jika berlebihan).
- [ ] Video & gambar di bawah fold pakai lazy loading (`loading="lazy"` / `next/image` default lazy).
