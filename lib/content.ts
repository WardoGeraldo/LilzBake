import { WA_LINKS } from './whatsapp';

export const BRAND = {
  name: 'LilzBake',
  established: '2019',
  location: 'Surabaya hingga Seluruh Indonesia',
  tagline: 'Taste Of Nostalgia',
  instagram: 'https://instagram.com/lilzbake',
  instagramHandle: '@lilzbake',
  email: 'lilzbake.id@gmail.com',
  phoneAdmin1: '0812-1780-0067',
  phoneAdmin2: '0817-0388-8900',
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
    'Roti dan cake jadul premium based in Surabaya. Dibuat dengan bahan pilihan yang premium, tanpa pengawet, dan resep yang membawa pulang rasa nostalgia.',
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
    'LilzBake lahir dari kerinduan akan rasa roti dan cake jadoel yang lembut, sederhana, dan selalu bikin kangen. Sejak 2019, kami membuat ulang rasa-rasa itu dengan standar yang lebih tinggi: bahan-bahan premium, tanpa bahan pengawet, dan proses yang dikerjakan dengan hati oleh tim kami di Surabaya.',
    'Dari roti bantal yang empuk, roti sisir yang manis legit, roti smeer yang creamy, sampai cake jadoel dalam kemasan hampers yang cantik. Setiap produk LilzBake dibuat untuk satu tujuan sederhana: mengembalikan rasa masa kecil yang sudah lama hilang dari toko roti modern.',
  ],
  values: ['Bahan Premium', 'Tanpa Pengawet', 'Resep Nostalgia'],
  image: '/images/product-roti-sisir.jpg',
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
      'Empuk, gembul, dan lembut sampai suapan terakhir, favorit yang paling sering di repeat order oleh pelanggan LilzBake.',
    image: '/images/product-roti-bantal.jpg',
    alt: 'Roti bantal LilzBake yang empuk dan lembut dengan topping yang memuaskan didalamnya',
  },
  {
    id: 'roti-sisir',
    name: 'Roti Sisir',
    description:
      'Manis legit dengan tekstur lembut khas roti sisir jadoel, roti signature dari LilzBake.',
    image: '/images/product-roti-sisir.jpg',
    alt: 'Roti sisir lembut yang menggiurkan dengan tekstur berserat khas LilzBake',
  },
  {
    id: 'roti-smeer',
    name: 'Roti Smeer',
    description:
      'Olesan buttercream manis dan gurih yang meresap sampai ke dalam roti, sederhana, tapi susah dilupakan.',
    image: '/images/product-roti-smeer.jpg',
    alt: 'Roti smeer LilzBake dengan olesan buttercream yang manis dan gurih',
  },
  {
    id: 'roti-assorted',
    name: 'Roti Assorted',
    description:
      'Kombinasi beberapa rasa favorit dalam satu paket, cocok buat kamu yang nggak bisa milih cuma satu.',
    image: '/images/product-roti-assorted.jpg',
    alt: 'Beragam jenis roti asin dari LilzBake, roti kesayangan anak-anak dan keluarga',
  },
  {
    id: 'kue-sus',
    name: 'Kue Soes',
    description:
      'Kulit tipis renyah, isian vla lembut yang meleleh di mulut, versi premium dari jajanan jadoel kesukaan semua orang.',
    image: '/images/product-kue-sus.jpg',
    alt: 'Kue Soes Signature LilzBake dengan isian vla yang meleleh di mulut',
  },
  {
    id: 'cake-jadoel',
    name: 'Cake Jadoel',
    description:
      'Tekstur padat dan lembut dengan rasa sederhana yang mengingatkan pada cake toko roti langganan keluarga dulu.',
    image: '/images/product-cake-jadoel.jpg',
    alt: 'Cake jadoel LilzBake yang beda dari yang lain, dengan tekstur padat dan lembut khasnya',
  },
  {
    id: 'roti-sobek',
    name: 'Roti Sobek',
    description:
      'Roti lembut yang paling asyik dinikmati beramai-ramai, disobek sepotong demi sepotong bersama orang tersayang.',
    image: '/images/product-roti-sobek.jpg',
    alt: 'Roti sobek LilzBake disobek menampilkan kelembutan tekstur dalamnya',
  },
  {
    id: 'spikoe-kenari',
    name: 'Spikoe Kenari',
    description:
      'Spikoe Kenari khas LilzBake, yang manis, gurih dan lembut. Favorit para lansia.',
    image: '/images/product-spiku-kenari.jpg',
    alt: 'Spikoe Kenari LilzBake dengan tekstur lembut dan rasa gurih yang khas',
  },
];

export const HAMPERS_BANNER = {
  text: 'Semua produk di atas bisa dikemas jadi hampers cantik, cocok untuk hadiah, oleh-oleh, atau acara spesialmu.',
  image: '/images/product-hampers.jpg',
  alt: 'Hampers LilzBake lengkap siap dikirim ke pelanggan',
};

export const GALLERY_ITEMS = [
  {
    slot: 1,
    image: '/images/product-roti-bantal-2.jpg',
    alt: 'Roti bantal LilzBake yang empuk dan lembut dengan topping yang memuaskan didalamnya',
    aspect: 'aspect-[4/5]',
  },
  {
    slot: 2,
    image: '/images/product-roti-sisir-2.jpg',
    alt: 'Roti sisir lembut yang menggiurkan dengan tekstur berserat khas LilzBake',
    aspect: 'aspect-[4/5]',
  },
  {
    slot: 3,
    image: '/images/product-roti-smeer-2.jpg',
    alt: 'Roti smeer LilzBake dengan olesan buttercream yang manis dan gurih',
    aspect: 'aspect-[4/5]',
  },
  {
    slot: 4,
    image: '/images/product-roti-assorted-2.jpg',
    alt: 'Beragam jenis roti asin dari LilzBake, roti kesayangan anak-anak dan keluarga',
    aspect: 'aspect-[4/5]',
  },
  {
    slot: 5,
    image: '/images/product-kue-sus-2.jpg',
    alt: 'Kue Soes Signature LilzBake dengan isian vla yang meleleh di mulut',
    aspect: 'aspect-[4/5]',
  },
  {
    slot: 6,
    image: '/images/product-cake-jadoel.jpg',
    alt: 'Cake jadoel LilzBake yang beda dari yang lain, dengan tekstur padat dan lembut khasnya',
    aspect: 'aspect-[4/5]',
  },
  {
    slot: 7,
    image: '/images/product-roti-sobek.jpg',
    alt: 'Roti sobek LilzBake disobek menampilkan kelembutan tekstur dalamnya',
    aspect: 'aspect-[4/5]',
  },
  {
    slot: 8,
    image: '/images/product-spiku-kenari-2.jpg',
    alt: 'Spikoe Kenari LilzBake dengan tekstur lembut dan rasa gurih yang khas',
    aspect: 'aspect-[4/5]',
  },
  {
    slot: 9,
    image: '/images/product-hampers.jpg',
    alt: 'Hampers LilzBake lengkap siap dikirim ke pelanggan',
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
      'Roti bantalnya beneran bikin kangen masa kecil. Udah langganan dari 2019, nggak pernah kecewa.',
    author: 'Lyvia.',
    location: 'Surabaya',
  },
  {
    id: '2',
    quote:
      'Order buat hampers lebaran keluarga besar, packaging-nya rapi banget dan rasanya konsisten enak. Bakal repeat order sih ini.',
    author: 'Pak Hari',
    location: 'Malang',
  },
  {
    id: '3',
    quote:
      'Kue susnya juara. Vla-nya lembut, nggak eneg. Admin-nya juga fast response banget kalau tanya-tanya.',
    author: 'Melissa.',
    location: 'Surabaya Barat',
  },
  {
    id: '4',
    quote:
      'Langganan buat cafe kami sejak tahun 2022 lalu. Konsisten enak dan selalu tepat waktu, selalu paling cepat sold out di cafe kami.',
    author: 'Bu Ike, Owner Cafe',
    location: 'Surabaya Timur',
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
      'Paket hampers custom untuk pernikahan, ulang tahun, atau acara kantor, dikemas cantik, siap menghadirkan senyuman bagi yang menerimanya.',
    icon: 'gift',
  },
  {
    id: 'catering',
    title: 'Katering Event',
    description:
      'Pesanan dalam jumlah besar untuk acara ulang tahun, pernikahan, seminar, gathering, atau perayaan spesial lainnya.',
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
];
