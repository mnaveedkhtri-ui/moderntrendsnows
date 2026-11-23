import './globals.css';
import type { Metadata } from 'next';
import { getStructuredData } from '../lib/structuredData';

export const metadata: Metadata = {
  title: 'Modern Trends Now | Curated Aesthetic Living & Workspace Tech',
  description: 'An editorial design collection of the top 1% viral modern workspace gadgets, ambient lighting, and intelligent everyday carry. Curated for creators, engineers, and minimalist homes.',
  keywords: [
    'modern trends now',
    'aesthetic desk setup',
    'viral tech gadgets',
    'minimalist workspace',
    'smart ambient lighting',
    'desk organization aesthetic',
    'cozy room gadgets 2026'
  ],
  authors: [{ name: 'Modern Trends Now Editorial Studio' }],
  metadataBase: new URL('https://www.moderntrendsnow.store'),
  alternates: {
    canonical: 'https://www.moderntrendsnow.store',
  },
  verification: {
    google: 'JRt7V8qXjJiQM5nW4YmsTcSPwQe_4Mh96AORRorQr0o',
    other: {
      'p:domain_verify': 'a8d45f72fc74186b14b460995c711d27',
    },
  },
  openGraph: {
    title: 'Modern Trends Now | Curated Modern Living & Tech',
    description: 'Minimalist desk setups, ambient luminaires, and kinetic desk sculptures. Curated daily.',
    url: 'https://www.moderntrendsnow.store',
    siteName: 'Modern Trends Now',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Trends Now | Curated Aesthetic Living',
    description: 'The finest viral tech gadgets and workspace accessories curated with zero junk.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = getStructuredData();

  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#08090d] text-slate-100 antialiased selection:bg-amber-400 selection:text-black">
        {structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}
