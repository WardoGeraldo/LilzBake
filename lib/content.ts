import { WA_LINKS } from './whatsapp';

export const BRAND = {
  name: 'LilzBake',
  established: '2019',
  location: 'Surabaya Timur & sekitarnya',
  tagline: 'Taste Of Nostalgia',
  instagram: 'https://instagram.com/lilzbake',
  instagramHandle: '@lilzbake',
  email: 'lilzbake.id@gmail.com',
  phoneAdmin1: '0812-3333-6560',
  phoneAdmin2: '0812-6722-8888',
};

export const NAVBAR_LINKS = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Produk', href: '#produk' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'Untuk Bisnis', href: '#bisnis' },
  { label: 'Kontak', href: '#kontak' },
];

export const HERO_CONTENT = {
  badge: 'Baked With Love · Est. 2019',
  headline: 'Rasa yang Bikin Kangen.',
  tagline: 'Taste Of Nostalgia',
  subheadline:
    'Roti dan cake jadul premium dari Surabaya Timur — dibuat dengan bahan pilihan, tanpa pengawet, dan resep yang membawa pulang rasa masa kecil.',
  primaryCta: 'Pesan via WhatsApp',
  secondaryCta: 'Lihat Produk Kami',
  microCopy: 'Roti Jadoel · Cake Jadoel · Hampers',
  boxImage: '/images/hero-packaging-box.webp',
  boxAlt:
    'Kemasan LilzBake berwarna peach dengan ilustrasi roti dan tulisan Baked With Love Est. 2019',
};

export const TICKER_ITEMS = [
  'Taste Of Nostalgia',
  'Roti Jadoel',
  'Cake Jadoel',
  'Tanpa Pengawet',
  'Bahan Premium',
];

export const ABOUT_CONTENT = {
  badge: 'Sejak 2019',
  title: 'Bakery yang Setia Sama Rasa Lama',
  paragraphs: [
    'LilzBake lahir dari kerinduan akan rasa roti dan cake toko jadul — yang lembut, sederhana, dan selalu bikin kangen. Sejak 2019, kami membuat ulang rasa-rasa itu dengan standar yang lebih tinggi: bahan-bahan premium, tanpa bahan pengawet, dan proses yang dikerjakan dengan hati oleh tim kami di Surabaya Timur.',
    'Dari roti bantal yang empuk, roti sisir yang manis legit, roti smeer yang creamy, sampai cake jadoel dalam kemasan hampers yang cantik — setiap produk LilzBake dibuat untuk satu tujuan sederhana: membuat kamu (atau orang tersayangmu) bergumam, "ini rasanya kayak dulu."',
  ],
  values: ['Bahan Premium', 'Tanpa Pengawet', 'Resep Nostalgia'],
  image: '/images/product-roti-bantal-wide.jpg',
  imageAlt: 'Close-up roti bantal LilzBake yang empuk dan lembut',
};

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'roti-bantal',
    name: 'Roti Bantal',
    description:
      'Empuk, gebul, dan lembut sampai suapan terakhir — favorit yang paling sering diminta ulang oleh pelanggan lama.',
    image: '/images/product-roti-bantal.jpg',
    alt: 'Deretan roti bantal LilzBake dengan topping taburan di atas nampan',
  },
  {
    id: 'roti-sisir',
    name: 'Roti Sisir',
    description:
      'Manis legit dengan tekstur berserat khas roti sisir zaman dulu, dipanggang segar setiap hari.',
    image: '/images/product-roti-sisir.jpg',
    alt: 'Roti sisir LilzBake close-up menampilkan tekstur berserat khasnya',
  },
  {
    id: 'roti-smeer',
    name: 'Roti Smeer',
    description:
      'Olesan mentega dan gula yang meresap sampai ke dalam — sederhana, tapi susah dilupakan.',
    image: '/images/product-roti-smeer.jpg',
    alt: 'Roti smeer LilzBake dengan olesan mentega dan gula yang meresap',
  },
  {
    id: 'roti-assorted',
    name: 'Roti Assorted',
    description:
      'Kombinasi beberapa rasa favorit dalam satu paket, cocok buat kamu yang nggak bisa milih cuma satu.',
    image: '/images/product-roti-assorted.jpg',
    alt: 'Beragam jenis roti jadul LilzBake berjajar dalam satu foto',
  },
  {
    id: 'kue-sus',
    name: 'Kue Sus Vla',
    description:
      'Kulit tipis renyah, isian vla lembut yang meleleh di mulut — versi premium dari jajanan jadul kesukaan semua orang.',
    image: '/images/product-kue-sus.jpg',
    alt: 'Tangan mengambil kue sus LilzBake dari dalam kotak kemasan',
  },
  {
    id: 'cake-jadoel',
    name: 'Cake Jadoel',
    description:
      'Tekstur padat dan lembut dengan rasa sederhana yang mengingatkan pada cake toko roti langganan keluarga dulu.',
    image: '/images/product-cake-jadoel.jpg',
    alt: 'Cake jadoel LilzBake dalam kemasan hampers',
  },
  {
    id: 'roti-sobek',
    name: 'Roti Sobek',
    description:
      'Roti lembut yang paling asyik dinikmati beramai-ramai, disobek sepotong demi sepotong bersama orang tersayang.',
    image: '/images/product-roti-sobek.jpg',
    alt: 'Roti LilzBake disobek menampilkan kelembutan tekstur dalamnya',
  },
  {
    id: 'eclair',
    name: 'Eclair',
    description:
      'Kulit choux renyah dengan isian custard lembut — sentuhan klasik Eropa dalam balutan rasa nostalgia LilzBake.',
    image: '/images/product-eclair.jpg',
    alt: 'Eclair LilzBake dengan lapisan cokelat mengilap di atasnya',
  },
];

export const HAMPERS_BANNER = {
  text: 'Semua produk di atas bisa dikemas jadi hampers cantik — cocok untuk hadiah, oleh-oleh, atau acara spesialmu.',
  image: '/images/product-hampers.jpg',
  alt: 'Paket hampers LilzBake lengkap siap dikirim ke pelanggan',
};

export const GALLERY_ITEMS = [
  {
    slot: 1,
    image: '/images/product-roti-bantal-2.jpg',
    alt: 'Deretan roti bantal LilzBake dengan topping taburan di atas nampan',
    aspect: 'aspect-[4/5]',
  },
  {
    slot: 2,
    image: '/images/product-roti-sisir-2.jpg',
    alt: 'Roti sisir LilzBake close-up menampilkan tekstur berserat khasnya',
    aspect: 'aspect-[4/5]',
  },
  {
    slot: 3,
    image: '/images/product-roti-smeer-2.jpg',
    alt: 'Roti smeer LilzBake dengan olesan mentega dan gula yang meresap',
    aspect: 'aspect-[4/5]',
  },
  {
    slot: 4,
    image: '/images/product-roti-assorted-2.jpg',
    alt: 'Beragam jenis roti jadul LilzBake berjajar dalam satu foto',
    aspect: 'aspect-[4/5]',
  },
  {
    slot: 5,
    image: '/images/product-kue-sus-2.jpg',
    alt: 'Tangan mengambil kue sus LilzBake dari dalam kotak kemasan',
    aspect: 'aspect-[4/5]',
  },
  {
    slot: 6,
    image: '/images/product-cake-jadoel.jpg',
    alt: 'Cake jadoel LilzBake dalam kemasan hampers',
    aspect: 'aspect-[4/5]',
  },
  {
    slot: 7,
    image: '/images/product-roti-sobek.jpg',
    alt: 'Roti LilzBake disobek menampilkan kelembutan tekstur dalamnya',
    aspect: 'aspect-[4/5]',
  },
  {
    slot: 8,
    image: '/images/product-eclair.jpg',
    alt: 'Eclair LilzBake dengan lapisan cokelat mengilap di atasnya',
    aspect: 'aspect-[4/5]',
  },
  {
    slot: 9,
    image: '/images/product-hampers.jpg',
    alt: 'Paket hampers LilzBake lengkap siap dikirim ke pelanggan',
    aspect: 'aspect-[4/5]',
  },
];

export const VIDEOS = [
  {
    id: 'video-1',
    title: 'Proses Pembuatan Roti Sisir',
    src: '/videos/video-sisir.mp4',
    poster: '/images/video-sisir-poster.jpg',
    alt: 'Video proses pembuatan roti sisir LilzBake',
  },
  {
    id: 'video-2',
    title: 'Hampers LilzBake',
    src: '/videos/video-sisir2.mp4',
    poster: '/images/video-sisir2-poster.jpg',
    alt: 'Video unboxing dan kemasan hampers LilzBake',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    quote:
      'Roti bantalnya beneran bikin kangen masa kecil. Udah langganan dari 2021, nggak pernah kecewa.',
    author: 'Dinda R.',
    location: 'Surabaya',
  },
  {
    id: '2',
    quote:
      'Order buat hampers lebaran keluarga besar, packaging-nya rapi banget dan rasanya konsisten enak. Bakal repeat tahun depan.',
    author: 'Pak Hadi',
    location: 'Surabaya Timur',
  },
  {
    id: '3',
    quote:
      'Kue susnya juara. Vla-nya lembut, nggak eneg. Admin-nya juga fast response banget kalau tanya-tanya.',
    author: 'Melissa T.',
    location: 'Sidoarjo',
  },
  {
    id: '4',
    quote:
      'Langganan buat cafe kami sejak setahun lalu. Konsisten enak dan selalu tepat waktu — penting banget buat operasional kami.',
    author: 'Owner Kopi Kenangan',
    location: 'Surabaya',
  },
];

export const B2B_SERVICES = [
  {
    id: 'supplier',
    title: 'Supplier Cafe & Toko',
    description:
      'Pasokan roti dan cake rutin dengan kualitas konsisten untuk kebutuhan harian cafe atau tokomu.',
    icon: 'store',
  },
  {
    id: 'hampers',
    title: 'Hampers & Souvenir Acara',
    description:
      'Paket hampers custom untuk pernikahan, ulang tahun, atau acara kantor — dikemas cantik, siap jadi kenang-kenangan.',
    icon: 'gift',
  },
  {
    id: 'catering',
    title: 'Katering Event',
    description:
      'Pesanan dalam jumlah besar untuk seminar, gathering, atau perayaan spesial lainnya.',
    icon: 'utensils',
  },
];

export const CONTACT_CARDS = [
  {
    id: 'wa1',
    label: 'WhatsApp Admin 1',
    value: '0812-1780-0067',
    href: WA_LINKS.admin1General,
    isExternal: true,
  },
  {
    id: 'wa2',
    label: 'WhatsApp Admin 2',
    value: '0817-0388-8900',
    href: WA_LINKS.admin2General,
    isExternal: true,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: '@lilzbake',
    href: BRAND.instagram,
    isExternal: true,
  },
  {
    id: 'email',
    label: 'Email',
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
    isExternal: false,
  },
  {
    id: 'area',
    label: 'Area Layanan',
    value: 'Surabaya Timur & sekitarnya',
    href: null,
    isExternal: false,
  },
];
