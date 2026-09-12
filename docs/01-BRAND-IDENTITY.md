# 01 — Brand Identity

## Ringkasan brand

| | |
|---|---|
| Nama | LilzBake |
| Berdiri | 2019 |
| Lokasi / area layanan | Surabaya Timur & sekitarnya (tanpa toko fisik/outlet — pre-order & delivery) |
| Bidang | Roti jadul & cake jadul premium, hampers, supplier cafe/toko, katering event |
| Signature phrase | **Taste Of Nostalgia** / `#TasteOfNostalgia` |
| Instagram | [@lilzbake](https://instagram.com/lilzbake) |
| WhatsApp Admin 1 | 0812-3333-6560 → `https://wa.me/6281233336560` |
| WhatsApp Admin 2 | 0812-6722-8888 → `https://wa.me/6281267228888` |
| Email | lilzbake.id@gmail.com |

## Positioning

LilzBake bukan bakery kekinian biasa — ini adalah bakery yang **sengaja
mengangkat kembali** rasa roti dan cake gaya lama (roti bantal, roti sisir,
roti smeer, cake jadoel) dan menyajikannya dengan standar bahan premium serta
tanpa pengawet. Emosi utama yang dijual bukan "kekinian" tapi **kangen** —
rasa yang mengingatkan pada masa kecil, jajanan pasar, dan bakery langganan
keluarga dulu.

Ini yang membedakan LilzBake dari brand bakery modern minimalis (yang biasanya
pakai warna monokrom/serif tipis ala Eropa). LilzBake harus terasa **hangat,
manis, sedikit sentimental** — seperti membuka kotak kue dari toko roti
langganan keluarga, bukan seperti membuka aplikasi fintech.

## Voice & Tone

- **Hangat & personal**, bukan korporat. Gunakan bahasa Indonesia sehari-hari
  yang sopan tapi tidak kaku — seperti admin toko yang ramah membalas chat.
- **Nostalgic tapi bukan generic**. Hindari kalimat template seperti "kualitas
  terbaik untuk Anda" — gunakan detail konkret (bahan premium, tanpa pengawet,
  resep yang bikin kangen).
- **Percaya diri tanpa berlebihan**. LilzBake premium, bukan mahal-mahalan;
  tonjolkan proses & bahan, bukan klaim kosong.
- Sapaan ke pembaca: campuran "kamu" (santai, hero/CTA) dan "Anda" dihindari
  kecuali di konteks B2B formal (proposal supplier) — di situ boleh sedikit
  lebih formal.
- Hindari ALL CAPS untuk kalimat panjang. ALL CAPS hanya untuk elemen yang
  memang sudah begitu di identitas asli (mis. label pada kemasan: "BAKED WITH
  LOVE", "BREAD | CAKE | SAVOURY") — bukan untuk label section buatan baru.

## Palet Warna

Warna dasar sudah ditentukan dari kemasan LilzBake. Berikut token lengkap
(termasuk turunan yang dibutuhkan untuk kontras & hierarki, diturunkan dari
warna asli, bukan warna generik AI):

| Token | Hex | Peran |
|---|---|---|
| `--color-bg-main` | `#fde5db` | Background utama (hero, section terang) |
| `--color-bg-alt` | `#fadfc9` | Background section selang-seling (kontras lembut dari bg-main) |
| `--color-surface` | `#ffffff` | Kartu, form, elemen mengambang di atas background |
| `--color-text-primary` | `#a16c37` | Heading besar, elemen brand utama |
| `--color-text-secondary` | `#a3692d` | Sub-heading, link, aksen interaktif |
| `--color-text-body` | `#9a6f42` | Body text di atas background krem |
| `--color-text-dark` *(baru, turunan)* | `#5c3a1e` | Body text panjang di atas putih — untuk keterbacaan (kontras lebih tinggi dari 3 warna coklat di atas, dipakai khusus paragraf panjang, bukan menggantikan 3 warna resmi) |
| `--color-accent-gold` *(baru, turunan)* | `#c9974f` | Highlight tipis: underline, border aktif, ikon kecil |
| `--color-ink` *(baru, turunan)* | `#3d2712` | Teks di atas tombol solid coklat (bukan hitam pekat — tetap dalam keluarga coklat brand) |

**Aturan pemakaian:**
- Jangan pernah pakai hitam pekat (`#000000`) atau abu-abu netral generik —
  semua "gelap" di website ini harus tetap coklat hangat (turunan dari
  `#a16c37`/`#5c3a1e`), supaya konsisten dengan garis ilustrasi coklat di
  kemasan.
- Section berselang-seling antara `bg-main` dan `bg-alt` untuk memberi ritme
  scroll tanpa perlu border/shadow tebal.
- `--color-surface` (putih) dipakai terbatas: kartu produk, form kontak,
  video frame — supaya foto produk (yang colorful/keemasan) menonjol.

## Tipografi

| Peran | Font | Alasan |
|---|---|---|
| Display / Heading | **Fraunces** (variable, optical size besar, weight 500–600, sedikit italic untuk aksen) | Serif hangat dengan karakter sedikit "quirky"/vintage — cocok dengan nuansa jadul-premium, bukan serif tipis modern ala fintech |
| Body / UI | **Plus Jakarta Sans** (weight 400/500/600) | Sans-serif humanist, ramah dibaca, kontras jelas dengan Fraunces, terasa modern tapi hangat |

**Aturan tipografi:**
- Headline besar pakai Fraunces weight 500–600, ukuran besar (clamp antara
  36px–72px tergantung breakpoint), letter-spacing sedikit rapat (-1% sampai -2%).
- Tagline "Taste Of Nostalgia" ditulis dengan Fraunces **italic**, weight 500,
  warna `--color-text-secondary` — dipakai sebagai elemen visual berulang
  (hero, footer, watermark halus di gallery), bukan hanya teks biasa.
- Body text: Plus Jakarta Sans 400, ukuran dasar 16–18px, line-height 1.6–1.7,
  lebar baris maksimum ~65–70 karakter.
- **Jangan** gunakan huruf kapital semua (all-caps tracking) untuk label
  section buatan baru (mis. jangan buat "OUR PRODUCTS" atau "TESTIMONIALS" —
  gunakan judul section natural: "Produk Favorit", "Kata Mereka", dst — lihat
  02-CONTENT-COPY.md untuk teks pastinya).
- Skala tipografi disarankan (desktop): H1 64px / H2 40px / H3 28px / Body 17px
  / Small 14px. Mobile: H1 36px / H2 26px / H3 20px / Body 16px / Small 13px.

## Logo & Elemen Visual Kemasan

Logo & pola kemasan (`assets/images/hero-packaging-box.webp`) sudah punya
bahasa visual yang jelas — pertahankan konsistensinya di seluruh website:

- **Wordmark**: "LILZBAKE" huruf kapital, serif, letter-spacing lebar (dipakai
  apa adanya sebagai logo — jangan didesain ulang).
  Ini tandanya di antara section boleh punya sedikit letter-spacing pada
  wordmark saja, karena itu identitas logo, bukan tren all-caps generik.
- **Badge "BAKED WITH LOVE · EST. 2019"** — badge melingkar tipis di kemasan.
  Pertahankan bentuk badge ini untuk elemen "Est. 2019" di header/hero.
- **Tag kategori** dengan separator pipa: "BREAD | CAKE | SAVOURY" — gunakan
  pola pemisah pipa yang sama untuk tag kategori produk baru, mis.
  "ROTI JADUL | CAKE JADOEL | HAMPERS", supaya terasa satu keluarga visual
  dengan kemasan asli.
- **Ilustrasi line-art roti/croissant/roti sisir** coklat tipis yang
  bertaburan di kemasan — jadikan ini motif dekoratif berulang: watermark
  sangat halus (opacity rendah, 4–8%) di background beberapa section, atau
  elemen dekorasi mengambang di sekitar hero image. Jangan pakai clipart
  bakery generik dari luar — gambar ulang motif serupa (garis tipis, gaya
  sketsa tangan) supaya konsisten dengan brand asli.

## Referensi Visual

Client menyukai gaya animasi di [partakefoods.com](https://partakefoods.com/)
— terutama marquee ticker teks berjalan dan komposisi elemen berlapis
(layered/parallax) di hero. Detail teknis lengkap & cara mengadaptasinya ke
nuansa LilzBake (lebih tenang, tidak seceria Partake) ada di
`04-ANIMATION-INTERACTION-SPEC.md` bagian F. Yang diambil dari referensi ini
hanya **tekniknya**, bukan palet warna atau energi visualnya — Partake
ditujukan untuk brand cookies playful anak-anak, sedangkan LilzBake harus
tetap terasa nostalgic-premium.

## Fotografi

- Palet foto: warna keemasan/kuning kecoklatan (crust roti, isian keju),
  latar netral krem/beige polos (lihat `product-roti-bantal.jpg`) atau putih
  bersih (lihat `product-kue-sus.jpg`).
- Sudut foto yang disukai brand: **overhead / flat-lay** (kue sus) dan
  **close-up sejajar produk berjajar** (roti bantal) — pertahankan gaya ini
  untuk foto tambahan yang akan di-shoot.
- Elemen "tangan mengambil produk" (seperti di foto kue sus) memberi kesan
  personal & menggugah selera — dorong penggunaan foto sejenis di galeri.
- Hindari foto dengan properti/background yang ramai — brand ini tenang &
  bersih secara visual, kehangatan datang dari warna & tipografi, bukan dari
  clutter visual.
