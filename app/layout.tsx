import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Evanne Kettering | Portfolio Développeuse Web',
  description: 'Portfolio professionnel d\'Evanne Kettering présentant mes projets, compétences et parcours en développement web avec React, Next.js et TypeScript.',
  metadataBase: new URL('https://monportfolio.com'),
  keywords: ['portfolio développeur', 'développeuse web', 'React', 'Next.js', 'TypeScript', 'frontend', 'Evanne Kettering'],
  authors: [{ name: 'Evanne Kettering' }],
  openGraph: {
    title: 'Evanne Kettering | Portfolio Développeuse Web',
    description: 'Découvrez mes projets et compétences en développement web',
    url: 'https://monportfolio.com',
    siteName: 'Portfolio Evanne Kettering',
    images: [
      {
        url: 'https://monportfolio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Evanne Kettering Portfolio',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evanne Kettering | Portfolio Développeuse Web',
    description: 'Découvrez mes projets et compétences en développement web',
    images: [
      {
        url: 'https://monportfolio.com/og-image.jpg',
        alt: 'Evanne Kettering Portfolio',
      },
    ],
    creator: '@evanne_ktng',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
