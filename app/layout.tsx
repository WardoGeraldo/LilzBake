import type { Metadata } from 'next';
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LilzBake — Roti & Cake Jadoel Premium Surabaya | Taste Of Nostalgia',
  description:
    'LilzBake menghadirkan roti bantal, roti sisir, roti smeer, dan cake jadoel premium tanpa pengawet based in Surabaya. Cocok untuk hampers, oleh-oleh, dan supplier cafe/event.',
  metadataBase: new URL('https://lilzbake.id'),
  openGraph: {
    title: 'LilzBake — Roti & Cake Jadoel Premium Surabaya',
    description:
      'Taste Of Nostalgia — roti dan cake jadoel premium based in Surabaya.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LilzBake — Roti & Cake Jadoel Premium Surabaya',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/apple-touch-icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'LilzBake',
  description:
    'Roti dan cake jadoel premium based in Surabaya, tanpa pengawet, dengan cita rasa nostalgia.',
  areaServed: 'Surabaya, Indonesia',
  telephone: '+6281233336560',
  email: 'lilzbake.id@gmail.com',
  sameAs: ['https://instagram.com/lilzbake'],
  slogan: 'Taste Of Nostalgia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${fraunces.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-bg-main text-text-body selection:bg-bg-alt selection:text-text-dark">
        {children}
      </body>
    </html>
  );
}
