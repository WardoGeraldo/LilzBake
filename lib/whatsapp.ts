export const ADMIN_1 = '6281217800067';
export const ADMIN_2 = '6281703888900';

export function waLink(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const WA_LINKS = {
  admin1General: waLink(ADMIN_1, 'Halo LilzBake! Aku mau tanya-tanya soal produk kalian 🍞'),
  admin2General: waLink(ADMIN_2, 'Halo LilzBake! Aku mau tanya-tanya soal produk kalian 🍞'),
  b2b: waLink(ADMIN_1, 'Halo LilzBake! Aku tertarik kerja sama sebagai supplier/hampers untuk acara/bisnisku. Boleh minta info lebih lanjut?'),
};
